// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGlooSoloIoProxyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#metadata DataK8SGlooSoloIoProxyV1Manifest#metadata}
  */
  readonly metadata: DataK8SGlooSoloIoProxyV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#spec DataK8SGlooSoloIoProxyV1Manifest#spec}
  */
  readonly spec?: DataK8SGlooSoloIoProxyV1ManifestSpec;
}
export interface DataK8SGlooSoloIoProxyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#annotations DataK8SGlooSoloIoProxyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#labels DataK8SGlooSoloIoProxyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#name DataK8SGlooSoloIoProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#namespace DataK8SGlooSoloIoProxyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestMetadataToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGlooSoloIoProxyV1ManifestMetadataToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoProxyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#name DataK8SGlooSoloIoProxyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#namespace DataK8SGlooSoloIoProxyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRefToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRefToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRef | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#observed_generation DataK8SGlooSoloIoProxyV1Manifest#observed_generation}
  */
  readonly observedGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#resource_kind DataK8SGlooSoloIoProxyV1Manifest#resource_kind}
  */
  readonly resourceKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#resource_ref DataK8SGlooSoloIoProxyV1Manifest#resource_ref}
  */
  readonly resourceRef?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRef;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observed_generation: cdktf.numberToTerraform(struct!.observedGeneration),
    resource_kind: cdktf.stringToTerraform(struct!.resourceKind),
    resource_ref: dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRefToTerraform(struct!.resourceRef),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    observed_generation: {
      value: cdktf.numberToHclTerraform(struct!.observedGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_kind: {
      value: cdktf.stringToHclTerraform(struct!.resourceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_ref: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRefToHclTerraform(struct!.resourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observedGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.observedGeneration = this._observedGeneration;
    }
    if (this._resourceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceKind = this._resourceKind;
    }
    if (this._resourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRef = this._resourceRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._observedGeneration = undefined;
      this._resourceKind = undefined;
      this._resourceRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._observedGeneration = value.observedGeneration;
      this._resourceKind = value.resourceKind;
      this._resourceRef.internalValue = value.resourceRef;
    }
  }

  // observed_generation - computed: false, optional: true, required: false
  private _observedGeneration?: number; 
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }
  public set observedGeneration(value: number) {
    this._observedGeneration = value;
  }
  public resetObservedGeneration() {
    this._observedGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observedGenerationInput() {
    return this._observedGeneration;
  }

  // resource_kind - computed: false, optional: true, required: false
  private _resourceKind?: string; 
  public get resourceKind() {
    return this.getStringAttribute('resource_kind');
  }
  public set resourceKind(value: string) {
    this._resourceKind = value;
  }
  public resetResourceKind() {
    this._resourceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceKindInput() {
    return this._resourceKind;
  }

  // resource_ref - computed: false, optional: true, required: false
  private _resourceRef = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRefOutputReference(this, "resource_ref");
  public get resourceRef() {
    return this._resourceRef;
  }
  public putResourceRef(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesResourceRef) {
    this._resourceRef.internalValue = value;
  }
  public resetResourceRef() {
    this._resourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRefInput() {
    return this._resourceRef.internalValue;
  }
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesOutputReference {
    return new DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStatic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#sources DataK8SGlooSoloIoProxyV1Manifest#sources}
  */
  readonly sources?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSources[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sources: cdktf.listMapper(dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sources: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sources.internalValue = value.sources;
    }
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#json_format DataK8SGlooSoloIoProxyV1Manifest#json_format}
  */
  readonly jsonFormat?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#path DataK8SGlooSoloIoProxyV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#string_format DataK8SGlooSoloIoProxyV1Manifest#string_format}
  */
  readonly stringFormat?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSinkToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_format: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jsonFormat),
    path: cdktf.stringToTerraform(struct!.path),
    string_format: cdktf.stringToTerraform(struct!.stringFormat),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSinkToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_format: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jsonFormat),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_format: {
      value: cdktf.stringToHclTerraform(struct!.stringFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFormat = this._jsonFormat;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._stringFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFormat = this._stringFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonFormat = undefined;
      this._path = undefined;
      this._stringFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonFormat = value.jsonFormat;
      this._path = value.path;
      this._stringFormat = value.stringFormat;
    }
  }

  // json_format - computed: false, optional: true, required: false
  private _jsonFormat?: { [key: string]: string }; 
  public get jsonFormat() {
    return this.getStringMapAttribute('json_format');
  }
  public set jsonFormat(value: { [key: string]: string }) {
    this._jsonFormat = value;
  }
  public resetJsonFormat() {
    this._jsonFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFormatInput() {
    return this._jsonFormat;
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

  // string_format - computed: false, optional: true, required: false
  private _stringFormat?: string; 
  public get stringFormat() {
    return this.getStringAttribute('string_format');
  }
  public set stringFormat(value: string) {
    this._stringFormat = value;
  }
  public resetStringFormat() {
    this._stringFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFormatInput() {
    return this._stringFormat;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#default_value DataK8SGlooSoloIoProxyV1Manifest#default_value}
  */
  readonly defaultValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#runtime_key DataK8SGlooSoloIoProxyV1Manifest#runtime_key}
  */
  readonly runtimeKey?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.numberToTerraform(struct!.defaultValue),
    runtime_key: cdktf.stringToTerraform(struct!.runtimeKey),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.numberToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_key: {
      value: cdktf.stringToHclTerraform(struct!.runtimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._runtimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeKey = this._runtimeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._runtimeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._runtimeKey = value.runtimeKey;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: number; 
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }
  public set defaultValue(value: number) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // runtime_key - computed: false, optional: true, required: false
  private _runtimeKey?: string; 
  public get runtimeKey() {
    return this.getStringAttribute('runtime_key');
  }
  public set runtimeKey(value: string) {
    this._runtimeKey = value;
  }
  public resetRuntimeKey() {
    this._runtimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeKeyInput() {
    return this._runtimeKey;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparison {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#op DataK8SGlooSoloIoProxyV1Manifest#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#value DataK8SGlooSoloIoProxyV1Manifest#value}
  */
  readonly value?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value.internalValue = value.value;
    }
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue) {
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
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#comparison DataK8SGlooSoloIoProxyV1Manifest#comparison}
  */
  readonly comparison?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparison;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonToTerraform(struct!.comparison),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonToHclTerraform(struct!.comparison),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparison",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison.internalValue = value.comparison;
    }
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparisonOutputReference(this, "comparison");
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterComparison) {
    this._comparison.internalValue = value;
  }
  public resetComparison() {
    this._comparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#exclude DataK8SGlooSoloIoProxyV1Manifest#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#statuses DataK8SGlooSoloIoProxyV1Manifest#statuses}
  */
  readonly statuses?: string[];
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._statuses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._statuses = value.statuses;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#end DataK8SGlooSoloIoProxyV1Manifest#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#start DataK8SGlooSoloIoProxyV1Manifest#start}
  */
  readonly start?: number;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#max_program_size DataK8SGlooSoloIoProxyV1Manifest#max_program_size}
  */
  readonly maxProgramSize?: number;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2ToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_program_size: cdktf.numberToTerraform(struct!.maxProgramSize),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2ToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_program_size: {
      value: cdktf.numberToHclTerraform(struct!.maxProgramSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxProgramSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProgramSize = this._maxProgramSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxProgramSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxProgramSize = value.maxProgramSize;
    }
  }

  // max_program_size - computed: false, optional: true, required: false
  private _maxProgramSize?: number; 
  public get maxProgramSize() {
    return this.getNumberAttribute('max_program_size');
  }
  public set maxProgramSize(value: number) {
    this._maxProgramSize = value;
  }
  public resetMaxProgramSize() {
    this._maxProgramSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProgramSizeInput() {
    return this._maxProgramSize;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#google_re2 DataK8SGlooSoloIoProxyV1Manifest#google_re2}
  */
  readonly googleRe2?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#regex DataK8SGlooSoloIoProxyV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_re2: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2ToTerraform(struct!.googleRe2),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_re2: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2ToHclTerraform(struct!.googleRe2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleRe2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleRe2 = this._googleRe2?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._googleRe2.internalValue = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._googleRe2.internalValue = value.googleRe2;
      this._regex = value.regex;
    }
  }

  // google_re2 - computed: false, optional: true, required: false
  private _googleRe2 = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2OutputReference(this, "google_re2");
  public get googleRe2() {
    return this._googleRe2;
  }
  public putGoogleRe2(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2) {
    this._googleRe2.internalValue = value;
  }
  public resetGoogleRe2() {
    this._googleRe2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleRe2Input() {
    return this._googleRe2.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#exact_match DataK8SGlooSoloIoProxyV1Manifest#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#invert_match DataK8SGlooSoloIoProxyV1Manifest#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#name DataK8SGlooSoloIoProxyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#prefix_match DataK8SGlooSoloIoProxyV1Manifest#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#present_match DataK8SGlooSoloIoProxyV1Manifest#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#range_match DataK8SGlooSoloIoProxyV1Manifest#range_match}
  */
  readonly rangeMatch?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#safe_regex_match DataK8SGlooSoloIoProxyV1Manifest#safe_regex_match}
  */
  readonly safeRegexMatch?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#suffix_match DataK8SGlooSoloIoProxyV1Manifest#suffix_match}
  */
  readonly suffixMatch?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    range_match: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchToTerraform(struct!.rangeMatch),
    safe_regex_match: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchToTerraform(struct!.safeRegexMatch),
    suffix_match: cdktf.stringToTerraform(struct!.suffixMatch),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present_match: {
      value: cdktf.booleanToHclTerraform(struct!.presentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range_match: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchToHclTerraform(struct!.rangeMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch",
    },
    safe_regex_match: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchToHclTerraform(struct!.safeRegexMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch",
    },
    suffix_match: {
      value: cdktf.stringToHclTerraform(struct!.suffixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._rangeMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMatch = this._rangeMatch?.internalValue;
    }
    if (this._safeRegexMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeRegexMatch = this._safeRegexMatch?.internalValue;
    }
    if (this._suffixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixMatch = this._suffixMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._invertMatch = undefined;
      this._name = undefined;
      this._prefixMatch = undefined;
      this._presentMatch = undefined;
      this._rangeMatch.internalValue = undefined;
      this._safeRegexMatch.internalValue = undefined;
      this._suffixMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._invertMatch = value.invertMatch;
      this._name = value.name;
      this._prefixMatch = value.prefixMatch;
      this._presentMatch = value.presentMatch;
      this._rangeMatch.internalValue = value.rangeMatch;
      this._safeRegexMatch.internalValue = value.safeRegexMatch;
      this._suffixMatch = value.suffixMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
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

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktf.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktf.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // range_match - computed: false, optional: true, required: false
  private _rangeMatch = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchOutputReference(this, "range_match");
  public get rangeMatch() {
    return this._rangeMatch;
  }
  public putRangeMatch(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch) {
    this._rangeMatch.internalValue = value;
  }
  public resetRangeMatch() {
    this._rangeMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMatchInput() {
    return this._rangeMatch.internalValue;
  }

  // safe_regex_match - computed: false, optional: true, required: false
  private _safeRegexMatch = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchOutputReference(this, "safe_regex_match");
  public get safeRegexMatch() {
    return this._safeRegexMatch;
  }
  public putSafeRegexMatch(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch) {
    this._safeRegexMatch.internalValue = value;
  }
  public resetSafeRegexMatch() {
    this._safeRegexMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeRegexMatchInput() {
    return this._safeRegexMatch.internalValue;
  }

  // suffix_match - computed: false, optional: true, required: false
  private _suffixMatch?: string; 
  public get suffixMatch() {
    return this.getStringAttribute('suffix_match');
  }
  public set suffixMatch(value: string) {
    this._suffixMatch = value;
  }
  public resetSuffixMatch() {
    this._suffixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixMatchInput() {
    return this._suffixMatch;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#header DataK8SGlooSoloIoProxyV1Manifest#header}
  */
  readonly header?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeader;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderToTerraform(struct!.header),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeader",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#flags DataK8SGlooSoloIoProxyV1Manifest#flags}
  */
  readonly flags?: string[];
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
    }
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#denominator DataK8SGlooSoloIoProxyV1Manifest#denominator}
  */
  readonly denominator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#numerator DataK8SGlooSoloIoProxyV1Manifest#numerator}
  */
  readonly numerator?: number;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    numerator: cdktf.numberToTerraform(struct!.numerator),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denominator: {
      value: cdktf.stringToHclTerraform(struct!.denominator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numerator: {
      value: cdktf.numberToHclTerraform(struct!.numerator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denominator = undefined;
      this._numerator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denominator = value.denominator;
      this._numerator = value.numerator;
    }
  }

  // denominator - computed: false, optional: true, required: false
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  public resetDenominator() {
    this._denominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // numerator - computed: false, optional: true, required: false
  private _numerator?: number; 
  public get numerator() {
    return this.getNumberAttribute('numerator');
  }
  public set numerator(value: number) {
    this._numerator = value;
  }
  public resetNumerator() {
    this._numerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#percent_sampled DataK8SGlooSoloIoProxyV1Manifest#percent_sampled}
  */
  readonly percentSampled?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#runtime_key DataK8SGlooSoloIoProxyV1Manifest#runtime_key}
  */
  readonly runtimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#use_independent_randomness DataK8SGlooSoloIoProxyV1Manifest#use_independent_randomness}
  */
  readonly useIndependentRandomness?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_sampled: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledToTerraform(struct!.percentSampled),
    runtime_key: cdktf.stringToTerraform(struct!.runtimeKey),
    use_independent_randomness: cdktf.booleanToTerraform(struct!.useIndependentRandomness),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent_sampled: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledToHclTerraform(struct!.percentSampled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled",
    },
    runtime_key: {
      value: cdktf.stringToHclTerraform(struct!.runtimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_independent_randomness: {
      value: cdktf.booleanToHclTerraform(struct!.useIndependentRandomness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentSampled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentSampled = this._percentSampled?.internalValue;
    }
    if (this._runtimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeKey = this._runtimeKey;
    }
    if (this._useIndependentRandomness !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIndependentRandomness = this._useIndependentRandomness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentSampled.internalValue = undefined;
      this._runtimeKey = undefined;
      this._useIndependentRandomness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentSampled.internalValue = value.percentSampled;
      this._runtimeKey = value.runtimeKey;
      this._useIndependentRandomness = value.useIndependentRandomness;
    }
  }

  // percent_sampled - computed: false, optional: true, required: false
  private _percentSampled = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledOutputReference(this, "percent_sampled");
  public get percentSampled() {
    return this._percentSampled;
  }
  public putPercentSampled(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled) {
    this._percentSampled.internalValue = value;
  }
  public resetPercentSampled() {
    this._percentSampled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentSampledInput() {
    return this._percentSampled.internalValue;
  }

  // runtime_key - computed: false, optional: true, required: false
  private _runtimeKey?: string; 
  public get runtimeKey() {
    return this.getStringAttribute('runtime_key');
  }
  public set runtimeKey(value: string) {
    this._runtimeKey = value;
  }
  public resetRuntimeKey() {
    this._runtimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeKeyInput() {
    return this._runtimeKey;
  }

  // use_independent_randomness - computed: false, optional: true, required: false
  private _useIndependentRandomness?: boolean | cdktf.IResolvable; 
  public get useIndependentRandomness() {
    return this.getBooleanAttribute('use_independent_randomness');
  }
  public set useIndependentRandomness(value: boolean | cdktf.IResolvable) {
    this._useIndependentRandomness = value;
  }
  public resetUseIndependentRandomness() {
    this._useIndependentRandomness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIndependentRandomnessInput() {
    return this._useIndependentRandomness;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#default_value DataK8SGlooSoloIoProxyV1Manifest#default_value}
  */
  readonly defaultValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#runtime_key DataK8SGlooSoloIoProxyV1Manifest#runtime_key}
  */
  readonly runtimeKey?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.numberToTerraform(struct!.defaultValue),
    runtime_key: cdktf.stringToTerraform(struct!.runtimeKey),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.numberToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_key: {
      value: cdktf.stringToHclTerraform(struct!.runtimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._runtimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeKey = this._runtimeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._runtimeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._runtimeKey = value.runtimeKey;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: number; 
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }
  public set defaultValue(value: number) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // runtime_key - computed: false, optional: true, required: false
  private _runtimeKey?: string; 
  public get runtimeKey() {
    return this.getStringAttribute('runtime_key');
  }
  public set runtimeKey(value: string) {
    this._runtimeKey = value;
  }
  public resetRuntimeKey() {
    this._runtimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeKeyInput() {
    return this._runtimeKey;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#op DataK8SGlooSoloIoProxyV1Manifest#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#value DataK8SGlooSoloIoProxyV1Manifest#value}
  */
  readonly value?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value.internalValue = value.value;
    }
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue) {
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
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#comparison DataK8SGlooSoloIoProxyV1Manifest#comparison}
  */
  readonly comparison?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonToTerraform(struct!.comparison),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonToHclTerraform(struct!.comparison),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison.internalValue = value.comparison;
    }
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonOutputReference(this, "comparison");
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison) {
    this._comparison.internalValue = value;
  }
  public resetComparison() {
    this._comparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#and_filter DataK8SGlooSoloIoProxyV1Manifest#and_filter}
  */
  readonly andFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#duration_filter DataK8SGlooSoloIoProxyV1Manifest#duration_filter}
  */
  readonly durationFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#grpc_status_filter DataK8SGlooSoloIoProxyV1Manifest#grpc_status_filter}
  */
  readonly grpcStatusFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#header_filter DataK8SGlooSoloIoProxyV1Manifest#header_filter}
  */
  readonly headerFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#not_health_check_filter DataK8SGlooSoloIoProxyV1Manifest#not_health_check_filter}
  */
  readonly notHealthCheckFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#or_filter DataK8SGlooSoloIoProxyV1Manifest#or_filter}
  */
  readonly orFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#response_flag_filter DataK8SGlooSoloIoProxyV1Manifest#response_flag_filter}
  */
  readonly responseFlagFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#runtime_filter DataK8SGlooSoloIoProxyV1Manifest#runtime_filter}
  */
  readonly runtimeFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#status_code_filter DataK8SGlooSoloIoProxyV1Manifest#status_code_filter}
  */
  readonly statusCodeFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#traceable_filter DataK8SGlooSoloIoProxyV1Manifest#traceable_filter}
  */
  readonly traceableFilter?: { [key: string]: string };
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.andFilter),
    duration_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterToTerraform(struct!.durationFilter),
    grpc_status_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilterToTerraform(struct!.grpcStatusFilter),
    header_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterToTerraform(struct!.headerFilter),
    not_health_check_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.notHealthCheckFilter),
    or_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.orFilter),
    response_flag_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilterToTerraform(struct!.responseFlagFilter),
    runtime_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterToTerraform(struct!.runtimeFilter),
    status_code_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterToTerraform(struct!.statusCodeFilter),
    traceable_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.traceableFilter),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.andFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    duration_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterToHclTerraform(struct!.durationFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilter",
    },
    grpc_status_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilterToHclTerraform(struct!.grpcStatusFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilter",
    },
    header_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterToHclTerraform(struct!.headerFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilter",
    },
    not_health_check_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.notHealthCheckFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.orFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    response_flag_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilterToHclTerraform(struct!.responseFlagFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilter",
    },
    runtime_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterToHclTerraform(struct!.runtimeFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilter",
    },
    status_code_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterToHclTerraform(struct!.statusCodeFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilter",
    },
    traceable_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.traceableFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.andFilter = this._andFilter;
    }
    if (this._durationFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationFilter = this._durationFilter?.internalValue;
    }
    if (this._grpcStatusFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcStatusFilter = this._grpcStatusFilter?.internalValue;
    }
    if (this._headerFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilter = this._headerFilter?.internalValue;
    }
    if (this._notHealthCheckFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notHealthCheckFilter = this._notHealthCheckFilter;
    }
    if (this._orFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.orFilter = this._orFilter;
    }
    if (this._responseFlagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFlagFilter = this._responseFlagFilter?.internalValue;
    }
    if (this._runtimeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeFilter = this._runtimeFilter?.internalValue;
    }
    if (this._statusCodeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeFilter = this._statusCodeFilter?.internalValue;
    }
    if (this._traceableFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceableFilter = this._traceableFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andFilter = undefined;
      this._durationFilter.internalValue = undefined;
      this._grpcStatusFilter.internalValue = undefined;
      this._headerFilter.internalValue = undefined;
      this._notHealthCheckFilter = undefined;
      this._orFilter = undefined;
      this._responseFlagFilter.internalValue = undefined;
      this._runtimeFilter.internalValue = undefined;
      this._statusCodeFilter.internalValue = undefined;
      this._traceableFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andFilter = value.andFilter;
      this._durationFilter.internalValue = value.durationFilter;
      this._grpcStatusFilter.internalValue = value.grpcStatusFilter;
      this._headerFilter.internalValue = value.headerFilter;
      this._notHealthCheckFilter = value.notHealthCheckFilter;
      this._orFilter = value.orFilter;
      this._responseFlagFilter.internalValue = value.responseFlagFilter;
      this._runtimeFilter.internalValue = value.runtimeFilter;
      this._statusCodeFilter.internalValue = value.statusCodeFilter;
      this._traceableFilter = value.traceableFilter;
    }
  }

  // and_filter - computed: false, optional: true, required: false
  private _andFilter?: { [key: string]: string }; 
  public get andFilter() {
    return this.getStringMapAttribute('and_filter');
  }
  public set andFilter(value: { [key: string]: string }) {
    this._andFilter = value;
  }
  public resetAndFilter() {
    this._andFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andFilterInput() {
    return this._andFilter;
  }

  // duration_filter - computed: false, optional: true, required: false
  private _durationFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilterOutputReference(this, "duration_filter");
  public get durationFilter() {
    return this._durationFilter;
  }
  public putDurationFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterDurationFilter) {
    this._durationFilter.internalValue = value;
  }
  public resetDurationFilter() {
    this._durationFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationFilterInput() {
    return this._durationFilter.internalValue;
  }

  // grpc_status_filter - computed: false, optional: true, required: false
  private _grpcStatusFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilterOutputReference(this, "grpc_status_filter");
  public get grpcStatusFilter() {
    return this._grpcStatusFilter;
  }
  public putGrpcStatusFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterGrpcStatusFilter) {
    this._grpcStatusFilter.internalValue = value;
  }
  public resetGrpcStatusFilter() {
    this._grpcStatusFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcStatusFilterInput() {
    return this._grpcStatusFilter.internalValue;
  }

  // header_filter - computed: false, optional: true, required: false
  private _headerFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilterOutputReference(this, "header_filter");
  public get headerFilter() {
    return this._headerFilter;
  }
  public putHeaderFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterHeaderFilter) {
    this._headerFilter.internalValue = value;
  }
  public resetHeaderFilter() {
    this._headerFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterInput() {
    return this._headerFilter.internalValue;
  }

  // not_health_check_filter - computed: false, optional: true, required: false
  private _notHealthCheckFilter?: { [key: string]: string }; 
  public get notHealthCheckFilter() {
    return this.getStringMapAttribute('not_health_check_filter');
  }
  public set notHealthCheckFilter(value: { [key: string]: string }) {
    this._notHealthCheckFilter = value;
  }
  public resetNotHealthCheckFilter() {
    this._notHealthCheckFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notHealthCheckFilterInput() {
    return this._notHealthCheckFilter;
  }

  // or_filter - computed: false, optional: true, required: false
  private _orFilter?: { [key: string]: string }; 
  public get orFilter() {
    return this.getStringMapAttribute('or_filter');
  }
  public set orFilter(value: { [key: string]: string }) {
    this._orFilter = value;
  }
  public resetOrFilter() {
    this._orFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orFilterInput() {
    return this._orFilter;
  }

  // response_flag_filter - computed: false, optional: true, required: false
  private _responseFlagFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilterOutputReference(this, "response_flag_filter");
  public get responseFlagFilter() {
    return this._responseFlagFilter;
  }
  public putResponseFlagFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterResponseFlagFilter) {
    this._responseFlagFilter.internalValue = value;
  }
  public resetResponseFlagFilter() {
    this._responseFlagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFlagFilterInput() {
    return this._responseFlagFilter.internalValue;
  }

  // runtime_filter - computed: false, optional: true, required: false
  private _runtimeFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilterOutputReference(this, "runtime_filter");
  public get runtimeFilter() {
    return this._runtimeFilter;
  }
  public putRuntimeFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterRuntimeFilter) {
    this._runtimeFilter.internalValue = value;
  }
  public resetRuntimeFilter() {
    this._runtimeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeFilterInput() {
    return this._runtimeFilter.internalValue;
  }

  // status_code_filter - computed: false, optional: true, required: false
  private _statusCodeFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilterOutputReference(this, "status_code_filter");
  public get statusCodeFilter() {
    return this._statusCodeFilter;
  }
  public putStatusCodeFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterStatusCodeFilter) {
    this._statusCodeFilter.internalValue = value;
  }
  public resetStatusCodeFilter() {
    this._statusCodeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeFilterInput() {
    return this._statusCodeFilter.internalValue;
  }

  // traceable_filter - computed: false, optional: true, required: false
  private _traceableFilter?: { [key: string]: string }; 
  public get traceableFilter() {
    return this.getStringMapAttribute('traceable_filter');
  }
  public set traceableFilter(value: { [key: string]: string }) {
    this._traceableFilter = value;
  }
  public resetTraceableFilter() {
    this._traceableFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceableFilterInput() {
    return this._traceableFilter;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#additional_request_headers_to_log DataK8SGlooSoloIoProxyV1Manifest#additional_request_headers_to_log}
  */
  readonly additionalRequestHeadersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#additional_response_headers_to_log DataK8SGlooSoloIoProxyV1Manifest#additional_response_headers_to_log}
  */
  readonly additionalResponseHeadersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#additional_response_trailers_to_log DataK8SGlooSoloIoProxyV1Manifest#additional_response_trailers_to_log}
  */
  readonly additionalResponseTrailersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#log_name DataK8SGlooSoloIoProxyV1Manifest#log_name}
  */
  readonly logName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#static_cluster_name DataK8SGlooSoloIoProxyV1Manifest#static_cluster_name}
  */
  readonly staticClusterName?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcServiceToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_request_headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRequestHeadersToLog),
    additional_response_headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalResponseHeadersToLog),
    additional_response_trailers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalResponseTrailersToLog),
    log_name: cdktf.stringToTerraform(struct!.logName),
    static_cluster_name: cdktf.stringToTerraform(struct!.staticClusterName),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcServiceToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_request_headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRequestHeadersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_response_headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalResponseHeadersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_response_trailers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalResponseTrailersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_name: {
      value: cdktf.stringToHclTerraform(struct!.logName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.staticClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRequestHeadersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRequestHeadersToLog = this._additionalRequestHeadersToLog;
    }
    if (this._additionalResponseHeadersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalResponseHeadersToLog = this._additionalResponseHeadersToLog;
    }
    if (this._additionalResponseTrailersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalResponseTrailersToLog = this._additionalResponseTrailersToLog;
    }
    if (this._logName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logName = this._logName;
    }
    if (this._staticClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticClusterName = this._staticClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRequestHeadersToLog = undefined;
      this._additionalResponseHeadersToLog = undefined;
      this._additionalResponseTrailersToLog = undefined;
      this._logName = undefined;
      this._staticClusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalRequestHeadersToLog = value.additionalRequestHeadersToLog;
      this._additionalResponseHeadersToLog = value.additionalResponseHeadersToLog;
      this._additionalResponseTrailersToLog = value.additionalResponseTrailersToLog;
      this._logName = value.logName;
      this._staticClusterName = value.staticClusterName;
    }
  }

  // additional_request_headers_to_log - computed: false, optional: true, required: false
  private _additionalRequestHeadersToLog?: string[]; 
  public get additionalRequestHeadersToLog() {
    return this.getListAttribute('additional_request_headers_to_log');
  }
  public set additionalRequestHeadersToLog(value: string[]) {
    this._additionalRequestHeadersToLog = value;
  }
  public resetAdditionalRequestHeadersToLog() {
    this._additionalRequestHeadersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRequestHeadersToLogInput() {
    return this._additionalRequestHeadersToLog;
  }

  // additional_response_headers_to_log - computed: false, optional: true, required: false
  private _additionalResponseHeadersToLog?: string[]; 
  public get additionalResponseHeadersToLog() {
    return this.getListAttribute('additional_response_headers_to_log');
  }
  public set additionalResponseHeadersToLog(value: string[]) {
    this._additionalResponseHeadersToLog = value;
  }
  public resetAdditionalResponseHeadersToLog() {
    this._additionalResponseHeadersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalResponseHeadersToLogInput() {
    return this._additionalResponseHeadersToLog;
  }

  // additional_response_trailers_to_log - computed: false, optional: true, required: false
  private _additionalResponseTrailersToLog?: string[]; 
  public get additionalResponseTrailersToLog() {
    return this.getListAttribute('additional_response_trailers_to_log');
  }
  public set additionalResponseTrailersToLog(value: string[]) {
    this._additionalResponseTrailersToLog = value;
  }
  public resetAdditionalResponseTrailersToLog() {
    this._additionalResponseTrailersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalResponseTrailersToLogInput() {
    return this._additionalResponseTrailersToLog;
  }

  // log_name - computed: false, optional: true, required: false
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  public resetLogName() {
    this._logName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
  }

  // static_cluster_name - computed: false, optional: true, required: false
  private _staticClusterName?: string; 
  public get staticClusterName() {
    return this.getStringAttribute('static_cluster_name');
  }
  public set staticClusterName(value: string) {
    this._staticClusterName = value;
  }
  public resetStaticClusterName() {
    this._staticClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticClusterNameInput() {
    return this._staticClusterName;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#file_sink DataK8SGlooSoloIoProxyV1Manifest#file_sink}
  */
  readonly fileSink?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSink;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#filter DataK8SGlooSoloIoProxyV1Manifest#filter}
  */
  readonly filter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#grpc_service DataK8SGlooSoloIoProxyV1Manifest#grpc_service}
  */
  readonly grpcService?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcService;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_sink: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSinkToTerraform(struct!.fileSink),
    filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterToTerraform(struct!.filter),
    grpc_service: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcServiceToTerraform(struct!.grpcService),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_sink: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSinkToHclTerraform(struct!.fileSink),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSink",
    },
    filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilter",
    },
    grpc_service: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcServiceToHclTerraform(struct!.grpcService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSink = this._fileSink?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._grpcService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcService = this._grpcService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSink.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._grpcService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSink.internalValue = value.fileSink;
      this._filter.internalValue = value.filter;
      this._grpcService.internalValue = value.grpcService;
    }
  }

  // file_sink - computed: false, optional: true, required: false
  private _fileSink = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSinkOutputReference(this, "file_sink");
  public get fileSink() {
    return this._fileSink;
  }
  public putFileSink(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFileSink) {
    this._fileSink.internalValue = value;
  }
  public resetFileSink() {
    this._fileSink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSinkInput() {
    return this._fileSink.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // grpc_service - computed: false, optional: true, required: false
  private _grpcService = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcServiceOutputReference(this, "grpc_service");
  public get grpcService() {
    return this._grpcService;
  }
  public putGrpcService(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogGrpcService) {
    this._grpcService.internalValue = value;
  }
  public resetGrpcService() {
    this._grpcService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceInput() {
    return this._grpcService.internalValue;
  }
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLog[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogOutputReference {
    return new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#access_log DataK8SGlooSoloIoProxyV1Manifest#access_log}
  */
  readonly accessLog?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLog[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: cdktf.listMapper(dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogToTerraform, false)(struct!.accessLog),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogToHclTerraform, false)(struct!.accessLog),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLog.internalValue = value.accessLog;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLogList(this, "access_log", false);
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceAccessLog[] | cdktf.IResolvable) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#exact_balance DataK8SGlooSoloIoProxyV1Manifest#exact_balance}
  */
  readonly exactBalance?: { [key: string]: string };
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfigToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_balance: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.exactBalance),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfigToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_balance: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.exactBalance),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactBalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactBalance = this._exactBalance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactBalance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactBalance = value.exactBalance;
    }
  }

  // exact_balance - computed: false, optional: true, required: false
  private _exactBalance?: { [key: string]: string }; 
  public get exactBalance() {
    return this.getStringMapAttribute('exact_balance');
  }
  public set exactBalance(value: { [key: string]: string }) {
    this._exactBalance = value;
  }
  public resetExactBalance() {
    this._exactBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactBalanceInput() {
    return this._exactBalance;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#configs DataK8SGlooSoloIoProxyV1Manifest#configs}
  */
  readonly configs?: { [key: string]: string };
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensionsToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configs),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensionsToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configs !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configs = value.configs;
    }
  }

  // configs - computed: false, optional: true, required: false
  private _configs?: { [key: string]: string }; 
  public get configs() {
    return this.getStringMapAttribute('configs');
  }
  public set configs(value: { [key: string]: string }) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#json_format DataK8SGlooSoloIoProxyV1Manifest#json_format}
  */
  readonly jsonFormat?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#path DataK8SGlooSoloIoProxyV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#string_format DataK8SGlooSoloIoProxyV1Manifest#string_format}
  */
  readonly stringFormat?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSinkToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_format: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.jsonFormat),
    path: cdktf.stringToTerraform(struct!.path),
    string_format: cdktf.stringToTerraform(struct!.stringFormat),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSinkToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_format: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.jsonFormat),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_format: {
      value: cdktf.stringToHclTerraform(struct!.stringFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFormat = this._jsonFormat;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._stringFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringFormat = this._stringFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonFormat = undefined;
      this._path = undefined;
      this._stringFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonFormat = value.jsonFormat;
      this._path = value.path;
      this._stringFormat = value.stringFormat;
    }
  }

  // json_format - computed: false, optional: true, required: false
  private _jsonFormat?: { [key: string]: string }; 
  public get jsonFormat() {
    return this.getStringMapAttribute('json_format');
  }
  public set jsonFormat(value: { [key: string]: string }) {
    this._jsonFormat = value;
  }
  public resetJsonFormat() {
    this._jsonFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFormatInput() {
    return this._jsonFormat;
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

  // string_format - computed: false, optional: true, required: false
  private _stringFormat?: string; 
  public get stringFormat() {
    return this.getStringAttribute('string_format');
  }
  public set stringFormat(value: string) {
    this._stringFormat = value;
  }
  public resetStringFormat() {
    this._stringFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringFormatInput() {
    return this._stringFormat;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#default_value DataK8SGlooSoloIoProxyV1Manifest#default_value}
  */
  readonly defaultValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#runtime_key DataK8SGlooSoloIoProxyV1Manifest#runtime_key}
  */
  readonly runtimeKey?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.numberToTerraform(struct!.defaultValue),
    runtime_key: cdktf.stringToTerraform(struct!.runtimeKey),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.numberToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_key: {
      value: cdktf.stringToHclTerraform(struct!.runtimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._runtimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeKey = this._runtimeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._runtimeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._runtimeKey = value.runtimeKey;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: number; 
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }
  public set defaultValue(value: number) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // runtime_key - computed: false, optional: true, required: false
  private _runtimeKey?: string; 
  public get runtimeKey() {
    return this.getStringAttribute('runtime_key');
  }
  public set runtimeKey(value: string) {
    this._runtimeKey = value;
  }
  public resetRuntimeKey() {
    this._runtimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeKeyInput() {
    return this._runtimeKey;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparison {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#op DataK8SGlooSoloIoProxyV1Manifest#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#value DataK8SGlooSoloIoProxyV1Manifest#value}
  */
  readonly value?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value.internalValue = value.value;
    }
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonValue) {
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
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#comparison DataK8SGlooSoloIoProxyV1Manifest#comparison}
  */
  readonly comparison?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparison;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonToTerraform(struct!.comparison),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonToHclTerraform(struct!.comparison),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparison",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison.internalValue = value.comparison;
    }
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparisonOutputReference(this, "comparison");
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterComparison) {
    this._comparison.internalValue = value;
  }
  public resetComparison() {
    this._comparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#exclude DataK8SGlooSoloIoProxyV1Manifest#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#statuses DataK8SGlooSoloIoProxyV1Manifest#statuses}
  */
  readonly statuses?: string[];
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.statuses),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.statuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._statuses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._statuses = value.statuses;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: string[]; 
  public get statuses() {
    return this.getListAttribute('statuses');
  }
  public set statuses(value: string[]) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#end DataK8SGlooSoloIoProxyV1Manifest#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#start DataK8SGlooSoloIoProxyV1Manifest#start}
  */
  readonly start?: number;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#max_program_size DataK8SGlooSoloIoProxyV1Manifest#max_program_size}
  */
  readonly maxProgramSize?: number;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2ToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_program_size: cdktf.numberToTerraform(struct!.maxProgramSize),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2ToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_program_size: {
      value: cdktf.numberToHclTerraform(struct!.maxProgramSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxProgramSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProgramSize = this._maxProgramSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxProgramSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxProgramSize = value.maxProgramSize;
    }
  }

  // max_program_size - computed: false, optional: true, required: false
  private _maxProgramSize?: number; 
  public get maxProgramSize() {
    return this.getNumberAttribute('max_program_size');
  }
  public set maxProgramSize(value: number) {
    this._maxProgramSize = value;
  }
  public resetMaxProgramSize() {
    this._maxProgramSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProgramSizeInput() {
    return this._maxProgramSize;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#google_re2 DataK8SGlooSoloIoProxyV1Manifest#google_re2}
  */
  readonly googleRe2?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#regex DataK8SGlooSoloIoProxyV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_re2: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2ToTerraform(struct!.googleRe2),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_re2: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2ToHclTerraform(struct!.googleRe2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleRe2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleRe2 = this._googleRe2?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._googleRe2.internalValue = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._googleRe2.internalValue = value.googleRe2;
      this._regex = value.regex;
    }
  }

  // google_re2 - computed: false, optional: true, required: false
  private _googleRe2 = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2OutputReference(this, "google_re2");
  public get googleRe2() {
    return this._googleRe2;
  }
  public putGoogleRe2(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchGoogleRe2) {
    this._googleRe2.internalValue = value;
  }
  public resetGoogleRe2() {
    this._googleRe2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleRe2Input() {
    return this._googleRe2.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#exact_match DataK8SGlooSoloIoProxyV1Manifest#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#invert_match DataK8SGlooSoloIoProxyV1Manifest#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#name DataK8SGlooSoloIoProxyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#prefix_match DataK8SGlooSoloIoProxyV1Manifest#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#present_match DataK8SGlooSoloIoProxyV1Manifest#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#range_match DataK8SGlooSoloIoProxyV1Manifest#range_match}
  */
  readonly rangeMatch?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#safe_regex_match DataK8SGlooSoloIoProxyV1Manifest#safe_regex_match}
  */
  readonly safeRegexMatch?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#suffix_match DataK8SGlooSoloIoProxyV1Manifest#suffix_match}
  */
  readonly suffixMatch?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    name: cdktf.stringToTerraform(struct!.name),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    range_match: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchToTerraform(struct!.rangeMatch),
    safe_regex_match: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchToTerraform(struct!.safeRegexMatch),
    suffix_match: cdktf.stringToTerraform(struct!.suffixMatch),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present_match: {
      value: cdktf.booleanToHclTerraform(struct!.presentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range_match: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchToHclTerraform(struct!.rangeMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch",
    },
    safe_regex_match: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchToHclTerraform(struct!.safeRegexMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch",
    },
    suffix_match: {
      value: cdktf.stringToHclTerraform(struct!.suffixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._rangeMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMatch = this._rangeMatch?.internalValue;
    }
    if (this._safeRegexMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeRegexMatch = this._safeRegexMatch?.internalValue;
    }
    if (this._suffixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixMatch = this._suffixMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._invertMatch = undefined;
      this._name = undefined;
      this._prefixMatch = undefined;
      this._presentMatch = undefined;
      this._rangeMatch.internalValue = undefined;
      this._safeRegexMatch.internalValue = undefined;
      this._suffixMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._invertMatch = value.invertMatch;
      this._name = value.name;
      this._prefixMatch = value.prefixMatch;
      this._presentMatch = value.presentMatch;
      this._rangeMatch.internalValue = value.rangeMatch;
      this._safeRegexMatch.internalValue = value.safeRegexMatch;
      this._suffixMatch = value.suffixMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
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

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktf.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktf.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // range_match - computed: false, optional: true, required: false
  private _rangeMatch = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatchOutputReference(this, "range_match");
  public get rangeMatch() {
    return this._rangeMatch;
  }
  public putRangeMatch(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderRangeMatch) {
    this._rangeMatch.internalValue = value;
  }
  public resetRangeMatch() {
    this._rangeMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMatchInput() {
    return this._rangeMatch.internalValue;
  }

  // safe_regex_match - computed: false, optional: true, required: false
  private _safeRegexMatch = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatchOutputReference(this, "safe_regex_match");
  public get safeRegexMatch() {
    return this._safeRegexMatch;
  }
  public putSafeRegexMatch(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderSafeRegexMatch) {
    this._safeRegexMatch.internalValue = value;
  }
  public resetSafeRegexMatch() {
    this._safeRegexMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeRegexMatchInput() {
    return this._safeRegexMatch.internalValue;
  }

  // suffix_match - computed: false, optional: true, required: false
  private _suffixMatch?: string; 
  public get suffixMatch() {
    return this.getStringAttribute('suffix_match');
  }
  public set suffixMatch(value: string) {
    this._suffixMatch = value;
  }
  public resetSuffixMatch() {
    this._suffixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixMatchInput() {
    return this._suffixMatch;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#header DataK8SGlooSoloIoProxyV1Manifest#header}
  */
  readonly header?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeader;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderToTerraform(struct!.header),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeader",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#flags DataK8SGlooSoloIoProxyV1Manifest#flags}
  */
  readonly flags?: string[];
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
    }
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#denominator DataK8SGlooSoloIoProxyV1Manifest#denominator}
  */
  readonly denominator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#numerator DataK8SGlooSoloIoProxyV1Manifest#numerator}
  */
  readonly numerator?: number;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    numerator: cdktf.numberToTerraform(struct!.numerator),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denominator: {
      value: cdktf.stringToHclTerraform(struct!.denominator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numerator: {
      value: cdktf.numberToHclTerraform(struct!.numerator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denominator = undefined;
      this._numerator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denominator = value.denominator;
      this._numerator = value.numerator;
    }
  }

  // denominator - computed: false, optional: true, required: false
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  public resetDenominator() {
    this._denominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // numerator - computed: false, optional: true, required: false
  private _numerator?: number; 
  public get numerator() {
    return this.getNumberAttribute('numerator');
  }
  public set numerator(value: number) {
    this._numerator = value;
  }
  public resetNumerator() {
    this._numerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#percent_sampled DataK8SGlooSoloIoProxyV1Manifest#percent_sampled}
  */
  readonly percentSampled?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#runtime_key DataK8SGlooSoloIoProxyV1Manifest#runtime_key}
  */
  readonly runtimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#use_independent_randomness DataK8SGlooSoloIoProxyV1Manifest#use_independent_randomness}
  */
  readonly useIndependentRandomness?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_sampled: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledToTerraform(struct!.percentSampled),
    runtime_key: cdktf.stringToTerraform(struct!.runtimeKey),
    use_independent_randomness: cdktf.booleanToTerraform(struct!.useIndependentRandomness),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent_sampled: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledToHclTerraform(struct!.percentSampled),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled",
    },
    runtime_key: {
      value: cdktf.stringToHclTerraform(struct!.runtimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_independent_randomness: {
      value: cdktf.booleanToHclTerraform(struct!.useIndependentRandomness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentSampled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentSampled = this._percentSampled?.internalValue;
    }
    if (this._runtimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeKey = this._runtimeKey;
    }
    if (this._useIndependentRandomness !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIndependentRandomness = this._useIndependentRandomness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentSampled.internalValue = undefined;
      this._runtimeKey = undefined;
      this._useIndependentRandomness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentSampled.internalValue = value.percentSampled;
      this._runtimeKey = value.runtimeKey;
      this._useIndependentRandomness = value.useIndependentRandomness;
    }
  }

  // percent_sampled - computed: false, optional: true, required: false
  private _percentSampled = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampledOutputReference(this, "percent_sampled");
  public get percentSampled() {
    return this._percentSampled;
  }
  public putPercentSampled(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterPercentSampled) {
    this._percentSampled.internalValue = value;
  }
  public resetPercentSampled() {
    this._percentSampled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentSampledInput() {
    return this._percentSampled.internalValue;
  }

  // runtime_key - computed: false, optional: true, required: false
  private _runtimeKey?: string; 
  public get runtimeKey() {
    return this.getStringAttribute('runtime_key');
  }
  public set runtimeKey(value: string) {
    this._runtimeKey = value;
  }
  public resetRuntimeKey() {
    this._runtimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeKeyInput() {
    return this._runtimeKey;
  }

  // use_independent_randomness - computed: false, optional: true, required: false
  private _useIndependentRandomness?: boolean | cdktf.IResolvable; 
  public get useIndependentRandomness() {
    return this.getBooleanAttribute('use_independent_randomness');
  }
  public set useIndependentRandomness(value: boolean | cdktf.IResolvable) {
    this._useIndependentRandomness = value;
  }
  public resetUseIndependentRandomness() {
    this._useIndependentRandomness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIndependentRandomnessInput() {
    return this._useIndependentRandomness;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#default_value DataK8SGlooSoloIoProxyV1Manifest#default_value}
  */
  readonly defaultValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#runtime_key DataK8SGlooSoloIoProxyV1Manifest#runtime_key}
  */
  readonly runtimeKey?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.numberToTerraform(struct!.defaultValue),
    runtime_key: cdktf.stringToTerraform(struct!.runtimeKey),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.numberToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_key: {
      value: cdktf.stringToHclTerraform(struct!.runtimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._runtimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeKey = this._runtimeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._runtimeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._runtimeKey = value.runtimeKey;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: number; 
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }
  public set defaultValue(value: number) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // runtime_key - computed: false, optional: true, required: false
  private _runtimeKey?: string; 
  public get runtimeKey() {
    return this.getStringAttribute('runtime_key');
  }
  public set runtimeKey(value: string) {
    this._runtimeKey = value;
  }
  public resetRuntimeKey() {
    this._runtimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeKeyInput() {
    return this._runtimeKey;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#op DataK8SGlooSoloIoProxyV1Manifest#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#value DataK8SGlooSoloIoProxyV1Manifest#value}
  */
  readonly value?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value.internalValue = value.value;
    }
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonValue) {
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
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#comparison DataK8SGlooSoloIoProxyV1Manifest#comparison}
  */
  readonly comparison?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonToTerraform(struct!.comparison),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonToHclTerraform(struct!.comparison),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison.internalValue = value.comparison;
    }
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparisonOutputReference(this, "comparison");
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterComparison) {
    this._comparison.internalValue = value;
  }
  public resetComparison() {
    this._comparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#and_filter DataK8SGlooSoloIoProxyV1Manifest#and_filter}
  */
  readonly andFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#duration_filter DataK8SGlooSoloIoProxyV1Manifest#duration_filter}
  */
  readonly durationFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#grpc_status_filter DataK8SGlooSoloIoProxyV1Manifest#grpc_status_filter}
  */
  readonly grpcStatusFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#header_filter DataK8SGlooSoloIoProxyV1Manifest#header_filter}
  */
  readonly headerFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#not_health_check_filter DataK8SGlooSoloIoProxyV1Manifest#not_health_check_filter}
  */
  readonly notHealthCheckFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#or_filter DataK8SGlooSoloIoProxyV1Manifest#or_filter}
  */
  readonly orFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#response_flag_filter DataK8SGlooSoloIoProxyV1Manifest#response_flag_filter}
  */
  readonly responseFlagFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#runtime_filter DataK8SGlooSoloIoProxyV1Manifest#runtime_filter}
  */
  readonly runtimeFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#status_code_filter DataK8SGlooSoloIoProxyV1Manifest#status_code_filter}
  */
  readonly statusCodeFilter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#traceable_filter DataK8SGlooSoloIoProxyV1Manifest#traceable_filter}
  */
  readonly traceableFilter?: { [key: string]: string };
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.andFilter),
    duration_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterToTerraform(struct!.durationFilter),
    grpc_status_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilterToTerraform(struct!.grpcStatusFilter),
    header_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterToTerraform(struct!.headerFilter),
    not_health_check_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.notHealthCheckFilter),
    or_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.orFilter),
    response_flag_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilterToTerraform(struct!.responseFlagFilter),
    runtime_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterToTerraform(struct!.runtimeFilter),
    status_code_filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterToTerraform(struct!.statusCodeFilter),
    traceable_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.traceableFilter),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.andFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    duration_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterToHclTerraform(struct!.durationFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilter",
    },
    grpc_status_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilterToHclTerraform(struct!.grpcStatusFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilter",
    },
    header_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterToHclTerraform(struct!.headerFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilter",
    },
    not_health_check_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.notHealthCheckFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.orFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    response_flag_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilterToHclTerraform(struct!.responseFlagFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilter",
    },
    runtime_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterToHclTerraform(struct!.runtimeFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilter",
    },
    status_code_filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterToHclTerraform(struct!.statusCodeFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilter",
    },
    traceable_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.traceableFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.andFilter = this._andFilter;
    }
    if (this._durationFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationFilter = this._durationFilter?.internalValue;
    }
    if (this._grpcStatusFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcStatusFilter = this._grpcStatusFilter?.internalValue;
    }
    if (this._headerFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilter = this._headerFilter?.internalValue;
    }
    if (this._notHealthCheckFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notHealthCheckFilter = this._notHealthCheckFilter;
    }
    if (this._orFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.orFilter = this._orFilter;
    }
    if (this._responseFlagFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFlagFilter = this._responseFlagFilter?.internalValue;
    }
    if (this._runtimeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeFilter = this._runtimeFilter?.internalValue;
    }
    if (this._statusCodeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeFilter = this._statusCodeFilter?.internalValue;
    }
    if (this._traceableFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceableFilter = this._traceableFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andFilter = undefined;
      this._durationFilter.internalValue = undefined;
      this._grpcStatusFilter.internalValue = undefined;
      this._headerFilter.internalValue = undefined;
      this._notHealthCheckFilter = undefined;
      this._orFilter = undefined;
      this._responseFlagFilter.internalValue = undefined;
      this._runtimeFilter.internalValue = undefined;
      this._statusCodeFilter.internalValue = undefined;
      this._traceableFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andFilter = value.andFilter;
      this._durationFilter.internalValue = value.durationFilter;
      this._grpcStatusFilter.internalValue = value.grpcStatusFilter;
      this._headerFilter.internalValue = value.headerFilter;
      this._notHealthCheckFilter = value.notHealthCheckFilter;
      this._orFilter = value.orFilter;
      this._responseFlagFilter.internalValue = value.responseFlagFilter;
      this._runtimeFilter.internalValue = value.runtimeFilter;
      this._statusCodeFilter.internalValue = value.statusCodeFilter;
      this._traceableFilter = value.traceableFilter;
    }
  }

  // and_filter - computed: false, optional: true, required: false
  private _andFilter?: { [key: string]: string }; 
  public get andFilter() {
    return this.getStringMapAttribute('and_filter');
  }
  public set andFilter(value: { [key: string]: string }) {
    this._andFilter = value;
  }
  public resetAndFilter() {
    this._andFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andFilterInput() {
    return this._andFilter;
  }

  // duration_filter - computed: false, optional: true, required: false
  private _durationFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilterOutputReference(this, "duration_filter");
  public get durationFilter() {
    return this._durationFilter;
  }
  public putDurationFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterDurationFilter) {
    this._durationFilter.internalValue = value;
  }
  public resetDurationFilter() {
    this._durationFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationFilterInput() {
    return this._durationFilter.internalValue;
  }

  // grpc_status_filter - computed: false, optional: true, required: false
  private _grpcStatusFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilterOutputReference(this, "grpc_status_filter");
  public get grpcStatusFilter() {
    return this._grpcStatusFilter;
  }
  public putGrpcStatusFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterGrpcStatusFilter) {
    this._grpcStatusFilter.internalValue = value;
  }
  public resetGrpcStatusFilter() {
    this._grpcStatusFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcStatusFilterInput() {
    return this._grpcStatusFilter.internalValue;
  }

  // header_filter - computed: false, optional: true, required: false
  private _headerFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilterOutputReference(this, "header_filter");
  public get headerFilter() {
    return this._headerFilter;
  }
  public putHeaderFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterHeaderFilter) {
    this._headerFilter.internalValue = value;
  }
  public resetHeaderFilter() {
    this._headerFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterInput() {
    return this._headerFilter.internalValue;
  }

  // not_health_check_filter - computed: false, optional: true, required: false
  private _notHealthCheckFilter?: { [key: string]: string }; 
  public get notHealthCheckFilter() {
    return this.getStringMapAttribute('not_health_check_filter');
  }
  public set notHealthCheckFilter(value: { [key: string]: string }) {
    this._notHealthCheckFilter = value;
  }
  public resetNotHealthCheckFilter() {
    this._notHealthCheckFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notHealthCheckFilterInput() {
    return this._notHealthCheckFilter;
  }

  // or_filter - computed: false, optional: true, required: false
  private _orFilter?: { [key: string]: string }; 
  public get orFilter() {
    return this.getStringMapAttribute('or_filter');
  }
  public set orFilter(value: { [key: string]: string }) {
    this._orFilter = value;
  }
  public resetOrFilter() {
    this._orFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orFilterInput() {
    return this._orFilter;
  }

  // response_flag_filter - computed: false, optional: true, required: false
  private _responseFlagFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilterOutputReference(this, "response_flag_filter");
  public get responseFlagFilter() {
    return this._responseFlagFilter;
  }
  public putResponseFlagFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterResponseFlagFilter) {
    this._responseFlagFilter.internalValue = value;
  }
  public resetResponseFlagFilter() {
    this._responseFlagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFlagFilterInput() {
    return this._responseFlagFilter.internalValue;
  }

  // runtime_filter - computed: false, optional: true, required: false
  private _runtimeFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilterOutputReference(this, "runtime_filter");
  public get runtimeFilter() {
    return this._runtimeFilter;
  }
  public putRuntimeFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterRuntimeFilter) {
    this._runtimeFilter.internalValue = value;
  }
  public resetRuntimeFilter() {
    this._runtimeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeFilterInput() {
    return this._runtimeFilter.internalValue;
  }

  // status_code_filter - computed: false, optional: true, required: false
  private _statusCodeFilter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilterOutputReference(this, "status_code_filter");
  public get statusCodeFilter() {
    return this._statusCodeFilter;
  }
  public putStatusCodeFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterStatusCodeFilter) {
    this._statusCodeFilter.internalValue = value;
  }
  public resetStatusCodeFilter() {
    this._statusCodeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeFilterInput() {
    return this._statusCodeFilter.internalValue;
  }

  // traceable_filter - computed: false, optional: true, required: false
  private _traceableFilter?: { [key: string]: string }; 
  public get traceableFilter() {
    return this.getStringMapAttribute('traceable_filter');
  }
  public set traceableFilter(value: { [key: string]: string }) {
    this._traceableFilter = value;
  }
  public resetTraceableFilter() {
    this._traceableFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceableFilterInput() {
    return this._traceableFilter;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#additional_request_headers_to_log DataK8SGlooSoloIoProxyV1Manifest#additional_request_headers_to_log}
  */
  readonly additionalRequestHeadersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#additional_response_headers_to_log DataK8SGlooSoloIoProxyV1Manifest#additional_response_headers_to_log}
  */
  readonly additionalResponseHeadersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#additional_response_trailers_to_log DataK8SGlooSoloIoProxyV1Manifest#additional_response_trailers_to_log}
  */
  readonly additionalResponseTrailersToLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#log_name DataK8SGlooSoloIoProxyV1Manifest#log_name}
  */
  readonly logName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#static_cluster_name DataK8SGlooSoloIoProxyV1Manifest#static_cluster_name}
  */
  readonly staticClusterName?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcServiceToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_request_headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRequestHeadersToLog),
    additional_response_headers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalResponseHeadersToLog),
    additional_response_trailers_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalResponseTrailersToLog),
    log_name: cdktf.stringToTerraform(struct!.logName),
    static_cluster_name: cdktf.stringToTerraform(struct!.staticClusterName),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcServiceToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_request_headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRequestHeadersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_response_headers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalResponseHeadersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    additional_response_trailers_to_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalResponseTrailersToLog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_name: {
      value: cdktf.stringToHclTerraform(struct!.logName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.staticClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRequestHeadersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRequestHeadersToLog = this._additionalRequestHeadersToLog;
    }
    if (this._additionalResponseHeadersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalResponseHeadersToLog = this._additionalResponseHeadersToLog;
    }
    if (this._additionalResponseTrailersToLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalResponseTrailersToLog = this._additionalResponseTrailersToLog;
    }
    if (this._logName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logName = this._logName;
    }
    if (this._staticClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticClusterName = this._staticClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRequestHeadersToLog = undefined;
      this._additionalResponseHeadersToLog = undefined;
      this._additionalResponseTrailersToLog = undefined;
      this._logName = undefined;
      this._staticClusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalRequestHeadersToLog = value.additionalRequestHeadersToLog;
      this._additionalResponseHeadersToLog = value.additionalResponseHeadersToLog;
      this._additionalResponseTrailersToLog = value.additionalResponseTrailersToLog;
      this._logName = value.logName;
      this._staticClusterName = value.staticClusterName;
    }
  }

  // additional_request_headers_to_log - computed: false, optional: true, required: false
  private _additionalRequestHeadersToLog?: string[]; 
  public get additionalRequestHeadersToLog() {
    return this.getListAttribute('additional_request_headers_to_log');
  }
  public set additionalRequestHeadersToLog(value: string[]) {
    this._additionalRequestHeadersToLog = value;
  }
  public resetAdditionalRequestHeadersToLog() {
    this._additionalRequestHeadersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRequestHeadersToLogInput() {
    return this._additionalRequestHeadersToLog;
  }

  // additional_response_headers_to_log - computed: false, optional: true, required: false
  private _additionalResponseHeadersToLog?: string[]; 
  public get additionalResponseHeadersToLog() {
    return this.getListAttribute('additional_response_headers_to_log');
  }
  public set additionalResponseHeadersToLog(value: string[]) {
    this._additionalResponseHeadersToLog = value;
  }
  public resetAdditionalResponseHeadersToLog() {
    this._additionalResponseHeadersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalResponseHeadersToLogInput() {
    return this._additionalResponseHeadersToLog;
  }

  // additional_response_trailers_to_log - computed: false, optional: true, required: false
  private _additionalResponseTrailersToLog?: string[]; 
  public get additionalResponseTrailersToLog() {
    return this.getListAttribute('additional_response_trailers_to_log');
  }
  public set additionalResponseTrailersToLog(value: string[]) {
    this._additionalResponseTrailersToLog = value;
  }
  public resetAdditionalResponseTrailersToLog() {
    this._additionalResponseTrailersToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalResponseTrailersToLogInput() {
    return this._additionalResponseTrailersToLog;
  }

  // log_name - computed: false, optional: true, required: false
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  public resetLogName() {
    this._logName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
  }

  // static_cluster_name - computed: false, optional: true, required: false
  private _staticClusterName?: string; 
  public get staticClusterName() {
    return this.getStringAttribute('static_cluster_name');
  }
  public set staticClusterName(value: string) {
    this._staticClusterName = value;
  }
  public resetStaticClusterName() {
    this._staticClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticClusterNameInput() {
    return this._staticClusterName;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#file_sink DataK8SGlooSoloIoProxyV1Manifest#file_sink}
  */
  readonly fileSink?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSink;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#filter DataK8SGlooSoloIoProxyV1Manifest#filter}
  */
  readonly filter?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#grpc_service DataK8SGlooSoloIoProxyV1Manifest#grpc_service}
  */
  readonly grpcService?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcService;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_sink: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSinkToTerraform(struct!.fileSink),
    filter: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterToTerraform(struct!.filter),
    grpc_service: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcServiceToTerraform(struct!.grpcService),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_sink: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSinkToHclTerraform(struct!.fileSink),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSink",
    },
    filter: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilter",
    },
    grpc_service: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcServiceToHclTerraform(struct!.grpcService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSink = this._fileSink?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._grpcService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcService = this._grpcService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSink.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._grpcService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSink.internalValue = value.fileSink;
      this._filter.internalValue = value.filter;
      this._grpcService.internalValue = value.grpcService;
    }
  }

  // file_sink - computed: false, optional: true, required: false
  private _fileSink = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSinkOutputReference(this, "file_sink");
  public get fileSink() {
    return this._fileSink;
  }
  public putFileSink(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFileSink) {
    this._fileSink.internalValue = value;
  }
  public resetFileSink() {
    this._fileSink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSinkInput() {
    return this._fileSink.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // grpc_service - computed: false, optional: true, required: false
  private _grpcService = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcServiceOutputReference(this, "grpc_service");
  public get grpcService() {
    return this._grpcService;
  }
  public putGrpcService(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogGrpcService) {
    this._grpcService.internalValue = value;
  }
  public resetGrpcService() {
    this._grpcService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceInput() {
    return this._grpcService.internalValue;
  }
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLog[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogOutputReference {
    return new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#access_log DataK8SGlooSoloIoProxyV1Manifest#access_log}
  */
  readonly accessLog?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLog[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: cdktf.listMapper(dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogToTerraform, false)(struct!.accessLog),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogToHclTerraform, false)(struct!.accessLog),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLog.internalValue = value.accessLog;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLogList(this, "access_log", false);
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceAccessLog[] | cdktf.IResolvable) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#key DataK8SGlooSoloIoProxyV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#metadata_namespace DataK8SGlooSoloIoProxyV1Manifest#metadata_namespace}
  */
  readonly metadataNamespace?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresentToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    metadata_namespace: cdktf.stringToTerraform(struct!.metadataNamespace),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresentToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresent | cdktf.IResolvable): any {
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
    metadata_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metadataNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._metadataNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataNamespace = this._metadataNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._metadataNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._metadataNamespace = value.metadataNamespace;
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

  // metadata_namespace - computed: false, optional: true, required: false
  private _metadataNamespace?: string; 
  public get metadataNamespace() {
    return this.getStringAttribute('metadata_namespace');
  }
  public set metadataNamespace(value: string) {
    this._metadataNamespace = value;
  }
  public resetMetadataNamespace() {
    this._metadataNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataNamespaceInput() {
    return this._metadataNamespace;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#on_tlv_present DataK8SGlooSoloIoProxyV1Manifest#on_tlv_present}
  */
  readonly onTlvPresent?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#tlv_type DataK8SGlooSoloIoProxyV1Manifest#tlv_type}
  */
  readonly tlvType?: number;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_tlv_present: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresentToTerraform(struct!.onTlvPresent),
    tlv_type: cdktf.numberToTerraform(struct!.tlvType),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_tlv_present: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresentToHclTerraform(struct!.onTlvPresent),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresent",
    },
    tlv_type: {
      value: cdktf.numberToHclTerraform(struct!.tlvType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onTlvPresent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onTlvPresent = this._onTlvPresent?.internalValue;
    }
    if (this._tlvType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlvType = this._tlvType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onTlvPresent.internalValue = undefined;
      this._tlvType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onTlvPresent.internalValue = value.onTlvPresent;
      this._tlvType = value.tlvType;
    }
  }

  // on_tlv_present - computed: false, optional: true, required: false
  private _onTlvPresent = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresentOutputReference(this, "on_tlv_present");
  public get onTlvPresent() {
    return this._onTlvPresent;
  }
  public putOnTlvPresent(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOnTlvPresent) {
    this._onTlvPresent.internalValue = value;
  }
  public resetOnTlvPresent() {
    this._onTlvPresent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTlvPresentInput() {
    return this._onTlvPresent.internalValue;
  }

  // tlv_type - computed: false, optional: true, required: false
  private _tlvType?: number; 
  public get tlvType() {
    return this.getNumberAttribute('tlv_type');
  }
  public set tlvType(value: number) {
    this._tlvType = value;
  }
  public resetTlvType() {
    this._tlvType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlvTypeInput() {
    return this._tlvType;
  }
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOutputReference {
    return new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#allow_requests_without_proxy_protocol DataK8SGlooSoloIoProxyV1Manifest#allow_requests_without_proxy_protocol}
  */
  readonly allowRequestsWithoutProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#rules DataK8SGlooSoloIoProxyV1Manifest#rules}
  */
  readonly rules?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRules[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_requests_without_proxy_protocol: cdktf.booleanToTerraform(struct!.allowRequestsWithoutProxyProtocol),
    rules: cdktf.listMapper(dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_requests_without_proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.allowRequestsWithoutProxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRequestsWithoutProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRequestsWithoutProxyProtocol = this._allowRequestsWithoutProxyProtocol;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRequestsWithoutProxyProtocol = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRequestsWithoutProxyProtocol = value.allowRequestsWithoutProxyProtocol;
      this._rules.internalValue = value.rules;
    }
  }

  // allow_requests_without_proxy_protocol - computed: false, optional: true, required: false
  private _allowRequestsWithoutProxyProtocol?: boolean | cdktf.IResolvable; 
  public get allowRequestsWithoutProxyProtocol() {
    return this.getBooleanAttribute('allow_requests_without_proxy_protocol');
  }
  public set allowRequestsWithoutProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._allowRequestsWithoutProxyProtocol = value;
  }
  public resetAllowRequestsWithoutProxyProtocol() {
    this._allowRequestsWithoutProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRequestsWithoutProxyProtocolInput() {
    return this._allowRequestsWithoutProxyProtocol;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#buf_value DataK8SGlooSoloIoProxyV1Manifest#buf_value}
  */
  readonly bufValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#description DataK8SGlooSoloIoProxyV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#int_value DataK8SGlooSoloIoProxyV1Manifest#int_value}
  */
  readonly intValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#level DataK8SGlooSoloIoProxyV1Manifest#level}
  */
  readonly level?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#name DataK8SGlooSoloIoProxyV1Manifest#name}
  */
  readonly name?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#state DataK8SGlooSoloIoProxyV1Manifest#state}
  */
  readonly state?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buf_value: cdktf.stringToTerraform(struct!.bufValue),
    description: cdktf.stringToTerraform(struct!.description),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    level: cdktf.numberToTerraform(struct!.level),
    name: cdktf.numberToTerraform(struct!.name),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buf_value: {
      value: cdktf.stringToHclTerraform(struct!.bufValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufValue = this._bufValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufValue = undefined;
      this._description = undefined;
      this._intValue = undefined;
      this._level = undefined;
      this._name = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufValue = value.bufValue;
      this._description = value.description;
      this._intValue = value.intValue;
      this._level = value.level;
      this._name = value.name;
      this._state = value.state;
    }
  }

  // buf_value - computed: false, optional: true, required: false
  private _bufValue?: string; 
  public get bufValue() {
    return this.getStringAttribute('buf_value');
  }
  public set bufValue(value: string) {
    this._bufValue = value;
  }
  public resetBufValue() {
    this._bufValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufValueInput() {
    return this._bufValue;
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

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsOutputReference {
    return new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#access_logging_service DataK8SGlooSoloIoProxyV1Manifest#access_logging_service}
  */
  readonly accessLoggingService?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#connection_balance_config DataK8SGlooSoloIoProxyV1Manifest#connection_balance_config}
  */
  readonly connectionBalanceConfig?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#extensions DataK8SGlooSoloIoProxyV1Manifest#extensions}
  */
  readonly extensions?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#listener_access_logging_service DataK8SGlooSoloIoProxyV1Manifest#listener_access_logging_service}
  */
  readonly listenerAccessLoggingService?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#per_connection_buffer_limit_bytes DataK8SGlooSoloIoProxyV1Manifest#per_connection_buffer_limit_bytes}
  */
  readonly perConnectionBufferLimitBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#proxy_protocol DataK8SGlooSoloIoProxyV1Manifest#proxy_protocol}
  */
  readonly proxyProtocol?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocol;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#socket_options DataK8SGlooSoloIoProxyV1Manifest#socket_options}
  */
  readonly socketOptions?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptions[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_logging_service: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceToTerraform(struct!.accessLoggingService),
    connection_balance_config: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfigToTerraform(struct!.connectionBalanceConfig),
    extensions: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensionsToTerraform(struct!.extensions),
    listener_access_logging_service: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceToTerraform(struct!.listenerAccessLoggingService),
    per_connection_buffer_limit_bytes: cdktf.numberToTerraform(struct!.perConnectionBufferLimitBytes),
    proxy_protocol: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolToTerraform(struct!.proxyProtocol),
    socket_options: cdktf.listMapper(dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsToTerraform, false)(struct!.socketOptions),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_logging_service: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceToHclTerraform(struct!.accessLoggingService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingService",
    },
    connection_balance_config: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfigToHclTerraform(struct!.connectionBalanceConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfig",
    },
    extensions: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensions",
    },
    listener_access_logging_service: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceToHclTerraform(struct!.listenerAccessLoggingService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingService",
    },
    per_connection_buffer_limit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.perConnectionBufferLimitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_protocol: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolToHclTerraform(struct!.proxyProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocol",
    },
    socket_options: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsToHclTerraform, false)(struct!.socketOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLoggingService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLoggingService = this._accessLoggingService?.internalValue;
    }
    if (this._connectionBalanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionBalanceConfig = this._connectionBalanceConfig?.internalValue;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._listenerAccessLoggingService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerAccessLoggingService = this._listenerAccessLoggingService?.internalValue;
    }
    if (this._perConnectionBufferLimitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.perConnectionBufferLimitBytes = this._perConnectionBufferLimitBytes;
    }
    if (this._proxyProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol?.internalValue;
    }
    if (this._socketOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketOptions = this._socketOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLoggingService.internalValue = undefined;
      this._connectionBalanceConfig.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._listenerAccessLoggingService.internalValue = undefined;
      this._perConnectionBufferLimitBytes = undefined;
      this._proxyProtocol.internalValue = undefined;
      this._socketOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLoggingService.internalValue = value.accessLoggingService;
      this._connectionBalanceConfig.internalValue = value.connectionBalanceConfig;
      this._extensions.internalValue = value.extensions;
      this._listenerAccessLoggingService.internalValue = value.listenerAccessLoggingService;
      this._perConnectionBufferLimitBytes = value.perConnectionBufferLimitBytes;
      this._proxyProtocol.internalValue = value.proxyProtocol;
      this._socketOptions.internalValue = value.socketOptions;
    }
  }

  // access_logging_service - computed: false, optional: true, required: false
  private _accessLoggingService = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingServiceOutputReference(this, "access_logging_service");
  public get accessLoggingService() {
    return this._accessLoggingService;
  }
  public putAccessLoggingService(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsAccessLoggingService) {
    this._accessLoggingService.internalValue = value;
  }
  public resetAccessLoggingService() {
    this._accessLoggingService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLoggingServiceInput() {
    return this._accessLoggingService.internalValue;
  }

  // connection_balance_config - computed: false, optional: true, required: false
  private _connectionBalanceConfig = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfigOutputReference(this, "connection_balance_config");
  public get connectionBalanceConfig() {
    return this._connectionBalanceConfig;
  }
  public putConnectionBalanceConfig(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsConnectionBalanceConfig) {
    this._connectionBalanceConfig.internalValue = value;
  }
  public resetConnectionBalanceConfig() {
    this._connectionBalanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBalanceConfigInput() {
    return this._connectionBalanceConfig.internalValue;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsExtensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // listener_access_logging_service - computed: false, optional: true, required: false
  private _listenerAccessLoggingService = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingServiceOutputReference(this, "listener_access_logging_service");
  public get listenerAccessLoggingService() {
    return this._listenerAccessLoggingService;
  }
  public putListenerAccessLoggingService(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsListenerAccessLoggingService) {
    this._listenerAccessLoggingService.internalValue = value;
  }
  public resetListenerAccessLoggingService() {
    this._listenerAccessLoggingService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerAccessLoggingServiceInput() {
    return this._listenerAccessLoggingService.internalValue;
  }

  // per_connection_buffer_limit_bytes - computed: false, optional: true, required: false
  private _perConnectionBufferLimitBytes?: number; 
  public get perConnectionBufferLimitBytes() {
    return this.getNumberAttribute('per_connection_buffer_limit_bytes');
  }
  public set perConnectionBufferLimitBytes(value: number) {
    this._perConnectionBufferLimitBytes = value;
  }
  public resetPerConnectionBufferLimitBytes() {
    this._perConnectionBufferLimitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perConnectionBufferLimitBytesInput() {
    return this._perConnectionBufferLimitBytes;
  }

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocolOutputReference(this, "proxy_protocol");
  public get proxyProtocol() {
    return this._proxyProtocol;
  }
  public putProxyProtocol(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsProxyProtocol) {
    this._proxyProtocol.internalValue = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol.internalValue;
  }

  // socket_options - computed: false, optional: true, required: false
  private _socketOptions = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptionsList(this, "socket_options", false);
  public get socketOptions() {
    return this._socketOptions;
  }
  public putSocketOptions(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsSocketOptions[] | cdktf.IResolvable) {
    this._socketOptions.internalValue = value;
  }
  public resetSocketOptions() {
    this._socketOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketOptionsInput() {
    return this._socketOptions.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#max_direct_response_body_size_bytes DataK8SGlooSoloIoProxyV1Manifest#max_direct_response_body_size_bytes}
  */
  readonly maxDirectResponseBodySizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#most_specific_header_mutations_wins DataK8SGlooSoloIoProxyV1Manifest#most_specific_header_mutations_wins}
  */
  readonly mostSpecificHeaderMutationsWins?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptionsToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_direct_response_body_size_bytes: cdktf.numberToTerraform(struct!.maxDirectResponseBodySizeBytes),
    most_specific_header_mutations_wins: cdktf.booleanToTerraform(struct!.mostSpecificHeaderMutationsWins),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptionsToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_direct_response_body_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxDirectResponseBodySizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    most_specific_header_mutations_wins: {
      value: cdktf.booleanToHclTerraform(struct!.mostSpecificHeaderMutationsWins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDirectResponseBodySizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDirectResponseBodySizeBytes = this._maxDirectResponseBodySizeBytes;
    }
    if (this._mostSpecificHeaderMutationsWins !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostSpecificHeaderMutationsWins = this._mostSpecificHeaderMutationsWins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxDirectResponseBodySizeBytes = undefined;
      this._mostSpecificHeaderMutationsWins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxDirectResponseBodySizeBytes = value.maxDirectResponseBodySizeBytes;
      this._mostSpecificHeaderMutationsWins = value.mostSpecificHeaderMutationsWins;
    }
  }

  // max_direct_response_body_size_bytes - computed: false, optional: true, required: false
  private _maxDirectResponseBodySizeBytes?: number; 
  public get maxDirectResponseBodySizeBytes() {
    return this.getNumberAttribute('max_direct_response_body_size_bytes');
  }
  public set maxDirectResponseBodySizeBytes(value: number) {
    this._maxDirectResponseBodySizeBytes = value;
  }
  public resetMaxDirectResponseBodySizeBytes() {
    this._maxDirectResponseBodySizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDirectResponseBodySizeBytesInput() {
    return this._maxDirectResponseBodySizeBytes;
  }

  // most_specific_header_mutations_wins - computed: false, optional: true, required: false
  private _mostSpecificHeaderMutationsWins?: boolean | cdktf.IResolvable; 
  public get mostSpecificHeaderMutationsWins() {
    return this.getBooleanAttribute('most_specific_header_mutations_wins');
  }
  public set mostSpecificHeaderMutationsWins(value: boolean | cdktf.IResolvable) {
    this._mostSpecificHeaderMutationsWins = value;
  }
  public resetMostSpecificHeaderMutationsWins() {
    this._mostSpecificHeaderMutationsWins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostSpecificHeaderMutationsWinsInput() {
    return this._mostSpecificHeaderMutationsWins;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#cipher_suites DataK8SGlooSoloIoProxyV1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#ecdh_curves DataK8SGlooSoloIoProxyV1Manifest#ecdh_curves}
  */
  readonly ecdhCurves?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#maximum_protocol_version DataK8SGlooSoloIoProxyV1Manifest#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#minimum_protocol_version DataK8SGlooSoloIoProxyV1Manifest#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParametersToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    ecdh_curves: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ecdhCurves),
    maximum_protocol_version: cdktf.stringToTerraform(struct!.maximumProtocolVersion),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParametersToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ecdh_curves: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ecdhCurves),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maximumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._ecdhCurves !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecdhCurves = this._ecdhCurves;
    }
    if (this._maximumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProtocolVersion = this._maximumProtocolVersion;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuites = undefined;
      this._ecdhCurves = undefined;
      this._maximumProtocolVersion = undefined;
      this._minimumProtocolVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuites = value.cipherSuites;
      this._ecdhCurves = value.ecdhCurves;
      this._maximumProtocolVersion = value.maximumProtocolVersion;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // ecdh_curves - computed: false, optional: true, required: false
  private _ecdhCurves?: string[]; 
  public get ecdhCurves() {
    return this.getListAttribute('ecdh_curves');
  }
  public set ecdhCurves(value: string[]) {
    this._ecdhCurves = value;
  }
  public resetEcdhCurves() {
    this._ecdhCurves = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdhCurvesInput() {
    return this._ecdhCurves;
  }

  // maximum_protocol_version - computed: false, optional: true, required: false
  private _maximumProtocolVersion?: string; 
  public get maximumProtocolVersion() {
    return this.getStringAttribute('maximum_protocol_version');
  }
  public set maximumProtocolVersion(value: string) {
    this._maximumProtocolVersion = value;
  }
  public resetMaximumProtocolVersion() {
    this._maximumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumProtocolVersionInput() {
    return this._maximumProtocolVersion;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#header DataK8SGlooSoloIoProxyV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#token_file_name DataK8SGlooSoloIoProxyV1Manifest#token_file_name}
  */
  readonly tokenFileName?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSourceToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    token_file_name: cdktf.stringToTerraform(struct!.tokenFileName),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSourceToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_file_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._tokenFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenFileName = this._tokenFileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._tokenFileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._tokenFileName = value.tokenFileName;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // token_file_name - computed: false, optional: true, required: false
  private _tokenFileName?: string; 
  public get tokenFileName() {
    return this.getStringAttribute('token_file_name');
  }
  public set tokenFileName(value: string) {
    this._tokenFileName = value;
  }
  public resetTokenFileName() {
    this._tokenFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenFileNameInput() {
    return this._tokenFileName;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#file_credential_source DataK8SGlooSoloIoProxyV1Manifest#file_credential_source}
  */
  readonly fileCredentialSource?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSource;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_credential_source: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSourceToTerraform(struct!.fileCredentialSource),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_credential_source: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSourceToHclTerraform(struct!.fileCredentialSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileCredentialSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCredentialSource = this._fileCredentialSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileCredentialSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileCredentialSource.internalValue = value.fileCredentialSource;
    }
  }

  // file_credential_source - computed: false, optional: true, required: false
  private _fileCredentialSource = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSourceOutputReference(this, "file_credential_source");
  public get fileCredentialSource() {
    return this._fileCredentialSource;
  }
  public putFileCredentialSource(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsFileCredentialSource) {
    this._fileCredentialSource.internalValue = value;
  }
  public resetFileCredentialSource() {
    this._fileCredentialSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCredentialSourceInput() {
    return this._fileCredentialSource.internalValue;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#call_credentials DataK8SGlooSoloIoProxyV1Manifest#call_credentials}
  */
  readonly callCredentials?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#certificates_secret_name DataK8SGlooSoloIoProxyV1Manifest#certificates_secret_name}
  */
  readonly certificatesSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#cluster_name DataK8SGlooSoloIoProxyV1Manifest#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#target_uri DataK8SGlooSoloIoProxyV1Manifest#target_uri}
  */
  readonly targetUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#validation_context_name DataK8SGlooSoloIoProxyV1Manifest#validation_context_name}
  */
  readonly validationContextName?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_credentials: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsToTerraform(struct!.callCredentials),
    certificates_secret_name: cdktf.stringToTerraform(struct!.certificatesSecretName),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
    validation_context_name: cdktf.stringToTerraform(struct!.validationContextName),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call_credentials: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsToHclTerraform(struct!.callCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentials",
    },
    certificates_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.certificatesSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_context_name: {
      value: cdktf.stringToHclTerraform(struct!.validationContextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callCredentials = this._callCredentials?.internalValue;
    }
    if (this._certificatesSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatesSecretName = this._certificatesSecretName;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    if (this._validationContextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationContextName = this._validationContextName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callCredentials.internalValue = undefined;
      this._certificatesSecretName = undefined;
      this._clusterName = undefined;
      this._targetUri = undefined;
      this._validationContextName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callCredentials.internalValue = value.callCredentials;
      this._certificatesSecretName = value.certificatesSecretName;
      this._clusterName = value.clusterName;
      this._targetUri = value.targetUri;
      this._validationContextName = value.validationContextName;
    }
  }

  // call_credentials - computed: false, optional: true, required: false
  private _callCredentials = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentialsOutputReference(this, "call_credentials");
  public get callCredentials() {
    return this._callCredentials;
  }
  public putCallCredentials(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsCallCredentials) {
    this._callCredentials.internalValue = value;
  }
  public resetCallCredentials() {
    this._callCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callCredentialsInput() {
    return this._callCredentials.internalValue;
  }

  // certificates_secret_name - computed: false, optional: true, required: false
  private _certificatesSecretName?: string; 
  public get certificatesSecretName() {
    return this.getStringAttribute('certificates_secret_name');
  }
  public set certificatesSecretName(value: string) {
    this._certificatesSecretName = value;
  }
  public resetCertificatesSecretName() {
    this._certificatesSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesSecretNameInput() {
    return this._certificatesSecretName;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // target_uri - computed: false, optional: true, required: false
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  public resetTargetUri() {
    this._targetUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }

  // validation_context_name - computed: false, optional: true, required: false
  private _validationContextName?: string; 
  public get validationContextName() {
    return this.getStringAttribute('validation_context_name');
  }
  public set validationContextName(value: string) {
    this._validationContextName = value;
  }
  public resetValidationContextName() {
    this._validationContextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationContextNameInput() {
    return this._validationContextName;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#name DataK8SGlooSoloIoProxyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#namespace DataK8SGlooSoloIoProxyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRefToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRefToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#ocsp_staple DataK8SGlooSoloIoProxyV1Manifest#ocsp_staple}
  */
  readonly ocspStaple?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#root_ca DataK8SGlooSoloIoProxyV1Manifest#root_ca}
  */
  readonly rootCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#tls_cert DataK8SGlooSoloIoProxyV1Manifest#tls_cert}
  */
  readonly tlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#tls_key DataK8SGlooSoloIoProxyV1Manifest#tls_key}
  */
  readonly tlsKey?: string;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFilesToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocsp_staple: cdktf.stringToTerraform(struct!.ocspStaple),
    root_ca: cdktf.stringToTerraform(struct!.rootCa),
    tls_cert: cdktf.stringToTerraform(struct!.tlsCert),
    tls_key: cdktf.stringToTerraform(struct!.tlsKey),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFilesToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocsp_staple: {
      value: cdktf.stringToHclTerraform(struct!.ocspStaple),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_ca: {
      value: cdktf.stringToHclTerraform(struct!.rootCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_cert: {
      value: cdktf.stringToHclTerraform(struct!.tlsCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocspStaple !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaple = this._ocspStaple;
    }
    if (this._rootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCa = this._rootCa;
    }
    if (this._tlsCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCert = this._tlsCert;
    }
    if (this._tlsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsKey = this._tlsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ocspStaple = undefined;
      this._rootCa = undefined;
      this._tlsCert = undefined;
      this._tlsKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ocspStaple = value.ocspStaple;
      this._rootCa = value.rootCa;
      this._tlsCert = value.tlsCert;
      this._tlsKey = value.tlsKey;
    }
  }

  // ocsp_staple - computed: false, optional: true, required: false
  private _ocspStaple?: string; 
  public get ocspStaple() {
    return this.getStringAttribute('ocsp_staple');
  }
  public set ocspStaple(value: string) {
    this._ocspStaple = value;
  }
  public resetOcspStaple() {
    this._ocspStaple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStapleInput() {
    return this._ocspStaple;
  }

  // root_ca - computed: false, optional: true, required: false
  private _rootCa?: string; 
  public get rootCa() {
    return this.getStringAttribute('root_ca');
  }
  public set rootCa(value: string) {
    this._rootCa = value;
  }
  public resetRootCa() {
    this._rootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaInput() {
    return this._rootCa;
  }

  // tls_cert - computed: false, optional: true, required: false
  private _tlsCert?: string; 
  public get tlsCert() {
    return this.getStringAttribute('tls_cert');
  }
  public set tlsCert(value: string) {
    this._tlsCert = value;
  }
  public resetTlsCert() {
    this._tlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertInput() {
    return this._tlsCert;
  }

  // tls_key - computed: false, optional: true, required: false
  private _tlsKey?: string; 
  public get tlsKey() {
    return this.getStringAttribute('tls_key');
  }
  public set tlsKey(value: string) {
    this._tlsKey = value;
  }
  public resetTlsKey() {
    this._tlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsKeyInput() {
    return this._tlsKey;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#alpn_protocols DataK8SGlooSoloIoProxyV1Manifest#alpn_protocols}
  */
  readonly alpnProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#disable_tls_session_resumption DataK8SGlooSoloIoProxyV1Manifest#disable_tls_session_resumption}
  */
  readonly disableTlsSessionResumption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#ocsp_staple_policy DataK8SGlooSoloIoProxyV1Manifest#ocsp_staple_policy}
  */
  readonly ocspStaplePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#one_way_tls DataK8SGlooSoloIoProxyV1Manifest#one_way_tls}
  */
  readonly oneWayTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#parameters DataK8SGlooSoloIoProxyV1Manifest#parameters}
  */
  readonly parameters?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#sds DataK8SGlooSoloIoProxyV1Manifest#sds}
  */
  readonly sds?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSds;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#secret_ref DataK8SGlooSoloIoProxyV1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#sni_domains DataK8SGlooSoloIoProxyV1Manifest#sni_domains}
  */
  readonly sniDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#ssl_files DataK8SGlooSoloIoProxyV1Manifest#ssl_files}
  */
  readonly sslFiles?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFiles;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#transport_socket_connect_timeout DataK8SGlooSoloIoProxyV1Manifest#transport_socket_connect_timeout}
  */
  readonly transportSocketConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#verify_subject_alt_name DataK8SGlooSoloIoProxyV1Manifest#verify_subject_alt_name}
  */
  readonly verifySubjectAltName?: string[];
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alpn_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alpnProtocols),
    disable_tls_session_resumption: cdktf.booleanToTerraform(struct!.disableTlsSessionResumption),
    ocsp_staple_policy: cdktf.stringToTerraform(struct!.ocspStaplePolicy),
    one_way_tls: cdktf.booleanToTerraform(struct!.oneWayTls),
    parameters: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParametersToTerraform(struct!.parameters),
    sds: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsToTerraform(struct!.sds),
    secret_ref: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRefToTerraform(struct!.secretRef),
    sni_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sniDomains),
    ssl_files: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFilesToTerraform(struct!.sslFiles),
    transport_socket_connect_timeout: cdktf.stringToTerraform(struct!.transportSocketConnectTimeout),
    verify_subject_alt_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifySubjectAltName),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alpn_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alpnProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_tls_session_resumption: {
      value: cdktf.booleanToHclTerraform(struct!.disableTlsSessionResumption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ocsp_staple_policy: {
      value: cdktf.stringToHclTerraform(struct!.ocspStaplePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    one_way_tls: {
      value: cdktf.booleanToHclTerraform(struct!.oneWayTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParameters",
    },
    sds: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsToHclTerraform(struct!.sds),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSds",
    },
    secret_ref: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRef",
    },
    sni_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sniDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_files: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFilesToHclTerraform(struct!.sslFiles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFiles",
    },
    transport_socket_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.transportSocketConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_subject_alt_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifySubjectAltName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alpnProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.alpnProtocols = this._alpnProtocols;
    }
    if (this._disableTlsSessionResumption !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTlsSessionResumption = this._disableTlsSessionResumption;
    }
    if (this._ocspStaplePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaplePolicy = this._ocspStaplePolicy;
    }
    if (this._oneWayTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneWayTls = this._oneWayTls;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._sds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sds = this._sds?.internalValue;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sniDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniDomains = this._sniDomains;
    }
    if (this._sslFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslFiles = this._sslFiles?.internalValue;
    }
    if (this._transportSocketConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportSocketConnectTimeout = this._transportSocketConnectTimeout;
    }
    if (this._verifySubjectAltName !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySubjectAltName = this._verifySubjectAltName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alpnProtocols = undefined;
      this._disableTlsSessionResumption = undefined;
      this._ocspStaplePolicy = undefined;
      this._oneWayTls = undefined;
      this._parameters.internalValue = undefined;
      this._sds.internalValue = undefined;
      this._secretRef.internalValue = undefined;
      this._sniDomains = undefined;
      this._sslFiles.internalValue = undefined;
      this._transportSocketConnectTimeout = undefined;
      this._verifySubjectAltName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alpnProtocols = value.alpnProtocols;
      this._disableTlsSessionResumption = value.disableTlsSessionResumption;
      this._ocspStaplePolicy = value.ocspStaplePolicy;
      this._oneWayTls = value.oneWayTls;
      this._parameters.internalValue = value.parameters;
      this._sds.internalValue = value.sds;
      this._secretRef.internalValue = value.secretRef;
      this._sniDomains = value.sniDomains;
      this._sslFiles.internalValue = value.sslFiles;
      this._transportSocketConnectTimeout = value.transportSocketConnectTimeout;
      this._verifySubjectAltName = value.verifySubjectAltName;
    }
  }

  // alpn_protocols - computed: false, optional: true, required: false
  private _alpnProtocols?: string[]; 
  public get alpnProtocols() {
    return this.getListAttribute('alpn_protocols');
  }
  public set alpnProtocols(value: string[]) {
    this._alpnProtocols = value;
  }
  public resetAlpnProtocols() {
    this._alpnProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnProtocolsInput() {
    return this._alpnProtocols;
  }

  // disable_tls_session_resumption - computed: false, optional: true, required: false
  private _disableTlsSessionResumption?: boolean | cdktf.IResolvable; 
  public get disableTlsSessionResumption() {
    return this.getBooleanAttribute('disable_tls_session_resumption');
  }
  public set disableTlsSessionResumption(value: boolean | cdktf.IResolvable) {
    this._disableTlsSessionResumption = value;
  }
  public resetDisableTlsSessionResumption() {
    this._disableTlsSessionResumption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsSessionResumptionInput() {
    return this._disableTlsSessionResumption;
  }

  // ocsp_staple_policy - computed: false, optional: true, required: false
  private _ocspStaplePolicy?: string; 
  public get ocspStaplePolicy() {
    return this.getStringAttribute('ocsp_staple_policy');
  }
  public set ocspStaplePolicy(value: string) {
    this._ocspStaplePolicy = value;
  }
  public resetOcspStaplePolicy() {
    this._ocspStaplePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplePolicyInput() {
    return this._ocspStaplePolicy;
  }

  // one_way_tls - computed: false, optional: true, required: false
  private _oneWayTls?: boolean | cdktf.IResolvable; 
  public get oneWayTls() {
    return this.getBooleanAttribute('one_way_tls');
  }
  public set oneWayTls(value: boolean | cdktf.IResolvable) {
    this._oneWayTls = value;
  }
  public resetOneWayTls() {
    this._oneWayTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneWayTlsInput() {
    return this._oneWayTls;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // sds - computed: false, optional: true, required: false
  private _sds = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSdsOutputReference(this, "sds");
  public get sds() {
    return this._sds;
  }
  public putSds(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSds) {
    this._sds.internalValue = value;
  }
  public resetSds() {
    this._sds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds.internalValue;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // sni_domains - computed: false, optional: true, required: false
  private _sniDomains?: string[]; 
  public get sniDomains() {
    return this.getListAttribute('sni_domains');
  }
  public set sniDomains(value: string[]) {
    this._sniDomains = value;
  }
  public resetSniDomains() {
    this._sniDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniDomainsInput() {
    return this._sniDomains;
  }

  // ssl_files - computed: false, optional: true, required: false
  private _sslFiles = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFilesOutputReference(this, "ssl_files");
  public get sslFiles() {
    return this._sslFiles;
  }
  public putSslFiles(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsSslFiles) {
    this._sslFiles.internalValue = value;
  }
  public resetSslFiles() {
    this._sslFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslFilesInput() {
    return this._sslFiles.internalValue;
  }

  // transport_socket_connect_timeout - computed: false, optional: true, required: false
  private _transportSocketConnectTimeout?: string; 
  public get transportSocketConnectTimeout() {
    return this.getStringAttribute('transport_socket_connect_timeout');
  }
  public set transportSocketConnectTimeout(value: string) {
    this._transportSocketConnectTimeout = value;
  }
  public resetTransportSocketConnectTimeout() {
    this._transportSocketConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportSocketConnectTimeoutInput() {
    return this._transportSocketConnectTimeout;
  }

  // verify_subject_alt_name - computed: false, optional: true, required: false
  private _verifySubjectAltName?: string[]; 
  public get verifySubjectAltName() {
    return this.getListAttribute('verify_subject_alt_name');
  }
  public set verifySubjectAltName(value: string[]) {
    this._verifySubjectAltName = value;
  }
  public resetVerifySubjectAltName() {
    this._verifySubjectAltName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySubjectAltNameInput() {
    return this._verifySubjectAltName;
  }
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsOutputReference {
    return new DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecListeners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#aggregate_listener DataK8SGlooSoloIoProxyV1Manifest#aggregate_listener}
  */
  readonly aggregateListener?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#bind_address DataK8SGlooSoloIoProxyV1Manifest#bind_address}
  */
  readonly bindAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#bind_port DataK8SGlooSoloIoProxyV1Manifest#bind_port}
  */
  readonly bindPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#http_listener DataK8SGlooSoloIoProxyV1Manifest#http_listener}
  */
  readonly httpListener?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#hybrid_listener DataK8SGlooSoloIoProxyV1Manifest#hybrid_listener}
  */
  readonly hybridListener?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#metadata DataK8SGlooSoloIoProxyV1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#metadata_static DataK8SGlooSoloIoProxyV1Manifest#metadata_static}
  */
  readonly metadataStatic?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStatic;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#name DataK8SGlooSoloIoProxyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#options DataK8SGlooSoloIoProxyV1Manifest#options}
  */
  readonly options?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#route_options DataK8SGlooSoloIoProxyV1Manifest#route_options}
  */
  readonly routeOptions?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#ssl_configurations DataK8SGlooSoloIoProxyV1Manifest#ssl_configurations}
  */
  readonly sslConfigurations?: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#tcp_listener DataK8SGlooSoloIoProxyV1Manifest#tcp_listener}
  */
  readonly tcpListener?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#use_proxy_proto DataK8SGlooSoloIoProxyV1Manifest#use_proxy_proto}
  */
  readonly useProxyProto?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_listener: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.aggregateListener),
    bind_address: cdktf.stringToTerraform(struct!.bindAddress),
    bind_port: cdktf.numberToTerraform(struct!.bindPort),
    http_listener: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpListener),
    hybrid_listener: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hybridListener),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    metadata_static: dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticToTerraform(struct!.metadataStatic),
    name: cdktf.stringToTerraform(struct!.name),
    options: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsToTerraform(struct!.options),
    route_options: dataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptionsToTerraform(struct!.routeOptions),
    ssl_configurations: cdktf.listMapper(dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsToTerraform, false)(struct!.sslConfigurations),
    tcp_listener: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tcpListener),
    use_proxy_proto: cdktf.booleanToTerraform(struct!.useProxyProto),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecListenersToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_listener: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.aggregateListener),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    bind_address: {
      value: cdktf.stringToHclTerraform(struct!.bindAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_port: {
      value: cdktf.numberToHclTerraform(struct!.bindPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_listener: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpListener),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hybrid_listener: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hybridListener),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metadata_static: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticToHclTerraform(struct!.metadataStatic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStatic",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptions",
    },
    route_options: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptionsToHclTerraform(struct!.routeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptions",
    },
    ssl_configurations: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsToHclTerraform, false)(struct!.sslConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsList",
    },
    tcp_listener: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tcpListener),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    use_proxy_proto: {
      value: cdktf.booleanToHclTerraform(struct!.useProxyProto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateListener = this._aggregateListener;
    }
    if (this._bindAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAddress = this._bindAddress;
    }
    if (this._bindPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPort = this._bindPort;
    }
    if (this._httpListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpListener = this._httpListener;
    }
    if (this._hybridListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridListener = this._hybridListener;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metadataStatic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataStatic = this._metadataStatic?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._routeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeOptions = this._routeOptions?.internalValue;
    }
    if (this._sslConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfigurations = this._sslConfigurations?.internalValue;
    }
    if (this._tcpListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpListener = this._tcpListener;
    }
    if (this._useProxyProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxyProto = this._useProxyProto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateListener = undefined;
      this._bindAddress = undefined;
      this._bindPort = undefined;
      this._httpListener = undefined;
      this._hybridListener = undefined;
      this._metadata = undefined;
      this._metadataStatic.internalValue = undefined;
      this._name = undefined;
      this._options.internalValue = undefined;
      this._routeOptions.internalValue = undefined;
      this._sslConfigurations.internalValue = undefined;
      this._tcpListener = undefined;
      this._useProxyProto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateListener = value.aggregateListener;
      this._bindAddress = value.bindAddress;
      this._bindPort = value.bindPort;
      this._httpListener = value.httpListener;
      this._hybridListener = value.hybridListener;
      this._metadata = value.metadata;
      this._metadataStatic.internalValue = value.metadataStatic;
      this._name = value.name;
      this._options.internalValue = value.options;
      this._routeOptions.internalValue = value.routeOptions;
      this._sslConfigurations.internalValue = value.sslConfigurations;
      this._tcpListener = value.tcpListener;
      this._useProxyProto = value.useProxyProto;
    }
  }

  // aggregate_listener - computed: false, optional: true, required: false
  private _aggregateListener?: { [key: string]: string }; 
  public get aggregateListener() {
    return this.getStringMapAttribute('aggregate_listener');
  }
  public set aggregateListener(value: { [key: string]: string }) {
    this._aggregateListener = value;
  }
  public resetAggregateListener() {
    this._aggregateListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateListenerInput() {
    return this._aggregateListener;
  }

  // bind_address - computed: false, optional: true, required: false
  private _bindAddress?: string; 
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }
  public set bindAddress(value: string) {
    this._bindAddress = value;
  }
  public resetBindAddress() {
    this._bindAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddressInput() {
    return this._bindAddress;
  }

  // bind_port - computed: false, optional: true, required: false
  private _bindPort?: number; 
  public get bindPort() {
    return this.getNumberAttribute('bind_port');
  }
  public set bindPort(value: number) {
    this._bindPort = value;
  }
  public resetBindPort() {
    this._bindPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPortInput() {
    return this._bindPort;
  }

  // http_listener - computed: false, optional: true, required: false
  private _httpListener?: { [key: string]: string }; 
  public get httpListener() {
    return this.getStringMapAttribute('http_listener');
  }
  public set httpListener(value: { [key: string]: string }) {
    this._httpListener = value;
  }
  public resetHttpListener() {
    this._httpListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpListenerInput() {
    return this._httpListener;
  }

  // hybrid_listener - computed: false, optional: true, required: false
  private _hybridListener?: { [key: string]: string }; 
  public get hybridListener() {
    return this.getStringMapAttribute('hybrid_listener');
  }
  public set hybridListener(value: { [key: string]: string }) {
    this._hybridListener = value;
  }
  public resetHybridListener() {
    this._hybridListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridListenerInput() {
    return this._hybridListener;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_static - computed: false, optional: true, required: false
  private _metadataStatic = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStaticOutputReference(this, "metadata_static");
  public get metadataStatic() {
    return this._metadataStatic;
  }
  public putMetadataStatic(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersMetadataStatic) {
    this._metadataStatic.internalValue = value;
  }
  public resetMetadataStatic() {
    this._metadataStatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataStaticInput() {
    return this._metadataStatic.internalValue;
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

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // route_options - computed: false, optional: true, required: false
  private _routeOptions = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptionsOutputReference(this, "route_options");
  public get routeOptions() {
    return this._routeOptions;
  }
  public putRouteOptions(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersRouteOptions) {
    this._routeOptions.internalValue = value;
  }
  public resetRouteOptions() {
    this._routeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOptionsInput() {
    return this._routeOptions.internalValue;
  }

  // ssl_configurations - computed: false, optional: true, required: false
  private _sslConfigurations = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurationsList(this, "ssl_configurations", false);
  public get sslConfigurations() {
    return this._sslConfigurations;
  }
  public putSslConfigurations(value: DataK8SGlooSoloIoProxyV1ManifestSpecListenersSslConfigurations[] | cdktf.IResolvable) {
    this._sslConfigurations.internalValue = value;
  }
  public resetSslConfigurations() {
    this._sslConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigurationsInput() {
    return this._sslConfigurations.internalValue;
  }

  // tcp_listener - computed: false, optional: true, required: false
  private _tcpListener?: { [key: string]: string }; 
  public get tcpListener() {
    return this.getStringMapAttribute('tcp_listener');
  }
  public set tcpListener(value: { [key: string]: string }) {
    this._tcpListener = value;
  }
  public resetTcpListener() {
    this._tcpListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListenerInput() {
    return this._tcpListener;
  }

  // use_proxy_proto - computed: false, optional: true, required: false
  private _useProxyProto?: boolean | cdktf.IResolvable; 
  public get useProxyProto() {
    return this.getBooleanAttribute('use_proxy_proto');
  }
  public set useProxyProto(value: boolean | cdktf.IResolvable) {
    this._useProxyProto = value;
  }
  public resetUseProxyProto() {
    this._useProxyProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyProtoInput() {
    return this._useProxyProto;
  }
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoProxyV1ManifestSpecListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoProxyV1ManifestSpecListenersOutputReference {
    return new DataK8SGlooSoloIoProxyV1ManifestSpecListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatuses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#statuses DataK8SGlooSoloIoProxyV1Manifest#statuses}
  */
  readonly statuses?: { [key: string]: string };
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatusesToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statuses: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.statuses),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatusesToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    statuses: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.statuses),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatusesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatuses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.statuses = this._statuses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatuses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statuses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statuses = value.statuses;
    }
  }

  // statuses - computed: false, optional: true, required: false
  private _statuses?: { [key: string]: string }; 
  public get statuses() {
    return this.getStringMapAttribute('statuses');
  }
  public set statuses(value: { [key: string]: string }) {
    this._statuses = value;
  }
  public resetStatuses() {
    this._statuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusesInput() {
    return this._statuses;
  }
}
export interface DataK8SGlooSoloIoProxyV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#compressed_spec DataK8SGlooSoloIoProxyV1Manifest#compressed_spec}
  */
  readonly compressedSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#listeners DataK8SGlooSoloIoProxyV1Manifest#listeners}
  */
  readonly listeners?: DataK8SGlooSoloIoProxyV1ManifestSpecListeners[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#namespaced_statuses DataK8SGlooSoloIoProxyV1Manifest#namespaced_statuses}
  */
  readonly namespacedStatuses?: DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatuses;
}

export function dataK8SGlooSoloIoProxyV1ManifestSpecToTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compressed_spec: cdktf.stringToTerraform(struct!.compressedSpec),
    listeners: cdktf.listMapper(dataK8SGlooSoloIoProxyV1ManifestSpecListenersToTerraform, false)(struct!.listeners),
    namespaced_statuses: dataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatusesToTerraform(struct!.namespacedStatuses),
  }
}


export function dataK8SGlooSoloIoProxyV1ManifestSpecToHclTerraform(struct?: DataK8SGlooSoloIoProxyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compressed_spec: {
      value: cdktf.stringToHclTerraform(struct!.compressedSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listeners: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoProxyV1ManifestSpecListenersToHclTerraform, false)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecListenersList",
    },
    namespaced_statuses: {
      value: dataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatusesToHclTerraform(struct!.namespacedStatuses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatuses",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoProxyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoProxyV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressedSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressedSpec = this._compressedSpec;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    if (this._namespacedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedStatuses = this._namespacedStatuses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoProxyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressedSpec = undefined;
      this._listeners.internalValue = undefined;
      this._namespacedStatuses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressedSpec = value.compressedSpec;
      this._listeners.internalValue = value.listeners;
      this._namespacedStatuses.internalValue = value.namespacedStatuses;
    }
  }

  // compressed_spec - computed: false, optional: true, required: false
  private _compressedSpec?: string; 
  public get compressedSpec() {
    return this.getStringAttribute('compressed_spec');
  }
  public set compressedSpec(value: string) {
    this._compressedSpec = value;
  }
  public resetCompressedSpec() {
    this._compressedSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedSpecInput() {
    return this._compressedSpec;
  }

  // listeners - computed: false, optional: true, required: false
  private _listeners = new DataK8SGlooSoloIoProxyV1ManifestSpecListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: DataK8SGlooSoloIoProxyV1ManifestSpecListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  public resetListeners() {
    this._listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }

  // namespaced_statuses - computed: false, optional: true, required: false
  private _namespacedStatuses = new DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatusesOutputReference(this, "namespaced_statuses");
  public get namespacedStatuses() {
    return this._namespacedStatuses;
  }
  public putNamespacedStatuses(value: DataK8SGlooSoloIoProxyV1ManifestSpecNamespacedStatuses) {
    this._namespacedStatuses.internalValue = value;
  }
  public resetNamespacedStatuses() {
    this._namespacedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedStatusesInput() {
    return this._namespacedStatuses.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest k8s_gloo_solo_io_proxy_v1_manifest}
*/
export class DataK8SGlooSoloIoProxyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gloo_solo_io_proxy_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGlooSoloIoProxyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGlooSoloIoProxyV1Manifest to import
  * @param importFromId The id of the existing DataK8SGlooSoloIoProxyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGlooSoloIoProxyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gloo_solo_io_proxy_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_proxy_v1_manifest k8s_gloo_solo_io_proxy_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGlooSoloIoProxyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGlooSoloIoProxyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gloo_solo_io_proxy_v1_manifest',
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
  private _metadata = new DataK8SGlooSoloIoProxyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGlooSoloIoProxyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGlooSoloIoProxyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGlooSoloIoProxyV1ManifestSpec) {
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
      metadata: dataK8SGlooSoloIoProxyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGlooSoloIoProxyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGlooSoloIoProxyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGlooSoloIoProxyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGlooSoloIoProxyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGlooSoloIoProxyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
