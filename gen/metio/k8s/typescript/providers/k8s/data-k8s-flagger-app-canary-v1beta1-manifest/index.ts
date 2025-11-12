// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFlaggerAppCanaryV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#metadata DataK8SFlaggerAppCanaryV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SFlaggerAppCanaryV1Beta1ManifestMetadata;
  /**
  * CanarySpec defines the desired state of a Canary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#spec DataK8SFlaggerAppCanaryV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpec;
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#annotations DataK8SFlaggerAppCanaryV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#labels DataK8SFlaggerAppCanaryV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#namespace DataK8SFlaggerAppCanaryV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestMetadataToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFlaggerAppCanaryV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRef {
  /**
  * Name of the alert provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the alert provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#namespace DataK8SFlaggerAppCanaryV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRefToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRefToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRef | cdktf.IResolvable): any {
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlerts {
  /**
  * Name of the this alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Alert provider reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#provider_ref DataK8SFlaggerAppCanaryV1Beta1Manifest#provider_ref}
  */
  readonly providerRef: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRef;
  /**
  * Severity level can be info, warn, error (default info)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#severity DataK8SFlaggerAppCanaryV1Beta1Manifest#severity}
  */
  readonly severity?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    provider_ref: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRefToTerraform(struct!.providerRef),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlerts | cdktf.IResolvable): any {
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
    provider_ref: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRefToHclTerraform(struct!.providerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRef",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerRef = this._providerRef?.internalValue;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._providerRef.internalValue = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._providerRef.internalValue = value.providerRef;
      this._severity = value.severity;
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

  // provider_ref - computed: false, optional: false, required: true
  private _providerRef = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRefOutputReference(this, "provider_ref");
  public get providerRef() {
    return this._providerRef;
  }
  public putProviderRef(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsProviderRef) {
    this._providerRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerRefInput() {
    return this._providerRef.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlerts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#suffix DataK8SFlaggerAppCanaryV1Beta1Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeadersToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeadersToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParamsToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParamsToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#headers DataK8SFlaggerAppCanaryV1Beta1Manifest#headers}
  */
  readonly headers?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeaders;
  /**
  * Query parameters for matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#query_params DataK8SFlaggerAppCanaryV1Beta1Manifest#query_params}
  */
  readonly queryParams?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParams;
  /**
  * Applicable only when the 'mesh' gateway is included in the service.gateways list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#source_labels DataK8SFlaggerAppCanaryV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels?: { [key: string]: string };
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeadersToTerraform(struct!.headers),
    query_params: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParamsToTerraform(struct!.queryParams),
    source_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sourceLabels),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeaders",
    },
    query_params: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParamsToHclTerraform(struct!.queryParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParams",
    },
    source_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._queryParams.internalValue = undefined;
      this._sourceLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._queryParams.internalValue = value.queryParams;
      this._sourceLabels = value.sourceLabels;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParamsOutputReference(this, "query_params");
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchQueryParams) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: { [key: string]: string }; 
  public get sourceLabels() {
    return this.getStringMapAttribute('source_labels');
  }
  public set sourceLabels(value: { [key: string]: string }) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRef {
  /**
  * Name of this metric template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of this metric template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#namespace DataK8SFlaggerAppCanaryV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRefToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRefToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRef | cdktf.IResolvable): any {
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRange {
  /**
  * Max value accepted for this metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#max DataK8SFlaggerAppCanaryV1Beta1Manifest#max}
  */
  readonly max?: number;
  /**
  * Min value accepted for this metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#min DataK8SFlaggerAppCanaryV1Beta1Manifest#min}
  */
  readonly min?: number;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRangeToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRangeToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetrics {
  /**
  * Interval of the query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#interval DataK8SFlaggerAppCanaryV1Beta1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Name of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Prometheus query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#query DataK8SFlaggerAppCanaryV1Beta1Manifest#query}
  */
  readonly query?: string;
  /**
  * Metric template reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#template_ref DataK8SFlaggerAppCanaryV1Beta1Manifest#template_ref}
  */
  readonly templateRef?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRef;
  /**
  * Additional variables to be used in the metrics query (key-value pairs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#template_variables DataK8SFlaggerAppCanaryV1Beta1Manifest#template_variables}
  */
  readonly templateVariables?: { [key: string]: string };
  /**
  * Max value accepted for this metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#threshold DataK8SFlaggerAppCanaryV1Beta1Manifest#threshold}
  */
  readonly threshold?: number;
  /**
  * Range accepted for this metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#threshold_range DataK8SFlaggerAppCanaryV1Beta1Manifest#threshold_range}
  */
  readonly thresholdRange?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRange;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    template_ref: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRefToTerraform(struct!.templateRef),
    template_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.templateVariables),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_range: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRangeToTerraform(struct!.thresholdRange),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
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
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_ref: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRefToHclTerraform(struct!.templateRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRef",
    },
    template_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.templateVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_range: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRangeToHclTerraform(struct!.thresholdRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._templateRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef?.internalValue;
    }
    if (this._templateVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVariables = this._templateVariables;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdRange = this._thresholdRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._query = undefined;
      this._templateRef.internalValue = undefined;
      this._templateVariables = undefined;
      this._threshold = undefined;
      this._thresholdRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._name = value.name;
      this._query = value.query;
      this._templateRef.internalValue = value.templateRef;
      this._templateVariables = value.templateVariables;
      this._threshold = value.threshold;
      this._thresholdRange.internalValue = value.thresholdRange;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // template_ref - computed: false, optional: true, required: false
  private _templateRef = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRefOutputReference(this, "template_ref");
  public get templateRef() {
    return this._templateRef;
  }
  public putTemplateRef(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsTemplateRef) {
    this._templateRef.internalValue = value;
  }
  public resetTemplateRef() {
    this._templateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef.internalValue;
  }

  // template_variables - computed: false, optional: true, required: false
  private _templateVariables?: { [key: string]: string }; 
  public get templateVariables() {
    return this.getStringMapAttribute('template_variables');
  }
  public set templateVariables(value: { [key: string]: string }) {
    this._templateVariables = value;
  }
  public resetTemplateVariables() {
    this._templateVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariablesInput() {
    return this._templateVariables;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_range - computed: false, optional: true, required: false
  private _thresholdRange = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRangeOutputReference(this, "threshold_range");
  public get thresholdRange() {
    return this._thresholdRange;
  }
  public putThresholdRange(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsThresholdRange) {
    this._thresholdRange.internalValue = value;
  }
  public resetThresholdRange() {
    this._thresholdRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdRangeInput() {
    return this._thresholdRange.internalValue;
  }
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinity {
  /**
  * CookieName is the key that will be used for the session affinity cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#cookie_name DataK8SFlaggerAppCanaryV1Beta1Manifest#cookie_name}
  */
  readonly cookieName: string;
  /**
  * MaxAge indicates the number of seconds until the session affinity cookie will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#max_age DataK8SFlaggerAppCanaryV1Beta1Manifest#max_age}
  */
  readonly maxAge?: number;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinityToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinityToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieName = undefined;
      this._maxAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieName = value.cookieName;
      this._maxAge = value.maxAge;
    }
  }

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooks {
  /**
  * Metadata (key-value pairs) for this webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#metadata DataK8SFlaggerAppCanaryV1Beta1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Mute all alerts for the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#mute_alert DataK8SFlaggerAppCanaryV1Beta1Manifest#mute_alert}
  */
  readonly muteAlert?: boolean | cdktf.IResolvable;
  /**
  * Name of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Number of retries for this webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#retries DataK8SFlaggerAppCanaryV1Beta1Manifest#retries}
  */
  readonly retries?: number;
  /**
  * Request timeout for this webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#timeout DataK8SFlaggerAppCanaryV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Type of the webhook pre, post or during rollout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#type DataK8SFlaggerAppCanaryV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * URL address of this webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#url DataK8SFlaggerAppCanaryV1Beta1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    mute_alert: cdktf.booleanToTerraform(struct!.muteAlert),
    name: cdktf.stringToTerraform(struct!.name),
    retries: cdktf.numberToTerraform(struct!.retries),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mute_alert: {
      value: cdktf.booleanToHclTerraform(struct!.muteAlert),
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
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._muteAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteAlert = this._muteAlert;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._muteAlert = undefined;
      this._name = undefined;
      this._retries = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._muteAlert = value.muteAlert;
      this._name = value.name;
      this._retries = value.retries;
      this._timeout = value.timeout;
      this._type = value.type;
      this._url = value.url;
    }
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

  // mute_alert - computed: false, optional: true, required: false
  private _muteAlert?: boolean | cdktf.IResolvable; 
  public get muteAlert() {
    return this.getBooleanAttribute('mute_alert');
  }
  public set muteAlert(value: boolean | cdktf.IResolvable) {
    this._muteAlert = value;
  }
  public resetMuteAlert() {
    this._muteAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteAlertInput() {
    return this._muteAlert;
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

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooks[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysis {
  /**
  * Alert list for this canary analysis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#alerts DataK8SFlaggerAppCanaryV1Beta1Manifest#alerts}
  */
  readonly alerts?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlerts[] | cdktf.IResolvable;
  /**
  * Percentage of pods that need to be available to consider canary as ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#canary_ready_threshold DataK8SFlaggerAppCanaryV1Beta1Manifest#canary_ready_threshold}
  */
  readonly canaryReadyThreshold?: number;
  /**
  * Schedule interval for this canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#interval DataK8SFlaggerAppCanaryV1Beta1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Number of checks to run for A/B Testing and Blue/Green
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#iterations DataK8SFlaggerAppCanaryV1Beta1Manifest#iterations}
  */
  readonly iterations?: number;
  /**
  * A/B testing match conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#match DataK8SFlaggerAppCanaryV1Beta1Manifest#match}
  */
  readonly match?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatch[] | cdktf.IResolvable;
  /**
  * Max traffic weight routed to canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#max_weight DataK8SFlaggerAppCanaryV1Beta1Manifest#max_weight}
  */
  readonly maxWeight?: number;
  /**
  * Metric check list for this canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#metrics DataK8SFlaggerAppCanaryV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetrics[] | cdktf.IResolvable;
  /**
  * Mirror traffic to canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#mirror DataK8SFlaggerAppCanaryV1Beta1Manifest#mirror}
  */
  readonly mirror?: boolean | cdktf.IResolvable;
  /**
  * Weight of traffic to be mirrored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#mirror_weight DataK8SFlaggerAppCanaryV1Beta1Manifest#mirror_weight}
  */
  readonly mirrorWeight?: number;
  /**
  * Percentage of pods that need to be available to consider primary as ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#primary_ready_threshold DataK8SFlaggerAppCanaryV1Beta1Manifest#primary_ready_threshold}
  */
  readonly primaryReadyThreshold?: number;
  /**
  * SessionAffinity represents the session affinity settings for a canary run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#session_affinity DataK8SFlaggerAppCanaryV1Beta1Manifest#session_affinity}
  */
  readonly sessionAffinity?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinity;
  /**
  * Incremental traffic step weight for the analysis phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#step_weight DataK8SFlaggerAppCanaryV1Beta1Manifest#step_weight}
  */
  readonly stepWeight?: number;
  /**
  * Incremental traffic step weight for the promotion phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#step_weight_promotion DataK8SFlaggerAppCanaryV1Beta1Manifest#step_weight_promotion}
  */
  readonly stepWeightPromotion?: number;
  /**
  * Incremental traffic step weights for the analysis phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#step_weights DataK8SFlaggerAppCanaryV1Beta1Manifest#step_weights}
  */
  readonly stepWeights?: string[];
  /**
  * Max number of failed checks before rollback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#threshold DataK8SFlaggerAppCanaryV1Beta1Manifest#threshold}
  */
  readonly threshold?: number;
  /**
  * Webhook list for this canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#webhooks DataK8SFlaggerAppCanaryV1Beta1Manifest#webhooks}
  */
  readonly webhooks?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooks[] | cdktf.IResolvable;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alerts: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsToTerraform, false)(struct!.alerts),
    canary_ready_threshold: cdktf.numberToTerraform(struct!.canaryReadyThreshold),
    interval: cdktf.stringToTerraform(struct!.interval),
    iterations: cdktf.numberToTerraform(struct!.iterations),
    match: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchToTerraform, false)(struct!.match),
    max_weight: cdktf.numberToTerraform(struct!.maxWeight),
    metrics: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsToTerraform, false)(struct!.metrics),
    mirror: cdktf.booleanToTerraform(struct!.mirror),
    mirror_weight: cdktf.numberToTerraform(struct!.mirrorWeight),
    primary_ready_threshold: cdktf.numberToTerraform(struct!.primaryReadyThreshold),
    session_affinity: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinityToTerraform(struct!.sessionAffinity),
    step_weight: cdktf.numberToTerraform(struct!.stepWeight),
    step_weight_promotion: cdktf.numberToTerraform(struct!.stepWeightPromotion),
    step_weights: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stepWeights),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    webhooks: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksToTerraform, false)(struct!.webhooks),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alerts: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsToHclTerraform, false)(struct!.alerts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsList",
    },
    canary_ready_threshold: {
      value: cdktf.numberToHclTerraform(struct!.canaryReadyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iterations: {
      value: cdktf.numberToHclTerraform(struct!.iterations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchList",
    },
    max_weight: {
      value: cdktf.numberToHclTerraform(struct!.maxWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsList",
    },
    mirror: {
      value: cdktf.booleanToHclTerraform(struct!.mirror),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_weight: {
      value: cdktf.numberToHclTerraform(struct!.mirrorWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_ready_threshold: {
      value: cdktf.numberToHclTerraform(struct!.primaryReadyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_affinity: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinityToHclTerraform(struct!.sessionAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinity",
    },
    step_weight: {
      value: cdktf.numberToHclTerraform(struct!.stepWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_weight_promotion: {
      value: cdktf.numberToHclTerraform(struct!.stepWeightPromotion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_weights: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stepWeights),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    webhooks: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksToHclTerraform, false)(struct!.webhooks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alerts = this._alerts?.internalValue;
    }
    if (this._canaryReadyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryReadyThreshold = this._canaryReadyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._iterations !== undefined) {
      hasAnyValues = true;
      internalValueResult.iterations = this._iterations;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._maxWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWeight = this._maxWeight;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._mirror !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror;
    }
    if (this._mirrorWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorWeight = this._mirrorWeight;
    }
    if (this._primaryReadyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryReadyThreshold = this._primaryReadyThreshold;
    }
    if (this._sessionAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity?.internalValue;
    }
    if (this._stepWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepWeight = this._stepWeight;
    }
    if (this._stepWeightPromotion !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepWeightPromotion = this._stepWeightPromotion;
    }
    if (this._stepWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepWeights = this._stepWeights;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._webhooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhooks = this._webhooks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alerts.internalValue = undefined;
      this._canaryReadyThreshold = undefined;
      this._interval = undefined;
      this._iterations = undefined;
      this._match.internalValue = undefined;
      this._maxWeight = undefined;
      this._metrics.internalValue = undefined;
      this._mirror = undefined;
      this._mirrorWeight = undefined;
      this._primaryReadyThreshold = undefined;
      this._sessionAffinity.internalValue = undefined;
      this._stepWeight = undefined;
      this._stepWeightPromotion = undefined;
      this._stepWeights = undefined;
      this._threshold = undefined;
      this._webhooks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alerts.internalValue = value.alerts;
      this._canaryReadyThreshold = value.canaryReadyThreshold;
      this._interval = value.interval;
      this._iterations = value.iterations;
      this._match.internalValue = value.match;
      this._maxWeight = value.maxWeight;
      this._metrics.internalValue = value.metrics;
      this._mirror = value.mirror;
      this._mirrorWeight = value.mirrorWeight;
      this._primaryReadyThreshold = value.primaryReadyThreshold;
      this._sessionAffinity.internalValue = value.sessionAffinity;
      this._stepWeight = value.stepWeight;
      this._stepWeightPromotion = value.stepWeightPromotion;
      this._stepWeights = value.stepWeights;
      this._threshold = value.threshold;
      this._webhooks.internalValue = value.webhooks;
    }
  }

  // alerts - computed: false, optional: true, required: false
  private _alerts = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlertsList(this, "alerts", false);
  public get alerts() {
    return this._alerts;
  }
  public putAlerts(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisAlerts[] | cdktf.IResolvable) {
    this._alerts.internalValue = value;
  }
  public resetAlerts() {
    this._alerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts.internalValue;
  }

  // canary_ready_threshold - computed: false, optional: true, required: false
  private _canaryReadyThreshold?: number; 
  public get canaryReadyThreshold() {
    return this.getNumberAttribute('canary_ready_threshold');
  }
  public set canaryReadyThreshold(value: number) {
    this._canaryReadyThreshold = value;
  }
  public resetCanaryReadyThreshold() {
    this._canaryReadyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryReadyThresholdInput() {
    return this._canaryReadyThreshold;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // iterations - computed: false, optional: true, required: false
  private _iterations?: number; 
  public get iterations() {
    return this.getNumberAttribute('iterations');
  }
  public set iterations(value: number) {
    this._iterations = value;
  }
  public resetIterations() {
    this._iterations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationsInput() {
    return this._iterations;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // max_weight - computed: false, optional: true, required: false
  private _maxWeight?: number; 
  public get maxWeight() {
    return this.getNumberAttribute('max_weight');
  }
  public set maxWeight(value: number) {
    this._maxWeight = value;
  }
  public resetMaxWeight() {
    this._maxWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWeightInput() {
    return this._maxWeight;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror?: boolean | cdktf.IResolvable; 
  public get mirror() {
    return this.getBooleanAttribute('mirror');
  }
  public set mirror(value: boolean | cdktf.IResolvable) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
  }

  // mirror_weight - computed: false, optional: true, required: false
  private _mirrorWeight?: number; 
  public get mirrorWeight() {
    return this.getNumberAttribute('mirror_weight');
  }
  public set mirrorWeight(value: number) {
    this._mirrorWeight = value;
  }
  public resetMirrorWeight() {
    this._mirrorWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorWeightInput() {
    return this._mirrorWeight;
  }

  // primary_ready_threshold - computed: false, optional: true, required: false
  private _primaryReadyThreshold?: number; 
  public get primaryReadyThreshold() {
    return this.getNumberAttribute('primary_ready_threshold');
  }
  public set primaryReadyThreshold(value: number) {
    this._primaryReadyThreshold = value;
  }
  public resetPrimaryReadyThreshold() {
    this._primaryReadyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryReadyThresholdInput() {
    return this._primaryReadyThreshold;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinityOutputReference(this, "session_affinity");
  public get sessionAffinity() {
    return this._sessionAffinity;
  }
  public putSessionAffinity(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisSessionAffinity) {
    this._sessionAffinity.internalValue = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity.internalValue;
  }

  // step_weight - computed: false, optional: true, required: false
  private _stepWeight?: number; 
  public get stepWeight() {
    return this.getNumberAttribute('step_weight');
  }
  public set stepWeight(value: number) {
    this._stepWeight = value;
  }
  public resetStepWeight() {
    this._stepWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepWeightInput() {
    return this._stepWeight;
  }

  // step_weight_promotion - computed: false, optional: true, required: false
  private _stepWeightPromotion?: number; 
  public get stepWeightPromotion() {
    return this.getNumberAttribute('step_weight_promotion');
  }
  public set stepWeightPromotion(value: number) {
    this._stepWeightPromotion = value;
  }
  public resetStepWeightPromotion() {
    this._stepWeightPromotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepWeightPromotionInput() {
    return this._stepWeightPromotion;
  }

  // step_weights - computed: false, optional: true, required: false
  private _stepWeights?: string[]; 
  public get stepWeights() {
    return this.getListAttribute('step_weights');
  }
  public set stepWeights(value: string[]) {
    this._stepWeights = value;
  }
  public resetStepWeights() {
    this._stepWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepWeightsInput() {
    return this._stepWeights;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // webhooks - computed: false, optional: true, required: false
  private _webhooks = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooksList(this, "webhooks", false);
  public get webhooks() {
    return this._webhooks;
  }
  public putWebhooks(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisWebhooks[] | cdktf.IResolvable) {
    this._webhooks.internalValue = value;
  }
  public resetWebhooks() {
    this._webhooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksInput() {
    return this._webhooks.internalValue;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#max_replicas DataK8SFlaggerAppCanaryV1Beta1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#min_replicas DataK8SFlaggerAppCanaryV1Beta1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicasToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicasToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
    }
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#api_version DataK8SFlaggerAppCanaryV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#kind DataK8SFlaggerAppCanaryV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#primary_scaler_queries DataK8SFlaggerAppCanaryV1Beta1Manifest#primary_scaler_queries}
  */
  readonly primaryScalerQueries?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#primary_scaler_replicas DataK8SFlaggerAppCanaryV1Beta1Manifest#primary_scaler_replicas}
  */
  readonly primaryScalerReplicas?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicas;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    primary_scaler_queries: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.primaryScalerQueries),
    primary_scaler_replicas: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicasToTerraform(struct!.primaryScalerReplicas),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    primary_scaler_queries: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.primaryScalerQueries),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    primary_scaler_replicas: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicasToHclTerraform(struct!.primaryScalerReplicas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicas",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryScalerQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryScalerQueries = this._primaryScalerQueries;
    }
    if (this._primaryScalerReplicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryScalerReplicas = this._primaryScalerReplicas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._primaryScalerQueries = undefined;
      this._primaryScalerReplicas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._primaryScalerQueries = value.primaryScalerQueries;
      this._primaryScalerReplicas.internalValue = value.primaryScalerReplicas;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // primary_scaler_queries - computed: false, optional: true, required: false
  private _primaryScalerQueries?: { [key: string]: string }; 
  public get primaryScalerQueries() {
    return this.getStringMapAttribute('primary_scaler_queries');
  }
  public set primaryScalerQueries(value: { [key: string]: string }) {
    this._primaryScalerQueries = value;
  }
  public resetPrimaryScalerQueries() {
    this._primaryScalerQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryScalerQueriesInput() {
    return this._primaryScalerQueries;
  }

  // primary_scaler_replicas - computed: false, optional: true, required: false
  private _primaryScalerReplicas = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicasOutputReference(this, "primary_scaler_replicas");
  public get primaryScalerReplicas() {
    return this._primaryScalerReplicas;
  }
  public putPrimaryScalerReplicas(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefPrimaryScalerReplicas) {
    this._primaryScalerReplicas.internalValue = value;
  }
  public resetPrimaryScalerReplicas() {
    this._primaryScalerReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryScalerReplicasInput() {
    return this._primaryScalerReplicas.internalValue;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#api_version DataK8SFlaggerAppCanaryV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#kind DataK8SFlaggerAppCanaryV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRefToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRefToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#api_version DataK8SFlaggerAppCanaryV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#kind DataK8SFlaggerAppCanaryV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRefToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRefToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#annotations DataK8SFlaggerAppCanaryV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#labels DataK8SFlaggerAppCanaryV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApexToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApexToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApex | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApex | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#annotations DataK8SFlaggerAppCanaryV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#labels DataK8SFlaggerAppCanaryV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanaryToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanaryToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanary | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanary | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOrigins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOrigins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOrigins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOrigins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOrigins[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#allow_credentials DataK8SFlaggerAppCanaryV1Beta1Manifest#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#allow_headers DataK8SFlaggerAppCanaryV1Beta1Manifest#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * List of HTTP methods allowed to access the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#allow_methods DataK8SFlaggerAppCanaryV1Beta1Manifest#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * The list of origins that are allowed to perform CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#allow_origin DataK8SFlaggerAppCanaryV1Beta1Manifest#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * String patterns that match allowed origins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#allow_origins DataK8SFlaggerAppCanaryV1Beta1Manifest#allow_origins}
  */
  readonly allowOrigins?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOrigins[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#expose_headers DataK8SFlaggerAppCanaryV1Beta1Manifest#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#max_age DataK8SFlaggerAppCanaryV1Beta1Manifest#max_age}
  */
  readonly maxAge?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    allow_origins: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsToTerraform, false)(struct!.allowOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsToHclTerraform, false)(struct!.allowOrigins),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigin = this._allowOrigin;
    }
    if (this._allowOrigins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins?.internalValue;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowOrigins.internalValue = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigin = value.allowOrigin;
      this._allowOrigins.internalValue = value.allowOrigins;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: true, required: false
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  public resetAllowOrigin() {
    this._allowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOriginsList(this, "allow_origins", false);
  public get allowOrigins() {
    return this._allowOrigins;
  }
  public putAllowOrigins(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyAllowOrigins[] | cdktf.IResolvable) {
    this._allowOrigins.internalValue = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins.internalValue;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#group DataK8SFlaggerAppCanaryV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#kind DataK8SFlaggerAppCanaryV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#namespace DataK8SFlaggerAppCanaryV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#port DataK8SFlaggerAppCanaryV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#section_name DataK8SFlaggerAppCanaryV1Beta1Manifest#section_name}
  */
  readonly sectionName?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
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
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._sectionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._port = value.port;
      this._sectionName = value.sectionName;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#add DataK8SFlaggerAppCanaryV1Beta1Manifest#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#remove DataK8SFlaggerAppCanaryV1Beta1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#set DataK8SFlaggerAppCanaryV1Beta1Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequestToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequestToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#add DataK8SFlaggerAppCanaryV1Beta1Manifest#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#remove DataK8SFlaggerAppCanaryV1Beta1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#set DataK8SFlaggerAppCanaryV1Beta1Manifest#set}
  */
  readonly set?: { [key: string]: string };
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponseToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponseToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#request DataK8SFlaggerAppCanaryV1Beta1Manifest#request}
  */
  readonly request?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#response DataK8SFlaggerAppCanaryV1Beta1Manifest#response}
  */
  readonly response?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponse;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequestToTerraform(struct!.request),
    response: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponseToTerraform(struct!.response),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequest",
    },
    response: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._request.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthorityToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthorityToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeadersToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeadersToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethodToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethodToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParamsToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParamsToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchScheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchSchemeToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchSchemeToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchScheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchSchemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchScheme | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchScheme | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUriToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUriToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#exact DataK8SFlaggerAppCanaryV1Beta1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#prefix DataK8SFlaggerAppCanaryV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * RE2 style regex-based match (https://github.com/google/re2/wiki/Syntax).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#regex DataK8SFlaggerAppCanaryV1Beta1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeadersToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeadersToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#authority DataK8SFlaggerAppCanaryV1Beta1Manifest#authority}
  */
  readonly authority?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthority;
  /**
  * Names of gateways where the rule should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#gateways DataK8SFlaggerAppCanaryV1Beta1Manifest#gateways}
  */
  readonly gateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#headers DataK8SFlaggerAppCanaryV1Beta1Manifest#headers}
  */
  readonly headers?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeaders;
  /**
  * Flag to specify whether the URI matching should be case-insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#ignore_uri_case DataK8SFlaggerAppCanaryV1Beta1Manifest#ignore_uri_case}
  */
  readonly ignoreUriCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#method DataK8SFlaggerAppCanaryV1Beta1Manifest#method}
  */
  readonly method?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethod;
  /**
  * The name assigned to a match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specifies the ports on the host that is being addressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#port DataK8SFlaggerAppCanaryV1Beta1Manifest#port}
  */
  readonly port?: number;
  /**
  * Query parameters for matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#query_params DataK8SFlaggerAppCanaryV1Beta1Manifest#query_params}
  */
  readonly queryParams?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#scheme DataK8SFlaggerAppCanaryV1Beta1Manifest#scheme}
  */
  readonly scheme?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchScheme;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#source_labels DataK8SFlaggerAppCanaryV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels?: { [key: string]: string };
  /**
  * Source namespace constraining the applicability of a rule to workloads in that namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#source_namespace DataK8SFlaggerAppCanaryV1Beta1Manifest#source_namespace}
  */
  readonly sourceNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#uri DataK8SFlaggerAppCanaryV1Beta1Manifest#uri}
  */
  readonly uri?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUri;
  /**
  * withoutHeader has the same syntax with the header, but has opposite meaning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#without_headers DataK8SFlaggerAppCanaryV1Beta1Manifest#without_headers}
  */
  readonly withoutHeaders?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeaders;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthorityToTerraform(struct!.authority),
    gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gateways),
    headers: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeadersToTerraform(struct!.headers),
    ignore_uri_case: cdktf.booleanToTerraform(struct!.ignoreUriCase),
    method: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethodToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    query_params: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParamsToTerraform(struct!.queryParams),
    scheme: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchSchemeToTerraform(struct!.scheme),
    source_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sourceLabels),
    source_namespace: cdktf.stringToTerraform(struct!.sourceNamespace),
    uri: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUriToTerraform(struct!.uri),
    without_headers: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeadersToTerraform(struct!.withoutHeaders),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthorityToHclTerraform(struct!.authority),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthority",
    },
    gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gateways),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeaders",
    },
    ignore_uri_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUriCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethod",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    query_params: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParamsToHclTerraform(struct!.queryParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParams",
    },
    scheme: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchSchemeToHclTerraform(struct!.scheme),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchScheme",
    },
    source_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source_namespace: {
      value: cdktf.stringToHclTerraform(struct!.sourceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUriToHclTerraform(struct!.uri),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUri",
    },
    without_headers: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeadersToHclTerraform(struct!.withoutHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeaders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority?.internalValue;
    }
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ignoreUriCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUriCase = this._ignoreUriCase;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._scheme?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme?.internalValue;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._sourceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespace = this._sourceNamespace;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    if (this._withoutHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withoutHeaders = this._withoutHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority.internalValue = undefined;
      this._gateways = undefined;
      this._headers.internalValue = undefined;
      this._ignoreUriCase = undefined;
      this._method.internalValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._queryParams.internalValue = undefined;
      this._scheme.internalValue = undefined;
      this._sourceLabels = undefined;
      this._sourceNamespace = undefined;
      this._uri.internalValue = undefined;
      this._withoutHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority.internalValue = value.authority;
      this._gateways = value.gateways;
      this._headers.internalValue = value.headers;
      this._ignoreUriCase = value.ignoreUriCase;
      this._method.internalValue = value.method;
      this._name = value.name;
      this._port = value.port;
      this._queryParams.internalValue = value.queryParams;
      this._scheme.internalValue = value.scheme;
      this._sourceLabels = value.sourceLabels;
      this._sourceNamespace = value.sourceNamespace;
      this._uri.internalValue = value.uri;
      this._withoutHeaders.internalValue = value.withoutHeaders;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthorityOutputReference(this, "authority");
  public get authority() {
    return this._authority;
  }
  public putAuthority(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchAuthority) {
    this._authority.internalValue = value;
  }
  public resetAuthority() {
    this._authority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority.internalValue;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return this.getListAttribute('gateways');
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ignore_uri_case - computed: false, optional: true, required: false
  private _ignoreUriCase?: boolean | cdktf.IResolvable; 
  public get ignoreUriCase() {
    return this.getBooleanAttribute('ignore_uri_case');
  }
  public set ignoreUriCase(value: boolean | cdktf.IResolvable) {
    this._ignoreUriCase = value;
  }
  public resetIgnoreUriCase() {
    this._ignoreUriCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUriCaseInput() {
    return this._ignoreUriCase;
  }

  // method - computed: false, optional: true, required: false
  private _method = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
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

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParamsOutputReference(this, "query_params");
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchQueryParams) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchSchemeOutputReference(this, "scheme");
  public get scheme() {
    return this._scheme;
  }
  public putScheme(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchScheme) {
    this._scheme.internalValue = value;
  }
  public resetScheme() {
    this._scheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme.internalValue;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: { [key: string]: string }; 
  public get sourceLabels() {
    return this.getStringMapAttribute('source_labels');
  }
  public set sourceLabels(value: { [key: string]: string }) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // source_namespace - computed: false, optional: true, required: false
  private _sourceNamespace?: string; 
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }
  public set sourceNamespace(value: string) {
    this._sourceNamespace = value;
  }
  public resetSourceNamespace() {
    this._sourceNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespaceInput() {
    return this._sourceNamespace;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUriOutputReference(this, "uri");
  public get uri() {
    return this._uri;
  }
  public putUri(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchUri) {
    this._uri.internalValue = value;
  }
  public resetUri() {
    this._uri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri.internalValue;
  }

  // without_headers - computed: false, optional: true, required: false
  private _withoutHeaders = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeadersOutputReference(this, "without_headers");
  public get withoutHeaders() {
    return this._withoutHeaders;
  }
  public putWithoutHeaders(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchWithoutHeaders) {
    this._withoutHeaders.internalValue = value;
  }
  public resetWithoutHeaders() {
    this._withoutHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutHeadersInput() {
    return this._withoutHeaders.internalValue;
  }
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatch[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#group DataK8SFlaggerAppCanaryV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#kind DataK8SFlaggerAppCanaryV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#namespace DataK8SFlaggerAppCanaryV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#port DataK8SFlaggerAppCanaryV1Beta1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRefToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRefToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._port = value.port;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#backend_ref DataK8SFlaggerAppCanaryV1Beta1Manifest#backend_ref}
  */
  readonly backendRef?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRef;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_ref: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRefToTerraform(struct!.backendRef),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_ref: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRefToHclTerraform(struct!.backendRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendRef = this._backendRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendRef.internalValue = value.backendRef;
    }
  }

  // backend_ref - computed: false, optional: true, required: false
  private _backendRef = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRefOutputReference(this, "backend_ref");
  public get backendRef() {
    return this._backendRef;
  }
  public putBackendRef(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorBackendRef) {
    this._backendRef.internalValue = value;
  }
  public resetBackendRef() {
    this._backendRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRefInput() {
    return this._backendRef.internalValue;
  }
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirror[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#annotations DataK8SFlaggerAppCanaryV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#labels DataK8SFlaggerAppCanaryV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimaryToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimaryToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimary | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimary | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetries {
  /**
  * Number of retries for a given request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#attempts DataK8SFlaggerAppCanaryV1Beta1Manifest#attempts}
  */
  readonly attempts?: number;
  /**
  * Timeout per retry attempt for a given request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#per_try_timeout DataK8SFlaggerAppCanaryV1Beta1Manifest#per_try_timeout}
  */
  readonly perTryTimeout?: string;
  /**
  * Specifies the conditions under which retry takes place
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#retry_on DataK8SFlaggerAppCanaryV1Beta1Manifest#retry_on}
  */
  readonly retryOn?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetriesToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    per_try_timeout: cdktf.stringToTerraform(struct!.perTryTimeout),
    retry_on: cdktf.stringToTerraform(struct!.retryOn),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetriesToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.stringToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_on: {
      value: cdktf.stringToHclTerraform(struct!.retryOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._perTryTimeout = undefined;
      this._retryOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._perTryTimeout = value.perTryTimeout;
      this._retryOn = value.retryOn;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: string; 
  public get perTryTimeout() {
    return this.getStringAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: string) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string; 
  public get retryOn() {
    return this.getStringAttribute('retry_on');
  }
  public set retryOn(value: string) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#authority DataK8SFlaggerAppCanaryV1Beta1Manifest#authority}
  */
  readonly authority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#type DataK8SFlaggerAppCanaryV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#uri DataK8SFlaggerAppCanaryV1Beta1Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewriteToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewriteToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttp {
  /**
  * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#h2_upgrade_policy DataK8SFlaggerAppCanaryV1Beta1Manifest#h2_upgrade_policy}
  */
  readonly h2UpgradePolicy?: string;
  /**
  * Maximum number of pending HTTP requests to a destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#http1_max_pending_requests DataK8SFlaggerAppCanaryV1Beta1Manifest#http1_max_pending_requests}
  */
  readonly http1MaxPendingRequests?: number;
  /**
  * Maximum number of requests to a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#http2_max_requests DataK8SFlaggerAppCanaryV1Beta1Manifest#http2_max_requests}
  */
  readonly http2MaxRequests?: number;
  /**
  * The idle timeout for upstream connection pool connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#idle_timeout DataK8SFlaggerAppCanaryV1Beta1Manifest#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Maximum number of requests per connection to a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#max_requests_per_connection DataK8SFlaggerAppCanaryV1Beta1Manifest#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#max_retries DataK8SFlaggerAppCanaryV1Beta1Manifest#max_retries}
  */
  readonly maxRetries?: number;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttpToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h2_upgrade_policy: cdktf.stringToTerraform(struct!.h2UpgradePolicy),
    http1_max_pending_requests: cdktf.numberToTerraform(struct!.http1MaxPendingRequests),
    http2_max_requests: cdktf.numberToTerraform(struct!.http2MaxRequests),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttpToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h2_upgrade_policy: {
      value: cdktf.stringToHclTerraform(struct!.h2UpgradePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http1_max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.http1MaxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_max_requests: {
      value: cdktf.numberToHclTerraform(struct!.http2MaxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h2UpgradePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpgradePolicy = this._h2UpgradePolicy;
    }
    if (this._http1MaxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1MaxPendingRequests = this._http1MaxPendingRequests;
    }
    if (this._http2MaxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2MaxRequests = this._http2MaxRequests;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = undefined;
      this._http1MaxPendingRequests = undefined;
      this._http2MaxRequests = undefined;
      this._idleTimeout = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._h2UpgradePolicy = value.h2UpgradePolicy;
      this._http1MaxPendingRequests = value.http1MaxPendingRequests;
      this._http2MaxRequests = value.http2MaxRequests;
      this._idleTimeout = value.idleTimeout;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
    }
  }

  // h2_upgrade_policy - computed: false, optional: true, required: false
  private _h2UpgradePolicy?: string; 
  public get h2UpgradePolicy() {
    return this.getStringAttribute('h2_upgrade_policy');
  }
  public set h2UpgradePolicy(value: string) {
    this._h2UpgradePolicy = value;
  }
  public resetH2UpgradePolicy() {
    this._h2UpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpgradePolicyInput() {
    return this._h2UpgradePolicy;
  }

  // http1_max_pending_requests - computed: false, optional: true, required: false
  private _http1MaxPendingRequests?: number; 
  public get http1MaxPendingRequests() {
    return this.getNumberAttribute('http1_max_pending_requests');
  }
  public set http1MaxPendingRequests(value: number) {
    this._http1MaxPendingRequests = value;
  }
  public resetHttp1MaxPendingRequests() {
    this._http1MaxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1MaxPendingRequestsInput() {
    return this._http1MaxPendingRequests;
  }

  // http2_max_requests - computed: false, optional: true, required: false
  private _http2MaxRequests?: number; 
  public get http2MaxRequests() {
    return this.getNumberAttribute('http2_max_requests');
  }
  public set http2MaxRequests(value: number) {
    this._http2MaxRequests = value;
  }
  public resetHttp2MaxRequests() {
    this._http2MaxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxRequestsInput() {
    return this._http2MaxRequests;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPool {
  /**
  * HTTP connection pool settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#http DataK8SFlaggerAppCanaryV1Beta1Manifest#http}
  */
  readonly http?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttp;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttpToTerraform(struct!.http),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#path DataK8SFlaggerAppCanaryV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Lifetime of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#ttl DataK8SFlaggerAppCanaryV1Beta1Manifest#ttl}
  */
  readonly ttl?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookieToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookieToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._ttl = value.ttl;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHash {
  /**
  * Hash based on HTTP cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#http_cookie DataK8SFlaggerAppCanaryV1Beta1Manifest#http_cookie}
  */
  readonly httpCookie?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookie;
  /**
  * Hash based on a specific HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#http_header_name DataK8SFlaggerAppCanaryV1Beta1Manifest#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * Hash based on a specific HTTP query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#http_query_parameter_name DataK8SFlaggerAppCanaryV1Beta1Manifest#http_query_parameter_name}
  */
  readonly httpQueryParameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#minimum_ring_size DataK8SFlaggerAppCanaryV1Beta1Manifest#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * Hash based on the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#use_source_ip DataK8SFlaggerAppCanaryV1Beta1Manifest#use_source_ip}
  */
  readonly useSourceIp?: boolean | cdktf.IResolvable;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_cookie: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookieToTerraform(struct!.httpCookie),
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    http_query_parameter_name: cdktf.stringToTerraform(struct!.httpQueryParameterName),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    use_source_ip: cdktf.booleanToTerraform(struct!.useSourceIp),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_cookie: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookieToHclTerraform(struct!.httpCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookie",
    },
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_query_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.httpQueryParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.useSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie?.internalValue;
    }
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._httpQueryParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpQueryParameterName = this._httpQueryParameterName;
    }
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    if (this._useSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSourceIp = this._useSourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = undefined;
      this._httpHeaderName = undefined;
      this._httpQueryParameterName = undefined;
      this._minimumRingSize = undefined;
      this._useSourceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCookie.internalValue = value.httpCookie;
      this._httpHeaderName = value.httpHeaderName;
      this._httpQueryParameterName = value.httpQueryParameterName;
      this._minimumRingSize = value.minimumRingSize;
      this._useSourceIp = value.useSourceIp;
    }
  }

  // http_cookie - computed: false, optional: true, required: false
  private _httpCookie = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookieOutputReference(this, "http_cookie");
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashHttpCookie) {
    this._httpCookie.internalValue = value;
  }
  public resetHttpCookie() {
    this._httpCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie.internalValue;
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // http_query_parameter_name - computed: false, optional: true, required: false
  private _httpQueryParameterName?: string; 
  public get httpQueryParameterName() {
    return this.getStringAttribute('http_query_parameter_name');
  }
  public set httpQueryParameterName(value: string) {
    this._httpQueryParameterName = value;
  }
  public resetHttpQueryParameterName() {
    this._httpQueryParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpQueryParameterNameInput() {
    return this._httpQueryParameterName;
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }

  // use_source_ip - computed: false, optional: true, required: false
  private _useSourceIp?: boolean | cdktf.IResolvable; 
  public get useSourceIp() {
    return this.getBooleanAttribute('use_source_ip');
  }
  public set useSourceIp(value: boolean | cdktf.IResolvable) {
    this._useSourceIp = value;
  }
  public resetUseSourceIp() {
    this._useSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpInput() {
    return this._useSourceIp;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistribute {
  /**
  * Originating locality, '/' separated, e.g.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#from DataK8SFlaggerAppCanaryV1Beta1Manifest#from}
  */
  readonly from?: string;
  /**
  * Map of upstream localities to traffic distribution weights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#to DataK8SFlaggerAppCanaryV1Beta1Manifest#to}
  */
  readonly to?: { [key: string]: string };
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.to),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.to),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: { [key: string]: string }; 
  public get to() {
    return this.getStringMapAttribute('to');
  }
  public set to(value: { [key: string]: string }) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailover {
  /**
  * Originating region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#from DataK8SFlaggerAppCanaryV1Beta1Manifest#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#to DataK8SFlaggerAppCanaryV1Beta1Manifest#to}
  */
  readonly to?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailover | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverList extends cdktf.ComplexList {
  public internalValue? : DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference {
    return new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSetting {
  /**
  * Optional: only one of distribute or failover can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#distribute DataK8SFlaggerAppCanaryV1Beta1Manifest#distribute}
  */
  readonly distribute?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable;
  /**
  * enable locality load balancing, this is DestinationRule-level and will override mesh wide settings in entirety.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#enabled DataK8SFlaggerAppCanaryV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Optional: only failover or distribute can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#failover DataK8SFlaggerAppCanaryV1Beta1Manifest#failover}
  */
  readonly failover?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeToTerraform, false)(struct!.distribute),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    failover: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverToTerraform, false)(struct!.failover),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeToHclTerraform, false)(struct!.distribute),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverToHclTerraform, false)(struct!.failover),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribute = this._distribute?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._failover?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribute.internalValue = undefined;
      this._enabled = undefined;
      this._failover.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribute.internalValue = value.distribute;
      this._enabled = value.enabled;
      this._failover.internalValue = value.failover;
    }
  }

  // distribute - computed: false, optional: true, required: false
  private _distribute = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistributeList(this, "distribute", false);
  public get distribute() {
    return this._distribute;
  }
  public putDistribute(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingDistribute[] | cdktf.IResolvable) {
    this._distribute.internalValue = value;
  }
  public resetDistribute() {
    this._distribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeInput() {
    return this._distribute.internalValue;
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

  // failover - computed: false, optional: true, required: false
  private _failover = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailoverList(this, "failover", false);
  public get failover() {
    return this._failover;
  }
  public putFailover(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingFailover[] | cdktf.IResolvable) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#consistent_hash DataK8SFlaggerAppCanaryV1Beta1Manifest#consistent_hash}
  */
  readonly consistentHash?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#locality_lb_setting DataK8SFlaggerAppCanaryV1Beta1Manifest#locality_lb_setting}
  */
  readonly localityLbSetting?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSetting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#simple DataK8SFlaggerAppCanaryV1Beta1Manifest#simple}
  */
  readonly simple?: string;
  /**
  * Represents the warmup duration of Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#warmup_duration_secs DataK8SFlaggerAppCanaryV1Beta1Manifest#warmup_duration_secs}
  */
  readonly warmupDurationSecs?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistent_hash: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashToTerraform(struct!.consistentHash),
    locality_lb_setting: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingToTerraform(struct!.localityLbSetting),
    simple: cdktf.stringToTerraform(struct!.simple),
    warmup_duration_secs: cdktf.stringToTerraform(struct!.warmupDurationSecs),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistent_hash: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashToHclTerraform(struct!.consistentHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHash",
    },
    locality_lb_setting: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingToHclTerraform(struct!.localityLbSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSetting",
    },
    simple: {
      value: cdktf.stringToHclTerraform(struct!.simple),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warmup_duration_secs: {
      value: cdktf.stringToHclTerraform(struct!.warmupDurationSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistentHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentHash = this._consistentHash?.internalValue;
    }
    if (this._localityLbSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityLbSetting = this._localityLbSetting?.internalValue;
    }
    if (this._simple !== undefined) {
      hasAnyValues = true;
      internalValueResult.simple = this._simple;
    }
    if (this._warmupDurationSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmupDurationSecs = this._warmupDurationSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = undefined;
      this._localityLbSetting.internalValue = undefined;
      this._simple = undefined;
      this._warmupDurationSecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistentHash.internalValue = value.consistentHash;
      this._localityLbSetting.internalValue = value.localityLbSetting;
      this._simple = value.simple;
      this._warmupDurationSecs = value.warmupDurationSecs;
    }
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHashOutputReference(this, "consistent_hash");
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // locality_lb_setting - computed: false, optional: true, required: false
  private _localityLbSetting = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSettingOutputReference(this, "locality_lb_setting");
  public get localityLbSetting() {
    return this._localityLbSetting;
  }
  public putLocalityLbSetting(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerLocalityLbSetting) {
    this._localityLbSetting.internalValue = value;
  }
  public resetLocalityLbSetting() {
    this._localityLbSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbSettingInput() {
    return this._localityLbSetting.internalValue;
  }

  // simple - computed: false, optional: true, required: false
  private _simple?: string; 
  public get simple() {
    return this.getStringAttribute('simple');
  }
  public set simple(value: string) {
    this._simple = value;
  }
  public resetSimple() {
    this._simple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleInput() {
    return this._simple;
  }

  // warmup_duration_secs - computed: false, optional: true, required: false
  private _warmupDurationSecs?: string; 
  public get warmupDurationSecs() {
    return this.getStringAttribute('warmup_duration_secs');
  }
  public set warmupDurationSecs(value: string) {
    this._warmupDurationSecs = value;
  }
  public resetWarmupDurationSecs() {
    this._warmupDurationSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmupDurationSecsInput() {
    return this._warmupDurationSecs;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetection {
  /**
  * Minimum ejection duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#base_ejection_time DataK8SFlaggerAppCanaryV1Beta1Manifest#base_ejection_time}
  */
  readonly baseEjectionTime?: string;
  /**
  * Number of 5xx errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#consecutive5xx_errors DataK8SFlaggerAppCanaryV1Beta1Manifest#consecutive5xx_errors}
  */
  readonly consecutive5XxErrors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#consecutive_errors DataK8SFlaggerAppCanaryV1Beta1Manifest#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * Number of gateway errors before a host is ejected from the connection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#consecutive_gateway_errors DataK8SFlaggerAppCanaryV1Beta1Manifest#consecutive_gateway_errors}
  */
  readonly consecutiveGatewayErrors?: number;
  /**
  * Time interval between ejection sweep analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#interval DataK8SFlaggerAppCanaryV1Beta1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#max_ejection_percent DataK8SFlaggerAppCanaryV1Beta1Manifest#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#min_health_percent DataK8SFlaggerAppCanaryV1Beta1Manifest#min_health_percent}
  */
  readonly minHealthPercent?: number;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetectionToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.stringToTerraform(struct!.baseEjectionTime),
    consecutive5xx_errors: cdktf.numberToTerraform(struct!.consecutive5XxErrors),
    consecutive_errors: cdktf.numberToTerraform(struct!.consecutiveErrors),
    consecutive_gateway_errors: cdktf.numberToTerraform(struct!.consecutiveGatewayErrors),
    interval: cdktf.stringToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    min_health_percent: cdktf.numberToTerraform(struct!.minHealthPercent),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetectionToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.stringToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consecutive5xx_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutive5XxErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_health_percent: {
      value: cdktf.numberToHclTerraform(struct!.minHealthPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._consecutive5XxErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive5XxErrors = this._consecutive5XxErrors;
    }
    if (this._consecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveErrors = this._consecutiveErrors;
    }
    if (this._consecutiveGatewayErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayErrors = this._consecutiveGatewayErrors;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._minHealthPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHealthPercent = this._minHealthPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseEjectionTime = undefined;
      this._consecutive5XxErrors = undefined;
      this._consecutiveErrors = undefined;
      this._consecutiveGatewayErrors = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
      this._minHealthPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseEjectionTime = value.baseEjectionTime;
      this._consecutive5XxErrors = value.consecutive5XxErrors;
      this._consecutiveErrors = value.consecutiveErrors;
      this._consecutiveGatewayErrors = value.consecutiveGatewayErrors;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._minHealthPercent = value.minHealthPercent;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: string; 
  public get baseEjectionTime() {
    return this.getStringAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: string) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // consecutive5xx_errors - computed: false, optional: true, required: false
  private _consecutive5XxErrors?: number; 
  public get consecutive5XxErrors() {
    return this.getNumberAttribute('consecutive5xx_errors');
  }
  public set consecutive5XxErrors(value: number) {
    this._consecutive5XxErrors = value;
  }
  public resetConsecutive5XxErrors() {
    this._consecutive5XxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutive5XxErrorsInput() {
    return this._consecutive5XxErrors;
  }

  // consecutive_errors - computed: false, optional: true, required: false
  private _consecutiveErrors?: number; 
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }
  public set consecutiveErrors(value: number) {
    this._consecutiveErrors = value;
  }
  public resetConsecutiveErrors() {
    this._consecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorsInput() {
    return this._consecutiveErrors;
  }

  // consecutive_gateway_errors - computed: false, optional: true, required: false
  private _consecutiveGatewayErrors?: number; 
  public get consecutiveGatewayErrors() {
    return this.getNumberAttribute('consecutive_gateway_errors');
  }
  public set consecutiveGatewayErrors(value: number) {
    this._consecutiveGatewayErrors = value;
  }
  public resetConsecutiveGatewayErrors() {
    this._consecutiveGatewayErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayErrorsInput() {
    return this._consecutiveGatewayErrors;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // min_health_percent - computed: false, optional: true, required: false
  private _minHealthPercent?: number; 
  public get minHealthPercent() {
    return this.getNumberAttribute('min_health_percent');
  }
  public set minHealthPercent(value: number) {
    this._minHealthPercent = value;
  }
  public resetMinHealthPercent() {
    this._minHealthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthPercentInput() {
    return this._minHealthPercent;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#ca_certificates DataK8SFlaggerAppCanaryV1Beta1Manifest#ca_certificates}
  */
  readonly caCertificates?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#client_certificate DataK8SFlaggerAppCanaryV1Beta1Manifest#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#mode DataK8SFlaggerAppCanaryV1Beta1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * REQUIRED if mode is 'MUTUAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#private_key DataK8SFlaggerAppCanaryV1Beta1Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * SNI string to present to the server during TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#sni DataK8SFlaggerAppCanaryV1Beta1Manifest#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#subject_alt_names DataK8SFlaggerAppCanaryV1Beta1Manifest#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTlsToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificates: cdktf.stringToTerraform(struct!.caCertificates),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    mode: cdktf.stringToTerraform(struct!.mode),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    sni: cdktf.stringToTerraform(struct!.sni),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTlsToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificates: {
      value: cdktf.stringToHclTerraform(struct!.caCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificates = undefined;
      this._clientCertificate = undefined;
      this._mode = undefined;
      this._privateKey = undefined;
      this._sni = undefined;
      this._subjectAltNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificates = value.caCertificates;
      this._clientCertificate = value.clientCertificate;
      this._mode = value.mode;
      this._privateKey = value.privateKey;
      this._sni = value.sni;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // ca_certificates - computed: false, optional: true, required: false
  private _caCertificates?: string; 
  public get caCertificates() {
    return this.getStringAttribute('ca_certificates');
  }
  public set caCertificates(value: string) {
    this._caCertificates = value;
  }
  public resetCaCertificates() {
    this._caCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#connection_pool DataK8SFlaggerAppCanaryV1Beta1Manifest#connection_pool}
  */
  readonly connectionPool?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPool;
  /**
  * Settings controlling the load balancer algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#load_balancer DataK8SFlaggerAppCanaryV1Beta1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancer;
  /**
  * Settings controlling eviction of unhealthy hosts from the load balancing pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#outlier_detection DataK8SFlaggerAppCanaryV1Beta1Manifest#outlier_detection}
  */
  readonly outlierDetection?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetection;
  /**
  * Istio TLS related settings for connections to the upstream service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#tls DataK8SFlaggerAppCanaryV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTls;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolToTerraform(struct!.connectionPool),
    load_balancer: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerToTerraform(struct!.loadBalancer),
    outlier_detection: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetectionToTerraform(struct!.outlierDetection),
    tls: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTlsToTerraform(struct!.tls),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pool: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolToHclTerraform(struct!.connectionPool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPool",
    },
    load_balancer: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancer",
    },
    outlier_detection: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetection",
    },
    tls: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPool = this._connectionPool?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPool.internalValue = value.connectionPool;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._outlierDetection.internalValue = value.outlierDetection;
      this._tls.internalValue = value.tls;
    }
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPoolOutputReference(this, "connection_pool");
  public get connectionPool() {
    return this._connectionPool;
  }
  public putConnectionPool(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyConnectionPool) {
    this._connectionPool.internalValue = value;
  }
  public resetConnectionPool() {
    this._connectionPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecService {
  /**
  * Metadata to add to the apex service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#apex DataK8SFlaggerAppCanaryV1Beta1Manifest#apex}
  */
  readonly apex?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApex;
  /**
  * Application protocol of the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#app_protocol DataK8SFlaggerAppCanaryV1Beta1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * AppMesh backend array
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#backends DataK8SFlaggerAppCanaryV1Beta1Manifest#backends}
  */
  readonly backends?: string[];
  /**
  * Metadata to add to the canary service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#canary DataK8SFlaggerAppCanaryV1Beta1Manifest#canary}
  */
  readonly canary?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanary;
  /**
  * Istio Cross-Origin Resource Sharing policy (CORS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#cors_policy DataK8SFlaggerAppCanaryV1Beta1Manifest#cors_policy}
  */
  readonly corsPolicy?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicy;
  /**
  * enable behaving as a delegate VirtualService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#delegation DataK8SFlaggerAppCanaryV1Beta1Manifest#delegation}
  */
  readonly delegation?: boolean | cdktf.IResolvable;
  /**
  * The list of parent Gateways for a HTTPRoute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#gateway_refs DataK8SFlaggerAppCanaryV1Beta1Manifest#gateway_refs}
  */
  readonly gatewayRefs?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefs[] | cdktf.IResolvable;
  /**
  * The list of Istio gateway for this virtual service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#gateways DataK8SFlaggerAppCanaryV1Beta1Manifest#gateways}
  */
  readonly gateways?: string[];
  /**
  * Headers operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#headers DataK8SFlaggerAppCanaryV1Beta1Manifest#headers}
  */
  readonly headers?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeaders;
  /**
  * The list of host names for this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#hosts DataK8SFlaggerAppCanaryV1Beta1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * URI match conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#match DataK8SFlaggerAppCanaryV1Beta1Manifest#match}
  */
  readonly match?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatch[] | cdktf.IResolvable;
  /**
  * AppMesh mesh name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#mesh_name DataK8SFlaggerAppCanaryV1Beta1Manifest#mesh_name}
  */
  readonly meshName?: string;
  /**
  * Mirror defines a schema for a filter that mirrors requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#mirror DataK8SFlaggerAppCanaryV1Beta1Manifest#mirror}
  */
  readonly mirror?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirror[] | cdktf.IResolvable;
  /**
  * Kubernetes service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Container port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#port DataK8SFlaggerAppCanaryV1Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Enable port dicovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#port_discovery DataK8SFlaggerAppCanaryV1Beta1Manifest#port_discovery}
  */
  readonly portDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Container port name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#port_name DataK8SFlaggerAppCanaryV1Beta1Manifest#port_name}
  */
  readonly portName?: string;
  /**
  * Metadata to add to the primary service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#primary DataK8SFlaggerAppCanaryV1Beta1Manifest#primary}
  */
  readonly primary?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimary;
  /**
  * Retry policy for HTTP requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#retries DataK8SFlaggerAppCanaryV1Beta1Manifest#retries}
  */
  readonly retries?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetries;
  /**
  * Rewrite HTTP URIs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#rewrite DataK8SFlaggerAppCanaryV1Beta1Manifest#rewrite}
  */
  readonly rewrite?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewrite;
  /**
  * Container target port name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#target_port DataK8SFlaggerAppCanaryV1Beta1Manifest#target_port}
  */
  readonly targetPort?: string;
  /**
  * HTTP or gRPC request timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#timeout DataK8SFlaggerAppCanaryV1Beta1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Istio traffic policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#traffic_policy DataK8SFlaggerAppCanaryV1Beta1Manifest#traffic_policy}
  */
  readonly trafficPolicy?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicy;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apex: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApexToTerraform(struct!.apex),
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    backends: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backends),
    canary: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanaryToTerraform(struct!.canary),
    cors_policy: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyToTerraform(struct!.corsPolicy),
    delegation: cdktf.booleanToTerraform(struct!.delegation),
    gateway_refs: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsToTerraform, false)(struct!.gatewayRefs),
    gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gateways),
    headers: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersToTerraform(struct!.headers),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    match: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchToTerraform, false)(struct!.match),
    mesh_name: cdktf.stringToTerraform(struct!.meshName),
    mirror: cdktf.listMapper(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorToTerraform, false)(struct!.mirror),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    port_discovery: cdktf.booleanToTerraform(struct!.portDiscovery),
    port_name: cdktf.stringToTerraform(struct!.portName),
    primary: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimaryToTerraform(struct!.primary),
    retries: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetriesToTerraform(struct!.retries),
    rewrite: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewriteToTerraform(struct!.rewrite),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    traffic_policy: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyToTerraform(struct!.trafficPolicy),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apex: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApexToHclTerraform(struct!.apex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApex",
    },
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backends: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backends),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    canary: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanaryToHclTerraform(struct!.canary),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanary",
    },
    cors_policy: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicy",
    },
    delegation: {
      value: cdktf.booleanToHclTerraform(struct!.delegation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_refs: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsToHclTerraform, false)(struct!.gatewayRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsList",
    },
    gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gateways),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeaders",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchToHclTerraform, false)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchList",
    },
    mesh_name: {
      value: cdktf.stringToHclTerraform(struct!.meshName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror: {
      value: cdktf.listMapperHcl(dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorToHclTerraform, false)(struct!.mirror),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    port_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.portDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimaryToHclTerraform(struct!.primary),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimary",
    },
    retries: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetriesToHclTerraform(struct!.retries),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetries",
    },
    rewrite: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewriteToHclTerraform(struct!.rewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewrite",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_policy: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyToHclTerraform(struct!.trafficPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apex = this._apex?.internalValue;
    }
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._backends !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends;
    }
    if (this._canary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canary = this._canary?.internalValue;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._delegation !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegation = this._delegation;
    }
    if (this._gatewayRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayRefs = this._gatewayRefs?.internalValue;
    }
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._meshName !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshName = this._meshName;
    }
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDiscovery = this._portDiscovery;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._retries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries?.internalValue;
    }
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._trafficPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPolicy = this._trafficPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apex.internalValue = undefined;
      this._appProtocol = undefined;
      this._backends = undefined;
      this._canary.internalValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._delegation = undefined;
      this._gatewayRefs.internalValue = undefined;
      this._gateways = undefined;
      this._headers.internalValue = undefined;
      this._hosts = undefined;
      this._match.internalValue = undefined;
      this._meshName = undefined;
      this._mirror.internalValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._portDiscovery = undefined;
      this._portName = undefined;
      this._primary.internalValue = undefined;
      this._retries.internalValue = undefined;
      this._rewrite.internalValue = undefined;
      this._targetPort = undefined;
      this._timeout = undefined;
      this._trafficPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apex.internalValue = value.apex;
      this._appProtocol = value.appProtocol;
      this._backends = value.backends;
      this._canary.internalValue = value.canary;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._delegation = value.delegation;
      this._gatewayRefs.internalValue = value.gatewayRefs;
      this._gateways = value.gateways;
      this._headers.internalValue = value.headers;
      this._hosts = value.hosts;
      this._match.internalValue = value.match;
      this._meshName = value.meshName;
      this._mirror.internalValue = value.mirror;
      this._name = value.name;
      this._port = value.port;
      this._portDiscovery = value.portDiscovery;
      this._portName = value.portName;
      this._primary.internalValue = value.primary;
      this._retries.internalValue = value.retries;
      this._rewrite.internalValue = value.rewrite;
      this._targetPort = value.targetPort;
      this._timeout = value.timeout;
      this._trafficPolicy.internalValue = value.trafficPolicy;
    }
  }

  // apex - computed: false, optional: true, required: false
  private _apex = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApexOutputReference(this, "apex");
  public get apex() {
    return this._apex;
  }
  public putApex(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceApex) {
    this._apex.internalValue = value;
  }
  public resetApex() {
    this._apex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apexInput() {
    return this._apex.internalValue;
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
  }

  // backends - computed: false, optional: true, required: false
  private _backends?: string[]; 
  public get backends() {
    return this.getListAttribute('backends');
  }
  public set backends(value: string[]) {
    this._backends = value;
  }
  public resetBackends() {
    this._backends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends;
  }

  // canary - computed: false, optional: true, required: false
  private _canary = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCanary) {
    this._canary.internalValue = value;
  }
  public resetCanary() {
    this._canary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // delegation - computed: false, optional: true, required: false
  private _delegation?: boolean | cdktf.IResolvable; 
  public get delegation() {
    return this.getBooleanAttribute('delegation');
  }
  public set delegation(value: boolean | cdktf.IResolvable) {
    this._delegation = value;
  }
  public resetDelegation() {
    this._delegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationInput() {
    return this._delegation;
  }

  // gateway_refs - computed: false, optional: true, required: false
  private _gatewayRefs = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefsList(this, "gateway_refs", false);
  public get gatewayRefs() {
    return this._gatewayRefs;
  }
  public putGatewayRefs(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceGatewayRefs[] | cdktf.IResolvable) {
    this._gatewayRefs.internalValue = value;
  }
  public resetGatewayRefs() {
    this._gatewayRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayRefsInput() {
    return this._gatewayRefs.internalValue;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return this.getListAttribute('gateways');
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // mesh_name - computed: false, optional: true, required: false
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  public resetMeshName() {
    this._meshName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirrorList(this, "mirror", false);
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceMirror[] | cdktf.IResolvable) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_discovery - computed: false, optional: true, required: false
  private _portDiscovery?: boolean | cdktf.IResolvable; 
  public get portDiscovery() {
    return this.getBooleanAttribute('port_discovery');
  }
  public set portDiscovery(value: boolean | cdktf.IResolvable) {
    this._portDiscovery = value;
  }
  public resetPortDiscovery() {
    this._portDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDiscoveryInput() {
    return this._portDiscovery;
  }

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // primary - computed: false, optional: true, required: false
  private _primary = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServicePrimary) {
    this._primary.internalValue = value;
  }
  public resetPrimary() {
    this._primary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // retries - computed: false, optional: true, required: false
  private _retries = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetriesOutputReference(this, "retries");
  public get retries() {
    return this._retries;
  }
  public putRetries(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRetries) {
    this._retries.internalValue = value;
  }
  public resetRetries() {
    this._retries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries.internalValue;
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewriteOutputReference(this, "rewrite");
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceRewrite) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
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

  // traffic_policy - computed: false, optional: true, required: false
  private _trafficPolicy = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicyOutputReference(this, "traffic_policy");
  public get trafficPolicy() {
    return this._trafficPolicy;
  }
  public putTrafficPolicy(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceTrafficPolicy) {
    this._trafficPolicy.internalValue = value;
  }
  public resetTrafficPolicy() {
    this._trafficPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyInput() {
    return this._trafficPolicy.internalValue;
  }
}
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#api_version DataK8SFlaggerAppCanaryV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#kind DataK8SFlaggerAppCanaryV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRefToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#api_version DataK8SFlaggerAppCanaryV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#kind DataK8SFlaggerAppCanaryV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#name DataK8SFlaggerAppCanaryV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#namespace DataK8SFlaggerAppCanaryV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRefToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRefToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SFlaggerAppCanaryV1Beta1ManifestSpec {
  /**
  * Canary analysis for this canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#analysis DataK8SFlaggerAppCanaryV1Beta1Manifest#analysis}
  */
  readonly analysis: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysis;
  /**
  * Scaler selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#autoscaler_ref DataK8SFlaggerAppCanaryV1Beta1Manifest#autoscaler_ref}
  */
  readonly autoscalerRef?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRef;
  /**
  * Ingress selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#ingress_ref DataK8SFlaggerAppCanaryV1Beta1Manifest#ingress_ref}
  */
  readonly ingressRef?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRef;
  /**
  * Prometheus URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#metrics_server DataK8SFlaggerAppCanaryV1Beta1Manifest#metrics_server}
  */
  readonly metricsServer?: string;
  /**
  * Deployment progress deadline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#progress_deadline_seconds DataK8SFlaggerAppCanaryV1Beta1Manifest#progress_deadline_seconds}
  */
  readonly progressDeadlineSeconds?: number;
  /**
  * Traffic managent provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#provider DataK8SFlaggerAppCanaryV1Beta1Manifest#provider}
  */
  readonly provider?: string;
  /**
  * Revert mutated resources to original spec on deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#revert_on_deletion DataK8SFlaggerAppCanaryV1Beta1Manifest#revert_on_deletion}
  */
  readonly revertOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * APISIX route selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#route_ref DataK8SFlaggerAppCanaryV1Beta1Manifest#route_ref}
  */
  readonly routeRef?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRef;
  /**
  * Kubernetes Service spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#service DataK8SFlaggerAppCanaryV1Beta1Manifest#service}
  */
  readonly service: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecService;
  /**
  * Skip analysis and promote canary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#skip_analysis DataK8SFlaggerAppCanaryV1Beta1Manifest#skip_analysis}
  */
  readonly skipAnalysis?: boolean | cdktf.IResolvable;
  /**
  * Suspend Canary disabling/pausing all canary runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#suspend DataK8SFlaggerAppCanaryV1Beta1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Target selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#target_ref DataK8SFlaggerAppCanaryV1Beta1Manifest#target_ref}
  */
  readonly targetRef: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRef;
  /**
  * Gloo Upstream selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#upstream_ref DataK8SFlaggerAppCanaryV1Beta1Manifest#upstream_ref}
  */
  readonly upstreamRef?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRef;
}

export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecToTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analysis: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisToTerraform(struct!.analysis),
    autoscaler_ref: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefToTerraform(struct!.autoscalerRef),
    ingress_ref: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRefToTerraform(struct!.ingressRef),
    metrics_server: cdktf.stringToTerraform(struct!.metricsServer),
    progress_deadline_seconds: cdktf.numberToTerraform(struct!.progressDeadlineSeconds),
    provider: cdktf.stringToTerraform(struct!.provider),
    revert_on_deletion: cdktf.booleanToTerraform(struct!.revertOnDeletion),
    route_ref: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRefToTerraform(struct!.routeRef),
    service: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceToTerraform(struct!.service),
    skip_analysis: cdktf.booleanToTerraform(struct!.skipAnalysis),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    target_ref: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    upstream_ref: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRefToTerraform(struct!.upstreamRef),
  }
}


export function dataK8SFlaggerAppCanaryV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SFlaggerAppCanaryV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analysis: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysis",
    },
    autoscaler_ref: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefToHclTerraform(struct!.autoscalerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRef",
    },
    ingress_ref: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRefToHclTerraform(struct!.ingressRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRef",
    },
    metrics_server: {
      value: cdktf.stringToHclTerraform(struct!.metricsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progress_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.progressDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revert_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.revertOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_ref: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRefToHclTerraform(struct!.routeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRef",
    },
    service: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecService",
    },
    skip_analysis: {
      value: cdktf.booleanToHclTerraform(struct!.skipAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_ref: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRef",
    },
    upstream_ref: {
      value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRefToHclTerraform(struct!.upstreamRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlaggerAppCanaryV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlaggerAppCanaryV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._autoscalerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalerRef = this._autoscalerRef?.internalValue;
    }
    if (this._ingressRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRef = this._ingressRef?.internalValue;
    }
    if (this._metricsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsServer = this._metricsServer;
    }
    if (this._progressDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressDeadlineSeconds = this._progressDeadlineSeconds;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._revertOnDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.revertOnDeletion = this._revertOnDeletion;
    }
    if (this._routeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRef = this._routeRef?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._skipAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipAnalysis = this._skipAnalysis;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._upstreamRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamRef = this._upstreamRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._autoscalerRef.internalValue = undefined;
      this._ingressRef.internalValue = undefined;
      this._metricsServer = undefined;
      this._progressDeadlineSeconds = undefined;
      this._provider = undefined;
      this._revertOnDeletion = undefined;
      this._routeRef.internalValue = undefined;
      this._service.internalValue = undefined;
      this._skipAnalysis = undefined;
      this._suspend = undefined;
      this._targetRef.internalValue = undefined;
      this._upstreamRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._autoscalerRef.internalValue = value.autoscalerRef;
      this._ingressRef.internalValue = value.ingressRef;
      this._metricsServer = value.metricsServer;
      this._progressDeadlineSeconds = value.progressDeadlineSeconds;
      this._provider = value.provider;
      this._revertOnDeletion = value.revertOnDeletion;
      this._routeRef.internalValue = value.routeRef;
      this._service.internalValue = value.service;
      this._skipAnalysis = value.skipAnalysis;
      this._suspend = value.suspend;
      this._targetRef.internalValue = value.targetRef;
      this._upstreamRef.internalValue = value.upstreamRef;
    }
  }

  // analysis - computed: false, optional: false, required: true
  private _analysis = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAnalysis) {
    this._analysis.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // autoscaler_ref - computed: false, optional: true, required: false
  private _autoscalerRef = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRefOutputReference(this, "autoscaler_ref");
  public get autoscalerRef() {
    return this._autoscalerRef;
  }
  public putAutoscalerRef(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecAutoscalerRef) {
    this._autoscalerRef.internalValue = value;
  }
  public resetAutoscalerRef() {
    this._autoscalerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerRefInput() {
    return this._autoscalerRef.internalValue;
  }

  // ingress_ref - computed: false, optional: true, required: false
  private _ingressRef = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRefOutputReference(this, "ingress_ref");
  public get ingressRef() {
    return this._ingressRef;
  }
  public putIngressRef(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecIngressRef) {
    this._ingressRef.internalValue = value;
  }
  public resetIngressRef() {
    this._ingressRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRefInput() {
    return this._ingressRef.internalValue;
  }

  // metrics_server - computed: false, optional: true, required: false
  private _metricsServer?: string; 
  public get metricsServer() {
    return this.getStringAttribute('metrics_server');
  }
  public set metricsServer(value: string) {
    this._metricsServer = value;
  }
  public resetMetricsServer() {
    this._metricsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsServerInput() {
    return this._metricsServer;
  }

  // progress_deadline_seconds - computed: false, optional: true, required: false
  private _progressDeadlineSeconds?: number; 
  public get progressDeadlineSeconds() {
    return this.getNumberAttribute('progress_deadline_seconds');
  }
  public set progressDeadlineSeconds(value: number) {
    this._progressDeadlineSeconds = value;
  }
  public resetProgressDeadlineSeconds() {
    this._progressDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressDeadlineSecondsInput() {
    return this._progressDeadlineSeconds;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // revert_on_deletion - computed: false, optional: true, required: false
  private _revertOnDeletion?: boolean | cdktf.IResolvable; 
  public get revertOnDeletion() {
    return this.getBooleanAttribute('revert_on_deletion');
  }
  public set revertOnDeletion(value: boolean | cdktf.IResolvable) {
    this._revertOnDeletion = value;
  }
  public resetRevertOnDeletion() {
    this._revertOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertOnDeletionInput() {
    return this._revertOnDeletion;
  }

  // route_ref - computed: false, optional: true, required: false
  private _routeRef = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRefOutputReference(this, "route_ref");
  public get routeRef() {
    return this._routeRef;
  }
  public putRouteRef(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecRouteRef) {
    this._routeRef.internalValue = value;
  }
  public resetRouteRef() {
    this._routeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRefInput() {
    return this._routeRef.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecService) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // skip_analysis - computed: false, optional: true, required: false
  private _skipAnalysis?: boolean | cdktf.IResolvable; 
  public get skipAnalysis() {
    return this.getBooleanAttribute('skip_analysis');
  }
  public set skipAnalysis(value: boolean | cdktf.IResolvable) {
    this._skipAnalysis = value;
  }
  public resetSkipAnalysis() {
    this._skipAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAnalysisInput() {
    return this._skipAnalysis;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // upstream_ref - computed: false, optional: true, required: false
  private _upstreamRef = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRefOutputReference(this, "upstream_ref");
  public get upstreamRef() {
    return this._upstreamRef;
  }
  public putUpstreamRef(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpecUpstreamRef) {
    this._upstreamRef.internalValue = value;
  }
  public resetUpstreamRef() {
    this._upstreamRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamRefInput() {
    return this._upstreamRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest k8s_flagger_app_canary_v1beta1_manifest}
*/
export class DataK8SFlaggerAppCanaryV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_flagger_app_canary_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFlaggerAppCanaryV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFlaggerAppCanaryV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SFlaggerAppCanaryV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFlaggerAppCanaryV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_flagger_app_canary_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/flagger_app_canary_v1beta1_manifest k8s_flagger_app_canary_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFlaggerAppCanaryV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFlaggerAppCanaryV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_flagger_app_canary_v1beta1_manifest',
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
  private _metadata = new DataK8SFlaggerAppCanaryV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFlaggerAppCanaryV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFlaggerAppCanaryV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFlaggerAppCanaryV1Beta1ManifestSpec) {
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
      metadata: dataK8SFlaggerAppCanaryV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFlaggerAppCanaryV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SFlaggerAppCanaryV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlaggerAppCanaryV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
