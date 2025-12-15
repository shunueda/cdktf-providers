// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGlooSoloIoSettingsV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#metadata DataK8SGlooSoloIoSettingsV1Manifest#metadata}
  */
  readonly metadata: DataK8SGlooSoloIoSettingsV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#spec DataK8SGlooSoloIoSettingsV1Manifest#spec}
  */
  readonly spec?: DataK8SGlooSoloIoSettingsV1ManifestSpec;
}
export interface DataK8SGlooSoloIoSettingsV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#annotations DataK8SGlooSoloIoSettingsV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#labels DataK8SGlooSoloIoSettingsV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#name DataK8SGlooSoloIoSettingsV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#namespace DataK8SGlooSoloIoSettingsV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestMetadataToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGlooSoloIoSettingsV1ManifestMetadataToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_program_size DataK8SGlooSoloIoSettingsV1Manifest#max_program_size}
  */
  readonly maxProgramSize?: number;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2ToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_program_size: cdktf.numberToTerraform(struct!.maxProgramSize),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2ToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2 | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2 | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#google_re2 DataK8SGlooSoloIoSettingsV1Manifest#google_re2}
  */
  readonly googleRe2?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#regex DataK8SGlooSoloIoSettingsV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_re2: dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2ToTerraform(struct!.googleRe2),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_re2: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2ToHclTerraform(struct!.googleRe2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegex | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegex | cdktf.IResolvable | undefined) {
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
  private _googleRe2 = new DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2OutputReference(this, "google_re2");
  public get googleRe2() {
    return this._googleRe2;
  }
  public putGoogleRe2(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexGoogleRe2) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#exact DataK8SGlooSoloIoSettingsV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ignore_case DataK8SGlooSoloIoSettingsV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#prefix DataK8SGlooSoloIoSettingsV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#safe_regex DataK8SGlooSoloIoSettingsV1Manifest#safe_regex}
  */
  readonly safeRegex?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegex;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#suffix DataK8SGlooSoloIoSettingsV1Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    safe_regex: dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexToTerraform(struct!.safeRegex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeaders | cdktf.IResolvable): any {
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
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    safe_regex: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexToHclTerraform(struct!.safeRegex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegex",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._safeRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeRegex = this._safeRegex?.internalValue;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._safeRegex.internalValue = undefined;
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
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._safeRegex.internalValue = value.safeRegex;
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

  // safe_regex - computed: false, optional: true, required: false
  private _safeRegex = new DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegexOutputReference(this, "safe_regex");
  public get safeRegex() {
    return this._safeRegex;
  }
  public putSafeRegex(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersSafeRegex) {
    this._safeRegex.internalValue = value;
  }
  public resetSafeRegex() {
    this._safeRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeRegexInput() {
    return this._safeRegex.internalValue;
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#name DataK8SGlooSoloIoSettingsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#namespace DataK8SGlooSoloIoSettingsV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRefToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRefToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRef | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_vary_headers DataK8SGlooSoloIoSettingsV1Manifest#allowed_vary_headers}
  */
  readonly allowedVaryHeaders?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#caching_service_ref DataK8SGlooSoloIoSettingsV1Manifest#caching_service_ref}
  */
  readonly cachingServiceRef?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_payload_size DataK8SGlooSoloIoSettingsV1Manifest#max_payload_size}
  */
  readonly maxPayloadSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#timeout DataK8SGlooSoloIoSettingsV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_vary_headers: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersToTerraform, false)(struct!.allowedVaryHeaders),
    caching_service_ref: dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRefToTerraform(struct!.cachingServiceRef),
    max_payload_size: cdktf.numberToTerraform(struct!.maxPayloadSize),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_vary_headers: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersToHclTerraform, false)(struct!.allowedVaryHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersList",
    },
    caching_service_ref: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRefToHclTerraform(struct!.cachingServiceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRef",
    },
    max_payload_size: {
      value: cdktf.numberToHclTerraform(struct!.maxPayloadSize),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedVaryHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVaryHeaders = this._allowedVaryHeaders?.internalValue;
    }
    if (this._cachingServiceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingServiceRef = this._cachingServiceRef?.internalValue;
    }
    if (this._maxPayloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPayloadSize = this._maxPayloadSize;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedVaryHeaders.internalValue = undefined;
      this._cachingServiceRef.internalValue = undefined;
      this._maxPayloadSize = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedVaryHeaders.internalValue = value.allowedVaryHeaders;
      this._cachingServiceRef.internalValue = value.cachingServiceRef;
      this._maxPayloadSize = value.maxPayloadSize;
      this._timeout = value.timeout;
    }
  }

  // allowed_vary_headers - computed: false, optional: true, required: false
  private _allowedVaryHeaders = new DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeadersList(this, "allowed_vary_headers", false);
  public get allowedVaryHeaders() {
    return this._allowedVaryHeaders;
  }
  public putAllowedVaryHeaders(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerAllowedVaryHeaders[] | cdktf.IResolvable) {
    this._allowedVaryHeaders.internalValue = value;
  }
  public resetAllowedVaryHeaders() {
    this._allowedVaryHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVaryHeadersInput() {
    return this._allowedVaryHeaders.internalValue;
  }

  // caching_service_ref - computed: false, optional: true, required: false
  private _cachingServiceRef = new DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRefOutputReference(this, "caching_service_ref");
  public get cachingServiceRef() {
    return this._cachingServiceRef;
  }
  public putCachingServiceRef(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerCachingServiceRef) {
    this._cachingServiceRef.internalValue = value;
  }
  public resetCachingServiceRef() {
    this._cachingServiceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingServiceRefInput() {
    return this._cachingServiceRef.internalValue;
  }

  // max_payload_size - computed: false, optional: true, required: false
  private _maxPayloadSize?: number; 
  public get maxPayloadSize() {
    return this.getNumberAttribute('max_payload_size');
  }
  public set maxPayloadSize(value: number) {
    this._maxPayloadSize = value;
  }
  public resetMaxPayloadSize() {
    this._maxPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPayloadSizeInput() {
    return this._maxPayloadSize;
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
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#api_explorer_enabled DataK8SGlooSoloIoSettingsV1Manifest#api_explorer_enabled}
  */
  readonly apiExplorerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#read_only DataK8SGlooSoloIoSettingsV1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_explorer_enabled: cdktf.booleanToTerraform(struct!.apiExplorerEnabled),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_explorer_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.apiExplorerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiExplorerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiExplorerEnabled = this._apiExplorerEnabled;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiExplorerEnabled = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiExplorerEnabled = value.apiExplorerEnabled;
      this._readOnly = value.readOnly;
    }
  }

  // api_explorer_enabled - computed: false, optional: true, required: false
  private _apiExplorerEnabled?: boolean | cdktf.IResolvable; 
  public get apiExplorerEnabled() {
    return this.getBooleanAttribute('api_explorer_enabled');
  }
  public set apiExplorerEnabled(value: boolean | cdktf.IResolvable) {
    this._apiExplorerEnabled = value;
  }
  public resetApiExplorerEnabled() {
    this._apiExplorerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiExplorerEnabledInput() {
    return this._apiExplorerEnabled;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#data_centers DataK8SGlooSoloIoSettingsV1Manifest#data_centers}
  */
  readonly dataCenters?: string[];
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscoveryToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_centers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataCenters),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscoveryToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_centers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataCenters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCenters = this._dataCenters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataCenters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataCenters = value.dataCenters;
    }
  }

  // data_centers - computed: false, optional: true, required: false
  private _dataCenters?: string[]; 
  public get dataCenters() {
    return this.getListAttribute('data_centers');
  }
  public set dataCenters(value: string[]) {
    this._dataCenters = value;
  }
  public resetDataCenters() {
    this._dataCenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentersInput() {
    return this._dataCenters;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecConsul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#address DataK8SGlooSoloIoSettingsV1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_file DataK8SGlooSoloIoSettingsV1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_path DataK8SGlooSoloIoSettingsV1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#cert_file DataK8SGlooSoloIoSettingsV1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#datacenter DataK8SGlooSoloIoSettingsV1Manifest#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#dns_address DataK8SGlooSoloIoSettingsV1Manifest#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#dns_polling_interval DataK8SGlooSoloIoSettingsV1Manifest#dns_polling_interval}
  */
  readonly dnsPollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#http_address DataK8SGlooSoloIoSettingsV1Manifest#http_address}
  */
  readonly httpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#insecure_skip_verify DataK8SGlooSoloIoSettingsV1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#key_file DataK8SGlooSoloIoSettingsV1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#password DataK8SGlooSoloIoSettingsV1Manifest#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#service_discovery DataK8SGlooSoloIoSettingsV1Manifest#service_discovery}
  */
  readonly serviceDiscovery?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscovery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#token DataK8SGlooSoloIoSettingsV1Manifest#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#username DataK8SGlooSoloIoSettingsV1Manifest#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#wait_time DataK8SGlooSoloIoSettingsV1Manifest#wait_time}
  */
  readonly waitTime?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    dns_address: cdktf.stringToTerraform(struct!.dnsAddress),
    dns_polling_interval: cdktf.stringToTerraform(struct!.dnsPollingInterval),
    http_address: cdktf.stringToTerraform(struct!.httpAddress),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    password: cdktf.stringToTerraform(struct!.password),
    service_discovery: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscoveryToTerraform(struct!.serviceDiscovery),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
    wait_time: cdktf.stringToTerraform(struct!.waitTime),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_address: {
      value: cdktf.stringToHclTerraform(struct!.dnsAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_polling_interval: {
      value: cdktf.stringToHclTerraform(struct!.dnsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_address: {
      value: cdktf.stringToHclTerraform(struct!.httpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_discovery: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscoveryToHclTerraform(struct!.serviceDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscovery",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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
    wait_time: {
      value: cdktf.stringToHclTerraform(struct!.waitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecConsulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecConsul | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._dnsAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAddress = this._dnsAddress;
    }
    if (this._dnsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPollingInterval = this._dnsPollingInterval;
    }
    if (this._httpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAddress = this._httpAddress;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._serviceDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDiscovery = this._serviceDiscovery?.internalValue;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._waitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTime = this._waitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsul | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._caFile = undefined;
      this._caPath = undefined;
      this._certFile = undefined;
      this._datacenter = undefined;
      this._dnsAddress = undefined;
      this._dnsPollingInterval = undefined;
      this._httpAddress = undefined;
      this._insecureSkipVerify = undefined;
      this._keyFile = undefined;
      this._password = undefined;
      this._serviceDiscovery.internalValue = undefined;
      this._token = undefined;
      this._username = undefined;
      this._waitTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._caFile = value.caFile;
      this._caPath = value.caPath;
      this._certFile = value.certFile;
      this._datacenter = value.datacenter;
      this._dnsAddress = value.dnsAddress;
      this._dnsPollingInterval = value.dnsPollingInterval;
      this._httpAddress = value.httpAddress;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keyFile = value.keyFile;
      this._password = value.password;
      this._serviceDiscovery.internalValue = value.serviceDiscovery;
      this._token = value.token;
      this._username = value.username;
      this._waitTime = value.waitTime;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // dns_address - computed: false, optional: true, required: false
  private _dnsAddress?: string; 
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }
  public set dnsAddress(value: string) {
    this._dnsAddress = value;
  }
  public resetDnsAddress() {
    this._dnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressInput() {
    return this._dnsAddress;
  }

  // dns_polling_interval - computed: false, optional: true, required: false
  private _dnsPollingInterval?: string; 
  public get dnsPollingInterval() {
    return this.getStringAttribute('dns_polling_interval');
  }
  public set dnsPollingInterval(value: string) {
    this._dnsPollingInterval = value;
  }
  public resetDnsPollingInterval() {
    this._dnsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPollingIntervalInput() {
    return this._dnsPollingInterval;
  }

  // http_address - computed: false, optional: true, required: false
  private _httpAddress?: string; 
  public get httpAddress() {
    return this.getStringAttribute('http_address');
  }
  public set httpAddress(value: string) {
    this._httpAddress = value;
  }
  public resetHttpAddress() {
    this._httpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAddressInput() {
    return this._httpAddress;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery = new DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscoveryOutputReference(this, "service_discovery");
  public get serviceDiscovery() {
    return this._serviceDiscovery;
  }
  public putServiceDiscovery(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulServiceDiscovery) {
    this._serviceDiscovery.internalValue = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // wait_time - computed: false, optional: true, required: false
  private _waitTime?: string; 
  public get waitTime() {
    return this.getStringAttribute('wait_time');
  }
  public set waitTime(value: string) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#use_cache DataK8SGlooSoloIoSettingsV1Manifest#use_cache}
  */
  readonly useCache?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_cache: cdktf.booleanToTerraform(struct!.useCache),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCache = this._useCache;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useCache = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useCache = value.useCache;
    }
  }

  // use_cache - computed: false, optional: true, required: false
  private _useCache?: boolean | cdktf.IResolvable; 
  public get useCache() {
    return this.getBooleanAttribute('use_cache');
  }
  public set useCache(value: boolean | cdktf.IResolvable) {
    this._useCache = value;
  }
  public resetUseCache() {
    this._useCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCacheInput() {
    return this._useCache;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#name DataK8SGlooSoloIoSettingsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#namespace DataK8SGlooSoloIoSettingsV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCaToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCaToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCa | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCa | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#consistency_mode DataK8SGlooSoloIoSettingsV1Manifest#consistency_mode}
  */
  readonly consistencyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#eds_blocking_queries DataK8SGlooSoloIoSettingsV1Manifest#eds_blocking_queries}
  */
  readonly edsBlockingQueries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#query_options DataK8SGlooSoloIoSettingsV1Manifest#query_options}
  */
  readonly queryOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#root_ca DataK8SGlooSoloIoSettingsV1Manifest#root_ca}
  */
  readonly rootCa?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#service_tags_allowlist DataK8SGlooSoloIoSettingsV1Manifest#service_tags_allowlist}
  */
  readonly serviceTagsAllowlist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#split_tls_services DataK8SGlooSoloIoSettingsV1Manifest#split_tls_services}
  */
  readonly splitTlsServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#tls_tag_name DataK8SGlooSoloIoSettingsV1Manifest#tls_tag_name}
  */
  readonly tlsTagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#use_tls_tagging DataK8SGlooSoloIoSettingsV1Manifest#use_tls_tagging}
  */
  readonly useTlsTagging?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistency_mode: cdktf.stringToTerraform(struct!.consistencyMode),
    eds_blocking_queries: cdktf.booleanToTerraform(struct!.edsBlockingQueries),
    query_options: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptionsToTerraform(struct!.queryOptions),
    root_ca: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCaToTerraform(struct!.rootCa),
    service_tags_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceTagsAllowlist),
    split_tls_services: cdktf.booleanToTerraform(struct!.splitTlsServices),
    tls_tag_name: cdktf.stringToTerraform(struct!.tlsTagName),
    use_tls_tagging: cdktf.booleanToTerraform(struct!.useTlsTagging),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistency_mode: {
      value: cdktf.stringToHclTerraform(struct!.consistencyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eds_blocking_queries: {
      value: cdktf.booleanToHclTerraform(struct!.edsBlockingQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptionsToHclTerraform(struct!.queryOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptions",
    },
    root_ca: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCaToHclTerraform(struct!.rootCa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCa",
    },
    service_tags_allowlist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceTagsAllowlist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    split_tls_services: {
      value: cdktf.booleanToHclTerraform(struct!.splitTlsServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsTagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tls_tagging: {
      value: cdktf.booleanToHclTerraform(struct!.useTlsTagging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistencyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistencyMode = this._consistencyMode;
    }
    if (this._edsBlockingQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.edsBlockingQueries = this._edsBlockingQueries;
    }
    if (this._queryOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryOptions = this._queryOptions?.internalValue;
    }
    if (this._rootCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCa = this._rootCa?.internalValue;
    }
    if (this._serviceTagsAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTagsAllowlist = this._serviceTagsAllowlist;
    }
    if (this._splitTlsServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitTlsServices = this._splitTlsServices;
    }
    if (this._tlsTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTagName = this._tlsTagName;
    }
    if (this._useTlsTagging !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTlsTagging = this._useTlsTagging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistencyMode = undefined;
      this._edsBlockingQueries = undefined;
      this._queryOptions.internalValue = undefined;
      this._rootCa.internalValue = undefined;
      this._serviceTagsAllowlist = undefined;
      this._splitTlsServices = undefined;
      this._tlsTagName = undefined;
      this._useTlsTagging = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistencyMode = value.consistencyMode;
      this._edsBlockingQueries = value.edsBlockingQueries;
      this._queryOptions.internalValue = value.queryOptions;
      this._rootCa.internalValue = value.rootCa;
      this._serviceTagsAllowlist = value.serviceTagsAllowlist;
      this._splitTlsServices = value.splitTlsServices;
      this._tlsTagName = value.tlsTagName;
      this._useTlsTagging = value.useTlsTagging;
    }
  }

  // consistency_mode - computed: false, optional: true, required: false
  private _consistencyMode?: string; 
  public get consistencyMode() {
    return this.getStringAttribute('consistency_mode');
  }
  public set consistencyMode(value: string) {
    this._consistencyMode = value;
  }
  public resetConsistencyMode() {
    this._consistencyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyModeInput() {
    return this._consistencyMode;
  }

  // eds_blocking_queries - computed: false, optional: true, required: false
  private _edsBlockingQueries?: boolean | cdktf.IResolvable; 
  public get edsBlockingQueries() {
    return this.getBooleanAttribute('eds_blocking_queries');
  }
  public set edsBlockingQueries(value: boolean | cdktf.IResolvable) {
    this._edsBlockingQueries = value;
  }
  public resetEdsBlockingQueries() {
    this._edsBlockingQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edsBlockingQueriesInput() {
    return this._edsBlockingQueries;
  }

  // query_options - computed: false, optional: true, required: false
  private _queryOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptionsOutputReference(this, "query_options");
  public get queryOptions() {
    return this._queryOptions;
  }
  public putQueryOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryQueryOptions) {
    this._queryOptions.internalValue = value;
  }
  public resetQueryOptions() {
    this._queryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOptionsInput() {
    return this._queryOptions.internalValue;
  }

  // root_ca - computed: false, optional: true, required: false
  private _rootCa = new DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCaOutputReference(this, "root_ca");
  public get rootCa() {
    return this._rootCa;
  }
  public putRootCa(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryRootCa) {
    this._rootCa.internalValue = value;
  }
  public resetRootCa() {
    this._rootCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaInput() {
    return this._rootCa.internalValue;
  }

  // service_tags_allowlist - computed: false, optional: true, required: false
  private _serviceTagsAllowlist?: string[]; 
  public get serviceTagsAllowlist() {
    return this.getListAttribute('service_tags_allowlist');
  }
  public set serviceTagsAllowlist(value: string[]) {
    this._serviceTagsAllowlist = value;
  }
  public resetServiceTagsAllowlist() {
    this._serviceTagsAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagsAllowlistInput() {
    return this._serviceTagsAllowlist;
  }

  // split_tls_services - computed: false, optional: true, required: false
  private _splitTlsServices?: boolean | cdktf.IResolvable; 
  public get splitTlsServices() {
    return this.getBooleanAttribute('split_tls_services');
  }
  public set splitTlsServices(value: boolean | cdktf.IResolvable) {
    this._splitTlsServices = value;
  }
  public resetSplitTlsServices() {
    this._splitTlsServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTlsServicesInput() {
    return this._splitTlsServices;
  }

  // tls_tag_name - computed: false, optional: true, required: false
  private _tlsTagName?: string; 
  public get tlsTagName() {
    return this.getStringAttribute('tls_tag_name');
  }
  public set tlsTagName(value: string) {
    this._tlsTagName = value;
  }
  public resetTlsTagName() {
    this._tlsTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTagNameInput() {
    return this._tlsTagName;
  }

  // use_tls_tagging - computed: false, optional: true, required: false
  private _useTlsTagging?: boolean | cdktf.IResolvable; 
  public get useTlsTagging() {
    return this.getBooleanAttribute('use_tls_tagging');
  }
  public set useTlsTagging(value: boolean | cdktf.IResolvable) {
    this._useTlsTagging = value;
  }
  public resetUseTlsTagging() {
    this._useTlsTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsTaggingInput() {
    return this._useTlsTagging;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#root_key DataK8SGlooSoloIoSettingsV1Manifest#root_key}
  */
  readonly rootKey?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSourceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_key: cdktf.stringToTerraform(struct!.rootKey),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSourceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_key: {
      value: cdktf.stringToHclTerraform(struct!.rootKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootKey = this._rootKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rootKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rootKey = value.rootKey;
    }
  }

  // root_key - computed: false, optional: true, required: false
  private _rootKey?: string; 
  public get rootKey() {
    return this.getStringAttribute('root_key');
  }
  public set rootKey(value: string) {
    this._rootKey = value;
  }
  public resetRootKey() {
    this._rootKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootKeyInput() {
    return this._rootKey;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#root_key DataK8SGlooSoloIoSettingsV1Manifest#root_key}
  */
  readonly rootKey?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSourceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_key: cdktf.stringToTerraform(struct!.rootKey),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSourceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_key: {
      value: cdktf.stringToHclTerraform(struct!.rootKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootKey = this._rootKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rootKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rootKey = value.rootKey;
    }
  }

  // root_key - computed: false, optional: true, required: false
  private _rootKey?: string; 
  public get rootKey() {
    return this.getStringAttribute('root_key');
  }
  public set rootKey(value: string) {
    this._rootKey = value;
  }
  public resetRootKey() {
    this._rootKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootKeyInput() {
    return this._rootKey;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#directory DataK8SGlooSoloIoSettingsV1Manifest#directory}
  */
  readonly directory?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSourceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSourceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#directory DataK8SGlooSoloIoSettingsV1Manifest#directory}
  */
  readonly directory?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSourceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSourceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#directory DataK8SGlooSoloIoSettingsV1Manifest#directory}
  */
  readonly directory?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSourceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSourceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#graphql_enabled DataK8SGlooSoloIoSettingsV1Manifest#graphql_enabled}
  */
  readonly graphqlEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graphql_enabled: cdktf.booleanToTerraform(struct!.graphqlEnabled),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graphql_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.graphqlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphqlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlEnabled = this._graphqlEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graphqlEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graphqlEnabled = value.graphqlEnabled;
    }
  }

  // graphql_enabled - computed: false, optional: true, required: false
  private _graphqlEnabled?: boolean | cdktf.IResolvable; 
  public get graphqlEnabled() {
    return this.getBooleanAttribute('graphql_enabled');
  }
  public set graphqlEnabled(value: boolean | cdktf.IResolvable) {
    this._graphqlEnabled = value;
  }
  public resetGraphqlEnabled() {
    this._graphqlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlEnabledInput() {
    return this._graphqlEnabled;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#enabled DataK8SGlooSoloIoSettingsV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#watch_labels DataK8SGlooSoloIoSettingsV1Manifest#watch_labels}
  */
  readonly watchLabels?: { [key: string]: string };
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    watch_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.watchLabels),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptions | cdktf.IResolvable): any {
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
    watch_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.watchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._watchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchLabels = this._watchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._watchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._watchLabels = value.watchLabels;
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

  // watch_labels - computed: false, optional: true, required: false
  private _watchLabels?: { [key: string]: string }; 
  public get watchLabels() {
    return this.getStringMapAttribute('watch_labels');
  }
  public set watchLabels(value: { [key: string]: string }) {
    this._watchLabels = value;
  }
  public resetWatchLabels() {
    this._watchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchLabelsInput() {
    return this._watchLabels;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#fds_mode DataK8SGlooSoloIoSettingsV1Manifest#fds_mode}
  */
  readonly fdsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#fds_options DataK8SGlooSoloIoSettingsV1Manifest#fds_options}
  */
  readonly fdsOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#uds_options DataK8SGlooSoloIoSettingsV1Manifest#uds_options}
  */
  readonly udsOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptions;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fds_mode: cdktf.stringToTerraform(struct!.fdsMode),
    fds_options: dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptionsToTerraform(struct!.fdsOptions),
    uds_options: dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptionsToTerraform(struct!.udsOptions),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fds_mode: {
      value: cdktf.stringToHclTerraform(struct!.fdsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fds_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptionsToHclTerraform(struct!.fdsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptions",
    },
    uds_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptionsToHclTerraform(struct!.udsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fdsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fdsMode = this._fdsMode;
    }
    if (this._fdsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fdsOptions = this._fdsOptions?.internalValue;
    }
    if (this._udsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udsOptions = this._udsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fdsMode = undefined;
      this._fdsOptions.internalValue = undefined;
      this._udsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fdsMode = value.fdsMode;
      this._fdsOptions.internalValue = value.fdsOptions;
      this._udsOptions.internalValue = value.udsOptions;
    }
  }

  // fds_mode - computed: false, optional: true, required: false
  private _fdsMode?: string; 
  public get fdsMode() {
    return this.getStringAttribute('fds_mode');
  }
  public set fdsMode(value: string) {
    this._fdsMode = value;
  }
  public resetFdsMode() {
    this._fdsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsModeInput() {
    return this._fdsMode;
  }

  // fds_options - computed: false, optional: true, required: false
  private _fdsOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptionsOutputReference(this, "fds_options");
  public get fdsOptions() {
    return this._fdsOptions;
  }
  public putFdsOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryFdsOptions) {
    this._fdsOptions.internalValue = value;
  }
  public resetFdsOptions() {
    this._fdsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsOptionsInput() {
    return this._fdsOptions.internalValue;
  }

  // uds_options - computed: false, optional: true, required: false
  private _udsOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptionsOutputReference(this, "uds_options");
  public get udsOptions() {
    return this._udsOptions;
  }
  public putUdsOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryUdsOptions) {
    this._udsOptions.internalValue = value;
  }
  public resetUdsOptions() {
    this._udsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udsOptionsInput() {
    return this._udsOptions.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#predicate DataK8SGlooSoloIoSettingsV1Manifest#predicate}
  */
  readonly predicate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#stage DataK8SGlooSoloIoSettingsV1Manifest#stage}
  */
  readonly stage?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStageToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predicate: cdktf.stringToTerraform(struct!.predicate),
    stage: cdktf.stringToTerraform(struct!.stage),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStageToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predicate: {
      value: cdktf.stringToHclTerraform(struct!.predicate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktf.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predicate = undefined;
      this._stage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predicate = value.predicate;
      this._stage = value.stage;
    }
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate?: string; 
  public get predicate() {
    return this.getStringAttribute('predicate');
  }
  public set predicate(value: string) {
    this._predicate = value;
  }
  public resetPredicate() {
    this._predicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_program_size DataK8SGlooSoloIoSettingsV1Manifest#max_program_size}
  */
  readonly maxProgramSize?: number;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2ToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_program_size: cdktf.numberToTerraform(struct!.maxProgramSize),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2ToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2 | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2 | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#google_re2 DataK8SGlooSoloIoSettingsV1Manifest#google_re2}
  */
  readonly googleRe2?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#regex DataK8SGlooSoloIoSettingsV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_re2: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2ToTerraform(struct!.googleRe2),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_re2: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2ToHclTerraform(struct!.googleRe2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegex | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegex | cdktf.IResolvable | undefined) {
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
  private _googleRe2 = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2OutputReference(this, "google_re2");
  public get googleRe2() {
    return this._googleRe2;
  }
  public putGoogleRe2(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexGoogleRe2) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#exact DataK8SGlooSoloIoSettingsV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ignore_case DataK8SGlooSoloIoSettingsV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#prefix DataK8SGlooSoloIoSettingsV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#safe_regex DataK8SGlooSoloIoSettingsV1Manifest#safe_regex}
  */
  readonly safeRegex?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegex;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#suffix DataK8SGlooSoloIoSettingsV1Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    safe_regex: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexToTerraform(struct!.safeRegex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatterns | cdktf.IResolvable): any {
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
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    safe_regex: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexToHclTerraform(struct!.safeRegex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegex",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._safeRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeRegex = this._safeRegex?.internalValue;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._safeRegex.internalValue = undefined;
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
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._safeRegex.internalValue = value.safeRegex;
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

  // safe_regex - computed: false, optional: true, required: false
  private _safeRegex = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegexOutputReference(this, "safe_regex");
  public get safeRegex() {
    return this._safeRegex;
  }
  public putSafeRegex(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsSafeRegex) {
    this._safeRegex.internalValue = value;
  }
  public resetSafeRegex() {
    this._safeRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeRegexInput() {
    return this._safeRegex.internalValue;
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#patterns DataK8SGlooSoloIoSettingsV1Manifest#patterns}
  */
  readonly patterns?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatterns[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsToTerraform, false)(struct!.patterns),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsToHclTerraform, false)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patterns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_program_size DataK8SGlooSoloIoSettingsV1Manifest#max_program_size}
  */
  readonly maxProgramSize?: number;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2ToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_program_size: cdktf.numberToTerraform(struct!.maxProgramSize),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2ToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2 | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2 | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#google_re2 DataK8SGlooSoloIoSettingsV1Manifest#google_re2}
  */
  readonly googleRe2?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#regex DataK8SGlooSoloIoSettingsV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_re2: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2ToTerraform(struct!.googleRe2),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_re2: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2ToHclTerraform(struct!.googleRe2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegex | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegex | cdktf.IResolvable | undefined) {
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
  private _googleRe2 = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2OutputReference(this, "google_re2");
  public get googleRe2() {
    return this._googleRe2;
  }
  public putGoogleRe2(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexGoogleRe2) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#exact DataK8SGlooSoloIoSettingsV1Manifest#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ignore_case DataK8SGlooSoloIoSettingsV1Manifest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#prefix DataK8SGlooSoloIoSettingsV1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#safe_regex DataK8SGlooSoloIoSettingsV1Manifest#safe_regex}
  */
  readonly safeRegex?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegex;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#suffix DataK8SGlooSoloIoSettingsV1Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    safe_regex: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexToTerraform(struct!.safeRegex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatterns | cdktf.IResolvable): any {
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
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    safe_regex: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexToHclTerraform(struct!.safeRegex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegex",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._safeRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeRegex = this._safeRegex?.internalValue;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._ignoreCase = undefined;
      this._prefix = undefined;
      this._safeRegex.internalValue = undefined;
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
      this._ignoreCase = value.ignoreCase;
      this._prefix = value.prefix;
      this._safeRegex.internalValue = value.safeRegex;
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

  // safe_regex - computed: false, optional: true, required: false
  private _safeRegex = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegexOutputReference(this, "safe_regex");
  public get safeRegex() {
    return this._safeRegex;
  }
  public putSafeRegex(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsSafeRegex) {
    this._safeRegex.internalValue = value;
  }
  public resetSafeRegex() {
    this._safeRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeRegexInput() {
    return this._safeRegex.internalValue;
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#patterns DataK8SGlooSoloIoSettingsV1Manifest#patterns}
  */
  readonly patterns?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatterns[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsToTerraform, false)(struct!.patterns),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsToHclTerraform, false)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patterns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_headers DataK8SGlooSoloIoSettingsV1Manifest#allowed_headers}
  */
  readonly allowedHeaders?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disallowed_headers DataK8SGlooSoloIoSettingsV1Manifest#disallowed_headers}
  */
  readonly disallowedHeaders?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeaders;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersToTerraform(struct!.allowedHeaders),
    disallowed_headers: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersToTerraform(struct!.disallowedHeaders),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersToHclTerraform(struct!.allowedHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeaders",
    },
    disallowed_headers: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersToHclTerraform(struct!.disallowedHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeaders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders?.internalValue;
    }
    if (this._disallowedHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowedHeaders = this._disallowedHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders.internalValue = undefined;
      this._disallowedHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders.internalValue = value.allowedHeaders;
      this._disallowedHeaders.internalValue = value.disallowedHeaders;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeadersOutputReference(this, "allowed_headers");
  public get allowedHeaders() {
    return this._allowedHeaders;
  }
  public putAllowedHeaders(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesAllowedHeaders) {
    this._allowedHeaders.internalValue = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders.internalValue;
  }

  // disallowed_headers - computed: false, optional: true, required: false
  private _disallowedHeaders = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeadersOutputReference(this, "disallowed_headers");
  public get disallowedHeaders() {
    return this._disallowedHeaders;
  }
  public putDisallowedHeaders(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesDisallowedHeaders) {
    this._disallowedHeaders.internalValue = value;
  }
  public resetDisallowedHeaders() {
    this._disallowedHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedHeadersInput() {
    return this._disallowedHeaders.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#name DataK8SGlooSoloIoSettingsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#namespace DataK8SGlooSoloIoSettingsV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRefToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRefToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRef | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#key DataK8SGlooSoloIoSettingsV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#value DataK8SGlooSoloIoSettingsV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadata | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadata | cdktf.IResolvable | undefined) {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadata[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOff {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#base_interval DataK8SGlooSoloIoSettingsV1Manifest#base_interval}
  */
  readonly baseInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_interval DataK8SGlooSoloIoSettingsV1Manifest#max_interval}
  */
  readonly maxInterval?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOffToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_interval: cdktf.stringToTerraform(struct!.baseInterval),
    max_interval: cdktf.stringToTerraform(struct!.maxInterval),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOffToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_interval: {
      value: cdktf.stringToHclTerraform(struct!.baseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval: {
      value: cdktf.stringToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInterval = this._baseInterval;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseInterval = undefined;
      this._maxInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseInterval = value.baseInterval;
      this._maxInterval = value.maxInterval;
    }
  }

  // base_interval - computed: false, optional: true, required: false
  private _baseInterval?: string; 
  public get baseInterval() {
    return this.getStringAttribute('base_interval');
  }
  public set baseInterval(value: string) {
    this._baseInterval = value;
  }
  public resetBaseInterval() {
    this._baseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseIntervalInput() {
    return this._baseInterval;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: string; 
  public get maxInterval() {
    return this.getStringAttribute('max_interval');
  }
  public set maxInterval(value: string) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#num_retries DataK8SGlooSoloIoSettingsV1Manifest#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#retry_back_off DataK8SGlooSoloIoSettingsV1Manifest#retry_back_off}
  */
  readonly retryBackOff?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOff;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_back_off: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOffToTerraform(struct!.retryBackOff),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_back_off: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOffToHclTerraform(struct!.retryBackOff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOff",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryBackOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryBackOff = this._retryBackOff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numRetries = undefined;
      this._retryBackOff.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numRetries = value.numRetries;
      this._retryBackOff.internalValue = value.retryBackOff;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_back_off - computed: false, optional: true, required: false
  private _retryBackOff = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOffOutputReference(this, "retry_back_off");
  public get retryBackOff() {
    return this._retryBackOff;
  }
  public putRetryBackOff(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyRetryBackOff) {
    this._retryBackOff.internalValue = value;
  }
  public resetRetryBackOff() {
    this._retryBackOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryBackOffInput() {
    return this._retryBackOff.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#authority DataK8SGlooSoloIoSettingsV1Manifest#authority}
  */
  readonly authority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ext_proc_server_ref DataK8SGlooSoloIoSettingsV1Manifest#ext_proc_server_ref}
  */
  readonly extProcServerRef?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#initial_metadata DataK8SGlooSoloIoSettingsV1Manifest#initial_metadata}
  */
  readonly initialMetadata?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadata[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#retry_policy DataK8SGlooSoloIoSettingsV1Manifest#retry_policy}
  */
  readonly retryPolicy?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#timeout DataK8SGlooSoloIoSettingsV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    ext_proc_server_ref: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRefToTerraform(struct!.extProcServerRef),
    initial_metadata: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataToTerraform, false)(struct!.initialMetadata),
    retry_policy: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcService | cdktf.IResolvable): any {
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
    ext_proc_server_ref: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRefToHclTerraform(struct!.extProcServerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRef",
    },
    initial_metadata: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataToHclTerraform, false)(struct!.initialMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataList",
    },
    retry_policy: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicy",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._extProcServerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extProcServerRef = this._extProcServerRef?.internalValue;
    }
    if (this._initialMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialMetadata = this._initialMetadata?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._extProcServerRef.internalValue = undefined;
      this._initialMetadata.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._extProcServerRef.internalValue = value.extProcServerRef;
      this._initialMetadata.internalValue = value.initialMetadata;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout = value.timeout;
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

  // ext_proc_server_ref - computed: false, optional: true, required: false
  private _extProcServerRef = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRefOutputReference(this, "ext_proc_server_ref");
  public get extProcServerRef() {
    return this._extProcServerRef;
  }
  public putExtProcServerRef(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceExtProcServerRef) {
    this._extProcServerRef.internalValue = value;
  }
  public resetExtProcServerRef() {
    this._extProcServerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extProcServerRefInput() {
    return this._extProcServerRef.internalValue;
  }

  // initial_metadata - computed: false, optional: true, required: false
  private _initialMetadata = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadataList(this, "initial_metadata", false);
  public get initialMetadata() {
    return this._initialMetadata;
  }
  public putInitialMetadata(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceInitialMetadata[] | cdktf.IResolvable) {
    this._initialMetadata.internalValue = value;
  }
  public resetInitialMetadata() {
    this._initialMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialMetadataInput() {
    return this._initialMetadata.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
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
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_program_size DataK8SGlooSoloIoSettingsV1Manifest#max_program_size}
  */
  readonly maxProgramSize?: number;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2ToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_program_size: cdktf.numberToTerraform(struct!.maxProgramSize),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2ToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2 | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2 | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#google_re2 DataK8SGlooSoloIoSettingsV1Manifest#google_re2}
  */
  readonly googleRe2?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#regex DataK8SGlooSoloIoSettingsV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_re2: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2ToTerraform(struct!.googleRe2),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_re2: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2ToHclTerraform(struct!.googleRe2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpression | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpression | cdktf.IResolvable | undefined) {
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
  private _googleRe2 = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2OutputReference(this, "google_re2");
  public get googleRe2() {
    return this._googleRe2;
  }
  public putGoogleRe2(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionGoogleRe2) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_program_size DataK8SGlooSoloIoSettingsV1Manifest#max_program_size}
  */
  readonly maxProgramSize?: number;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2ToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_program_size: cdktf.numberToTerraform(struct!.maxProgramSize),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2ToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2 | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2 | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#google_re2 DataK8SGlooSoloIoSettingsV1Manifest#google_re2}
  */
  readonly googleRe2?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#regex DataK8SGlooSoloIoSettingsV1Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_re2: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2ToTerraform(struct!.googleRe2),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_re2: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2ToHclTerraform(struct!.googleRe2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpression | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpression | cdktf.IResolvable | undefined) {
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
  private _googleRe2 = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2OutputReference(this, "google_re2");
  public get googleRe2() {
    return this._googleRe2;
  }
  public putGoogleRe2(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionGoogleRe2) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allow_all_routing DataK8SGlooSoloIoSettingsV1Manifest#allow_all_routing}
  */
  readonly allowAllRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allow_envoy DataK8SGlooSoloIoSettingsV1Manifest#allow_envoy}
  */
  readonly allowEnvoy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allow_expression DataK8SGlooSoloIoSettingsV1Manifest#allow_expression}
  */
  readonly allowExpression?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disallow_all DataK8SGlooSoloIoSettingsV1Manifest#disallow_all}
  */
  readonly disallowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disallow_expression DataK8SGlooSoloIoSettingsV1Manifest#disallow_expression}
  */
  readonly disallowExpression?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disallow_is_error DataK8SGlooSoloIoSettingsV1Manifest#disallow_is_error}
  */
  readonly disallowIsError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disallow_system DataK8SGlooSoloIoSettingsV1Manifest#disallow_system}
  */
  readonly disallowSystem?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_routing: cdktf.booleanToTerraform(struct!.allowAllRouting),
    allow_envoy: cdktf.booleanToTerraform(struct!.allowEnvoy),
    allow_expression: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionToTerraform(struct!.allowExpression),
    disallow_all: cdktf.booleanToTerraform(struct!.disallowAll),
    disallow_expression: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionToTerraform(struct!.disallowExpression),
    disallow_is_error: cdktf.booleanToTerraform(struct!.disallowIsError),
    disallow_system: cdktf.booleanToTerraform(struct!.disallowSystem),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_routing: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_envoy: {
      value: cdktf.booleanToHclTerraform(struct!.allowEnvoy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_expression: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionToHclTerraform(struct!.allowExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpression",
    },
    disallow_all: {
      value: cdktf.booleanToHclTerraform(struct!.disallowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallow_expression: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionToHclTerraform(struct!.disallowExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpression",
    },
    disallow_is_error: {
      value: cdktf.booleanToHclTerraform(struct!.disallowIsError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallow_system: {
      value: cdktf.booleanToHclTerraform(struct!.disallowSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllRouting = this._allowAllRouting;
    }
    if (this._allowEnvoy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEnvoy = this._allowEnvoy;
    }
    if (this._allowExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExpression = this._allowExpression?.internalValue;
    }
    if (this._disallowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowAll = this._disallowAll;
    }
    if (this._disallowExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowExpression = this._disallowExpression?.internalValue;
    }
    if (this._disallowIsError !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowIsError = this._disallowIsError;
    }
    if (this._disallowSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowSystem = this._disallowSystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAllRouting = undefined;
      this._allowEnvoy = undefined;
      this._allowExpression.internalValue = undefined;
      this._disallowAll = undefined;
      this._disallowExpression.internalValue = undefined;
      this._disallowIsError = undefined;
      this._disallowSystem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAllRouting = value.allowAllRouting;
      this._allowEnvoy = value.allowEnvoy;
      this._allowExpression.internalValue = value.allowExpression;
      this._disallowAll = value.disallowAll;
      this._disallowExpression.internalValue = value.disallowExpression;
      this._disallowIsError = value.disallowIsError;
      this._disallowSystem = value.disallowSystem;
    }
  }

  // allow_all_routing - computed: false, optional: true, required: false
  private _allowAllRouting?: boolean | cdktf.IResolvable; 
  public get allowAllRouting() {
    return this.getBooleanAttribute('allow_all_routing');
  }
  public set allowAllRouting(value: boolean | cdktf.IResolvable) {
    this._allowAllRouting = value;
  }
  public resetAllowAllRouting() {
    this._allowAllRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllRoutingInput() {
    return this._allowAllRouting;
  }

  // allow_envoy - computed: false, optional: true, required: false
  private _allowEnvoy?: boolean | cdktf.IResolvable; 
  public get allowEnvoy() {
    return this.getBooleanAttribute('allow_envoy');
  }
  public set allowEnvoy(value: boolean | cdktf.IResolvable) {
    this._allowEnvoy = value;
  }
  public resetAllowEnvoy() {
    this._allowEnvoy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEnvoyInput() {
    return this._allowEnvoy;
  }

  // allow_expression - computed: false, optional: true, required: false
  private _allowExpression = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpressionOutputReference(this, "allow_expression");
  public get allowExpression() {
    return this._allowExpression;
  }
  public putAllowExpression(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesAllowExpression) {
    this._allowExpression.internalValue = value;
  }
  public resetAllowExpression() {
    this._allowExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExpressionInput() {
    return this._allowExpression.internalValue;
  }

  // disallow_all - computed: false, optional: true, required: false
  private _disallowAll?: boolean | cdktf.IResolvable; 
  public get disallowAll() {
    return this.getBooleanAttribute('disallow_all');
  }
  public set disallowAll(value: boolean | cdktf.IResolvable) {
    this._disallowAll = value;
  }
  public resetDisallowAll() {
    this._disallowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowAllInput() {
    return this._disallowAll;
  }

  // disallow_expression - computed: false, optional: true, required: false
  private _disallowExpression = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpressionOutputReference(this, "disallow_expression");
  public get disallowExpression() {
    return this._disallowExpression;
  }
  public putDisallowExpression(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesDisallowExpression) {
    this._disallowExpression.internalValue = value;
  }
  public resetDisallowExpression() {
    this._disallowExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowExpressionInput() {
    return this._disallowExpression.internalValue;
  }

  // disallow_is_error - computed: false, optional: true, required: false
  private _disallowIsError?: boolean | cdktf.IResolvable; 
  public get disallowIsError() {
    return this.getBooleanAttribute('disallow_is_error');
  }
  public set disallowIsError(value: boolean | cdktf.IResolvable) {
    this._disallowIsError = value;
  }
  public resetDisallowIsError() {
    this._disallowIsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowIsErrorInput() {
    return this._disallowIsError;
  }

  // disallow_system - computed: false, optional: true, required: false
  private _disallowSystem?: boolean | cdktf.IResolvable; 
  public get disallowSystem() {
    return this.getBooleanAttribute('disallow_system');
  }
  public set disallowSystem(value: boolean | cdktf.IResolvable) {
    this._disallowSystem = value;
  }
  public resetDisallowSystem() {
    this._disallowSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowSystemInput() {
    return this._disallowSystem;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_body_mode DataK8SGlooSoloIoSettingsV1Manifest#request_body_mode}
  */
  readonly requestBodyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_header_mode DataK8SGlooSoloIoSettingsV1Manifest#request_header_mode}
  */
  readonly requestHeaderMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_trailer_mode DataK8SGlooSoloIoSettingsV1Manifest#request_trailer_mode}
  */
  readonly requestTrailerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#response_body_mode DataK8SGlooSoloIoSettingsV1Manifest#response_body_mode}
  */
  readonly responseBodyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#response_header_mode DataK8SGlooSoloIoSettingsV1Manifest#response_header_mode}
  */
  readonly responseHeaderMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#response_trailer_mode DataK8SGlooSoloIoSettingsV1Manifest#response_trailer_mode}
  */
  readonly responseTrailerMode?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingModeToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_body_mode: cdktf.stringToTerraform(struct!.requestBodyMode),
    request_header_mode: cdktf.stringToTerraform(struct!.requestHeaderMode),
    request_trailer_mode: cdktf.stringToTerraform(struct!.requestTrailerMode),
    response_body_mode: cdktf.stringToTerraform(struct!.responseBodyMode),
    response_header_mode: cdktf.stringToTerraform(struct!.responseHeaderMode),
    response_trailer_mode: cdktf.stringToTerraform(struct!.responseTrailerMode),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingModeToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_body_mode: {
      value: cdktf.stringToHclTerraform(struct!.requestBodyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_header_mode: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_trailer_mode: {
      value: cdktf.stringToHclTerraform(struct!.requestTrailerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_header_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseHeaderMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_trailer_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseTrailerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestBodyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyMode = this._requestBodyMode;
    }
    if (this._requestHeaderMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderMode = this._requestHeaderMode;
    }
    if (this._requestTrailerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTrailerMode = this._requestTrailerMode;
    }
    if (this._responseBodyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyMode = this._responseBodyMode;
    }
    if (this._responseHeaderMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderMode = this._responseHeaderMode;
    }
    if (this._responseTrailerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTrailerMode = this._responseTrailerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestBodyMode = undefined;
      this._requestHeaderMode = undefined;
      this._requestTrailerMode = undefined;
      this._responseBodyMode = undefined;
      this._responseHeaderMode = undefined;
      this._responseTrailerMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestBodyMode = value.requestBodyMode;
      this._requestHeaderMode = value.requestHeaderMode;
      this._requestTrailerMode = value.requestTrailerMode;
      this._responseBodyMode = value.responseBodyMode;
      this._responseHeaderMode = value.responseHeaderMode;
      this._responseTrailerMode = value.responseTrailerMode;
    }
  }

  // request_body_mode - computed: false, optional: true, required: false
  private _requestBodyMode?: string; 
  public get requestBodyMode() {
    return this.getStringAttribute('request_body_mode');
  }
  public set requestBodyMode(value: string) {
    this._requestBodyMode = value;
  }
  public resetRequestBodyMode() {
    this._requestBodyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyModeInput() {
    return this._requestBodyMode;
  }

  // request_header_mode - computed: false, optional: true, required: false
  private _requestHeaderMode?: string; 
  public get requestHeaderMode() {
    return this.getStringAttribute('request_header_mode');
  }
  public set requestHeaderMode(value: string) {
    this._requestHeaderMode = value;
  }
  public resetRequestHeaderMode() {
    this._requestHeaderMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderModeInput() {
    return this._requestHeaderMode;
  }

  // request_trailer_mode - computed: false, optional: true, required: false
  private _requestTrailerMode?: string; 
  public get requestTrailerMode() {
    return this.getStringAttribute('request_trailer_mode');
  }
  public set requestTrailerMode(value: string) {
    this._requestTrailerMode = value;
  }
  public resetRequestTrailerMode() {
    this._requestTrailerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTrailerModeInput() {
    return this._requestTrailerMode;
  }

  // response_body_mode - computed: false, optional: true, required: false
  private _responseBodyMode?: string; 
  public get responseBodyMode() {
    return this.getStringAttribute('response_body_mode');
  }
  public set responseBodyMode(value: string) {
    this._responseBodyMode = value;
  }
  public resetResponseBodyMode() {
    this._responseBodyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyModeInput() {
    return this._responseBodyMode;
  }

  // response_header_mode - computed: false, optional: true, required: false
  private _responseHeaderMode?: string; 
  public get responseHeaderMode() {
    return this.getStringAttribute('response_header_mode');
  }
  public set responseHeaderMode(value: string) {
    this._responseHeaderMode = value;
  }
  public resetResponseHeaderMode() {
    this._responseHeaderMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderModeInput() {
    return this._responseHeaderMode;
  }

  // response_trailer_mode - computed: false, optional: true, required: false
  private _responseTrailerMode?: string; 
  public get responseTrailerMode() {
    return this.getStringAttribute('response_trailer_mode');
  }
  public set responseTrailerMode(value: string) {
    this._responseTrailerMode = value;
  }
  public resetResponseTrailerMode() {
    this._responseTrailerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTrailerModeInput() {
    return this._responseTrailerMode;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtProc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allow_mode_override DataK8SGlooSoloIoSettingsV1Manifest#allow_mode_override}
  */
  readonly allowModeOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#async_mode DataK8SGlooSoloIoSettingsV1Manifest#async_mode}
  */
  readonly asyncMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disable_clear_route_cache DataK8SGlooSoloIoSettingsV1Manifest#disable_clear_route_cache}
  */
  readonly disableClearRouteCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#failure_mode_allow DataK8SGlooSoloIoSettingsV1Manifest#failure_mode_allow}
  */
  readonly failureModeAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#filter_metadata DataK8SGlooSoloIoSettingsV1Manifest#filter_metadata}
  */
  readonly filterMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#filter_stage DataK8SGlooSoloIoSettingsV1Manifest#filter_stage}
  */
  readonly filterStage?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#forward_rules DataK8SGlooSoloIoSettingsV1Manifest#forward_rules}
  */
  readonly forwardRules?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRules;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#grpc_service DataK8SGlooSoloIoSettingsV1Manifest#grpc_service}
  */
  readonly grpcService?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_message_timeout DataK8SGlooSoloIoSettingsV1Manifest#max_message_timeout}
  */
  readonly maxMessageTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#message_timeout DataK8SGlooSoloIoSettingsV1Manifest#message_timeout}
  */
  readonly messageTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#metadata_context_namespaces DataK8SGlooSoloIoSettingsV1Manifest#metadata_context_namespaces}
  */
  readonly metadataContextNamespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#mutation_rules DataK8SGlooSoloIoSettingsV1Manifest#mutation_rules}
  */
  readonly mutationRules?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRules;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#processing_mode DataK8SGlooSoloIoSettingsV1Manifest#processing_mode}
  */
  readonly processingMode?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_attributes DataK8SGlooSoloIoSettingsV1Manifest#request_attributes}
  */
  readonly requestAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#response_attributes DataK8SGlooSoloIoSettingsV1Manifest#response_attributes}
  */
  readonly responseAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#stat_prefix DataK8SGlooSoloIoSettingsV1Manifest#stat_prefix}
  */
  readonly statPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#typed_metadata_context_namespaces DataK8SGlooSoloIoSettingsV1Manifest#typed_metadata_context_namespaces}
  */
  readonly typedMetadataContextNamespaces?: string[];
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_mode_override: cdktf.booleanToTerraform(struct!.allowModeOverride),
    async_mode: cdktf.booleanToTerraform(struct!.asyncMode),
    disable_clear_route_cache: cdktf.booleanToTerraform(struct!.disableClearRouteCache),
    failure_mode_allow: cdktf.booleanToTerraform(struct!.failureModeAllow),
    filter_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filterMetadata),
    filter_stage: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStageToTerraform(struct!.filterStage),
    forward_rules: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesToTerraform(struct!.forwardRules),
    grpc_service: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceToTerraform(struct!.grpcService),
    max_message_timeout: cdktf.stringToTerraform(struct!.maxMessageTimeout),
    message_timeout: cdktf.stringToTerraform(struct!.messageTimeout),
    metadata_context_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadataContextNamespaces),
    mutation_rules: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesToTerraform(struct!.mutationRules),
    processing_mode: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingModeToTerraform(struct!.processingMode),
    request_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestAttributes),
    response_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseAttributes),
    stat_prefix: cdktf.stringToTerraform(struct!.statPrefix),
    typed_metadata_context_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.typedMetadataContextNamespaces),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_mode_override: {
      value: cdktf.booleanToHclTerraform(struct!.allowModeOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    async_mode: {
      value: cdktf.booleanToHclTerraform(struct!.asyncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_clear_route_cache: {
      value: cdktf.booleanToHclTerraform(struct!.disableClearRouteCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failure_mode_allow: {
      value: cdktf.booleanToHclTerraform(struct!.failureModeAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.filterMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    filter_stage: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStageToHclTerraform(struct!.filterStage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStage",
    },
    forward_rules: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesToHclTerraform(struct!.forwardRules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRules",
    },
    grpc_service: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceToHclTerraform(struct!.grpcService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcService",
    },
    max_message_timeout: {
      value: cdktf.stringToHclTerraform(struct!.maxMessageTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_timeout: {
      value: cdktf.stringToHclTerraform(struct!.messageTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_context_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metadataContextNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mutation_rules: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesToHclTerraform(struct!.mutationRules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRules",
    },
    processing_mode: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingModeToHclTerraform(struct!.processingMode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingMode",
    },
    request_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    stat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.statPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    typed_metadata_context_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.typedMetadataContextNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtProc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowModeOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowModeOverride = this._allowModeOverride;
    }
    if (this._asyncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncMode = this._asyncMode;
    }
    if (this._disableClearRouteCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableClearRouteCache = this._disableClearRouteCache;
    }
    if (this._failureModeAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureModeAllow = this._failureModeAllow;
    }
    if (this._filterMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMetadata = this._filterMetadata;
    }
    if (this._filterStage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterStage = this._filterStage?.internalValue;
    }
    if (this._forwardRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRules = this._forwardRules?.internalValue;
    }
    if (this._grpcService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcService = this._grpcService?.internalValue;
    }
    if (this._maxMessageTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageTimeout = this._maxMessageTimeout;
    }
    if (this._messageTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTimeout = this._messageTimeout;
    }
    if (this._metadataContextNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataContextNamespaces = this._metadataContextNamespaces;
    }
    if (this._mutationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutationRules = this._mutationRules?.internalValue;
    }
    if (this._processingMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingMode = this._processingMode?.internalValue;
    }
    if (this._requestAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAttributes = this._requestAttributes;
    }
    if (this._responseAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseAttributes = this._responseAttributes;
    }
    if (this._statPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statPrefix = this._statPrefix;
    }
    if (this._typedMetadataContextNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.typedMetadataContextNamespaces = this._typedMetadataContextNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowModeOverride = undefined;
      this._asyncMode = undefined;
      this._disableClearRouteCache = undefined;
      this._failureModeAllow = undefined;
      this._filterMetadata = undefined;
      this._filterStage.internalValue = undefined;
      this._forwardRules.internalValue = undefined;
      this._grpcService.internalValue = undefined;
      this._maxMessageTimeout = undefined;
      this._messageTimeout = undefined;
      this._metadataContextNamespaces = undefined;
      this._mutationRules.internalValue = undefined;
      this._processingMode.internalValue = undefined;
      this._requestAttributes = undefined;
      this._responseAttributes = undefined;
      this._statPrefix = undefined;
      this._typedMetadataContextNamespaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowModeOverride = value.allowModeOverride;
      this._asyncMode = value.asyncMode;
      this._disableClearRouteCache = value.disableClearRouteCache;
      this._failureModeAllow = value.failureModeAllow;
      this._filterMetadata = value.filterMetadata;
      this._filterStage.internalValue = value.filterStage;
      this._forwardRules.internalValue = value.forwardRules;
      this._grpcService.internalValue = value.grpcService;
      this._maxMessageTimeout = value.maxMessageTimeout;
      this._messageTimeout = value.messageTimeout;
      this._metadataContextNamespaces = value.metadataContextNamespaces;
      this._mutationRules.internalValue = value.mutationRules;
      this._processingMode.internalValue = value.processingMode;
      this._requestAttributes = value.requestAttributes;
      this._responseAttributes = value.responseAttributes;
      this._statPrefix = value.statPrefix;
      this._typedMetadataContextNamespaces = value.typedMetadataContextNamespaces;
    }
  }

  // allow_mode_override - computed: false, optional: true, required: false
  private _allowModeOverride?: boolean | cdktf.IResolvable; 
  public get allowModeOverride() {
    return this.getBooleanAttribute('allow_mode_override');
  }
  public set allowModeOverride(value: boolean | cdktf.IResolvable) {
    this._allowModeOverride = value;
  }
  public resetAllowModeOverride() {
    this._allowModeOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowModeOverrideInput() {
    return this._allowModeOverride;
  }

  // async_mode - computed: false, optional: true, required: false
  private _asyncMode?: boolean | cdktf.IResolvable; 
  public get asyncMode() {
    return this.getBooleanAttribute('async_mode');
  }
  public set asyncMode(value: boolean | cdktf.IResolvable) {
    this._asyncMode = value;
  }
  public resetAsyncMode() {
    this._asyncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncModeInput() {
    return this._asyncMode;
  }

  // disable_clear_route_cache - computed: false, optional: true, required: false
  private _disableClearRouteCache?: boolean | cdktf.IResolvable; 
  public get disableClearRouteCache() {
    return this.getBooleanAttribute('disable_clear_route_cache');
  }
  public set disableClearRouteCache(value: boolean | cdktf.IResolvable) {
    this._disableClearRouteCache = value;
  }
  public resetDisableClearRouteCache() {
    this._disableClearRouteCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableClearRouteCacheInput() {
    return this._disableClearRouteCache;
  }

  // failure_mode_allow - computed: false, optional: true, required: false
  private _failureModeAllow?: boolean | cdktf.IResolvable; 
  public get failureModeAllow() {
    return this.getBooleanAttribute('failure_mode_allow');
  }
  public set failureModeAllow(value: boolean | cdktf.IResolvable) {
    this._failureModeAllow = value;
  }
  public resetFailureModeAllow() {
    this._failureModeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeAllowInput() {
    return this._failureModeAllow;
  }

  // filter_metadata - computed: false, optional: true, required: false
  private _filterMetadata?: { [key: string]: string }; 
  public get filterMetadata() {
    return this.getStringMapAttribute('filter_metadata');
  }
  public set filterMetadata(value: { [key: string]: string }) {
    this._filterMetadata = value;
  }
  public resetFilterMetadata() {
    this._filterMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMetadataInput() {
    return this._filterMetadata;
  }

  // filter_stage - computed: false, optional: true, required: false
  private _filterStage = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStageOutputReference(this, "filter_stage");
  public get filterStage() {
    return this._filterStage;
  }
  public putFilterStage(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcFilterStage) {
    this._filterStage.internalValue = value;
  }
  public resetFilterStage() {
    this._filterStage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStageInput() {
    return this._filterStage.internalValue;
  }

  // forward_rules - computed: false, optional: true, required: false
  private _forwardRules = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRulesOutputReference(this, "forward_rules");
  public get forwardRules() {
    return this._forwardRules;
  }
  public putForwardRules(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcForwardRules) {
    this._forwardRules.internalValue = value;
  }
  public resetForwardRules() {
    this._forwardRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRulesInput() {
    return this._forwardRules.internalValue;
  }

  // grpc_service - computed: false, optional: true, required: false
  private _grpcService = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcServiceOutputReference(this, "grpc_service");
  public get grpcService() {
    return this._grpcService;
  }
  public putGrpcService(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcGrpcService) {
    this._grpcService.internalValue = value;
  }
  public resetGrpcService() {
    this._grpcService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceInput() {
    return this._grpcService.internalValue;
  }

  // max_message_timeout - computed: false, optional: true, required: false
  private _maxMessageTimeout?: string; 
  public get maxMessageTimeout() {
    return this.getStringAttribute('max_message_timeout');
  }
  public set maxMessageTimeout(value: string) {
    this._maxMessageTimeout = value;
  }
  public resetMaxMessageTimeout() {
    this._maxMessageTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageTimeoutInput() {
    return this._maxMessageTimeout;
  }

  // message_timeout - computed: false, optional: true, required: false
  private _messageTimeout?: string; 
  public get messageTimeout() {
    return this.getStringAttribute('message_timeout');
  }
  public set messageTimeout(value: string) {
    this._messageTimeout = value;
  }
  public resetMessageTimeout() {
    this._messageTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTimeoutInput() {
    return this._messageTimeout;
  }

  // metadata_context_namespaces - computed: false, optional: true, required: false
  private _metadataContextNamespaces?: string[]; 
  public get metadataContextNamespaces() {
    return this.getListAttribute('metadata_context_namespaces');
  }
  public set metadataContextNamespaces(value: string[]) {
    this._metadataContextNamespaces = value;
  }
  public resetMetadataContextNamespaces() {
    this._metadataContextNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataContextNamespacesInput() {
    return this._metadataContextNamespaces;
  }

  // mutation_rules - computed: false, optional: true, required: false
  private _mutationRules = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRulesOutputReference(this, "mutation_rules");
  public get mutationRules() {
    return this._mutationRules;
  }
  public putMutationRules(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcMutationRules) {
    this._mutationRules.internalValue = value;
  }
  public resetMutationRules() {
    this._mutationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationRulesInput() {
    return this._mutationRules.internalValue;
  }

  // processing_mode - computed: false, optional: true, required: false
  private _processingMode = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingModeOutputReference(this, "processing_mode");
  public get processingMode() {
    return this._processingMode;
  }
  public putProcessingMode(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcProcessingMode) {
    this._processingMode.internalValue = value;
  }
  public resetProcessingMode() {
    this._processingMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingModeInput() {
    return this._processingMode.internalValue;
  }

  // request_attributes - computed: false, optional: true, required: false
  private _requestAttributes?: string[]; 
  public get requestAttributes() {
    return this.getListAttribute('request_attributes');
  }
  public set requestAttributes(value: string[]) {
    this._requestAttributes = value;
  }
  public resetRequestAttributes() {
    this._requestAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAttributesInput() {
    return this._requestAttributes;
  }

  // response_attributes - computed: false, optional: true, required: false
  private _responseAttributes?: string[]; 
  public get responseAttributes() {
    return this.getListAttribute('response_attributes');
  }
  public set responseAttributes(value: string[]) {
    this._responseAttributes = value;
  }
  public resetResponseAttributes() {
    this._responseAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseAttributesInput() {
    return this._responseAttributes;
  }

  // stat_prefix - computed: false, optional: true, required: false
  private _statPrefix?: string; 
  public get statPrefix() {
    return this.getStringAttribute('stat_prefix');
  }
  public set statPrefix(value: string) {
    this._statPrefix = value;
  }
  public resetStatPrefix() {
    this._statPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statPrefixInput() {
    return this._statPrefix;
  }

  // typed_metadata_context_namespaces - computed: false, optional: true, required: false
  private _typedMetadataContextNamespaces?: string[]; 
  public get typedMetadataContextNamespaces() {
    return this.getListAttribute('typed_metadata_context_namespaces');
  }
  public set typedMetadataContextNamespaces(value: string[]) {
    this._typedMetadataContextNamespaces = value;
  }
  public resetTypedMetadataContextNamespaces() {
    this._typedMetadataContextNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typedMetadataContextNamespacesInput() {
    return this._typedMetadataContextNamespaces;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#name DataK8SGlooSoloIoSettingsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#namespace DataK8SGlooSoloIoSettingsV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRefToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRefToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRef | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#authority DataK8SGlooSoloIoSettingsV1Manifest#authority}
  */
  readonly authority?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcServiceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcServiceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
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
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_headers DataK8SGlooSoloIoSettingsV1Manifest#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_headers_regex DataK8SGlooSoloIoSettingsV1Manifest#allowed_headers_regex}
  */
  readonly allowedHeadersRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#headers_to_add DataK8SGlooSoloIoSettingsV1Manifest#headers_to_add}
  */
  readonly headersToAdd?: { [key: string]: string };
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequestToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_headers_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeadersRegex),
    headers_to_add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headersToAdd),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequestToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_headers_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeadersRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers_to_add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headersToAdd),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedHeadersRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeadersRegex = this._allowedHeadersRegex;
    }
    if (this._headersToAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToAdd = this._headersToAdd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedHeadersRegex = undefined;
      this._headersToAdd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedHeadersRegex = value.allowedHeadersRegex;
      this._headersToAdd = value.headersToAdd;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_headers_regex - computed: false, optional: true, required: false
  private _allowedHeadersRegex?: string[]; 
  public get allowedHeadersRegex() {
    return this.getListAttribute('allowed_headers_regex');
  }
  public set allowedHeadersRegex(value: string[]) {
    this._allowedHeadersRegex = value;
  }
  public resetAllowedHeadersRegex() {
    this._allowedHeadersRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersRegexInput() {
    return this._allowedHeadersRegex;
  }

  // headers_to_add - computed: false, optional: true, required: false
  private _headersToAdd?: { [key: string]: string }; 
  public get headersToAdd() {
    return this.getStringMapAttribute('headers_to_add');
  }
  public set headersToAdd(value: { [key: string]: string }) {
    this._headersToAdd = value;
  }
  public resetHeadersToAdd() {
    this._headersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToAddInput() {
    return this._headersToAdd;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_client_headers DataK8SGlooSoloIoSettingsV1Manifest#allowed_client_headers}
  */
  readonly allowedClientHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_upstream_headers DataK8SGlooSoloIoSettingsV1Manifest#allowed_upstream_headers}
  */
  readonly allowedUpstreamHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_upstream_headers_to_append DataK8SGlooSoloIoSettingsV1Manifest#allowed_upstream_headers_to_append}
  */
  readonly allowedUpstreamHeadersToAppend?: string[];
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponseToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_client_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedClientHeaders),
    allowed_upstream_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUpstreamHeaders),
    allowed_upstream_headers_to_append: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUpstreamHeadersToAppend),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponseToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_client_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedClientHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_upstream_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUpstreamHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_upstream_headers_to_append: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUpstreamHeadersToAppend),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClientHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClientHeaders = this._allowedClientHeaders;
    }
    if (this._allowedUpstreamHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUpstreamHeaders = this._allowedUpstreamHeaders;
    }
    if (this._allowedUpstreamHeadersToAppend !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUpstreamHeadersToAppend = this._allowedUpstreamHeadersToAppend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedClientHeaders = undefined;
      this._allowedUpstreamHeaders = undefined;
      this._allowedUpstreamHeadersToAppend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedClientHeaders = value.allowedClientHeaders;
      this._allowedUpstreamHeaders = value.allowedUpstreamHeaders;
      this._allowedUpstreamHeadersToAppend = value.allowedUpstreamHeadersToAppend;
    }
  }

  // allowed_client_headers - computed: false, optional: true, required: false
  private _allowedClientHeaders?: string[]; 
  public get allowedClientHeaders() {
    return this.getListAttribute('allowed_client_headers');
  }
  public set allowedClientHeaders(value: string[]) {
    this._allowedClientHeaders = value;
  }
  public resetAllowedClientHeaders() {
    this._allowedClientHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientHeadersInput() {
    return this._allowedClientHeaders;
  }

  // allowed_upstream_headers - computed: false, optional: true, required: false
  private _allowedUpstreamHeaders?: string[]; 
  public get allowedUpstreamHeaders() {
    return this.getListAttribute('allowed_upstream_headers');
  }
  public set allowedUpstreamHeaders(value: string[]) {
    this._allowedUpstreamHeaders = value;
  }
  public resetAllowedUpstreamHeaders() {
    this._allowedUpstreamHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUpstreamHeadersInput() {
    return this._allowedUpstreamHeaders;
  }

  // allowed_upstream_headers_to_append - computed: false, optional: true, required: false
  private _allowedUpstreamHeadersToAppend?: string[]; 
  public get allowedUpstreamHeadersToAppend() {
    return this.getListAttribute('allowed_upstream_headers_to_append');
  }
  public set allowedUpstreamHeadersToAppend(value: string[]) {
    this._allowedUpstreamHeadersToAppend = value;
  }
  public resetAllowedUpstreamHeadersToAppend() {
    this._allowedUpstreamHeadersToAppend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUpstreamHeadersToAppendInput() {
    return this._allowedUpstreamHeadersToAppend;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#path_prefix DataK8SGlooSoloIoSettingsV1Manifest#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request DataK8SGlooSoloIoSettingsV1Manifest#request}
  */
  readonly request?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#response DataK8SGlooSoloIoSettingsV1Manifest#response}
  */
  readonly response?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponse;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    request: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequestToTerraform(struct!.request),
    response: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponseToTerraform(struct!.response),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequest",
    },
    response: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pathPrefix = undefined;
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
      this._pathPrefix = value.pathPrefix;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
    }
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceRequest) {
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
  private _response = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceResponse) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allow_partial_message DataK8SGlooSoloIoSettingsV1Manifest#allow_partial_message}
  */
  readonly allowPartialMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_request_bytes DataK8SGlooSoloIoSettingsV1Manifest#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#pack_as_bytes DataK8SGlooSoloIoSettingsV1Manifest#pack_as_bytes}
  */
  readonly packAsBytes?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBodyToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBody | cdktf.IResolvable): any {
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


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBodyToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBody | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBody | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBody | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#clear_route_cache DataK8SGlooSoloIoSettingsV1Manifest#clear_route_cache}
  */
  readonly clearRouteCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#extauthz_server_ref DataK8SGlooSoloIoSettingsV1Manifest#extauthz_server_ref}
  */
  readonly extauthzServerRef?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#failure_mode_allow DataK8SGlooSoloIoSettingsV1Manifest#failure_mode_allow}
  */
  readonly failureModeAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#grpc_service DataK8SGlooSoloIoSettingsV1Manifest#grpc_service}
  */
  readonly grpcService?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#http_service DataK8SGlooSoloIoSettingsV1Manifest#http_service}
  */
  readonly httpService?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_body DataK8SGlooSoloIoSettingsV1Manifest#request_body}
  */
  readonly requestBody?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_timeout DataK8SGlooSoloIoSettingsV1Manifest#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#stat_prefix DataK8SGlooSoloIoSettingsV1Manifest#stat_prefix}
  */
  readonly statPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#status_on_error DataK8SGlooSoloIoSettingsV1Manifest#status_on_error}
  */
  readonly statusOnError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#transport_api_version DataK8SGlooSoloIoSettingsV1Manifest#transport_api_version}
  */
  readonly transportApiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#user_id_header DataK8SGlooSoloIoSettingsV1Manifest#user_id_header}
  */
  readonly userIdHeader?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_route_cache: cdktf.booleanToTerraform(struct!.clearRouteCache),
    extauthz_server_ref: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRefToTerraform(struct!.extauthzServerRef),
    failure_mode_allow: cdktf.booleanToTerraform(struct!.failureModeAllow),
    grpc_service: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcServiceToTerraform(struct!.grpcService),
    http_service: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceToTerraform(struct!.httpService),
    request_body: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBodyToTerraform(struct!.requestBody),
    request_timeout: cdktf.stringToTerraform(struct!.requestTimeout),
    stat_prefix: cdktf.stringToTerraform(struct!.statPrefix),
    status_on_error: cdktf.numberToTerraform(struct!.statusOnError),
    transport_api_version: cdktf.stringToTerraform(struct!.transportApiVersion),
    user_id_header: cdktf.stringToTerraform(struct!.userIdHeader),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_route_cache: {
      value: cdktf.booleanToHclTerraform(struct!.clearRouteCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extauthz_server_ref: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRefToHclTerraform(struct!.extauthzServerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRef",
    },
    failure_mode_allow: {
      value: cdktf.booleanToHclTerraform(struct!.failureModeAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grpc_service: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcServiceToHclTerraform(struct!.grpcService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcService",
    },
    http_service: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceToHclTerraform(struct!.httpService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpService",
    },
    request_body: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBodyToHclTerraform(struct!.requestBody),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBody",
    },
    request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.statPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_on_error: {
      value: cdktf.numberToHclTerraform(struct!.statusOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_api_version: {
      value: cdktf.stringToHclTerraform(struct!.transportApiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id_header: {
      value: cdktf.stringToHclTerraform(struct!.userIdHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtauth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearRouteCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearRouteCache = this._clearRouteCache;
    }
    if (this._extauthzServerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extauthzServerRef = this._extauthzServerRef?.internalValue;
    }
    if (this._failureModeAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureModeAllow = this._failureModeAllow;
    }
    if (this._grpcService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcService = this._grpcService?.internalValue;
    }
    if (this._httpService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpService = this._httpService?.internalValue;
    }
    if (this._requestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody?.internalValue;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._statPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statPrefix = this._statPrefix;
    }
    if (this._statusOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusOnError = this._statusOnError;
    }
    if (this._transportApiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportApiVersion = this._transportApiVersion;
    }
    if (this._userIdHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdHeader = this._userIdHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearRouteCache = undefined;
      this._extauthzServerRef.internalValue = undefined;
      this._failureModeAllow = undefined;
      this._grpcService.internalValue = undefined;
      this._httpService.internalValue = undefined;
      this._requestBody.internalValue = undefined;
      this._requestTimeout = undefined;
      this._statPrefix = undefined;
      this._statusOnError = undefined;
      this._transportApiVersion = undefined;
      this._userIdHeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearRouteCache = value.clearRouteCache;
      this._extauthzServerRef.internalValue = value.extauthzServerRef;
      this._failureModeAllow = value.failureModeAllow;
      this._grpcService.internalValue = value.grpcService;
      this._httpService.internalValue = value.httpService;
      this._requestBody.internalValue = value.requestBody;
      this._requestTimeout = value.requestTimeout;
      this._statPrefix = value.statPrefix;
      this._statusOnError = value.statusOnError;
      this._transportApiVersion = value.transportApiVersion;
      this._userIdHeader = value.userIdHeader;
    }
  }

  // clear_route_cache - computed: false, optional: true, required: false
  private _clearRouteCache?: boolean | cdktf.IResolvable; 
  public get clearRouteCache() {
    return this.getBooleanAttribute('clear_route_cache');
  }
  public set clearRouteCache(value: boolean | cdktf.IResolvable) {
    this._clearRouteCache = value;
  }
  public resetClearRouteCache() {
    this._clearRouteCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearRouteCacheInput() {
    return this._clearRouteCache;
  }

  // extauthz_server_ref - computed: false, optional: true, required: false
  private _extauthzServerRef = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRefOutputReference(this, "extauthz_server_ref");
  public get extauthzServerRef() {
    return this._extauthzServerRef;
  }
  public putExtauthzServerRef(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthExtauthzServerRef) {
    this._extauthzServerRef.internalValue = value;
  }
  public resetExtauthzServerRef() {
    this._extauthzServerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extauthzServerRefInput() {
    return this._extauthzServerRef.internalValue;
  }

  // failure_mode_allow - computed: false, optional: true, required: false
  private _failureModeAllow?: boolean | cdktf.IResolvable; 
  public get failureModeAllow() {
    return this.getBooleanAttribute('failure_mode_allow');
  }
  public set failureModeAllow(value: boolean | cdktf.IResolvable) {
    this._failureModeAllow = value;
  }
  public resetFailureModeAllow() {
    this._failureModeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeAllowInput() {
    return this._failureModeAllow;
  }

  // grpc_service - computed: false, optional: true, required: false
  private _grpcService = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcServiceOutputReference(this, "grpc_service");
  public get grpcService() {
    return this._grpcService;
  }
  public putGrpcService(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthGrpcService) {
    this._grpcService.internalValue = value;
  }
  public resetGrpcService() {
    this._grpcService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceInput() {
    return this._grpcService.internalValue;
  }

  // http_service - computed: false, optional: true, required: false
  private _httpService = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpServiceOutputReference(this, "http_service");
  public get httpService() {
    return this._httpService;
  }
  public putHttpService(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthHttpService) {
    this._httpService.internalValue = value;
  }
  public resetHttpService() {
    this._httpService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServiceInput() {
    return this._httpService.internalValue;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBodyOutputReference(this, "request_body");
  public get requestBody() {
    return this._requestBody;
  }
  public putRequestBody(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthRequestBody) {
    this._requestBody.internalValue = value;
  }
  public resetRequestBody() {
    this._requestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody.internalValue;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // stat_prefix - computed: false, optional: true, required: false
  private _statPrefix?: string; 
  public get statPrefix() {
    return this.getStringAttribute('stat_prefix');
  }
  public set statPrefix(value: string) {
    this._statPrefix = value;
  }
  public resetStatPrefix() {
    this._statPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statPrefixInput() {
    return this._statPrefix;
  }

  // status_on_error - computed: false, optional: true, required: false
  private _statusOnError?: number; 
  public get statusOnError() {
    return this.getNumberAttribute('status_on_error');
  }
  public set statusOnError(value: number) {
    this._statusOnError = value;
  }
  public resetStatusOnError() {
    this._statusOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusOnErrorInput() {
    return this._statusOnError;
  }

  // transport_api_version - computed: false, optional: true, required: false
  private _transportApiVersion?: string; 
  public get transportApiVersion() {
    return this.getStringAttribute('transport_api_version');
  }
  public set transportApiVersion(value: string) {
    this._transportApiVersion = value;
  }
  public resetTransportApiVersion() {
    this._transportApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportApiVersionInput() {
    return this._transportApiVersion;
  }

  // user_id_header - computed: false, optional: true, required: false
  private _userIdHeader?: string; 
  public get userIdHeader() {
    return this.getStringAttribute('user_id_header');
  }
  public set userIdHeader(value: string) {
    this._userIdHeader = value;
  }
  public resetUserIdHeader() {
    this._userIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdHeaderInput() {
    return this._userIdHeader;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecExtensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#configs DataK8SGlooSoloIoSettingsV1Manifest#configs}
  */
  readonly configs?: { [key: string]: string };
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtensionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configs),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecExtensionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtensions | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecExtensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtensions | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allow_warnings DataK8SGlooSoloIoSettingsV1Manifest#allow_warnings}
  */
  readonly allowWarnings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#always_accept DataK8SGlooSoloIoSettingsV1Manifest#always_accept}
  */
  readonly alwaysAccept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disable_transformation_validation DataK8SGlooSoloIoSettingsV1Manifest#disable_transformation_validation}
  */
  readonly disableTransformationValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#full_envoy_validation DataK8SGlooSoloIoSettingsV1Manifest#full_envoy_validation}
  */
  readonly fullEnvoyValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ignore_gloo_validation_failure DataK8SGlooSoloIoSettingsV1Manifest#ignore_gloo_validation_failure}
  */
  readonly ignoreGlooValidationFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#proxy_validation_server_addr DataK8SGlooSoloIoSettingsV1Manifest#proxy_validation_server_addr}
  */
  readonly proxyValidationServerAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#server_enabled DataK8SGlooSoloIoSettingsV1Manifest#server_enabled}
  */
  readonly serverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#validation_server_grpc_max_size_bytes DataK8SGlooSoloIoSettingsV1Manifest#validation_server_grpc_max_size_bytes}
  */
  readonly validationServerGrpcMaxSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#validation_webhook_tls_cert DataK8SGlooSoloIoSettingsV1Manifest#validation_webhook_tls_cert}
  */
  readonly validationWebhookTlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#validation_webhook_tls_key DataK8SGlooSoloIoSettingsV1Manifest#validation_webhook_tls_key}
  */
  readonly validationWebhookTlsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#warn_missing_tls_secret DataK8SGlooSoloIoSettingsV1Manifest#warn_missing_tls_secret}
  */
  readonly warnMissingTlsSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#warn_route_short_circuiting DataK8SGlooSoloIoSettingsV1Manifest#warn_route_short_circuiting}
  */
  readonly warnRouteShortCircuiting?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidationToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_warnings: cdktf.booleanToTerraform(struct!.allowWarnings),
    always_accept: cdktf.booleanToTerraform(struct!.alwaysAccept),
    disable_transformation_validation: cdktf.booleanToTerraform(struct!.disableTransformationValidation),
    full_envoy_validation: cdktf.booleanToTerraform(struct!.fullEnvoyValidation),
    ignore_gloo_validation_failure: cdktf.booleanToTerraform(struct!.ignoreGlooValidationFailure),
    proxy_validation_server_addr: cdktf.stringToTerraform(struct!.proxyValidationServerAddr),
    server_enabled: cdktf.booleanToTerraform(struct!.serverEnabled),
    validation_server_grpc_max_size_bytes: cdktf.numberToTerraform(struct!.validationServerGrpcMaxSizeBytes),
    validation_webhook_tls_cert: cdktf.stringToTerraform(struct!.validationWebhookTlsCert),
    validation_webhook_tls_key: cdktf.stringToTerraform(struct!.validationWebhookTlsKey),
    warn_missing_tls_secret: cdktf.booleanToTerraform(struct!.warnMissingTlsSecret),
    warn_route_short_circuiting: cdktf.booleanToTerraform(struct!.warnRouteShortCircuiting),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidationToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.allowWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_accept: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysAccept),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_transformation_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableTransformationValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_envoy_validation: {
      value: cdktf.booleanToHclTerraform(struct!.fullEnvoyValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_gloo_validation_failure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGlooValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_validation_server_addr: {
      value: cdktf.stringToHclTerraform(struct!.proxyValidationServerAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serverEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_server_grpc_max_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.validationServerGrpcMaxSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    validation_webhook_tls_cert: {
      value: cdktf.stringToHclTerraform(struct!.validationWebhookTlsCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_webhook_tls_key: {
      value: cdktf.stringToHclTerraform(struct!.validationWebhookTlsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warn_missing_tls_secret: {
      value: cdktf.booleanToHclTerraform(struct!.warnMissingTlsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warn_route_short_circuiting: {
      value: cdktf.booleanToHclTerraform(struct!.warnRouteShortCircuiting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowWarnings = this._allowWarnings;
    }
    if (this._alwaysAccept !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysAccept = this._alwaysAccept;
    }
    if (this._disableTransformationValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTransformationValidation = this._disableTransformationValidation;
    }
    if (this._fullEnvoyValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullEnvoyValidation = this._fullEnvoyValidation;
    }
    if (this._ignoreGlooValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGlooValidationFailure = this._ignoreGlooValidationFailure;
    }
    if (this._proxyValidationServerAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyValidationServerAddr = this._proxyValidationServerAddr;
    }
    if (this._serverEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverEnabled = this._serverEnabled;
    }
    if (this._validationServerGrpcMaxSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationServerGrpcMaxSizeBytes = this._validationServerGrpcMaxSizeBytes;
    }
    if (this._validationWebhookTlsCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationWebhookTlsCert = this._validationWebhookTlsCert;
    }
    if (this._validationWebhookTlsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationWebhookTlsKey = this._validationWebhookTlsKey;
    }
    if (this._warnMissingTlsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnMissingTlsSecret = this._warnMissingTlsSecret;
    }
    if (this._warnRouteShortCircuiting !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnRouteShortCircuiting = this._warnRouteShortCircuiting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowWarnings = undefined;
      this._alwaysAccept = undefined;
      this._disableTransformationValidation = undefined;
      this._fullEnvoyValidation = undefined;
      this._ignoreGlooValidationFailure = undefined;
      this._proxyValidationServerAddr = undefined;
      this._serverEnabled = undefined;
      this._validationServerGrpcMaxSizeBytes = undefined;
      this._validationWebhookTlsCert = undefined;
      this._validationWebhookTlsKey = undefined;
      this._warnMissingTlsSecret = undefined;
      this._warnRouteShortCircuiting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowWarnings = value.allowWarnings;
      this._alwaysAccept = value.alwaysAccept;
      this._disableTransformationValidation = value.disableTransformationValidation;
      this._fullEnvoyValidation = value.fullEnvoyValidation;
      this._ignoreGlooValidationFailure = value.ignoreGlooValidationFailure;
      this._proxyValidationServerAddr = value.proxyValidationServerAddr;
      this._serverEnabled = value.serverEnabled;
      this._validationServerGrpcMaxSizeBytes = value.validationServerGrpcMaxSizeBytes;
      this._validationWebhookTlsCert = value.validationWebhookTlsCert;
      this._validationWebhookTlsKey = value.validationWebhookTlsKey;
      this._warnMissingTlsSecret = value.warnMissingTlsSecret;
      this._warnRouteShortCircuiting = value.warnRouteShortCircuiting;
    }
  }

  // allow_warnings - computed: false, optional: true, required: false
  private _allowWarnings?: boolean | cdktf.IResolvable; 
  public get allowWarnings() {
    return this.getBooleanAttribute('allow_warnings');
  }
  public set allowWarnings(value: boolean | cdktf.IResolvable) {
    this._allowWarnings = value;
  }
  public resetAllowWarnings() {
    this._allowWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWarningsInput() {
    return this._allowWarnings;
  }

  // always_accept - computed: false, optional: true, required: false
  private _alwaysAccept?: boolean | cdktf.IResolvable; 
  public get alwaysAccept() {
    return this.getBooleanAttribute('always_accept');
  }
  public set alwaysAccept(value: boolean | cdktf.IResolvable) {
    this._alwaysAccept = value;
  }
  public resetAlwaysAccept() {
    this._alwaysAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysAcceptInput() {
    return this._alwaysAccept;
  }

  // disable_transformation_validation - computed: false, optional: true, required: false
  private _disableTransformationValidation?: boolean | cdktf.IResolvable; 
  public get disableTransformationValidation() {
    return this.getBooleanAttribute('disable_transformation_validation');
  }
  public set disableTransformationValidation(value: boolean | cdktf.IResolvable) {
    this._disableTransformationValidation = value;
  }
  public resetDisableTransformationValidation() {
    this._disableTransformationValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTransformationValidationInput() {
    return this._disableTransformationValidation;
  }

  // full_envoy_validation - computed: false, optional: true, required: false
  private _fullEnvoyValidation?: boolean | cdktf.IResolvable; 
  public get fullEnvoyValidation() {
    return this.getBooleanAttribute('full_envoy_validation');
  }
  public set fullEnvoyValidation(value: boolean | cdktf.IResolvable) {
    this._fullEnvoyValidation = value;
  }
  public resetFullEnvoyValidation() {
    this._fullEnvoyValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullEnvoyValidationInput() {
    return this._fullEnvoyValidation;
  }

  // ignore_gloo_validation_failure - computed: false, optional: true, required: false
  private _ignoreGlooValidationFailure?: boolean | cdktf.IResolvable; 
  public get ignoreGlooValidationFailure() {
    return this.getBooleanAttribute('ignore_gloo_validation_failure');
  }
  public set ignoreGlooValidationFailure(value: boolean | cdktf.IResolvable) {
    this._ignoreGlooValidationFailure = value;
  }
  public resetIgnoreGlooValidationFailure() {
    this._ignoreGlooValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGlooValidationFailureInput() {
    return this._ignoreGlooValidationFailure;
  }

  // proxy_validation_server_addr - computed: false, optional: true, required: false
  private _proxyValidationServerAddr?: string; 
  public get proxyValidationServerAddr() {
    return this.getStringAttribute('proxy_validation_server_addr');
  }
  public set proxyValidationServerAddr(value: string) {
    this._proxyValidationServerAddr = value;
  }
  public resetProxyValidationServerAddr() {
    this._proxyValidationServerAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyValidationServerAddrInput() {
    return this._proxyValidationServerAddr;
  }

  // server_enabled - computed: false, optional: true, required: false
  private _serverEnabled?: boolean | cdktf.IResolvable; 
  public get serverEnabled() {
    return this.getBooleanAttribute('server_enabled');
  }
  public set serverEnabled(value: boolean | cdktf.IResolvable) {
    this._serverEnabled = value;
  }
  public resetServerEnabled() {
    this._serverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverEnabledInput() {
    return this._serverEnabled;
  }

  // validation_server_grpc_max_size_bytes - computed: false, optional: true, required: false
  private _validationServerGrpcMaxSizeBytes?: number; 
  public get validationServerGrpcMaxSizeBytes() {
    return this.getNumberAttribute('validation_server_grpc_max_size_bytes');
  }
  public set validationServerGrpcMaxSizeBytes(value: number) {
    this._validationServerGrpcMaxSizeBytes = value;
  }
  public resetValidationServerGrpcMaxSizeBytes() {
    this._validationServerGrpcMaxSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationServerGrpcMaxSizeBytesInput() {
    return this._validationServerGrpcMaxSizeBytes;
  }

  // validation_webhook_tls_cert - computed: false, optional: true, required: false
  private _validationWebhookTlsCert?: string; 
  public get validationWebhookTlsCert() {
    return this.getStringAttribute('validation_webhook_tls_cert');
  }
  public set validationWebhookTlsCert(value: string) {
    this._validationWebhookTlsCert = value;
  }
  public resetValidationWebhookTlsCert() {
    this._validationWebhookTlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationWebhookTlsCertInput() {
    return this._validationWebhookTlsCert;
  }

  // validation_webhook_tls_key - computed: false, optional: true, required: false
  private _validationWebhookTlsKey?: string; 
  public get validationWebhookTlsKey() {
    return this.getStringAttribute('validation_webhook_tls_key');
  }
  public set validationWebhookTlsKey(value: string) {
    this._validationWebhookTlsKey = value;
  }
  public resetValidationWebhookTlsKey() {
    this._validationWebhookTlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationWebhookTlsKeyInput() {
    return this._validationWebhookTlsKey;
  }

  // warn_missing_tls_secret - computed: false, optional: true, required: false
  private _warnMissingTlsSecret?: boolean | cdktf.IResolvable; 
  public get warnMissingTlsSecret() {
    return this.getBooleanAttribute('warn_missing_tls_secret');
  }
  public set warnMissingTlsSecret(value: boolean | cdktf.IResolvable) {
    this._warnMissingTlsSecret = value;
  }
  public resetWarnMissingTlsSecret() {
    this._warnMissingTlsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnMissingTlsSecretInput() {
    return this._warnMissingTlsSecret;
  }

  // warn_route_short_circuiting - computed: false, optional: true, required: false
  private _warnRouteShortCircuiting?: boolean | cdktf.IResolvable; 
  public get warnRouteShortCircuiting() {
    return this.getBooleanAttribute('warn_route_short_circuiting');
  }
  public set warnRouteShortCircuiting(value: boolean | cdktf.IResolvable) {
    this._warnRouteShortCircuiting = value;
  }
  public resetWarnRouteShortCircuiting() {
    this._warnRouteShortCircuiting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnRouteShortCircuitingInput() {
    return this._warnRouteShortCircuiting;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#one_way_tls DataK8SGlooSoloIoSettingsV1Manifest#one_way_tls}
  */
  readonly oneWayTls?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    one_way_tls: cdktf.booleanToTerraform(struct!.oneWayTls),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    one_way_tls: {
      value: cdktf.booleanToHclTerraform(struct!.oneWayTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oneWayTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneWayTls = this._oneWayTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oneWayTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oneWayTls = value.oneWayTls;
    }
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
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#always_sort_route_table_routes DataK8SGlooSoloIoSettingsV1Manifest#always_sort_route_table_routes}
  */
  readonly alwaysSortRouteTableRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#compressed_proxy_spec DataK8SGlooSoloIoSettingsV1Manifest#compressed_proxy_spec}
  */
  readonly compressedProxySpec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#enable_gateway_controller DataK8SGlooSoloIoSettingsV1Manifest#enable_gateway_controller}
  */
  readonly enableGatewayController?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#isolate_virtual_hosts_by_ssl_config DataK8SGlooSoloIoSettingsV1Manifest#isolate_virtual_hosts_by_ssl_config}
  */
  readonly isolateVirtualHostsBySslConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#persist_proxy_spec DataK8SGlooSoloIoSettingsV1Manifest#persist_proxy_spec}
  */
  readonly persistProxySpec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#read_gateways_from_all_namespaces DataK8SGlooSoloIoSettingsV1Manifest#read_gateways_from_all_namespaces}
  */
  readonly readGatewaysFromAllNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#translate_empty_gateways DataK8SGlooSoloIoSettingsV1Manifest#translate_empty_gateways}
  */
  readonly translateEmptyGateways?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#validation DataK8SGlooSoloIoSettingsV1Manifest#validation}
  */
  readonly validation?: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#validation_server_addr DataK8SGlooSoloIoSettingsV1Manifest#validation_server_addr}
  */
  readonly validationServerAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#virtual_service_options DataK8SGlooSoloIoSettingsV1Manifest#virtual_service_options}
  */
  readonly virtualServiceOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptions;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_sort_route_table_routes: cdktf.booleanToTerraform(struct!.alwaysSortRouteTableRoutes),
    compressed_proxy_spec: cdktf.booleanToTerraform(struct!.compressedProxySpec),
    enable_gateway_controller: cdktf.booleanToTerraform(struct!.enableGatewayController),
    isolate_virtual_hosts_by_ssl_config: cdktf.booleanToTerraform(struct!.isolateVirtualHostsBySslConfig),
    persist_proxy_spec: cdktf.booleanToTerraform(struct!.persistProxySpec),
    read_gateways_from_all_namespaces: cdktf.booleanToTerraform(struct!.readGatewaysFromAllNamespaces),
    translate_empty_gateways: cdktf.booleanToTerraform(struct!.translateEmptyGateways),
    validation: dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidationToTerraform(struct!.validation),
    validation_server_addr: cdktf.stringToTerraform(struct!.validationServerAddr),
    virtual_service_options: dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptionsToTerraform(struct!.virtualServiceOptions),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_sort_route_table_routes: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysSortRouteTableRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compressed_proxy_spec: {
      value: cdktf.booleanToHclTerraform(struct!.compressedProxySpec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_gateway_controller: {
      value: cdktf.booleanToHclTerraform(struct!.enableGatewayController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isolate_virtual_hosts_by_ssl_config: {
      value: cdktf.booleanToHclTerraform(struct!.isolateVirtualHostsBySslConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist_proxy_spec: {
      value: cdktf.booleanToHclTerraform(struct!.persistProxySpec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_gateways_from_all_namespaces: {
      value: cdktf.booleanToHclTerraform(struct!.readGatewaysFromAllNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    translate_empty_gateways: {
      value: cdktf.booleanToHclTerraform(struct!.translateEmptyGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidation",
    },
    validation_server_addr: {
      value: cdktf.stringToHclTerraform(struct!.validationServerAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_service_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptionsToHclTerraform(struct!.virtualServiceOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysSortRouteTableRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysSortRouteTableRoutes = this._alwaysSortRouteTableRoutes;
    }
    if (this._compressedProxySpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressedProxySpec = this._compressedProxySpec;
    }
    if (this._enableGatewayController !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGatewayController = this._enableGatewayController;
    }
    if (this._isolateVirtualHostsBySslConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolateVirtualHostsBySslConfig = this._isolateVirtualHostsBySslConfig;
    }
    if (this._persistProxySpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistProxySpec = this._persistProxySpec;
    }
    if (this._readGatewaysFromAllNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.readGatewaysFromAllNamespaces = this._readGatewaysFromAllNamespaces;
    }
    if (this._translateEmptyGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateEmptyGateways = this._translateEmptyGateways;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    if (this._validationServerAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationServerAddr = this._validationServerAddr;
    }
    if (this._virtualServiceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceOptions = this._virtualServiceOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysSortRouteTableRoutes = undefined;
      this._compressedProxySpec = undefined;
      this._enableGatewayController = undefined;
      this._isolateVirtualHostsBySslConfig = undefined;
      this._persistProxySpec = undefined;
      this._readGatewaysFromAllNamespaces = undefined;
      this._translateEmptyGateways = undefined;
      this._validation.internalValue = undefined;
      this._validationServerAddr = undefined;
      this._virtualServiceOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysSortRouteTableRoutes = value.alwaysSortRouteTableRoutes;
      this._compressedProxySpec = value.compressedProxySpec;
      this._enableGatewayController = value.enableGatewayController;
      this._isolateVirtualHostsBySslConfig = value.isolateVirtualHostsBySslConfig;
      this._persistProxySpec = value.persistProxySpec;
      this._readGatewaysFromAllNamespaces = value.readGatewaysFromAllNamespaces;
      this._translateEmptyGateways = value.translateEmptyGateways;
      this._validation.internalValue = value.validation;
      this._validationServerAddr = value.validationServerAddr;
      this._virtualServiceOptions.internalValue = value.virtualServiceOptions;
    }
  }

  // always_sort_route_table_routes - computed: false, optional: true, required: false
  private _alwaysSortRouteTableRoutes?: boolean | cdktf.IResolvable; 
  public get alwaysSortRouteTableRoutes() {
    return this.getBooleanAttribute('always_sort_route_table_routes');
  }
  public set alwaysSortRouteTableRoutes(value: boolean | cdktf.IResolvable) {
    this._alwaysSortRouteTableRoutes = value;
  }
  public resetAlwaysSortRouteTableRoutes() {
    this._alwaysSortRouteTableRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSortRouteTableRoutesInput() {
    return this._alwaysSortRouteTableRoutes;
  }

  // compressed_proxy_spec - computed: false, optional: true, required: false
  private _compressedProxySpec?: boolean | cdktf.IResolvable; 
  public get compressedProxySpec() {
    return this.getBooleanAttribute('compressed_proxy_spec');
  }
  public set compressedProxySpec(value: boolean | cdktf.IResolvable) {
    this._compressedProxySpec = value;
  }
  public resetCompressedProxySpec() {
    this._compressedProxySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedProxySpecInput() {
    return this._compressedProxySpec;
  }

  // enable_gateway_controller - computed: false, optional: true, required: false
  private _enableGatewayController?: boolean | cdktf.IResolvable; 
  public get enableGatewayController() {
    return this.getBooleanAttribute('enable_gateway_controller');
  }
  public set enableGatewayController(value: boolean | cdktf.IResolvable) {
    this._enableGatewayController = value;
  }
  public resetEnableGatewayController() {
    this._enableGatewayController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGatewayControllerInput() {
    return this._enableGatewayController;
  }

  // isolate_virtual_hosts_by_ssl_config - computed: false, optional: true, required: false
  private _isolateVirtualHostsBySslConfig?: boolean | cdktf.IResolvable; 
  public get isolateVirtualHostsBySslConfig() {
    return this.getBooleanAttribute('isolate_virtual_hosts_by_ssl_config');
  }
  public set isolateVirtualHostsBySslConfig(value: boolean | cdktf.IResolvable) {
    this._isolateVirtualHostsBySslConfig = value;
  }
  public resetIsolateVirtualHostsBySslConfig() {
    this._isolateVirtualHostsBySslConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolateVirtualHostsBySslConfigInput() {
    return this._isolateVirtualHostsBySslConfig;
  }

  // persist_proxy_spec - computed: false, optional: true, required: false
  private _persistProxySpec?: boolean | cdktf.IResolvable; 
  public get persistProxySpec() {
    return this.getBooleanAttribute('persist_proxy_spec');
  }
  public set persistProxySpec(value: boolean | cdktf.IResolvable) {
    this._persistProxySpec = value;
  }
  public resetPersistProxySpec() {
    this._persistProxySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistProxySpecInput() {
    return this._persistProxySpec;
  }

  // read_gateways_from_all_namespaces - computed: false, optional: true, required: false
  private _readGatewaysFromAllNamespaces?: boolean | cdktf.IResolvable; 
  public get readGatewaysFromAllNamespaces() {
    return this.getBooleanAttribute('read_gateways_from_all_namespaces');
  }
  public set readGatewaysFromAllNamespaces(value: boolean | cdktf.IResolvable) {
    this._readGatewaysFromAllNamespaces = value;
  }
  public resetReadGatewaysFromAllNamespaces() {
    this._readGatewaysFromAllNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readGatewaysFromAllNamespacesInput() {
    return this._readGatewaysFromAllNamespaces;
  }

  // translate_empty_gateways - computed: false, optional: true, required: false
  private _translateEmptyGateways?: boolean | cdktf.IResolvable; 
  public get translateEmptyGateways() {
    return this.getBooleanAttribute('translate_empty_gateways');
  }
  public set translateEmptyGateways(value: boolean | cdktf.IResolvable) {
    this._translateEmptyGateways = value;
  }
  public resetTranslateEmptyGateways() {
    this._translateEmptyGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateEmptyGatewaysInput() {
    return this._translateEmptyGateways;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }

  // validation_server_addr - computed: false, optional: true, required: false
  private _validationServerAddr?: string; 
  public get validationServerAddr() {
    return this.getStringAttribute('validation_server_addr');
  }
  public set validationServerAddr(value: string) {
    this._validationServerAddr = value;
  }
  public resetValidationServerAddr() {
    this._validationServerAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationServerAddrInput() {
    return this._validationServerAddr;
  }

  // virtual_service_options - computed: false, optional: true, required: false
  private _virtualServiceOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptionsOutputReference(this, "virtual_service_options");
  public get virtualServiceOptions() {
    return this._virtualServiceOptions;
  }
  public putVirtualServiceOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayVirtualServiceOptions) {
    this._virtualServiceOptions.internalValue = value;
  }
  public resetVirtualServiceOptions() {
    this._virtualServiceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceOptionsInput() {
    return this._virtualServiceOptions.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#cluster DataK8SGlooSoloIoSettingsV1Manifest#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#region DataK8SGlooSoloIoSettingsV1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#timeout DataK8SGlooSoloIoSettingsV1Manifest#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#uri DataK8SGlooSoloIoSettingsV1Manifest#uri}
  */
  readonly uri?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentialsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    region: cdktf.stringToTerraform(struct!.region),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentialsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._region = undefined;
      this._timeout = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._region = value.region;
      this._timeout = value.timeout;
      this._uri = value.uri;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#credential_refresh_delay DataK8SGlooSoloIoSettingsV1Manifest#credential_refresh_delay}
  */
  readonly credentialRefreshDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#enable_credentials_discovey DataK8SGlooSoloIoSettingsV1Manifest#enable_credentials_discovey}
  */
  readonly enableCredentialsDiscovey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#fallback_to_first_function DataK8SGlooSoloIoSettingsV1Manifest#fallback_to_first_function}
  */
  readonly fallbackToFirstFunction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#propagate_original_routing DataK8SGlooSoloIoSettingsV1Manifest#propagate_original_routing}
  */
  readonly propagateOriginalRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#service_account_credentials DataK8SGlooSoloIoSettingsV1Manifest#service_account_credentials}
  */
  readonly serviceAccountCredentials?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentials;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_refresh_delay: cdktf.stringToTerraform(struct!.credentialRefreshDelay),
    enable_credentials_discovey: cdktf.booleanToTerraform(struct!.enableCredentialsDiscovey),
    fallback_to_first_function: cdktf.booleanToTerraform(struct!.fallbackToFirstFunction),
    propagate_original_routing: cdktf.booleanToTerraform(struct!.propagateOriginalRouting),
    service_account_credentials: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentialsToTerraform(struct!.serviceAccountCredentials),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_refresh_delay: {
      value: cdktf.stringToHclTerraform(struct!.credentialRefreshDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_credentials_discovey: {
      value: cdktf.booleanToHclTerraform(struct!.enableCredentialsDiscovey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_to_first_function: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackToFirstFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagate_original_routing: {
      value: cdktf.booleanToHclTerraform(struct!.propagateOriginalRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_credentials: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentialsToHclTerraform(struct!.serviceAccountCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialRefreshDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialRefreshDelay = this._credentialRefreshDelay;
    }
    if (this._enableCredentialsDiscovey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCredentialsDiscovey = this._enableCredentialsDiscovey;
    }
    if (this._fallbackToFirstFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToFirstFunction = this._fallbackToFirstFunction;
    }
    if (this._propagateOriginalRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateOriginalRouting = this._propagateOriginalRouting;
    }
    if (this._serviceAccountCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentials = this._serviceAccountCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialRefreshDelay = undefined;
      this._enableCredentialsDiscovey = undefined;
      this._fallbackToFirstFunction = undefined;
      this._propagateOriginalRouting = undefined;
      this._serviceAccountCredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialRefreshDelay = value.credentialRefreshDelay;
      this._enableCredentialsDiscovey = value.enableCredentialsDiscovey;
      this._fallbackToFirstFunction = value.fallbackToFirstFunction;
      this._propagateOriginalRouting = value.propagateOriginalRouting;
      this._serviceAccountCredentials.internalValue = value.serviceAccountCredentials;
    }
  }

  // credential_refresh_delay - computed: false, optional: true, required: false
  private _credentialRefreshDelay?: string; 
  public get credentialRefreshDelay() {
    return this.getStringAttribute('credential_refresh_delay');
  }
  public set credentialRefreshDelay(value: string) {
    this._credentialRefreshDelay = value;
  }
  public resetCredentialRefreshDelay() {
    this._credentialRefreshDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialRefreshDelayInput() {
    return this._credentialRefreshDelay;
  }

  // enable_credentials_discovey - computed: false, optional: true, required: false
  private _enableCredentialsDiscovey?: boolean | cdktf.IResolvable; 
  public get enableCredentialsDiscovey() {
    return this.getBooleanAttribute('enable_credentials_discovey');
  }
  public set enableCredentialsDiscovey(value: boolean | cdktf.IResolvable) {
    this._enableCredentialsDiscovey = value;
  }
  public resetEnableCredentialsDiscovey() {
    this._enableCredentialsDiscovey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCredentialsDiscoveyInput() {
    return this._enableCredentialsDiscovey;
  }

  // fallback_to_first_function - computed: false, optional: true, required: false
  private _fallbackToFirstFunction?: boolean | cdktf.IResolvable; 
  public get fallbackToFirstFunction() {
    return this.getBooleanAttribute('fallback_to_first_function');
  }
  public set fallbackToFirstFunction(value: boolean | cdktf.IResolvable) {
    this._fallbackToFirstFunction = value;
  }
  public resetFallbackToFirstFunction() {
    this._fallbackToFirstFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToFirstFunctionInput() {
    return this._fallbackToFirstFunction;
  }

  // propagate_original_routing - computed: false, optional: true, required: false
  private _propagateOriginalRouting?: boolean | cdktf.IResolvable; 
  public get propagateOriginalRouting() {
    return this.getBooleanAttribute('propagate_original_routing');
  }
  public set propagateOriginalRouting(value: boolean | cdktf.IResolvable) {
    this._propagateOriginalRouting = value;
  }
  public resetPropagateOriginalRouting() {
    this._propagateOriginalRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateOriginalRoutingInput() {
    return this._propagateOriginalRouting;
  }

  // service_account_credentials - computed: false, optional: true, required: false
  private _serviceAccountCredentials = new DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentialsOutputReference(this, "service_account_credentials");
  public get serviceAccountCredentials() {
    return this._serviceAccountCredentials;
  }
  public putServiceAccountCredentials(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsServiceAccountCredentials) {
    this._serviceAccountCredentials.internalValue = value;
  }
  public resetServiceAccountCredentials() {
    this._serviceAccountCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsInput() {
    return this._serviceAccountCredentials.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_connections DataK8SGlooSoloIoSettingsV1Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_pending_requests DataK8SGlooSoloIoSettingsV1Manifest#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_requests DataK8SGlooSoloIoSettingsV1Manifest#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_retries DataK8SGlooSoloIoSettingsV1Manifest#max_retries}
  */
  readonly maxRetries?: number;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakersToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakersToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRetries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRetries = value.maxRetries;
    }
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#invalid_route_response_body DataK8SGlooSoloIoSettingsV1Manifest#invalid_route_response_body}
  */
  readonly invalidRouteResponseBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#invalid_route_response_code DataK8SGlooSoloIoSettingsV1Manifest#invalid_route_response_code}
  */
  readonly invalidRouteResponseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#replace_invalid_routes DataK8SGlooSoloIoSettingsV1Manifest#replace_invalid_routes}
  */
  readonly replaceInvalidRoutes?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicyToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_route_response_body: cdktf.stringToTerraform(struct!.invalidRouteResponseBody),
    invalid_route_response_code: cdktf.numberToTerraform(struct!.invalidRouteResponseCode),
    replace_invalid_routes: cdktf.booleanToTerraform(struct!.replaceInvalidRoutes),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicyToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invalid_route_response_body: {
      value: cdktf.stringToHclTerraform(struct!.invalidRouteResponseBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_route_response_code: {
      value: cdktf.numberToHclTerraform(struct!.invalidRouteResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replace_invalid_routes: {
      value: cdktf.booleanToHclTerraform(struct!.replaceInvalidRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidRouteResponseBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidRouteResponseBody = this._invalidRouteResponseBody;
    }
    if (this._invalidRouteResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidRouteResponseCode = this._invalidRouteResponseCode;
    }
    if (this._replaceInvalidRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidRoutes = this._replaceInvalidRoutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invalidRouteResponseBody = undefined;
      this._invalidRouteResponseCode = undefined;
      this._replaceInvalidRoutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invalidRouteResponseBody = value.invalidRouteResponseBody;
      this._invalidRouteResponseCode = value.invalidRouteResponseCode;
      this._replaceInvalidRoutes = value.replaceInvalidRoutes;
    }
  }

  // invalid_route_response_body - computed: false, optional: true, required: false
  private _invalidRouteResponseBody?: string; 
  public get invalidRouteResponseBody() {
    return this.getStringAttribute('invalid_route_response_body');
  }
  public set invalidRouteResponseBody(value: string) {
    this._invalidRouteResponseBody = value;
  }
  public resetInvalidRouteResponseBody() {
    this._invalidRouteResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidRouteResponseBodyInput() {
    return this._invalidRouteResponseBody;
  }

  // invalid_route_response_code - computed: false, optional: true, required: false
  private _invalidRouteResponseCode?: number; 
  public get invalidRouteResponseCode() {
    return this.getNumberAttribute('invalid_route_response_code');
  }
  public set invalidRouteResponseCode(value: number) {
    this._invalidRouteResponseCode = value;
  }
  public resetInvalidRouteResponseCode() {
    this._invalidRouteResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidRouteResponseCodeInput() {
    return this._invalidRouteResponseCode;
  }

  // replace_invalid_routes - computed: false, optional: true, required: false
  private _replaceInvalidRoutes?: boolean | cdktf.IResolvable; 
  public get replaceInvalidRoutes() {
    return this.getBooleanAttribute('replace_invalid_routes');
  }
  public set replaceInvalidRoutes(value: boolean | cdktf.IResolvable) {
    this._replaceInvalidRoutes = value;
  }
  public resetReplaceInvalidRoutes() {
    this._replaceInvalidRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidRoutesInput() {
    return this._replaceInvalidRoutes;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#append_x_forwarded_host DataK8SGlooSoloIoSettingsV1Manifest#append_x_forwarded_host}
  */
  readonly appendXForwardedHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#enable_auto_mtls DataK8SGlooSoloIoSettingsV1Manifest#enable_auto_mtls}
  */
  readonly enableAutoMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#enable_integration DataK8SGlooSoloIoSettingsV1Manifest#enable_integration}
  */
  readonly enableIntegration?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_x_forwarded_host: cdktf.booleanToTerraform(struct!.appendXForwardedHost),
    enable_auto_mtls: cdktf.booleanToTerraform(struct!.enableAutoMtls),
    enable_integration: cdktf.booleanToTerraform(struct!.enableIntegration),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_x_forwarded_host: {
      value: cdktf.booleanToHclTerraform(struct!.appendXForwardedHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_auto_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_integration: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendXForwardedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendXForwardedHost = this._appendXForwardedHost;
    }
    if (this._enableAutoMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoMtls = this._enableAutoMtls;
    }
    if (this._enableIntegration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegration = this._enableIntegration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendXForwardedHost = undefined;
      this._enableAutoMtls = undefined;
      this._enableIntegration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendXForwardedHost = value.appendXForwardedHost;
      this._enableAutoMtls = value.enableAutoMtls;
      this._enableIntegration = value.enableIntegration;
    }
  }

  // append_x_forwarded_host - computed: false, optional: true, required: false
  private _appendXForwardedHost?: boolean | cdktf.IResolvable; 
  public get appendXForwardedHost() {
    return this.getBooleanAttribute('append_x_forwarded_host');
  }
  public set appendXForwardedHost(value: boolean | cdktf.IResolvable) {
    this._appendXForwardedHost = value;
  }
  public resetAppendXForwardedHost() {
    this._appendXForwardedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendXForwardedHostInput() {
    return this._appendXForwardedHost;
  }

  // enable_auto_mtls - computed: false, optional: true, required: false
  private _enableAutoMtls?: boolean | cdktf.IResolvable; 
  public get enableAutoMtls() {
    return this.getBooleanAttribute('enable_auto_mtls');
  }
  public set enableAutoMtls(value: boolean | cdktf.IResolvable) {
    this._enableAutoMtls = value;
  }
  public resetEnableAutoMtls() {
    this._enableAutoMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoMtlsInput() {
    return this._enableAutoMtls;
  }

  // enable_integration - computed: false, optional: true, required: false
  private _enableIntegration?: boolean | cdktf.IResolvable; 
  public get enableIntegration() {
    return this.getBooleanAttribute('enable_integration');
  }
  public set enableIntegration(value: boolean | cdktf.IResolvable) {
    this._enableIntegration = value;
  }
  public resetEnableIntegration() {
    this._enableIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrationInput() {
    return this._enableIntegration;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGloo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#aws_options DataK8SGlooSoloIoSettingsV1Manifest#aws_options}
  */
  readonly awsOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#circuit_breakers DataK8SGlooSoloIoSettingsV1Manifest#circuit_breakers}
  */
  readonly circuitBreakers?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disable_grpc_web DataK8SGlooSoloIoSettingsV1Manifest#disable_grpc_web}
  */
  readonly disableGrpcWeb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disable_kubernetes_destinations DataK8SGlooSoloIoSettingsV1Manifest#disable_kubernetes_destinations}
  */
  readonly disableKubernetesDestinations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#disable_proxy_garbage_collection DataK8SGlooSoloIoSettingsV1Manifest#disable_proxy_garbage_collection}
  */
  readonly disableProxyGarbageCollection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#enable_rest_eds DataK8SGlooSoloIoSettingsV1Manifest#enable_rest_eds}
  */
  readonly enableRestEds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#endpoints_warming_timeout DataK8SGlooSoloIoSettingsV1Manifest#endpoints_warming_timeout}
  */
  readonly endpointsWarmingTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#failover_upstream_dns_polling_interval DataK8SGlooSoloIoSettingsV1Manifest#failover_upstream_dns_polling_interval}
  */
  readonly failoverUpstreamDnsPollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#invalid_config_policy DataK8SGlooSoloIoSettingsV1Manifest#invalid_config_policy}
  */
  readonly invalidConfigPolicy?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#istio_options DataK8SGlooSoloIoSettingsV1Manifest#istio_options}
  */
  readonly istioOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#log_transformation_request_response_info DataK8SGlooSoloIoSettingsV1Manifest#log_transformation_request_response_info}
  */
  readonly logTransformationRequestResponseInfo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#proxy_debug_bind_addr DataK8SGlooSoloIoSettingsV1Manifest#proxy_debug_bind_addr}
  */
  readonly proxyDebugBindAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#regex_max_program_size DataK8SGlooSoloIoSettingsV1Manifest#regex_max_program_size}
  */
  readonly regexMaxProgramSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#remove_unused_filters DataK8SGlooSoloIoSettingsV1Manifest#remove_unused_filters}
  */
  readonly removeUnusedFilters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#rest_xds_bind_addr DataK8SGlooSoloIoSettingsV1Manifest#rest_xds_bind_addr}
  */
  readonly restXdsBindAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#transformation_escape_characters DataK8SGlooSoloIoSettingsV1Manifest#transformation_escape_characters}
  */
  readonly transformationEscapeCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#validation_bind_addr DataK8SGlooSoloIoSettingsV1Manifest#validation_bind_addr}
  */
  readonly validationBindAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#xds_bind_addr DataK8SGlooSoloIoSettingsV1Manifest#xds_bind_addr}
  */
  readonly xdsBindAddr?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGloo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_options: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsToTerraform(struct!.awsOptions),
    circuit_breakers: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakersToTerraform(struct!.circuitBreakers),
    disable_grpc_web: cdktf.booleanToTerraform(struct!.disableGrpcWeb),
    disable_kubernetes_destinations: cdktf.booleanToTerraform(struct!.disableKubernetesDestinations),
    disable_proxy_garbage_collection: cdktf.booleanToTerraform(struct!.disableProxyGarbageCollection),
    enable_rest_eds: cdktf.booleanToTerraform(struct!.enableRestEds),
    endpoints_warming_timeout: cdktf.stringToTerraform(struct!.endpointsWarmingTimeout),
    failover_upstream_dns_polling_interval: cdktf.stringToTerraform(struct!.failoverUpstreamDnsPollingInterval),
    invalid_config_policy: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicyToTerraform(struct!.invalidConfigPolicy),
    istio_options: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptionsToTerraform(struct!.istioOptions),
    log_transformation_request_response_info: cdktf.booleanToTerraform(struct!.logTransformationRequestResponseInfo),
    proxy_debug_bind_addr: cdktf.stringToTerraform(struct!.proxyDebugBindAddr),
    regex_max_program_size: cdktf.numberToTerraform(struct!.regexMaxProgramSize),
    remove_unused_filters: cdktf.booleanToTerraform(struct!.removeUnusedFilters),
    rest_xds_bind_addr: cdktf.stringToTerraform(struct!.restXdsBindAddr),
    transformation_escape_characters: cdktf.booleanToTerraform(struct!.transformationEscapeCharacters),
    validation_bind_addr: cdktf.stringToTerraform(struct!.validationBindAddr),
    xds_bind_addr: cdktf.stringToTerraform(struct!.xdsBindAddr),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGlooToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGloo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsToHclTerraform(struct!.awsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptions",
    },
    circuit_breakers: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakersToHclTerraform(struct!.circuitBreakers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakers",
    },
    disable_grpc_web: {
      value: cdktf.booleanToHclTerraform(struct!.disableGrpcWeb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_kubernetes_destinations: {
      value: cdktf.booleanToHclTerraform(struct!.disableKubernetesDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_proxy_garbage_collection: {
      value: cdktf.booleanToHclTerraform(struct!.disableProxyGarbageCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rest_eds: {
      value: cdktf.booleanToHclTerraform(struct!.enableRestEds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoints_warming_timeout: {
      value: cdktf.stringToHclTerraform(struct!.endpointsWarmingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_upstream_dns_polling_interval: {
      value: cdktf.stringToHclTerraform(struct!.failoverUpstreamDnsPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_config_policy: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicyToHclTerraform(struct!.invalidConfigPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicy",
    },
    istio_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptionsToHclTerraform(struct!.istioOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptions",
    },
    log_transformation_request_response_info: {
      value: cdktf.booleanToHclTerraform(struct!.logTransformationRequestResponseInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_debug_bind_addr: {
      value: cdktf.stringToHclTerraform(struct!.proxyDebugBindAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_max_program_size: {
      value: cdktf.numberToHclTerraform(struct!.regexMaxProgramSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_unused_filters: {
      value: cdktf.booleanToHclTerraform(struct!.removeUnusedFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rest_xds_bind_addr: {
      value: cdktf.stringToHclTerraform(struct!.restXdsBindAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_escape_characters: {
      value: cdktf.booleanToHclTerraform(struct!.transformationEscapeCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_bind_addr: {
      value: cdktf.stringToHclTerraform(struct!.validationBindAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xds_bind_addr: {
      value: cdktf.stringToHclTerraform(struct!.xdsBindAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGlooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGloo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsOptions = this._awsOptions?.internalValue;
    }
    if (this._circuitBreakers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreakers = this._circuitBreakers?.internalValue;
    }
    if (this._disableGrpcWeb !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGrpcWeb = this._disableGrpcWeb;
    }
    if (this._disableKubernetesDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableKubernetesDestinations = this._disableKubernetesDestinations;
    }
    if (this._disableProxyGarbageCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxyGarbageCollection = this._disableProxyGarbageCollection;
    }
    if (this._enableRestEds !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRestEds = this._enableRestEds;
    }
    if (this._endpointsWarmingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointsWarmingTimeout = this._endpointsWarmingTimeout;
    }
    if (this._failoverUpstreamDnsPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverUpstreamDnsPollingInterval = this._failoverUpstreamDnsPollingInterval;
    }
    if (this._invalidConfigPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidConfigPolicy = this._invalidConfigPolicy?.internalValue;
    }
    if (this._istioOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioOptions = this._istioOptions?.internalValue;
    }
    if (this._logTransformationRequestResponseInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTransformationRequestResponseInfo = this._logTransformationRequestResponseInfo;
    }
    if (this._proxyDebugBindAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyDebugBindAddr = this._proxyDebugBindAddr;
    }
    if (this._regexMaxProgramSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMaxProgramSize = this._regexMaxProgramSize;
    }
    if (this._removeUnusedFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeUnusedFilters = this._removeUnusedFilters;
    }
    if (this._restXdsBindAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.restXdsBindAddr = this._restXdsBindAddr;
    }
    if (this._transformationEscapeCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationEscapeCharacters = this._transformationEscapeCharacters;
    }
    if (this._validationBindAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationBindAddr = this._validationBindAddr;
    }
    if (this._xdsBindAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.xdsBindAddr = this._xdsBindAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGloo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsOptions.internalValue = undefined;
      this._circuitBreakers.internalValue = undefined;
      this._disableGrpcWeb = undefined;
      this._disableKubernetesDestinations = undefined;
      this._disableProxyGarbageCollection = undefined;
      this._enableRestEds = undefined;
      this._endpointsWarmingTimeout = undefined;
      this._failoverUpstreamDnsPollingInterval = undefined;
      this._invalidConfigPolicy.internalValue = undefined;
      this._istioOptions.internalValue = undefined;
      this._logTransformationRequestResponseInfo = undefined;
      this._proxyDebugBindAddr = undefined;
      this._regexMaxProgramSize = undefined;
      this._removeUnusedFilters = undefined;
      this._restXdsBindAddr = undefined;
      this._transformationEscapeCharacters = undefined;
      this._validationBindAddr = undefined;
      this._xdsBindAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsOptions.internalValue = value.awsOptions;
      this._circuitBreakers.internalValue = value.circuitBreakers;
      this._disableGrpcWeb = value.disableGrpcWeb;
      this._disableKubernetesDestinations = value.disableKubernetesDestinations;
      this._disableProxyGarbageCollection = value.disableProxyGarbageCollection;
      this._enableRestEds = value.enableRestEds;
      this._endpointsWarmingTimeout = value.endpointsWarmingTimeout;
      this._failoverUpstreamDnsPollingInterval = value.failoverUpstreamDnsPollingInterval;
      this._invalidConfigPolicy.internalValue = value.invalidConfigPolicy;
      this._istioOptions.internalValue = value.istioOptions;
      this._logTransformationRequestResponseInfo = value.logTransformationRequestResponseInfo;
      this._proxyDebugBindAddr = value.proxyDebugBindAddr;
      this._regexMaxProgramSize = value.regexMaxProgramSize;
      this._removeUnusedFilters = value.removeUnusedFilters;
      this._restXdsBindAddr = value.restXdsBindAddr;
      this._transformationEscapeCharacters = value.transformationEscapeCharacters;
      this._validationBindAddr = value.validationBindAddr;
      this._xdsBindAddr = value.xdsBindAddr;
    }
  }

  // aws_options - computed: false, optional: true, required: false
  private _awsOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptionsOutputReference(this, "aws_options");
  public get awsOptions() {
    return this._awsOptions;
  }
  public putAwsOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooAwsOptions) {
    this._awsOptions.internalValue = value;
  }
  public resetAwsOptions() {
    this._awsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOptionsInput() {
    return this._awsOptions.internalValue;
  }

  // circuit_breakers - computed: false, optional: true, required: false
  private _circuitBreakers = new DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakersOutputReference(this, "circuit_breakers");
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooCircuitBreakers) {
    this._circuitBreakers.internalValue = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers.internalValue;
  }

  // disable_grpc_web - computed: false, optional: true, required: false
  private _disableGrpcWeb?: boolean | cdktf.IResolvable; 
  public get disableGrpcWeb() {
    return this.getBooleanAttribute('disable_grpc_web');
  }
  public set disableGrpcWeb(value: boolean | cdktf.IResolvable) {
    this._disableGrpcWeb = value;
  }
  public resetDisableGrpcWeb() {
    this._disableGrpcWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGrpcWebInput() {
    return this._disableGrpcWeb;
  }

  // disable_kubernetes_destinations - computed: false, optional: true, required: false
  private _disableKubernetesDestinations?: boolean | cdktf.IResolvable; 
  public get disableKubernetesDestinations() {
    return this.getBooleanAttribute('disable_kubernetes_destinations');
  }
  public set disableKubernetesDestinations(value: boolean | cdktf.IResolvable) {
    this._disableKubernetesDestinations = value;
  }
  public resetDisableKubernetesDestinations() {
    this._disableKubernetesDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKubernetesDestinationsInput() {
    return this._disableKubernetesDestinations;
  }

  // disable_proxy_garbage_collection - computed: false, optional: true, required: false
  private _disableProxyGarbageCollection?: boolean | cdktf.IResolvable; 
  public get disableProxyGarbageCollection() {
    return this.getBooleanAttribute('disable_proxy_garbage_collection');
  }
  public set disableProxyGarbageCollection(value: boolean | cdktf.IResolvable) {
    this._disableProxyGarbageCollection = value;
  }
  public resetDisableProxyGarbageCollection() {
    this._disableProxyGarbageCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyGarbageCollectionInput() {
    return this._disableProxyGarbageCollection;
  }

  // enable_rest_eds - computed: false, optional: true, required: false
  private _enableRestEds?: boolean | cdktf.IResolvable; 
  public get enableRestEds() {
    return this.getBooleanAttribute('enable_rest_eds');
  }
  public set enableRestEds(value: boolean | cdktf.IResolvable) {
    this._enableRestEds = value;
  }
  public resetEnableRestEds() {
    this._enableRestEds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestEdsInput() {
    return this._enableRestEds;
  }

  // endpoints_warming_timeout - computed: false, optional: true, required: false
  private _endpointsWarmingTimeout?: string; 
  public get endpointsWarmingTimeout() {
    return this.getStringAttribute('endpoints_warming_timeout');
  }
  public set endpointsWarmingTimeout(value: string) {
    this._endpointsWarmingTimeout = value;
  }
  public resetEndpointsWarmingTimeout() {
    this._endpointsWarmingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsWarmingTimeoutInput() {
    return this._endpointsWarmingTimeout;
  }

  // failover_upstream_dns_polling_interval - computed: false, optional: true, required: false
  private _failoverUpstreamDnsPollingInterval?: string; 
  public get failoverUpstreamDnsPollingInterval() {
    return this.getStringAttribute('failover_upstream_dns_polling_interval');
  }
  public set failoverUpstreamDnsPollingInterval(value: string) {
    this._failoverUpstreamDnsPollingInterval = value;
  }
  public resetFailoverUpstreamDnsPollingInterval() {
    this._failoverUpstreamDnsPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverUpstreamDnsPollingIntervalInput() {
    return this._failoverUpstreamDnsPollingInterval;
  }

  // invalid_config_policy - computed: false, optional: true, required: false
  private _invalidConfigPolicy = new DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicyOutputReference(this, "invalid_config_policy");
  public get invalidConfigPolicy() {
    return this._invalidConfigPolicy;
  }
  public putInvalidConfigPolicy(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooInvalidConfigPolicy) {
    this._invalidConfigPolicy.internalValue = value;
  }
  public resetInvalidConfigPolicy() {
    this._invalidConfigPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidConfigPolicyInput() {
    return this._invalidConfigPolicy.internalValue;
  }

  // istio_options - computed: false, optional: true, required: false
  private _istioOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptionsOutputReference(this, "istio_options");
  public get istioOptions() {
    return this._istioOptions;
  }
  public putIstioOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGlooIstioOptions) {
    this._istioOptions.internalValue = value;
  }
  public resetIstioOptions() {
    this._istioOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioOptionsInput() {
    return this._istioOptions.internalValue;
  }

  // log_transformation_request_response_info - computed: false, optional: true, required: false
  private _logTransformationRequestResponseInfo?: boolean | cdktf.IResolvable; 
  public get logTransformationRequestResponseInfo() {
    return this.getBooleanAttribute('log_transformation_request_response_info');
  }
  public set logTransformationRequestResponseInfo(value: boolean | cdktf.IResolvable) {
    this._logTransformationRequestResponseInfo = value;
  }
  public resetLogTransformationRequestResponseInfo() {
    this._logTransformationRequestResponseInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTransformationRequestResponseInfoInput() {
    return this._logTransformationRequestResponseInfo;
  }

  // proxy_debug_bind_addr - computed: false, optional: true, required: false
  private _proxyDebugBindAddr?: string; 
  public get proxyDebugBindAddr() {
    return this.getStringAttribute('proxy_debug_bind_addr');
  }
  public set proxyDebugBindAddr(value: string) {
    this._proxyDebugBindAddr = value;
  }
  public resetProxyDebugBindAddr() {
    this._proxyDebugBindAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyDebugBindAddrInput() {
    return this._proxyDebugBindAddr;
  }

  // regex_max_program_size - computed: false, optional: true, required: false
  private _regexMaxProgramSize?: number; 
  public get regexMaxProgramSize() {
    return this.getNumberAttribute('regex_max_program_size');
  }
  public set regexMaxProgramSize(value: number) {
    this._regexMaxProgramSize = value;
  }
  public resetRegexMaxProgramSize() {
    this._regexMaxProgramSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMaxProgramSizeInput() {
    return this._regexMaxProgramSize;
  }

  // remove_unused_filters - computed: false, optional: true, required: false
  private _removeUnusedFilters?: boolean | cdktf.IResolvable; 
  public get removeUnusedFilters() {
    return this.getBooleanAttribute('remove_unused_filters');
  }
  public set removeUnusedFilters(value: boolean | cdktf.IResolvable) {
    this._removeUnusedFilters = value;
  }
  public resetRemoveUnusedFilters() {
    this._removeUnusedFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeUnusedFiltersInput() {
    return this._removeUnusedFilters;
  }

  // rest_xds_bind_addr - computed: false, optional: true, required: false
  private _restXdsBindAddr?: string; 
  public get restXdsBindAddr() {
    return this.getStringAttribute('rest_xds_bind_addr');
  }
  public set restXdsBindAddr(value: string) {
    this._restXdsBindAddr = value;
  }
  public resetRestXdsBindAddr() {
    this._restXdsBindAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restXdsBindAddrInput() {
    return this._restXdsBindAddr;
  }

  // transformation_escape_characters - computed: false, optional: true, required: false
  private _transformationEscapeCharacters?: boolean | cdktf.IResolvable; 
  public get transformationEscapeCharacters() {
    return this.getBooleanAttribute('transformation_escape_characters');
  }
  public set transformationEscapeCharacters(value: boolean | cdktf.IResolvable) {
    this._transformationEscapeCharacters = value;
  }
  public resetTransformationEscapeCharacters() {
    this._transformationEscapeCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationEscapeCharactersInput() {
    return this._transformationEscapeCharacters;
  }

  // validation_bind_addr - computed: false, optional: true, required: false
  private _validationBindAddr?: string; 
  public get validationBindAddr() {
    return this.getStringAttribute('validation_bind_addr');
  }
  public set validationBindAddr(value: string) {
    this._validationBindAddr = value;
  }
  public resetValidationBindAddr() {
    this._validationBindAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationBindAddrInput() {
    return this._validationBindAddr;
  }

  // xds_bind_addr - computed: false, optional: true, required: false
  private _xdsBindAddr?: string; 
  public get xdsBindAddr() {
    return this.getStringAttribute('xds_bind_addr');
  }
  public set xdsBindAddr(value: string) {
    this._xdsBindAddr = value;
  }
  public resetXdsBindAddr() {
    this._xdsBindAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xdsBindAddrInput() {
    return this._xdsBindAddr;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#processing_rules DataK8SGlooSoloIoSettingsV1Manifest#processing_rules}
  */
  readonly processingRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#reject_breaking_changes DataK8SGlooSoloIoSettingsV1Manifest#reject_breaking_changes}
  */
  readonly rejectBreakingChanges?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processing_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.processingRules),
    reject_breaking_changes: cdktf.booleanToTerraform(struct!.rejectBreakingChanges),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processing_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.processingRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reject_breaking_changes: {
      value: cdktf.booleanToHclTerraform(struct!.rejectBreakingChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processingRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingRules = this._processingRules;
    }
    if (this._rejectBreakingChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectBreakingChanges = this._rejectBreakingChanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processingRules = undefined;
      this._rejectBreakingChanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processingRules = value.processingRules;
      this._rejectBreakingChanges = value.rejectBreakingChanges;
    }
  }

  // processing_rules - computed: false, optional: true, required: false
  private _processingRules?: string[]; 
  public get processingRules() {
    return this.getListAttribute('processing_rules');
  }
  public set processingRules(value: string[]) {
    this._processingRules = value;
  }
  public resetProcessingRules() {
    this._processingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingRulesInput() {
    return this._processingRules;
  }

  // reject_breaking_changes - computed: false, optional: true, required: false
  private _rejectBreakingChanges?: boolean | cdktf.IResolvable; 
  public get rejectBreakingChanges() {
    return this.getBooleanAttribute('reject_breaking_changes');
  }
  public set rejectBreakingChanges(value: boolean | cdktf.IResolvable) {
    this._rejectBreakingChanges = value;
  }
  public resetRejectBreakingChanges() {
    this._rejectBreakingChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectBreakingChangesInput() {
    return this._rejectBreakingChanges;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#schema_change_validation_options DataK8SGlooSoloIoSettingsV1Manifest#schema_change_validation_options}
  */
  readonly schemaChangeValidationOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptions;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_change_validation_options: dataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptionsToTerraform(struct!.schemaChangeValidationOptions),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_change_validation_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptionsToHclTerraform(struct!.schemaChangeValidationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaChangeValidationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaChangeValidationOptions = this._schemaChangeValidationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaChangeValidationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaChangeValidationOptions.internalValue = value.schemaChangeValidationOptions;
    }
  }

  // schema_change_validation_options - computed: false, optional: true, required: false
  private _schemaChangeValidationOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptionsOutputReference(this, "schema_change_validation_options");
  public get schemaChangeValidationOptions() {
    return this._schemaChangeValidationOptions;
  }
  public putSchemaChangeValidationOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsSchemaChangeValidationOptions) {
    this._schemaChangeValidationOptions.internalValue = value;
  }
  public resetSchemaChangeValidationOptions() {
    this._schemaChangeValidationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaChangeValidationOptionsInput() {
    return this._schemaChangeValidationOptions.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecKnative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#cluster_ingress_proxy_address DataK8SGlooSoloIoSettingsV1Manifest#cluster_ingress_proxy_address}
  */
  readonly clusterIngressProxyAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#knative_external_proxy_address DataK8SGlooSoloIoSettingsV1Manifest#knative_external_proxy_address}
  */
  readonly knativeExternalProxyAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#knative_internal_proxy_address DataK8SGlooSoloIoSettingsV1Manifest#knative_internal_proxy_address}
  */
  readonly knativeInternalProxyAddress?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecKnativeToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecKnative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ingress_proxy_address: cdktf.stringToTerraform(struct!.clusterIngressProxyAddress),
    knative_external_proxy_address: cdktf.stringToTerraform(struct!.knativeExternalProxyAddress),
    knative_internal_proxy_address: cdktf.stringToTerraform(struct!.knativeInternalProxyAddress),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecKnativeToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecKnative | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ingress_proxy_address: {
      value: cdktf.stringToHclTerraform(struct!.clusterIngressProxyAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    knative_external_proxy_address: {
      value: cdktf.stringToHclTerraform(struct!.knativeExternalProxyAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    knative_internal_proxy_address: {
      value: cdktf.stringToHclTerraform(struct!.knativeInternalProxyAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecKnativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecKnative | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIngressProxyAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIngressProxyAddress = this._clusterIngressProxyAddress;
    }
    if (this._knativeExternalProxyAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.knativeExternalProxyAddress = this._knativeExternalProxyAddress;
    }
    if (this._knativeInternalProxyAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.knativeInternalProxyAddress = this._knativeInternalProxyAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecKnative | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIngressProxyAddress = undefined;
      this._knativeExternalProxyAddress = undefined;
      this._knativeInternalProxyAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIngressProxyAddress = value.clusterIngressProxyAddress;
      this._knativeExternalProxyAddress = value.knativeExternalProxyAddress;
      this._knativeInternalProxyAddress = value.knativeInternalProxyAddress;
    }
  }

  // cluster_ingress_proxy_address - computed: false, optional: true, required: false
  private _clusterIngressProxyAddress?: string; 
  public get clusterIngressProxyAddress() {
    return this.getStringAttribute('cluster_ingress_proxy_address');
  }
  public set clusterIngressProxyAddress(value: string) {
    this._clusterIngressProxyAddress = value;
  }
  public resetClusterIngressProxyAddress() {
    this._clusterIngressProxyAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIngressProxyAddressInput() {
    return this._clusterIngressProxyAddress;
  }

  // knative_external_proxy_address - computed: false, optional: true, required: false
  private _knativeExternalProxyAddress?: string; 
  public get knativeExternalProxyAddress() {
    return this.getStringAttribute('knative_external_proxy_address');
  }
  public set knativeExternalProxyAddress(value: string) {
    this._knativeExternalProxyAddress = value;
  }
  public resetKnativeExternalProxyAddress() {
    this._knativeExternalProxyAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knativeExternalProxyAddressInput() {
    return this._knativeExternalProxyAddress;
  }

  // knative_internal_proxy_address - computed: false, optional: true, required: false
  private _knativeInternalProxyAddress?: string; 
  public get knativeInternalProxyAddress() {
    return this.getStringAttribute('knative_internal_proxy_address');
  }
  public set knativeInternalProxyAddress(value: string) {
    this._knativeInternalProxyAddress = value;
  }
  public resetKnativeInternalProxyAddress() {
    this._knativeInternalProxyAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knativeInternalProxyAddressInput() {
    return this._knativeInternalProxyAddress;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#burst DataK8SGlooSoloIoSettingsV1Manifest#burst}
  */
  readonly burst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#qps DataK8SGlooSoloIoSettingsV1Manifest#qps}
  */
  readonly qps?: number;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimitsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst: cdktf.numberToTerraform(struct!.burst),
    qps: cdktf.numberToTerraform(struct!.qps),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimitsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimits | cdktf.IResolvable): any {
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
    qps: {
      value: cdktf.numberToHclTerraform(struct!.qps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._qps !== undefined) {
      hasAnyValues = true;
      internalValueResult.qps = this._qps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burst = undefined;
      this._qps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burst = value.burst;
      this._qps = value.qps;
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

  // qps - computed: false, optional: true, required: false
  private _qps?: number; 
  public get qps() {
    return this.getNumberAttribute('qps');
  }
  public set qps(value: number) {
    this._qps = value;
  }
  public resetQps() {
    this._qps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpsInput() {
    return this._qps;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#rate_limits DataK8SGlooSoloIoSettingsV1Manifest#rate_limits}
  */
  readonly rateLimits?: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimits;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limits: dataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimitsToTerraform(struct!.rateLimits),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limits: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimitsToHclTerraform(struct!.rateLimits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimits",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimits = this._rateLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rateLimits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rateLimits.internalValue = value.rateLimits;
    }
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimitsOutputReference(this, "rate_limits");
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesRateLimits) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#name DataK8SGlooSoloIoSettingsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#namespace DataK8SGlooSoloIoSettingsV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRefToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRefToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRef | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#authority DataK8SGlooSoloIoSettingsV1Manifest#authority}
  */
  readonly authority?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcServiceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcServiceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
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
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_headers DataK8SGlooSoloIoSettingsV1Manifest#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_headers_regex DataK8SGlooSoloIoSettingsV1Manifest#allowed_headers_regex}
  */
  readonly allowedHeadersRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#headers_to_add DataK8SGlooSoloIoSettingsV1Manifest#headers_to_add}
  */
  readonly headersToAdd?: { [key: string]: string };
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequestToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_headers_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeadersRegex),
    headers_to_add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headersToAdd),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequestToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_headers_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeadersRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers_to_add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headersToAdd),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedHeadersRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeadersRegex = this._allowedHeadersRegex;
    }
    if (this._headersToAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToAdd = this._headersToAdd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedHeadersRegex = undefined;
      this._headersToAdd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedHeadersRegex = value.allowedHeadersRegex;
      this._headersToAdd = value.headersToAdd;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_headers_regex - computed: false, optional: true, required: false
  private _allowedHeadersRegex?: string[]; 
  public get allowedHeadersRegex() {
    return this.getListAttribute('allowed_headers_regex');
  }
  public set allowedHeadersRegex(value: string[]) {
    this._allowedHeadersRegex = value;
  }
  public resetAllowedHeadersRegex() {
    this._allowedHeadersRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersRegexInput() {
    return this._allowedHeadersRegex;
  }

  // headers_to_add - computed: false, optional: true, required: false
  private _headersToAdd?: { [key: string]: string }; 
  public get headersToAdd() {
    return this.getStringMapAttribute('headers_to_add');
  }
  public set headersToAdd(value: { [key: string]: string }) {
    this._headersToAdd = value;
  }
  public resetHeadersToAdd() {
    this._headersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToAddInput() {
    return this._headersToAdd;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_client_headers DataK8SGlooSoloIoSettingsV1Manifest#allowed_client_headers}
  */
  readonly allowedClientHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_upstream_headers DataK8SGlooSoloIoSettingsV1Manifest#allowed_upstream_headers}
  */
  readonly allowedUpstreamHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allowed_upstream_headers_to_append DataK8SGlooSoloIoSettingsV1Manifest#allowed_upstream_headers_to_append}
  */
  readonly allowedUpstreamHeadersToAppend?: string[];
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponseToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_client_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedClientHeaders),
    allowed_upstream_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUpstreamHeaders),
    allowed_upstream_headers_to_append: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUpstreamHeadersToAppend),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponseToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_client_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedClientHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_upstream_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUpstreamHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_upstream_headers_to_append: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUpstreamHeadersToAppend),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClientHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClientHeaders = this._allowedClientHeaders;
    }
    if (this._allowedUpstreamHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUpstreamHeaders = this._allowedUpstreamHeaders;
    }
    if (this._allowedUpstreamHeadersToAppend !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUpstreamHeadersToAppend = this._allowedUpstreamHeadersToAppend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedClientHeaders = undefined;
      this._allowedUpstreamHeaders = undefined;
      this._allowedUpstreamHeadersToAppend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedClientHeaders = value.allowedClientHeaders;
      this._allowedUpstreamHeaders = value.allowedUpstreamHeaders;
      this._allowedUpstreamHeadersToAppend = value.allowedUpstreamHeadersToAppend;
    }
  }

  // allowed_client_headers - computed: false, optional: true, required: false
  private _allowedClientHeaders?: string[]; 
  public get allowedClientHeaders() {
    return this.getListAttribute('allowed_client_headers');
  }
  public set allowedClientHeaders(value: string[]) {
    this._allowedClientHeaders = value;
  }
  public resetAllowedClientHeaders() {
    this._allowedClientHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientHeadersInput() {
    return this._allowedClientHeaders;
  }

  // allowed_upstream_headers - computed: false, optional: true, required: false
  private _allowedUpstreamHeaders?: string[]; 
  public get allowedUpstreamHeaders() {
    return this.getListAttribute('allowed_upstream_headers');
  }
  public set allowedUpstreamHeaders(value: string[]) {
    this._allowedUpstreamHeaders = value;
  }
  public resetAllowedUpstreamHeaders() {
    this._allowedUpstreamHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUpstreamHeadersInput() {
    return this._allowedUpstreamHeaders;
  }

  // allowed_upstream_headers_to_append - computed: false, optional: true, required: false
  private _allowedUpstreamHeadersToAppend?: string[]; 
  public get allowedUpstreamHeadersToAppend() {
    return this.getListAttribute('allowed_upstream_headers_to_append');
  }
  public set allowedUpstreamHeadersToAppend(value: string[]) {
    this._allowedUpstreamHeadersToAppend = value;
  }
  public resetAllowedUpstreamHeadersToAppend() {
    this._allowedUpstreamHeadersToAppend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUpstreamHeadersToAppendInput() {
    return this._allowedUpstreamHeadersToAppend;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#path_prefix DataK8SGlooSoloIoSettingsV1Manifest#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request DataK8SGlooSoloIoSettingsV1Manifest#request}
  */
  readonly request?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#response DataK8SGlooSoloIoSettingsV1Manifest#response}
  */
  readonly response?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponse;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    request: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequestToTerraform(struct!.request),
    response: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponseToTerraform(struct!.response),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequest",
    },
    response: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pathPrefix = undefined;
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
      this._pathPrefix = value.pathPrefix;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
    }
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceRequest) {
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
  private _response = new DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceResponse) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#allow_partial_message DataK8SGlooSoloIoSettingsV1Manifest#allow_partial_message}
  */
  readonly allowPartialMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#max_request_bytes DataK8SGlooSoloIoSettingsV1Manifest#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#pack_as_bytes DataK8SGlooSoloIoSettingsV1Manifest#pack_as_bytes}
  */
  readonly packAsBytes?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBodyToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBody | cdktf.IResolvable): any {
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


export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBodyToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBody | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBody | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBody | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#clear_route_cache DataK8SGlooSoloIoSettingsV1Manifest#clear_route_cache}
  */
  readonly clearRouteCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#extauthz_server_ref DataK8SGlooSoloIoSettingsV1Manifest#extauthz_server_ref}
  */
  readonly extauthzServerRef?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#failure_mode_allow DataK8SGlooSoloIoSettingsV1Manifest#failure_mode_allow}
  */
  readonly failureModeAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#grpc_service DataK8SGlooSoloIoSettingsV1Manifest#grpc_service}
  */
  readonly grpcService?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#http_service DataK8SGlooSoloIoSettingsV1Manifest#http_service}
  */
  readonly httpService?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_body DataK8SGlooSoloIoSettingsV1Manifest#request_body}
  */
  readonly requestBody?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_timeout DataK8SGlooSoloIoSettingsV1Manifest#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#stat_prefix DataK8SGlooSoloIoSettingsV1Manifest#stat_prefix}
  */
  readonly statPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#status_on_error DataK8SGlooSoloIoSettingsV1Manifest#status_on_error}
  */
  readonly statusOnError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#transport_api_version DataK8SGlooSoloIoSettingsV1Manifest#transport_api_version}
  */
  readonly transportApiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#user_id_header DataK8SGlooSoloIoSettingsV1Manifest#user_id_header}
  */
  readonly userIdHeader?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_route_cache: cdktf.booleanToTerraform(struct!.clearRouteCache),
    extauthz_server_ref: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRefToTerraform(struct!.extauthzServerRef),
    failure_mode_allow: cdktf.booleanToTerraform(struct!.failureModeAllow),
    grpc_service: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcServiceToTerraform(struct!.grpcService),
    http_service: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceToTerraform(struct!.httpService),
    request_body: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBodyToTerraform(struct!.requestBody),
    request_timeout: cdktf.stringToTerraform(struct!.requestTimeout),
    stat_prefix: cdktf.stringToTerraform(struct!.statPrefix),
    status_on_error: cdktf.numberToTerraform(struct!.statusOnError),
    transport_api_version: cdktf.stringToTerraform(struct!.transportApiVersion),
    user_id_header: cdktf.stringToTerraform(struct!.userIdHeader),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_route_cache: {
      value: cdktf.booleanToHclTerraform(struct!.clearRouteCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extauthz_server_ref: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRefToHclTerraform(struct!.extauthzServerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRef",
    },
    failure_mode_allow: {
      value: cdktf.booleanToHclTerraform(struct!.failureModeAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grpc_service: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcServiceToHclTerraform(struct!.grpcService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcService",
    },
    http_service: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceToHclTerraform(struct!.httpService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpService",
    },
    request_body: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBodyToHclTerraform(struct!.requestBody),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBody",
    },
    request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.statPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_on_error: {
      value: cdktf.numberToHclTerraform(struct!.statusOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport_api_version: {
      value: cdktf.stringToHclTerraform(struct!.transportApiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id_header: {
      value: cdktf.stringToHclTerraform(struct!.userIdHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearRouteCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearRouteCache = this._clearRouteCache;
    }
    if (this._extauthzServerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extauthzServerRef = this._extauthzServerRef?.internalValue;
    }
    if (this._failureModeAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureModeAllow = this._failureModeAllow;
    }
    if (this._grpcService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcService = this._grpcService?.internalValue;
    }
    if (this._httpService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpService = this._httpService?.internalValue;
    }
    if (this._requestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody?.internalValue;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._statPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statPrefix = this._statPrefix;
    }
    if (this._statusOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusOnError = this._statusOnError;
    }
    if (this._transportApiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportApiVersion = this._transportApiVersion;
    }
    if (this._userIdHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdHeader = this._userIdHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearRouteCache = undefined;
      this._extauthzServerRef.internalValue = undefined;
      this._failureModeAllow = undefined;
      this._grpcService.internalValue = undefined;
      this._httpService.internalValue = undefined;
      this._requestBody.internalValue = undefined;
      this._requestTimeout = undefined;
      this._statPrefix = undefined;
      this._statusOnError = undefined;
      this._transportApiVersion = undefined;
      this._userIdHeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearRouteCache = value.clearRouteCache;
      this._extauthzServerRef.internalValue = value.extauthzServerRef;
      this._failureModeAllow = value.failureModeAllow;
      this._grpcService.internalValue = value.grpcService;
      this._httpService.internalValue = value.httpService;
      this._requestBody.internalValue = value.requestBody;
      this._requestTimeout = value.requestTimeout;
      this._statPrefix = value.statPrefix;
      this._statusOnError = value.statusOnError;
      this._transportApiVersion = value.transportApiVersion;
      this._userIdHeader = value.userIdHeader;
    }
  }

  // clear_route_cache - computed: false, optional: true, required: false
  private _clearRouteCache?: boolean | cdktf.IResolvable; 
  public get clearRouteCache() {
    return this.getBooleanAttribute('clear_route_cache');
  }
  public set clearRouteCache(value: boolean | cdktf.IResolvable) {
    this._clearRouteCache = value;
  }
  public resetClearRouteCache() {
    this._clearRouteCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearRouteCacheInput() {
    return this._clearRouteCache;
  }

  // extauthz_server_ref - computed: false, optional: true, required: false
  private _extauthzServerRef = new DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRefOutputReference(this, "extauthz_server_ref");
  public get extauthzServerRef() {
    return this._extauthzServerRef;
  }
  public putExtauthzServerRef(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthExtauthzServerRef) {
    this._extauthzServerRef.internalValue = value;
  }
  public resetExtauthzServerRef() {
    this._extauthzServerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extauthzServerRefInput() {
    return this._extauthzServerRef.internalValue;
  }

  // failure_mode_allow - computed: false, optional: true, required: false
  private _failureModeAllow?: boolean | cdktf.IResolvable; 
  public get failureModeAllow() {
    return this.getBooleanAttribute('failure_mode_allow');
  }
  public set failureModeAllow(value: boolean | cdktf.IResolvable) {
    this._failureModeAllow = value;
  }
  public resetFailureModeAllow() {
    this._failureModeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureModeAllowInput() {
    return this._failureModeAllow;
  }

  // grpc_service - computed: false, optional: true, required: false
  private _grpcService = new DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcServiceOutputReference(this, "grpc_service");
  public get grpcService() {
    return this._grpcService;
  }
  public putGrpcService(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthGrpcService) {
    this._grpcService.internalValue = value;
  }
  public resetGrpcService() {
    this._grpcService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceInput() {
    return this._grpcService.internalValue;
  }

  // http_service - computed: false, optional: true, required: false
  private _httpService = new DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpServiceOutputReference(this, "http_service");
  public get httpService() {
    return this._httpService;
  }
  public putHttpService(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthHttpService) {
    this._httpService.internalValue = value;
  }
  public resetHttpService() {
    this._httpService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServiceInput() {
    return this._httpService.internalValue;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody = new DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBodyOutputReference(this, "request_body");
  public get requestBody() {
    return this._requestBody;
  }
  public putRequestBody(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthRequestBody) {
    this._requestBody.internalValue = value;
  }
  public resetRequestBody() {
    this._requestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody.internalValue;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // stat_prefix - computed: false, optional: true, required: false
  private _statPrefix?: string; 
  public get statPrefix() {
    return this.getStringAttribute('stat_prefix');
  }
  public set statPrefix(value: string) {
    this._statPrefix = value;
  }
  public resetStatPrefix() {
    this._statPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statPrefixInput() {
    return this._statPrefix;
  }

  // status_on_error - computed: false, optional: true, required: false
  private _statusOnError?: number; 
  public get statusOnError() {
    return this.getNumberAttribute('status_on_error');
  }
  public set statusOnError(value: number) {
    this._statusOnError = value;
  }
  public resetStatusOnError() {
    this._statusOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusOnErrorInput() {
    return this._statusOnError;
  }

  // transport_api_version - computed: false, optional: true, required: false
  private _transportApiVersion?: string; 
  public get transportApiVersion() {
    return this.getStringAttribute('transport_api_version');
  }
  public set transportApiVersion(value: string) {
    this._transportApiVersion = value;
  }
  public resetTransportApiVersion() {
    this._transportApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportApiVersionInput() {
    return this._transportApiVersion;
  }

  // user_id_header - computed: false, optional: true, required: false
  private _userIdHeader?: string; 
  public get userIdHeader() {
    return this.getStringAttribute('user_id_header');
  }
  public set userIdHeader(value: string) {
    this._userIdHeader = value;
  }
  public resetUserIdHeader() {
    this._userIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdHeaderInput() {
    return this._userIdHeader;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatuses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#statuses DataK8SGlooSoloIoSettingsV1Manifest#statuses}
  */
  readonly statuses?: { [key: string]: string };
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatusesToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatuses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statuses: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.statuses),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatusesToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatuses | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatusesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatuses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatuses | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#label_to_path DataK8SGlooSoloIoSettingsV1Manifest#label_to_path}
  */
  readonly labelToPath?: { [key: string]: string };
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabelsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_to_path: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelToPath),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabelsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_to_path: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelToPath),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelToPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelToPath = this._labelToPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelToPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelToPath = value.labelToPath;
    }
  }

  // label_to_path - computed: false, optional: true, required: false
  private _labelToPath?: { [key: string]: string }; 
  public get labelToPath() {
    return this.getStringMapAttribute('label_to_path');
  }
  public set labelToPath(value: { [key: string]: string }) {
    this._labelToPath = value;
  }
  public resetLabelToPath() {
    this._labelToPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelToPathInput() {
    return this._labelToPath;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#dashboard_prefix DataK8SGlooSoloIoSettingsV1Manifest#dashboard_prefix}
  */
  readonly dashboardPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#default_dashboard_folder_id DataK8SGlooSoloIoSettingsV1Manifest#default_dashboard_folder_id}
  */
  readonly defaultDashboardFolderId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#extra_metric_query_parameters DataK8SGlooSoloIoSettingsV1Manifest#extra_metric_query_parameters}
  */
  readonly extraMetricQueryParameters?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegrationToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_prefix: cdktf.stringToTerraform(struct!.dashboardPrefix),
    default_dashboard_folder_id: cdktf.numberToTerraform(struct!.defaultDashboardFolderId),
    extra_metric_query_parameters: cdktf.stringToTerraform(struct!.extraMetricQueryParameters),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegrationToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_prefix: {
      value: cdktf.stringToHclTerraform(struct!.dashboardPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_dashboard_folder_id: {
      value: cdktf.numberToHclTerraform(struct!.defaultDashboardFolderId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extra_metric_query_parameters: {
      value: cdktf.stringToHclTerraform(struct!.extraMetricQueryParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardPrefix = this._dashboardPrefix;
    }
    if (this._defaultDashboardFolderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDashboardFolderId = this._defaultDashboardFolderId;
    }
    if (this._extraMetricQueryParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraMetricQueryParameters = this._extraMetricQueryParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardPrefix = undefined;
      this._defaultDashboardFolderId = undefined;
      this._extraMetricQueryParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardPrefix = value.dashboardPrefix;
      this._defaultDashboardFolderId = value.defaultDashboardFolderId;
      this._extraMetricQueryParameters = value.extraMetricQueryParameters;
    }
  }

  // dashboard_prefix - computed: false, optional: true, required: false
  private _dashboardPrefix?: string; 
  public get dashboardPrefix() {
    return this.getStringAttribute('dashboard_prefix');
  }
  public set dashboardPrefix(value: string) {
    this._dashboardPrefix = value;
  }
  public resetDashboardPrefix() {
    this._dashboardPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPrefixInput() {
    return this._dashboardPrefix;
  }

  // default_dashboard_folder_id - computed: false, optional: true, required: false
  private _defaultDashboardFolderId?: number; 
  public get defaultDashboardFolderId() {
    return this.getNumberAttribute('default_dashboard_folder_id');
  }
  public set defaultDashboardFolderId(value: number) {
    this._defaultDashboardFolderId = value;
  }
  public resetDefaultDashboardFolderId() {
    this._defaultDashboardFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDashboardFolderIdInput() {
    return this._defaultDashboardFolderId;
  }

  // extra_metric_query_parameters - computed: false, optional: true, required: false
  private _extraMetricQueryParameters?: string; 
  public get extraMetricQueryParameters() {
    return this.getStringAttribute('extra_metric_query_parameters');
  }
  public set extraMetricQueryParameters(value: string) {
    this._extraMetricQueryParameters = value;
  }
  public resetExtraMetricQueryParameters() {
    this._extraMetricQueryParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraMetricQueryParametersInput() {
    return this._extraMetricQueryParameters;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#config_status_metric_labels DataK8SGlooSoloIoSettingsV1Manifest#config_status_metric_labels}
  */
  readonly configStatusMetricLabels?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabels;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#grafana_integration DataK8SGlooSoloIoSettingsV1Manifest#grafana_integration}
  */
  readonly grafanaIntegration?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegration;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_status_metric_labels: dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabelsToTerraform(struct!.configStatusMetricLabels),
    grafana_integration: dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegrationToTerraform(struct!.grafanaIntegration),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_status_metric_labels: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabelsToHclTerraform(struct!.configStatusMetricLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabels",
    },
    grafana_integration: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegrationToHclTerraform(struct!.grafanaIntegration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configStatusMetricLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configStatusMetricLabels = this._configStatusMetricLabels?.internalValue;
    }
    if (this._grafanaIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaIntegration = this._grafanaIntegration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configStatusMetricLabels.internalValue = undefined;
      this._grafanaIntegration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configStatusMetricLabels.internalValue = value.configStatusMetricLabels;
      this._grafanaIntegration.internalValue = value.grafanaIntegration;
    }
  }

  // config_status_metric_labels - computed: false, optional: true, required: false
  private _configStatusMetricLabels = new DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabelsOutputReference(this, "config_status_metric_labels");
  public get configStatusMetricLabels() {
    return this._configStatusMetricLabels;
  }
  public putConfigStatusMetricLabels(value: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsConfigStatusMetricLabels) {
    this._configStatusMetricLabels.internalValue = value;
  }
  public resetConfigStatusMetricLabels() {
    this._configStatusMetricLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configStatusMetricLabelsInput() {
    return this._configStatusMetricLabels.internalValue;
  }

  // grafana_integration - computed: false, optional: true, required: false
  private _grafanaIntegration = new DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegrationOutputReference(this, "grafana_integration");
  public get grafanaIntegration() {
    return this._grafanaIntegration;
  }
  public putGrafanaIntegration(value: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsGrafanaIntegration) {
    this._grafanaIntegration.internalValue = value;
  }
  public resetGrafanaIntegration() {
    this._grafanaIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaIntegrationInput() {
    return this._grafanaIntegration.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#requests_per_unit DataK8SGlooSoloIoSettingsV1Manifest#requests_per_unit}
  */
  readonly requestsPerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#unit DataK8SGlooSoloIoSettingsV1Manifest#unit}
  */
  readonly unit?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimitToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests_per_unit: cdktf.numberToTerraform(struct!.requestsPerUnit),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimitToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requests_per_unit: {
      value: cdktf.numberToHclTerraform(struct!.requestsPerUnit),
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestsPerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerUnit = this._requestsPerUnit;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestsPerUnit = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestsPerUnit = value.requestsPerUnit;
      this._unit = value.unit;
    }
  }

  // requests_per_unit - computed: false, optional: true, required: false
  private _requestsPerUnit?: number; 
  public get requestsPerUnit() {
    return this.getNumberAttribute('requests_per_unit');
  }
  public set requestsPerUnit(value: number) {
    this._requestsPerUnit = value;
  }
  public resetRequestsPerUnit() {
    this._requestsPerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerUnitInput() {
    return this._requestsPerUnit;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#key DataK8SGlooSoloIoSettingsV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#value DataK8SGlooSoloIoSettingsV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptors | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptors | cdktf.IResolvable | undefined) {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#always_apply DataK8SGlooSoloIoSettingsV1Manifest#always_apply}
  */
  readonly alwaysApply?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#rate_limit DataK8SGlooSoloIoSettingsV1Manifest#rate_limit}
  */
  readonly rateLimit?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#simple_descriptors DataK8SGlooSoloIoSettingsV1Manifest#simple_descriptors}
  */
  readonly simpleDescriptors?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptors[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_apply: cdktf.booleanToTerraform(struct!.alwaysApply),
    rate_limit: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimitToTerraform(struct!.rateLimit),
    simple_descriptors: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsToTerraform, false)(struct!.simpleDescriptors),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_apply: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysApply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate_limit: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimit",
    },
    simple_descriptors: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsToHclTerraform, false)(struct!.simpleDescriptors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysApply = this._alwaysApply;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._simpleDescriptors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleDescriptors = this._simpleDescriptors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysApply = undefined;
      this._rateLimit.internalValue = undefined;
      this._simpleDescriptors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysApply = value.alwaysApply;
      this._rateLimit.internalValue = value.rateLimit;
      this._simpleDescriptors.internalValue = value.simpleDescriptors;
    }
  }

  // always_apply - computed: false, optional: true, required: false
  private _alwaysApply?: boolean | cdktf.IResolvable; 
  public get alwaysApply() {
    return this.getBooleanAttribute('always_apply');
  }
  public set alwaysApply(value: boolean | cdktf.IResolvable) {
    this._alwaysApply = value;
  }
  public resetAlwaysApply() {
    this._alwaysApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysApplyInput() {
    return this._alwaysApply;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // simple_descriptors - computed: false, optional: true, required: false
  private _simpleDescriptors = new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptorsList(this, "simple_descriptors", false);
  public get simpleDescriptors() {
    return this._simpleDescriptors;
  }
  public putSimpleDescriptors(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsSimpleDescriptors[] | cdktf.IResolvable) {
    this._simpleDescriptors.internalValue = value;
  }
  public resetSimpleDescriptors() {
    this._simpleDescriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleDescriptorsInput() {
    return this._simpleDescriptors.internalValue;
  }
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#descriptors DataK8SGlooSoloIoSettingsV1Manifest#descriptors}
  */
  readonly descriptors?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#set_descriptors DataK8SGlooSoloIoSettingsV1Manifest#set_descriptors}
  */
  readonly setDescriptors?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptors[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    descriptors: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.descriptors),
    set_descriptors: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsToTerraform, false)(struct!.setDescriptors),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    descriptors: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.descriptors),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    set_descriptors: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsToHclTerraform, false)(struct!.setDescriptors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptors !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptors = this._descriptors;
    }
    if (this._setDescriptors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDescriptors = this._setDescriptors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._descriptors = undefined;
      this._setDescriptors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._descriptors = value.descriptors;
      this._setDescriptors.internalValue = value.setDescriptors;
    }
  }

  // descriptors - computed: false, optional: true, required: false
  private _descriptors?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get descriptors() {
    return this.interpolationForAttribute('descriptors');
  }
  public set descriptors(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._descriptors = value;
  }
  public resetDescriptors() {
    this._descriptors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptorsInput() {
    return this._descriptors;
  }

  // set_descriptors - computed: false, optional: true, required: false
  private _setDescriptors = new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptorsList(this, "set_descriptors", false);
  public get setDescriptors() {
    return this._setDescriptors;
  }
  public putSetDescriptors(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitSetDescriptors[] | cdktf.IResolvable) {
    this._setDescriptors.internalValue = value;
  }
  public resetSetDescriptors() {
    this._setDescriptors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDescriptorsInput() {
    return this._setDescriptors.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#authority DataK8SGlooSoloIoSettingsV1Manifest#authority}
  */
  readonly authority?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcServiceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcServiceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
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
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#name DataK8SGlooSoloIoSettingsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#namespace DataK8SGlooSoloIoSettingsV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRefToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRefToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRef | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#deny_on_fail DataK8SGlooSoloIoSettingsV1Manifest#deny_on_fail}
  */
  readonly denyOnFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#enable_x_ratelimit_headers DataK8SGlooSoloIoSettingsV1Manifest#enable_x_ratelimit_headers}
  */
  readonly enableXRatelimitHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#grpc_service DataK8SGlooSoloIoSettingsV1Manifest#grpc_service}
  */
  readonly grpcService?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcService;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#rate_limit_before_auth DataK8SGlooSoloIoSettingsV1Manifest#rate_limit_before_auth}
  */
  readonly rateLimitBeforeAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ratelimit_server_ref DataK8SGlooSoloIoSettingsV1Manifest#ratelimit_server_ref}
  */
  readonly ratelimitServerRef?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#request_timeout DataK8SGlooSoloIoSettingsV1Manifest#request_timeout}
  */
  readonly requestTimeout?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_on_fail: cdktf.booleanToTerraform(struct!.denyOnFail),
    enable_x_ratelimit_headers: cdktf.booleanToTerraform(struct!.enableXRatelimitHeaders),
    grpc_service: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcServiceToTerraform(struct!.grpcService),
    rate_limit_before_auth: cdktf.booleanToTerraform(struct!.rateLimitBeforeAuth),
    ratelimit_server_ref: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRefToTerraform(struct!.ratelimitServerRef),
    request_timeout: cdktf.stringToTerraform(struct!.requestTimeout),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_on_fail: {
      value: cdktf.booleanToHclTerraform(struct!.denyOnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_x_ratelimit_headers: {
      value: cdktf.booleanToHclTerraform(struct!.enableXRatelimitHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grpc_service: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcServiceToHclTerraform(struct!.grpcService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcService",
    },
    rate_limit_before_auth: {
      value: cdktf.booleanToHclTerraform(struct!.rateLimitBeforeAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ratelimit_server_ref: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRefToHclTerraform(struct!.ratelimitServerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRef",
    },
    request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyOnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyOnFail = this._denyOnFail;
    }
    if (this._enableXRatelimitHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableXRatelimitHeaders = this._enableXRatelimitHeaders;
    }
    if (this._grpcService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcService = this._grpcService?.internalValue;
    }
    if (this._rateLimitBeforeAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitBeforeAuth = this._rateLimitBeforeAuth;
    }
    if (this._ratelimitServerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitServerRef = this._ratelimitServerRef?.internalValue;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyOnFail = undefined;
      this._enableXRatelimitHeaders = undefined;
      this._grpcService.internalValue = undefined;
      this._rateLimitBeforeAuth = undefined;
      this._ratelimitServerRef.internalValue = undefined;
      this._requestTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyOnFail = value.denyOnFail;
      this._enableXRatelimitHeaders = value.enableXRatelimitHeaders;
      this._grpcService.internalValue = value.grpcService;
      this._rateLimitBeforeAuth = value.rateLimitBeforeAuth;
      this._ratelimitServerRef.internalValue = value.ratelimitServerRef;
      this._requestTimeout = value.requestTimeout;
    }
  }

  // deny_on_fail - computed: false, optional: true, required: false
  private _denyOnFail?: boolean | cdktf.IResolvable; 
  public get denyOnFail() {
    return this.getBooleanAttribute('deny_on_fail');
  }
  public set denyOnFail(value: boolean | cdktf.IResolvable) {
    this._denyOnFail = value;
  }
  public resetDenyOnFail() {
    this._denyOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyOnFailInput() {
    return this._denyOnFail;
  }

  // enable_x_ratelimit_headers - computed: false, optional: true, required: false
  private _enableXRatelimitHeaders?: boolean | cdktf.IResolvable; 
  public get enableXRatelimitHeaders() {
    return this.getBooleanAttribute('enable_x_ratelimit_headers');
  }
  public set enableXRatelimitHeaders(value: boolean | cdktf.IResolvable) {
    this._enableXRatelimitHeaders = value;
  }
  public resetEnableXRatelimitHeaders() {
    this._enableXRatelimitHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableXRatelimitHeadersInput() {
    return this._enableXRatelimitHeaders;
  }

  // grpc_service - computed: false, optional: true, required: false
  private _grpcService = new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcServiceOutputReference(this, "grpc_service");
  public get grpcService() {
    return this._grpcService;
  }
  public putGrpcService(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerGrpcService) {
    this._grpcService.internalValue = value;
  }
  public resetGrpcService() {
    this._grpcService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceInput() {
    return this._grpcService.internalValue;
  }

  // rate_limit_before_auth - computed: false, optional: true, required: false
  private _rateLimitBeforeAuth?: boolean | cdktf.IResolvable; 
  public get rateLimitBeforeAuth() {
    return this.getBooleanAttribute('rate_limit_before_auth');
  }
  public set rateLimitBeforeAuth(value: boolean | cdktf.IResolvable) {
    this._rateLimitBeforeAuth = value;
  }
  public resetRateLimitBeforeAuth() {
    this._rateLimitBeforeAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitBeforeAuthInput() {
    return this._rateLimitBeforeAuth;
  }

  // ratelimit_server_ref - computed: false, optional: true, required: false
  private _ratelimitServerRef = new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRefOutputReference(this, "ratelimit_server_ref");
  public get ratelimitServerRef() {
    return this._ratelimitServerRef;
  }
  public putRatelimitServerRef(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerRatelimitServerRef) {
    this._ratelimitServerRef.internalValue = value;
  }
  public resetRatelimitServerRef() {
    this._ratelimitServerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitServerRefInput() {
    return this._ratelimitServerRef.internalValue;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this.getStringAttribute('request_timeout');
  }
  public set requestTimeout(value: string) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecRbac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#require_rbac DataK8SGlooSoloIoSettingsV1Manifest#require_rbac}
  */
  readonly requireRbac?: boolean | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecRbacToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRbac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_rbac: cdktf.booleanToTerraform(struct!.requireRbac),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecRbacToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecRbac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_rbac: {
      value: cdktf.booleanToHclTerraform(struct!.requireRbac),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecRbacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecRbac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireRbac !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireRbac = this._requireRbac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRbac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requireRbac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requireRbac = value.requireRbac;
    }
  }

  // require_rbac - computed: false, optional: true, required: false
  private _requireRbac?: boolean | cdktf.IResolvable; 
  public get requireRbac() {
    return this.getBooleanAttribute('require_rbac');
  }
  public set requireRbac(value: boolean | cdktf.IResolvable) {
    this._requireRbac = value;
  }
  public resetRequireRbac() {
    this._requireRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireRbacInput() {
    return this._requireRbac;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#directory DataK8SGlooSoloIoSettingsV1Manifest#directory}
  */
  readonly directory?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectoryToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectoryToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#access_key_id DataK8SGlooSoloIoSettingsV1Manifest#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#iam_server_id_header DataK8SGlooSoloIoSettingsV1Manifest#iam_server_id_header}
  */
  readonly iamServerIdHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#lease_increment DataK8SGlooSoloIoSettingsV1Manifest#lease_increment}
  */
  readonly leaseIncrement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#mount_path DataK8SGlooSoloIoSettingsV1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#region DataK8SGlooSoloIoSettingsV1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#secret_access_key DataK8SGlooSoloIoSettingsV1Manifest#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#session_token DataK8SGlooSoloIoSettingsV1Manifest#session_token}
  */
  readonly sessionToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#vault_role DataK8SGlooSoloIoSettingsV1Manifest#vault_role}
  */
  readonly vaultRole?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAwsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    iam_server_id_header: cdktf.stringToTerraform(struct!.iamServerIdHeader),
    lease_increment: cdktf.numberToTerraform(struct!.leaseIncrement),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    session_token: cdktf.stringToTerraform(struct!.sessionToken),
    vault_role: cdktf.stringToTerraform(struct!.vaultRole),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAwsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_server_id_header: {
      value: cdktf.stringToHclTerraform(struct!.iamServerIdHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_increment: {
      value: cdktf.numberToHclTerraform(struct!.leaseIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_token: {
      value: cdktf.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_role: {
      value: cdktf.stringToHclTerraform(struct!.vaultRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._iamServerIdHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamServerIdHeader = this._iamServerIdHeader;
    }
    if (this._leaseIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseIncrement = this._leaseIncrement;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._sessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionToken = this._sessionToken;
    }
    if (this._vaultRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultRole = this._vaultRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._iamServerIdHeader = undefined;
      this._leaseIncrement = undefined;
      this._mountPath = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._sessionToken = undefined;
      this._vaultRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._iamServerIdHeader = value.iamServerIdHeader;
      this._leaseIncrement = value.leaseIncrement;
      this._mountPath = value.mountPath;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._sessionToken = value.sessionToken;
      this._vaultRole = value.vaultRole;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // iam_server_id_header - computed: false, optional: true, required: false
  private _iamServerIdHeader?: string; 
  public get iamServerIdHeader() {
    return this.getStringAttribute('iam_server_id_header');
  }
  public set iamServerIdHeader(value: string) {
    this._iamServerIdHeader = value;
  }
  public resetIamServerIdHeader() {
    this._iamServerIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServerIdHeaderInput() {
    return this._iamServerIdHeader;
  }

  // lease_increment - computed: false, optional: true, required: false
  private _leaseIncrement?: number; 
  public get leaseIncrement() {
    return this.getNumberAttribute('lease_increment');
  }
  public set leaseIncrement(value: number) {
    this._leaseIncrement = value;
  }
  public resetLeaseIncrement() {
    this._leaseIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseIncrementInput() {
    return this._leaseIncrement;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // vault_role - computed: false, optional: true, required: false
  private _vaultRole?: string; 
  public get vaultRole() {
    return this.getStringAttribute('vault_role');
  }
  public set vaultRole(value: string) {
    this._vaultRole = value;
  }
  public resetVaultRole() {
    this._vaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRoleInput() {
    return this._vaultRole;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_cert DataK8SGlooSoloIoSettingsV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_path DataK8SGlooSoloIoSettingsV1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#client_cert DataK8SGlooSoloIoSettingsV1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#client_key DataK8SGlooSoloIoSettingsV1Manifest#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#insecure DataK8SGlooSoloIoSettingsV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#tls_server_name DataK8SGlooSoloIoSettingsV1Manifest#tls_server_name}
  */
  readonly tlsServerName?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfigToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfigToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._tlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerName = this._tlsServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._caPath = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._insecure = undefined;
      this._tlsServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._caPath = value.caPath;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._insecure = value.insecure;
      this._tlsServerName = value.tlsServerName;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
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

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#access_token DataK8SGlooSoloIoSettingsV1Manifest#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#address DataK8SGlooSoloIoSettingsV1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#aws DataK8SGlooSoloIoSettingsV1Manifest#aws}
  */
  readonly aws?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_cert DataK8SGlooSoloIoSettingsV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_path DataK8SGlooSoloIoSettingsV1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#client_cert DataK8SGlooSoloIoSettingsV1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#client_key DataK8SGlooSoloIoSettingsV1Manifest#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#insecure DataK8SGlooSoloIoSettingsV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#path_prefix DataK8SGlooSoloIoSettingsV1Manifest#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#root_key DataK8SGlooSoloIoSettingsV1Manifest#root_key}
  */
  readonly rootKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#tls_config DataK8SGlooSoloIoSettingsV1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#tls_server_name DataK8SGlooSoloIoSettingsV1Manifest#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#token DataK8SGlooSoloIoSettingsV1Manifest#token}
  */
  readonly token?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    address: cdktf.stringToTerraform(struct!.address),
    aws: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAwsToTerraform(struct!.aws),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    root_key: cdktf.stringToTerraform(struct!.rootKey),
    tls_config: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfigToTerraform(struct!.tlsConfig),
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAws",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_key: {
      value: cdktf.stringToHclTerraform(struct!.rootKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfig",
    },
    tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._rootKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootKey = this._rootKey;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._tlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerName = this._tlsServerName;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._address = undefined;
      this._aws.internalValue = undefined;
      this._caCert = undefined;
      this._caPath = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._insecure = undefined;
      this._pathPrefix = undefined;
      this._rootKey = undefined;
      this._tlsConfig.internalValue = undefined;
      this._tlsServerName = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._address = value.address;
      this._aws.internalValue = value.aws;
      this._caCert = value.caCert;
      this._caPath = value.caPath;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._insecure = value.insecure;
      this._pathPrefix = value.pathPrefix;
      this._rootKey = value.rootKey;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._tlsServerName = value.tlsServerName;
      this._token = value.token;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
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

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // root_key - computed: false, optional: true, required: false
  private _rootKey?: string; 
  public get rootKey() {
    return this.getStringAttribute('root_key');
  }
  public set rootKey(value: string) {
    this._rootKey = value;
  }
  public resetRootKey() {
    this._rootKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootKeyInput() {
    return this._rootKey;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#directory DataK8SGlooSoloIoSettingsV1Manifest#directory}
  */
  readonly directory?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#kubernetes DataK8SGlooSoloIoSettingsV1Manifest#kubernetes}
  */
  readonly kubernetes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#vault DataK8SGlooSoloIoSettingsV1Manifest#vault}
  */
  readonly vault?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVault;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectoryToTerraform(struct!.directory),
    kubernetes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubernetes),
    vault: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultToTerraform(struct!.vault),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectory",
    },
    kubernetes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubernetes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vault: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._kubernetes !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory.internalValue = undefined;
      this._kubernetes = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory.internalValue = value.directory;
      this._kubernetes = value.kubernetes;
      this._vault.internalValue = value.vault;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes?: { [key: string]: string }; 
  public get kubernetes() {
    return this.getStringMapAttribute('kubernetes');
  }
  public set kubernetes(value: { [key: string]: string }) {
    this._kubernetes = value;
  }
  public resetKubernetes() {
    this._kubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes;
  }

  // vault - computed: false, optional: true, required: false
  private _vault = new DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#sources DataK8SGlooSoloIoSettingsV1Manifest#sources}
  */
  readonly sources?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSources[] | cdktf.IResolvable;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sources: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sources: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptions | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsSources[] | cdktf.IResolvable) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#cipher_suites DataK8SGlooSoloIoSettingsV1Manifest#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ecdh_curves DataK8SGlooSoloIoSettingsV1Manifest#ecdh_curves}
  */
  readonly ecdhCurves?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#maximum_protocol_version DataK8SGlooSoloIoSettingsV1Manifest#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#minimum_protocol_version DataK8SGlooSoloIoSettingsV1Manifest#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParametersToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParameters | cdktf.IResolvable): any {
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


export function dataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParametersToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParameters | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParameters | cdktf.IResolvable | undefined) {
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
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#global_annotations DataK8SGlooSoloIoSettingsV1Manifest#global_annotations}
  */
  readonly globalAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ssl_parameters DataK8SGlooSoloIoSettingsV1Manifest#ssl_parameters}
  */
  readonly sslParameters?: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParameters;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.globalAnnotations),
    ssl_parameters: dataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParametersToTerraform(struct!.sslParameters),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.globalAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ssl_parameters: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParametersToHclTerraform(struct!.sslParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalAnnotations = this._globalAnnotations;
    }
    if (this._sslParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslParameters = this._sslParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalAnnotations = undefined;
      this._sslParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalAnnotations = value.globalAnnotations;
      this._sslParameters.internalValue = value.sslParameters;
    }
  }

  // global_annotations - computed: false, optional: true, required: false
  private _globalAnnotations?: { [key: string]: string }; 
  public get globalAnnotations() {
    return this.getStringMapAttribute('global_annotations');
  }
  public set globalAnnotations(value: { [key: string]: string }) {
    this._globalAnnotations = value;
  }
  public resetGlobalAnnotations() {
    this._globalAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAnnotationsInput() {
    return this._globalAnnotations;
  }

  // ssl_parameters - computed: false, optional: true, required: false
  private _sslParameters = new DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParametersOutputReference(this, "ssl_parameters");
  public get sslParameters() {
    return this._sslParameters;
  }
  public putSslParameters(value: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsSslParameters) {
    this._sslParameters.internalValue = value;
  }
  public resetSslParameters() {
    this._sslParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslParametersInput() {
    return this._sslParameters.internalValue;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#access_key_id DataK8SGlooSoloIoSettingsV1Manifest#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#iam_server_id_header DataK8SGlooSoloIoSettingsV1Manifest#iam_server_id_header}
  */
  readonly iamServerIdHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#lease_increment DataK8SGlooSoloIoSettingsV1Manifest#lease_increment}
  */
  readonly leaseIncrement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#mount_path DataK8SGlooSoloIoSettingsV1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#region DataK8SGlooSoloIoSettingsV1Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#secret_access_key DataK8SGlooSoloIoSettingsV1Manifest#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#session_token DataK8SGlooSoloIoSettingsV1Manifest#session_token}
  */
  readonly sessionToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#vault_role DataK8SGlooSoloIoSettingsV1Manifest#vault_role}
  */
  readonly vaultRole?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAwsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    iam_server_id_header: cdktf.stringToTerraform(struct!.iamServerIdHeader),
    lease_increment: cdktf.numberToTerraform(struct!.leaseIncrement),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    session_token: cdktf.stringToTerraform(struct!.sessionToken),
    vault_role: cdktf.stringToTerraform(struct!.vaultRole),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAwsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_server_id_header: {
      value: cdktf.stringToHclTerraform(struct!.iamServerIdHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_increment: {
      value: cdktf.numberToHclTerraform(struct!.leaseIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_token: {
      value: cdktf.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_role: {
      value: cdktf.stringToHclTerraform(struct!.vaultRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._iamServerIdHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamServerIdHeader = this._iamServerIdHeader;
    }
    if (this._leaseIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseIncrement = this._leaseIncrement;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._sessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionToken = this._sessionToken;
    }
    if (this._vaultRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultRole = this._vaultRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._iamServerIdHeader = undefined;
      this._leaseIncrement = undefined;
      this._mountPath = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._sessionToken = undefined;
      this._vaultRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._iamServerIdHeader = value.iamServerIdHeader;
      this._leaseIncrement = value.leaseIncrement;
      this._mountPath = value.mountPath;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._sessionToken = value.sessionToken;
      this._vaultRole = value.vaultRole;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // iam_server_id_header - computed: false, optional: true, required: false
  private _iamServerIdHeader?: string; 
  public get iamServerIdHeader() {
    return this.getStringAttribute('iam_server_id_header');
  }
  public set iamServerIdHeader(value: string) {
    this._iamServerIdHeader = value;
  }
  public resetIamServerIdHeader() {
    this._iamServerIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServerIdHeaderInput() {
    return this._iamServerIdHeader;
  }

  // lease_increment - computed: false, optional: true, required: false
  private _leaseIncrement?: number; 
  public get leaseIncrement() {
    return this.getNumberAttribute('lease_increment');
  }
  public set leaseIncrement(value: number) {
    this._leaseIncrement = value;
  }
  public resetLeaseIncrement() {
    this._leaseIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseIncrementInput() {
    return this._leaseIncrement;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // vault_role - computed: false, optional: true, required: false
  private _vaultRole?: string; 
  public get vaultRole() {
    return this.getStringAttribute('vault_role');
  }
  public set vaultRole(value: string) {
    this._vaultRole = value;
  }
  public resetVaultRole() {
    this._vaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRoleInput() {
    return this._vaultRole;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_cert DataK8SGlooSoloIoSettingsV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_path DataK8SGlooSoloIoSettingsV1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#client_cert DataK8SGlooSoloIoSettingsV1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#client_key DataK8SGlooSoloIoSettingsV1Manifest#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#insecure DataK8SGlooSoloIoSettingsV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#tls_server_name DataK8SGlooSoloIoSettingsV1Manifest#tls_server_name}
  */
  readonly tlsServerName?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfigToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfigToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._tlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerName = this._tlsServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert = undefined;
      this._caPath = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._insecure = undefined;
      this._tlsServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert = value.caCert;
      this._caPath = value.caPath;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._insecure = value.insecure;
      this._tlsServerName = value.tlsServerName;
    }
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
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

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#access_token DataK8SGlooSoloIoSettingsV1Manifest#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#address DataK8SGlooSoloIoSettingsV1Manifest#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#aws DataK8SGlooSoloIoSettingsV1Manifest#aws}
  */
  readonly aws?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_cert DataK8SGlooSoloIoSettingsV1Manifest#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ca_path DataK8SGlooSoloIoSettingsV1Manifest#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#client_cert DataK8SGlooSoloIoSettingsV1Manifest#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#client_key DataK8SGlooSoloIoSettingsV1Manifest#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#insecure DataK8SGlooSoloIoSettingsV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#path_prefix DataK8SGlooSoloIoSettingsV1Manifest#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#root_key DataK8SGlooSoloIoSettingsV1Manifest#root_key}
  */
  readonly rootKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#tls_config DataK8SGlooSoloIoSettingsV1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#tls_server_name DataK8SGlooSoloIoSettingsV1Manifest#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#token DataK8SGlooSoloIoSettingsV1Manifest#token}
  */
  readonly token?: string;
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    address: cdktf.stringToTerraform(struct!.address),
    aws: dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAwsToTerraform(struct!.aws),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    root_key: cdktf.stringToTerraform(struct!.rootKey),
    tls_config: dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfigToTerraform(struct!.tlsConfig),
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAws",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_key: {
      value: cdktf.stringToHclTerraform(struct!.rootKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfig",
    },
    tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._rootKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootKey = this._rootKey;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._tlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerName = this._tlsServerName;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._address = undefined;
      this._aws.internalValue = undefined;
      this._caCert = undefined;
      this._caPath = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._insecure = undefined;
      this._pathPrefix = undefined;
      this._rootKey = undefined;
      this._tlsConfig.internalValue = undefined;
      this._tlsServerName = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._address = value.address;
      this._aws.internalValue = value.aws;
      this._caCert = value.caCert;
      this._caPath = value.caPath;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._insecure = value.insecure;
      this._pathPrefix = value.pathPrefix;
      this._rootKey = value.rootKey;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._tlsServerName = value.tlsServerName;
      this._token = value.token;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
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

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // root_key - computed: false, optional: true, required: false
  private _rootKey?: string; 
  public get rootKey() {
    return this.getStringAttribute('root_key');
  }
  public set rootKey(value: string) {
    this._rootKey = value;
  }
  public resetRootKey() {
    this._rootKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootKeyInput() {
    return this._rootKey;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#key DataK8SGlooSoloIoSettingsV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#operator DataK8SGlooSoloIoSettingsV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#values DataK8SGlooSoloIoSettingsV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#match_expressions DataK8SGlooSoloIoSettingsV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#match_labels DataK8SGlooSoloIoSettingsV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsList",
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectors | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsMatchExpressions[] | cdktf.IResolvable) {
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

export class DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsOutputReference {
    return new DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGlooSoloIoSettingsV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#caching_server DataK8SGlooSoloIoSettingsV1Manifest#caching_server}
  */
  readonly cachingServer?: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#console_options DataK8SGlooSoloIoSettingsV1Manifest#console_options}
  */
  readonly consoleOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#consul DataK8SGlooSoloIoSettingsV1Manifest#consul}
  */
  readonly consul?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsul;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#consul_discovery DataK8SGlooSoloIoSettingsV1Manifest#consul_discovery}
  */
  readonly consulDiscovery?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscovery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#consul_kv_artifact_source DataK8SGlooSoloIoSettingsV1Manifest#consul_kv_artifact_source}
  */
  readonly consulKvArtifactSource?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#consul_kv_source DataK8SGlooSoloIoSettingsV1Manifest#consul_kv_source}
  */
  readonly consulKvSource?: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#dev_mode DataK8SGlooSoloIoSettingsV1Manifest#dev_mode}
  */
  readonly devMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#directory_artifact_source DataK8SGlooSoloIoSettingsV1Manifest#directory_artifact_source}
  */
  readonly directoryArtifactSource?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#directory_config_source DataK8SGlooSoloIoSettingsV1Manifest#directory_config_source}
  */
  readonly directoryConfigSource?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#directory_secret_source DataK8SGlooSoloIoSettingsV1Manifest#directory_secret_source}
  */
  readonly directorySecretSource?: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#discovery DataK8SGlooSoloIoSettingsV1Manifest#discovery}
  */
  readonly discovery?: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscovery;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#discovery_namespace DataK8SGlooSoloIoSettingsV1Manifest#discovery_namespace}
  */
  readonly discoveryNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ext_proc DataK8SGlooSoloIoSettingsV1Manifest#ext_proc}
  */
  readonly extProc?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#extauth DataK8SGlooSoloIoSettingsV1Manifest#extauth}
  */
  readonly extauth?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#extensions DataK8SGlooSoloIoSettingsV1Manifest#extensions}
  */
  readonly extensions?: DataK8SGlooSoloIoSettingsV1ManifestSpecExtensions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#gateway DataK8SGlooSoloIoSettingsV1Manifest#gateway}
  */
  readonly gateway?: DataK8SGlooSoloIoSettingsV1ManifestSpecGateway;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#gloo DataK8SGlooSoloIoSettingsV1Manifest#gloo}
  */
  readonly gloo?: DataK8SGlooSoloIoSettingsV1ManifestSpecGloo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#graphql_options DataK8SGlooSoloIoSettingsV1Manifest#graphql_options}
  */
  readonly graphqlOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#knative DataK8SGlooSoloIoSettingsV1Manifest#knative}
  */
  readonly knative?: DataK8SGlooSoloIoSettingsV1ManifestSpecKnative;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#kubernetes DataK8SGlooSoloIoSettingsV1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#kubernetes_artifact_source DataK8SGlooSoloIoSettingsV1Manifest#kubernetes_artifact_source}
  */
  readonly kubernetesArtifactSource?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#kubernetes_config_source DataK8SGlooSoloIoSettingsV1Manifest#kubernetes_config_source}
  */
  readonly kubernetesConfigSource?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#kubernetes_secret_source DataK8SGlooSoloIoSettingsV1Manifest#kubernetes_secret_source}
  */
  readonly kubernetesSecretSource?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#linkerd DataK8SGlooSoloIoSettingsV1Manifest#linkerd}
  */
  readonly linkerd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#named_extauth DataK8SGlooSoloIoSettingsV1Manifest#named_extauth}
  */
  readonly namedExtauth?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#namespaced_statuses DataK8SGlooSoloIoSettingsV1Manifest#namespaced_statuses}
  */
  readonly namespacedStatuses?: DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatuses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#observability_options DataK8SGlooSoloIoSettingsV1Manifest#observability_options}
  */
  readonly observabilityOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ratelimit DataK8SGlooSoloIoSettingsV1Manifest#ratelimit}
  */
  readonly ratelimit?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#ratelimit_server DataK8SGlooSoloIoSettingsV1Manifest#ratelimit_server}
  */
  readonly ratelimitServer?: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#rbac DataK8SGlooSoloIoSettingsV1Manifest#rbac}
  */
  readonly rbac?: DataK8SGlooSoloIoSettingsV1ManifestSpecRbac;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#refresh_rate DataK8SGlooSoloIoSettingsV1Manifest#refresh_rate}
  */
  readonly refreshRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#secret_options DataK8SGlooSoloIoSettingsV1Manifest#secret_options}
  */
  readonly secretOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#upstream_options DataK8SGlooSoloIoSettingsV1Manifest#upstream_options}
  */
  readonly upstreamOptions?: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#vault_secret_source DataK8SGlooSoloIoSettingsV1Manifest#vault_secret_source}
  */
  readonly vaultSecretSource?: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#watch_namespace_selectors DataK8SGlooSoloIoSettingsV1Manifest#watch_namespace_selectors}
  */
  readonly watchNamespaceSelectors?: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#watch_namespaces DataK8SGlooSoloIoSettingsV1Manifest#watch_namespaces}
  */
  readonly watchNamespaces?: string[];
}

export function dataK8SGlooSoloIoSettingsV1ManifestSpecToTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_server: dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerToTerraform(struct!.cachingServer),
    console_options: dataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptionsToTerraform(struct!.consoleOptions),
    consul: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulToTerraform(struct!.consul),
    consul_discovery: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryToTerraform(struct!.consulDiscovery),
    consul_kv_artifact_source: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSourceToTerraform(struct!.consulKvArtifactSource),
    consul_kv_source: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSourceToTerraform(struct!.consulKvSource),
    dev_mode: cdktf.booleanToTerraform(struct!.devMode),
    directory_artifact_source: dataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSourceToTerraform(struct!.directoryArtifactSource),
    directory_config_source: dataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSourceToTerraform(struct!.directoryConfigSource),
    directory_secret_source: dataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSourceToTerraform(struct!.directorySecretSource),
    discovery: dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryToTerraform(struct!.discovery),
    discovery_namespace: cdktf.stringToTerraform(struct!.discoveryNamespace),
    ext_proc: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcToTerraform(struct!.extProc),
    extauth: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthToTerraform(struct!.extauth),
    extensions: dataK8SGlooSoloIoSettingsV1ManifestSpecExtensionsToTerraform(struct!.extensions),
    gateway: dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayToTerraform(struct!.gateway),
    gloo: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooToTerraform(struct!.gloo),
    graphql_options: dataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsToTerraform(struct!.graphqlOptions),
    knative: dataK8SGlooSoloIoSettingsV1ManifestSpecKnativeToTerraform(struct!.knative),
    kubernetes: dataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesToTerraform(struct!.kubernetes),
    kubernetes_artifact_source: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubernetesArtifactSource),
    kubernetes_config_source: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubernetesConfigSource),
    kubernetes_secret_source: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubernetesSecretSource),
    linkerd: cdktf.booleanToTerraform(struct!.linkerd),
    named_extauth: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthToTerraform(struct!.namedExtauth),
    namespaced_statuses: dataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatusesToTerraform(struct!.namespacedStatuses),
    observability_options: dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsToTerraform(struct!.observabilityOptions),
    ratelimit: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitToTerraform(struct!.ratelimit),
    ratelimit_server: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerToTerraform(struct!.ratelimitServer),
    rbac: dataK8SGlooSoloIoSettingsV1ManifestSpecRbacToTerraform(struct!.rbac),
    refresh_rate: cdktf.stringToTerraform(struct!.refreshRate),
    secret_options: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsToTerraform(struct!.secretOptions),
    upstream_options: dataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsToTerraform(struct!.upstreamOptions),
    vault_secret_source: dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceToTerraform(struct!.vaultSecretSource),
    watch_namespace_selectors: cdktf.listMapper(dataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsToTerraform, false)(struct!.watchNamespaceSelectors),
    watch_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.watchNamespaces),
  }
}


export function dataK8SGlooSoloIoSettingsV1ManifestSpecToHclTerraform(struct?: DataK8SGlooSoloIoSettingsV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching_server: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerToHclTerraform(struct!.cachingServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServer",
    },
    console_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptionsToHclTerraform(struct!.consoleOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptions",
    },
    consul: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulToHclTerraform(struct!.consul),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecConsul",
    },
    consul_discovery: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryToHclTerraform(struct!.consulDiscovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscovery",
    },
    consul_kv_artifact_source: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSourceToHclTerraform(struct!.consulKvArtifactSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSource",
    },
    consul_kv_source: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSourceToHclTerraform(struct!.consulKvSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSource",
    },
    dev_mode: {
      value: cdktf.booleanToHclTerraform(struct!.devMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    directory_artifact_source: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSourceToHclTerraform(struct!.directoryArtifactSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSource",
    },
    directory_config_source: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSourceToHclTerraform(struct!.directoryConfigSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSource",
    },
    directory_secret_source: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSourceToHclTerraform(struct!.directorySecretSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSource",
    },
    discovery: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecDiscovery",
    },
    discovery_namespace: {
      value: cdktf.stringToHclTerraform(struct!.discoveryNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_proc: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtProcToHclTerraform(struct!.extProc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtProc",
    },
    extauth: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtauthToHclTerraform(struct!.extauth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtauth",
    },
    extensions: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecExtensions",
    },
    gateway: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGateway",
    },
    gloo: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGlooToHclTerraform(struct!.gloo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGloo",
    },
    graphql_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsToHclTerraform(struct!.graphqlOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptions",
    },
    knative: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecKnativeToHclTerraform(struct!.knative),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecKnative",
    },
    kubernetes: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetes",
    },
    kubernetes_artifact_source: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubernetesArtifactSource),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kubernetes_config_source: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubernetesConfigSource),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kubernetes_secret_source: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubernetesSecretSource),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    linkerd: {
      value: cdktf.booleanToHclTerraform(struct!.linkerd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    named_extauth: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthToHclTerraform(struct!.namedExtauth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauth",
    },
    namespaced_statuses: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatusesToHclTerraform(struct!.namespacedStatuses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatuses",
    },
    observability_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsToHclTerraform(struct!.observabilityOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptions",
    },
    ratelimit: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitToHclTerraform(struct!.ratelimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimit",
    },
    ratelimit_server: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerToHclTerraform(struct!.ratelimitServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServer",
    },
    rbac: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecRbacToHclTerraform(struct!.rbac),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecRbac",
    },
    refresh_rate: {
      value: cdktf.stringToHclTerraform(struct!.refreshRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsToHclTerraform(struct!.secretOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptions",
    },
    upstream_options: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsToHclTerraform(struct!.upstreamOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptions",
    },
    vault_secret_source: {
      value: dataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceToHclTerraform(struct!.vaultSecretSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSource",
    },
    watch_namespace_selectors: {
      value: cdktf.listMapperHcl(dataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsToHclTerraform, false)(struct!.watchNamespaceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsList",
    },
    watch_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.watchNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGlooSoloIoSettingsV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGlooSoloIoSettingsV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingServer = this._cachingServer?.internalValue;
    }
    if (this._consoleOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleOptions = this._consoleOptions?.internalValue;
    }
    if (this._consul?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consul = this._consul?.internalValue;
    }
    if (this._consulDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consulDiscovery = this._consulDiscovery?.internalValue;
    }
    if (this._consulKvArtifactSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consulKvArtifactSource = this._consulKvArtifactSource?.internalValue;
    }
    if (this._consulKvSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consulKvSource = this._consulKvSource?.internalValue;
    }
    if (this._devMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.devMode = this._devMode;
    }
    if (this._directoryArtifactSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryArtifactSource = this._directoryArtifactSource?.internalValue;
    }
    if (this._directoryConfigSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryConfigSource = this._directoryConfigSource?.internalValue;
    }
    if (this._directorySecretSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directorySecretSource = this._directorySecretSource?.internalValue;
    }
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    if (this._discoveryNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryNamespace = this._discoveryNamespace;
    }
    if (this._extProc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extProc = this._extProc?.internalValue;
    }
    if (this._extauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extauth = this._extauth?.internalValue;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._gloo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gloo = this._gloo?.internalValue;
    }
    if (this._graphqlOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlOptions = this._graphqlOptions?.internalValue;
    }
    if (this._knative?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knative = this._knative?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._kubernetesArtifactSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesArtifactSource = this._kubernetesArtifactSource;
    }
    if (this._kubernetesConfigSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesConfigSource = this._kubernetesConfigSource;
    }
    if (this._kubernetesSecretSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesSecretSource = this._kubernetesSecretSource;
    }
    if (this._linkerd !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkerd = this._linkerd;
    }
    if (this._namedExtauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedExtauth = this._namedExtauth?.internalValue;
    }
    if (this._namespacedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedStatuses = this._namespacedStatuses?.internalValue;
    }
    if (this._observabilityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.observabilityOptions = this._observabilityOptions?.internalValue;
    }
    if (this._ratelimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimit = this._ratelimit?.internalValue;
    }
    if (this._ratelimitServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratelimitServer = this._ratelimitServer?.internalValue;
    }
    if (this._rbac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbac = this._rbac?.internalValue;
    }
    if (this._refreshRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRate = this._refreshRate;
    }
    if (this._secretOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretOptions = this._secretOptions?.internalValue;
    }
    if (this._upstreamOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamOptions = this._upstreamOptions?.internalValue;
    }
    if (this._vaultSecretSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretSource = this._vaultSecretSource?.internalValue;
    }
    if (this._watchNamespaceSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchNamespaceSelectors = this._watchNamespaceSelectors?.internalValue;
    }
    if (this._watchNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchNamespaces = this._watchNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGlooSoloIoSettingsV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachingServer.internalValue = undefined;
      this._consoleOptions.internalValue = undefined;
      this._consul.internalValue = undefined;
      this._consulDiscovery.internalValue = undefined;
      this._consulKvArtifactSource.internalValue = undefined;
      this._consulKvSource.internalValue = undefined;
      this._devMode = undefined;
      this._directoryArtifactSource.internalValue = undefined;
      this._directoryConfigSource.internalValue = undefined;
      this._directorySecretSource.internalValue = undefined;
      this._discovery.internalValue = undefined;
      this._discoveryNamespace = undefined;
      this._extProc.internalValue = undefined;
      this._extauth.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._gloo.internalValue = undefined;
      this._graphqlOptions.internalValue = undefined;
      this._knative.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._kubernetesArtifactSource = undefined;
      this._kubernetesConfigSource = undefined;
      this._kubernetesSecretSource = undefined;
      this._linkerd = undefined;
      this._namedExtauth.internalValue = undefined;
      this._namespacedStatuses.internalValue = undefined;
      this._observabilityOptions.internalValue = undefined;
      this._ratelimit.internalValue = undefined;
      this._ratelimitServer.internalValue = undefined;
      this._rbac.internalValue = undefined;
      this._refreshRate = undefined;
      this._secretOptions.internalValue = undefined;
      this._upstreamOptions.internalValue = undefined;
      this._vaultSecretSource.internalValue = undefined;
      this._watchNamespaceSelectors.internalValue = undefined;
      this._watchNamespaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachingServer.internalValue = value.cachingServer;
      this._consoleOptions.internalValue = value.consoleOptions;
      this._consul.internalValue = value.consul;
      this._consulDiscovery.internalValue = value.consulDiscovery;
      this._consulKvArtifactSource.internalValue = value.consulKvArtifactSource;
      this._consulKvSource.internalValue = value.consulKvSource;
      this._devMode = value.devMode;
      this._directoryArtifactSource.internalValue = value.directoryArtifactSource;
      this._directoryConfigSource.internalValue = value.directoryConfigSource;
      this._directorySecretSource.internalValue = value.directorySecretSource;
      this._discovery.internalValue = value.discovery;
      this._discoveryNamespace = value.discoveryNamespace;
      this._extProc.internalValue = value.extProc;
      this._extauth.internalValue = value.extauth;
      this._extensions.internalValue = value.extensions;
      this._gateway.internalValue = value.gateway;
      this._gloo.internalValue = value.gloo;
      this._graphqlOptions.internalValue = value.graphqlOptions;
      this._knative.internalValue = value.knative;
      this._kubernetes.internalValue = value.kubernetes;
      this._kubernetesArtifactSource = value.kubernetesArtifactSource;
      this._kubernetesConfigSource = value.kubernetesConfigSource;
      this._kubernetesSecretSource = value.kubernetesSecretSource;
      this._linkerd = value.linkerd;
      this._namedExtauth.internalValue = value.namedExtauth;
      this._namespacedStatuses.internalValue = value.namespacedStatuses;
      this._observabilityOptions.internalValue = value.observabilityOptions;
      this._ratelimit.internalValue = value.ratelimit;
      this._ratelimitServer.internalValue = value.ratelimitServer;
      this._rbac.internalValue = value.rbac;
      this._refreshRate = value.refreshRate;
      this._secretOptions.internalValue = value.secretOptions;
      this._upstreamOptions.internalValue = value.upstreamOptions;
      this._vaultSecretSource.internalValue = value.vaultSecretSource;
      this._watchNamespaceSelectors.internalValue = value.watchNamespaceSelectors;
      this._watchNamespaces = value.watchNamespaces;
    }
  }

  // caching_server - computed: false, optional: true, required: false
  private _cachingServer = new DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServerOutputReference(this, "caching_server");
  public get cachingServer() {
    return this._cachingServer;
  }
  public putCachingServer(value: DataK8SGlooSoloIoSettingsV1ManifestSpecCachingServer) {
    this._cachingServer.internalValue = value;
  }
  public resetCachingServer() {
    this._cachingServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingServerInput() {
    return this._cachingServer.internalValue;
  }

  // console_options - computed: false, optional: true, required: false
  private _consoleOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptionsOutputReference(this, "console_options");
  public get consoleOptions() {
    return this._consoleOptions;
  }
  public putConsoleOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsoleOptions) {
    this._consoleOptions.internalValue = value;
  }
  public resetConsoleOptions() {
    this._consoleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleOptionsInput() {
    return this._consoleOptions.internalValue;
  }

  // consul - computed: false, optional: true, required: false
  private _consul = new DataK8SGlooSoloIoSettingsV1ManifestSpecConsulOutputReference(this, "consul");
  public get consul() {
    return this._consul;
  }
  public putConsul(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsul) {
    this._consul.internalValue = value;
  }
  public resetConsul() {
    this._consul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulInput() {
    return this._consul.internalValue;
  }

  // consul_discovery - computed: false, optional: true, required: false
  private _consulDiscovery = new DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscoveryOutputReference(this, "consul_discovery");
  public get consulDiscovery() {
    return this._consulDiscovery;
  }
  public putConsulDiscovery(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulDiscovery) {
    this._consulDiscovery.internalValue = value;
  }
  public resetConsulDiscovery() {
    this._consulDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulDiscoveryInput() {
    return this._consulDiscovery.internalValue;
  }

  // consul_kv_artifact_source - computed: false, optional: true, required: false
  private _consulKvArtifactSource = new DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSourceOutputReference(this, "consul_kv_artifact_source");
  public get consulKvArtifactSource() {
    return this._consulKvArtifactSource;
  }
  public putConsulKvArtifactSource(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvArtifactSource) {
    this._consulKvArtifactSource.internalValue = value;
  }
  public resetConsulKvArtifactSource() {
    this._consulKvArtifactSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulKvArtifactSourceInput() {
    return this._consulKvArtifactSource.internalValue;
  }

  // consul_kv_source - computed: false, optional: true, required: false
  private _consulKvSource = new DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSourceOutputReference(this, "consul_kv_source");
  public get consulKvSource() {
    return this._consulKvSource;
  }
  public putConsulKvSource(value: DataK8SGlooSoloIoSettingsV1ManifestSpecConsulKvSource) {
    this._consulKvSource.internalValue = value;
  }
  public resetConsulKvSource() {
    this._consulKvSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulKvSourceInput() {
    return this._consulKvSource.internalValue;
  }

  // dev_mode - computed: false, optional: true, required: false
  private _devMode?: boolean | cdktf.IResolvable; 
  public get devMode() {
    return this.getBooleanAttribute('dev_mode');
  }
  public set devMode(value: boolean | cdktf.IResolvable) {
    this._devMode = value;
  }
  public resetDevMode() {
    this._devMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devModeInput() {
    return this._devMode;
  }

  // directory_artifact_source - computed: false, optional: true, required: false
  private _directoryArtifactSource = new DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSourceOutputReference(this, "directory_artifact_source");
  public get directoryArtifactSource() {
    return this._directoryArtifactSource;
  }
  public putDirectoryArtifactSource(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryArtifactSource) {
    this._directoryArtifactSource.internalValue = value;
  }
  public resetDirectoryArtifactSource() {
    this._directoryArtifactSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryArtifactSourceInput() {
    return this._directoryArtifactSource.internalValue;
  }

  // directory_config_source - computed: false, optional: true, required: false
  private _directoryConfigSource = new DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSourceOutputReference(this, "directory_config_source");
  public get directoryConfigSource() {
    return this._directoryConfigSource;
  }
  public putDirectoryConfigSource(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectoryConfigSource) {
    this._directoryConfigSource.internalValue = value;
  }
  public resetDirectoryConfigSource() {
    this._directoryConfigSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryConfigSourceInput() {
    return this._directoryConfigSource.internalValue;
  }

  // directory_secret_source - computed: false, optional: true, required: false
  private _directorySecretSource = new DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSourceOutputReference(this, "directory_secret_source");
  public get directorySecretSource() {
    return this._directorySecretSource;
  }
  public putDirectorySecretSource(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDirectorySecretSource) {
    this._directorySecretSource.internalValue = value;
  }
  public resetDirectorySecretSource() {
    this._directorySecretSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directorySecretSourceInput() {
    return this._directorySecretSource.internalValue;
  }

  // discovery - computed: false, optional: true, required: false
  private _discovery = new DataK8SGlooSoloIoSettingsV1ManifestSpecDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataK8SGlooSoloIoSettingsV1ManifestSpecDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // discovery_namespace - computed: false, optional: true, required: false
  private _discoveryNamespace?: string; 
  public get discoveryNamespace() {
    return this.getStringAttribute('discovery_namespace');
  }
  public set discoveryNamespace(value: string) {
    this._discoveryNamespace = value;
  }
  public resetDiscoveryNamespace() {
    this._discoveryNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryNamespaceInput() {
    return this._discoveryNamespace;
  }

  // ext_proc - computed: false, optional: true, required: false
  private _extProc = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtProcOutputReference(this, "ext_proc");
  public get extProc() {
    return this._extProc;
  }
  public putExtProc(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtProc) {
    this._extProc.internalValue = value;
  }
  public resetExtProc() {
    this._extProc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extProcInput() {
    return this._extProc.internalValue;
  }

  // extauth - computed: false, optional: true, required: false
  private _extauth = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtauthOutputReference(this, "extauth");
  public get extauth() {
    return this._extauth;
  }
  public putExtauth(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtauth) {
    this._extauth.internalValue = value;
  }
  public resetExtauth() {
    this._extauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extauthInput() {
    return this._extauth.internalValue;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new DataK8SGlooSoloIoSettingsV1ManifestSpecExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecExtensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new DataK8SGlooSoloIoSettingsV1ManifestSpecGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // gloo - computed: false, optional: true, required: false
  private _gloo = new DataK8SGlooSoloIoSettingsV1ManifestSpecGlooOutputReference(this, "gloo");
  public get gloo() {
    return this._gloo;
  }
  public putGloo(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGloo) {
    this._gloo.internalValue = value;
  }
  public resetGloo() {
    this._gloo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glooInput() {
    return this._gloo.internalValue;
  }

  // graphql_options - computed: false, optional: true, required: false
  private _graphqlOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptionsOutputReference(this, "graphql_options");
  public get graphqlOptions() {
    return this._graphqlOptions;
  }
  public putGraphqlOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecGraphqlOptions) {
    this._graphqlOptions.internalValue = value;
  }
  public resetGraphqlOptions() {
    this._graphqlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlOptionsInput() {
    return this._graphqlOptions.internalValue;
  }

  // knative - computed: false, optional: true, required: false
  private _knative = new DataK8SGlooSoloIoSettingsV1ManifestSpecKnativeOutputReference(this, "knative");
  public get knative() {
    return this._knative;
  }
  public putKnative(value: DataK8SGlooSoloIoSettingsV1ManifestSpecKnative) {
    this._knative.internalValue = value;
  }
  public resetKnative() {
    this._knative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knativeInput() {
    return this._knative.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SGlooSoloIoSettingsV1ManifestSpecKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // kubernetes_artifact_source - computed: false, optional: true, required: false
  private _kubernetesArtifactSource?: { [key: string]: string }; 
  public get kubernetesArtifactSource() {
    return this.getStringMapAttribute('kubernetes_artifact_source');
  }
  public set kubernetesArtifactSource(value: { [key: string]: string }) {
    this._kubernetesArtifactSource = value;
  }
  public resetKubernetesArtifactSource() {
    this._kubernetesArtifactSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesArtifactSourceInput() {
    return this._kubernetesArtifactSource;
  }

  // kubernetes_config_source - computed: false, optional: true, required: false
  private _kubernetesConfigSource?: { [key: string]: string }; 
  public get kubernetesConfigSource() {
    return this.getStringMapAttribute('kubernetes_config_source');
  }
  public set kubernetesConfigSource(value: { [key: string]: string }) {
    this._kubernetesConfigSource = value;
  }
  public resetKubernetesConfigSource() {
    this._kubernetesConfigSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesConfigSourceInput() {
    return this._kubernetesConfigSource;
  }

  // kubernetes_secret_source - computed: false, optional: true, required: false
  private _kubernetesSecretSource?: { [key: string]: string }; 
  public get kubernetesSecretSource() {
    return this.getStringMapAttribute('kubernetes_secret_source');
  }
  public set kubernetesSecretSource(value: { [key: string]: string }) {
    this._kubernetesSecretSource = value;
  }
  public resetKubernetesSecretSource() {
    this._kubernetesSecretSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSecretSourceInput() {
    return this._kubernetesSecretSource;
  }

  // linkerd - computed: false, optional: true, required: false
  private _linkerd?: boolean | cdktf.IResolvable; 
  public get linkerd() {
    return this.getBooleanAttribute('linkerd');
  }
  public set linkerd(value: boolean | cdktf.IResolvable) {
    this._linkerd = value;
  }
  public resetLinkerd() {
    this._linkerd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkerdInput() {
    return this._linkerd;
  }

  // named_extauth - computed: false, optional: true, required: false
  private _namedExtauth = new DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauthOutputReference(this, "named_extauth");
  public get namedExtauth() {
    return this._namedExtauth;
  }
  public putNamedExtauth(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamedExtauth) {
    this._namedExtauth.internalValue = value;
  }
  public resetNamedExtauth() {
    this._namedExtauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedExtauthInput() {
    return this._namedExtauth.internalValue;
  }

  // namespaced_statuses - computed: false, optional: true, required: false
  private _namespacedStatuses = new DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatusesOutputReference(this, "namespaced_statuses");
  public get namespacedStatuses() {
    return this._namespacedStatuses;
  }
  public putNamespacedStatuses(value: DataK8SGlooSoloIoSettingsV1ManifestSpecNamespacedStatuses) {
    this._namespacedStatuses.internalValue = value;
  }
  public resetNamespacedStatuses() {
    this._namespacedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedStatusesInput() {
    return this._namespacedStatuses.internalValue;
  }

  // observability_options - computed: false, optional: true, required: false
  private _observabilityOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptionsOutputReference(this, "observability_options");
  public get observabilityOptions() {
    return this._observabilityOptions;
  }
  public putObservabilityOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecObservabilityOptions) {
    this._observabilityOptions.internalValue = value;
  }
  public resetObservabilityOptions() {
    this._observabilityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityOptionsInput() {
    return this._observabilityOptions.internalValue;
  }

  // ratelimit - computed: false, optional: true, required: false
  private _ratelimit = new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitOutputReference(this, "ratelimit");
  public get ratelimit() {
    return this._ratelimit;
  }
  public putRatelimit(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimit) {
    this._ratelimit.internalValue = value;
  }
  public resetRatelimit() {
    this._ratelimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit.internalValue;
  }

  // ratelimit_server - computed: false, optional: true, required: false
  private _ratelimitServer = new DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServerOutputReference(this, "ratelimit_server");
  public get ratelimitServer() {
    return this._ratelimitServer;
  }
  public putRatelimitServer(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRatelimitServer) {
    this._ratelimitServer.internalValue = value;
  }
  public resetRatelimitServer() {
    this._ratelimitServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitServerInput() {
    return this._ratelimitServer.internalValue;
  }

  // rbac - computed: false, optional: true, required: false
  private _rbac = new DataK8SGlooSoloIoSettingsV1ManifestSpecRbacOutputReference(this, "rbac");
  public get rbac() {
    return this._rbac;
  }
  public putRbac(value: DataK8SGlooSoloIoSettingsV1ManifestSpecRbac) {
    this._rbac.internalValue = value;
  }
  public resetRbac() {
    this._rbac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacInput() {
    return this._rbac.internalValue;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: string; 
  public get refreshRate() {
    return this.getStringAttribute('refresh_rate');
  }
  public set refreshRate(value: string) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // secret_options - computed: false, optional: true, required: false
  private _secretOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptionsOutputReference(this, "secret_options");
  public get secretOptions() {
    return this._secretOptions;
  }
  public putSecretOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecSecretOptions) {
    this._secretOptions.internalValue = value;
  }
  public resetSecretOptions() {
    this._secretOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretOptionsInput() {
    return this._secretOptions.internalValue;
  }

  // upstream_options - computed: false, optional: true, required: false
  private _upstreamOptions = new DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptionsOutputReference(this, "upstream_options");
  public get upstreamOptions() {
    return this._upstreamOptions;
  }
  public putUpstreamOptions(value: DataK8SGlooSoloIoSettingsV1ManifestSpecUpstreamOptions) {
    this._upstreamOptions.internalValue = value;
  }
  public resetUpstreamOptions() {
    this._upstreamOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamOptionsInput() {
    return this._upstreamOptions.internalValue;
  }

  // vault_secret_source - computed: false, optional: true, required: false
  private _vaultSecretSource = new DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSourceOutputReference(this, "vault_secret_source");
  public get vaultSecretSource() {
    return this._vaultSecretSource;
  }
  public putVaultSecretSource(value: DataK8SGlooSoloIoSettingsV1ManifestSpecVaultSecretSource) {
    this._vaultSecretSource.internalValue = value;
  }
  public resetVaultSecretSource() {
    this._vaultSecretSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretSourceInput() {
    return this._vaultSecretSource.internalValue;
  }

  // watch_namespace_selectors - computed: false, optional: true, required: false
  private _watchNamespaceSelectors = new DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectorsList(this, "watch_namespace_selectors", false);
  public get watchNamespaceSelectors() {
    return this._watchNamespaceSelectors;
  }
  public putWatchNamespaceSelectors(value: DataK8SGlooSoloIoSettingsV1ManifestSpecWatchNamespaceSelectors[] | cdktf.IResolvable) {
    this._watchNamespaceSelectors.internalValue = value;
  }
  public resetWatchNamespaceSelectors() {
    this._watchNamespaceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchNamespaceSelectorsInput() {
    return this._watchNamespaceSelectors.internalValue;
  }

  // watch_namespaces - computed: false, optional: true, required: false
  private _watchNamespaces?: string[]; 
  public get watchNamespaces() {
    return this.getListAttribute('watch_namespaces');
  }
  public set watchNamespaces(value: string[]) {
    this._watchNamespaces = value;
  }
  public resetWatchNamespaces() {
    this._watchNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchNamespacesInput() {
    return this._watchNamespaces;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest k8s_gloo_solo_io_settings_v1_manifest}
*/
export class DataK8SGlooSoloIoSettingsV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gloo_solo_io_settings_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGlooSoloIoSettingsV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGlooSoloIoSettingsV1Manifest to import
  * @param importFromId The id of the existing DataK8SGlooSoloIoSettingsV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGlooSoloIoSettingsV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gloo_solo_io_settings_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gloo_solo_io_settings_v1_manifest k8s_gloo_solo_io_settings_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGlooSoloIoSettingsV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGlooSoloIoSettingsV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gloo_solo_io_settings_v1_manifest',
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
  private _metadata = new DataK8SGlooSoloIoSettingsV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGlooSoloIoSettingsV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGlooSoloIoSettingsV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGlooSoloIoSettingsV1ManifestSpec) {
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
      metadata: dataK8SGlooSoloIoSettingsV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGlooSoloIoSettingsV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGlooSoloIoSettingsV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestMetadata",
      },
      spec: {
        value: dataK8SGlooSoloIoSettingsV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGlooSoloIoSettingsV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
