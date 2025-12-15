// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#metadata DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#spec DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpec;
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#annotations DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#labels DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#name DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#method DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#method}
  */
  readonly method?: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategyToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategyToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#api_version DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#resource DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#update_strategy DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#update_strategy}
  */
  readonly updateStrategy?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategy;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    resource: cdktf.stringToTerraform(struct!.resource),
    update_strategy: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategyToTerraform(struct!.updateStrategy),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_strategy: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._resource = undefined;
      this._updateStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._resource = value.resource;
      this._updateStrategy.internalValue = value.updateStrategy;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsOutputReference {
    return new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#cache_cleanup_seconds DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#cache_cleanup_seconds}
  */
  readonly cacheCleanupSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#cache_timeout_seconds DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#cache_timeout_seconds}
  */
  readonly cacheTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#enabled DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtagToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_cleanup_seconds: cdktf.numberToTerraform(struct!.cacheCleanupSeconds),
    cache_timeout_seconds: cdktf.numberToTerraform(struct!.cacheTimeoutSeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtagToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_cleanup_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheCleanupSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheCleanupSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCleanupSeconds = this._cacheCleanupSeconds;
    }
    if (this._cacheTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTimeoutSeconds = this._cacheTimeoutSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheCleanupSeconds = undefined;
      this._cacheTimeoutSeconds = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheCleanupSeconds = value.cacheCleanupSeconds;
      this._cacheTimeoutSeconds = value.cacheTimeoutSeconds;
      this._enabled = value.enabled;
    }
  }

  // cache_cleanup_seconds - computed: false, optional: true, required: false
  private _cacheCleanupSeconds?: number; 
  public get cacheCleanupSeconds() {
    return this.getNumberAttribute('cache_cleanup_seconds');
  }
  public set cacheCleanupSeconds(value: number) {
    this._cacheCleanupSeconds = value;
  }
  public resetCacheCleanupSeconds() {
    this._cacheCleanupSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCleanupSecondsInput() {
    return this._cacheCleanupSeconds;
  }

  // cache_timeout_seconds - computed: false, optional: true, required: false
  private _cacheTimeoutSeconds?: number; 
  public get cacheTimeoutSeconds() {
    return this.getNumberAttribute('cache_timeout_seconds');
  }
  public set cacheTimeoutSeconds(value: number) {
    this._cacheTimeoutSeconds = value;
  }
  public resetCacheTimeoutSeconds() {
    this._cacheTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutSecondsInput() {
    return this._cacheTimeoutSeconds;
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
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#name DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#namespace DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#port DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#protocol DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookServiceToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookServiceToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookService | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookService | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._protocol = undefined;
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
      this._port = value.port;
      this._protocol = value.protocol;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#etag DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#etag}
  */
  readonly etag?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtag;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#path DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Sets the json unmarshall mode. One of the 'loose' or 'strict'. In 'strict' mode additional checks are performed to detect unknown and duplicated fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#response_un_marshall_mode DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#response_un_marshall_mode}
  */
  readonly responseUnMarshallMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#service DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#service}
  */
  readonly service?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#timeout DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#url DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etag: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtagToTerraform(struct!.etag),
    path: cdktf.stringToTerraform(struct!.path),
    response_un_marshall_mode: cdktf.stringToTerraform(struct!.responseUnMarshallMode),
    service: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookServiceToTerraform(struct!.service),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etag: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtagToHclTerraform(struct!.etag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtag",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_un_marshall_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseUnMarshallMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookService",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._responseUnMarshallMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnMarshallMode = this._responseUnMarshallMode;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._etag.internalValue = undefined;
      this._path = undefined;
      this._responseUnMarshallMode = undefined;
      this._service.internalValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._etag.internalValue = value.etag;
      this._path = value.path;
      this._responseUnMarshallMode = value.responseUnMarshallMode;
      this._service.internalValue = value.service;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // etag - computed: false, optional: true, required: false
  private _etag = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtagOutputReference(this, "etag");
  public get etag() {
    return this._etag;
  }
  public putEtag(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookEtag) {
    this._etag.internalValue = value;
  }
  public resetEtag() {
    this._etag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag.internalValue;
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

  // response_un_marshall_mode - computed: false, optional: true, required: false
  private _responseUnMarshallMode?: string; 
  public get responseUnMarshallMode() {
    return this.getStringAttribute('response_un_marshall_mode');
  }
  public set responseUnMarshallMode(value: string) {
    this._responseUnMarshallMode = value;
  }
  public resetResponseUnMarshallMode() {
    this._responseUnMarshallMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUnMarshallModeInput() {
    return this._responseUnMarshallMode;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#version DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#webhook DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#webhook}
  */
  readonly webhook?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhook;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    webhook: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookToTerraform(struct!.webhook),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
      this._webhook.internalValue = value.webhook;
    }
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

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#cache_cleanup_seconds DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#cache_cleanup_seconds}
  */
  readonly cacheCleanupSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#cache_timeout_seconds DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#cache_timeout_seconds}
  */
  readonly cacheTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#enabled DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtagToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_cleanup_seconds: cdktf.numberToTerraform(struct!.cacheCleanupSeconds),
    cache_timeout_seconds: cdktf.numberToTerraform(struct!.cacheTimeoutSeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtagToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_cleanup_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheCleanupSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheCleanupSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCleanupSeconds = this._cacheCleanupSeconds;
    }
    if (this._cacheTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTimeoutSeconds = this._cacheTimeoutSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheCleanupSeconds = undefined;
      this._cacheTimeoutSeconds = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheCleanupSeconds = value.cacheCleanupSeconds;
      this._cacheTimeoutSeconds = value.cacheTimeoutSeconds;
      this._enabled = value.enabled;
    }
  }

  // cache_cleanup_seconds - computed: false, optional: true, required: false
  private _cacheCleanupSeconds?: number; 
  public get cacheCleanupSeconds() {
    return this.getNumberAttribute('cache_cleanup_seconds');
  }
  public set cacheCleanupSeconds(value: number) {
    this._cacheCleanupSeconds = value;
  }
  public resetCacheCleanupSeconds() {
    this._cacheCleanupSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCleanupSecondsInput() {
    return this._cacheCleanupSeconds;
  }

  // cache_timeout_seconds - computed: false, optional: true, required: false
  private _cacheTimeoutSeconds?: number; 
  public get cacheTimeoutSeconds() {
    return this.getNumberAttribute('cache_timeout_seconds');
  }
  public set cacheTimeoutSeconds(value: number) {
    this._cacheTimeoutSeconds = value;
  }
  public resetCacheTimeoutSeconds() {
    this._cacheTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutSecondsInput() {
    return this._cacheTimeoutSeconds;
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
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#name DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#namespace DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#port DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#protocol DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookServiceToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookServiceToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookService | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookService | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._protocol = undefined;
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
      this._port = value.port;
      this._protocol = value.protocol;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#etag DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#etag}
  */
  readonly etag?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtag;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#path DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Sets the json unmarshall mode. One of the 'loose' or 'strict'. In 'strict' mode additional checks are performed to detect unknown and duplicated fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#response_un_marshall_mode DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#response_un_marshall_mode}
  */
  readonly responseUnMarshallMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#service DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#service}
  */
  readonly service?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#timeout DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#url DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etag: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtagToTerraform(struct!.etag),
    path: cdktf.stringToTerraform(struct!.path),
    response_un_marshall_mode: cdktf.stringToTerraform(struct!.responseUnMarshallMode),
    service: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookServiceToTerraform(struct!.service),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etag: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtagToHclTerraform(struct!.etag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtag",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_un_marshall_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseUnMarshallMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookService",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._responseUnMarshallMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnMarshallMode = this._responseUnMarshallMode;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._etag.internalValue = undefined;
      this._path = undefined;
      this._responseUnMarshallMode = undefined;
      this._service.internalValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._etag.internalValue = value.etag;
      this._path = value.path;
      this._responseUnMarshallMode = value.responseUnMarshallMode;
      this._service.internalValue = value.service;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // etag - computed: false, optional: true, required: false
  private _etag = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtagOutputReference(this, "etag");
  public get etag() {
    return this._etag;
  }
  public putEtag(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookEtag) {
    this._etag.internalValue = value;
  }
  public resetEtag() {
    this._etag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag.internalValue;
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

  // response_un_marshall_mode - computed: false, optional: true, required: false
  private _responseUnMarshallMode?: string; 
  public get responseUnMarshallMode() {
    return this.getStringAttribute('response_un_marshall_mode');
  }
  public set responseUnMarshallMode(value: string) {
    this._responseUnMarshallMode = value;
  }
  public resetResponseUnMarshallMode() {
    this._responseUnMarshallMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUnMarshallModeInput() {
    return this._responseUnMarshallMode;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#version DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#webhook DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#webhook}
  */
  readonly webhook?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhook;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    webhook: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookToTerraform(struct!.webhook),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
      this._webhook.internalValue = value.webhook;
    }
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

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#cache_cleanup_seconds DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#cache_cleanup_seconds}
  */
  readonly cacheCleanupSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#cache_timeout_seconds DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#cache_timeout_seconds}
  */
  readonly cacheTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#enabled DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtagToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_cleanup_seconds: cdktf.numberToTerraform(struct!.cacheCleanupSeconds),
    cache_timeout_seconds: cdktf.numberToTerraform(struct!.cacheTimeoutSeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtagToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_cleanup_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheCleanupSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheCleanupSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCleanupSeconds = this._cacheCleanupSeconds;
    }
    if (this._cacheTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTimeoutSeconds = this._cacheTimeoutSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheCleanupSeconds = undefined;
      this._cacheTimeoutSeconds = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheCleanupSeconds = value.cacheCleanupSeconds;
      this._cacheTimeoutSeconds = value.cacheTimeoutSeconds;
      this._enabled = value.enabled;
    }
  }

  // cache_cleanup_seconds - computed: false, optional: true, required: false
  private _cacheCleanupSeconds?: number; 
  public get cacheCleanupSeconds() {
    return this.getNumberAttribute('cache_cleanup_seconds');
  }
  public set cacheCleanupSeconds(value: number) {
    this._cacheCleanupSeconds = value;
  }
  public resetCacheCleanupSeconds() {
    this._cacheCleanupSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCleanupSecondsInput() {
    return this._cacheCleanupSeconds;
  }

  // cache_timeout_seconds - computed: false, optional: true, required: false
  private _cacheTimeoutSeconds?: number; 
  public get cacheTimeoutSeconds() {
    return this.getNumberAttribute('cache_timeout_seconds');
  }
  public set cacheTimeoutSeconds(value: number) {
    this._cacheTimeoutSeconds = value;
  }
  public resetCacheTimeoutSeconds() {
    this._cacheTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutSecondsInput() {
    return this._cacheTimeoutSeconds;
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
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#name DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#namespace DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#port DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#protocol DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookServiceToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookServiceToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookService | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookService | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._protocol = undefined;
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
      this._port = value.port;
      this._protocol = value.protocol;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#etag DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#etag}
  */
  readonly etag?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtag;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#path DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Sets the json unmarshall mode. One of the 'loose' or 'strict'. In 'strict' mode additional checks are performed to detect unknown and duplicated fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#response_un_marshall_mode DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#response_un_marshall_mode}
  */
  readonly responseUnMarshallMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#service DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#service}
  */
  readonly service?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#timeout DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#url DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etag: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtagToTerraform(struct!.etag),
    path: cdktf.stringToTerraform(struct!.path),
    response_un_marshall_mode: cdktf.stringToTerraform(struct!.responseUnMarshallMode),
    service: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookServiceToTerraform(struct!.service),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etag: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtagToHclTerraform(struct!.etag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtag",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_un_marshall_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseUnMarshallMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookService",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._responseUnMarshallMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnMarshallMode = this._responseUnMarshallMode;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._etag.internalValue = undefined;
      this._path = undefined;
      this._responseUnMarshallMode = undefined;
      this._service.internalValue = undefined;
      this._timeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._etag.internalValue = value.etag;
      this._path = value.path;
      this._responseUnMarshallMode = value.responseUnMarshallMode;
      this._service.internalValue = value.service;
      this._timeout = value.timeout;
      this._url = value.url;
    }
  }

  // etag - computed: false, optional: true, required: false
  private _etag = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtagOutputReference(this, "etag");
  public get etag() {
    return this._etag;
  }
  public putEtag(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookEtag) {
    this._etag.internalValue = value;
  }
  public resetEtag() {
    this._etag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag.internalValue;
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

  // response_un_marshall_mode - computed: false, optional: true, required: false
  private _responseUnMarshallMode?: string; 
  public get responseUnMarshallMode() {
    return this.getStringAttribute('response_un_marshall_mode');
  }
  public set responseUnMarshallMode(value: string) {
    this._responseUnMarshallMode = value;
  }
  public resetResponseUnMarshallMode() {
    this._responseUnMarshallMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUnMarshallModeInput() {
    return this._responseUnMarshallMode;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSync {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#version DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#webhook DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#webhook}
  */
  readonly webhook?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhook;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    webhook: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookToTerraform(struct!.webhook),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
      this._webhook.internalValue = value.webhook;
    }
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

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#customize DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#customize}
  */
  readonly customize?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#finalize DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#finalize}
  */
  readonly finalize?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#sync DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#sync}
  */
  readonly sync?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSync;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customize: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeToTerraform(struct!.customize),
    finalize: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeToTerraform(struct!.finalize),
    sync: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncToTerraform(struct!.sync),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customize: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeToHclTerraform(struct!.customize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomize",
    },
    finalize: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeToHclTerraform(struct!.finalize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalize",
    },
    sync: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncToHclTerraform(struct!.sync),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSync",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customize = this._customize?.internalValue;
    }
    if (this._finalize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalize = this._finalize?.internalValue;
    }
    if (this._sync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customize.internalValue = undefined;
      this._finalize.internalValue = undefined;
      this._sync.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customize.internalValue = value.customize;
      this._finalize.internalValue = value.finalize;
      this._sync.internalValue = value.sync;
    }
  }

  // customize - computed: false, optional: true, required: false
  private _customize = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomizeOutputReference(this, "customize");
  public get customize() {
    return this._customize;
  }
  public putCustomize(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksCustomize) {
    this._customize.internalValue = value;
  }
  public resetCustomize() {
    this._customize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizeInput() {
    return this._customize.internalValue;
  }

  // finalize - computed: false, optional: true, required: false
  private _finalize = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalizeOutputReference(this, "finalize");
  public get finalize() {
    return this._finalize;
  }
  public putFinalize(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksFinalize) {
    this._finalize.internalValue = value;
  }
  public resetFinalize() {
    this._finalize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizeInput() {
    return this._finalize.internalValue;
  }

  // sync - computed: false, optional: true, required: false
  private _sync = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSyncOutputReference(this, "sync");
  public get sync() {
    return this._sync;
  }
  public putSync(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksSync) {
    this._sync.internalValue = value;
  }
  public resetSync() {
    this._sync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync.internalValue;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#key DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#operator DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#values DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsOutputReference {
    return new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#match_annotations DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#match_annotations}
  */
  readonly matchAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#match_expressions DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchAnnotations),
    match_expressions: cdktf.listMapper(dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAnnotations = this._matchAnnotations;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchAnnotations = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchAnnotations = value.matchAnnotations;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_annotations - computed: false, optional: true, required: false
  private _matchAnnotations?: { [key: string]: string }; 
  public get matchAnnotations() {
    return this.getStringMapAttribute('match_annotations');
  }
  public set matchAnnotations(value: { [key: string]: string }) {
    this._matchAnnotations = value;
  }
  public resetMatchAnnotations() {
    this._matchAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAnnotationsInput() {
    return this._matchAnnotations;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#key DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#operator DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#values DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#match_expressions DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#match_labels DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsList",
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

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#annotation_selector DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#annotation_selector}
  */
  readonly annotationSelector?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#api_version DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#label_selector DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#resource DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorToTerraform(struct!.annotationSelector),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    label_selector: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorToTerraform(struct!.labelSelector),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorToHclTerraform(struct!.annotationSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelector",
    },
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelector",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector?.internalValue;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector.internalValue = undefined;
      this._apiVersion = undefined;
      this._labelSelector.internalValue = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector.internalValue = value.annotationSelector;
      this._apiVersion = value.apiVersion;
      this._labelSelector.internalValue = value.labelSelector;
      this._resource = value.resource;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelectorOutputReference(this, "annotation_selector");
  public get annotationSelector() {
    return this._annotationSelector;
  }
  public putAnnotationSelector(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesAnnotationSelector) {
    this._annotationSelector.internalValue = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector.internalValue;
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesOutputReference {
    return new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#attachments DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#attachments}
  */
  readonly attachments?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachments[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#hooks DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#hooks}
  */
  readonly hooks?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#resources DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#resources}
  */
  readonly resources: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#resync_period_seconds DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest#resync_period_seconds}
  */
  readonly resyncPeriodSeconds?: number;
}

export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachments: cdktf.listMapper(dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsToTerraform, false)(struct!.attachments),
    hooks: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksToTerraform(struct!.hooks),
    resources: cdktf.listMapper(dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesToTerraform, false)(struct!.resources),
    resync_period_seconds: cdktf.numberToTerraform(struct!.resyncPeriodSeconds),
  }
}


export function dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachments: {
      value: cdktf.listMapperHcl(dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsToHclTerraform, false)(struct!.attachments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsList",
    },
    hooks: {
      value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksToHclTerraform(struct!.hooks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooks",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesList",
    },
    resync_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.resyncPeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachments = this._attachments?.internalValue;
    }
    if (this._hooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hooks = this._hooks?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._resyncPeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resyncPeriodSeconds = this._resyncPeriodSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachments.internalValue = undefined;
      this._hooks.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._resyncPeriodSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachments.internalValue = value.attachments;
      this._hooks.internalValue = value.hooks;
      this._resources.internalValue = value.resources;
      this._resyncPeriodSeconds = value.resyncPeriodSeconds;
    }
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecAttachments[] | cdktf.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecHooks) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // resync_period_seconds - computed: false, optional: true, required: false
  private _resyncPeriodSeconds?: number; 
  public get resyncPeriodSeconds() {
    return this.getNumberAttribute('resync_period_seconds');
  }
  public set resyncPeriodSeconds(value: number) {
    this._resyncPeriodSeconds = value;
  }
  public resetResyncPeriodSeconds() {
    this._resyncPeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncPeriodSecondsInput() {
    return this._resyncPeriodSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest k8s_metacontroller_k8s_io_decorator_controller_v1alpha1_manifest}
*/
export class DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_metacontroller_k8s_io_decorator_controller_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_metacontroller_k8s_io_decorator_controller_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/metacontroller_k8s_io_decorator_controller_v1alpha1_manifest k8s_metacontroller_k8s_io_decorator_controller_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_metacontroller_k8s_io_decorator_controller_v1alpha1_manifest',
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
  private _metadata = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMetacontrollerK8SIoDecoratorControllerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
