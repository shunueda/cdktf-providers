// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFluentbitFluentIoParserV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#metadata DataK8SFluentbitFluentIoParserV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadata;
  /**
  * ParserSpec defines the desired state of ClusterParser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#spec DataK8SFluentbitFluentIoParserV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpec;
}
export interface DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#annotations DataK8SFluentbitFluentIoParserV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#labels DataK8SFluentbitFluentIoParserV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#name DataK8SFluentbitFluentIoParserV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#namespace DataK8SFluentbitFluentIoParserV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecoders {
  /**
  * If the content can be decoded in a structured message, append that structure message (keys and values) to the original log message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#decode_field DataK8SFluentbitFluentIoParserV1Alpha2Manifest#decode_field}
  */
  readonly decodeField?: string;
  /**
  * Any content decoded (unstructured or structured) will be replaced in the same key/value, no extra keys are added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#decode_field_as DataK8SFluentbitFluentIoParserV1Alpha2Manifest#decode_field_as}
  */
  readonly decodeFieldAs?: string;
}

export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersToTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecoders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decode_field: cdktf.stringToTerraform(struct!.decodeField),
    decode_field_as: cdktf.stringToTerraform(struct!.decodeFieldAs),
  }
}


export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersToHclTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecoders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decode_field: {
      value: cdktf.stringToHclTerraform(struct!.decodeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decode_field_as: {
      value: cdktf.stringToHclTerraform(struct!.decodeFieldAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecoders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decodeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodeField = this._decodeField;
    }
    if (this._decodeFieldAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.decodeFieldAs = this._decodeFieldAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecoders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decodeField = undefined;
      this._decodeFieldAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decodeField = value.decodeField;
      this._decodeFieldAs = value.decodeFieldAs;
    }
  }

  // decode_field - computed: false, optional: true, required: false
  private _decodeField?: string; 
  public get decodeField() {
    return this.getStringAttribute('decode_field');
  }
  public set decodeField(value: string) {
    this._decodeField = value;
  }
  public resetDecodeField() {
    this._decodeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeFieldInput() {
    return this._decodeField;
  }

  // decode_field_as - computed: false, optional: true, required: false
  private _decodeFieldAs?: string; 
  public get decodeFieldAs() {
    return this.getStringAttribute('decode_field_as');
  }
  public set decodeFieldAs(value: string) {
    this._decodeFieldAs = value;
  }
  public resetDecodeFieldAs() {
    this._decodeFieldAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeFieldAsInput() {
    return this._decodeFieldAs;
  }
}

export class DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersList extends cdktf.ComplexList {
  public internalValue? : DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecoders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersOutputReference {
    return new DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJson {
  /**
  * Time_Format, eg. %Y-%m-%dT%H:%M:%S %z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_format DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Time_Keep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_keep DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_keep}
  */
  readonly timeKeep?: boolean | cdktf.IResolvable;
  /**
  * Time_Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_key DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_key}
  */
  readonly timeKey?: string;
}

export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJsonToTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_keep: cdktf.booleanToTerraform(struct!.timeKeep),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
  }
}


export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJsonToHclTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_keep: {
      value: cdktf.booleanToHclTerraform(struct!.timeKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKeep = this._timeKeep;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeFormat = undefined;
      this._timeKeep = undefined;
      this._timeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeFormat = value.timeFormat;
      this._timeKeep = value.timeKeep;
      this._timeKey = value.timeKey;
    }
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

  // time_keep - computed: false, optional: true, required: false
  private _timeKeep?: boolean | cdktf.IResolvable; 
  public get timeKeep() {
    return this.getBooleanAttribute('time_keep');
  }
  public set timeKeep(value: boolean | cdktf.IResolvable) {
    this._timeKeep = value;
  }
  public resetTimeKeep() {
    this._timeKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeepInput() {
    return this._timeKeep;
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
}
export interface DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsv {
  /**
  * Time_Format, eg. %Y-%m-%dT%H:%M:%S %z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_format DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Time_Keep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_keep DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_keep}
  */
  readonly timeKeep?: boolean | cdktf.IResolvable;
  /**
  * Time_Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_key DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#types DataK8SFluentbitFluentIoParserV1Alpha2Manifest#types}
  */
  readonly types?: string;
}

export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsvToTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_keep: cdktf.booleanToTerraform(struct!.timeKeep),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    types: cdktf.stringToTerraform(struct!.types),
  }
}


export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsvToHclTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_keep: {
      value: cdktf.booleanToHclTerraform(struct!.timeKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKeep = this._timeKeep;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeFormat = undefined;
      this._timeKeep = undefined;
      this._timeKey = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeFormat = value.timeFormat;
      this._timeKeep = value.timeKeep;
      this._timeKey = value.timeKey;
      this._types = value.types;
    }
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

  // time_keep - computed: false, optional: true, required: false
  private _timeKeep?: boolean | cdktf.IResolvable; 
  public get timeKeep() {
    return this.getBooleanAttribute('time_keep');
  }
  public set timeKeep(value: boolean | cdktf.IResolvable) {
    this._timeKeep = value;
  }
  public resetTimeKeep() {
    this._timeKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeepInput() {
    return this._timeKeep;
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
}
export interface DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#regex DataK8SFluentbitFluentIoParserV1Alpha2Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Time_Format, eg. %Y-%m-%dT%H:%M:%S %z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_format DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Time_Keep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_keep DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_keep}
  */
  readonly timeKeep?: boolean | cdktf.IResolvable;
  /**
  * Time_Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_key DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_key}
  */
  readonly timeKey?: string;
  /**
  * Time_Offset, eg. +0200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#time_offset DataK8SFluentbitFluentIoParserV1Alpha2Manifest#time_offset}
  */
  readonly timeOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#types DataK8SFluentbitFluentIoParserV1Alpha2Manifest#types}
  */
  readonly types?: string;
}

export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegexToTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_keep: cdktf.booleanToTerraform(struct!.timeKeep),
    time_key: cdktf.stringToTerraform(struct!.timeKey),
    time_offset: cdktf.stringToTerraform(struct!.timeOffset),
    types: cdktf.stringToTerraform(struct!.types),
  }
}


export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegexToHclTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
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
    time_keep: {
      value: cdktf.booleanToHclTerraform(struct!.timeKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_key: {
      value: cdktf.stringToHclTerraform(struct!.timeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_offset: {
      value: cdktf.stringToHclTerraform(struct!.timeOffset),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKeep = this._timeKeep;
    }
    if (this._timeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeKey = this._timeKey;
    }
    if (this._timeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOffset = this._timeOffset;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regex = undefined;
      this._timeFormat = undefined;
      this._timeKeep = undefined;
      this._timeKey = undefined;
      this._timeOffset = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regex = value.regex;
      this._timeFormat = value.timeFormat;
      this._timeKeep = value.timeKeep;
      this._timeKey = value.timeKey;
      this._timeOffset = value.timeOffset;
      this._types = value.types;
    }
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

  // time_keep - computed: false, optional: true, required: false
  private _timeKeep?: boolean | cdktf.IResolvable; 
  public get timeKeep() {
    return this.getBooleanAttribute('time_keep');
  }
  public set timeKeep(value: boolean | cdktf.IResolvable) {
    this._timeKeep = value;
  }
  public resetTimeKeep() {
    this._timeKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeKeepInput() {
    return this._timeKeep;
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

  // time_offset - computed: false, optional: true, required: false
  private _timeOffset?: string; 
  public get timeOffset() {
    return this.getStringAttribute('time_offset');
  }
  public set timeOffset(value: string) {
    this._timeOffset = value;
  }
  public resetTimeOffset() {
    this._timeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOffsetInput() {
    return this._timeOffset;
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
}
export interface DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpec {
  /**
  * Decoders are a built-in feature available through the Parsers file, each Parser definition can optionally set one or multiple decoders. There are two type of decoders type: Decode_Field and Decode_Field_As.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#decoders DataK8SFluentbitFluentIoParserV1Alpha2Manifest#decoders}
  */
  readonly decoders?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecoders[] | cdktf.IResolvable;
  /**
  * JSON defines json parser configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#json DataK8SFluentbitFluentIoParserV1Alpha2Manifest#json}
  */
  readonly json?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJson;
  /**
  * Logfmt defines logfmt parser configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#logfmt DataK8SFluentbitFluentIoParserV1Alpha2Manifest#logfmt}
  */
  readonly logfmt?: { [key: string]: string };
  /**
  * LTSV defines ltsv parser configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#ltsv DataK8SFluentbitFluentIoParserV1Alpha2Manifest#ltsv}
  */
  readonly ltsv?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsv;
  /**
  * Regex defines regex parser configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#regex DataK8SFluentbitFluentIoParserV1Alpha2Manifest#regex}
  */
  readonly regex?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegex;
}

export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecToTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decoders: cdktf.listMapper(dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersToTerraform, false)(struct!.decoders),
    json: dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJsonToTerraform(struct!.json),
    logfmt: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logfmt),
    ltsv: dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsvToTerraform(struct!.ltsv),
    regex: dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegexToTerraform(struct!.regex),
  }
}


export function dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decoders: {
      value: cdktf.listMapperHcl(dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersToHclTerraform, false)(struct!.decoders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersList",
    },
    json: {
      value: dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJson",
    },
    logfmt: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logfmt),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ltsv: {
      value: dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsvToHclTerraform(struct!.ltsv),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsv",
    },
    regex: {
      value: dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegexToHclTerraform(struct!.regex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegex",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decoders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoders = this._decoders?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._logfmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.logfmt = this._logfmt;
    }
    if (this._ltsv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ltsv = this._ltsv?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decoders.internalValue = undefined;
      this._json.internalValue = undefined;
      this._logfmt = undefined;
      this._ltsv.internalValue = undefined;
      this._regex.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decoders.internalValue = value.decoders;
      this._json.internalValue = value.json;
      this._logfmt = value.logfmt;
      this._ltsv.internalValue = value.ltsv;
      this._regex.internalValue = value.regex;
    }
  }

  // decoders - computed: false, optional: true, required: false
  private _decoders = new DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecodersList(this, "decoders", false);
  public get decoders() {
    return this._decoders;
  }
  public putDecoders(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecDecoders[] | cdktf.IResolvable) {
    this._decoders.internalValue = value;
  }
  public resetDecoders() {
    this._decoders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodersInput() {
    return this._decoders.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // logfmt - computed: false, optional: true, required: false
  private _logfmt?: { [key: string]: string }; 
  public get logfmt() {
    return this.getStringMapAttribute('logfmt');
  }
  public set logfmt(value: { [key: string]: string }) {
    this._logfmt = value;
  }
  public resetLogfmt() {
    this._logfmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logfmtInput() {
    return this._logfmt;
  }

  // ltsv - computed: false, optional: true, required: false
  private _ltsv = new DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsvOutputReference(this, "ltsv");
  public get ltsv() {
    return this._ltsv;
  }
  public putLtsv(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecLtsv) {
    this._ltsv.internalValue = value;
  }
  public resetLtsv() {
    this._ltsv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltsvInput() {
    return this._ltsv.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest k8s_fluentbit_fluent_io_parser_v1alpha2_manifest}
*/
export class DataK8SFluentbitFluentIoParserV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_fluentbit_fluent_io_parser_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFluentbitFluentIoParserV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFluentbitFluentIoParserV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SFluentbitFluentIoParserV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFluentbitFluentIoParserV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_fluentbit_fluent_io_parser_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/fluentbit_fluent_io_parser_v1alpha2_manifest k8s_fluentbit_fluent_io_parser_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFluentbitFluentIoParserV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFluentbitFluentIoParserV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_fluentbit_fluent_io_parser_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpec) {
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
      metadata: dataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentbitFluentIoParserV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SFluentbitFluentIoParserV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFluentbitFluentIoParserV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
