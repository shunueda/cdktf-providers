// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#metadata DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#spec DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpec;
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#annotations DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#name DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#namespace DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadataToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#template DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    template: cdktf.stringToTerraform(struct!.template),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._pattern = undefined;
      this._template = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._pattern = value.pattern;
      this._template = value.template;
      this._type = value.type;
      this._value = value.value;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#and DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#and}
  */
  readonly and?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#not DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#not}
  */
  readonly not?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#or DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#or}
  */
  readonly or?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexp;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.and),
    not: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.not),
    or: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.or),
    regexp: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.and),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    not: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.not),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.or),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regexp: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._or !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and = undefined;
      this._not = undefined;
      this._or = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and = value.and;
      this._not = value.not;
      this._or = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and?: { [key: string]: string }; 
  public get and() {
    return this.getStringMapAttribute('and');
  }
  public set and(value: { [key: string]: string }) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and;
  }

  // not - computed: false, optional: true, required: false
  private _not?: { [key: string]: string }; 
  public get not() {
    return this.getStringMapAttribute('not');
  }
  public set not(value: { [key: string]: string }) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // or - computed: false, optional: true, required: false
  private _or?: { [key: string]: string }; 
  public get or() {
    return this.getStringMapAttribute('or');
  }
  public set or(value: { [key: string]: string }) {
    this._or = value;
  }
  public resetOr() {
    this._or = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchRegexp) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#level DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#level}
  */
  readonly level?: number;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbeToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    level: cdktf.numberToTerraform(struct!.level),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbeToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbe | cdktf.IResolvable): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._labels = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._labels = value.labels;
      this._level = value.level;
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
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#patterns DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#patterns}
  */
  readonly patterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#prefix DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#template DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.patterns),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexp | cdktf.IResolvable): any {
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
    patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.patterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._patterns = undefined;
      this._prefix = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._patterns = value.patterns;
      this._prefix = value.prefix;
      this._template = value.template;
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

  // patterns - computed: false, optional: false, required: true
  private _patterns?: string[]; 
  public get patterns() {
    return this.getListAttribute('patterns');
  }
  public set patterns(value: string[]) {
    this._patterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParserToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParserToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParser | cdktf.IResolvable): any {
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParser | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParser | cdktf.IResolvable | undefined) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#metrics_probe DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#metrics_probe}
  */
  readonly metricsProbe?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#syslog_parser DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#syslog_parser}
  */
  readonly syslogParser?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParser;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics_probe: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbeToTerraform(struct!.metricsProbe),
    regexp: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexpToTerraform(struct!.regexp),
    syslog_parser: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParserToTerraform(struct!.syslogParser),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics_probe: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbeToHclTerraform(struct!.metricsProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbe",
    },
    regexp: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexp",
    },
    syslog_parser: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParserToHclTerraform(struct!.syslogParser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricsProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsProbe = this._metricsProbe?.internalValue;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    if (this._syslogParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogParser = this._syslogParser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricsProbe.internalValue = undefined;
      this._regexp.internalValue = undefined;
      this._syslogParser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricsProbe.internalValue = value.metricsProbe;
      this._regexp.internalValue = value.regexp;
      this._syslogParser.internalValue = value.syslogParser;
    }
  }

  // metrics_probe - computed: false, optional: true, required: false
  private _metricsProbe = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbeOutputReference(this, "metrics_probe");
  public get metricsProbe() {
    return this._metricsProbe;
  }
  public putMetricsProbe(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserMetricsProbe) {
    this._metricsProbe.internalValue = value;
  }
  public resetMetricsProbe() {
    this._metricsProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsProbeInput() {
    return this._metricsProbe.internalValue;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserRegexp) {
    this._regexp.internalValue = value;
  }
  public resetRegexp() {
    this._regexp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp.internalValue;
  }

  // syslog_parser - computed: false, optional: true, required: false
  private _syslogParser = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParserOutputReference(this, "syslog_parser");
  public get syslogParser() {
    return this._syslogParser;
  }
  public putSyslogParser(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserSyslogParser) {
    this._syslogParser.internalValue = value;
  }
  public resetSyslogParser() {
    this._syslogParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogParserInput() {
    return this._syslogParser.internalValue;
  }
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#template DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    template: cdktf.stringToTerraform(struct!.template),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._pattern = undefined;
      this._template = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._pattern = value.pattern;
      this._template = value.template;
      this._type = value.type;
      this._value = value.value;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#and DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#and}
  */
  readonly and?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#not DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#not}
  */
  readonly not?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#or DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#or}
  */
  readonly or?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexp;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.and),
    not: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.not),
    or: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.or),
    regexp: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.and),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    not: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.not),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.or),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regexp: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._or !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and = undefined;
      this._not = undefined;
      this._or = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and = value.and;
      this._not = value.not;
      this._or = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and?: { [key: string]: string }; 
  public get and() {
    return this.getStringMapAttribute('and');
  }
  public set and(value: { [key: string]: string }) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and;
  }

  // not - computed: false, optional: true, required: false
  private _not?: { [key: string]: string }; 
  public get not() {
    return this.getStringMapAttribute('not');
  }
  public set not(value: { [key: string]: string }) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // or - computed: false, optional: true, required: false
  private _or?: { [key: string]: string }; 
  public get or() {
    return this.getStringMapAttribute('or');
  }
  public set or(value: { [key: string]: string }) {
    this._or = value;
  }
  public resetOr() {
    this._or = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionRegexp) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#condition DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#condition}
  */
  readonly condition?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionToTerraform(struct!.condition),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetCondition",
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._pattern = value.pattern;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#template DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    template: cdktf.stringToTerraform(struct!.template),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._pattern = undefined;
      this._template = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._pattern = value.pattern;
      this._template = value.template;
      this._type = value.type;
      this._value = value.value;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#and DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#and}
  */
  readonly and?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#not DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#not}
  */
  readonly not?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#or DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#or}
  */
  readonly or?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexp;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.and),
    not: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.not),
    or: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.or),
    regexp: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.and),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    not: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.not),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.or),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regexp: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._or !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and = undefined;
      this._not = undefined;
      this._or = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and = value.and;
      this._not = value.not;
      this._or = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and?: { [key: string]: string }; 
  public get and() {
    return this.getStringMapAttribute('and');
  }
  public set and(value: { [key: string]: string }) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and;
  }

  // not - computed: false, optional: true, required: false
  private _not?: { [key: string]: string }; 
  public get not() {
    return this.getStringMapAttribute('not');
  }
  public set not(value: { [key: string]: string }) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // or - computed: false, optional: true, required: false
  private _or?: { [key: string]: string }; 
  public get or() {
    return this.getStringMapAttribute('or');
  }
  public set or(value: { [key: string]: string }) {
    this._or = value;
  }
  public resetOr() {
    this._or = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionRegexp) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRename {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#condition DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#condition}
  */
  readonly condition?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#new_name DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#new_name}
  */
  readonly newName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#old_name DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#old_name}
  */
  readonly oldName: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionToTerraform(struct!.condition),
    new_name: cdktf.stringToTerraform(struct!.newName),
    old_name: cdktf.stringToTerraform(struct!.oldName),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRename | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameCondition",
    },
    new_name: {
      value: cdktf.stringToHclTerraform(struct!.newName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_name: {
      value: cdktf.stringToHclTerraform(struct!.oldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRename | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._newName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newName = this._newName;
    }
    if (this._oldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldName = this._oldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRename | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._newName = undefined;
      this._oldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._newName = value.newName;
      this._oldName = value.oldName;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // new_name - computed: false, optional: false, required: true
  private _newName?: string; 
  public get newName() {
    return this.getStringAttribute('new_name');
  }
  public set newName(value: string) {
    this._newName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newNameInput() {
    return this._newName;
  }

  // old_name - computed: false, optional: false, required: true
  private _oldName?: string; 
  public get oldName() {
    return this.getStringAttribute('old_name');
  }
  public set oldName(value: string) {
    this._oldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldNameInput() {
    return this._oldName;
  }
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#template DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    template: cdktf.stringToTerraform(struct!.template),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._pattern = undefined;
      this._template = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._pattern = value.pattern;
      this._template = value.template;
      this._type = value.type;
      this._value = value.value;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#and DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#and}
  */
  readonly and?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#not DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#not}
  */
  readonly not?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#or DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#or}
  */
  readonly or?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexp;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.and),
    not: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.not),
    or: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.or),
    regexp: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.and),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    not: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.not),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.or),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regexp: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._or !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and = undefined;
      this._not = undefined;
      this._or = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and = value.and;
      this._not = value.not;
      this._or = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and?: { [key: string]: string }; 
  public get and() {
    return this.getStringMapAttribute('and');
  }
  public set and(value: { [key: string]: string }) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and;
  }

  // not - computed: false, optional: true, required: false
  private _not?: { [key: string]: string }; 
  public get not() {
    return this.getStringMapAttribute('not');
  }
  public set not(value: { [key: string]: string }) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // or - computed: false, optional: true, required: false
  private _or?: { [key: string]: string }; 
  public get or() {
    return this.getStringMapAttribute('or');
  }
  public set or(value: { [key: string]: string }) {
    this._or = value;
  }
  public resetOr() {
    this._or = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionRegexp) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#condition DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#condition}
  */
  readonly condition?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#field DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionToTerraform(struct!.condition),
    field: cdktf.stringToTerraform(struct!.field),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetCondition",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._field = value.field;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#template DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    template: cdktf.stringToTerraform(struct!.template),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._pattern = undefined;
      this._template = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._pattern = value.pattern;
      this._template = value.template;
      this._type = value.type;
      this._value = value.value;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#and DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#and}
  */
  readonly and?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#not DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#not}
  */
  readonly not?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#or DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#or}
  */
  readonly or?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexp;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.and),
    not: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.not),
    or: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.or),
    regexp: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.and),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    not: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.not),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.or),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regexp: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._or !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and = undefined;
      this._not = undefined;
      this._or = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and = value.and;
      this._not = value.not;
      this._or = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and?: { [key: string]: string }; 
  public get and() {
    return this.getStringMapAttribute('and');
  }
  public set and(value: { [key: string]: string }) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and;
  }

  // not - computed: false, optional: true, required: false
  private _not?: { [key: string]: string }; 
  public get not() {
    return this.getStringMapAttribute('not');
  }
  public set not(value: { [key: string]: string }) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // or - computed: false, optional: true, required: false
  private _or?: { [key: string]: string }; 
  public get or() {
    return this.getStringMapAttribute('or');
  }
  public set or(value: { [key: string]: string }) {
    this._or = value;
  }
  public resetOr() {
    this._or = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionRegexp) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubst {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#condition DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#condition}
  */
  readonly condition?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#field DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#replace DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#replace}
  */
  readonly replace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionToTerraform(struct!.condition),
    field: cdktf.stringToTerraform(struct!.field),
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    replace: cdktf.stringToTerraform(struct!.replace),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstCondition",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.stringToHclTerraform(struct!.replace),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubst | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubst | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._field = undefined;
      this._flags = undefined;
      this._pattern = undefined;
      this._replace = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._field = value.field;
      this._flags = value.flags;
      this._pattern = value.pattern;
      this._replace = value.replace;
      this._type = value.type;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
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
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#template DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    template: cdktf.stringToTerraform(struct!.template),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._pattern = undefined;
      this._template = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._pattern = value.pattern;
      this._template = value.template;
      this._type = value.type;
      this._value = value.value;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#and DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#and}
  */
  readonly and?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#not DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#not}
  */
  readonly not?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#or DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#or}
  */
  readonly or?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexp;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.and),
    not: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.not),
    or: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.or),
    regexp: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.and),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    not: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.not),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.or),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regexp: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._or !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and = undefined;
      this._not = undefined;
      this._or = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and = value.and;
      this._not = value.not;
      this._or = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and?: { [key: string]: string }; 
  public get and() {
    return this.getStringMapAttribute('and');
  }
  public set and(value: { [key: string]: string }) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and;
  }

  // not - computed: false, optional: true, required: false
  private _not?: { [key: string]: string }; 
  public get not() {
    return this.getStringMapAttribute('not');
  }
  public set not(value: { [key: string]: string }) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // or - computed: false, optional: true, required: false
  private _or?: { [key: string]: string }; 
  public get or() {
    return this.getStringMapAttribute('or');
  }
  public set or(value: { [key: string]: string }) {
    this._or = value;
  }
  public resetOr() {
    this._or = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionRegexp) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#condition DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#condition}
  */
  readonly condition?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetCondition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#field DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#field}
  */
  readonly field: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionToTerraform(struct!.condition),
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetCondition",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._field = value.field;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#group_unset DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#group_unset}
  */
  readonly groupUnset?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#rename DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#rename}
  */
  readonly rename?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRename;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#set DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#set}
  */
  readonly set?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#subst DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#subst}
  */
  readonly subst?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubst;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#unset DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#unset}
  */
  readonly unset?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnset;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_unset: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetToTerraform(struct!.groupUnset),
    rename: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameToTerraform(struct!.rename),
    set: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetToTerraform(struct!.set),
    subst: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstToTerraform(struct!.subst),
    unset: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetToTerraform(struct!.unset),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_unset: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetToHclTerraform(struct!.groupUnset),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnset",
    },
    rename: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameToHclTerraform(struct!.rename),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRename",
    },
    set: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSet",
    },
    subst: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstToHclTerraform(struct!.subst),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubst",
    },
    unset: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetToHclTerraform(struct!.unset),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnset",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupUnset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupUnset = this._groupUnset?.internalValue;
    }
    if (this._rename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rename = this._rename?.internalValue;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    if (this._subst?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subst = this._subst?.internalValue;
    }
    if (this._unset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unset = this._unset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupUnset.internalValue = undefined;
      this._rename.internalValue = undefined;
      this._set.internalValue = undefined;
      this._subst.internalValue = undefined;
      this._unset.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupUnset.internalValue = value.groupUnset;
      this._rename.internalValue = value.rename;
      this._set.internalValue = value.set;
      this._subst.internalValue = value.subst;
      this._unset.internalValue = value.unset;
    }
  }

  // group_unset - computed: false, optional: true, required: false
  private _groupUnset = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnsetOutputReference(this, "group_unset");
  public get groupUnset() {
    return this._groupUnset;
  }
  public putGroupUnset(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteGroupUnset) {
    this._groupUnset.internalValue = value;
  }
  public resetGroupUnset() {
    this._groupUnset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupUnsetInput() {
    return this._groupUnset.internalValue;
  }

  // rename - computed: false, optional: true, required: false
  private _rename = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRenameOutputReference(this, "rename");
  public get rename() {
    return this._rename;
  }
  public putRename(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteRename) {
    this._rename.internalValue = value;
  }
  public resetRename() {
    this._rename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameInput() {
    return this._rename.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }

  // subst - computed: false, optional: true, required: false
  private _subst = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubstOutputReference(this, "subst");
  public get subst() {
    return this._subst;
  }
  public putSubst(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteSubst) {
    this._subst.internalValue = value;
  }
  public resetSubst() {
    this._subst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substInput() {
    return this._subst.internalValue;
  }

  // unset - computed: false, optional: true, required: false
  private _unset = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnsetOutputReference(this, "unset");
  public get unset() {
    return this._unset;
  }
  public putUnset(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteUnset) {
    this._unset.internalValue = value;
  }
  public resetUnset() {
    this._unset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetInput() {
    return this._unset.internalValue;
  }
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewrite[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteOutputReference {
    return new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#id DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#match DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#match}
  */
  readonly match?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#parser DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#parser}
  */
  readonly parser?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParser;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#rewrite DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#rewrite}
  */
  readonly rewrite?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewrite[] | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    match: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchToTerraform(struct!.match),
    parser: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserToTerraform(struct!.parser),
    rewrite: cdktf.listMapper(dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteToTerraform, false)(struct!.rewrite),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatch",
    },
    parser: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParser",
    },
    rewrite: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteToHclTerraform, false)(struct!.rewrite),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    if (this._rewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrite = this._rewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._match.internalValue = undefined;
      this._parser.internalValue = undefined;
      this._rewrite.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._match.internalValue = value.match;
      this._parser.internalValue = value.parser;
      this._rewrite.internalValue = value.rewrite;
    }
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

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }

  // rewrite - computed: false, optional: true, required: false
  private _rewrite = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewriteList(this, "rewrite", false);
  public get rewrite() {
    return this._rewrite;
  }
  public putRewrite(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersRewrite[] | cdktf.IResolvable) {
    this._rewrite.internalValue = value;
  }
  public resetRewrite() {
    this._rewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteInput() {
    return this._rewrite.internalValue;
  }
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFilters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersOutputReference {
    return new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#flags DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#pattern DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#template DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#type DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#value DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexpToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    template: cdktf.stringToTerraform(struct!.template),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexpToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexp | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
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

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._pattern = undefined;
      this._template = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._pattern = value.pattern;
      this._template = value.template;
      this._type = value.type;
      this._value = value.value;
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

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#and DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#and}
  */
  readonly and?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#not DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#not}
  */
  readonly not?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#or DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#or}
  */
  readonly or?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#regexp DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#regexp}
  */
  readonly regexp?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexp;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.and),
    not: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.not),
    or: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.or),
    regexp: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexpToTerraform(struct!.regexp),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.and),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    not: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.not),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    or: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.or),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regexp: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexpToHclTerraform(struct!.regexp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._and !== undefined) {
      hasAnyValues = true;
      internalValueResult.and = this._and;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._or !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or;
    }
    if (this._regexp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._and = undefined;
      this._not = undefined;
      this._or = undefined;
      this._regexp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._and = value.and;
      this._not = value.not;
      this._or = value.or;
      this._regexp.internalValue = value.regexp;
    }
  }

  // and - computed: false, optional: true, required: false
  private _and?: { [key: string]: string }; 
  public get and() {
    return this.getStringMapAttribute('and');
  }
  public set and(value: { [key: string]: string }) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and;
  }

  // not - computed: false, optional: true, required: false
  private _not?: { [key: string]: string }; 
  public get not() {
    return this.getStringMapAttribute('not');
  }
  public set not(value: { [key: string]: string }) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // or - computed: false, optional: true, required: false
  private _or?: { [key: string]: string }; 
  public get or() {
    return this.getStringMapAttribute('or');
  }
  public set or(value: { [key: string]: string }) {
    this._or = value;
  }
  public resetOr() {
    this._or = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexpOutputReference(this, "regexp");
  public get regexp() {
    return this._regexp;
  }
  public putRegexp(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchRegexp) {
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
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#key DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#labels DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#level DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#level}
  */
  readonly level?: number;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    level: cdktf.numberToTerraform(struct!.level),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetrics | cdktf.IResolvable): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._labels = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._labels = value.labels;
      this._level = value.level;
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
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsOutputReference {
    return new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#filters DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#filters}
  */
  readonly filters?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#global_output_refs DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#global_output_refs}
  */
  readonly globalOutputRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#local_output_refs DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#local_output_refs}
  */
  readonly localOutputRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#logging_ref DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#logging_ref}
  */
  readonly loggingRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#match DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#match}
  */
  readonly match?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#output_metrics DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest#output_metrics}
  */
  readonly outputMetrics?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetrics[] | cdktf.IResolvable;
}

export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecToTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersToTerraform, false)(struct!.filters),
    global_output_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globalOutputRefs),
    local_output_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localOutputRefs),
    logging_ref: cdktf.stringToTerraform(struct!.loggingRef),
    match: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchToTerraform(struct!.match),
    output_metrics: cdktf.listMapper(dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsToTerraform, false)(struct!.outputMetrics),
  }
}


