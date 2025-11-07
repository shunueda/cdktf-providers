// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#metadata DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadata;
  /**
  * QuotaSubtreeSpec is the spec for a resource plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#spec DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpec;
}
export interface DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#annotations DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#labels DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#name DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#namespace DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#disabled DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#hard_limit DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#hard_limit}
  */
  readonly hardLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#requests DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotasToTerraform(struct?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    hard_limit: cdktf.booleanToTerraform(struct!.hardLimit),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotasToHclTerraform(struct?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hard_limit: {
      value: cdktf.booleanToHclTerraform(struct!.hardLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._hardLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardLimit = this._hardLimit;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._hardLimit = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._hardLimit = value.hardLimit;
      this._requests = value.requests;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // hard_limit - computed: false, optional: true, required: false
  private _hardLimit?: boolean | cdktf.IResolvable; 
  public get hardLimit() {
    return this.getBooleanAttribute('hard_limit');
  }
  public set hardLimit(value: boolean | cdktf.IResolvable) {
    this._hardLimit = value;
  }
  public resetHardLimit() {
    this._hardLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardLimitInput() {
    return this._hardLimit;
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
export interface DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildren {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#name DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#namespace DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#path DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Quota is the spec for a QuotaSubtree resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#quotas DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#quotas}
  */
  readonly quotas?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotas;
}

export function dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenToTerraform(struct?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    quotas: dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotasToTerraform(struct!.quotas),
  }
}


export function dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenToHclTerraform(struct?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildren | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quotas: {
      value: dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotasToHclTerraform(struct!.quotas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotas",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildren | cdktf.IResolvable | undefined {
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
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._quotas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotas = this._quotas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildren | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._quotas.internalValue = undefined;
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
      this._path = value.path;
      this._quotas.internalValue = value.quotas;
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

  // quotas - computed: false, optional: true, required: false
  private _quotas = new DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotasOutputReference(this, "quotas");
  public get quotas() {
    return this._quotas;
  }
  public putQuotas(value: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenQuotas) {
    this._quotas.internalValue = value;
  }
  public resetQuotas() {
    this._quotas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotasInput() {
    return this._quotas.internalValue;
  }
}

export class DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenList extends cdktf.ComplexList {
  public internalValue? : DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildren[] | cdktf.IResolvable

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
  public get(index: number): DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenOutputReference {
    return new DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#children DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#children}
  */
  readonly children?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildren[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#parent DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#parent_namespace DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest#parent_namespace}
  */
  readonly parentNamespace?: string;
}

export function dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecToTerraform(struct?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    children: cdktf.listMapper(dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenToTerraform, false)(struct!.children),
    parent: cdktf.stringToTerraform(struct!.parent),
    parent_namespace: cdktf.stringToTerraform(struct!.parentNamespace),
  }
}


export function dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    children: {
      value: cdktf.listMapperHcl(dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenToHclTerraform, false)(struct!.children),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenList",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_namespace: {
      value: cdktf.stringToHclTerraform(struct!.parentNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._children?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.children = this._children?.internalValue;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._parentNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentNamespace = this._parentNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._children.internalValue = undefined;
      this._parent = undefined;
      this._parentNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._children.internalValue = value.children;
      this._parent = value.parent;
      this._parentNamespace = value.parentNamespace;
    }
  }

  // children - computed: false, optional: true, required: false
  private _children = new DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildrenList(this, "children", false);
  public get children() {
    return this._children;
  }
  public putChildren(value: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecChildren[] | cdktf.IResolvable) {
    this._children.internalValue = value;
  }
  public resetChildren() {
    this._children.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // parent_namespace - computed: false, optional: true, required: false
  private _parentNamespace?: string; 
  public get parentNamespace() {
    return this.getStringAttribute('parent_namespace');
  }
  public set parentNamespace(value: string) {
    this._parentNamespace = value;
  }
  public resetParentNamespace() {
    this._parentNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentNamespaceInput() {
    return this._parentNamespace;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest k8s_quota_codeflare_dev_quota_subtree_v1alpha1_manifest}
*/
export class DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_quota_codeflare_dev_quota_subtree_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_quota_codeflare_dev_quota_subtree_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/quota_codeflare_dev_quota_subtree_v1alpha1_manifest k8s_quota_codeflare_dev_quota_subtree_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_quota_codeflare_dev_quota_subtree_v1alpha1_manifest',
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
  private _metadata = new DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpec) {
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
      metadata: dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SQuotaCodeflareDevQuotaSubtreeV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
