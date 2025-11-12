// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#metadata DataK8SFluentdFluentIoFilterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadata;
  /**
  * FilterSpec defines the desired state of Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#spec DataK8SFluentdFluentIoFilterV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpec;
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#annotations DataK8SFluentdFluentIoFilterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#labels DataK8SFluentdFluentIoFilterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#name DataK8SFluentdFluentIoFilterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#namespace DataK8SFluentdFluentIoFilterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#config DataK8SFluentdFluentIoFilterV1Alpha1Manifest#config}
  */
  readonly config: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPluginToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPluginToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#pattern DataK8SFluentdFluentIoFilterV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExcludeToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExcludeToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExclude | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#pattern DataK8SFluentdFluentIoFilterV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexpToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexpToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAnd {
  /**
  * Exclude defines the parameters for the exclude plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#exclude DataK8SFluentdFluentIoFilterV1Alpha1Manifest#exclude}
  */
  readonly exclude?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExclude;
  /**
  * Regexp defines the parameters for the regexp plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#regexp DataK8SFluentdFluentIoFilterV1Alpha1Manifest#regexp}
  */
  readonly regexp?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexp;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExcludeToTerraform(struct!.exclude),
    regexp: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExclude",
    },
    regexp: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude.internalValue = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude.internalValue = value.exclude;
      this._regexp.internalValue = value.regexp;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndRegexp) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAnd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndOutputReference {
    return new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#pattern DataK8SFluentdFluentIoFilterV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExclude | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExclude[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeOutputReference {
    return new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#pattern DataK8SFluentdFluentIoFilterV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExcludeToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExcludeToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExclude | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#pattern DataK8SFluentdFluentIoFilterV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexpToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexpToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOr {
  /**
  * Exclude defines the parameters for the exclude plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#exclude DataK8SFluentdFluentIoFilterV1Alpha1Manifest#exclude}
  */
  readonly exclude?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExclude;
  /**
  * Regexp defines the parameters for the regexp plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#regexp DataK8SFluentdFluentIoFilterV1Alpha1Manifest#regexp}
  */
  readonly regexp?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexp;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExcludeToTerraform(struct!.exclude),
    regexp: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExclude",
    },
    regexp: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude.internalValue = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude.internalValue = value.exclude;
      this._regexp.internalValue = value.regexp;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrRegexp) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOr[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrOutputReference {
    return new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#pattern DataK8SFluentdFluentIoFilterV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpOutputReference {
    return new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#and DataK8SFluentdFluentIoFilterV1Alpha1Manifest#and}
  */
  readonly and?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAnd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#exclude DataK8SFluentdFluentIoFilterV1Alpha1Manifest#exclude}
  */
  readonly exclude?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExclude[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#or DataK8SFluentdFluentIoFilterV1Alpha1Manifest#or}
  */
  readonly or?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOr[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#regexp DataK8SFluentdFluentIoFilterV1Alpha1Manifest#regexp}
  */
  readonly regexp?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexp[] | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndToTerraform, false)(struct!.and),
    exclude: cdktf.listMapper(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeToTerraform, false)(struct!.exclude),
    or: cdktf.listMapper(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrToTerraform, false)(struct!.or),
    regexp: cdktf.listMapper(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpToTerraform, false)(struct!.regexp),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndToHclTerraform, false)(struct!.and),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndList",
    },
    exclude: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeList",
    },
    or: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrToHclTerraform, false)(struct!.or),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrList",
    },
    regexp: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpToHclTerraform, false)(struct!.regexp),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and?.internalValue;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._or?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and.internalValue = undefined;
      this._exclude.internalValue = undefined;
      this._or.internalValue = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and.internalValue = value.and;
      this._exclude.internalValue = value.exclude;
      this._or.internalValue = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAndList(this, "and", false);
  public get and() {
    return this._and;
  }
  public putAnd(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepAnd[] | cdktf.IResolvable) {
    this._and.internalValue = value;
  }
  public resetAnd() {
    this._and.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and.internalValue;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // or - computed: false, optional: true, required: false
  private _or = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOrList(this, "or", false);
  public get or() {
    return this._or;
  }
  public putOr(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOr[] | cdktf.IResolvable) {
    this._or.internalValue = value;
  }
  public resetOr() {
    this._or.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexpList(this, "regexp", false);
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepRegexp[] | cdktf.IResolvable) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrok {
  /**
  * If true, keep time field in the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#keep_time_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * The name of this grok section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#name DataK8SFluentdFluentIoFilterV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The pattern of grok. Required parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#pattern DataK8SFluentdFluentIoFilterV1Alpha1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Process value using specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_format DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Specify time field for event time. If the event doesn't have this field, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Use specified timezone. one can parse/format the time value in the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_zone DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_zone}
  */
  readonly timeZone?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrok | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrok | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepTimeKey = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._timeFormat = undefined;
      this._timeKey = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepTimeKey = value.keepTimeKey;
      this._name = value.name;
      this._pattern = value.pattern;
      this._timeFormat = value.timeFormat;
      this._timeKey = value.timeKey;
      this._timeZone = value.timeZone;
    }
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrok[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokOutputReference {
    return new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParse {
  /**
  * Path to the file that includes custom grok patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#custom_pattern_path DataK8SFluentdFluentIoFilterV1Alpha1Manifest#custom_pattern_path}
  */
  readonly customPatternPath?: string;
  /**
  * If true, use Fluent::Eventnow(current time) as a timestamp when time_key is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#estimate_current_event DataK8SFluentdFluentIoFilterV1Alpha1Manifest#estimate_current_event}
  */
  readonly estimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Specifies the regular expression for matching logs. Regular expression also supports i and m suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#expression DataK8SFluentdFluentIoFilterV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Grok Sections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#grok DataK8SFluentdFluentIoFilterV1Alpha1Manifest#grok}
  */
  readonly grok?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrok[] | cdktf.IResolvable;
  /**
  * The key has grok failure reason.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#grok_failure_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * The pattern of grok.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#grok_pattern DataK8SFluentdFluentIoFilterV1Alpha1Manifest#grok_pattern}
  */
  readonly grokPattern?: string;
  /**
  * Specify grok pattern series set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#grok_pattern_series DataK8SFluentdFluentIoFilterV1Alpha1Manifest#grok_pattern_series}
  */
  readonly grokPatternSeries?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#id DataK8SFluentdFluentIoFilterV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, keep time field in th record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#keep_time_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#keep_time_key}
  */
  readonly keepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * If true, uses local time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#localtime DataK8SFluentdFluentIoFilterV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#log_level DataK8SFluentdFluentIoFilterV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * The regexp to match beginning of multiline. This is only for 'multiline_grok'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#multi_line_start_regexp DataK8SFluentdFluentIoFilterV1Alpha1Manifest#multi_line_start_regexp}
  */
  readonly multiLineStartRegexp?: string;
  /**
  * Process value according to the specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_format DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Uses the specified time format as a fallback in the specified order. You can parse undetermined time format by using time_format_fallbacks. This options is enabled when time_type is mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_format_fallbacks DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_format_fallbacks}
  */
  readonly timeFormatFallbacks?: string;
  /**
  * Specify time field for event time. If the event doesn't have this field, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * parses/formats value according to this type, default is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_type DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Specify timeout for parse processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#timeout DataK8SFluentdFluentIoFilterV1Alpha1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Uses the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#timezone DataK8SFluentdFluentIoFilterV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#type DataK8SFluentdFluentIoFilterV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Specify types for converting field into another, i.e: types user_id:integer,paid:bool,paid_usd_amount:float
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#types DataK8SFluentdFluentIoFilterV1Alpha1Manifest#types}
  */
  readonly types?: string;
  /**
  * If true, uses UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#utc DataK8SFluentdFluentIoFilterV1Alpha1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_pattern_path: cdktf.stringToTerraform(struct!.customPatternPath),
    estimate_current_event: cdktf.booleanToTerraform(struct!.estimateCurrentEvent),
    expression: cdktf.stringToTerraform(struct!.expression),
    grok: cdktf.listMapper(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokToTerraform, false)(struct!.grok),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
    grok_pattern_series: cdktf.stringToTerraform(struct!.grokPatternSeries),
    id: cdktf.stringToTerraform(struct!.id),
    keep_time_key: cdktf.booleanToTerraform(struct!.keepTimeKey),
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    multi_line_start_regexp: cdktf.stringToTerraform(struct!.multiLineStartRegexp),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_format_fallbacks: cdktf.stringToTerraform(struct!.timeFormatFallbacks),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    types: cdktf.stringToTerraform(struct!.types),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_pattern_path: {
      value: cdktf.stringToHclTerraform(struct!.customPatternPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.estimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokToHclTerraform, false)(struct!.grok),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokList",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern: {
      value: cdktf.stringToHclTerraform(struct!.grokPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_pattern_series: {
      value: cdktf.stringToHclTerraform(struct!.grokPatternSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.keepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multiLineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_fallbacks: {
      value: cdktf.stringToHclTerraform(struct!.timeFormatFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
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
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    types: {
      value: cdktf.stringToHclTerraform(struct!.types),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPatternPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatternPath = this._customPatternPath;
    }
    if (this._estimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimateCurrentEvent = this._estimateCurrentEvent;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._grok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grok = this._grok?.internalValue;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPattern = this._grokPattern;
    }
    if (this._grokPatternSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokPatternSeries = this._grokPatternSeries;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTimeKey = this._keepTimeKey;
    }
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._multiLineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLineStartRegexp = this._multiLineStartRegexp;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeFormatFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatFallbacks = this._timeFormatFallbacks;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPatternPath = undefined;
      this._estimateCurrentEvent = undefined;
      this._expression = undefined;
      this._grok.internalValue = undefined;
      this._grokFailureKey = undefined;
      this._grokPattern = undefined;
      this._grokPatternSeries = undefined;
      this._id = undefined;
      this._keepTimeKey = undefined;
      this._localtime = undefined;
      this._logLevel = undefined;
      this._multiLineStartRegexp = undefined;
      this._timeFormat = undefined;
      this._timeFormatFallbacks = undefined;
      this._timeKey = undefined;
      this._timeType = undefined;
      this._timeout = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._types = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPatternPath = value.customPatternPath;
      this._estimateCurrentEvent = value.estimateCurrentEvent;
      this._expression = value.expression;
      this._grok.internalValue = value.grok;
      this._grokFailureKey = value.grokFailureKey;
      this._grokPattern = value.grokPattern;
      this._grokPatternSeries = value.grokPatternSeries;
      this._id = value.id;
      this._keepTimeKey = value.keepTimeKey;
      this._localtime = value.localtime;
      this._logLevel = value.logLevel;
      this._multiLineStartRegexp = value.multiLineStartRegexp;
      this._timeFormat = value.timeFormat;
      this._timeFormatFallbacks = value.timeFormatFallbacks;
      this._timeKey = value.timeKey;
      this._timeType = value.timeType;
      this._timeout = value.timeout;
      this._timezone = value.timezone;
      this._type = value.type;
      this._types = value.types;
      this._utc = value.utc;
    }
  }

  // custom_pattern_path - computed: false, optional: true, required: false
  private _customPatternPath?: string; 
  public get customPatternPath() {
    return this.getStringAttribute('custom_pattern_path');
  }
  public set customPatternPath(value: string) {
    this._customPatternPath = value;
  }
  public resetCustomPatternPath() {
    this._customPatternPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternPathInput() {
    return this._customPatternPath;
  }

  // estimate_current_event - computed: false, optional: true, required: false
  private _estimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get estimateCurrentEvent() {
    return this.getBooleanAttribute('estimate_current_event');
  }
  public set estimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._estimateCurrentEvent = value;
  }
  public resetEstimateCurrentEvent() {
    this._estimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimateCurrentEventInput() {
    return this._estimateCurrentEvent;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // grok - computed: false, optional: true, required: false
  private _grok = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrokList(this, "grok", false);
  public get grok() {
    return this._grok;
  }
  public putGrok(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseGrok[] | cdktf.IResolvable) {
    this._grok.internalValue = value;
  }
  public resetGrok() {
    this._grok.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok.internalValue;
  }

  // grok_failure_key - computed: false, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_pattern - computed: false, optional: true, required: false
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  public resetGrokPattern() {
    this._grokPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern;
  }

  // grok_pattern_series - computed: false, optional: true, required: false
  private _grokPatternSeries?: string; 
  public get grokPatternSeries() {
    return this.getStringAttribute('grok_pattern_series');
  }
  public set grokPatternSeries(value: string) {
    this._grokPatternSeries = value;
  }
  public resetGrokPatternSeries() {
    this._grokPatternSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternSeriesInput() {
    return this._grokPatternSeries;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // keep_time_key - computed: false, optional: true, required: false
  private _keepTimeKey?: boolean | cdktf.IResolvable; 
  public get keepTimeKey() {
    return this.getBooleanAttribute('keep_time_key');
  }
  public set keepTimeKey(value: boolean | cdktf.IResolvable) {
    this._keepTimeKey = value;
  }
  public resetKeepTimeKey() {
    this._keepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTimeKeyInput() {
    return this._keepTimeKey;
  }

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
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

  // multi_line_start_regexp - computed: false, optional: true, required: false
  private _multiLineStartRegexp?: string; 
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }
  public set multiLineStartRegexp(value: string) {
    this._multiLineStartRegexp = value;
  }
  public resetMultiLineStartRegexp() {
    this._multiLineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineStartRegexpInput() {
    return this._multiLineStartRegexp;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_format_fallbacks - computed: false, optional: true, required: false
  private _timeFormatFallbacks?: string; 
  public get timeFormatFallbacks() {
    return this.getStringAttribute('time_format_fallbacks');
  }
  public set timeFormatFallbacks(value: string) {
    this._timeFormatFallbacks = value;
  }
  public resetTimeFormatFallbacks() {
    this._timeFormatFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatFallbacksInput() {
    return this._timeFormatFallbacks;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParser {
  /**
  * Emits invalid record to @ERROR label. Invalid cases are: key does not exist;the format is not matched;an unexpected error. If you want to ignore these errors, set false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#emit_invalid_record_to_error DataK8SFluentdFluentIoFilterV1Alpha1Manifest#emit_invalid_record_to_error}
  */
  readonly emitInvalidRecordToError?: boolean | cdktf.IResolvable;
  /**
  * Stores the parsed values as a hash value in a field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#hash_value_field DataK8SFluentdFluentIoFilterV1Alpha1Manifest#hash_value_field}
  */
  readonly hashValueField?: string;
  /**
  * Stores the parsed values with the specified key name prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#inject_key_prefix DataK8SFluentdFluentIoFilterV1Alpha1Manifest#inject_key_prefix}
  */
  readonly injectKeyPrefix?: string;
  /**
  * Specifies the field name in the record to parse. Required parameter. i.e: If set keyName to log, {'key':'value','log':'{'time':1622473200,'user':1}'} => {'user':1}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#key_name DataK8SFluentdFluentIoFilterV1Alpha1Manifest#key_name}
  */
  readonly keyName: string;
  /**
  * Parse defines various parameters for the parse plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#parse DataK8SFluentdFluentIoFilterV1Alpha1Manifest#parse}
  */
  readonly parse: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParse;
  /**
  * Removes key_name field when parsing is succeeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#remove_key_name_field DataK8SFluentdFluentIoFilterV1Alpha1Manifest#remove_key_name_field}
  */
  readonly removeKeyNameField?: boolean | cdktf.IResolvable;
  /**
  * If true, invalid string is replaced with safe characters and re-parse it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#replace_invalid_sequence DataK8SFluentdFluentIoFilterV1Alpha1Manifest#replace_invalid_sequence}
  */
  readonly replaceInvalidSequence?: boolean | cdktf.IResolvable;
  /**
  * Keeps the original key-value pair in the parsed result. Default is false. i.e: If set keyName to log, reverseData to true, {'key':'value','log':'{'user':1,'num':2}'} => {'key':'value','log':'{'user':1,'num':2}','user':1,'num':2}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#reserve_data DataK8SFluentdFluentIoFilterV1Alpha1Manifest#reserve_data}
  */
  readonly reserveData?: boolean | cdktf.IResolvable;
  /**
  * Keeps the original event time in the parsed result. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#reserve_time DataK8SFluentdFluentIoFilterV1Alpha1Manifest#reserve_time}
  */
  readonly reserveTime?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emit_invalid_record_to_error: cdktf.booleanToTerraform(struct!.emitInvalidRecordToError),
    hash_value_field: cdktf.stringToTerraform(struct!.hashValueField),
    inject_key_prefix: cdktf.stringToTerraform(struct!.injectKeyPrefix),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    parse: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseToTerraform(struct!.parse),
    remove_key_name_field: cdktf.booleanToTerraform(struct!.removeKeyNameField),
    replace_invalid_sequence: cdktf.booleanToTerraform(struct!.replaceInvalidSequence),
    reserve_data: cdktf.booleanToTerraform(struct!.reserveData),
    reserve_time: cdktf.booleanToTerraform(struct!.reserveTime),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emit_invalid_record_to_error: {
      value: cdktf.booleanToHclTerraform(struct!.emitInvalidRecordToError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hash_value_field: {
      value: cdktf.stringToHclTerraform(struct!.hashValueField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inject_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.injectKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseToHclTerraform(struct!.parse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParse",
    },
    remove_key_name_field: {
      value: cdktf.booleanToHclTerraform(struct!.removeKeyNameField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_invalid_sequence: {
      value: cdktf.booleanToHclTerraform(struct!.replaceInvalidSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserve_data: {
      value: cdktf.booleanToHclTerraform(struct!.reserveData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserve_time: {
      value: cdktf.booleanToHclTerraform(struct!.reserveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emitInvalidRecordToError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitInvalidRecordToError = this._emitInvalidRecordToError;
    }
    if (this._hashValueField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashValueField = this._hashValueField;
    }
    if (this._injectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectKeyPrefix = this._injectKeyPrefix;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._parse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parse = this._parse?.internalValue;
    }
    if (this._removeKeyNameField !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeyNameField = this._removeKeyNameField;
    }
    if (this._replaceInvalidSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidSequence = this._replaceInvalidSequence;
    }
    if (this._reserveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveData = this._reserveData;
    }
    if (this._reserveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveTime = this._reserveTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emitInvalidRecordToError = undefined;
      this._hashValueField = undefined;
      this._injectKeyPrefix = undefined;
      this._keyName = undefined;
      this._parse.internalValue = undefined;
      this._removeKeyNameField = undefined;
      this._replaceInvalidSequence = undefined;
      this._reserveData = undefined;
      this._reserveTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emitInvalidRecordToError = value.emitInvalidRecordToError;
      this._hashValueField = value.hashValueField;
      this._injectKeyPrefix = value.injectKeyPrefix;
      this._keyName = value.keyName;
      this._parse.internalValue = value.parse;
      this._removeKeyNameField = value.removeKeyNameField;
      this._replaceInvalidSequence = value.replaceInvalidSequence;
      this._reserveData = value.reserveData;
      this._reserveTime = value.reserveTime;
    }
  }

  // emit_invalid_record_to_error - computed: false, optional: true, required: false
  private _emitInvalidRecordToError?: boolean | cdktf.IResolvable; 
  public get emitInvalidRecordToError() {
    return this.getBooleanAttribute('emit_invalid_record_to_error');
  }
  public set emitInvalidRecordToError(value: boolean | cdktf.IResolvable) {
    this._emitInvalidRecordToError = value;
  }
  public resetEmitInvalidRecordToError() {
    this._emitInvalidRecordToError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitInvalidRecordToErrorInput() {
    return this._emitInvalidRecordToError;
  }

  // hash_value_field - computed: false, optional: true, required: false
  private _hashValueField?: string; 
  public get hashValueField() {
    return this.getStringAttribute('hash_value_field');
  }
  public set hashValueField(value: string) {
    this._hashValueField = value;
  }
  public resetHashValueField() {
    this._hashValueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashValueFieldInput() {
    return this._hashValueField;
  }

  // inject_key_prefix - computed: false, optional: true, required: false
  private _injectKeyPrefix?: string; 
  public get injectKeyPrefix() {
    return this.getStringAttribute('inject_key_prefix');
  }
  public set injectKeyPrefix(value: string) {
    this._injectKeyPrefix = value;
  }
  public resetInjectKeyPrefix() {
    this._injectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectKeyPrefixInput() {
    return this._injectKeyPrefix;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // parse - computed: false, optional: false, required: true
  private _parse = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
  public putParse(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserParse) {
    this._parse.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parseInput() {
    return this._parse.internalValue;
  }

  // remove_key_name_field - computed: false, optional: true, required: false
  private _removeKeyNameField?: boolean | cdktf.IResolvable; 
  public get removeKeyNameField() {
    return this.getBooleanAttribute('remove_key_name_field');
  }
  public set removeKeyNameField(value: boolean | cdktf.IResolvable) {
    this._removeKeyNameField = value;
  }
  public resetRemoveKeyNameField() {
    this._removeKeyNameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeyNameFieldInput() {
    return this._removeKeyNameField;
  }

  // replace_invalid_sequence - computed: false, optional: true, required: false
  private _replaceInvalidSequence?: boolean | cdktf.IResolvable; 
  public get replaceInvalidSequence() {
    return this.getBooleanAttribute('replace_invalid_sequence');
  }
  public set replaceInvalidSequence(value: boolean | cdktf.IResolvable) {
    this._replaceInvalidSequence = value;
  }
  public resetReplaceInvalidSequence() {
    this._replaceInvalidSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidSequenceInput() {
    return this._replaceInvalidSequence;
  }

  // reserve_data - computed: false, optional: true, required: false
  private _reserveData?: boolean | cdktf.IResolvable; 
  public get reserveData() {
    return this.getBooleanAttribute('reserve_data');
  }
  public set reserveData(value: boolean | cdktf.IResolvable) {
    this._reserveData = value;
  }
  public resetReserveData() {
    this._reserveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveDataInput() {
    return this._reserveData;
  }

  // reserve_time - computed: false, optional: true, required: false
  private _reserveTime?: boolean | cdktf.IResolvable; 
  public get reserveTime() {
    return this.getBooleanAttribute('reserve_time');
  }
  public set reserveTime(value: boolean | cdktf.IResolvable) {
    this._reserveTime = value;
  }
  public resetReserveTime() {
    this._reserveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveTimeInput() {
    return this._reserveTime;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecords {
  /**
  * New field can be defined as key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * The value must from Record properties. See https://docs.fluentd.org/filter/record_transformer#less-than-record-greater-than-directive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#value DataK8SFluentdFluentIoFilterV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecords | cdktf.IResolvable): any {
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

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecords | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecords | cdktf.IResolvable | undefined) {
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

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecords[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsOutputReference {
    return new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformer {
  /**
  * Automatically casts the field types. Default is false. This option is effective only for field values comprised of a single placeholder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#auto_typecast DataK8SFluentdFluentIoFilterV1Alpha1Manifest#auto_typecast}
  */
  readonly autoTypecast?: boolean | cdktf.IResolvable;
  /**
  * When set to true, the full Ruby syntax is enabled in the ${...} expression. The default value is false. i.e: jsonized_record ${record.to_json}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#enable_ruby DataK8SFluentdFluentIoFilterV1Alpha1Manifest#enable_ruby}
  */
  readonly enableRuby?: boolean | cdktf.IResolvable;
  /**
  * A list of keys to keep. Only relevant if renew_record is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#keep_keys DataK8SFluentdFluentIoFilterV1Alpha1Manifest#keep_keys}
  */
  readonly keepKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#records DataK8SFluentdFluentIoFilterV1Alpha1Manifest#records}
  */
  readonly records?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecords[] | cdktf.IResolvable;
  /**
  * A list of keys to delete. Supports nested field via record_accessor syntax since v1.1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#remove_keys DataK8SFluentdFluentIoFilterV1Alpha1Manifest#remove_keys}
  */
  readonly removeKeys?: string;
  /**
  * By default, the record transformer filter mutates the incoming data. However, if this parameter is set to true, it modifies a new empty hash instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#renew_record DataK8SFluentdFluentIoFilterV1Alpha1Manifest#renew_record}
  */
  readonly renewRecord?: boolean | cdktf.IResolvable;
  /**
  * renew_time_key foo overwrites the time of events with a value of the record field foo if exists. The value of foo must be a Unix timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#renew_time_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#renew_time_key}
  */
  readonly renewTimeKey?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_typecast: cdktf.booleanToTerraform(struct!.autoTypecast),
    enable_ruby: cdktf.booleanToTerraform(struct!.enableRuby),
    keep_keys: cdktf.stringToTerraform(struct!.keepKeys),
    records: cdktf.listMapper(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsToTerraform, false)(struct!.records),
    remove_keys: cdktf.stringToTerraform(struct!.removeKeys),
    renew_record: cdktf.booleanToTerraform(struct!.renewRecord),
    renew_time_key: cdktf.stringToTerraform(struct!.renewTimeKey),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_typecast: {
      value: cdktf.booleanToHclTerraform(struct!.autoTypecast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ruby: {
      value: cdktf.booleanToHclTerraform(struct!.enableRuby),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_keys: {
      value: cdktf.stringToHclTerraform(struct!.keepKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    records: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsToHclTerraform, false)(struct!.records),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsList",
    },
    remove_keys: {
      value: cdktf.stringToHclTerraform(struct!.removeKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_record: {
      value: cdktf.booleanToHclTerraform(struct!.renewRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    renew_time_key: {
      value: cdktf.stringToHclTerraform(struct!.renewTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTypecast !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTypecast = this._autoTypecast;
    }
    if (this._enableRuby !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRuby = this._enableRuby;
    }
    if (this._keepKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepKeys = this._keepKeys;
    }
    if (this._records?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.records = this._records?.internalValue;
    }
    if (this._removeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeys = this._removeKeys;
    }
    if (this._renewRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewRecord = this._renewRecord;
    }
    if (this._renewTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewTimeKey = this._renewTimeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTypecast = undefined;
      this._enableRuby = undefined;
      this._keepKeys = undefined;
      this._records.internalValue = undefined;
      this._removeKeys = undefined;
      this._renewRecord = undefined;
      this._renewTimeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTypecast = value.autoTypecast;
      this._enableRuby = value.enableRuby;
      this._keepKeys = value.keepKeys;
      this._records.internalValue = value.records;
      this._removeKeys = value.removeKeys;
      this._renewRecord = value.renewRecord;
      this._renewTimeKey = value.renewTimeKey;
    }
  }

  // auto_typecast - computed: false, optional: true, required: false
  private _autoTypecast?: boolean | cdktf.IResolvable; 
  public get autoTypecast() {
    return this.getBooleanAttribute('auto_typecast');
  }
  public set autoTypecast(value: boolean | cdktf.IResolvable) {
    this._autoTypecast = value;
  }
  public resetAutoTypecast() {
    this._autoTypecast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTypecastInput() {
    return this._autoTypecast;
  }

  // enable_ruby - computed: false, optional: true, required: false
  private _enableRuby?: boolean | cdktf.IResolvable; 
  public get enableRuby() {
    return this.getBooleanAttribute('enable_ruby');
  }
  public set enableRuby(value: boolean | cdktf.IResolvable) {
    this._enableRuby = value;
  }
  public resetEnableRuby() {
    this._enableRuby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRubyInput() {
    return this._enableRuby;
  }

  // keep_keys - computed: false, optional: true, required: false
  private _keepKeys?: string; 
  public get keepKeys() {
    return this.getStringAttribute('keep_keys');
  }
  public set keepKeys(value: string) {
    this._keepKeys = value;
  }
  public resetKeepKeys() {
    this._keepKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepKeysInput() {
    return this._keepKeys;
  }

  // records - computed: false, optional: true, required: false
  private _records = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }
  public putRecords(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerRecords[] | cdktf.IResolvable) {
    this._records.internalValue = value;
  }
  public resetRecords() {
    this._records.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records.internalValue;
  }

  // remove_keys - computed: false, optional: true, required: false
  private _removeKeys?: string; 
  public get removeKeys() {
    return this.getStringAttribute('remove_keys');
  }
  public set removeKeys(value: string) {
    this._removeKeys = value;
  }
  public resetRemoveKeys() {
    this._removeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeysInput() {
    return this._removeKeys;
  }

  // renew_record - computed: false, optional: true, required: false
  private _renewRecord?: boolean | cdktf.IResolvable; 
  public get renewRecord() {
    return this.getBooleanAttribute('renew_record');
  }
  public set renewRecord(value: boolean | cdktf.IResolvable) {
    this._renewRecord = value;
  }
  public resetRenewRecord() {
    this._renewRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewRecordInput() {
    return this._renewRecord;
  }

  // renew_time_key - computed: false, optional: true, required: false
  private _renewTimeKey?: string; 
  public get renewTimeKey() {
    return this.getStringAttribute('renew_time_key');
  }
  public set renewTimeKey(value: string) {
    this._renewTimeKey = value;
  }
  public resetRenewTimeKey() {
    this._renewTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewTimeKeyInput() {
    return this._renewTimeKey;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormat {
  /**
  * Delimiter for each field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#delimiter DataK8SFluentdFluentIoFilterV1Alpha1Manifest#delimiter}
  */
  readonly delimiter?: string;
  /**
  * The @id parameter specifies a unique name for the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#id DataK8SFluentdFluentIoFilterV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, uses local time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#localtime DataK8SFluentdFluentIoFilterV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#log_level DataK8SFluentdFluentIoFilterV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Specify newline characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#newline DataK8SFluentdFluentIoFilterV1Alpha1Manifest#newline}
  */
  readonly newline?: string;
  /**
  * Output tag field if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#output_tag DataK8SFluentdFluentIoFilterV1Alpha1Manifest#output_tag}
  */
  readonly outputTag?: boolean | cdktf.IResolvable;
  /**
  * Output time field if true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#output_time DataK8SFluentdFluentIoFilterV1Alpha1Manifest#output_time}
  */
  readonly outputTime?: boolean | cdktf.IResolvable;
  /**
  * Process value according to the specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_format DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Uses the specified time format as a fallback in the specified order. You can parse undetermined time format by using time_format_fallbacks. This options is enabled when time_type is mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_format_fallbacks DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_format_fallbacks}
  */
  readonly timeFormatFallbacks?: string;
  /**
  * parses/formats value according to this type, default is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_type DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Uses the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#timezone DataK8SFluentdFluentIoFilterV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * The @type parameter specifies the type of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#type DataK8SFluentdFluentIoFilterV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * If true, uses UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#utc DataK8SFluentdFluentIoFilterV1Alpha1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormatToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    id: cdktf.stringToTerraform(struct!.id),
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    newline: cdktf.stringToTerraform(struct!.newline),
    output_tag: cdktf.booleanToTerraform(struct!.outputTag),
    output_time: cdktf.booleanToTerraform(struct!.outputTime),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_format_fallbacks: cdktf.stringToTerraform(struct!.timeFormatFallbacks),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormatToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newline: {
      value: cdktf.stringToHclTerraform(struct!.newline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_tag: {
      value: cdktf.booleanToHclTerraform(struct!.outputTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_time: {
      value: cdktf.booleanToHclTerraform(struct!.outputTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_fallbacks: {
      value: cdktf.stringToHclTerraform(struct!.timeFormatFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._newline !== undefined) {
      hasAnyValues = true;
      internalValueResult.newline = this._newline;
    }
    if (this._outputTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputTag = this._outputTag;
    }
    if (this._outputTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputTime = this._outputTime;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeFormatFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatFallbacks = this._timeFormatFallbacks;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._id = undefined;
      this._localtime = undefined;
      this._logLevel = undefined;
      this._newline = undefined;
      this._outputTag = undefined;
      this._outputTime = undefined;
      this._timeFormat = undefined;
      this._timeFormatFallbacks = undefined;
      this._timeType = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._id = value.id;
      this._localtime = value.localtime;
      this._logLevel = value.logLevel;
      this._newline = value.newline;
      this._outputTag = value.outputTag;
      this._outputTime = value.outputTime;
      this._timeFormat = value.timeFormat;
      this._timeFormatFallbacks = value.timeFormatFallbacks;
      this._timeType = value.timeType;
      this._timezone = value.timezone;
      this._type = value.type;
      this._utc = value.utc;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
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

  // newline - computed: false, optional: true, required: false
  private _newline?: string; 
  public get newline() {
    return this.getStringAttribute('newline');
  }
  public set newline(value: string) {
    this._newline = value;
  }
  public resetNewline() {
    this._newline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newlineInput() {
    return this._newline;
  }

  // output_tag - computed: false, optional: true, required: false
  private _outputTag?: boolean | cdktf.IResolvable; 
  public get outputTag() {
    return this.getBooleanAttribute('output_tag');
  }
  public set outputTag(value: boolean | cdktf.IResolvable) {
    this._outputTag = value;
  }
  public resetOutputTag() {
    this._outputTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTagInput() {
    return this._outputTag;
  }

  // output_time - computed: false, optional: true, required: false
  private _outputTime?: boolean | cdktf.IResolvable; 
  public get outputTime() {
    return this.getBooleanAttribute('output_time');
  }
  public set outputTime(value: boolean | cdktf.IResolvable) {
    this._outputTime = value;
  }
  public resetOutputTime() {
    this._outputTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTimeInput() {
    return this._outputTime;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_format_fallbacks - computed: false, optional: true, required: false
  private _timeFormatFallbacks?: string; 
  public get timeFormatFallbacks() {
    return this.getStringAttribute('time_format_fallbacks');
  }
  public set timeFormatFallbacks(value: string) {
    this._timeFormatFallbacks = value;
  }
  public resetTimeFormatFallbacks() {
    this._timeFormatFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatFallbacksInput() {
    return this._timeFormatFallbacks;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
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

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInline {
  /**
  * If true, uses local time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#localtime DataK8SFluentdFluentIoFilterV1Alpha1Manifest#localtime}
  */
  readonly localtime?: boolean | cdktf.IResolvable;
  /**
  * Process value according to the specified format. This is available only when time_type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_format DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Uses the specified time format as a fallback in the specified order. You can parse undetermined time format by using time_format_fallbacks. This options is enabled when time_type is mixed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_format_fallbacks DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_format_fallbacks}
  */
  readonly timeFormatFallbacks?: string;
  /**
  * parses/formats value according to this type, default is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_type DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_type}
  */
  readonly timeType?: string;
  /**
  * Uses the specified timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#timezone DataK8SFluentdFluentIoFilterV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * If true, uses UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#utc DataK8SFluentdFluentIoFilterV1Alpha1Manifest#utc}
  */
  readonly utc?: boolean | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInlineToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localtime: cdktf.booleanToTerraform(struct!.localtime),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_format_fallbacks: cdktf.stringToTerraform(struct!.timeFormatFallbacks),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    utc: cdktf.booleanToTerraform(struct!.utc),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInlineToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localtime: {
      value: cdktf.booleanToHclTerraform(struct!.localtime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format_fallbacks: {
      value: cdktf.stringToHclTerraform(struct!.timeFormatFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc: {
      value: cdktf.booleanToHclTerraform(struct!.utc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localtime = this._localtime;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeFormatFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormatFallbacks = this._timeFormatFallbacks;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._utc !== undefined) {
      hasAnyValues = true;
      internalValueResult.utc = this._utc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localtime = undefined;
      this._timeFormat = undefined;
      this._timeFormatFallbacks = undefined;
      this._timeType = undefined;
      this._timezone = undefined;
      this._utc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localtime = value.localtime;
      this._timeFormat = value.timeFormat;
      this._timeFormatFallbacks = value.timeFormatFallbacks;
      this._timeType = value.timeType;
      this._timezone = value.timezone;
      this._utc = value.utc;
    }
  }

  // localtime - computed: false, optional: true, required: false
  private _localtime?: boolean | cdktf.IResolvable; 
  public get localtime() {
    return this.getBooleanAttribute('localtime');
  }
  public set localtime(value: boolean | cdktf.IResolvable) {
    this._localtime = value;
  }
  public resetLocaltime() {
    this._localtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localtimeInput() {
    return this._localtime;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_format_fallbacks - computed: false, optional: true, required: false
  private _timeFormatFallbacks?: string; 
  public get timeFormatFallbacks() {
    return this.getStringAttribute('time_format_fallbacks');
  }
  public set timeFormatFallbacks(value: string) {
    this._timeFormatFallbacks = value;
  }
  public resetTimeFormatFallbacks() {
    this._timeFormatFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatFallbacksInput() {
    return this._timeFormatFallbacks;
  }

  // time_type - computed: false, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // utc - computed: false, optional: true, required: false
  private _utc?: boolean | cdktf.IResolvable; 
  public get utc() {
    return this.getBooleanAttribute('utc');
  }
  public set utc(value: boolean | cdktf.IResolvable) {
    this._utc = value;
  }
  public resetUtc() {
    this._utc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcInput() {
    return this._utc;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInject {
  /**
  * Hostname value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#hostname DataK8SFluentdFluentIoFilterV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * The field name to inject hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#hostname_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#hostname_key}
  */
  readonly hostnameKey?: string;
  /**
  * Time section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#inline DataK8SFluentdFluentIoFilterV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInline;
  /**
  * The field name to inject tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#tag_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#tag_key}
  */
  readonly tagKey?: string;
  /**
  * The field name to inject time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#time_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * The field name to inject worker_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#worker_id_key DataK8SFluentdFluentIoFilterV1Alpha1Manifest#worker_id_key}
  */
  readonly workerIdKey?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hostname_key: cdktf.stringToTerraform(struct!.hostnameKey),
    inline: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInlineToTerraform(struct!.inline),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    worker_id_key: cdktf.stringToTerraform(struct!.workerIdKey),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInject | cdktf.IResolvable): any {
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
    hostname_key: {
      value: cdktf.stringToHclTerraform(struct!.hostnameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInline",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_id_key: {
      value: cdktf.stringToHclTerraform(struct!.workerIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hostnameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameKey = this._hostnameKey;
    }
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._workerIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerIdKey = this._workerIdKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._hostnameKey = undefined;
      this._inline.internalValue = undefined;
      this._tagKey = undefined;
      this._timeKey = undefined;
      this._workerIdKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._hostnameKey = value.hostnameKey;
      this._inline.internalValue = value.inline;
      this._tagKey = value.tagKey;
      this._timeKey = value.timeKey;
      this._workerIdKey = value.workerIdKey;
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

  // hostname_key - computed: false, optional: true, required: false
  private _hostnameKey?: string; 
  public get hostnameKey() {
    return this.getStringAttribute('hostname_key');
  }
  public set hostnameKey(value: string) {
    this._hostnameKey = value;
  }
  public resetHostnameKey() {
    this._hostnameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameKeyInput() {
    return this._hostnameKey;
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // time_key - computed: false, optional: true, required: false
  private _timeKey?: string; 
  public get timeKey() {
    return this.getStringAttribute('time_key');
  }
  public set timeKey(value: string) {
    this._timeKey = value;
  }
  public resetTimeKey() {
    this._timeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeyInput() {
    return this._timeKey;
  }

  // worker_id_key - computed: false, optional: true, required: false
  private _workerIdKey?: string; 
  public get workerIdKey() {
    return this.getStringAttribute('worker_id_key');
  }
  public set workerIdKey(value: string) {
    this._workerIdKey = value;
  }
  public resetWorkerIdKey() {
    this._workerIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerIdKeyInput() {
    return this._workerIdKey;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdout {
  /**
  * The format section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#format DataK8SFluentdFluentIoFilterV1Alpha1Manifest#format}
  */
  readonly format?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormat;
  /**
  * The inject section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#inject DataK8SFluentdFluentIoFilterV1Alpha1Manifest#inject}
  */
  readonly inject?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInject;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormatToTerraform(struct!.format),
    inject: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectToTerraform(struct!.inject),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormat",
    },
    inject: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectToHclTerraform(struct!.inject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInject",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._inject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inject = this._inject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format.internalValue = undefined;
      this._inject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format.internalValue = value.format;
      this._inject.internalValue = value.inject;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // inject - computed: false, optional: true, required: false
  private _inject = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInjectOutputReference(this, "inject");
  public get inject() {
    return this._inject;
  }
  public putInject(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutInject) {
    this._inject.internalValue = value;
  }
  public resetInject() {
    this._inject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectInput() {
    return this._inject.internalValue;
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFilters {
  /**
  * Custom plugin type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#custom_plugin DataK8SFluentdFluentIoFilterV1Alpha1Manifest#custom_plugin}
  */
  readonly customPlugin?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPlugin;
  /**
  * The filter_grep filter plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#grep DataK8SFluentdFluentIoFilterV1Alpha1Manifest#grep}
  */
  readonly grep?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrep;
  /**
  * The @log_level parameter specifies the plugin-specific logging level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#log_level DataK8SFluentdFluentIoFilterV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * The filter_parser filter plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#parser DataK8SFluentdFluentIoFilterV1Alpha1Manifest#parser}
  */
  readonly parser?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParser;
  /**
  * The filter_record_transformer filter plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#record_transformer DataK8SFluentdFluentIoFilterV1Alpha1Manifest#record_transformer}
  */
  readonly recordTransformer?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformer;
  /**
  * The filter_stdout filter plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#stdout DataK8SFluentdFluentIoFilterV1Alpha1Manifest#stdout}
  */
  readonly stdout?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdout;
  /**
  * Which tag to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#tag DataK8SFluentdFluentIoFilterV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_plugin: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPluginToTerraform(struct!.customPlugin),
    grep: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepToTerraform(struct!.grep),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    parser: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserToTerraform(struct!.parser),
    record_transformer: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerToTerraform(struct!.recordTransformer),
    stdout: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutToTerraform(struct!.stdout),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_plugin: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPluginToHclTerraform(struct!.customPlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPlugin",
    },
    grep: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepToHclTerraform(struct!.grep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrep",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParser",
    },
    record_transformer: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerToHclTerraform(struct!.recordTransformer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformer",
    },
    stdout: {
      value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutToHclTerraform(struct!.stdout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdout",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPlugin = this._customPlugin?.internalValue;
    }
    if (this._grep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grep = this._grep?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    if (this._recordTransformer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTransformer = this._recordTransformer?.internalValue;
    }
    if (this._stdout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdout = this._stdout?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPlugin.internalValue = undefined;
      this._grep.internalValue = undefined;
      this._logLevel = undefined;
      this._parser.internalValue = undefined;
      this._recordTransformer.internalValue = undefined;
      this._stdout.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPlugin.internalValue = value.customPlugin;
      this._grep.internalValue = value.grep;
      this._logLevel = value.logLevel;
      this._parser.internalValue = value.parser;
      this._recordTransformer.internalValue = value.recordTransformer;
      this._stdout.internalValue = value.stdout;
      this._tag = value.tag;
    }
  }

  // custom_plugin - computed: false, optional: true, required: false
  private _customPlugin = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPluginOutputReference(this, "custom_plugin");
  public get customPlugin() {
    return this._customPlugin;
  }
  public putCustomPlugin(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersCustomPlugin) {
    this._customPlugin.internalValue = value;
  }
  public resetCustomPlugin() {
    this._customPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginInput() {
    return this._customPlugin.internalValue;
  }

  // grep - computed: false, optional: true, required: false
  private _grep = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrepOutputReference(this, "grep");
  public get grep() {
    return this._grep;
  }
  public putGrep(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersGrep) {
    this._grep.internalValue = value;
  }
  public resetGrep() {
    this._grep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grepInput() {
    return this._grep.internalValue;
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

  // parser - computed: false, optional: true, required: false
  private _parser = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }

  // record_transformer - computed: false, optional: true, required: false
  private _recordTransformer = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformerOutputReference(this, "record_transformer");
  public get recordTransformer() {
    return this._recordTransformer;
  }
  public putRecordTransformer(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersRecordTransformer) {
    this._recordTransformer.internalValue = value;
  }
  public resetRecordTransformer() {
    this._recordTransformer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTransformerInput() {
    return this._recordTransformer.internalValue;
  }

  // stdout - computed: false, optional: true, required: false
  private _stdout = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdoutOutputReference(this, "stdout");
  public get stdout() {
    return this._stdout;
  }
  public putStdout(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersStdout) {
    this._stdout.internalValue = value;
  }
  public resetStdout() {
    this._stdout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdoutInput() {
    return this._stdout.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersOutputReference {
    return new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#filters DataK8SFluentdFluentIoFilterV1Alpha1Manifest#filters}
  */
  readonly filters?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFilters[] | cdktf.IResolvable;
}

export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersToTerraform, false)(struct!.filters),
  }
}


export function dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest k8s_fluentd_fluent_io_filter_v1alpha1_manifest}
*/
export class DataK8SFluentdFluentIoFilterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fluentd_fluent_io_filter_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluentdFluentIoFilterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluentdFluentIoFilterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SFluentdFluentIoFilterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluentdFluentIoFilterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fluentd_fluent_io_filter_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/fluentd_fluent_io_filter_v1alpha1_manifest k8s_fluentd_fluent_io_filter_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluentdFluentIoFilterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluentdFluentIoFilterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fluentd_fluent_io_filter_v1alpha1_manifest',
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
  private _metadata = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SFluentdFluentIoFilterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentdFluentIoFilterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
