// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#metadata DataK8SIotEclipseOrgDittoV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#spec DataK8SIotEclipseOrgDittoV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpec;
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#annotations DataK8SIotEclipseOrgDittoV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#labels DataK8SIotEclipseOrgDittoV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#namespace DataK8SIotEclipseOrgDittoV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMapToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMap | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMapToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMap | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecretToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecret | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecretToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecret | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPassword {
  /**
  * Selects a key from a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#config_map DataK8SIotEclipseOrgDittoV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMap;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#secret DataK8SIotEclipseOrgDittoV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#value DataK8SIotEclipseOrgDittoV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMapToTerraform(struct!.configMap),
    secret: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMap",
    },
    secret: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecret",
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPassword | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
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
      this._value = value.value;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordConfigMap) {
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
  private _secret = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMapToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMap | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMapToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMap | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecretToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecret | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecretToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecret | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPassword {
  /**
  * Selects a key from a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#config_map DataK8SIotEclipseOrgDittoV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMap;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#secret DataK8SIotEclipseOrgDittoV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#value DataK8SIotEclipseOrgDittoV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMapToTerraform(struct!.configMap),
    secret: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMap",
    },
    secret: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecret",
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPassword | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
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
      this._value = value.value;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordConfigMap) {
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
  private _secret = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#expose DataK8SIotEclipseOrgDittoV1Alpha1Manifest#expose}
  */
  readonly expose?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#insecure DataK8SIotEclipseOrgDittoV1Alpha1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#password DataK8SIotEclipseOrgDittoV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPassword;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#status_password DataK8SIotEclipseOrgDittoV1Alpha1Manifest#status_password}
  */
  readonly statusPassword?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPassword;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expose: cdktf.booleanToTerraform(struct!.expose),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    password: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordToTerraform(struct!.password),
    status_password: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordToTerraform(struct!.statusPassword),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expose: {
      value: cdktf.booleanToHclTerraform(struct!.expose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPassword",
    },
    status_password: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordToHclTerraform(struct!.statusPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expose !== undefined) {
      hasAnyValues = true;
      internalValueResult.expose = this._expose;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._statusPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusPassword = this._statusPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expose = undefined;
      this._insecure = undefined;
      this._password.internalValue = undefined;
      this._statusPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expose = value.expose;
      this._insecure = value.insecure;
      this._password.internalValue = value.password;
      this._statusPassword.internalValue = value.statusPassword;
    }
  }

  // expose - computed: false, optional: true, required: false
  private _expose?: boolean | cdktf.IResolvable; 
  public get expose() {
    return this.getBooleanAttribute('expose');
  }
  public set expose(value: boolean | cdktf.IResolvable) {
    this._expose = value;
  }
  public resetExpose() {
    this._expose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeInput() {
    return this._expose;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // status_password - computed: false, optional: true, required: false
  private _statusPassword = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPasswordOutputReference(this, "status_password");
  public get statusPassword() {
    return this._statusPassword;
  }
  public putStatusPassword(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsStatusPassword) {
    this._statusPassword.internalValue = value;
  }
  public resetStatusPassword() {
    this._statusPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPasswordInput() {
    return this._statusPassword.internalValue;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngress {
  /**
  * Annotations which should be applied to the ingress resources. The annotations will be set to the resource, not merged. All changes done on the ingress resource itself will be overridden. If no annotations are configured, reasonable defaults will be used instead. You can prevent this by setting a single dummy annotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#annotations DataK8SIotEclipseOrgDittoV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The optional ingress class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#class_name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#class_name}
  */
  readonly className?: string;
  /**
  * The host of the ingress resource. This is required if the ingress resource should be created by the operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#host DataK8SIotEclipseOrgDittoV1Alpha1Manifest#host}
  */
  readonly host: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngressToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    class_name: cdktf.stringToTerraform(struct!.className),
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngressToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngress | cdktf.IResolvable): any {
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
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._className = undefined;
      this._host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._className = value.className;
      this._host = value.host;
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

  // class_name - computed: false, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafka {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#consumer_throttling_limit DataK8SIotEclipseOrgDittoV1Alpha1Manifest#consumer_throttling_limit}
  */
  readonly consumerThrottlingLimit?: number;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafkaToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_throttling_limit: cdktf.numberToTerraform(struct!.consumerThrottlingLimit),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafkaToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_throttling_limit: {
      value: cdktf.numberToHclTerraform(struct!.consumerThrottlingLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerThrottlingLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerThrottlingLimit = this._consumerThrottlingLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerThrottlingLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerThrottlingLimit = value.consumerThrottlingLimit;
    }
  }

  // consumer_throttling_limit - computed: false, optional: true, required: false
  private _consumerThrottlingLimit?: number; 
  public get consumerThrottlingLimit() {
    return this.getNumberAttribute('consumer_throttling_limit');
  }
  public set consumerThrottlingLimit(value: number) {
    this._consumerThrottlingLimit = value;
  }
  public resetConsumerThrottlingLimit() {
    this._consumerThrottlingLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerThrottlingLimitInput() {
    return this._consumerThrottlingLimit;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMapToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMap | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMapToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMap | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecretToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecret | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecretToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecret | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientId {
  /**
  * Selects a key from a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#config_map DataK8SIotEclipseOrgDittoV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMap;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#secret DataK8SIotEclipseOrgDittoV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#value DataK8SIotEclipseOrgDittoV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMapToTerraform(struct!.configMap),
    secret: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMap",
    },
    secret: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecret",
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientId | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
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
      this._value = value.value;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdConfigMap) {
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
  private _secret = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMapToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMap | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMapToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMap | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecretToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecret | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecretToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecret | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecret {
  /**
  * Selects a key from a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#config_map DataK8SIotEclipseOrgDittoV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMap;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#secret DataK8SIotEclipseOrgDittoV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#value DataK8SIotEclipseOrgDittoV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMapToTerraform(struct!.configMap),
    secret: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMap",
    },
    secret: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecret",
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecret | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
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
      this._value = value.value;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretConfigMap) {
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
  private _secret = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloak {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#client_id DataK8SIotEclipseOrgDittoV1Alpha1Manifest#client_id}
  */
  readonly clientId: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#client_secret DataK8SIotEclipseOrgDittoV1Alpha1Manifest#client_secret}
  */
  readonly clientSecret: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecret;
  /**
  * Description of this login option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#description DataK8SIotEclipseOrgDittoV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#disable_proxy DataK8SIotEclipseOrgDittoV1Alpha1Manifest#disable_proxy}
  */
  readonly disableProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#groups DataK8SIotEclipseOrgDittoV1Alpha1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * Label when referencing this login option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#label DataK8SIotEclipseOrgDittoV1Alpha1Manifest#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#realm DataK8SIotEclipseOrgDittoV1Alpha1Manifest#realm}
  */
  readonly realm: string;
  /**
  * Allow overriding the redirect URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#redirect_url DataK8SIotEclipseOrgDittoV1Alpha1Manifest#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#url DataK8SIotEclipseOrgDittoV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdToTerraform(struct!.clientId),
    client_secret: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretToTerraform(struct!.clientSecret),
    description: cdktf.stringToTerraform(struct!.description),
    disable_proxy: cdktf.booleanToTerraform(struct!.disableProxy),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    label: cdktf.stringToTerraform(struct!.label),
    realm: cdktf.stringToTerraform(struct!.realm),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientId",
    },
    client_secret: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecret",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.disableProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloak | cdktf.IResolvable | undefined {
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
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxy = this._disableProxy;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloak | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId.internalValue = undefined;
      this._clientSecret.internalValue = undefined;
      this._description = undefined;
      this._disableProxy = undefined;
      this._groups = undefined;
      this._label = undefined;
      this._realm = undefined;
      this._redirectUrl = undefined;
      this._url = undefined;
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
      this._description = value.description;
      this._disableProxy = value.disableProxy;
      this._groups = value.groups;
      this._label = value.label;
      this._realm = value.realm;
      this._redirectUrl = value.redirectUrl;
      this._url = value.url;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientId) {
    this._clientId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
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

  // disable_proxy - computed: false, optional: true, required: false
  private _disableProxy?: boolean | cdktf.IResolvable; 
  public get disableProxy() {
    return this.getBooleanAttribute('disable_proxy');
  }
  public set disableProxy(value: boolean | cdktf.IResolvable) {
    this._disableProxy = value;
  }
  public resetDisableProxy() {
    this._disableProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyInput() {
    return this._disableProxy;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetrics {
  /**
  * Enable metrics integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#enabled DataK8SIotEclipseOrgDittoV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMapToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMap | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMapToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMap | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecretToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecret | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecretToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecret | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabase {
  /**
  * Selects a key from a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#config_map DataK8SIotEclipseOrgDittoV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMap;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#secret DataK8SIotEclipseOrgDittoV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#value DataK8SIotEclipseOrgDittoV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMapToTerraform(struct!.configMap),
    secret: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMap",
    },
    secret: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecret",
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabase | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
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
      this._value = value.value;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseConfigMap) {
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
  private _secret = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMapToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMap | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMapToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMap | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecretToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecret | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecretToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecret | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPassword {
  /**
  * Selects a key from a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#config_map DataK8SIotEclipseOrgDittoV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMap;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#secret DataK8SIotEclipseOrgDittoV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#value DataK8SIotEclipseOrgDittoV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMapToTerraform(struct!.configMap),
    secret: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMap",
    },
    secret: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecret",
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPassword | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
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
      this._value = value.value;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordConfigMap) {
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
  private _secret = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMapToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMap | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMapToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMap | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#key DataK8SIotEclipseOrgDittoV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#name DataK8SIotEclipseOrgDittoV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#optional DataK8SIotEclipseOrgDittoV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecretToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecret | cdktf.IResolvable): any {
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


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecretToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecret | cdktf.IResolvable): any {
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsername {
  /**
  * Selects a key from a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#config_map DataK8SIotEclipseOrgDittoV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMap;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#secret DataK8SIotEclipseOrgDittoV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#value DataK8SIotEclipseOrgDittoV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMapToTerraform(struct!.configMap),
    secret: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMap",
    },
    secret: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecret",
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

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsername | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
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
      this._value = value.value;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameConfigMap) {
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
  private _secret = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDb {
  /**
  * The optional database name used to connect, defaults to 'ditto'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#database DataK8SIotEclipseOrgDittoV1Alpha1Manifest#database}
  */
  readonly database?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabase;
  /**
  * The hostname of the MongoDB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#host DataK8SIotEclipseOrgDittoV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * The password used to connect to the MongoDB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#password DataK8SIotEclipseOrgDittoV1Alpha1Manifest#password}
  */
  readonly password?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPassword;
  /**
  * The port name of the MongoDB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#port DataK8SIotEclipseOrgDittoV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * The username used to connect to the MongoDB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#username DataK8SIotEclipseOrgDittoV1Alpha1Manifest#username}
  */
  readonly username?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsername;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    password: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameToTerraform(struct!.username),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabase",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPassword",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database.internalValue = undefined;
      this._host = undefined;
      this._password.internalValue = undefined;
      this._port = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database.internalValue = value.database;
      this._host = value.host;
      this._password.internalValue = value.password;
      this._port = value.port;
      this._username.internalValue = value.username;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
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

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
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

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbUsername) {
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
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#subjects DataK8SIotEclipseOrgDittoV1Alpha1Manifest#subjects}
  */
  readonly subjects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#url DataK8SIotEclipseOrgDittoV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuersToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subjects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjects),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuersToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subjects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjects = this._subjects;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subjects = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subjects = value.subjects;
      this._url = value.url;
    }
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects?: string[]; 
  public get subjects() {
    return this.getListAttribute('subjects');
  }
  public set subjects(value: string[]) {
    this._subjects = value;
  }
  public resetSubjects() {
    this._subjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#issuers DataK8SIotEclipseOrgDittoV1Alpha1Manifest#issuers}
  */
  readonly issuers?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuers;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuers: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuersToTerraform(struct!.issuers),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuers: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuersToHclTerraform(struct!.issuers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuers = this._issuers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuers.internalValue = value.issuers;
    }
  }

  // issuers - computed: false, optional: true, required: false
  private _issuers = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuersOutputReference(this, "issuers");
  public get issuers() {
    return this._issuers;
  }
  public putIssuers(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthIssuers) {
    this._issuers.internalValue = value;
  }
  public resetIssuers() {
    this._issuers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers.internalValue;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#server_label DataK8SIotEclipseOrgDittoV1Alpha1Manifest#server_label}
  */
  readonly serverLabel?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApiToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_label: cdktf.stringToTerraform(struct!.serverLabel),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApiToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_label: {
      value: cdktf.stringToHclTerraform(struct!.serverLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLabel = this._serverLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverLabel = value.serverLabel;
    }
  }

  // server_label - computed: false, optional: true, required: false
  private _serverLabel?: string; 
  public get serverLabel() {
    return this.getStringAttribute('server_label');
  }
  public set serverLabel(value: string) {
    this._serverLabel = value;
  }
  public resetServerLabel() {
    this._serverLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLabelInput() {
    return this._serverLabel;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#limits DataK8SIotEclipseOrgDittoV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#requests DataK8SIotEclipseOrgDittoV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResourcesToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResourcesToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConcierge {
  /**
  * Additional system properties, which will be appended to the list of system properties. Note: Setting arbitrary system properties may break the deployment and may also not be compatible with future versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#additional_properties DataK8SIotEclipseOrgDittoV1Alpha1Manifest#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Allow configuring the application log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#app_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#app_log_level}
  */
  readonly appLogLevel?: string;
  /**
  * Allow configuring all log levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Number of replicas. Defaults to one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#replicas DataK8SIotEclipseOrgDittoV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Service resource limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#resources DataK8SIotEclipseOrgDittoV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResources;
  /**
  * Allow configuring the root log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#root_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#root_log_level}
  */
  readonly rootLogLevel?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConcierge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    app_log_level: cdktf.stringToTerraform(struct!.appLogLevel),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResourcesToTerraform(struct!.resources),
    root_log_level: cdktf.stringToTerraform(struct!.rootLogLevel),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConcierge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_log_level: {
      value: cdktf.stringToHclTerraform(struct!.appLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResources",
    },
    root_log_level: {
      value: cdktf.stringToHclTerraform(struct!.rootLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConcierge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._appLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLogLevel = this._appLogLevel;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rootLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootLogLevel = this._rootLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConcierge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._appLogLevel = undefined;
      this._logLevel = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._rootLogLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._appLogLevel = value.appLogLevel;
      this._logLevel = value.logLevel;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._rootLogLevel = value.rootLogLevel;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // app_log_level - computed: false, optional: true, required: false
  private _appLogLevel?: string; 
  public get appLogLevel() {
    return this.getStringAttribute('app_log_level');
  }
  public set appLogLevel(value: string) {
    this._appLogLevel = value;
  }
  public resetAppLogLevel() {
    this._appLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLogLevelInput() {
    return this._appLogLevel;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // root_log_level - computed: false, optional: true, required: false
  private _rootLogLevel?: string; 
  public get rootLogLevel() {
    return this.getStringAttribute('root_log_level');
  }
  public set rootLogLevel(value: string) {
    this._rootLogLevel = value;
  }
  public resetRootLogLevel() {
    this._rootLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootLogLevelInput() {
    return this._rootLogLevel;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#limits DataK8SIotEclipseOrgDittoV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#requests DataK8SIotEclipseOrgDittoV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResourcesToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResourcesToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivity {
  /**
  * Additional system properties, which will be appended to the list of system properties. Note: Setting arbitrary system properties may break the deployment and may also not be compatible with future versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#additional_properties DataK8SIotEclipseOrgDittoV1Alpha1Manifest#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Allow configuring the application log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#app_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#app_log_level}
  */
  readonly appLogLevel?: string;
  /**
  * Allow configuring all log levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Number of replicas. Defaults to one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#replicas DataK8SIotEclipseOrgDittoV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Service resource limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#resources DataK8SIotEclipseOrgDittoV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResources;
  /**
  * Allow configuring the root log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#root_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#root_log_level}
  */
  readonly rootLogLevel?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    app_log_level: cdktf.stringToTerraform(struct!.appLogLevel),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResourcesToTerraform(struct!.resources),
    root_log_level: cdktf.stringToTerraform(struct!.rootLogLevel),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_log_level: {
      value: cdktf.stringToHclTerraform(struct!.appLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResources",
    },
    root_log_level: {
      value: cdktf.stringToHclTerraform(struct!.rootLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._appLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLogLevel = this._appLogLevel;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rootLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootLogLevel = this._rootLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._appLogLevel = undefined;
      this._logLevel = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._rootLogLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._appLogLevel = value.appLogLevel;
      this._logLevel = value.logLevel;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._rootLogLevel = value.rootLogLevel;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // app_log_level - computed: false, optional: true, required: false
  private _appLogLevel?: string; 
  public get appLogLevel() {
    return this.getStringAttribute('app_log_level');
  }
  public set appLogLevel(value: string) {
    this._appLogLevel = value;
  }
  public resetAppLogLevel() {
    this._appLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLogLevelInput() {
    return this._appLogLevel;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // root_log_level - computed: false, optional: true, required: false
  private _rootLogLevel?: string; 
  public get rootLogLevel() {
    return this.getStringAttribute('root_log_level');
  }
  public set rootLogLevel(value: string) {
    this._rootLogLevel = value;
  }
  public resetRootLogLevel() {
    this._rootLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootLogLevelInput() {
    return this._rootLogLevel;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#limits DataK8SIotEclipseOrgDittoV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#requests DataK8SIotEclipseOrgDittoV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResourcesToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResourcesToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGateway {
  /**
  * Additional system properties, which will be appended to the list of system properties. Note: Setting arbitrary system properties may break the deployment and may also not be compatible with future versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#additional_properties DataK8SIotEclipseOrgDittoV1Alpha1Manifest#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Allow configuring the application log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#app_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#app_log_level}
  */
  readonly appLogLevel?: string;
  /**
  * Allow configuring all log levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Number of replicas. Defaults to one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#replicas DataK8SIotEclipseOrgDittoV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Service resource limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#resources DataK8SIotEclipseOrgDittoV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResources;
  /**
  * Allow configuring the root log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#root_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#root_log_level}
  */
  readonly rootLogLevel?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    app_log_level: cdktf.stringToTerraform(struct!.appLogLevel),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResourcesToTerraform(struct!.resources),
    root_log_level: cdktf.stringToTerraform(struct!.rootLogLevel),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_log_level: {
      value: cdktf.stringToHclTerraform(struct!.appLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResources",
    },
    root_log_level: {
      value: cdktf.stringToHclTerraform(struct!.rootLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._appLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLogLevel = this._appLogLevel;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rootLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootLogLevel = this._rootLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._appLogLevel = undefined;
      this._logLevel = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._rootLogLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._appLogLevel = value.appLogLevel;
      this._logLevel = value.logLevel;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._rootLogLevel = value.rootLogLevel;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // app_log_level - computed: false, optional: true, required: false
  private _appLogLevel?: string; 
  public get appLogLevel() {
    return this.getStringAttribute('app_log_level');
  }
  public set appLogLevel(value: string) {
    this._appLogLevel = value;
  }
  public resetAppLogLevel() {
    this._appLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLogLevelInput() {
    return this._appLogLevel;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // root_log_level - computed: false, optional: true, required: false
  private _rootLogLevel?: string; 
  public get rootLogLevel() {
    return this.getStringAttribute('root_log_level');
  }
  public set rootLogLevel(value: string) {
    this._rootLogLevel = value;
  }
  public resetRootLogLevel() {
    this._rootLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootLogLevelInput() {
    return this._rootLogLevel;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#limits DataK8SIotEclipseOrgDittoV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#requests DataK8SIotEclipseOrgDittoV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResourcesToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResourcesToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPolicies {
  /**
  * Additional system properties, which will be appended to the list of system properties. Note: Setting arbitrary system properties may break the deployment and may also not be compatible with future versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#additional_properties DataK8SIotEclipseOrgDittoV1Alpha1Manifest#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Allow configuring the application log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#app_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#app_log_level}
  */
  readonly appLogLevel?: string;
  /**
  * Allow configuring all log levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Number of replicas. Defaults to one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#replicas DataK8SIotEclipseOrgDittoV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Service resource limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#resources DataK8SIotEclipseOrgDittoV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResources;
  /**
  * Allow configuring the root log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#root_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#root_log_level}
  */
  readonly rootLogLevel?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    app_log_level: cdktf.stringToTerraform(struct!.appLogLevel),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResourcesToTerraform(struct!.resources),
    root_log_level: cdktf.stringToTerraform(struct!.rootLogLevel),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_log_level: {
      value: cdktf.stringToHclTerraform(struct!.appLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResources",
    },
    root_log_level: {
      value: cdktf.stringToHclTerraform(struct!.rootLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._appLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLogLevel = this._appLogLevel;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rootLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootLogLevel = this._rootLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._appLogLevel = undefined;
      this._logLevel = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._rootLogLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._appLogLevel = value.appLogLevel;
      this._logLevel = value.logLevel;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._rootLogLevel = value.rootLogLevel;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // app_log_level - computed: false, optional: true, required: false
  private _appLogLevel?: string; 
  public get appLogLevel() {
    return this.getStringAttribute('app_log_level');
  }
  public set appLogLevel(value: string) {
    this._appLogLevel = value;
  }
  public resetAppLogLevel() {
    this._appLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLogLevelInput() {
    return this._appLogLevel;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // root_log_level - computed: false, optional: true, required: false
  private _rootLogLevel?: string; 
  public get rootLogLevel() {
    return this.getStringAttribute('root_log_level');
  }
  public set rootLogLevel(value: string) {
    this._rootLogLevel = value;
  }
  public resetRootLogLevel() {
    this._rootLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootLogLevelInput() {
    return this._rootLogLevel;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#limits DataK8SIotEclipseOrgDittoV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#requests DataK8SIotEclipseOrgDittoV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResourcesToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResourcesToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThings {
  /**
  * Additional system properties, which will be appended to the list of system properties. Note: Setting arbitrary system properties may break the deployment and may also not be compatible with future versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#additional_properties DataK8SIotEclipseOrgDittoV1Alpha1Manifest#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Allow configuring the application log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#app_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#app_log_level}
  */
  readonly appLogLevel?: string;
  /**
  * Allow configuring all log levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Number of replicas. Defaults to one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#replicas DataK8SIotEclipseOrgDittoV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Service resource limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#resources DataK8SIotEclipseOrgDittoV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResources;
  /**
  * Allow configuring the root log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#root_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#root_log_level}
  */
  readonly rootLogLevel?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    app_log_level: cdktf.stringToTerraform(struct!.appLogLevel),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResourcesToTerraform(struct!.resources),
    root_log_level: cdktf.stringToTerraform(struct!.rootLogLevel),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_log_level: {
      value: cdktf.stringToHclTerraform(struct!.appLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResources",
    },
    root_log_level: {
      value: cdktf.stringToHclTerraform(struct!.rootLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._appLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLogLevel = this._appLogLevel;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rootLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootLogLevel = this._rootLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._appLogLevel = undefined;
      this._logLevel = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._rootLogLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._appLogLevel = value.appLogLevel;
      this._logLevel = value.logLevel;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._rootLogLevel = value.rootLogLevel;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // app_log_level - computed: false, optional: true, required: false
  private _appLogLevel?: string; 
  public get appLogLevel() {
    return this.getStringAttribute('app_log_level');
  }
  public set appLogLevel(value: string) {
    this._appLogLevel = value;
  }
  public resetAppLogLevel() {
    this._appLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLogLevelInput() {
    return this._appLogLevel;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // root_log_level - computed: false, optional: true, required: false
  private _rootLogLevel?: string; 
  public get rootLogLevel() {
    return this.getStringAttribute('root_log_level');
  }
  public set rootLogLevel(value: string) {
    this._rootLogLevel = value;
  }
  public resetRootLogLevel() {
    this._rootLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootLogLevelInput() {
    return this._rootLogLevel;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#limits DataK8SIotEclipseOrgDittoV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#requests DataK8SIotEclipseOrgDittoV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResourcesToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResourcesToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearch {
  /**
  * Additional system properties, which will be appended to the list of system properties. Note: Setting arbitrary system properties may break the deployment and may also not be compatible with future versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#additional_properties DataK8SIotEclipseOrgDittoV1Alpha1Manifest#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Allow configuring the application log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#app_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#app_log_level}
  */
  readonly appLogLevel?: string;
  /**
  * Allow configuring all log levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Number of replicas. Defaults to one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#replicas DataK8SIotEclipseOrgDittoV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Service resource limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#resources DataK8SIotEclipseOrgDittoV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResources;
  /**
  * Allow configuring the root log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#root_log_level DataK8SIotEclipseOrgDittoV1Alpha1Manifest#root_log_level}
  */
  readonly rootLogLevel?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    app_log_level: cdktf.stringToTerraform(struct!.appLogLevel),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResourcesToTerraform(struct!.resources),
    root_log_level: cdktf.stringToTerraform(struct!.rootLogLevel),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_log_level: {
      value: cdktf.stringToHclTerraform(struct!.appLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResources",
    },
    root_log_level: {
      value: cdktf.stringToHclTerraform(struct!.rootLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._appLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLogLevel = this._appLogLevel;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rootLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootLogLevel = this._rootLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._appLogLevel = undefined;
      this._logLevel = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._rootLogLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._appLogLevel = value.appLogLevel;
      this._logLevel = value.logLevel;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._rootLogLevel = value.rootLogLevel;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // app_log_level - computed: false, optional: true, required: false
  private _appLogLevel?: string; 
  public get appLogLevel() {
    return this.getStringAttribute('app_log_level');
  }
  public set appLogLevel(value: string) {
    this._appLogLevel = value;
  }
  public resetAppLogLevel() {
    this._appLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLogLevelInput() {
    return this._appLogLevel;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // root_log_level - computed: false, optional: true, required: false
  private _rootLogLevel?: string; 
  public get rootLogLevel() {
    return this.getStringAttribute('root_log_level');
  }
  public set rootLogLevel(value: string) {
    this._rootLogLevel = value;
  }
  public resetRootLogLevel() {
    this._rootLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootLogLevelInput() {
    return this._rootLogLevel;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServices {
  /**
  * The concierge service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#concierge DataK8SIotEclipseOrgDittoV1Alpha1Manifest#concierge}
  */
  readonly concierge?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConcierge;
  /**
  * The connectivity service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#connectivity DataK8SIotEclipseOrgDittoV1Alpha1Manifest#connectivity}
  */
  readonly connectivity?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivity;
  /**
  * The gateway service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#gateway DataK8SIotEclipseOrgDittoV1Alpha1Manifest#gateway}
  */
  readonly gateway?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGateway;
  /**
  * The policies service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#policies DataK8SIotEclipseOrgDittoV1Alpha1Manifest#policies}
  */
  readonly policies?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPolicies;
  /**
  * The things service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#things DataK8SIotEclipseOrgDittoV1Alpha1Manifest#things}
  */
  readonly things?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThings;
  /**
  * The things search service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#things_search DataK8SIotEclipseOrgDittoV1Alpha1Manifest#things_search}
  */
  readonly thingsSearch?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearch;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concierge: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeToTerraform(struct!.concierge),
    connectivity: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityToTerraform(struct!.connectivity),
    gateway: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayToTerraform(struct!.gateway),
    policies: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesToTerraform(struct!.policies),
    things: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsToTerraform(struct!.things),
    things_search: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchToTerraform(struct!.thingsSearch),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concierge: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeToHclTerraform(struct!.concierge),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConcierge",
    },
    connectivity: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityToHclTerraform(struct!.connectivity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivity",
    },
    gateway: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGateway",
    },
    policies: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPolicies",
    },
    things: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsToHclTerraform(struct!.things),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThings",
    },
    things_search: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchToHclTerraform(struct!.thingsSearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concierge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concierge = this._concierge?.internalValue;
    }
    if (this._connectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._things?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.things = this._things?.internalValue;
    }
    if (this._thingsSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingsSearch = this._thingsSearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concierge.internalValue = undefined;
      this._connectivity.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._things.internalValue = undefined;
      this._thingsSearch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concierge.internalValue = value.concierge;
      this._connectivity.internalValue = value.connectivity;
      this._gateway.internalValue = value.gateway;
      this._policies.internalValue = value.policies;
      this._things.internalValue = value.things;
      this._thingsSearch.internalValue = value.thingsSearch;
    }
  }

  // concierge - computed: false, optional: true, required: false
  private _concierge = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConciergeOutputReference(this, "concierge");
  public get concierge() {
    return this._concierge;
  }
  public putConcierge(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConcierge) {
    this._concierge.internalValue = value;
  }
  public resetConcierge() {
    this._concierge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conciergeInput() {
    return this._concierge.internalValue;
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivityOutputReference(this, "connectivity");
  public get connectivity() {
    return this._connectivity;
  }
  public putConnectivity(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesConnectivity) {
    this._connectivity.internalValue = value;
  }
  public resetConnectivity() {
    this._connectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // things - computed: false, optional: true, required: false
  private _things = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsOutputReference(this, "things");
  public get things() {
    return this._things;
  }
  public putThings(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThings) {
    this._things.internalValue = value;
  }
  public resetThings() {
    this._things.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingsInput() {
    return this._things.internalValue;
  }

  // things_search - computed: false, optional: true, required: false
  private _thingsSearch = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearchOutputReference(this, "things_search");
  public get thingsSearch() {
    return this._thingsSearch;
  }
  public putThingsSearch(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesThingsSearch) {
    this._thingsSearch.internalValue = value;
  }
  public resetThingsSearch() {
    this._thingsSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingsSearchInput() {
    return this._thingsSearch.internalValue;
  }
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#disable DataK8SIotEclipseOrgDittoV1Alpha1Manifest#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#image DataK8SIotEclipseOrgDittoV1Alpha1Manifest#image}
  */
  readonly image?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUiToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUiToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._image = value.image;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
}
export interface DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpec {
  /**
  * Create the default 'ditto' user when initially deploying. This has no effect when using OAuth2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#create_default_user DataK8SIotEclipseOrgDittoV1Alpha1Manifest#create_default_user}
  */
  readonly createDefaultUser?: boolean | cdktf.IResolvable;
  /**
  * Devops endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#devops DataK8SIotEclipseOrgDittoV1Alpha1Manifest#devops}
  */
  readonly devops?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevops;
  /**
  * Don't expose infra endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#disable_infra_proxy DataK8SIotEclipseOrgDittoV1Alpha1Manifest#disable_infra_proxy}
  */
  readonly disableInfraProxy?: boolean | cdktf.IResolvable;
  /**
  * Allow disabling the welcome page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#disable_welcome_page DataK8SIotEclipseOrgDittoV1Alpha1Manifest#disable_welcome_page}
  */
  readonly disableWelcomePage?: boolean | cdktf.IResolvable;
  /**
  * Configure ingress options If the field is missing, no ingress resource is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#ingress DataK8SIotEclipseOrgDittoV1Alpha1Manifest#ingress}
  */
  readonly ingress?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngress;
  /**
  * Kafka options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#kafka DataK8SIotEclipseOrgDittoV1Alpha1Manifest#kafka}
  */
  readonly kafka?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafka;
  /**
  * Enable and configure keycloak integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#keycloak DataK8SIotEclipseOrgDittoV1Alpha1Manifest#keycloak}
  */
  readonly keycloak?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloak;
  /**
  * Metrics configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#metrics DataK8SIotEclipseOrgDittoV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#mongo_db DataK8SIotEclipseOrgDittoV1Alpha1Manifest#mongo_db}
  */
  readonly mongoDb?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDb;
  /**
  * Provide additional OAuth configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#oauth DataK8SIotEclipseOrgDittoV1Alpha1Manifest#oauth}
  */
  readonly oauth?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauth;
  /**
  * Influence some options of the hosted OpenAPI spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#open_api DataK8SIotEclipseOrgDittoV1Alpha1Manifest#open_api}
  */
  readonly openApi?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApi;
  /**
  * Override the imagePullPolicy By default this will use Always if the image version is ':latest' and IfNotPresent otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#pull_policy DataK8SIotEclipseOrgDittoV1Alpha1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Allow to override the Ditto container registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#registry DataK8SIotEclipseOrgDittoV1Alpha1Manifest#registry}
  */
  readonly registry?: string;
  /**
  * Services configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#services DataK8SIotEclipseOrgDittoV1Alpha1Manifest#services}
  */
  readonly services?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServices;
  /**
  * Influence some options of the hosted SwaggerUI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#swagger_ui DataK8SIotEclipseOrgDittoV1Alpha1Manifest#swagger_ui}
  */
  readonly swaggerUi?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUi;
  /**
  * Allow to override the Ditto image version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#version DataK8SIotEclipseOrgDittoV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecToTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_default_user: cdktf.booleanToTerraform(struct!.createDefaultUser),
    devops: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsToTerraform(struct!.devops),
    disable_infra_proxy: cdktf.booleanToTerraform(struct!.disableInfraProxy),
    disable_welcome_page: cdktf.booleanToTerraform(struct!.disableWelcomePage),
    ingress: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngressToTerraform(struct!.ingress),
    kafka: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafkaToTerraform(struct!.kafka),
    keycloak: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakToTerraform(struct!.keycloak),
    metrics: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetricsToTerraform(struct!.metrics),
    mongo_db: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbToTerraform(struct!.mongoDb),
    oauth: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthToTerraform(struct!.oauth),
    open_api: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApiToTerraform(struct!.openApi),
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    registry: cdktf.stringToTerraform(struct!.registry),
    services: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesToTerraform(struct!.services),
    swagger_ui: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUiToTerraform(struct!.swaggerUi),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_default_user: {
      value: cdktf.booleanToHclTerraform(struct!.createDefaultUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devops: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsToHclTerraform(struct!.devops),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevops",
    },
    disable_infra_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.disableInfraProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_welcome_page: {
      value: cdktf.booleanToHclTerraform(struct!.disableWelcomePage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngress",
    },
    kafka: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafka",
    },
    keycloak: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakToHclTerraform(struct!.keycloak),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloak",
    },
    metrics: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetrics",
    },
    mongo_db: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbToHclTerraform(struct!.mongoDb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDb",
    },
    oauth: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthToHclTerraform(struct!.oauth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauth",
    },
    open_api: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApiToHclTerraform(struct!.openApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApi",
    },
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServices",
    },
    swagger_ui: {
      value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUiToHclTerraform(struct!.swaggerUi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUi",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createDefaultUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDefaultUser = this._createDefaultUser;
    }
    if (this._devops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devops = this._devops?.internalValue;
    }
    if (this._disableInfraProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInfraProxy = this._disableInfraProxy;
    }
    if (this._disableWelcomePage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWelcomePage = this._disableWelcomePage;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._keycloak?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keycloak = this._keycloak?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._mongoDb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoDb = this._mongoDb?.internalValue;
    }
    if (this._oauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth = this._oauth?.internalValue;
    }
    if (this._openApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApi = this._openApi?.internalValue;
    }
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._swaggerUi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.swaggerUi = this._swaggerUi?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createDefaultUser = undefined;
      this._devops.internalValue = undefined;
      this._disableInfraProxy = undefined;
      this._disableWelcomePage = undefined;
      this._ingress.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._keycloak.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._mongoDb.internalValue = undefined;
      this._oauth.internalValue = undefined;
      this._openApi.internalValue = undefined;
      this._pullPolicy = undefined;
      this._registry = undefined;
      this._services.internalValue = undefined;
      this._swaggerUi.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createDefaultUser = value.createDefaultUser;
      this._devops.internalValue = value.devops;
      this._disableInfraProxy = value.disableInfraProxy;
      this._disableWelcomePage = value.disableWelcomePage;
      this._ingress.internalValue = value.ingress;
      this._kafka.internalValue = value.kafka;
      this._keycloak.internalValue = value.keycloak;
      this._metrics.internalValue = value.metrics;
      this._mongoDb.internalValue = value.mongoDb;
      this._oauth.internalValue = value.oauth;
      this._openApi.internalValue = value.openApi;
      this._pullPolicy = value.pullPolicy;
      this._registry = value.registry;
      this._services.internalValue = value.services;
      this._swaggerUi.internalValue = value.swaggerUi;
      this._version = value.version;
    }
  }

  // create_default_user - computed: false, optional: true, required: false
  private _createDefaultUser?: boolean | cdktf.IResolvable; 
  public get createDefaultUser() {
    return this.getBooleanAttribute('create_default_user');
  }
  public set createDefaultUser(value: boolean | cdktf.IResolvable) {
    this._createDefaultUser = value;
  }
  public resetCreateDefaultUser() {
    this._createDefaultUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultUserInput() {
    return this._createDefaultUser;
  }

  // devops - computed: false, optional: true, required: false
  private _devops = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevopsOutputReference(this, "devops");
  public get devops() {
    return this._devops;
  }
  public putDevops(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecDevops) {
    this._devops.internalValue = value;
  }
  public resetDevops() {
    this._devops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devopsInput() {
    return this._devops.internalValue;
  }

  // disable_infra_proxy - computed: false, optional: true, required: false
  private _disableInfraProxy?: boolean | cdktf.IResolvable; 
  public get disableInfraProxy() {
    return this.getBooleanAttribute('disable_infra_proxy');
  }
  public set disableInfraProxy(value: boolean | cdktf.IResolvable) {
    this._disableInfraProxy = value;
  }
  public resetDisableInfraProxy() {
    this._disableInfraProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInfraProxyInput() {
    return this._disableInfraProxy;
  }

  // disable_welcome_page - computed: false, optional: true, required: false
  private _disableWelcomePage?: boolean | cdktf.IResolvable; 
  public get disableWelcomePage() {
    return this.getBooleanAttribute('disable_welcome_page');
  }
  public set disableWelcomePage(value: boolean | cdktf.IResolvable) {
    this._disableWelcomePage = value;
  }
  public resetDisableWelcomePage() {
    this._disableWelcomePage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWelcomePageInput() {
    return this._disableWelcomePage;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // keycloak - computed: false, optional: true, required: false
  private _keycloak = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloakOutputReference(this, "keycloak");
  public get keycloak() {
    return this._keycloak;
  }
  public putKeycloak(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecKeycloak) {
    this._keycloak.internalValue = value;
  }
  public resetKeycloak() {
    this._keycloak.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keycloakInput() {
    return this._keycloak.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // mongo_db - computed: false, optional: true, required: false
  private _mongoDb = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDbOutputReference(this, "mongo_db");
  public get mongoDb() {
    return this._mongoDb;
  }
  public putMongoDb(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecMongoDb) {
    this._mongoDb.internalValue = value;
  }
  public resetMongoDb() {
    this._mongoDb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbInput() {
    return this._mongoDb.internalValue;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOauth) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }

  // open_api - computed: false, optional: true, required: false
  private _openApi = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApiOutputReference(this, "open_api");
  public get openApi() {
    return this._openApi;
  }
  public putOpenApi(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOpenApi) {
    this._openApi.internalValue = value;
  }
  public resetOpenApi() {
    this._openApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiInput() {
    return this._openApi.internalValue;
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // swagger_ui - computed: false, optional: true, required: false
  private _swaggerUi = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUiOutputReference(this, "swagger_ui");
  public get swaggerUi() {
    return this._swaggerUi;
  }
  public putSwaggerUi(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecSwaggerUi) {
    this._swaggerUi.internalValue = value;
  }
  public resetSwaggerUi() {
    this._swaggerUi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swaggerUiInput() {
    return this._swaggerUi.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest k8s_iot_eclipse_org_ditto_v1alpha1_manifest}
*/
export class DataK8SIotEclipseOrgDittoV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_iot_eclipse_org_ditto_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SIotEclipseOrgDittoV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SIotEclipseOrgDittoV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SIotEclipseOrgDittoV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SIotEclipseOrgDittoV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_iot_eclipse_org_ditto_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/iot_eclipse_org_ditto_v1alpha1_manifest k8s_iot_eclipse_org_ditto_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SIotEclipseOrgDittoV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SIotEclipseOrgDittoV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_iot_eclipse_org_ditto_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpec) {
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
      metadata: dataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SIotEclipseOrgDittoV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SIotEclipseOrgDittoV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
