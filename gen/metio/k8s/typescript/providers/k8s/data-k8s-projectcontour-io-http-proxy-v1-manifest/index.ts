// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SProjectcontourIoHttpProxyV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#metadata DataK8SProjectcontourIoHttpProxyV1Manifest#metadata}
  */
  readonly metadata: DataK8SProjectcontourIoHttpProxyV1ManifestMetadata;
  /**
  * HTTPProxySpec defines the spec of the CRD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#spec DataK8SProjectcontourIoHttpProxyV1Manifest#spec}
  */
  readonly spec: DataK8SProjectcontourIoHttpProxyV1ManifestSpec;
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#annotations DataK8SProjectcontourIoHttpProxyV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#labels DataK8SProjectcontourIoHttpProxyV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#namespace DataK8SProjectcontourIoHttpProxyV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestMetadataToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SProjectcontourIoHttpProxyV1ManifestMetadataToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeader {
  /**
  * Contains specifies a substring that must be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#contains DataK8SProjectcontourIoHttpProxyV1Manifest#contains}
  */
  readonly contains?: string;
  /**
  * Exact specifies a string that the header value must be equal to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#exact DataK8SProjectcontourIoHttpProxyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ignore_case DataK8SProjectcontourIoHttpProxyV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the header to match against. Name is required. Header names are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * NotContains specifies a substring that must not be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notcontains DataK8SProjectcontourIoHttpProxyV1Manifest#notcontains}
  */
  readonly notcontains?: string;
  /**
  * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notexact DataK8SProjectcontourIoHttpProxyV1Manifest#notexact}
  */
  readonly notexact?: string;
  /**
  * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notpresent DataK8SProjectcontourIoHttpProxyV1Manifest#notpresent}
  */
  readonly notpresent?: boolean | cdktf.IResolvable;
  /**
  * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#present DataK8SProjectcontourIoHttpProxyV1Manifest#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Regex specifies a regular expression pattern that must match the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#regex DataK8SProjectcontourIoHttpProxyV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * TreatMissingAsEmpty specifies if the header match rule specified header does not exist, this header value will be treated as empty. Defaults to false. Unlike the underlying Envoy implementation this is **only** supported for negative matches (e.g. NotContains, NotExact).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#treat_missing_as_empty DataK8SProjectcontourIoHttpProxyV1Manifest#treat_missing_as_empty}
  */
  readonly treatMissingAsEmpty?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeaderToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    name: cdktf.stringToTerraform(struct!.name),
    notcontains: cdktf.stringToTerraform(struct!.notcontains),
    notexact: cdktf.stringToTerraform(struct!.notexact),
    notpresent: cdktf.booleanToTerraform(struct!.notpresent),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
    treat_missing_as_empty: cdktf.booleanToTerraform(struct!.treatMissingAsEmpty),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeaderToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
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
    notcontains: {
      value: cdktf.stringToHclTerraform(struct!.notcontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notexact: {
      value: cdktf.stringToHclTerraform(struct!.notexact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notpresent: {
      value: cdktf.booleanToHclTerraform(struct!.notpresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    treat_missing_as_empty: {
      value: cdktf.booleanToHclTerraform(struct!.treatMissingAsEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notcontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.notcontains = this._notcontains;
    }
    if (this._notexact !== undefined) {
      hasAnyValues = true;
      internalValueResult.notexact = this._notexact;
    }
    if (this._notpresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.notpresent = this._notpresent;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._treatMissingAsEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatMissingAsEmpty = this._treatMissingAsEmpty;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._name = undefined;
      this._notcontains = undefined;
      this._notexact = undefined;
      this._notpresent = undefined;
      this._present = undefined;
      this._regex = undefined;
      this._treatMissingAsEmpty = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._name = value.name;
      this._notcontains = value.notcontains;
      this._notexact = value.notexact;
      this._notpresent = value.notpresent;
      this._present = value.present;
      this._regex = value.regex;
      this._treatMissingAsEmpty = value.treatMissingAsEmpty;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
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

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
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

  // notcontains - computed: false, optional: true, required: false
  private _notcontains?: string; 
  public get notcontains() {
    return this.getStringAttribute('notcontains');
  }
  public set notcontains(value: string) {
    this._notcontains = value;
  }
  public resetNotcontains() {
    this._notcontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notcontainsInput() {
    return this._notcontains;
  }

  // notexact - computed: false, optional: true, required: false
  private _notexact?: string; 
  public get notexact() {
    return this.getStringAttribute('notexact');
  }
  public set notexact(value: string) {
    this._notexact = value;
  }
  public resetNotexact() {
    this._notexact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notexactInput() {
    return this._notexact;
  }

  // notpresent - computed: false, optional: true, required: false
  private _notpresent?: boolean | cdktf.IResolvable; 
  public get notpresent() {
    return this.getBooleanAttribute('notpresent');
  }
  public set notpresent(value: boolean | cdktf.IResolvable) {
    this._notpresent = value;
  }
  public resetNotpresent() {
    this._notpresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notpresentInput() {
    return this._notpresent;
  }

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
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

  // treat_missing_as_empty - computed: false, optional: true, required: false
  private _treatMissingAsEmpty?: boolean | cdktf.IResolvable; 
  public get treatMissingAsEmpty() {
    return this.getBooleanAttribute('treat_missing_as_empty');
  }
  public set treatMissingAsEmpty(value: boolean | cdktf.IResolvable) {
    this._treatMissingAsEmpty = value;
  }
  public resetTreatMissingAsEmpty() {
    this._treatMissingAsEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingAsEmptyInput() {
    return this._treatMissingAsEmpty;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameter {
  /**
  * Contains specifies a substring that must be present in the query parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#contains DataK8SProjectcontourIoHttpProxyV1Manifest#contains}
  */
  readonly contains?: string;
  /**
  * Exact specifies a string that the query parameter value must be equal to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#exact DataK8SProjectcontourIoHttpProxyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ignore_case DataK8SProjectcontourIoHttpProxyV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the query parameter to match against. Name is required. Query parameter names are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Prefix defines a prefix match for the query parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#prefix DataK8SProjectcontourIoHttpProxyV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Present specifies that condition is true when the named query parameter is present, regardless of its value. Note that setting Present to false does not make the condition true if the named query parameter is absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#present DataK8SProjectcontourIoHttpProxyV1Manifest#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Regex specifies a regular expression pattern that must match the query parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#regex DataK8SProjectcontourIoHttpProxyV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Suffix defines a suffix match for a query parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#suffix DataK8SProjectcontourIoHttpProxyV1Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameterToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameterToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._present = undefined;
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
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._name = value.name;
      this._prefix = value.prefix;
      this._present = value.present;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
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

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
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

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditions {
  /**
  * Exact defines a exact match for a request. This field is not allowed in include match conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#exact DataK8SProjectcontourIoHttpProxyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Header specifies the header condition to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#header DataK8SProjectcontourIoHttpProxyV1Manifest#header}
  */
  readonly header?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeader;
  /**
  * Prefix defines a prefix match for a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#prefix DataK8SProjectcontourIoHttpProxyV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * QueryParameter specifies the query parameter condition to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#query_parameter DataK8SProjectcontourIoHttpProxyV1Manifest#query_parameter}
  */
  readonly queryParameter?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameter;
  /**
  * Regex defines a regex match for a request. This field is not allowed in include match conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#regex DataK8SProjectcontourIoHttpProxyV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    header: dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeaderToTerraform(struct!.header),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    query_parameter: dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameterToTerraform(struct!.queryParameter),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditions | cdktf.IResolvable): any {
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
    header: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeader",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameter: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameterToHclTerraform(struct!.queryParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameter",
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._queryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._header.internalValue = undefined;
      this._prefix = undefined;
      this._queryParameter.internalValue = undefined;
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
      this._header.internalValue = value.header;
      this._prefix = value.prefix;
      this._queryParameter.internalValue = value.queryParameter;
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

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
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

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameterOutputReference(this, "query_parameter");
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsQueryParameter) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludes {
  /**
  * Conditions are a set of rules that are applied to included HTTPProxies. In effect, they are added onto the Conditions of included HTTPProxy Route structs. When applied, they are merged using AND, with one exception: There can be only one Prefix MatchCondition per Conditions slice. More than one Prefix, or contradictory Conditions, will make the include invalid. Exact and Regex match conditions are not allowed on includes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#conditions DataK8SProjectcontourIoHttpProxyV1Manifest#conditions}
  */
  readonly conditions?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditions[] | cdktf.IResolvable;
  /**
  * Name of the HTTPProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the HTTPProxy to include. Defaults to the current namespace if not supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#namespace DataK8SProjectcontourIoHttpProxyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsToTerraform, false)(struct!.conditions),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsList",
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
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
      this._conditions.internalValue = value.conditions;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicy {
  /**
  * Context is a set of key/value pairs that are sent to the authentication server in the check request. If a context is provided at an enclosing scope, the entries are merged such that the inner scope overrides matching keys from the outer scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#context DataK8SProjectcontourIoHttpProxyV1Manifest#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * When true, this field disables client request authentication for the scope of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#disabled DataK8SProjectcontourIoHttpProxyV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.context),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.context),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._disabled = value.disabled;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string }; 
  public get context() {
    return this.getStringMapAttribute('context');
  }
  public set context(value: { [key: string]: string }) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeader {
  /**
  * Contains specifies a substring that must be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#contains DataK8SProjectcontourIoHttpProxyV1Manifest#contains}
  */
  readonly contains?: string;
  /**
  * Exact specifies a string that the header value must be equal to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#exact DataK8SProjectcontourIoHttpProxyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ignore_case DataK8SProjectcontourIoHttpProxyV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the header to match against. Name is required. Header names are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * NotContains specifies a substring that must not be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notcontains DataK8SProjectcontourIoHttpProxyV1Manifest#notcontains}
  */
  readonly notcontains?: string;
  /**
  * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notexact DataK8SProjectcontourIoHttpProxyV1Manifest#notexact}
  */
  readonly notexact?: string;
  /**
  * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notpresent DataK8SProjectcontourIoHttpProxyV1Manifest#notpresent}
  */
  readonly notpresent?: boolean | cdktf.IResolvable;
  /**
  * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#present DataK8SProjectcontourIoHttpProxyV1Manifest#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Regex specifies a regular expression pattern that must match the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#regex DataK8SProjectcontourIoHttpProxyV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * TreatMissingAsEmpty specifies if the header match rule specified header does not exist, this header value will be treated as empty. Defaults to false. Unlike the underlying Envoy implementation this is **only** supported for negative matches (e.g. NotContains, NotExact).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#treat_missing_as_empty DataK8SProjectcontourIoHttpProxyV1Manifest#treat_missing_as_empty}
  */
  readonly treatMissingAsEmpty?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeaderToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    name: cdktf.stringToTerraform(struct!.name),
    notcontains: cdktf.stringToTerraform(struct!.notcontains),
    notexact: cdktf.stringToTerraform(struct!.notexact),
    notpresent: cdktf.booleanToTerraform(struct!.notpresent),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
    treat_missing_as_empty: cdktf.booleanToTerraform(struct!.treatMissingAsEmpty),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeaderToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
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
    notcontains: {
      value: cdktf.stringToHclTerraform(struct!.notcontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notexact: {
      value: cdktf.stringToHclTerraform(struct!.notexact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notpresent: {
      value: cdktf.booleanToHclTerraform(struct!.notpresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    treat_missing_as_empty: {
      value: cdktf.booleanToHclTerraform(struct!.treatMissingAsEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notcontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.notcontains = this._notcontains;
    }
    if (this._notexact !== undefined) {
      hasAnyValues = true;
      internalValueResult.notexact = this._notexact;
    }
    if (this._notpresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.notpresent = this._notpresent;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._treatMissingAsEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatMissingAsEmpty = this._treatMissingAsEmpty;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._name = undefined;
      this._notcontains = undefined;
      this._notexact = undefined;
      this._notpresent = undefined;
      this._present = undefined;
      this._regex = undefined;
      this._treatMissingAsEmpty = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._name = value.name;
      this._notcontains = value.notcontains;
      this._notexact = value.notexact;
      this._notpresent = value.notpresent;
      this._present = value.present;
      this._regex = value.regex;
      this._treatMissingAsEmpty = value.treatMissingAsEmpty;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
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

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
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

  // notcontains - computed: false, optional: true, required: false
  private _notcontains?: string; 
  public get notcontains() {
    return this.getStringAttribute('notcontains');
  }
  public set notcontains(value: string) {
    this._notcontains = value;
  }
  public resetNotcontains() {
    this._notcontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notcontainsInput() {
    return this._notcontains;
  }

  // notexact - computed: false, optional: true, required: false
  private _notexact?: string; 
  public get notexact() {
    return this.getStringAttribute('notexact');
  }
  public set notexact(value: string) {
    this._notexact = value;
  }
  public resetNotexact() {
    this._notexact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notexactInput() {
    return this._notexact;
  }

  // notpresent - computed: false, optional: true, required: false
  private _notpresent?: boolean | cdktf.IResolvable; 
  public get notpresent() {
    return this.getBooleanAttribute('notpresent');
  }
  public set notpresent(value: boolean | cdktf.IResolvable) {
    this._notpresent = value;
  }
  public resetNotpresent() {
    this._notpresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notpresentInput() {
    return this._notpresent;
  }

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
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

  // treat_missing_as_empty - computed: false, optional: true, required: false
  private _treatMissingAsEmpty?: boolean | cdktf.IResolvable; 
  public get treatMissingAsEmpty() {
    return this.getBooleanAttribute('treat_missing_as_empty');
  }
  public set treatMissingAsEmpty(value: boolean | cdktf.IResolvable) {
    this._treatMissingAsEmpty = value;
  }
  public resetTreatMissingAsEmpty() {
    this._treatMissingAsEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingAsEmptyInput() {
    return this._treatMissingAsEmpty;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameter {
  /**
  * Contains specifies a substring that must be present in the query parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#contains DataK8SProjectcontourIoHttpProxyV1Manifest#contains}
  */
  readonly contains?: string;
  /**
  * Exact specifies a string that the query parameter value must be equal to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#exact DataK8SProjectcontourIoHttpProxyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ignore_case DataK8SProjectcontourIoHttpProxyV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the query parameter to match against. Name is required. Query parameter names are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Prefix defines a prefix match for the query parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#prefix DataK8SProjectcontourIoHttpProxyV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Present specifies that condition is true when the named query parameter is present, regardless of its value. Note that setting Present to false does not make the condition true if the named query parameter is absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#present DataK8SProjectcontourIoHttpProxyV1Manifest#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Regex specifies a regular expression pattern that must match the query parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#regex DataK8SProjectcontourIoHttpProxyV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Suffix defines a suffix match for a query parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#suffix DataK8SProjectcontourIoHttpProxyV1Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameterToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameterToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._present = undefined;
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
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._name = value.name;
      this._prefix = value.prefix;
      this._present = value.present;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
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

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
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

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditions {
  /**
  * Exact defines a exact match for a request. This field is not allowed in include match conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#exact DataK8SProjectcontourIoHttpProxyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Header specifies the header condition to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#header DataK8SProjectcontourIoHttpProxyV1Manifest#header}
  */
  readonly header?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeader;
  /**
  * Prefix defines a prefix match for a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#prefix DataK8SProjectcontourIoHttpProxyV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * QueryParameter specifies the query parameter condition to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#query_parameter DataK8SProjectcontourIoHttpProxyV1Manifest#query_parameter}
  */
  readonly queryParameter?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameter;
  /**
  * Regex defines a regex match for a request. This field is not allowed in include match conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#regex DataK8SProjectcontourIoHttpProxyV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    header: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeaderToTerraform(struct!.header),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    query_parameter: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameterToTerraform(struct!.queryParameter),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditions | cdktf.IResolvable): any {
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
    header: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeader",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameter: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameterToHclTerraform(struct!.queryParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameter",
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._queryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._header.internalValue = undefined;
      this._prefix = undefined;
      this._queryParameter.internalValue = undefined;
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
      this._header.internalValue = value.header;
      this._prefix = value.prefix;
      this._queryParameter.internalValue = value.queryParameter;
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

  // header - computed: false, optional: true, required: false
  private _header = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
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

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameterOutputReference(this, "query_parameter");
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsQueryParameter) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewrite {
  /**
  * Value is the value to rewrite the Domain attribute to. For now this is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewriteToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewriteToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewrite {
  /**
  * Value is the value to rewrite the Path attribute to. For now this is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewriteToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewriteToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePolicies {
  /**
  * DomainRewrite enables rewriting the Set-Cookie Domain element. If not set, Domain will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#domain_rewrite DataK8SProjectcontourIoHttpProxyV1Manifest#domain_rewrite}
  */
  readonly domainRewrite?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewrite;
  /**
  * Name is the name of the cookie for which attributes will be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * PathRewrite enables rewriting the Set-Cookie Path element. If not set, Path will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#path_rewrite DataK8SProjectcontourIoHttpProxyV1Manifest#path_rewrite}
  */
  readonly pathRewrite?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewrite;
  /**
  * SameSite enables rewriting the Set-Cookie SameSite element. If not set, SameSite attribute will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#same_site DataK8SProjectcontourIoHttpProxyV1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure enables rewriting the Set-Cookie Secure element. If not set, Secure attribute will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#secure DataK8SProjectcontourIoHttpProxyV1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_rewrite: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewriteToTerraform(struct!.domainRewrite),
    name: cdktf.stringToTerraform(struct!.name),
    path_rewrite: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewriteToTerraform(struct!.pathRewrite),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_rewrite: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewriteToHclTerraform(struct!.domainRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewrite",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_rewrite: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewriteToHclTerraform(struct!.pathRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewrite",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainRewrite = this._domainRewrite?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pathRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRewrite = this._pathRewrite?.internalValue;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainRewrite.internalValue = undefined;
      this._name = undefined;
      this._pathRewrite.internalValue = undefined;
      this._sameSite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainRewrite.internalValue = value.domainRewrite;
      this._name = value.name;
      this._pathRewrite.internalValue = value.pathRewrite;
      this._sameSite = value.sameSite;
      this._secure = value.secure;
    }
  }

  // domain_rewrite - computed: false, optional: true, required: false
  private _domainRewrite = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewriteOutputReference(this, "domain_rewrite");
  public get domainRewrite() {
    return this._domainRewrite;
  }
  public putDomainRewrite(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesDomainRewrite) {
    this._domainRewrite.internalValue = value;
  }
  public resetDomainRewrite() {
    this._domainRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRewriteInput() {
    return this._domainRewrite.internalValue;
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

  // path_rewrite - computed: false, optional: true, required: false
  private _pathRewrite = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewriteOutputReference(this, "path_rewrite");
  public get pathRewrite() {
    return this._pathRewrite;
  }
  public putPathRewrite(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesPathRewrite) {
    this._pathRewrite.internalValue = value;
  }
  public resetPathRewrite() {
    this._pathRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRewriteInput() {
    return this._pathRewrite.internalValue;
  }

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicy {
  /**
  * Body is the content of the response body. If this setting is omitted, no body is included in the generated response. Note: Body is not recommended to set too long otherwise it can have significant resource usage impacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#body DataK8SProjectcontourIoHttpProxyV1Manifest#body}
  */
  readonly body?: string;
  /**
  * StatusCode is the HTTP response status to be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#status_code DataK8SProjectcontourIoHttpProxyV1Manifest#status_code}
  */
  readonly statusCode: number;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._statusCode = value.statusCode;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatuses {
  /**
  * The end (exclusive) of a range of HTTP status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#end DataK8SProjectcontourIoHttpProxyV1Manifest#end}
  */
  readonly end: number;
  /**
  * The start (inclusive) of a range of HTTP status codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#start DataK8SProjectcontourIoHttpProxyV1Manifest#start}
  */
  readonly start: number;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatuses | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatuses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatuses | cdktf.IResolvable | undefined) {
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

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatuses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicy {
  /**
  * The ranges of HTTP response statuses considered healthy. Follow half-open semantics, i.e. for each range the start is inclusive and the end is exclusive. Must be within the range [100,600). If not specified, only a 200 response status is considered healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#expected_statuses DataK8SProjectcontourIoHttpProxyV1Manifest#expected_statuses}
  */
  readonly expectedStatuses?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatuses[] | cdktf.IResolvable;
  /**
  * The number of healthy health checks required before a host is marked healthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#healthy_threshold_count DataK8SProjectcontourIoHttpProxyV1Manifest#healthy_threshold_count}
  */
  readonly healthyThresholdCount?: number;
  /**
  * The value of the host header in the HTTP health check request. If left empty (default value), the name 'contour-envoy-healthcheck' will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#host DataK8SProjectcontourIoHttpProxyV1Manifest#host}
  */
  readonly host?: string;
  /**
  * The interval (seconds) between health checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#interval_seconds DataK8SProjectcontourIoHttpProxyV1Manifest#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * HTTP endpoint used to perform health checks on upstream service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#path DataK8SProjectcontourIoHttpProxyV1Manifest#path}
  */
  readonly path: string;
  /**
  * The time to wait (seconds) for a health check response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#timeout_seconds DataK8SProjectcontourIoHttpProxyV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The number of unhealthy health checks required before a host is marked unhealthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#unhealthy_threshold_count DataK8SProjectcontourIoHttpProxyV1Manifest#unhealthy_threshold_count}
  */
  readonly unhealthyThresholdCount?: number;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_statuses: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesToTerraform, false)(struct!.expectedStatuses),
    healthy_threshold_count: cdktf.numberToTerraform(struct!.healthyThresholdCount),
    host: cdktf.stringToTerraform(struct!.host),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    path: cdktf.stringToTerraform(struct!.path),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    unhealthy_threshold_count: cdktf.numberToTerraform(struct!.unhealthyThresholdCount),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_statuses: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesToHclTerraform, false)(struct!.expectedStatuses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesList",
    },
    healthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.healthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatuses = this._expectedStatuses?.internalValue;
    }
    if (this._healthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThresholdCount = this._healthyThresholdCount;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._unhealthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThresholdCount = this._unhealthyThresholdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedStatuses.internalValue = undefined;
      this._healthyThresholdCount = undefined;
      this._host = undefined;
      this._intervalSeconds = undefined;
      this._path = undefined;
      this._timeoutSeconds = undefined;
      this._unhealthyThresholdCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedStatuses.internalValue = value.expectedStatuses;
      this._healthyThresholdCount = value.healthyThresholdCount;
      this._host = value.host;
      this._intervalSeconds = value.intervalSeconds;
      this._path = value.path;
      this._timeoutSeconds = value.timeoutSeconds;
      this._unhealthyThresholdCount = value.unhealthyThresholdCount;
    }
  }

  // expected_statuses - computed: false, optional: true, required: false
  private _expectedStatuses = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatusesList(this, "expected_statuses", false);
  public get expectedStatuses() {
    return this._expectedStatuses;
  }
  public putExpectedStatuses(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyExpectedStatuses[] | cdktf.IResolvable) {
    this._expectedStatuses.internalValue = value;
  }
  public resetExpectedStatuses() {
    this._expectedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusesInput() {
    return this._expectedStatuses.internalValue;
  }

  // healthy_threshold_count - computed: false, optional: true, required: false
  private _healthyThresholdCount?: number; 
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
  }
  public set healthyThresholdCount(value: number) {
    this._healthyThresholdCount = value;
  }
  public resetHealthyThresholdCount() {
    this._healthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdCountInput() {
    return this._healthyThresholdCount;
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

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // unhealthy_threshold_count - computed: false, optional: true, required: false
  private _unhealthyThresholdCount?: number; 
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }
  public set unhealthyThresholdCount(value: number) {
    this._unhealthyThresholdCount = value;
  }
  public resetUnhealthyThresholdCount() {
    this._unhealthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdCountInput() {
    return this._unhealthyThresholdCount;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicy {
  /**
  * AllowCrossSchemeRedirect Allow internal redirect to follow a target URI with a different scheme than the value of x-forwarded-proto. SafeOnly allows same scheme redirect and safe cross scheme redirect, which means if the downstream scheme is HTTPS, both HTTPS and HTTP redirect targets are allowed, but if the downstream scheme is HTTP, only HTTP redirect targets are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#allow_cross_scheme_redirect DataK8SProjectcontourIoHttpProxyV1Manifest#allow_cross_scheme_redirect}
  */
  readonly allowCrossSchemeRedirect?: string;
  /**
  * If DenyRepeatedRouteRedirect is true, rejects redirect targets that are pointing to a route that has been followed by a previous redirect from the current route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#deny_repeated_route_redirect DataK8SProjectcontourIoHttpProxyV1Manifest#deny_repeated_route_redirect}
  */
  readonly denyRepeatedRouteRedirect?: boolean | cdktf.IResolvable;
  /**
  * MaxInternalRedirects An internal redirect is not handled, unless the number of previous internal redirects that a downstream request has encountered is lower than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#max_internal_redirects DataK8SProjectcontourIoHttpProxyV1Manifest#max_internal_redirects}
  */
  readonly maxInternalRedirects?: number;
  /**
  * RedirectResponseCodes If unspecified, only 302 will be treated as internal redirect. Only 301, 302, 303, 307 and 308 are valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#redirect_response_codes DataK8SProjectcontourIoHttpProxyV1Manifest#redirect_response_codes}
  */
  readonly redirectResponseCodes?: string[];
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_cross_scheme_redirect: cdktf.stringToTerraform(struct!.allowCrossSchemeRedirect),
    deny_repeated_route_redirect: cdktf.booleanToTerraform(struct!.denyRepeatedRouteRedirect),
    max_internal_redirects: cdktf.numberToTerraform(struct!.maxInternalRedirects),
    redirect_response_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectResponseCodes),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_cross_scheme_redirect: {
      value: cdktf.stringToHclTerraform(struct!.allowCrossSchemeRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_repeated_route_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.denyRepeatedRouteRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_internal_redirects: {
      value: cdktf.numberToHclTerraform(struct!.maxInternalRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_response_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectResponseCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCrossSchemeRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCrossSchemeRedirect = this._allowCrossSchemeRedirect;
    }
    if (this._denyRepeatedRouteRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRepeatedRouteRedirect = this._denyRepeatedRouteRedirect;
    }
    if (this._maxInternalRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInternalRedirects = this._maxInternalRedirects;
    }
    if (this._redirectResponseCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCodes = this._redirectResponseCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCrossSchemeRedirect = undefined;
      this._denyRepeatedRouteRedirect = undefined;
      this._maxInternalRedirects = undefined;
      this._redirectResponseCodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCrossSchemeRedirect = value.allowCrossSchemeRedirect;
      this._denyRepeatedRouteRedirect = value.denyRepeatedRouteRedirect;
      this._maxInternalRedirects = value.maxInternalRedirects;
      this._redirectResponseCodes = value.redirectResponseCodes;
    }
  }

  // allow_cross_scheme_redirect - computed: false, optional: true, required: false
  private _allowCrossSchemeRedirect?: string; 
  public get allowCrossSchemeRedirect() {
    return this.getStringAttribute('allow_cross_scheme_redirect');
  }
  public set allowCrossSchemeRedirect(value: string) {
    this._allowCrossSchemeRedirect = value;
  }
  public resetAllowCrossSchemeRedirect() {
    this._allowCrossSchemeRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCrossSchemeRedirectInput() {
    return this._allowCrossSchemeRedirect;
  }

  // deny_repeated_route_redirect - computed: false, optional: true, required: false
  private _denyRepeatedRouteRedirect?: boolean | cdktf.IResolvable; 
  public get denyRepeatedRouteRedirect() {
    return this.getBooleanAttribute('deny_repeated_route_redirect');
  }
  public set denyRepeatedRouteRedirect(value: boolean | cdktf.IResolvable) {
    this._denyRepeatedRouteRedirect = value;
  }
  public resetDenyRepeatedRouteRedirect() {
    this._denyRepeatedRouteRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRepeatedRouteRedirectInput() {
    return this._denyRepeatedRouteRedirect;
  }

  // max_internal_redirects - computed: false, optional: true, required: false
  private _maxInternalRedirects?: number; 
  public get maxInternalRedirects() {
    return this.getNumberAttribute('max_internal_redirects');
  }
  public set maxInternalRedirects(value: number) {
    this._maxInternalRedirects = value;
  }
  public resetMaxInternalRedirects() {
    this._maxInternalRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInternalRedirectsInput() {
    return this._maxInternalRedirects;
  }

  // redirect_response_codes - computed: false, optional: true, required: false
  private _redirectResponseCodes?: string[]; 
  public get redirectResponseCodes() {
    return this.getListAttribute('redirect_response_codes');
  }
  public set redirectResponseCodes(value: string[]) {
    this._redirectResponseCodes = value;
  }
  public resetRedirectResponseCodes() {
    this._redirectResponseCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodesInput() {
    return this._redirectResponseCodes;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicy {
  /**
  * CIDR is a CIDR block of ipv4 or ipv6 addresses to filter on. This can also be a bare IP address (without a mask) to filter on exactly one address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cidr DataK8SProjectcontourIoHttpProxyV1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Source indicates how to determine the ip address to filter on, and can be one of two values: - 'Remote' filters on the ip address of the client, accounting for PROXY and X-Forwarded-For as needed. - 'Peer' filters on the ip of the network request, ignoring PROXY and X-Forwarded-For.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#source DataK8SProjectcontourIoHttpProxyV1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._source = value.source;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicy {
  /**
  * CIDR is a CIDR block of ipv4 or ipv6 addresses to filter on. This can also be a bare IP address (without a mask) to filter on exactly one address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cidr DataK8SProjectcontourIoHttpProxyV1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Source indicates how to determine the ip address to filter on, and can be one of two values: - 'Remote' filters on the ip address of the client, accounting for PROXY and X-Forwarded-For as needed. - 'Peer' filters on the ip of the network request, ignoring PROXY and X-Forwarded-For.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#source DataK8SProjectcontourIoHttpProxyV1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._source = value.source;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicy {
  /**
  * Disabled defines whether to disable all JWT verification for this route. This can be used to opt specific routes out of the default JWT provider for the HTTPProxy. At most one of this field or the 'require' field can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#disabled DataK8SProjectcontourIoHttpProxyV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Require names a specific JWT provider (defined in the virtual host) to require for the route. If specified, this field overrides the default provider if one exists. If this field is not specified, the default provider will be required if one exists. At most one of this field or the 'disabled' field can be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#require DataK8SProjectcontourIoHttpProxyV1Manifest#require}
  */
  readonly require?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    require: cdktf.stringToTerraform(struct!.require),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicy | cdktf.IResolvable): any {
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
    require: {
      value: cdktf.stringToHclTerraform(struct!.require),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._require !== undefined) {
      hasAnyValues = true;
      internalValueResult.require = this._require;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._require = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._require = value.require;
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

  // require - computed: false, optional: true, required: false
  private _require?: string; 
  public get require() {
    return this.getStringAttribute('require');
  }
  public set require(value: string) {
    this._require = value;
  }
  public resetRequire() {
    this._require = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions {
  /**
  * HeaderName is the name of the HTTP request header that will be used to calculate the hash key. If the header specified is not present on a request, no hash will be produced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#header_name DataK8SProjectcontourIoHttpProxyV1Manifest#header_name}
  */
  readonly headerName?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions {
  /**
  * ParameterName is the name of the HTTP request query parameter that will be used to calculate the hash key. If the query parameter specified is not present on a request, no hash will be produced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#parameter_name DataK8SProjectcontourIoHttpProxyV1Manifest#parameter_name}
  */
  readonly parameterName?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
    }
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPolicies {
  /**
  * HashSourceIP should be set to true when request source IP hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#hash_source_ip DataK8SProjectcontourIoHttpProxyV1Manifest#hash_source_ip}
  */
  readonly hashSourceIp?: boolean | cdktf.IResolvable;
  /**
  * HeaderHashOptions should be set when request header hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#header_hash_options DataK8SProjectcontourIoHttpProxyV1Manifest#header_hash_options}
  */
  readonly headerHashOptions?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions;
  /**
  * QueryParameterHashOptions should be set when request query parameter hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#query_parameter_hash_options DataK8SProjectcontourIoHttpProxyV1Manifest#query_parameter_hash_options}
  */
  readonly queryParameterHashOptions?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions;
  /**
  * Terminal is a flag that allows for short-circuiting computing of a hash for a given request. If set to true, and the request attribute specified in the attribute hash options is present, no further hash policies will be used to calculate a hash for the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#terminal DataK8SProjectcontourIoHttpProxyV1Manifest#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_source_ip: cdktf.booleanToTerraform(struct!.hashSourceIp),
    header_hash_options: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToTerraform(struct!.headerHashOptions),
    query_parameter_hash_options: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToTerraform(struct!.queryParameterHashOptions),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.hashSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_hash_options: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToHclTerraform(struct!.headerHashOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions",
    },
    query_parameter_hash_options: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToHclTerraform(struct!.queryParameterHashOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions",
    },
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashSourceIp = this._hashSourceIp;
    }
    if (this._headerHashOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashOptions = this._headerHashOptions?.internalValue;
    }
    if (this._queryParameterHashOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterHashOptions = this._queryParameterHashOptions?.internalValue;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashSourceIp = undefined;
      this._headerHashOptions.internalValue = undefined;
      this._queryParameterHashOptions.internalValue = undefined;
      this._terminal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashSourceIp = value.hashSourceIp;
      this._headerHashOptions.internalValue = value.headerHashOptions;
      this._queryParameterHashOptions.internalValue = value.queryParameterHashOptions;
      this._terminal = value.terminal;
    }
  }

  // hash_source_ip - computed: false, optional: true, required: false
  private _hashSourceIp?: boolean | cdktf.IResolvable; 
  public get hashSourceIp() {
    return this.getBooleanAttribute('hash_source_ip');
  }
  public set hashSourceIp(value: boolean | cdktf.IResolvable) {
    this._hashSourceIp = value;
  }
  public resetHashSourceIp() {
    this._hashSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSourceIpInput() {
    return this._hashSourceIp;
  }

  // header_hash_options - computed: false, optional: true, required: false
  private _headerHashOptions = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsOutputReference(this, "header_hash_options");
  public get headerHashOptions() {
    return this._headerHashOptions;
  }
  public putHeaderHashOptions(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions) {
    this._headerHashOptions.internalValue = value;
  }
  public resetHeaderHashOptions() {
    this._headerHashOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHashOptionsInput() {
    return this._headerHashOptions.internalValue;
  }

  // query_parameter_hash_options - computed: false, optional: true, required: false
  private _queryParameterHashOptions = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsOutputReference(this, "query_parameter_hash_options");
  public get queryParameterHashOptions() {
    return this._queryParameterHashOptions;
  }
  public putQueryParameterHashOptions(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions) {
    this._queryParameterHashOptions.internalValue = value;
  }
  public resetQueryParameterHashOptions() {
    this._queryParameterHashOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterHashOptionsInput() {
    return this._queryParameterHashOptions.internalValue;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicy {
  /**
  * RequestHashPolicies contains a list of hash policies to apply when the 'RequestHash' load balancing strategy is chosen. If an element of the supplied list of hash policies is invalid, it will be ignored. If the list of hash policies is empty after validation, the load balancing strategy will fall back to the default 'RoundRobin'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_hash_policies DataK8SProjectcontourIoHttpProxyV1Manifest#request_hash_policies}
  */
  readonly requestHashPolicies?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable;
  /**
  * Strategy specifies the policy used to balance requests across the pool of backend pods. Valid policy names are 'Random', 'RoundRobin', 'WeightedLeastRequest', 'Cookie', and 'RequestHash'. If an unknown strategy name is specified or no policy is supplied, the default 'RoundRobin' policy is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#strategy DataK8SProjectcontourIoHttpProxyV1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_hash_policies: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesToTerraform, false)(struct!.requestHashPolicies),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_hash_policies: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesToHclTerraform, false)(struct!.requestHashPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesList",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHashPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHashPolicies = this._requestHashPolicies?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHashPolicies.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHashPolicies.internalValue = value.requestHashPolicies;
      this._strategy = value.strategy;
    }
  }

  // request_hash_policies - computed: false, optional: true, required: false
  private _requestHashPolicies = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPoliciesList(this, "request_hash_policies", false);
  public get requestHashPolicies() {
    return this._requestHashPolicies;
  }
  public putRequestHashPolicies(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable) {
    this._requestHashPolicies.internalValue = value;
  }
  public resetRequestHashPolicies() {
    this._requestHashPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHashPoliciesInput() {
    return this._requestHashPolicies.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefix {
  /**
  * Prefix specifies the URL path prefix to be replaced. If Prefix is specified, it must exactly match the MatchCondition prefix that is rendered by the chain of including HTTPProxies and only that path prefix will be replaced by Replacement. This allows HTTPProxies that are included through multiple roots to only replace specific path prefixes, leaving others unmodified. If Prefix is not specified, all routing prefixes rendered by the include chain will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#prefix DataK8SProjectcontourIoHttpProxyV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Replacement is the string that the routing path prefix will be replaced with. This must not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#replacement DataK8SProjectcontourIoHttpProxyV1Manifest#replacement}
  */
  readonly replacement: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    replacement: cdktf.stringToTerraform(struct!.replacement),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._replacement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._replacement = value.replacement;
    }
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

  // replacement - computed: false, optional: false, required: true
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefix[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicy {
  /**
  * ReplacePrefix describes how the path prefix should be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#replace_prefix DataK8SProjectcontourIoHttpProxyV1Manifest#replace_prefix}
  */
  readonly replacePrefix?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefix[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace_prefix: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixToTerraform, false)(struct!.replacePrefix),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace_prefix: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixToHclTerraform, false)(struct!.replacePrefix),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replacePrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrefix = this._replacePrefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replacePrefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replacePrefix.internalValue = value.replacePrefix;
    }
  }

  // replace_prefix - computed: false, optional: true, required: false
  private _replacePrefix = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefixList(this, "replace_prefix", false);
  public get replacePrefix() {
    return this._replacePrefix;
  }
  public putReplacePrefix(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyReplacePrefix[] | cdktf.IResolvable) {
    this._replacePrefix.internalValue = value;
  }
  public resetReplacePrefix() {
    this._replacePrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrefixInput() {
    return this._replacePrefix.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKey {
  /**
  * Key defines the key of the descriptor entry. If not set, the key is set to 'generic_key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#key DataK8SProjectcontourIoHttpProxyV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Value defines the value of the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKeyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKeyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKey | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKey | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeader {
  /**
  * DescriptorKey defines the key to use on the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#descriptor_key DataK8SProjectcontourIoHttpProxyV1Manifest#descriptor_key}
  */
  readonly descriptorKey?: string;
  /**
  * HeaderName defines the name of the header to look for on the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#header_name DataK8SProjectcontourIoHttpProxyV1Manifest#header_name}
  */
  readonly headerName?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descriptor_key: cdktf.stringToTerraform(struct!.descriptorKey),
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descriptor_key: {
      value: cdktf.stringToHclTerraform(struct!.descriptorKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptorKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptorKey = this._descriptorKey;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptorKey = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptorKey = value.descriptorKey;
      this._headerName = value.headerName;
    }
  }

  // descriptor_key - computed: false, optional: true, required: false
  private _descriptorKey?: string; 
  public get descriptorKey() {
    return this.getStringAttribute('descriptor_key');
  }
  public set descriptorKey(value: string) {
    this._descriptorKey = value;
  }
  public resetDescriptorKey() {
    this._descriptorKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorKeyInput() {
    return this._descriptorKey;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders {
  /**
  * Contains specifies a substring that must be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#contains DataK8SProjectcontourIoHttpProxyV1Manifest#contains}
  */
  readonly contains?: string;
  /**
  * Exact specifies a string that the header value must be equal to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#exact DataK8SProjectcontourIoHttpProxyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ignore_case DataK8SProjectcontourIoHttpProxyV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the header to match against. Name is required. Header names are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * NotContains specifies a substring that must not be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notcontains DataK8SProjectcontourIoHttpProxyV1Manifest#notcontains}
  */
  readonly notcontains?: string;
  /**
  * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notexact DataK8SProjectcontourIoHttpProxyV1Manifest#notexact}
  */
  readonly notexact?: string;
  /**
  * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notpresent DataK8SProjectcontourIoHttpProxyV1Manifest#notpresent}
  */
  readonly notpresent?: boolean | cdktf.IResolvable;
  /**
  * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#present DataK8SProjectcontourIoHttpProxyV1Manifest#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Regex specifies a regular expression pattern that must match the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#regex DataK8SProjectcontourIoHttpProxyV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * TreatMissingAsEmpty specifies if the header match rule specified header does not exist, this header value will be treated as empty. Defaults to false. Unlike the underlying Envoy implementation this is **only** supported for negative matches (e.g. NotContains, NotExact).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#treat_missing_as_empty DataK8SProjectcontourIoHttpProxyV1Manifest#treat_missing_as_empty}
  */
  readonly treatMissingAsEmpty?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    name: cdktf.stringToTerraform(struct!.name),
    notcontains: cdktf.stringToTerraform(struct!.notcontains),
    notexact: cdktf.stringToTerraform(struct!.notexact),
    notpresent: cdktf.booleanToTerraform(struct!.notpresent),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
    treat_missing_as_empty: cdktf.booleanToTerraform(struct!.treatMissingAsEmpty),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
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
    notcontains: {
      value: cdktf.stringToHclTerraform(struct!.notcontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notexact: {
      value: cdktf.stringToHclTerraform(struct!.notexact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notpresent: {
      value: cdktf.booleanToHclTerraform(struct!.notpresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    treat_missing_as_empty: {
      value: cdktf.booleanToHclTerraform(struct!.treatMissingAsEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notcontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.notcontains = this._notcontains;
    }
    if (this._notexact !== undefined) {
      hasAnyValues = true;
      internalValueResult.notexact = this._notexact;
    }
    if (this._notpresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.notpresent = this._notpresent;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._treatMissingAsEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatMissingAsEmpty = this._treatMissingAsEmpty;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._name = undefined;
      this._notcontains = undefined;
      this._notexact = undefined;
      this._notpresent = undefined;
      this._present = undefined;
      this._regex = undefined;
      this._treatMissingAsEmpty = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._name = value.name;
      this._notcontains = value.notcontains;
      this._notexact = value.notexact;
      this._notpresent = value.notpresent;
      this._present = value.present;
      this._regex = value.regex;
      this._treatMissingAsEmpty = value.treatMissingAsEmpty;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
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

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
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

  // notcontains - computed: false, optional: true, required: false
  private _notcontains?: string; 
  public get notcontains() {
    return this.getStringAttribute('notcontains');
  }
  public set notcontains(value: string) {
    this._notcontains = value;
  }
  public resetNotcontains() {
    this._notcontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notcontainsInput() {
    return this._notcontains;
  }

  // notexact - computed: false, optional: true, required: false
  private _notexact?: string; 
  public get notexact() {
    return this.getStringAttribute('notexact');
  }
  public set notexact(value: string) {
    this._notexact = value;
  }
  public resetNotexact() {
    this._notexact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notexactInput() {
    return this._notexact;
  }

  // notpresent - computed: false, optional: true, required: false
  private _notpresent?: boolean | cdktf.IResolvable; 
  public get notpresent() {
    return this.getBooleanAttribute('notpresent');
  }
  public set notpresent(value: boolean | cdktf.IResolvable) {
    this._notpresent = value;
  }
  public resetNotpresent() {
    this._notpresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notpresentInput() {
    return this._notpresent;
  }

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
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

  // treat_missing_as_empty - computed: false, optional: true, required: false
  private _treatMissingAsEmpty?: boolean | cdktf.IResolvable; 
  public get treatMissingAsEmpty() {
    return this.getBooleanAttribute('treat_missing_as_empty');
  }
  public set treatMissingAsEmpty(value: boolean | cdktf.IResolvable) {
    this._treatMissingAsEmpty = value;
  }
  public resetTreatMissingAsEmpty() {
    this._treatMissingAsEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingAsEmptyInput() {
    return this._treatMissingAsEmpty;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch {
  /**
  * ExpectMatch defines whether the request must positively match the match criteria in order to generate a descriptor entry (i.e. true), or not match the match criteria in order to generate a descriptor entry (i.e. false). The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#expect_match DataK8SProjectcontourIoHttpProxyV1Manifest#expect_match}
  */
  readonly expectMatch?: boolean | cdktf.IResolvable;
  /**
  * Headers is a list of 1+ match criteria to apply against the request to determine whether to populate the descriptor entry or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#headers DataK8SProjectcontourIoHttpProxyV1Manifest#headers}
  */
  readonly headers?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable;
  /**
  * Value defines the value of the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expect_match: cdktf.booleanToTerraform(struct!.expectMatch),
    headers: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersToTerraform, false)(struct!.headers),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expect_match: {
      value: cdktf.booleanToHclTerraform(struct!.expectMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersList",
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectMatch = this._expectMatch;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectMatch = undefined;
      this._headers.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectMatch = value.expectMatch;
      this._headers.internalValue = value.headers;
      this._value = value.value;
    }
  }

  // expect_match - computed: false, optional: true, required: false
  private _expectMatch?: boolean | cdktf.IResolvable; 
  public get expectMatch() {
    return this.getBooleanAttribute('expect_match');
  }
  public set expectMatch(value: boolean | cdktf.IResolvable) {
    this._expectMatch = value;
  }
  public resetExpectMatch() {
    this._expectMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectMatchInput() {
    return this._expectMatch;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntries {
  /**
  * GenericKey defines a descriptor entry with a static key and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#generic_key DataK8SProjectcontourIoHttpProxyV1Manifest#generic_key}
  */
  readonly genericKey?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKey;
  /**
  * RemoteAddress defines a descriptor entry with a key of 'remote_address' and a value equal to the client's IP address (from x-forwarded-for).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remote_address DataK8SProjectcontourIoHttpProxyV1Manifest#remote_address}
  */
  readonly remoteAddress?: { [key: string]: string };
  /**
  * RequestHeader defines a descriptor entry that's populated only if a given header is present on the request. The descriptor key is static, and the descriptor value is equal to the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_header DataK8SProjectcontourIoHttpProxyV1Manifest#request_header}
  */
  readonly requestHeader?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeader;
  /**
  * RequestHeaderValueMatch defines a descriptor entry that's populated if the request's headers match a set of 1+ match criteria. The descriptor key is 'header_match', and the descriptor value is static.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_header_value_match DataK8SProjectcontourIoHttpProxyV1Manifest#request_header_value_match}
  */
  readonly requestHeaderValueMatch?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generic_key: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKeyToTerraform(struct!.genericKey),
    remote_address: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.remoteAddress),
    request_header: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderToTerraform(struct!.requestHeader),
    request_header_value_match: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchToTerraform(struct!.requestHeaderValueMatch),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generic_key: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKeyToHclTerraform(struct!.genericKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKey",
    },
    remote_address: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.remoteAddress),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_header: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderToHclTerraform(struct!.requestHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeader",
    },
    request_header_value_match: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchToHclTerraform(struct!.requestHeaderValueMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._genericKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericKey = this._genericKey?.internalValue;
    }
    if (this._remoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._requestHeaderValueMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderValueMatch = this._requestHeaderValueMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._genericKey.internalValue = undefined;
      this._remoteAddress = undefined;
      this._requestHeader.internalValue = undefined;
      this._requestHeaderValueMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._genericKey.internalValue = value.genericKey;
      this._remoteAddress = value.remoteAddress;
      this._requestHeader.internalValue = value.requestHeader;
      this._requestHeaderValueMatch.internalValue = value.requestHeaderValueMatch;
    }
  }

  // generic_key - computed: false, optional: true, required: false
  private _genericKey = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKeyOutputReference(this, "generic_key");
  public get genericKey() {
    return this._genericKey;
  }
  public putGenericKey(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesGenericKey) {
    this._genericKey.internalValue = value;
  }
  public resetGenericKey() {
    this._genericKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericKeyInput() {
    return this._genericKey.internalValue;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: { [key: string]: string }; 
  public get remoteAddress() {
    return this.getStringMapAttribute('remote_address');
  }
  public set remoteAddress(value: { [key: string]: string }) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderOutputReference(this, "request_header");
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeader) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_header_value_match - computed: false, optional: true, required: false
  private _requestHeaderValueMatch = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchOutputReference(this, "request_header_value_match");
  public get requestHeaderValueMatch() {
    return this._requestHeaderValueMatch;
  }
  public putRequestHeaderValueMatch(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch) {
    this._requestHeaderValueMatch.internalValue = value;
  }
  public resetRequestHeaderValueMatch() {
    this._requestHeaderValueMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderValueMatchInput() {
    return this._requestHeaderValueMatch.internalValue;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptors {
  /**
  * Entries is the list of key-value pair generators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#entries DataK8SProjectcontourIoHttpProxyV1Manifest#entries}
  */
  readonly entries?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntries[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesToTerraform, false)(struct!.entries),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entries.internalValue = value.entries;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobal {
  /**
  * Descriptors defines the list of descriptors that will be generated and sent to the rate limit service. Each descriptor contains 1+ key-value pair entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#descriptors DataK8SProjectcontourIoHttpProxyV1Manifest#descriptors}
  */
  readonly descriptors?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptors[] | cdktf.IResolvable;
  /**
  * Disabled configures the HTTPProxy to not use the default global rate limit policy defined by the Contour configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#disabled DataK8SProjectcontourIoHttpProxyV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descriptors: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsToTerraform, false)(struct!.descriptors),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descriptors: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsToHclTerraform, false)(struct!.descriptors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptors = this._descriptors?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptors.internalValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptors.internalValue = value.descriptors;
      this._disabled = value.disabled;
    }
  }

  // descriptors - computed: false, optional: true, required: false
  private _descriptors = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptorsList(this, "descriptors", false);
  public get descriptors() {
    return this._descriptors;
  }
  public putDescriptors(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalDescriptors[] | cdktf.IResolvable) {
    this._descriptors.internalValue = value;
  }
  public resetDescriptors() {
    this._descriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorsInput() {
    return this._descriptors.internalValue;
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
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAdd {
  /**
  * Name represents a key of a header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value represents the value of a header specified by a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAdd | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocal {
  /**
  * Burst defines the number of requests above the requests per unit that should be allowed within a short period of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#burst DataK8SProjectcontourIoHttpProxyV1Manifest#burst}
  */
  readonly burst?: number;
  /**
  * Requests defines how many requests per unit of time should be allowed before rate limiting occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#requests DataK8SProjectcontourIoHttpProxyV1Manifest#requests}
  */
  readonly requests: number;
  /**
  * ResponseHeadersToAdd is an optional list of response headers to set when a request is rate-limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response_headers_to_add DataK8SProjectcontourIoHttpProxyV1Manifest#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAdd[] | cdktf.IResolvable;
  /**
  * ResponseStatusCode is the HTTP status code to use for responses to rate-limited requests. Codes must be in the 400-599 range (inclusive). If not specified, the Envoy default of 429 (Too Many Requests) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response_status_code DataK8SProjectcontourIoHttpProxyV1Manifest#response_status_code}
  */
  readonly responseStatusCode?: number;
  /**
  * Unit defines the period of time within which requests over the limit will be rate limited. Valid values are 'second', 'minute' and 'hour'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#unit DataK8SProjectcontourIoHttpProxyV1Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.numberToTerraform(struct!.burst),
    requests: cdktf.numberToTerraform(struct!.requests),
    response_headers_to_add: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddToTerraform, false)(struct!.responseHeadersToAdd),
    response_status_code: cdktf.numberToTerraform(struct!.responseStatusCode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests: {
      value: cdktf.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddToHclTerraform, false)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddList",
    },
    response_status_code: {
      value: cdktf.numberToHclTerraform(struct!.responseStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    if (this._responseStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseStatusCode = this._responseStatusCode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burst = undefined;
      this._requests = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
      this._responseStatusCode = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burst = value.burst;
      this._requests = value.requests;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
      this._responseStatusCode = value.responseStatusCode;
      this._unit = value.unit;
    }
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // requests - computed: false, optional: false, required: true
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }

  // response_status_code - computed: false, optional: true, required: false
  private _responseStatusCode?: number; 
  public get responseStatusCode() {
    return this.getNumberAttribute('response_status_code');
  }
  public set responseStatusCode(value: number) {
    this._responseStatusCode = value;
  }
  public resetResponseStatusCode() {
    this._responseStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStatusCodeInput() {
    return this._responseStatusCode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicy {
  /**
  * Global defines global rate limiting parameters, i.e. parameters defining descriptors that are sent to an external rate limit service (RLS) for a rate limit decision on each request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#global DataK8SProjectcontourIoHttpProxyV1Manifest#global}
  */
  readonly global?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobal;
  /**
  * Local defines local rate limiting parameters, i.e. parameters for rate limiting that occurs within each Envoy pod as requests are handled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#local DataK8SProjectcontourIoHttpProxyV1Manifest#local}
  */
  readonly local?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocal;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalToTerraform(struct!.global),
    local: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalToTerraform(struct!.local),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobal",
    },
    local: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._global.internalValue = undefined;
      this._local.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._global.internalValue = value.global;
      this._local.internalValue = value.local;
    }
  }

  // global - computed: false, optional: true, required: false
  private _global = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // local - computed: false, optional: true, required: false
  private _local = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySet {
  /**
  * Name represents a key of a header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value represents the value of a header specified by a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySet | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicy {
  /**
  * Remove specifies a list of HTTP header names to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remove DataK8SProjectcontourIoHttpProxyV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#set DataK8SProjectcontourIoHttpProxyV1Manifest#set}
  */
  readonly set?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySet[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetToTerraform, false)(struct!.set),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
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
  private _set = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicySet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicy {
  /**
  * Hostname is the precise hostname to be used in the value of the 'Location' header in the response. When empty, the hostname of the request is used. No wildcards are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#hostname DataK8SProjectcontourIoHttpProxyV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * Path allows for redirection to a different path from the original on the request. The path must start with a leading slash. Note: Only one of Path or Prefix can be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#path DataK8SProjectcontourIoHttpProxyV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Port is the port to be used in the value of the 'Location' header in the response. When empty, port (if specified) of the request is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#port DataK8SProjectcontourIoHttpProxyV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Prefix defines the value to swap the matched prefix or path with. The prefix must start with a leading slash. Note: Only one of Path or Prefix can be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#prefix DataK8SProjectcontourIoHttpProxyV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Scheme is the scheme to be used in the value of the 'Location' header in the response. When empty, the scheme of the request is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#scheme DataK8SProjectcontourIoHttpProxyV1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * StatusCode is the HTTP status code to be used in response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#status_code DataK8SProjectcontourIoHttpProxyV1Manifest#status_code}
  */
  readonly statusCode?: number;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._path = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._scheme = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._path = value.path;
      this._port = value.port;
      this._prefix = value.prefix;
      this._scheme = value.scheme;
      this._statusCode = value.statusCode;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySet {
  /**
  * Name represents a key of a header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value represents the value of a header specified by a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySet | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicy {
  /**
  * Remove specifies a list of HTTP header names to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remove DataK8SProjectcontourIoHttpProxyV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#set DataK8SProjectcontourIoHttpProxyV1Manifest#set}
  */
  readonly set?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySet[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetToTerraform, false)(struct!.set),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
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
  private _set = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicySet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicy {
  /**
  * NumRetries is maximum allowed number of retries. If set to -1, then retries are disabled. If set to 0 or not supplied, the value is set to the Envoy default of 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#count DataK8SProjectcontourIoHttpProxyV1Manifest#count}
  */
  readonly count?: number;
  /**
  * PerTryTimeout specifies the timeout per retry attempt. Ignored if NumRetries is not supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#per_try_timeout DataK8SProjectcontourIoHttpProxyV1Manifest#per_try_timeout}
  */
  readonly perTryTimeout?: string;
  /**
  * RetriableStatusCodes specifies the HTTP status codes that should be retried. This field is only respected when you include 'retriable-status-codes' in the 'RetryOn' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#retriable_status_codes DataK8SProjectcontourIoHttpProxyV1Manifest#retriable_status_codes}
  */
  readonly retriableStatusCodes?: string[];
  /**
  * RetryOn specifies the conditions on which to retry a request. Supported [HTTP conditions](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on): - '5xx' - 'gateway-error' - 'reset' - 'connect-failure' - 'retriable-4xx' - 'refused-stream' - 'retriable-status-codes' - 'retriable-headers' Supported [gRPC conditions](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-grpc-on): - 'cancelled' - 'deadline-exceeded' - 'internal' - 'resource-exhausted' - 'unavailable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#retry_on DataK8SProjectcontourIoHttpProxyV1Manifest#retry_on}
  */
  readonly retryOn?: string[];
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    per_try_timeout: cdktf.stringToTerraform(struct!.perTryTimeout),
    retriable_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retriableStatusCodes),
    retry_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryOn),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
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
    retriable_status_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retriableStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retriableStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriableStatusCodes = this._retriableStatusCodes;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._perTryTimeout = undefined;
      this._retriableStatusCodes = undefined;
      this._retryOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._perTryTimeout = value.perTryTimeout;
      this._retriableStatusCodes = value.retriableStatusCodes;
      this._retryOn = value.retryOn;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // retriable_status_codes - computed: false, optional: true, required: false
  private _retriableStatusCodes?: string[]; 
  public get retriableStatusCodes() {
    return this.getListAttribute('retriable_status_codes');
  }
  public set retriableStatusCodes(value: string[]) {
    this._retriableStatusCodes = value;
  }
  public resetRetriableStatusCodes() {
    this._retriableStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableStatusCodesInput() {
    return this._retriableStatusCodes;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string[]; 
  public get retryOn() {
    return this.getListAttribute('retry_on');
  }
  public set retryOn(value: string[]) {
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewrite {
  /**
  * Value is the value to rewrite the Domain attribute to. For now this is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewriteToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewriteToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewrite {
  /**
  * Value is the value to rewrite the Path attribute to. For now this is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewriteToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewriteToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePolicies {
  /**
  * DomainRewrite enables rewriting the Set-Cookie Domain element. If not set, Domain will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#domain_rewrite DataK8SProjectcontourIoHttpProxyV1Manifest#domain_rewrite}
  */
  readonly domainRewrite?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewrite;
  /**
  * Name is the name of the cookie for which attributes will be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * PathRewrite enables rewriting the Set-Cookie Path element. If not set, Path will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#path_rewrite DataK8SProjectcontourIoHttpProxyV1Manifest#path_rewrite}
  */
  readonly pathRewrite?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewrite;
  /**
  * SameSite enables rewriting the Set-Cookie SameSite element. If not set, SameSite attribute will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#same_site DataK8SProjectcontourIoHttpProxyV1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure enables rewriting the Set-Cookie Secure element. If not set, Secure attribute will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#secure DataK8SProjectcontourIoHttpProxyV1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_rewrite: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewriteToTerraform(struct!.domainRewrite),
    name: cdktf.stringToTerraform(struct!.name),
    path_rewrite: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewriteToTerraform(struct!.pathRewrite),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_rewrite: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewriteToHclTerraform(struct!.domainRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewrite",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_rewrite: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewriteToHclTerraform(struct!.pathRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewrite",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainRewrite = this._domainRewrite?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pathRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRewrite = this._pathRewrite?.internalValue;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainRewrite.internalValue = undefined;
      this._name = undefined;
      this._pathRewrite.internalValue = undefined;
      this._sameSite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainRewrite.internalValue = value.domainRewrite;
      this._name = value.name;
      this._pathRewrite.internalValue = value.pathRewrite;
      this._sameSite = value.sameSite;
      this._secure = value.secure;
    }
  }

  // domain_rewrite - computed: false, optional: true, required: false
  private _domainRewrite = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewriteOutputReference(this, "domain_rewrite");
  public get domainRewrite() {
    return this._domainRewrite;
  }
  public putDomainRewrite(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesDomainRewrite) {
    this._domainRewrite.internalValue = value;
  }
  public resetDomainRewrite() {
    this._domainRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRewriteInput() {
    return this._domainRewrite.internalValue;
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

  // path_rewrite - computed: false, optional: true, required: false
  private _pathRewrite = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewriteOutputReference(this, "path_rewrite");
  public get pathRewrite() {
    return this._pathRewrite;
  }
  public putPathRewrite(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesPathRewrite) {
    this._pathRewrite.internalValue = value;
  }
  public resetPathRewrite() {
    this._pathRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRewriteInput() {
    return this._pathRewrite.internalValue;
  }

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySet {
  /**
  * Name represents a key of a header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value represents the value of a header specified by a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySet | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicy {
  /**
  * Remove specifies a list of HTTP header names to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remove DataK8SProjectcontourIoHttpProxyV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#set DataK8SProjectcontourIoHttpProxyV1Manifest#set}
  */
  readonly set?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySet[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetToTerraform, false)(struct!.set),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
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
  private _set = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicySet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySet {
  /**
  * Name represents a key of a header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value represents the value of a header specified by a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySet | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicy {
  /**
  * Remove specifies a list of HTTP header names to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remove DataK8SProjectcontourIoHttpProxyV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#set DataK8SProjectcontourIoHttpProxyV1Manifest#set}
  */
  readonly set?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySet[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetToTerraform, false)(struct!.set),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
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
  private _set = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicySet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicy {
  /**
  * The speed of traffic increase over the slow start window. Defaults to 1.0, so that endpoint would get linearly increasing amount of traffic. When increasing the value for this parameter, the speed of traffic ramp-up increases non-linearly. The value of aggression parameter should be greater than 0.0. More info: https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/load_balancing/slow_start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#aggression DataK8SProjectcontourIoHttpProxyV1Manifest#aggression}
  */
  readonly aggression?: string;
  /**
  * The minimum or starting percentage of traffic to send to new endpoints. A non-zero value helps avoid a too small initial weight, which may cause endpoints in slow start mode to receive no traffic in the beginning of the slow start window. If not specified, the default is 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#min_weight_percent DataK8SProjectcontourIoHttpProxyV1Manifest#min_weight_percent}
  */
  readonly minWeightPercent?: number;
  /**
  * The duration of slow start window. Duration is expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#window DataK8SProjectcontourIoHttpProxyV1Manifest#window}
  */
  readonly window: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggression: cdktf.stringToTerraform(struct!.aggression),
    min_weight_percent: cdktf.numberToTerraform(struct!.minWeightPercent),
    window: cdktf.stringToTerraform(struct!.window),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggression: {
      value: cdktf.stringToHclTerraform(struct!.aggression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_weight_percent: {
      value: cdktf.numberToHclTerraform(struct!.minWeightPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggression !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggression = this._aggression;
    }
    if (this._minWeightPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWeightPercent = this._minWeightPercent;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggression = undefined;
      this._minWeightPercent = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggression = value.aggression;
      this._minWeightPercent = value.minWeightPercent;
      this._window = value.window;
    }
  }

  // aggression - computed: false, optional: true, required: false
  private _aggression?: string; 
  public get aggression() {
    return this.getStringAttribute('aggression');
  }
  public set aggression(value: string) {
    this._aggression = value;
  }
  public resetAggression() {
    this._aggression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressionInput() {
    return this._aggression;
  }

  // min_weight_percent - computed: false, optional: true, required: false
  private _minWeightPercent?: number; 
  public get minWeightPercent() {
    return this.getNumberAttribute('min_weight_percent');
  }
  public set minWeightPercent(value: number) {
    this._minWeightPercent = value;
  }
  public resetMinWeightPercent() {
    this._minWeightPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWeightPercentInput() {
    return this._minWeightPercent;
  }

  // window - computed: false, optional: false, required: true
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidation {
  /**
  * Name or namespaced name of the Kubernetes secret used to validate the certificate presented by the backend. The secret must contain key named ca.crt. The name can be optionally prefixed with namespace 'namespace/name'. When cross-namespace reference is used, TLSCertificateDelegation resource must exist in the namespace to grant access to the secret. Max length should be the actual max possible length of a namespaced name (63 + 253 + 1 = 317)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ca_secret DataK8SProjectcontourIoHttpProxyV1Manifest#ca_secret}
  */
  readonly caSecret: string;
  /**
  * Key which is expected to be present in the 'subjectAltName' of the presented certificate. Deprecated: migrate to using the plural field subjectNames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#subject_name DataK8SProjectcontourIoHttpProxyV1Manifest#subject_name}
  */
  readonly subjectName: string;
  /**
  * List of keys, of which at least one is expected to be present in the 'subjectAltName of the presented certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#subject_names DataK8SProjectcontourIoHttpProxyV1Manifest#subject_names}
  */
  readonly subjectNames?: string[];
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidationToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secret: cdktf.stringToTerraform(struct!.caSecret),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
    subject_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectNames),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidationToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secret: {
      value: cdktf.stringToHclTerraform(struct!.caSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecret = this._caSecret;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    if (this._subjectNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectNames = this._subjectNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecret = undefined;
      this._subjectName = undefined;
      this._subjectNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecret = value.caSecret;
      this._subjectName = value.subjectName;
      this._subjectNames = value.subjectNames;
    }
  }

  // ca_secret - computed: false, optional: false, required: true
  private _caSecret?: string; 
  public get caSecret() {
    return this.getStringAttribute('ca_secret');
  }
  public set caSecret(value: string) {
    this._caSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretInput() {
    return this._caSecret;
  }

  // subject_name - computed: false, optional: false, required: true
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }

  // subject_names - computed: false, optional: true, required: false
  private _subjectNames?: string[]; 
  public get subjectNames() {
    return this.getListAttribute('subject_names');
  }
  public set subjectNames(value: string[]) {
    this._subjectNames = value;
  }
  public resetSubjectNames() {
    this._subjectNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNamesInput() {
    return this._subjectNames;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServices {
  /**
  * The policies for rewriting Set-Cookie header attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cookie_rewrite_policies DataK8SProjectcontourIoHttpProxyV1Manifest#cookie_rewrite_policies}
  */
  readonly cookieRewritePolicies?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePolicies[] | cdktf.IResolvable;
  /**
  * HealthPort is the port for this service healthcheck. If not specified, Port is used for service healthchecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#health_port DataK8SProjectcontourIoHttpProxyV1Manifest#health_port}
  */
  readonly healthPort?: number;
  /**
  * If Mirror is true the Service will receive a read only mirror of the traffic for this route. If Mirror is true, then fractional mirroring can be enabled by optionally setting the Weight field. Legal values for Weight are 1-100. Omitting the Weight field will result in 100% mirroring. NOTE: Setting Weight explicitly to 0 will unexpectedly result in 100% traffic mirroring. This occurs since we cannot distinguish omitted fields from those explicitly set to their default values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#mirror DataK8SProjectcontourIoHttpProxyV1Manifest#mirror}
  */
  readonly mirror?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of Kubernetes service to proxy traffic. Names defined here will be used to look up corresponding endpoints which contain the ips to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Port (defined as Integer) to proxy traffic to since a service can have multiple defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#port DataK8SProjectcontourIoHttpProxyV1Manifest#port}
  */
  readonly port: number;
  /**
  * Protocol may be used to specify (or override) the protocol used to reach this Service. Values may be tls, h2, h2c. If omitted, protocol-selection falls back on Service annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#protocol DataK8SProjectcontourIoHttpProxyV1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * The policy for managing request headers during proxying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_headers_policy DataK8SProjectcontourIoHttpProxyV1Manifest#request_headers_policy}
  */
  readonly requestHeadersPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicy;
  /**
  * The policy for managing response headers during proxying. Rewriting the 'Host' header is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response_headers_policy DataK8SProjectcontourIoHttpProxyV1Manifest#response_headers_policy}
  */
  readonly responseHeadersPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicy;
  /**
  * Slow start will gradually increase amount of traffic to a newly added endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#slow_start_policy DataK8SProjectcontourIoHttpProxyV1Manifest#slow_start_policy}
  */
  readonly slowStartPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicy;
  /**
  * UpstreamValidation defines how to verify the backend service's certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#validation DataK8SProjectcontourIoHttpProxyV1Manifest#validation}
  */
  readonly validation?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidation;
  /**
  * Weight defines percentage of traffic to balance traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#weight DataK8SProjectcontourIoHttpProxyV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_rewrite_policies: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesToTerraform, false)(struct!.cookieRewritePolicies),
    health_port: cdktf.numberToTerraform(struct!.healthPort),
    mirror: cdktf.booleanToTerraform(struct!.mirror),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    request_headers_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicyToTerraform(struct!.requestHeadersPolicy),
    response_headers_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicyToTerraform(struct!.responseHeadersPolicy),
    slow_start_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicyToTerraform(struct!.slowStartPolicy),
    validation: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidationToTerraform(struct!.validation),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_rewrite_policies: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesToHclTerraform, false)(struct!.cookieRewritePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesList",
    },
    health_port: {
      value: cdktf.numberToHclTerraform(struct!.healthPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mirror: {
      value: cdktf.booleanToHclTerraform(struct!.mirror),
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
    request_headers_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicyToHclTerraform(struct!.requestHeadersPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicy",
    },
    response_headers_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicyToHclTerraform(struct!.responseHeadersPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicy",
    },
    slow_start_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicyToHclTerraform(struct!.slowStartPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicy",
    },
    validation: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidation",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieRewritePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieRewritePolicies = this._cookieRewritePolicies?.internalValue;
    }
    if (this._healthPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPort = this._healthPort;
    }
    if (this._mirror !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requestHeadersPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersPolicy = this._requestHeadersPolicy?.internalValue;
    }
    if (this._responseHeadersPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicy = this._responseHeadersPolicy?.internalValue;
    }
    if (this._slowStartPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStartPolicy = this._slowStartPolicy?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieRewritePolicies.internalValue = undefined;
      this._healthPort = undefined;
      this._mirror = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._requestHeadersPolicy.internalValue = undefined;
      this._responseHeadersPolicy.internalValue = undefined;
      this._slowStartPolicy.internalValue = undefined;
      this._validation.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieRewritePolicies.internalValue = value.cookieRewritePolicies;
      this._healthPort = value.healthPort;
      this._mirror = value.mirror;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
      this._requestHeadersPolicy.internalValue = value.requestHeadersPolicy;
      this._responseHeadersPolicy.internalValue = value.responseHeadersPolicy;
      this._slowStartPolicy.internalValue = value.slowStartPolicy;
      this._validation.internalValue = value.validation;
      this._weight = value.weight;
    }
  }

  // cookie_rewrite_policies - computed: false, optional: true, required: false
  private _cookieRewritePolicies = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePoliciesList(this, "cookie_rewrite_policies", false);
  public get cookieRewritePolicies() {
    return this._cookieRewritePolicies;
  }
  public putCookieRewritePolicies(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesCookieRewritePolicies[] | cdktf.IResolvable) {
    this._cookieRewritePolicies.internalValue = value;
  }
  public resetCookieRewritePolicies() {
    this._cookieRewritePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieRewritePoliciesInput() {
    return this._cookieRewritePolicies.internalValue;
  }

  // health_port - computed: false, optional: true, required: false
  private _healthPort?: number; 
  public get healthPort() {
    return this.getNumberAttribute('health_port');
  }
  public set healthPort(value: number) {
    this._healthPort = value;
  }
  public resetHealthPort() {
    this._healthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPortInput() {
    return this._healthPort;
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

  // request_headers_policy - computed: false, optional: true, required: false
  private _requestHeadersPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicyOutputReference(this, "request_headers_policy");
  public get requestHeadersPolicy() {
    return this._requestHeadersPolicy;
  }
  public putRequestHeadersPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesRequestHeadersPolicy) {
    this._requestHeadersPolicy.internalValue = value;
  }
  public resetRequestHeadersPolicy() {
    this._requestHeadersPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersPolicyInput() {
    return this._requestHeadersPolicy.internalValue;
  }

  // response_headers_policy - computed: false, optional: true, required: false
  private _responseHeadersPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicyOutputReference(this, "response_headers_policy");
  public get responseHeadersPolicy() {
    return this._responseHeadersPolicy;
  }
  public putResponseHeadersPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesResponseHeadersPolicy) {
    this._responseHeadersPolicy.internalValue = value;
  }
  public resetResponseHeadersPolicy() {
    this._responseHeadersPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyInput() {
    return this._responseHeadersPolicy.internalValue;
  }

  // slow_start_policy - computed: false, optional: true, required: false
  private _slowStartPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicyOutputReference(this, "slow_start_policy");
  public get slowStartPolicy() {
    return this._slowStartPolicy;
  }
  public putSlowStartPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesSlowStartPolicy) {
    this._slowStartPolicy.internalValue = value;
  }
  public resetSlowStartPolicy() {
    this._slowStartPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartPolicyInput() {
    return this._slowStartPolicy.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicy {
  /**
  * Timeout for how long the proxy should wait while there is no activity during single request/response (for HTTP/1.1) or stream (for HTTP/2). Timeout will not trigger while HTTP/1.1 connection is idle between two consecutive requests. If not specified, there is no per-route idle timeout, though a connection manager-wide stream_idle_timeout default of 5m still applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#idle DataK8SProjectcontourIoHttpProxyV1Manifest#idle}
  */
  readonly idle?: string;
  /**
  * Timeout for how long connection from the proxy to the upstream service is kept when there are no active requests. If not supplied, Envoy's default value of 1h applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#idle_connection DataK8SProjectcontourIoHttpProxyV1Manifest#idle_connection}
  */
  readonly idleConnection?: string;
  /**
  * Timeout for receiving a response from the server after processing a request from client. If not supplied, Envoy's default value of 15s applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response DataK8SProjectcontourIoHttpProxyV1Manifest#response}
  */
  readonly response?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: cdktf.stringToTerraform(struct!.idle),
    idle_connection: cdktf.stringToTerraform(struct!.idleConnection),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: cdktf.stringToHclTerraform(struct!.idle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_connection: {
      value: cdktf.stringToHclTerraform(struct!.idleConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle;
    }
    if (this._idleConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleConnection = this._idleConnection;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle = undefined;
      this._idleConnection = undefined;
      this._response = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle = value.idle;
      this._idleConnection = value.idleConnection;
      this._response = value.response;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: string; 
  public get idle() {
    return this.getStringAttribute('idle');
  }
  public set idle(value: string) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle;
  }

  // idle_connection - computed: false, optional: true, required: false
  private _idleConnection?: string; 
  public get idleConnection() {
    return this.getStringAttribute('idle_connection');
  }
  public set idleConnection(value: string) {
    this._idleConnection = value;
  }
  public resetIdleConnection() {
    this._idleConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleConnectionInput() {
    return this._idleConnection;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutes {
  /**
  * AuthPolicy updates the authorization policy that was set on the root HTTPProxy object for client requests that match this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#auth_policy DataK8SProjectcontourIoHttpProxyV1Manifest#auth_policy}
  */
  readonly authPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicy;
  /**
  * Conditions are a set of rules that are applied to a Route. When applied, they are merged using AND, with one exception: There can be only one Prefix, Exact or Regex MatchCondition per Conditions slice. More than one of these condition types, or contradictory Conditions, will make the route invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#conditions DataK8SProjectcontourIoHttpProxyV1Manifest#conditions}
  */
  readonly conditions?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditions[] | cdktf.IResolvable;
  /**
  * The policies for rewriting Set-Cookie header attributes. Note that rewritten cookie names must be unique in this list. Order rewrite policies are specified in does not matter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cookie_rewrite_policies DataK8SProjectcontourIoHttpProxyV1Manifest#cookie_rewrite_policies}
  */
  readonly cookieRewritePolicies?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePolicies[] | cdktf.IResolvable;
  /**
  * DirectResponsePolicy returns an arbitrary HTTP response directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#direct_response_policy DataK8SProjectcontourIoHttpProxyV1Manifest#direct_response_policy}
  */
  readonly directResponsePolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicy;
  /**
  * Enables websocket support for the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#enable_websockets DataK8SProjectcontourIoHttpProxyV1Manifest#enable_websockets}
  */
  readonly enableWebsockets?: boolean | cdktf.IResolvable;
  /**
  * The health check policy for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#health_check_policy DataK8SProjectcontourIoHttpProxyV1Manifest#health_check_policy}
  */
  readonly healthCheckPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicy;
  /**
  * The policy to define when to handle redirects responses internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#internal_redirect_policy DataK8SProjectcontourIoHttpProxyV1Manifest#internal_redirect_policy}
  */
  readonly internalRedirectPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicy;
  /**
  * IPAllowFilterPolicy is a list of ipv4/6 filter rules for which matching requests should be allowed. All other requests will be denied. Only one of IPAllowFilterPolicy and IPDenyFilterPolicy can be defined. The rules defined here override any rules set on the root HTTPProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ip_allow_policy DataK8SProjectcontourIoHttpProxyV1Manifest#ip_allow_policy}
  */
  readonly ipAllowPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicy[] | cdktf.IResolvable;
  /**
  * IPDenyFilterPolicy is a list of ipv4/6 filter rules for which matching requests should be denied. All other requests will be allowed. Only one of IPAllowFilterPolicy and IPDenyFilterPolicy can be defined. The rules defined here override any rules set on the root HTTPProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ip_deny_policy DataK8SProjectcontourIoHttpProxyV1Manifest#ip_deny_policy}
  */
  readonly ipDenyPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicy[] | cdktf.IResolvable;
  /**
  * The policy for verifying JWTs for requests to this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#jwt_verification_policy DataK8SProjectcontourIoHttpProxyV1Manifest#jwt_verification_policy}
  */
  readonly jwtVerificationPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicy;
  /**
  * The load balancing policy for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#load_balancer_policy DataK8SProjectcontourIoHttpProxyV1Manifest#load_balancer_policy}
  */
  readonly loadBalancerPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicy;
  /**
  * The policy for rewriting the path of the request URL after the request has been routed to a Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#path_rewrite_policy DataK8SProjectcontourIoHttpProxyV1Manifest#path_rewrite_policy}
  */
  readonly pathRewritePolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicy;
  /**
  * Allow this path to respond to insecure requests over HTTP which are normally not permitted when a 'virtualhost.tls' block is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#permit_insecure DataK8SProjectcontourIoHttpProxyV1Manifest#permit_insecure}
  */
  readonly permitInsecure?: boolean | cdktf.IResolvable;
  /**
  * The policy for rate limiting on the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#rate_limit_policy DataK8SProjectcontourIoHttpProxyV1Manifest#rate_limit_policy}
  */
  readonly rateLimitPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicy;
  /**
  * The policy for managing request headers during proxying. You may dynamically rewrite the Host header to be forwarded upstream to the content of a request header using the below format '%REQ(X-Header-Name)%'. If the value of the header is empty, it is ignored. *NOTE: Pay attention to the potential security implications of using this option. Provided header must come from trusted source. **NOTE: The header rewrite is only done while forwarding and has no bearing on the routing decision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_headers_policy DataK8SProjectcontourIoHttpProxyV1Manifest#request_headers_policy}
  */
  readonly requestHeadersPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicy;
  /**
  * RequestRedirectPolicy defines an HTTP redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_redirect_policy DataK8SProjectcontourIoHttpProxyV1Manifest#request_redirect_policy}
  */
  readonly requestRedirectPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicy;
  /**
  * The policy for managing response headers during proxying. Rewriting the 'Host' header is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response_headers_policy DataK8SProjectcontourIoHttpProxyV1Manifest#response_headers_policy}
  */
  readonly responseHeadersPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicy;
  /**
  * The retry policy for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#retry_policy DataK8SProjectcontourIoHttpProxyV1Manifest#retry_policy}
  */
  readonly retryPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicy;
  /**
  * Services are the services to proxy traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#services DataK8SProjectcontourIoHttpProxyV1Manifest#services}
  */
  readonly services?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServices[] | cdktf.IResolvable;
  /**
  * The timeout policy for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#timeout_policy DataK8SProjectcontourIoHttpProxyV1Manifest#timeout_policy}
  */
  readonly timeoutPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicy;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicyToTerraform(struct!.authPolicy),
    conditions: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsToTerraform, false)(struct!.conditions),
    cookie_rewrite_policies: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesToTerraform, false)(struct!.cookieRewritePolicies),
    direct_response_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicyToTerraform(struct!.directResponsePolicy),
    enable_websockets: cdktf.booleanToTerraform(struct!.enableWebsockets),
    health_check_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyToTerraform(struct!.healthCheckPolicy),
    internal_redirect_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicyToTerraform(struct!.internalRedirectPolicy),
    ip_allow_policy: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyToTerraform, false)(struct!.ipAllowPolicy),
    ip_deny_policy: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyToTerraform, false)(struct!.ipDenyPolicy),
    jwt_verification_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicyToTerraform(struct!.jwtVerificationPolicy),
    load_balancer_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyToTerraform(struct!.loadBalancerPolicy),
    path_rewrite_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyToTerraform(struct!.pathRewritePolicy),
    permit_insecure: cdktf.booleanToTerraform(struct!.permitInsecure),
    rate_limit_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyToTerraform(struct!.rateLimitPolicy),
    request_headers_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicyToTerraform(struct!.requestHeadersPolicy),
    request_redirect_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicyToTerraform(struct!.requestRedirectPolicy),
    response_headers_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicyToTerraform(struct!.responseHeadersPolicy),
    retry_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicyToTerraform(struct!.retryPolicy),
    services: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesToTerraform, false)(struct!.services),
    timeout_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicyToTerraform(struct!.timeoutPolicy),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicyToHclTerraform(struct!.authPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicy",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsList",
    },
    cookie_rewrite_policies: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesToHclTerraform, false)(struct!.cookieRewritePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesList",
    },
    direct_response_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicyToHclTerraform(struct!.directResponsePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicy",
    },
    enable_websockets: {
      value: cdktf.booleanToHclTerraform(struct!.enableWebsockets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyToHclTerraform(struct!.healthCheckPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicy",
    },
    internal_redirect_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicyToHclTerraform(struct!.internalRedirectPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicy",
    },
    ip_allow_policy: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyToHclTerraform, false)(struct!.ipAllowPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyList",
    },
    ip_deny_policy: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyToHclTerraform, false)(struct!.ipDenyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyList",
    },
    jwt_verification_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicyToHclTerraform(struct!.jwtVerificationPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicy",
    },
    load_balancer_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyToHclTerraform(struct!.loadBalancerPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicy",
    },
    path_rewrite_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyToHclTerraform(struct!.pathRewritePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicy",
    },
    permit_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.permitInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate_limit_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyToHclTerraform(struct!.rateLimitPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicy",
    },
    request_headers_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicyToHclTerraform(struct!.requestHeadersPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicy",
    },
    request_redirect_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicyToHclTerraform(struct!.requestRedirectPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicy",
    },
    response_headers_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicyToHclTerraform(struct!.responseHeadersPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicy",
    },
    retry_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicy",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesList",
    },
    timeout_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicyToHclTerraform(struct!.timeoutPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPolicy = this._authPolicy?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._cookieRewritePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieRewritePolicies = this._cookieRewritePolicies?.internalValue;
    }
    if (this._directResponsePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directResponsePolicy = this._directResponsePolicy?.internalValue;
    }
    if (this._enableWebsockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWebsockets = this._enableWebsockets;
    }
    if (this._healthCheckPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPolicy = this._healthCheckPolicy?.internalValue;
    }
    if (this._internalRedirectPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalRedirectPolicy = this._internalRedirectPolicy?.internalValue;
    }
    if (this._ipAllowPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowPolicy = this._ipAllowPolicy?.internalValue;
    }
    if (this._ipDenyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDenyPolicy = this._ipDenyPolicy?.internalValue;
    }
    if (this._jwtVerificationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtVerificationPolicy = this._jwtVerificationPolicy?.internalValue;
    }
    if (this._loadBalancerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerPolicy = this._loadBalancerPolicy?.internalValue;
    }
    if (this._pathRewritePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRewritePolicy = this._pathRewritePolicy?.internalValue;
    }
    if (this._permitInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitInsecure = this._permitInsecure;
    }
    if (this._rateLimitPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitPolicy = this._rateLimitPolicy?.internalValue;
    }
    if (this._requestHeadersPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersPolicy = this._requestHeadersPolicy?.internalValue;
    }
    if (this._requestRedirectPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRedirectPolicy = this._requestRedirectPolicy?.internalValue;
    }
    if (this._responseHeadersPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicy = this._responseHeadersPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._timeoutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutPolicy = this._timeoutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authPolicy.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._cookieRewritePolicies.internalValue = undefined;
      this._directResponsePolicy.internalValue = undefined;
      this._enableWebsockets = undefined;
      this._healthCheckPolicy.internalValue = undefined;
      this._internalRedirectPolicy.internalValue = undefined;
      this._ipAllowPolicy.internalValue = undefined;
      this._ipDenyPolicy.internalValue = undefined;
      this._jwtVerificationPolicy.internalValue = undefined;
      this._loadBalancerPolicy.internalValue = undefined;
      this._pathRewritePolicy.internalValue = undefined;
      this._permitInsecure = undefined;
      this._rateLimitPolicy.internalValue = undefined;
      this._requestHeadersPolicy.internalValue = undefined;
      this._requestRedirectPolicy.internalValue = undefined;
      this._responseHeadersPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._services.internalValue = undefined;
      this._timeoutPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authPolicy.internalValue = value.authPolicy;
      this._conditions.internalValue = value.conditions;
      this._cookieRewritePolicies.internalValue = value.cookieRewritePolicies;
      this._directResponsePolicy.internalValue = value.directResponsePolicy;
      this._enableWebsockets = value.enableWebsockets;
      this._healthCheckPolicy.internalValue = value.healthCheckPolicy;
      this._internalRedirectPolicy.internalValue = value.internalRedirectPolicy;
      this._ipAllowPolicy.internalValue = value.ipAllowPolicy;
      this._ipDenyPolicy.internalValue = value.ipDenyPolicy;
      this._jwtVerificationPolicy.internalValue = value.jwtVerificationPolicy;
      this._loadBalancerPolicy.internalValue = value.loadBalancerPolicy;
      this._pathRewritePolicy.internalValue = value.pathRewritePolicy;
      this._permitInsecure = value.permitInsecure;
      this._rateLimitPolicy.internalValue = value.rateLimitPolicy;
      this._requestHeadersPolicy.internalValue = value.requestHeadersPolicy;
      this._requestRedirectPolicy.internalValue = value.requestRedirectPolicy;
      this._responseHeadersPolicy.internalValue = value.responseHeadersPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._services.internalValue = value.services;
      this._timeoutPolicy.internalValue = value.timeoutPolicy;
    }
  }

  // auth_policy - computed: false, optional: true, required: false
  private _authPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicyOutputReference(this, "auth_policy");
  public get authPolicy() {
    return this._authPolicy;
  }
  public putAuthPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesAuthPolicy) {
    this._authPolicy.internalValue = value;
  }
  public resetAuthPolicy() {
    this._authPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPolicyInput() {
    return this._authPolicy.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // cookie_rewrite_policies - computed: false, optional: true, required: false
  private _cookieRewritePolicies = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePoliciesList(this, "cookie_rewrite_policies", false);
  public get cookieRewritePolicies() {
    return this._cookieRewritePolicies;
  }
  public putCookieRewritePolicies(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesCookieRewritePolicies[] | cdktf.IResolvable) {
    this._cookieRewritePolicies.internalValue = value;
  }
  public resetCookieRewritePolicies() {
    this._cookieRewritePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieRewritePoliciesInput() {
    return this._cookieRewritePolicies.internalValue;
  }

  // direct_response_policy - computed: false, optional: true, required: false
  private _directResponsePolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicyOutputReference(this, "direct_response_policy");
  public get directResponsePolicy() {
    return this._directResponsePolicy;
  }
  public putDirectResponsePolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesDirectResponsePolicy) {
    this._directResponsePolicy.internalValue = value;
  }
  public resetDirectResponsePolicy() {
    this._directResponsePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directResponsePolicyInput() {
    return this._directResponsePolicy.internalValue;
  }

  // enable_websockets - computed: false, optional: true, required: false
  private _enableWebsockets?: boolean | cdktf.IResolvable; 
  public get enableWebsockets() {
    return this.getBooleanAttribute('enable_websockets');
  }
  public set enableWebsockets(value: boolean | cdktf.IResolvable) {
    this._enableWebsockets = value;
  }
  public resetEnableWebsockets() {
    this._enableWebsockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebsocketsInput() {
    return this._enableWebsockets;
  }

  // health_check_policy - computed: false, optional: true, required: false
  private _healthCheckPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicyOutputReference(this, "health_check_policy");
  public get healthCheckPolicy() {
    return this._healthCheckPolicy;
  }
  public putHealthCheckPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesHealthCheckPolicy) {
    this._healthCheckPolicy.internalValue = value;
  }
  public resetHealthCheckPolicy() {
    this._healthCheckPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPolicyInput() {
    return this._healthCheckPolicy.internalValue;
  }

  // internal_redirect_policy - computed: false, optional: true, required: false
  private _internalRedirectPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicyOutputReference(this, "internal_redirect_policy");
  public get internalRedirectPolicy() {
    return this._internalRedirectPolicy;
  }
  public putInternalRedirectPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesInternalRedirectPolicy) {
    this._internalRedirectPolicy.internalValue = value;
  }
  public resetInternalRedirectPolicy() {
    this._internalRedirectPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalRedirectPolicyInput() {
    return this._internalRedirectPolicy.internalValue;
  }

  // ip_allow_policy - computed: false, optional: true, required: false
  private _ipAllowPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicyList(this, "ip_allow_policy", false);
  public get ipAllowPolicy() {
    return this._ipAllowPolicy;
  }
  public putIpAllowPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpAllowPolicy[] | cdktf.IResolvable) {
    this._ipAllowPolicy.internalValue = value;
  }
  public resetIpAllowPolicy() {
    this._ipAllowPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowPolicyInput() {
    return this._ipAllowPolicy.internalValue;
  }

  // ip_deny_policy - computed: false, optional: true, required: false
  private _ipDenyPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicyList(this, "ip_deny_policy", false);
  public get ipDenyPolicy() {
    return this._ipDenyPolicy;
  }
  public putIpDenyPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesIpDenyPolicy[] | cdktf.IResolvable) {
    this._ipDenyPolicy.internalValue = value;
  }
  public resetIpDenyPolicy() {
    this._ipDenyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDenyPolicyInput() {
    return this._ipDenyPolicy.internalValue;
  }

  // jwt_verification_policy - computed: false, optional: true, required: false
  private _jwtVerificationPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicyOutputReference(this, "jwt_verification_policy");
  public get jwtVerificationPolicy() {
    return this._jwtVerificationPolicy;
  }
  public putJwtVerificationPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesJwtVerificationPolicy) {
    this._jwtVerificationPolicy.internalValue = value;
  }
  public resetJwtVerificationPolicy() {
    this._jwtVerificationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtVerificationPolicyInput() {
    return this._jwtVerificationPolicy.internalValue;
  }

  // load_balancer_policy - computed: false, optional: true, required: false
  private _loadBalancerPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicyOutputReference(this, "load_balancer_policy");
  public get loadBalancerPolicy() {
    return this._loadBalancerPolicy;
  }
  public putLoadBalancerPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesLoadBalancerPolicy) {
    this._loadBalancerPolicy.internalValue = value;
  }
  public resetLoadBalancerPolicy() {
    this._loadBalancerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPolicyInput() {
    return this._loadBalancerPolicy.internalValue;
  }

  // path_rewrite_policy - computed: false, optional: true, required: false
  private _pathRewritePolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicyOutputReference(this, "path_rewrite_policy");
  public get pathRewritePolicy() {
    return this._pathRewritePolicy;
  }
  public putPathRewritePolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesPathRewritePolicy) {
    this._pathRewritePolicy.internalValue = value;
  }
  public resetPathRewritePolicy() {
    this._pathRewritePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRewritePolicyInput() {
    return this._pathRewritePolicy.internalValue;
  }

  // permit_insecure - computed: false, optional: true, required: false
  private _permitInsecure?: boolean | cdktf.IResolvable; 
  public get permitInsecure() {
    return this.getBooleanAttribute('permit_insecure');
  }
  public set permitInsecure(value: boolean | cdktf.IResolvable) {
    this._permitInsecure = value;
  }
  public resetPermitInsecure() {
    this._permitInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitInsecureInput() {
    return this._permitInsecure;
  }

  // rate_limit_policy - computed: false, optional: true, required: false
  private _rateLimitPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicyOutputReference(this, "rate_limit_policy");
  public get rateLimitPolicy() {
    return this._rateLimitPolicy;
  }
  public putRateLimitPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRateLimitPolicy) {
    this._rateLimitPolicy.internalValue = value;
  }
  public resetRateLimitPolicy() {
    this._rateLimitPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitPolicyInput() {
    return this._rateLimitPolicy.internalValue;
  }

  // request_headers_policy - computed: false, optional: true, required: false
  private _requestHeadersPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicyOutputReference(this, "request_headers_policy");
  public get requestHeadersPolicy() {
    return this._requestHeadersPolicy;
  }
  public putRequestHeadersPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestHeadersPolicy) {
    this._requestHeadersPolicy.internalValue = value;
  }
  public resetRequestHeadersPolicy() {
    this._requestHeadersPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersPolicyInput() {
    return this._requestHeadersPolicy.internalValue;
  }

  // request_redirect_policy - computed: false, optional: true, required: false
  private _requestRedirectPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicyOutputReference(this, "request_redirect_policy");
  public get requestRedirectPolicy() {
    return this._requestRedirectPolicy;
  }
  public putRequestRedirectPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRequestRedirectPolicy) {
    this._requestRedirectPolicy.internalValue = value;
  }
  public resetRequestRedirectPolicy() {
    this._requestRedirectPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRedirectPolicyInput() {
    return this._requestRedirectPolicy.internalValue;
  }

  // response_headers_policy - computed: false, optional: true, required: false
  private _responseHeadersPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicyOutputReference(this, "response_headers_policy");
  public get responseHeadersPolicy() {
    return this._responseHeadersPolicy;
  }
  public putResponseHeadersPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesResponseHeadersPolicy) {
    this._responseHeadersPolicy.internalValue = value;
  }
  public resetResponseHeadersPolicy() {
    this._responseHeadersPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyInput() {
    return this._responseHeadersPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // timeout_policy - computed: false, optional: true, required: false
  private _timeoutPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicyOutputReference(this, "timeout_policy");
  public get timeoutPolicy() {
    return this._timeoutPolicy;
  }
  public putTimeoutPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesTimeoutPolicy) {
    this._timeoutPolicy.internalValue = value;
  }
  public resetTimeoutPolicy() {
    this._timeoutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutPolicyInput() {
    return this._timeoutPolicy.internalValue;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicy {
  /**
  * The number of healthy health checks required before a host is marked healthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#healthy_threshold_count DataK8SProjectcontourIoHttpProxyV1Manifest#healthy_threshold_count}
  */
  readonly healthyThresholdCount?: number;
  /**
  * The interval (seconds) between health checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#interval_seconds DataK8SProjectcontourIoHttpProxyV1Manifest#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The time to wait (seconds) for a health check response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#timeout_seconds DataK8SProjectcontourIoHttpProxyV1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The number of unhealthy health checks required before a host is marked unhealthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#unhealthy_threshold_count DataK8SProjectcontourIoHttpProxyV1Manifest#unhealthy_threshold_count}
  */
  readonly unhealthyThresholdCount?: number;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold_count: cdktf.numberToTerraform(struct!.healthyThresholdCount),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    unhealthy_threshold_count: cdktf.numberToTerraform(struct!.unhealthyThresholdCount),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.healthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThresholdCount = this._healthyThresholdCount;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._unhealthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThresholdCount = this._unhealthyThresholdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthyThresholdCount = undefined;
      this._intervalSeconds = undefined;
      this._timeoutSeconds = undefined;
      this._unhealthyThresholdCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthyThresholdCount = value.healthyThresholdCount;
      this._intervalSeconds = value.intervalSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
      this._unhealthyThresholdCount = value.unhealthyThresholdCount;
    }
  }

  // healthy_threshold_count - computed: false, optional: true, required: false
  private _healthyThresholdCount?: number; 
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
  }
  public set healthyThresholdCount(value: number) {
    this._healthyThresholdCount = value;
  }
  public resetHealthyThresholdCount() {
    this._healthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdCountInput() {
    return this._healthyThresholdCount;
  }

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // unhealthy_threshold_count - computed: false, optional: true, required: false
  private _unhealthyThresholdCount?: number; 
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }
  public set unhealthyThresholdCount(value: number) {
    this._unhealthyThresholdCount = value;
  }
  public resetUnhealthyThresholdCount() {
    this._unhealthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdCountInput() {
    return this._unhealthyThresholdCount;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyInclude {
  /**
  * Name of the child HTTPProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the HTTPProxy to include. Defaults to the current namespace if not supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#namespace DataK8SProjectcontourIoHttpProxyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludeToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludeToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyInclude | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyInclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyInclude | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludes {
  /**
  * Name of the child HTTPProxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the HTTPProxy to include. Defaults to the current namespace if not supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#namespace DataK8SProjectcontourIoHttpProxyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludes | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludes | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions {
  /**
  * HeaderName is the name of the HTTP request header that will be used to calculate the hash key. If the header specified is not present on a request, no hash will be produced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#header_name DataK8SProjectcontourIoHttpProxyV1Manifest#header_name}
  */
  readonly headerName?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions {
  /**
  * ParameterName is the name of the HTTP request query parameter that will be used to calculate the hash key. If the query parameter specified is not present on a request, no hash will be produced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#parameter_name DataK8SProjectcontourIoHttpProxyV1Manifest#parameter_name}
  */
  readonly parameterName?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterName = value.parameterName;
    }
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPolicies {
  /**
  * HashSourceIP should be set to true when request source IP hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#hash_source_ip DataK8SProjectcontourIoHttpProxyV1Manifest#hash_source_ip}
  */
  readonly hashSourceIp?: boolean | cdktf.IResolvable;
  /**
  * HeaderHashOptions should be set when request header hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#header_hash_options DataK8SProjectcontourIoHttpProxyV1Manifest#header_hash_options}
  */
  readonly headerHashOptions?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions;
  /**
  * QueryParameterHashOptions should be set when request query parameter hash based load balancing is desired. It must be the only hash option field set, otherwise this request hash policy object will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#query_parameter_hash_options DataK8SProjectcontourIoHttpProxyV1Manifest#query_parameter_hash_options}
  */
  readonly queryParameterHashOptions?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions;
  /**
  * Terminal is a flag that allows for short-circuiting computing of a hash for a given request. If set to true, and the request attribute specified in the attribute hash options is present, no further hash policies will be used to calculate a hash for the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#terminal DataK8SProjectcontourIoHttpProxyV1Manifest#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_source_ip: cdktf.booleanToTerraform(struct!.hashSourceIp),
    header_hash_options: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToTerraform(struct!.headerHashOptions),
    query_parameter_hash_options: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToTerraform(struct!.queryParameterHashOptions),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.hashSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_hash_options: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsToHclTerraform(struct!.headerHashOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions",
    },
    query_parameter_hash_options: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsToHclTerraform(struct!.queryParameterHashOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions",
    },
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashSourceIp = this._hashSourceIp;
    }
    if (this._headerHashOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHashOptions = this._headerHashOptions?.internalValue;
    }
    if (this._queryParameterHashOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterHashOptions = this._queryParameterHashOptions?.internalValue;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashSourceIp = undefined;
      this._headerHashOptions.internalValue = undefined;
      this._queryParameterHashOptions.internalValue = undefined;
      this._terminal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashSourceIp = value.hashSourceIp;
      this._headerHashOptions.internalValue = value.headerHashOptions;
      this._queryParameterHashOptions.internalValue = value.queryParameterHashOptions;
      this._terminal = value.terminal;
    }
  }

  // hash_source_ip - computed: false, optional: true, required: false
  private _hashSourceIp?: boolean | cdktf.IResolvable; 
  public get hashSourceIp() {
    return this.getBooleanAttribute('hash_source_ip');
  }
  public set hashSourceIp(value: boolean | cdktf.IResolvable) {
    this._hashSourceIp = value;
  }
  public resetHashSourceIp() {
    this._hashSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSourceIpInput() {
    return this._hashSourceIp;
  }

  // header_hash_options - computed: false, optional: true, required: false
  private _headerHashOptions = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptionsOutputReference(this, "header_hash_options");
  public get headerHashOptions() {
    return this._headerHashOptions;
  }
  public putHeaderHashOptions(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesHeaderHashOptions) {
    this._headerHashOptions.internalValue = value;
  }
  public resetHeaderHashOptions() {
    this._headerHashOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHashOptionsInput() {
    return this._headerHashOptions.internalValue;
  }

  // query_parameter_hash_options - computed: false, optional: true, required: false
  private _queryParameterHashOptions = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptionsOutputReference(this, "query_parameter_hash_options");
  public get queryParameterHashOptions() {
    return this._queryParameterHashOptions;
  }
  public putQueryParameterHashOptions(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesQueryParameterHashOptions) {
    this._queryParameterHashOptions.internalValue = value;
  }
  public resetQueryParameterHashOptions() {
    this._queryParameterHashOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterHashOptionsInput() {
    return this._queryParameterHashOptions.internalValue;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicy {
  /**
  * RequestHashPolicies contains a list of hash policies to apply when the 'RequestHash' load balancing strategy is chosen. If an element of the supplied list of hash policies is invalid, it will be ignored. If the list of hash policies is empty after validation, the load balancing strategy will fall back to the default 'RoundRobin'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_hash_policies DataK8SProjectcontourIoHttpProxyV1Manifest#request_hash_policies}
  */
  readonly requestHashPolicies?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable;
  /**
  * Strategy specifies the policy used to balance requests across the pool of backend pods. Valid policy names are 'Random', 'RoundRobin', 'WeightedLeastRequest', 'Cookie', and 'RequestHash'. If an unknown strategy name is specified or no policy is supplied, the default 'RoundRobin' policy is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#strategy DataK8SProjectcontourIoHttpProxyV1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_hash_policies: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesToTerraform, false)(struct!.requestHashPolicies),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_hash_policies: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesToHclTerraform, false)(struct!.requestHashPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesList",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHashPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHashPolicies = this._requestHashPolicies?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHashPolicies.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHashPolicies.internalValue = value.requestHashPolicies;
      this._strategy = value.strategy;
    }
  }

  // request_hash_policies - computed: false, optional: true, required: false
  private _requestHashPolicies = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPoliciesList(this, "request_hash_policies", false);
  public get requestHashPolicies() {
    return this._requestHashPolicies;
  }
  public putRequestHashPolicies(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyRequestHashPolicies[] | cdktf.IResolvable) {
    this._requestHashPolicies.internalValue = value;
  }
  public resetRequestHashPolicies() {
    this._requestHashPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHashPoliciesInput() {
    return this._requestHashPolicies.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewrite {
  /**
  * Value is the value to rewrite the Domain attribute to. For now this is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewriteToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewriteToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewrite {
  /**
  * Value is the value to rewrite the Path attribute to. For now this is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewriteToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewriteToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePolicies {
  /**
  * DomainRewrite enables rewriting the Set-Cookie Domain element. If not set, Domain will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#domain_rewrite DataK8SProjectcontourIoHttpProxyV1Manifest#domain_rewrite}
  */
  readonly domainRewrite?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewrite;
  /**
  * Name is the name of the cookie for which attributes will be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * PathRewrite enables rewriting the Set-Cookie Path element. If not set, Path will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#path_rewrite DataK8SProjectcontourIoHttpProxyV1Manifest#path_rewrite}
  */
  readonly pathRewrite?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewrite;
  /**
  * SameSite enables rewriting the Set-Cookie SameSite element. If not set, SameSite attribute will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#same_site DataK8SProjectcontourIoHttpProxyV1Manifest#same_site}
  */
  readonly sameSite?: string;
  /**
  * Secure enables rewriting the Set-Cookie Secure element. If not set, Secure attribute will not be rewritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#secure DataK8SProjectcontourIoHttpProxyV1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_rewrite: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewriteToTerraform(struct!.domainRewrite),
    name: cdktf.stringToTerraform(struct!.name),
    path_rewrite: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewriteToTerraform(struct!.pathRewrite),
    same_site: cdktf.stringToTerraform(struct!.sameSite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_rewrite: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewriteToHclTerraform(struct!.domainRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewrite",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_rewrite: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewriteToHclTerraform(struct!.pathRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewrite",
    },
    same_site: {
      value: cdktf.stringToHclTerraform(struct!.sameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainRewrite = this._domainRewrite?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pathRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRewrite = this._pathRewrite?.internalValue;
    }
    if (this._sameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSite = this._sameSite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainRewrite.internalValue = undefined;
      this._name = undefined;
      this._pathRewrite.internalValue = undefined;
      this._sameSite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainRewrite.internalValue = value.domainRewrite;
      this._name = value.name;
      this._pathRewrite.internalValue = value.pathRewrite;
      this._sameSite = value.sameSite;
      this._secure = value.secure;
    }
  }

  // domain_rewrite - computed: false, optional: true, required: false
  private _domainRewrite = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewriteOutputReference(this, "domain_rewrite");
  public get domainRewrite() {
    return this._domainRewrite;
  }
  public putDomainRewrite(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesDomainRewrite) {
    this._domainRewrite.internalValue = value;
  }
  public resetDomainRewrite() {
    this._domainRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRewriteInput() {
    return this._domainRewrite.internalValue;
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

  // path_rewrite - computed: false, optional: true, required: false
  private _pathRewrite = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewriteOutputReference(this, "path_rewrite");
  public get pathRewrite() {
    return this._pathRewrite;
  }
  public putPathRewrite(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesPathRewrite) {
    this._pathRewrite.internalValue = value;
  }
  public resetPathRewrite() {
    this._pathRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRewriteInput() {
    return this._pathRewrite.internalValue;
  }

  // same_site - computed: false, optional: true, required: false
  private _sameSite?: string; 
  public get sameSite() {
    return this.getStringAttribute('same_site');
  }
  public set sameSite(value: string) {
    this._sameSite = value;
  }
  public resetSameSite() {
    this._sameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteInput() {
    return this._sameSite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySet {
  /**
  * Name represents a key of a header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value represents the value of a header specified by a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySet | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicy {
  /**
  * Remove specifies a list of HTTP header names to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remove DataK8SProjectcontourIoHttpProxyV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#set DataK8SProjectcontourIoHttpProxyV1Manifest#set}
  */
  readonly set?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySet[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetToTerraform, false)(struct!.set),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
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
  private _set = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicySet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySet {
  /**
  * Name represents a key of a header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value represents the value of a header specified by a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySet | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicy {
  /**
  * Remove specifies a list of HTTP header names to remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remove DataK8SProjectcontourIoHttpProxyV1Manifest#remove}
  */
  readonly remove?: string[];
  /**
  * Set specifies a list of HTTP header values that will be set in the HTTP header. If the header does not exist it will be added, otherwise it will be overwritten with the new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#set DataK8SProjectcontourIoHttpProxyV1Manifest#set}
  */
  readonly set?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySet[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetToTerraform, false)(struct!.set),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remove = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remove = value.remove;
      this._set.internalValue = value.set;
    }
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
  private _set = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicySet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicy {
  /**
  * The speed of traffic increase over the slow start window. Defaults to 1.0, so that endpoint would get linearly increasing amount of traffic. When increasing the value for this parameter, the speed of traffic ramp-up increases non-linearly. The value of aggression parameter should be greater than 0.0. More info: https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/upstream/load_balancing/slow_start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#aggression DataK8SProjectcontourIoHttpProxyV1Manifest#aggression}
  */
  readonly aggression?: string;
  /**
  * The minimum or starting percentage of traffic to send to new endpoints. A non-zero value helps avoid a too small initial weight, which may cause endpoints in slow start mode to receive no traffic in the beginning of the slow start window. If not specified, the default is 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#min_weight_percent DataK8SProjectcontourIoHttpProxyV1Manifest#min_weight_percent}
  */
  readonly minWeightPercent?: number;
  /**
  * The duration of slow start window. Duration is expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#window DataK8SProjectcontourIoHttpProxyV1Manifest#window}
  */
  readonly window: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggression: cdktf.stringToTerraform(struct!.aggression),
    min_weight_percent: cdktf.numberToTerraform(struct!.minWeightPercent),
    window: cdktf.stringToTerraform(struct!.window),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggression: {
      value: cdktf.stringToHclTerraform(struct!.aggression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_weight_percent: {
      value: cdktf.numberToHclTerraform(struct!.minWeightPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktf.stringToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggression !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggression = this._aggression;
    }
    if (this._minWeightPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWeightPercent = this._minWeightPercent;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggression = undefined;
      this._minWeightPercent = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggression = value.aggression;
      this._minWeightPercent = value.minWeightPercent;
      this._window = value.window;
    }
  }

  // aggression - computed: false, optional: true, required: false
  private _aggression?: string; 
  public get aggression() {
    return this.getStringAttribute('aggression');
  }
  public set aggression(value: string) {
    this._aggression = value;
  }
  public resetAggression() {
    this._aggression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressionInput() {
    return this._aggression;
  }

  // min_weight_percent - computed: false, optional: true, required: false
  private _minWeightPercent?: number; 
  public get minWeightPercent() {
    return this.getNumberAttribute('min_weight_percent');
  }
  public set minWeightPercent(value: number) {
    this._minWeightPercent = value;
  }
  public resetMinWeightPercent() {
    this._minWeightPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWeightPercentInput() {
    return this._minWeightPercent;
  }

  // window - computed: false, optional: false, required: true
  private _window?: string; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidation {
  /**
  * Name or namespaced name of the Kubernetes secret used to validate the certificate presented by the backend. The secret must contain key named ca.crt. The name can be optionally prefixed with namespace 'namespace/name'. When cross-namespace reference is used, TLSCertificateDelegation resource must exist in the namespace to grant access to the secret. Max length should be the actual max possible length of a namespaced name (63 + 253 + 1 = 317)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ca_secret DataK8SProjectcontourIoHttpProxyV1Manifest#ca_secret}
  */
  readonly caSecret: string;
  /**
  * Key which is expected to be present in the 'subjectAltName' of the presented certificate. Deprecated: migrate to using the plural field subjectNames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#subject_name DataK8SProjectcontourIoHttpProxyV1Manifest#subject_name}
  */
  readonly subjectName: string;
  /**
  * List of keys, of which at least one is expected to be present in the 'subjectAltName of the presented certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#subject_names DataK8SProjectcontourIoHttpProxyV1Manifest#subject_names}
  */
  readonly subjectNames?: string[];
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidationToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secret: cdktf.stringToTerraform(struct!.caSecret),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
    subject_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectNames),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidationToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secret: {
      value: cdktf.stringToHclTerraform(struct!.caSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecret = this._caSecret;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    if (this._subjectNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectNames = this._subjectNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecret = undefined;
      this._subjectName = undefined;
      this._subjectNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecret = value.caSecret;
      this._subjectName = value.subjectName;
      this._subjectNames = value.subjectNames;
    }
  }

  // ca_secret - computed: false, optional: false, required: true
  private _caSecret?: string; 
  public get caSecret() {
    return this.getStringAttribute('ca_secret');
  }
  public set caSecret(value: string) {
    this._caSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretInput() {
    return this._caSecret;
  }

  // subject_name - computed: false, optional: false, required: true
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }

  // subject_names - computed: false, optional: true, required: false
  private _subjectNames?: string[]; 
  public get subjectNames() {
    return this.getListAttribute('subject_names');
  }
  public set subjectNames(value: string[]) {
    this._subjectNames = value;
  }
  public resetSubjectNames() {
    this._subjectNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNamesInput() {
    return this._subjectNames;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServices {
  /**
  * The policies for rewriting Set-Cookie header attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cookie_rewrite_policies DataK8SProjectcontourIoHttpProxyV1Manifest#cookie_rewrite_policies}
  */
  readonly cookieRewritePolicies?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePolicies[] | cdktf.IResolvable;
  /**
  * HealthPort is the port for this service healthcheck. If not specified, Port is used for service healthchecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#health_port DataK8SProjectcontourIoHttpProxyV1Manifest#health_port}
  */
  readonly healthPort?: number;
  /**
  * If Mirror is true the Service will receive a read only mirror of the traffic for this route. If Mirror is true, then fractional mirroring can be enabled by optionally setting the Weight field. Legal values for Weight are 1-100. Omitting the Weight field will result in 100% mirroring. NOTE: Setting Weight explicitly to 0 will unexpectedly result in 100% traffic mirroring. This occurs since we cannot distinguish omitted fields from those explicitly set to their default values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#mirror DataK8SProjectcontourIoHttpProxyV1Manifest#mirror}
  */
  readonly mirror?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of Kubernetes service to proxy traffic. Names defined here will be used to look up corresponding endpoints which contain the ips to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Port (defined as Integer) to proxy traffic to since a service can have multiple defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#port DataK8SProjectcontourIoHttpProxyV1Manifest#port}
  */
  readonly port: number;
  /**
  * Protocol may be used to specify (or override) the protocol used to reach this Service. Values may be tls, h2, h2c. If omitted, protocol-selection falls back on Service annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#protocol DataK8SProjectcontourIoHttpProxyV1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * The policy for managing request headers during proxying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_headers_policy DataK8SProjectcontourIoHttpProxyV1Manifest#request_headers_policy}
  */
  readonly requestHeadersPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicy;
  /**
  * The policy for managing response headers during proxying. Rewriting the 'Host' header is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response_headers_policy DataK8SProjectcontourIoHttpProxyV1Manifest#response_headers_policy}
  */
  readonly responseHeadersPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicy;
  /**
  * Slow start will gradually increase amount of traffic to a newly added endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#slow_start_policy DataK8SProjectcontourIoHttpProxyV1Manifest#slow_start_policy}
  */
  readonly slowStartPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicy;
  /**
  * UpstreamValidation defines how to verify the backend service's certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#validation DataK8SProjectcontourIoHttpProxyV1Manifest#validation}
  */
  readonly validation?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidation;
  /**
  * Weight defines percentage of traffic to balance traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#weight DataK8SProjectcontourIoHttpProxyV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_rewrite_policies: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesToTerraform, false)(struct!.cookieRewritePolicies),
    health_port: cdktf.numberToTerraform(struct!.healthPort),
    mirror: cdktf.booleanToTerraform(struct!.mirror),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    request_headers_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicyToTerraform(struct!.requestHeadersPolicy),
    response_headers_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicyToTerraform(struct!.responseHeadersPolicy),
    slow_start_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicyToTerraform(struct!.slowStartPolicy),
    validation: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidationToTerraform(struct!.validation),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_rewrite_policies: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesToHclTerraform, false)(struct!.cookieRewritePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesList",
    },
    health_port: {
      value: cdktf.numberToHclTerraform(struct!.healthPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mirror: {
      value: cdktf.booleanToHclTerraform(struct!.mirror),
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
    request_headers_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicyToHclTerraform(struct!.requestHeadersPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicy",
    },
    response_headers_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicyToHclTerraform(struct!.responseHeadersPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicy",
    },
    slow_start_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicyToHclTerraform(struct!.slowStartPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicy",
    },
    validation: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidation",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieRewritePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieRewritePolicies = this._cookieRewritePolicies?.internalValue;
    }
    if (this._healthPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPort = this._healthPort;
    }
    if (this._mirror !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requestHeadersPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersPolicy = this._requestHeadersPolicy?.internalValue;
    }
    if (this._responseHeadersPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersPolicy = this._responseHeadersPolicy?.internalValue;
    }
    if (this._slowStartPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStartPolicy = this._slowStartPolicy?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieRewritePolicies.internalValue = undefined;
      this._healthPort = undefined;
      this._mirror = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._requestHeadersPolicy.internalValue = undefined;
      this._responseHeadersPolicy.internalValue = undefined;
      this._slowStartPolicy.internalValue = undefined;
      this._validation.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieRewritePolicies.internalValue = value.cookieRewritePolicies;
      this._healthPort = value.healthPort;
      this._mirror = value.mirror;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
      this._requestHeadersPolicy.internalValue = value.requestHeadersPolicy;
      this._responseHeadersPolicy.internalValue = value.responseHeadersPolicy;
      this._slowStartPolicy.internalValue = value.slowStartPolicy;
      this._validation.internalValue = value.validation;
      this._weight = value.weight;
    }
  }

  // cookie_rewrite_policies - computed: false, optional: true, required: false
  private _cookieRewritePolicies = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePoliciesList(this, "cookie_rewrite_policies", false);
  public get cookieRewritePolicies() {
    return this._cookieRewritePolicies;
  }
  public putCookieRewritePolicies(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesCookieRewritePolicies[] | cdktf.IResolvable) {
    this._cookieRewritePolicies.internalValue = value;
  }
  public resetCookieRewritePolicies() {
    this._cookieRewritePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieRewritePoliciesInput() {
    return this._cookieRewritePolicies.internalValue;
  }

  // health_port - computed: false, optional: true, required: false
  private _healthPort?: number; 
  public get healthPort() {
    return this.getNumberAttribute('health_port');
  }
  public set healthPort(value: number) {
    this._healthPort = value;
  }
  public resetHealthPort() {
    this._healthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPortInput() {
    return this._healthPort;
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

  // request_headers_policy - computed: false, optional: true, required: false
  private _requestHeadersPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicyOutputReference(this, "request_headers_policy");
  public get requestHeadersPolicy() {
    return this._requestHeadersPolicy;
  }
  public putRequestHeadersPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesRequestHeadersPolicy) {
    this._requestHeadersPolicy.internalValue = value;
  }
  public resetRequestHeadersPolicy() {
    this._requestHeadersPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersPolicyInput() {
    return this._requestHeadersPolicy.internalValue;
  }

  // response_headers_policy - computed: false, optional: true, required: false
  private _responseHeadersPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicyOutputReference(this, "response_headers_policy");
  public get responseHeadersPolicy() {
    return this._responseHeadersPolicy;
  }
  public putResponseHeadersPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesResponseHeadersPolicy) {
    this._responseHeadersPolicy.internalValue = value;
  }
  public resetResponseHeadersPolicy() {
    this._responseHeadersPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersPolicyInput() {
    return this._responseHeadersPolicy.internalValue;
  }

  // slow_start_policy - computed: false, optional: true, required: false
  private _slowStartPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicyOutputReference(this, "slow_start_policy");
  public get slowStartPolicy() {
    return this._slowStartPolicy;
  }
  public putSlowStartPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesSlowStartPolicy) {
    this._slowStartPolicy.internalValue = value;
  }
  public resetSlowStartPolicy() {
    this._slowStartPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartPolicyInput() {
    return this._slowStartPolicy.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxy {
  /**
  * The health check policy for this tcp proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#health_check_policy DataK8SProjectcontourIoHttpProxyV1Manifest#health_check_policy}
  */
  readonly healthCheckPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicy;
  /**
  * Include specifies that this tcpproxy should be delegated to another HTTPProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#include DataK8SProjectcontourIoHttpProxyV1Manifest#include}
  */
  readonly include?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyInclude;
  /**
  * IncludesDeprecated allow for specific routing configuration to be appended to another HTTPProxy in another namespace. Exists due to a mistake when developing HTTPProxy and the field was marked plural when it should have been singular. This field should stay to not break backwards compatibility to v1 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#includes DataK8SProjectcontourIoHttpProxyV1Manifest#includes}
  */
  readonly includes?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludes;
  /**
  * The load balancing policy for the backend services. Note that the 'Cookie' and 'RequestHash' load balancing strategies cannot be used here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#load_balancer_policy DataK8SProjectcontourIoHttpProxyV1Manifest#load_balancer_policy}
  */
  readonly loadBalancerPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicy;
  /**
  * Services are the services to proxy traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#services DataK8SProjectcontourIoHttpProxyV1Manifest#services}
  */
  readonly services?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServices[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicyToTerraform(struct!.healthCheckPolicy),
    include: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludeToTerraform(struct!.include),
    includes: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludesToTerraform(struct!.includes),
    load_balancer_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyToTerraform(struct!.loadBalancerPolicy),
    services: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesToTerraform, false)(struct!.services),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicyToHclTerraform(struct!.healthCheckPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicy",
    },
    include: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyInclude",
    },
    includes: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludesToHclTerraform(struct!.includes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludes",
    },
    load_balancer_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyToHclTerraform(struct!.loadBalancerPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicy",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPolicy = this._healthCheckPolicy?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    if (this._includes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes?.internalValue;
    }
    if (this._loadBalancerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerPolicy = this._loadBalancerPolicy?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheckPolicy.internalValue = undefined;
      this._include.internalValue = undefined;
      this._includes.internalValue = undefined;
      this._loadBalancerPolicy.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheckPolicy.internalValue = value.healthCheckPolicy;
      this._include.internalValue = value.include;
      this._includes.internalValue = value.includes;
      this._loadBalancerPolicy.internalValue = value.loadBalancerPolicy;
      this._services.internalValue = value.services;
    }
  }

  // health_check_policy - computed: false, optional: true, required: false
  private _healthCheckPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicyOutputReference(this, "health_check_policy");
  public get healthCheckPolicy() {
    return this._healthCheckPolicy;
  }
  public putHealthCheckPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyHealthCheckPolicy) {
    this._healthCheckPolicy.internalValue = value;
  }
  public resetHealthCheckPolicy() {
    this._healthCheckPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPolicyInput() {
    return this._healthCheckPolicy.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludesOutputReference(this, "includes");
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyIncludes) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
  }

  // load_balancer_policy - computed: false, optional: true, required: false
  private _loadBalancerPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicyOutputReference(this, "load_balancer_policy");
  public get loadBalancerPolicy() {
    return this._loadBalancerPolicy;
  }
  public putLoadBalancerPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyLoadBalancerPolicy) {
    this._loadBalancerPolicy.internalValue = value;
  }
  public resetLoadBalancerPolicy() {
    this._loadBalancerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPolicyInput() {
    return this._loadBalancerPolicy.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicy {
  /**
  * Context is a set of key/value pairs that are sent to the authentication server in the check request. If a context is provided at an enclosing scope, the entries are merged such that the inner scope overrides matching keys from the outer scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#context DataK8SProjectcontourIoHttpProxyV1Manifest#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * When true, this field disables client request authentication for the scope of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#disabled DataK8SProjectcontourIoHttpProxyV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.context),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.context),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._disabled = value.disabled;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string }; 
  public get context() {
    return this.getStringMapAttribute('context');
  }
  public set context(value: { [key: string]: string }) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRef {
  /**
  * API version of the referent. If this field is not specified, the default 'projectcontour.io/v1alpha1' will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#api_version DataK8SProjectcontourIoHttpProxyV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. If this field is not specifies, the namespace of the resource that targets the referent will be used. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#namespace DataK8SProjectcontourIoHttpProxyV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRefToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRefToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRef | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBody {
  /**
  * If AllowPartialMessage is true, then Envoy will buffer the body until MaxRequestBytes are reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#allow_partial_message DataK8SProjectcontourIoHttpProxyV1Manifest#allow_partial_message}
  */
  readonly allowPartialMessage?: boolean | cdktf.IResolvable;
  /**
  * MaxRequestBytes sets the maximum size of message body ExtAuthz filter will hold in-memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#max_request_bytes DataK8SProjectcontourIoHttpProxyV1Manifest#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * If PackAsBytes is true, the body sent to Authorization Server is in raw bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#pack_as_bytes DataK8SProjectcontourIoHttpProxyV1Manifest#pack_as_bytes}
  */
  readonly packAsBytes?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBodyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_partial_message: cdktf.booleanToTerraform(struct!.allowPartialMessage),
    max_request_bytes: cdktf.numberToTerraform(struct!.maxRequestBytes),
    pack_as_bytes: cdktf.booleanToTerraform(struct!.packAsBytes),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBodyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_partial_message: {
      value: cdktf.booleanToHclTerraform(struct!.allowPartialMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pack_as_bytes: {
      value: cdktf.booleanToHclTerraform(struct!.packAsBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPartialMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPartialMessage = this._allowPartialMessage;
    }
    if (this._maxRequestBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBytes = this._maxRequestBytes;
    }
    if (this._packAsBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packAsBytes = this._packAsBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPartialMessage = undefined;
      this._maxRequestBytes = undefined;
      this._packAsBytes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPartialMessage = value.allowPartialMessage;
      this._maxRequestBytes = value.maxRequestBytes;
      this._packAsBytes = value.packAsBytes;
    }
  }

  // allow_partial_message - computed: false, optional: true, required: false
  private _allowPartialMessage?: boolean | cdktf.IResolvable; 
  public get allowPartialMessage() {
    return this.getBooleanAttribute('allow_partial_message');
  }
  public set allowPartialMessage(value: boolean | cdktf.IResolvable) {
    this._allowPartialMessage = value;
  }
  public resetAllowPartialMessage() {
    this._allowPartialMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPartialMessageInput() {
    return this._allowPartialMessage;
  }

  // max_request_bytes - computed: false, optional: true, required: false
  private _maxRequestBytes?: number; 
  public get maxRequestBytes() {
    return this.getNumberAttribute('max_request_bytes');
  }
  public set maxRequestBytes(value: number) {
    this._maxRequestBytes = value;
  }
  public resetMaxRequestBytes() {
    this._maxRequestBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBytesInput() {
    return this._maxRequestBytes;
  }

  // pack_as_bytes - computed: false, optional: true, required: false
  private _packAsBytes?: boolean | cdktf.IResolvable; 
  public get packAsBytes() {
    return this.getBooleanAttribute('pack_as_bytes');
  }
  public set packAsBytes(value: boolean | cdktf.IResolvable) {
    this._packAsBytes = value;
  }
  public resetPackAsBytes() {
    this._packAsBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packAsBytesInput() {
    return this._packAsBytes;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorization {
  /**
  * AuthPolicy sets a default authorization policy for client requests. This policy will be used unless overridden by individual routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#auth_policy DataK8SProjectcontourIoHttpProxyV1Manifest#auth_policy}
  */
  readonly authPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicy;
  /**
  * ExtensionServiceRef specifies the extension resource that will authorize client requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#extension_ref DataK8SProjectcontourIoHttpProxyV1Manifest#extension_ref}
  */
  readonly extensionRef?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRef;
  /**
  * If FailOpen is true, the client request is forwarded to the upstream service even if the authorization server fails to respond. This field should not be set in most cases. It is intended for use only while migrating applications from internal authorization to Contour external authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#fail_open DataK8SProjectcontourIoHttpProxyV1Manifest#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * ResponseTimeout configures maximum time to wait for a check response from the authorization server. Timeout durations are expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'. The string 'infinity' is also a valid input and specifies no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response_timeout DataK8SProjectcontourIoHttpProxyV1Manifest#response_timeout}
  */
  readonly responseTimeout?: string;
  /**
  * WithRequestBody specifies configuration for sending the client request's body to authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#with_request_body DataK8SProjectcontourIoHttpProxyV1Manifest#with_request_body}
  */
  readonly withRequestBody?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBody;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicyToTerraform(struct!.authPolicy),
    extension_ref: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRefToTerraform(struct!.extensionRef),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    response_timeout: cdktf.stringToTerraform(struct!.responseTimeout),
    with_request_body: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBodyToTerraform(struct!.withRequestBody),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicyToHclTerraform(struct!.authPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicy",
    },
    extension_ref: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRefToHclTerraform(struct!.extensionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRef",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_timeout: {
      value: cdktf.stringToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_request_body: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBodyToHclTerraform(struct!.withRequestBody),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBody",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPolicy = this._authPolicy?.internalValue;
    }
    if (this._extensionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionRef = this._extensionRef?.internalValue;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    if (this._withRequestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withRequestBody = this._withRequestBody?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authPolicy.internalValue = undefined;
      this._extensionRef.internalValue = undefined;
      this._failOpen = undefined;
      this._responseTimeout = undefined;
      this._withRequestBody.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authPolicy.internalValue = value.authPolicy;
      this._extensionRef.internalValue = value.extensionRef;
      this._failOpen = value.failOpen;
      this._responseTimeout = value.responseTimeout;
      this._withRequestBody.internalValue = value.withRequestBody;
    }
  }

  // auth_policy - computed: false, optional: true, required: false
  private _authPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicyOutputReference(this, "auth_policy");
  public get authPolicy() {
    return this._authPolicy;
  }
  public putAuthPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationAuthPolicy) {
    this._authPolicy.internalValue = value;
  }
  public resetAuthPolicy() {
    this._authPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPolicyInput() {
    return this._authPolicy.internalValue;
  }

  // extension_ref - computed: false, optional: true, required: false
  private _extensionRef = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRefOutputReference(this, "extension_ref");
  public get extensionRef() {
    return this._extensionRef;
  }
  public putExtensionRef(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationExtensionRef) {
    this._extensionRef.internalValue = value;
  }
  public resetExtensionRef() {
    this._extensionRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionRefInput() {
    return this._extensionRef.internalValue;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: string; 
  public get responseTimeout() {
    return this.getStringAttribute('response_timeout');
  }
  public set responseTimeout(value: string) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // with_request_body - computed: false, optional: true, required: false
  private _withRequestBody = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBodyOutputReference(this, "with_request_body");
  public get withRequestBody() {
    return this._withRequestBody;
  }
  public putWithRequestBody(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationWithRequestBody) {
    this._withRequestBody.internalValue = value;
  }
  public resetWithRequestBody() {
    this._withRequestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withRequestBodyInput() {
    return this._withRequestBody.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicy {
  /**
  * Specifies whether the resource allows credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#allow_credentials DataK8SProjectcontourIoHttpProxyV1Manifest#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * AllowHeaders specifies the content for the *access-control-allow-headers* header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#allow_headers DataK8SProjectcontourIoHttpProxyV1Manifest#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * AllowMethods specifies the content for the *access-control-allow-methods* header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#allow_methods DataK8SProjectcontourIoHttpProxyV1Manifest#allow_methods}
  */
  readonly allowMethods: string[];
  /**
  * AllowOrigin specifies the origins that will be allowed to do CORS requests. Allowed values include '*' which signifies any origin is allowed, an exact origin of the form 'scheme://host[:port]' (where port is optional), or a valid regex pattern. Note that regex patterns are validated and a simple 'glob' pattern (e.g. *.foo.com) will be rejected or produce unexpected matches when applied as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#allow_origin DataK8SProjectcontourIoHttpProxyV1Manifest#allow_origin}
  */
  readonly allowOrigin: string[];
  /**
  * AllowPrivateNetwork specifies whether to allow private network requests. See https://developer.chrome.com/blog/private-network-access-preflight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#allow_private_network DataK8SProjectcontourIoHttpProxyV1Manifest#allow_private_network}
  */
  readonly allowPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * ExposeHeaders Specifies the content for the *access-control-expose-headers* header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#expose_headers DataK8SProjectcontourIoHttpProxyV1Manifest#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * MaxAge indicates for how long the results of a preflight request can be cached. MaxAge durations are expressed in the Go [Duration format](https://godoc.org/time#ParseDuration). Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'. Only positive values are allowed while 0 disables the cache requiring a preflight OPTIONS check for all cross-origin requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#max_age DataK8SProjectcontourIoHttpProxyV1Manifest#max_age}
  */
  readonly maxAge?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    allow_private_network: cdktf.booleanToTerraform(struct!.allowPrivateNetwork),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicy | cdktf.IResolvable): any {
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
    allow_private_network: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivateNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicy | cdktf.IResolvable | undefined {
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
    if (this._allowPrivateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivateNetwork = this._allowPrivateNetwork;
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowPrivateNetwork = undefined;
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
      this._allowPrivateNetwork = value.allowPrivateNetwork;
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

  // allow_methods - computed: false, optional: false, required: true
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: false, required: true
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // allow_private_network - computed: false, optional: true, required: false
  private _allowPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get allowPrivateNetwork() {
    return this.getBooleanAttribute('allow_private_network');
  }
  public set allowPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._allowPrivateNetwork = value;
  }
  public resetAllowPrivateNetwork() {
    this._allowPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivateNetworkInput() {
    return this._allowPrivateNetwork;
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicy {
  /**
  * CIDR is a CIDR block of ipv4 or ipv6 addresses to filter on. This can also be a bare IP address (without a mask) to filter on exactly one address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cidr DataK8SProjectcontourIoHttpProxyV1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Source indicates how to determine the ip address to filter on, and can be one of two values: - 'Remote' filters on the ip address of the client, accounting for PROXY and X-Forwarded-For as needed. - 'Peer' filters on the ip of the network request, ignoring PROXY and X-Forwarded-For.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#source DataK8SProjectcontourIoHttpProxyV1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._source = value.source;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicy {
  /**
  * CIDR is a CIDR block of ipv4 or ipv6 addresses to filter on. This can also be a bare IP address (without a mask) to filter on exactly one address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cidr DataK8SProjectcontourIoHttpProxyV1Manifest#cidr}
  */
  readonly cidr: string;
  /**
  * Source indicates how to determine the ip address to filter on, and can be one of two values: - 'Remote' filters on the ip address of the client, accounting for PROXY and X-Forwarded-For as needed. - 'Peer' filters on the ip of the network request, ignoring PROXY and X-Forwarded-For.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#source DataK8SProjectcontourIoHttpProxyV1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._source = value.source;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidation {
  /**
  * Name or namespaced name of the Kubernetes secret used to validate the certificate presented by the backend. The secret must contain key named ca.crt. The name can be optionally prefixed with namespace 'namespace/name'. When cross-namespace reference is used, TLSCertificateDelegation resource must exist in the namespace to grant access to the secret. Max length should be the actual max possible length of a namespaced name (63 + 253 + 1 = 317)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ca_secret DataK8SProjectcontourIoHttpProxyV1Manifest#ca_secret}
  */
  readonly caSecret: string;
  /**
  * Key which is expected to be present in the 'subjectAltName' of the presented certificate. Deprecated: migrate to using the plural field subjectNames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#subject_name DataK8SProjectcontourIoHttpProxyV1Manifest#subject_name}
  */
  readonly subjectName: string;
  /**
  * List of keys, of which at least one is expected to be present in the 'subjectAltName of the presented certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#subject_names DataK8SProjectcontourIoHttpProxyV1Manifest#subject_names}
  */
  readonly subjectNames?: string[];
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidationToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secret: cdktf.stringToTerraform(struct!.caSecret),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
    subject_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectNames),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidationToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secret: {
      value: cdktf.stringToHclTerraform(struct!.caSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecret = this._caSecret;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    if (this._subjectNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectNames = this._subjectNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecret = undefined;
      this._subjectName = undefined;
      this._subjectNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecret = value.caSecret;
      this._subjectName = value.subjectName;
      this._subjectNames = value.subjectNames;
    }
  }

  // ca_secret - computed: false, optional: false, required: true
  private _caSecret?: string; 
  public get caSecret() {
    return this.getStringAttribute('ca_secret');
  }
  public set caSecret(value: string) {
    this._caSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretInput() {
    return this._caSecret;
  }

  // subject_name - computed: false, optional: false, required: true
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }

  // subject_names - computed: false, optional: true, required: false
  private _subjectNames?: string[]; 
  public get subjectNames() {
    return this.getListAttribute('subject_names');
  }
  public set subjectNames(value: string[]) {
    this._subjectNames = value;
  }
  public resetSubjectNames() {
    this._subjectNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNamesInput() {
    return this._subjectNames;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwks {
  /**
  * How long to cache the JWKS locally. If not specified, Envoy's default of 5m applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cache_duration DataK8SProjectcontourIoHttpProxyV1Manifest#cache_duration}
  */
  readonly cacheDuration?: string;
  /**
  * The DNS IP address resolution policy for the JWKS URI. When configured as 'v4', the DNS resolver will only perform a lookup for addresses in the IPv4 family. If 'v6' is configured, the DNS resolver will only perform a lookup for addresses in the IPv6 family. If 'all' is configured, the DNS resolver will perform a lookup for addresses in both the IPv4 and IPv6 family. If 'auto' is configured, the DNS resolver will first perform a lookup for addresses in the IPv6 family and fallback to a lookup for addresses in the IPv4 family. If not specified, the Contour-wide setting defined in the config file or ContourConfiguration applies (defaults to 'auto'). See https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/cluster/v3/cluster.proto.html#envoy-v3-api-enum-config-cluster-v3-cluster-dnslookupfamily for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#dns_lookup_family DataK8SProjectcontourIoHttpProxyV1Manifest#dns_lookup_family}
  */
  readonly dnsLookupFamily?: string;
  /**
  * How long to wait for a response from the URI. If not specified, a default of 1s applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#timeout DataK8SProjectcontourIoHttpProxyV1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * The URI for the JWKS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#uri DataK8SProjectcontourIoHttpProxyV1Manifest#uri}
  */
  readonly uri: string;
  /**
  * UpstreamValidation defines how to verify the JWKS's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#validation DataK8SProjectcontourIoHttpProxyV1Manifest#validation}
  */
  readonly validation?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidation;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_duration: cdktf.stringToTerraform(struct!.cacheDuration),
    dns_lookup_family: cdktf.stringToTerraform(struct!.dnsLookupFamily),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    uri: cdktf.stringToTerraform(struct!.uri),
    validation: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidationToTerraform(struct!.validation),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_duration: {
      value: cdktf.stringToHclTerraform(struct!.cacheDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_lookup_family: {
      value: cdktf.stringToHclTerraform(struct!.dnsLookupFamily),
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDuration = this._cacheDuration;
    }
    if (this._dnsLookupFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsLookupFamily = this._dnsLookupFamily;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheDuration = undefined;
      this._dnsLookupFamily = undefined;
      this._timeout = undefined;
      this._uri = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheDuration = value.cacheDuration;
      this._dnsLookupFamily = value.dnsLookupFamily;
      this._timeout = value.timeout;
      this._uri = value.uri;
      this._validation.internalValue = value.validation;
    }
  }

  // cache_duration - computed: false, optional: true, required: false
  private _cacheDuration?: string; 
  public get cacheDuration() {
    return this.getStringAttribute('cache_duration');
  }
  public set cacheDuration(value: string) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // dns_lookup_family - computed: false, optional: true, required: false
  private _dnsLookupFamily?: string; 
  public get dnsLookupFamily() {
    return this.getStringAttribute('dns_lookup_family');
  }
  public set dnsLookupFamily(value: string) {
    this._dnsLookupFamily = value;
  }
  public resetDnsLookupFamily() {
    this._dnsLookupFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLookupFamilyInput() {
    return this._dnsLookupFamily;
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProviders {
  /**
  * Audiences that JWTs are allowed to have in the 'aud' field. If not provided, JWT audiences are not checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#audiences DataK8SProjectcontourIoHttpProxyV1Manifest#audiences}
  */
  readonly audiences?: string[];
  /**
  * Whether the provider should apply to all routes in the HTTPProxy/its includes by default. At most one provider can be marked as the default. If no provider is marked as the default, individual routes must explicitly identify the provider they require.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#default DataK8SProjectcontourIoHttpProxyV1Manifest#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Whether the JWT should be forwarded to the backend service after successful verification. By default, the JWT is not forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#forward_jwt DataK8SProjectcontourIoHttpProxyV1Manifest#forward_jwt}
  */
  readonly forwardJwt?: boolean | cdktf.IResolvable;
  /**
  * Issuer that JWTs are required to have in the 'iss' field. If not provided, JWT issuers are not checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#issuer DataK8SProjectcontourIoHttpProxyV1Manifest#issuer}
  */
  readonly issuer?: string;
  /**
  * Unique name for the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Remote JWKS to use for verifying JWT signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remote_jwks DataK8SProjectcontourIoHttpProxyV1Manifest#remote_jwks}
  */
  readonly remoteJwks: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwks;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    default: cdktf.booleanToTerraform(struct!.default),
    forward_jwt: cdktf.booleanToTerraform(struct!.forwardJwt),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    name: cdktf.stringToTerraform(struct!.name),
    remote_jwks: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksToTerraform(struct!.remoteJwks),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_jwt: {
      value: cdktf.booleanToHclTerraform(struct!.forwardJwt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
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
    remote_jwks: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksToHclTerraform(struct!.remoteJwks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwks",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._forwardJwt !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardJwt = this._forwardJwt;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remoteJwks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteJwks = this._remoteJwks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._default = undefined;
      this._forwardJwt = undefined;
      this._issuer = undefined;
      this._name = undefined;
      this._remoteJwks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._default = value.default;
      this._forwardJwt = value.forwardJwt;
      this._issuer = value.issuer;
      this._name = value.name;
      this._remoteJwks.internalValue = value.remoteJwks;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // forward_jwt - computed: false, optional: true, required: false
  private _forwardJwt?: boolean | cdktf.IResolvable; 
  public get forwardJwt() {
    return this.getBooleanAttribute('forward_jwt');
  }
  public set forwardJwt(value: boolean | cdktf.IResolvable) {
    this._forwardJwt = value;
  }
  public resetForwardJwt() {
    this._forwardJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardJwtInput() {
    return this._forwardJwt;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // remote_jwks - computed: false, optional: false, required: true
  private _remoteJwks = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwksOutputReference(this, "remote_jwks");
  public get remoteJwks() {
    return this._remoteJwks;
  }
  public putRemoteJwks(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersRemoteJwks) {
    this._remoteJwks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteJwksInput() {
    return this._remoteJwks.internalValue;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKey {
  /**
  * Key defines the key of the descriptor entry. If not set, the key is set to 'generic_key'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#key DataK8SProjectcontourIoHttpProxyV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Value defines the value of the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKeyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKeyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKey | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKey | cdktf.IResolvable | undefined) {
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeader {
  /**
  * DescriptorKey defines the key to use on the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#descriptor_key DataK8SProjectcontourIoHttpProxyV1Manifest#descriptor_key}
  */
  readonly descriptorKey?: string;
  /**
  * HeaderName defines the name of the header to look for on the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#header_name DataK8SProjectcontourIoHttpProxyV1Manifest#header_name}
  */
  readonly headerName?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descriptor_key: cdktf.stringToTerraform(struct!.descriptorKey),
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descriptor_key: {
      value: cdktf.stringToHclTerraform(struct!.descriptorKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptorKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptorKey = this._descriptorKey;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptorKey = undefined;
      this._headerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptorKey = value.descriptorKey;
      this._headerName = value.headerName;
    }
  }

  // descriptor_key - computed: false, optional: true, required: false
  private _descriptorKey?: string; 
  public get descriptorKey() {
    return this.getStringAttribute('descriptor_key');
  }
  public set descriptorKey(value: string) {
    this._descriptorKey = value;
  }
  public resetDescriptorKey() {
    this._descriptorKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorKeyInput() {
    return this._descriptorKey;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders {
  /**
  * Contains specifies a substring that must be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#contains DataK8SProjectcontourIoHttpProxyV1Manifest#contains}
  */
  readonly contains?: string;
  /**
  * Exact specifies a string that the header value must be equal to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#exact DataK8SProjectcontourIoHttpProxyV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * IgnoreCase specifies that string matching should be case insensitive. Note that this has no effect on the Regex parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ignore_case DataK8SProjectcontourIoHttpProxyV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the header to match against. Name is required. Header names are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * NotContains specifies a substring that must not be present in the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notcontains DataK8SProjectcontourIoHttpProxyV1Manifest#notcontains}
  */
  readonly notcontains?: string;
  /**
  * NoExact specifies a string that the header value must not be equal to. The condition is true if the header has any other value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notexact DataK8SProjectcontourIoHttpProxyV1Manifest#notexact}
  */
  readonly notexact?: string;
  /**
  * NotPresent specifies that condition is true when the named header is not present. Note that setting NotPresent to false does not make the condition true if the named header is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#notpresent DataK8SProjectcontourIoHttpProxyV1Manifest#notpresent}
  */
  readonly notpresent?: boolean | cdktf.IResolvable;
  /**
  * Present specifies that condition is true when the named header is present, regardless of its value. Note that setting Present to false does not make the condition true if the named header is absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#present DataK8SProjectcontourIoHttpProxyV1Manifest#present}
  */
  readonly present?: boolean | cdktf.IResolvable;
  /**
  * Regex specifies a regular expression pattern that must match the header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#regex DataK8SProjectcontourIoHttpProxyV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * TreatMissingAsEmpty specifies if the header match rule specified header does not exist, this header value will be treated as empty. Defaults to false. Unlike the underlying Envoy implementation this is **only** supported for negative matches (e.g. NotContains, NotExact).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#treat_missing_as_empty DataK8SProjectcontourIoHttpProxyV1Manifest#treat_missing_as_empty}
  */
  readonly treatMissingAsEmpty?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    name: cdktf.stringToTerraform(struct!.name),
    notcontains: cdktf.stringToTerraform(struct!.notcontains),
    notexact: cdktf.stringToTerraform(struct!.notexact),
    notpresent: cdktf.booleanToTerraform(struct!.notpresent),
    present: cdktf.booleanToTerraform(struct!.present),
    regex: cdktf.stringToTerraform(struct!.regex),
    treat_missing_as_empty: cdktf.booleanToTerraform(struct!.treatMissingAsEmpty),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
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
    notcontains: {
      value: cdktf.stringToHclTerraform(struct!.notcontains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notexact: {
      value: cdktf.stringToHclTerraform(struct!.notexact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notpresent: {
      value: cdktf.booleanToHclTerraform(struct!.notpresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    present: {
      value: cdktf.booleanToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    treat_missing_as_empty: {
      value: cdktf.booleanToHclTerraform(struct!.treatMissingAsEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notcontains !== undefined) {
      hasAnyValues = true;
      internalValueResult.notcontains = this._notcontains;
    }
    if (this._notexact !== undefined) {
      hasAnyValues = true;
      internalValueResult.notexact = this._notexact;
    }
    if (this._notpresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.notpresent = this._notpresent;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._treatMissingAsEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatMissingAsEmpty = this._treatMissingAsEmpty;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._name = undefined;
      this._notcontains = undefined;
      this._notexact = undefined;
      this._notpresent = undefined;
      this._present = undefined;
      this._regex = undefined;
      this._treatMissingAsEmpty = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._exact = value.exact;
      this._ignoreCase = value.ignoreCase;
      this._name = value.name;
      this._notcontains = value.notcontains;
      this._notexact = value.notexact;
      this._notpresent = value.notpresent;
      this._present = value.present;
      this._regex = value.regex;
      this._treatMissingAsEmpty = value.treatMissingAsEmpty;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
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

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
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

  // notcontains - computed: false, optional: true, required: false
  private _notcontains?: string; 
  public get notcontains() {
    return this.getStringAttribute('notcontains');
  }
  public set notcontains(value: string) {
    this._notcontains = value;
  }
  public resetNotcontains() {
    this._notcontains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notcontainsInput() {
    return this._notcontains;
  }

  // notexact - computed: false, optional: true, required: false
  private _notexact?: string; 
  public get notexact() {
    return this.getStringAttribute('notexact');
  }
  public set notexact(value: string) {
    this._notexact = value;
  }
  public resetNotexact() {
    this._notexact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notexactInput() {
    return this._notexact;
  }

  // notpresent - computed: false, optional: true, required: false
  private _notpresent?: boolean | cdktf.IResolvable; 
  public get notpresent() {
    return this.getBooleanAttribute('notpresent');
  }
  public set notpresent(value: boolean | cdktf.IResolvable) {
    this._notpresent = value;
  }
  public resetNotpresent() {
    this._notpresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notpresentInput() {
    return this._notpresent;
  }

  // present - computed: false, optional: true, required: false
  private _present?: boolean | cdktf.IResolvable; 
  public get present() {
    return this.getBooleanAttribute('present');
  }
  public set present(value: boolean | cdktf.IResolvable) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
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

  // treat_missing_as_empty - computed: false, optional: true, required: false
  private _treatMissingAsEmpty?: boolean | cdktf.IResolvable; 
  public get treatMissingAsEmpty() {
    return this.getBooleanAttribute('treat_missing_as_empty');
  }
  public set treatMissingAsEmpty(value: boolean | cdktf.IResolvable) {
    this._treatMissingAsEmpty = value;
  }
  public resetTreatMissingAsEmpty() {
    this._treatMissingAsEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingAsEmptyInput() {
    return this._treatMissingAsEmpty;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch {
  /**
  * ExpectMatch defines whether the request must positively match the match criteria in order to generate a descriptor entry (i.e. true), or not match the match criteria in order to generate a descriptor entry (i.e. false). The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#expect_match DataK8SProjectcontourIoHttpProxyV1Manifest#expect_match}
  */
  readonly expectMatch?: boolean | cdktf.IResolvable;
  /**
  * Headers is a list of 1+ match criteria to apply against the request to determine whether to populate the descriptor entry or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#headers DataK8SProjectcontourIoHttpProxyV1Manifest#headers}
  */
  readonly headers?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable;
  /**
  * Value defines the value of the descriptor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expect_match: cdktf.booleanToTerraform(struct!.expectMatch),
    headers: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersToTerraform, false)(struct!.headers),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expect_match: {
      value: cdktf.booleanToHclTerraform(struct!.expectMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersList",
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectMatch = this._expectMatch;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectMatch = undefined;
      this._headers.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectMatch = value.expectMatch;
      this._headers.internalValue = value.headers;
      this._value = value.value;
    }
  }

  // expect_match - computed: false, optional: true, required: false
  private _expectMatch?: boolean | cdktf.IResolvable; 
  public get expectMatch() {
    return this.getBooleanAttribute('expect_match');
  }
  public set expectMatch(value: boolean | cdktf.IResolvable) {
    this._expectMatch = value;
  }
  public resetExpectMatch() {
    this._expectMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectMatchInput() {
    return this._expectMatch;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntries {
  /**
  * GenericKey defines a descriptor entry with a static key and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#generic_key DataK8SProjectcontourIoHttpProxyV1Manifest#generic_key}
  */
  readonly genericKey?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKey;
  /**
  * RemoteAddress defines a descriptor entry with a key of 'remote_address' and a value equal to the client's IP address (from x-forwarded-for).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#remote_address DataK8SProjectcontourIoHttpProxyV1Manifest#remote_address}
  */
  readonly remoteAddress?: { [key: string]: string };
  /**
  * RequestHeader defines a descriptor entry that's populated only if a given header is present on the request. The descriptor key is static, and the descriptor value is equal to the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_header DataK8SProjectcontourIoHttpProxyV1Manifest#request_header}
  */
  readonly requestHeader?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeader;
  /**
  * RequestHeaderValueMatch defines a descriptor entry that's populated if the request's headers match a set of 1+ match criteria. The descriptor key is 'header_match', and the descriptor value is static.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#request_header_value_match DataK8SProjectcontourIoHttpProxyV1Manifest#request_header_value_match}
  */
  readonly requestHeaderValueMatch?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generic_key: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKeyToTerraform(struct!.genericKey),
    remote_address: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.remoteAddress),
    request_header: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderToTerraform(struct!.requestHeader),
    request_header_value_match: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchToTerraform(struct!.requestHeaderValueMatch),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generic_key: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKeyToHclTerraform(struct!.genericKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKey",
    },
    remote_address: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.remoteAddress),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_header: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderToHclTerraform(struct!.requestHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeader",
    },
    request_header_value_match: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchToHclTerraform(struct!.requestHeaderValueMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._genericKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericKey = this._genericKey?.internalValue;
    }
    if (this._remoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._requestHeaderValueMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderValueMatch = this._requestHeaderValueMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._genericKey.internalValue = undefined;
      this._remoteAddress = undefined;
      this._requestHeader.internalValue = undefined;
      this._requestHeaderValueMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._genericKey.internalValue = value.genericKey;
      this._remoteAddress = value.remoteAddress;
      this._requestHeader.internalValue = value.requestHeader;
      this._requestHeaderValueMatch.internalValue = value.requestHeaderValueMatch;
    }
  }

  // generic_key - computed: false, optional: true, required: false
  private _genericKey = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKeyOutputReference(this, "generic_key");
  public get genericKey() {
    return this._genericKey;
  }
  public putGenericKey(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesGenericKey) {
    this._genericKey.internalValue = value;
  }
  public resetGenericKey() {
    this._genericKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericKeyInput() {
    return this._genericKey.internalValue;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: { [key: string]: string }; 
  public get remoteAddress() {
    return this.getStringMapAttribute('remote_address');
  }
  public set remoteAddress(value: { [key: string]: string }) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderOutputReference(this, "request_header");
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeader) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_header_value_match - computed: false, optional: true, required: false
  private _requestHeaderValueMatch = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatchOutputReference(this, "request_header_value_match");
  public get requestHeaderValueMatch() {
    return this._requestHeaderValueMatch;
  }
  public putRequestHeaderValueMatch(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesRequestHeaderValueMatch) {
    this._requestHeaderValueMatch.internalValue = value;
  }
  public resetRequestHeaderValueMatch() {
    this._requestHeaderValueMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderValueMatchInput() {
    return this._requestHeaderValueMatch.internalValue;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptors {
  /**
  * Entries is the list of key-value pair generators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#entries DataK8SProjectcontourIoHttpProxyV1Manifest#entries}
  */
  readonly entries?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntries[] | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesToTerraform, false)(struct!.entries),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entries.internalValue = value.entries;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobal {
  /**
  * Descriptors defines the list of descriptors that will be generated and sent to the rate limit service. Each descriptor contains 1+ key-value pair entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#descriptors DataK8SProjectcontourIoHttpProxyV1Manifest#descriptors}
  */
  readonly descriptors?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptors[] | cdktf.IResolvable;
  /**
  * Disabled configures the HTTPProxy to not use the default global rate limit policy defined by the Contour configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#disabled DataK8SProjectcontourIoHttpProxyV1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descriptors: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsToTerraform, false)(struct!.descriptors),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descriptors: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsToHclTerraform, false)(struct!.descriptors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptors = this._descriptors?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptors.internalValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptors.internalValue = value.descriptors;
      this._disabled = value.disabled;
    }
  }

  // descriptors - computed: false, optional: true, required: false
  private _descriptors = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptorsList(this, "descriptors", false);
  public get descriptors() {
    return this._descriptors;
  }
  public putDescriptors(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalDescriptors[] | cdktf.IResolvable) {
    this._descriptors.internalValue = value;
  }
  public resetDescriptors() {
    this._descriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorsInput() {
    return this._descriptors.internalValue;
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
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAdd {
  /**
  * Name represents a key of a header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#name DataK8SProjectcontourIoHttpProxyV1Manifest#name}
  */
  readonly name: string;
  /**
  * Value represents the value of a header specified by a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#value DataK8SProjectcontourIoHttpProxyV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAdd | cdktf.IResolvable): any {
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

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddOutputReference {
    return new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocal {
  /**
  * Burst defines the number of requests above the requests per unit that should be allowed within a short period of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#burst DataK8SProjectcontourIoHttpProxyV1Manifest#burst}
  */
  readonly burst?: number;
  /**
  * Requests defines how many requests per unit of time should be allowed before rate limiting occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#requests DataK8SProjectcontourIoHttpProxyV1Manifest#requests}
  */
  readonly requests: number;
  /**
  * ResponseHeadersToAdd is an optional list of response headers to set when a request is rate-limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response_headers_to_add DataK8SProjectcontourIoHttpProxyV1Manifest#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAdd[] | cdktf.IResolvable;
  /**
  * ResponseStatusCode is the HTTP status code to use for responses to rate-limited requests. Codes must be in the 400-599 range (inclusive). If not specified, the Envoy default of 429 (Too Many Requests) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#response_status_code DataK8SProjectcontourIoHttpProxyV1Manifest#response_status_code}
  */
  readonly responseStatusCode?: number;
  /**
  * Unit defines the period of time within which requests over the limit will be rate limited. Valid values are 'second', 'minute' and 'hour'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#unit DataK8SProjectcontourIoHttpProxyV1Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.numberToTerraform(struct!.burst),
    requests: cdktf.numberToTerraform(struct!.requests),
    response_headers_to_add: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddToTerraform, false)(struct!.responseHeadersToAdd),
    response_status_code: cdktf.numberToTerraform(struct!.responseStatusCode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests: {
      value: cdktf.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddToHclTerraform, false)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddList",
    },
    response_status_code: {
      value: cdktf.numberToHclTerraform(struct!.responseStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    if (this._responseStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseStatusCode = this._responseStatusCode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burst = undefined;
      this._requests = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
      this._responseStatusCode = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burst = value.burst;
      this._requests = value.requests;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
      this._responseStatusCode = value.responseStatusCode;
      this._unit = value.unit;
    }
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // requests - computed: false, optional: false, required: true
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }

  // response_status_code - computed: false, optional: true, required: false
  private _responseStatusCode?: number; 
  public get responseStatusCode() {
    return this.getNumberAttribute('response_status_code');
  }
  public set responseStatusCode(value: number) {
    this._responseStatusCode = value;
  }
  public resetResponseStatusCode() {
    this._responseStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStatusCodeInput() {
    return this._responseStatusCode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicy {
  /**
  * Global defines global rate limiting parameters, i.e. parameters defining descriptors that are sent to an external rate limit service (RLS) for a rate limit decision on each request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#global DataK8SProjectcontourIoHttpProxyV1Manifest#global}
  */
  readonly global?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobal;
  /**
  * Local defines local rate limiting parameters, i.e. parameters for rate limiting that occurs within each Envoy pod as requests are handled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#local DataK8SProjectcontourIoHttpProxyV1Manifest#local}
  */
  readonly local?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocal;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalToTerraform(struct!.global),
    local: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalToTerraform(struct!.local),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobal",
    },
    local: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._global.internalValue = undefined;
      this._local.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._global.internalValue = value.global;
      this._local.internalValue = value.local;
    }
  }

  // global - computed: false, optional: true, required: false
  private _global = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // local - computed: false, optional: true, required: false
  private _local = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificate {
  /**
  * Client cert in URL encoded PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cert DataK8SProjectcontourIoHttpProxyV1Manifest#cert}
  */
  readonly cert?: boolean | cdktf.IResolvable;
  /**
  * Client cert chain (including the leaf cert) in URL encoded PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#chain DataK8SProjectcontourIoHttpProxyV1Manifest#chain}
  */
  readonly chain?: boolean | cdktf.IResolvable;
  /**
  * DNS type Subject Alternative Names of the client cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#dns DataK8SProjectcontourIoHttpProxyV1Manifest#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Subject of the client cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#subject DataK8SProjectcontourIoHttpProxyV1Manifest#subject}
  */
  readonly subject?: boolean | cdktf.IResolvable;
  /**
  * URI type Subject Alternative Name of the client cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#uri DataK8SProjectcontourIoHttpProxyV1Manifest#uri}
  */
  readonly uri?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificateToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.booleanToTerraform(struct!.cert),
    chain: cdktf.booleanToTerraform(struct!.chain),
    dns: cdktf.booleanToTerraform(struct!.dns),
    subject: cdktf.booleanToTerraform(struct!.subject),
    uri: cdktf.booleanToTerraform(struct!.uri),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificateToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.booleanToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chain: {
      value: cdktf.booleanToHclTerraform(struct!.chain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subject: {
      value: cdktf.booleanToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri: {
      value: cdktf.booleanToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._chain !== undefined) {
      hasAnyValues = true;
      internalValueResult.chain = this._chain;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._chain = undefined;
      this._dns = undefined;
      this._subject = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._chain = value.chain;
      this._dns = value.dns;
      this._subject = value.subject;
      this._uri = value.uri;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: boolean | cdktf.IResolvable; 
  public get cert() {
    return this.getBooleanAttribute('cert');
  }
  public set cert(value: boolean | cdktf.IResolvable) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // chain - computed: false, optional: true, required: false
  private _chain?: boolean | cdktf.IResolvable; 
  public get chain() {
    return this.getBooleanAttribute('chain');
  }
  public set chain(value: boolean | cdktf.IResolvable) {
    this._chain = value;
  }
  public resetChain() {
    this._chain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: boolean | cdktf.IResolvable; 
  public get subject() {
    return this.getBooleanAttribute('subject');
  }
  public set subject(value: boolean | cdktf.IResolvable) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: boolean | cdktf.IResolvable; 
  public get uri() {
    return this.getBooleanAttribute('uri');
  }
  public set uri(value: boolean | cdktf.IResolvable) {
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidation {
  /**
  * Name of a Kubernetes secret that contains a CA certificate bundle. The secret must contain key named ca.crt. The client certificate must validate against the certificates in the bundle. If specified and SkipClientCertValidation is true, client certificates will be required on requests. The name can be optionally prefixed with namespace 'namespace/name'. When cross-namespace reference is used, TLSCertificateDelegation resource must exist in the namespace to grant access to the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ca_secret DataK8SProjectcontourIoHttpProxyV1Manifest#ca_secret}
  */
  readonly caSecret?: string;
  /**
  * If this option is set to true, only the certificate at the end of the certificate chain will be subject to validation by CRL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#crl_only_verify_leaf_cert DataK8SProjectcontourIoHttpProxyV1Manifest#crl_only_verify_leaf_cert}
  */
  readonly crlOnlyVerifyLeafCert?: boolean | cdktf.IResolvable;
  /**
  * Name of a Kubernetes opaque secret that contains a concatenated list of PEM encoded CRLs. The secret must contain key named crl.pem. This field will be used to verify that a client certificate has not been revoked. CRLs must be available from all CAs, unless crlOnlyVerifyLeafCert is true. Large CRL lists are not supported since individual secrets are limited to 1MiB in size. The name can be optionally prefixed with namespace 'namespace/name'. When cross-namespace reference is used, TLSCertificateDelegation resource must exist in the namespace to grant access to the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#crl_secret DataK8SProjectcontourIoHttpProxyV1Manifest#crl_secret}
  */
  readonly crlSecret?: string;
  /**
  * ForwardClientCertificate adds the selected data from the passed client TLS certificate to the x-forwarded-client-cert header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#forward_client_certificate DataK8SProjectcontourIoHttpProxyV1Manifest#forward_client_certificate}
  */
  readonly forwardClientCertificate?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificate;
  /**
  * OptionalClientCertificate when set to true will request a client certificate but allow the connection to continue if the client does not provide one. If a client certificate is sent, it will be verified according to the other properties, which includes disabling validation if SkipClientCertValidation is set. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#optional_client_certificate DataK8SProjectcontourIoHttpProxyV1Manifest#optional_client_certificate}
  */
  readonly optionalClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * SkipClientCertValidation disables downstream client certificate validation. Defaults to false. This field is intended to be used in conjunction with external authorization in order to enable the external authorization server to validate client certificates. When this field is set to true, client certificates are requested but not verified by Envoy. If CACertificate is specified, client certificates are required on requests, but not verified. If external authorization is in use, they are presented to the external authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#skip_client_cert_validation DataK8SProjectcontourIoHttpProxyV1Manifest#skip_client_cert_validation}
  */
  readonly skipClientCertValidation?: boolean | cdktf.IResolvable;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_secret: cdktf.stringToTerraform(struct!.caSecret),
    crl_only_verify_leaf_cert: cdktf.booleanToTerraform(struct!.crlOnlyVerifyLeafCert),
    crl_secret: cdktf.stringToTerraform(struct!.crlSecret),
    forward_client_certificate: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificateToTerraform(struct!.forwardClientCertificate),
    optional_client_certificate: cdktf.booleanToTerraform(struct!.optionalClientCertificate),
    skip_client_cert_validation: cdktf.booleanToTerraform(struct!.skipClientCertValidation),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_secret: {
      value: cdktf.stringToHclTerraform(struct!.caSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_only_verify_leaf_cert: {
      value: cdktf.booleanToHclTerraform(struct!.crlOnlyVerifyLeafCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl_secret: {
      value: cdktf.stringToHclTerraform(struct!.crlSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_client_certificate: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificateToHclTerraform(struct!.forwardClientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificate",
    },
    optional_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.optionalClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_client_cert_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipClientCertValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecret = this._caSecret;
    }
    if (this._crlOnlyVerifyLeafCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlOnlyVerifyLeafCert = this._crlOnlyVerifyLeafCert;
    }
    if (this._crlSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSecret = this._crlSecret;
    }
    if (this._forwardClientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardClientCertificate = this._forwardClientCertificate?.internalValue;
    }
    if (this._optionalClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalClientCertificate = this._optionalClientCertificate;
    }
    if (this._skipClientCertValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipClientCertValidation = this._skipClientCertValidation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caSecret = undefined;
      this._crlOnlyVerifyLeafCert = undefined;
      this._crlSecret = undefined;
      this._forwardClientCertificate.internalValue = undefined;
      this._optionalClientCertificate = undefined;
      this._skipClientCertValidation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caSecret = value.caSecret;
      this._crlOnlyVerifyLeafCert = value.crlOnlyVerifyLeafCert;
      this._crlSecret = value.crlSecret;
      this._forwardClientCertificate.internalValue = value.forwardClientCertificate;
      this._optionalClientCertificate = value.optionalClientCertificate;
      this._skipClientCertValidation = value.skipClientCertValidation;
    }
  }

  // ca_secret - computed: false, optional: true, required: false
  private _caSecret?: string; 
  public get caSecret() {
    return this.getStringAttribute('ca_secret');
  }
  public set caSecret(value: string) {
    this._caSecret = value;
  }
  public resetCaSecret() {
    this._caSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretInput() {
    return this._caSecret;
  }

  // crl_only_verify_leaf_cert - computed: false, optional: true, required: false
  private _crlOnlyVerifyLeafCert?: boolean | cdktf.IResolvable; 
  public get crlOnlyVerifyLeafCert() {
    return this.getBooleanAttribute('crl_only_verify_leaf_cert');
  }
  public set crlOnlyVerifyLeafCert(value: boolean | cdktf.IResolvable) {
    this._crlOnlyVerifyLeafCert = value;
  }
  public resetCrlOnlyVerifyLeafCert() {
    this._crlOnlyVerifyLeafCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlOnlyVerifyLeafCertInput() {
    return this._crlOnlyVerifyLeafCert;
  }

  // crl_secret - computed: false, optional: true, required: false
  private _crlSecret?: string; 
  public get crlSecret() {
    return this.getStringAttribute('crl_secret');
  }
  public set crlSecret(value: string) {
    this._crlSecret = value;
  }
  public resetCrlSecret() {
    this._crlSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSecretInput() {
    return this._crlSecret;
  }

  // forward_client_certificate - computed: false, optional: true, required: false
  private _forwardClientCertificate = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificateOutputReference(this, "forward_client_certificate");
  public get forwardClientCertificate() {
    return this._forwardClientCertificate;
  }
  public putForwardClientCertificate(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationForwardClientCertificate) {
    this._forwardClientCertificate.internalValue = value;
  }
  public resetForwardClientCertificate() {
    this._forwardClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardClientCertificateInput() {
    return this._forwardClientCertificate.internalValue;
  }

  // optional_client_certificate - computed: false, optional: true, required: false
  private _optionalClientCertificate?: boolean | cdktf.IResolvable; 
  public get optionalClientCertificate() {
    return this.getBooleanAttribute('optional_client_certificate');
  }
  public set optionalClientCertificate(value: boolean | cdktf.IResolvable) {
    this._optionalClientCertificate = value;
  }
  public resetOptionalClientCertificate() {
    this._optionalClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalClientCertificateInput() {
    return this._optionalClientCertificate;
  }

  // skip_client_cert_validation - computed: false, optional: true, required: false
  private _skipClientCertValidation?: boolean | cdktf.IResolvable; 
  public get skipClientCertValidation() {
    return this.getBooleanAttribute('skip_client_cert_validation');
  }
  public set skipClientCertValidation(value: boolean | cdktf.IResolvable) {
    this._skipClientCertValidation = value;
  }
  public resetSkipClientCertValidation() {
    this._skipClientCertValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipClientCertValidationInput() {
    return this._skipClientCertValidation;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTls {
  /**
  * ClientValidation defines how to verify the client certificate when an external client establishes a TLS connection to Envoy. This setting: 1. Enables TLS client certificate validation. 2. Specifies how the client certificate will be validated (i.e. validation required or skipped). Note: Setting client certificate validation to be skipped should be only used in conjunction with an external authorization server that performs client validation as Contour will ensure client certificates are passed along.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#client_validation DataK8SProjectcontourIoHttpProxyV1Manifest#client_validation}
  */
  readonly clientValidation?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidation;
  /**
  * EnableFallbackCertificate defines if the vhost should allow a default certificate to be applied which handles all requests which don't match the SNI defined in this vhost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#enable_fallback_certificate DataK8SProjectcontourIoHttpProxyV1Manifest#enable_fallback_certificate}
  */
  readonly enableFallbackCertificate?: boolean | cdktf.IResolvable;
  /**
  * MaximumProtocolVersion is the maximum TLS version this vhost should negotiate. Valid options are '1.2' and '1.3' (default). Any other value defaults to TLS 1.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#maximum_protocol_version DataK8SProjectcontourIoHttpProxyV1Manifest#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * MinimumProtocolVersion is the minimum TLS version this vhost should negotiate. Valid options are '1.2' (default) and '1.3'. Any other value defaults to TLS 1.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#minimum_protocol_version DataK8SProjectcontourIoHttpProxyV1Manifest#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Passthrough defines whether the encrypted TLS handshake will be passed through to the backing cluster. Either Passthrough or SecretName must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#passthrough DataK8SProjectcontourIoHttpProxyV1Manifest#passthrough}
  */
  readonly passthrough?: boolean | cdktf.IResolvable;
  /**
  * SecretName is the name of a TLS secret. Either SecretName or Passthrough must be specified, but not both. If specified, the named secret must contain a matching certificate for the virtual host's FQDN. The name can be optionally prefixed with namespace 'namespace/name'. When cross-namespace reference is used, TLSCertificateDelegation resource must exist in the namespace to grant access to the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#secret_name DataK8SProjectcontourIoHttpProxyV1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_validation: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationToTerraform(struct!.clientValidation),
    enable_fallback_certificate: cdktf.booleanToTerraform(struct!.enableFallbackCertificate),
    maximum_protocol_version: cdktf.stringToTerraform(struct!.maximumProtocolVersion),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    passthrough: cdktf.booleanToTerraform(struct!.passthrough),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_validation: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationToHclTerraform(struct!.clientValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidation",
    },
    enable_fallback_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.enableFallbackCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.passthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientValidation = this._clientValidation?.internalValue;
    }
    if (this._enableFallbackCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFallbackCertificate = this._enableFallbackCertificate;
    }
    if (this._maximumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProtocolVersion = this._maximumProtocolVersion;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientValidation.internalValue = undefined;
      this._enableFallbackCertificate = undefined;
      this._maximumProtocolVersion = undefined;
      this._minimumProtocolVersion = undefined;
      this._passthrough = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientValidation.internalValue = value.clientValidation;
      this._enableFallbackCertificate = value.enableFallbackCertificate;
      this._maximumProtocolVersion = value.maximumProtocolVersion;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
      this._passthrough = value.passthrough;
      this._secretName = value.secretName;
    }
  }

  // client_validation - computed: false, optional: true, required: false
  private _clientValidation = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidationOutputReference(this, "client_validation");
  public get clientValidation() {
    return this._clientValidation;
  }
  public putClientValidation(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsClientValidation) {
    this._clientValidation.internalValue = value;
  }
  public resetClientValidation() {
    this._clientValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientValidationInput() {
    return this._clientValidation.internalValue;
  }

  // enable_fallback_certificate - computed: false, optional: true, required: false
  private _enableFallbackCertificate?: boolean | cdktf.IResolvable; 
  public get enableFallbackCertificate() {
    return this.getBooleanAttribute('enable_fallback_certificate');
  }
  public set enableFallbackCertificate(value: boolean | cdktf.IResolvable) {
    this._enableFallbackCertificate = value;
  }
  public resetEnableFallbackCertificate() {
    this._enableFallbackCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFallbackCertificateInput() {
    return this._enableFallbackCertificate;
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

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: boolean | cdktf.IResolvable; 
  public get passthrough() {
    return this.getBooleanAttribute('passthrough');
  }
  public set passthrough(value: boolean | cdktf.IResolvable) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhost {
  /**
  * This field configures an extension service to perform authorization for this virtual host. Authorization can only be configured on virtual hosts that have TLS enabled. If the TLS configuration requires client certificate validation, the client certificate is always included in the authentication check request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#authorization DataK8SProjectcontourIoHttpProxyV1Manifest#authorization}
  */
  readonly authorization?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorization;
  /**
  * Specifies the cross-origin policy to apply to the VirtualHost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#cors_policy DataK8SProjectcontourIoHttpProxyV1Manifest#cors_policy}
  */
  readonly corsPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicy;
  /**
  * The fully qualified domain name of the root of the ingress tree all leaves of the DAG rooted at this object relate to the fqdn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#fqdn DataK8SProjectcontourIoHttpProxyV1Manifest#fqdn}
  */
  readonly fqdn: string;
  /**
  * IPAllowFilterPolicy is a list of ipv4/6 filter rules for which matching requests should be allowed. All other requests will be denied. Only one of IPAllowFilterPolicy and IPDenyFilterPolicy can be defined. The rules defined here may be overridden in a Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ip_allow_policy DataK8SProjectcontourIoHttpProxyV1Manifest#ip_allow_policy}
  */
  readonly ipAllowPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicy[] | cdktf.IResolvable;
  /**
  * IPDenyFilterPolicy is a list of ipv4/6 filter rules for which matching requests should be denied. All other requests will be allowed. Only one of IPAllowFilterPolicy and IPDenyFilterPolicy can be defined. The rules defined here may be overridden in a Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ip_deny_policy DataK8SProjectcontourIoHttpProxyV1Manifest#ip_deny_policy}
  */
  readonly ipDenyPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicy[] | cdktf.IResolvable;
  /**
  * Providers to use for verifying JSON Web Tokens (JWTs) on the virtual host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#jwt_providers DataK8SProjectcontourIoHttpProxyV1Manifest#jwt_providers}
  */
  readonly jwtProviders?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProviders[] | cdktf.IResolvable;
  /**
  * The policy for rate limiting on the virtual host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#rate_limit_policy DataK8SProjectcontourIoHttpProxyV1Manifest#rate_limit_policy}
  */
  readonly rateLimitPolicy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicy;
  /**
  * If present the fields describes TLS properties of the virtual host. The SNI names that will be matched on are described in fqdn, the tls.secretName secret must contain a certificate that itself contains a name that matches the FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#tls DataK8SProjectcontourIoHttpProxyV1Manifest#tls}
  */
  readonly tls?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTls;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationToTerraform(struct!.authorization),
    cors_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicyToTerraform(struct!.corsPolicy),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_allow_policy: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyToTerraform, false)(struct!.ipAllowPolicy),
    ip_deny_policy: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyToTerraform, false)(struct!.ipDenyPolicy),
    jwt_providers: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersToTerraform, false)(struct!.jwtProviders),
    rate_limit_policy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyToTerraform(struct!.rateLimitPolicy),
    tls: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsToTerraform(struct!.tls),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorization",
    },
    cors_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicy",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_allow_policy: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyToHclTerraform, false)(struct!.ipAllowPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyList",
    },
    ip_deny_policy: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyToHclTerraform, false)(struct!.ipDenyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyList",
    },
    jwt_providers: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersToHclTerraform, false)(struct!.jwtProviders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersList",
    },
    rate_limit_policy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyToHclTerraform(struct!.rateLimitPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicy",
    },
    tls: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAllowPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowPolicy = this._ipAllowPolicy?.internalValue;
    }
    if (this._ipDenyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDenyPolicy = this._ipDenyPolicy?.internalValue;
    }
    if (this._jwtProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtProviders = this._jwtProviders?.internalValue;
    }
    if (this._rateLimitPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitPolicy = this._rateLimitPolicy?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization.internalValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._fqdn = undefined;
      this._ipAllowPolicy.internalValue = undefined;
      this._ipDenyPolicy.internalValue = undefined;
      this._jwtProviders.internalValue = undefined;
      this._rateLimitPolicy.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization.internalValue = value.authorization;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._fqdn = value.fqdn;
      this._ipAllowPolicy.internalValue = value.ipAllowPolicy;
      this._ipDenyPolicy.internalValue = value.ipDenyPolicy;
      this._jwtProviders.internalValue = value.jwtProviders;
      this._rateLimitPolicy.internalValue = value.rateLimitPolicy;
      this._tls.internalValue = value.tls;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_allow_policy - computed: false, optional: true, required: false
  private _ipAllowPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicyList(this, "ip_allow_policy", false);
  public get ipAllowPolicy() {
    return this._ipAllowPolicy;
  }
  public putIpAllowPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpAllowPolicy[] | cdktf.IResolvable) {
    this._ipAllowPolicy.internalValue = value;
  }
  public resetIpAllowPolicy() {
    this._ipAllowPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowPolicyInput() {
    return this._ipAllowPolicy.internalValue;
  }

  // ip_deny_policy - computed: false, optional: true, required: false
  private _ipDenyPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicyList(this, "ip_deny_policy", false);
  public get ipDenyPolicy() {
    return this._ipDenyPolicy;
  }
  public putIpDenyPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostIpDenyPolicy[] | cdktf.IResolvable) {
    this._ipDenyPolicy.internalValue = value;
  }
  public resetIpDenyPolicy() {
    this._ipDenyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDenyPolicyInput() {
    return this._ipDenyPolicy.internalValue;
  }

  // jwt_providers - computed: false, optional: true, required: false
  private _jwtProviders = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProvidersList(this, "jwt_providers", false);
  public get jwtProviders() {
    return this._jwtProviders;
  }
  public putJwtProviders(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostJwtProviders[] | cdktf.IResolvable) {
    this._jwtProviders.internalValue = value;
  }
  public resetJwtProviders() {
    this._jwtProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtProvidersInput() {
    return this._jwtProviders.internalValue;
  }

  // rate_limit_policy - computed: false, optional: true, required: false
  private _rateLimitPolicy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicyOutputReference(this, "rate_limit_policy");
  public get rateLimitPolicy() {
    return this._rateLimitPolicy;
  }
  public putRateLimitPolicy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostRateLimitPolicy) {
    this._rateLimitPolicy.internalValue = value;
  }
  public resetRateLimitPolicy() {
    this._rateLimitPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitPolicyInput() {
    return this._rateLimitPolicy.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostTls) {
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
export interface DataK8SProjectcontourIoHttpProxyV1ManifestSpec {
  /**
  * Includes allow for specific routing configuration to be included from another HTTPProxy, possibly in another namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#includes DataK8SProjectcontourIoHttpProxyV1Manifest#includes}
  */
  readonly includes?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludes[] | cdktf.IResolvable;
  /**
  * IngressClassName optionally specifies the ingress class to use for this HTTPProxy. This replaces the deprecated 'kubernetes.io/ingress.class' annotation. For backwards compatibility, when that annotation is set, it is given precedence over this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#ingress_class_name DataK8SProjectcontourIoHttpProxyV1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Routes are the ingress routes. If TCPProxy is present, Routes is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#routes DataK8SProjectcontourIoHttpProxyV1Manifest#routes}
  */
  readonly routes?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutes[] | cdktf.IResolvable;
  /**
  * TCPProxy holds TCP proxy information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#tcpproxy DataK8SProjectcontourIoHttpProxyV1Manifest#tcpproxy}
  */
  readonly tcpproxy?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxy;
  /**
  * Virtualhost appears at most once. If it is present, the object is considered to be a 'root' HTTPProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#virtualhost DataK8SProjectcontourIoHttpProxyV1Manifest#virtualhost}
  */
  readonly virtualhost?: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhost;
}

export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecToTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    includes: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesToTerraform, false)(struct!.includes),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    routes: cdktf.listMapper(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesToTerraform, false)(struct!.routes),
    tcpproxy: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyToTerraform(struct!.tcpproxy),
    virtualhost: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostToTerraform(struct!.virtualhost),
  }
}


export function dataK8SProjectcontourIoHttpProxyV1ManifestSpecToHclTerraform(struct?: DataK8SProjectcontourIoHttpProxyV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    includes: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesToHclTerraform, false)(struct!.includes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesList",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesList",
    },
    tcpproxy: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyToHclTerraform(struct!.tcpproxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxy",
    },
    virtualhost: {
      value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostToHclTerraform(struct!.virtualhost),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhost",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SProjectcontourIoHttpProxyV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SProjectcontourIoHttpProxyV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes?.internalValue;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._tcpproxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpproxy = this._tcpproxy?.internalValue;
    }
    if (this._virtualhost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualhost = this._virtualhost?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includes.internalValue = undefined;
      this._ingressClassName = undefined;
      this._routes.internalValue = undefined;
      this._tcpproxy.internalValue = undefined;
      this._virtualhost.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includes.internalValue = value.includes;
      this._ingressClassName = value.ingressClassName;
      this._routes.internalValue = value.routes;
      this._tcpproxy.internalValue = value.tcpproxy;
      this._virtualhost.internalValue = value.virtualhost;
    }
  }

  // includes - computed: false, optional: true, required: false
  private _includes = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludesList(this, "includes", false);
  public get includes() {
    return this._includes;
  }
  public putIncludes(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecIncludes[] | cdktf.IResolvable) {
    this._includes.internalValue = value;
  }
  public resetIncludes() {
    this._includes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes.internalValue;
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

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // tcpproxy - computed: false, optional: true, required: false
  private _tcpproxy = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxyOutputReference(this, "tcpproxy");
  public get tcpproxy() {
    return this._tcpproxy;
  }
  public putTcpproxy(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecTcpproxy) {
    this._tcpproxy.internalValue = value;
  }
  public resetTcpproxy() {
    this._tcpproxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpproxyInput() {
    return this._tcpproxy.internalValue;
  }

  // virtualhost - computed: false, optional: true, required: false
  private _virtualhost = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhostOutputReference(this, "virtualhost");
  public get virtualhost() {
    return this._virtualhost;
  }
  public putVirtualhost(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpecVirtualhost) {
    this._virtualhost.internalValue = value;
  }
  public resetVirtualhost() {
    this._virtualhost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualhostInput() {
    return this._virtualhost.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest k8s_projectcontour_io_http_proxy_v1_manifest}
*/
export class DataK8SProjectcontourIoHttpProxyV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_projectcontour_io_http_proxy_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SProjectcontourIoHttpProxyV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SProjectcontourIoHttpProxyV1Manifest to import
  * @param importFromId The id of the existing DataK8SProjectcontourIoHttpProxyV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SProjectcontourIoHttpProxyV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_projectcontour_io_http_proxy_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/projectcontour_io_http_proxy_v1_manifest k8s_projectcontour_io_http_proxy_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SProjectcontourIoHttpProxyV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SProjectcontourIoHttpProxyV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_projectcontour_io_http_proxy_v1_manifest',
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
  private _metadata = new DataK8SProjectcontourIoHttpProxyV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SProjectcontourIoHttpProxyV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SProjectcontourIoHttpProxyV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SProjectcontourIoHttpProxyV1ManifestSpec) {
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
      metadata: dataK8SProjectcontourIoHttpProxyV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SProjectcontourIoHttpProxyV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SProjectcontourIoHttpProxyV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestMetadata",
      },
      spec: {
        value: dataK8SProjectcontourIoHttpProxyV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SProjectcontourIoHttpProxyV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