export function dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersList",
    },
    global_output_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globalOutputRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_output_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localOutputRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logging_ref: {
      value: cdktf.stringToHclTerraform(struct!.loggingRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatch",
    },
    output_metrics: {
      value: cdktf.listMapperHcl(dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsToHclTerraform, false)(struct!.outputMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._globalOutputRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOutputRefs = this._globalOutputRefs;
    }
    if (this._localOutputRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localOutputRefs = this._localOutputRefs;
    }
    if (this._loggingRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingRef = this._loggingRef;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._outputMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputMetrics = this._outputMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
      this._globalOutputRefs = undefined;
      this._localOutputRefs = undefined;
      this._loggingRef = undefined;
      this._match.internalValue = undefined;
      this._outputMetrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
      this._globalOutputRefs = value.globalOutputRefs;
      this._localOutputRefs = value.localOutputRefs;
      this._loggingRef = value.loggingRef;
      this._match.internalValue = value.match;
      this._outputMetrics.internalValue = value.outputMetrics;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // global_output_refs - computed: false, optional: true, required: false
  private _globalOutputRefs?: string[]; 
  public get globalOutputRefs() {
    return this.getListAttribute('global_output_refs');
  }
  public set globalOutputRefs(value: string[]) {
    this._globalOutputRefs = value;
  }
  public resetGlobalOutputRefs() {
    this._globalOutputRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutputRefsInput() {
    return this._globalOutputRefs;
  }

  // local_output_refs - computed: false, optional: true, required: false
  private _localOutputRefs?: string[]; 
  public get localOutputRefs() {
    return this.getListAttribute('local_output_refs');
  }
  public set localOutputRefs(value: string[]) {
    this._localOutputRefs = value;
  }
  public resetLocalOutputRefs() {
    this._localOutputRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOutputRefsInput() {
    return this._localOutputRefs;
  }

  // logging_ref - computed: false, optional: true, required: false
  private _loggingRef?: string; 
  public get loggingRef() {
    return this.getStringAttribute('logging_ref');
  }
  public set loggingRef(value: string) {
    this._loggingRef = value;
  }
  public resetLoggingRef() {
    this._loggingRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingRefInput() {
    return this._loggingRef;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // output_metrics - computed: false, optional: true, required: false
  private _outputMetrics = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetricsList(this, "output_metrics", false);
  public get outputMetrics() {
    return this._outputMetrics;
  }
  public putOutputMetrics(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputMetrics[] | cdktf.IResolvable) {
    this._outputMetrics.internalValue = value;
  }
  public resetOutputMetrics() {
    this._outputMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputMetricsInput() {
    return this._outputMetrics.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest k8s_logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest}
*/
export class DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest k8s_logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_logging_banzaicloud_io_syslog_ng_flow_v1beta1_manifest',
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
  private _metadata = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpec) {
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
      metadata: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLoggingBanzaicloudIoSyslogNgFlowV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
