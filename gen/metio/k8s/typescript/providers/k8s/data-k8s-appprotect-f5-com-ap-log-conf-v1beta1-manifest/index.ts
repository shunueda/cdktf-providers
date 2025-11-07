// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppprotectF5ComApLogConfV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#metadata DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadata;
  /**
  * APLogConfSpec defines the desired state of APLogConf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#spec DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpec;
}
export interface DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#annotations DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#labels DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#name DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#namespace DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharacters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#from DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#to DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#to}
  */
  readonly to?: string;
}

export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersToTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharacters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersToHclTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharacters | cdktf.IResolvable): any {
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

export class DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharacters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharacters | cdktf.IResolvable | undefined) {
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

export class DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharacters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersOutputReference {
    return new DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#escaping_characters DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#escaping_characters}
  */
  readonly escapingCharacters?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharacters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#format DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#format_string DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#format_string}
  */
  readonly formatString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#list_delimiter DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#list_delimiter}
  */
  readonly listDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#list_prefix DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#list_prefix}
  */
  readonly listPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#list_suffix DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#list_suffix}
  */
  readonly listSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#max_message_size DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#max_message_size}
  */
  readonly maxMessageSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#max_request_size DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#max_request_size}
  */
  readonly maxRequestSize?: string;
}

export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentToTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escaping_characters: cdktf.listMapper(dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersToTerraform, false)(struct!.escapingCharacters),
    format: cdktf.stringToTerraform(struct!.format),
    format_string: cdktf.stringToTerraform(struct!.formatString),
    list_delimiter: cdktf.stringToTerraform(struct!.listDelimiter),
    list_prefix: cdktf.stringToTerraform(struct!.listPrefix),
    list_suffix: cdktf.stringToTerraform(struct!.listSuffix),
    max_message_size: cdktf.stringToTerraform(struct!.maxMessageSize),
    max_request_size: cdktf.stringToTerraform(struct!.maxRequestSize),
  }
}


export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentToHclTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escaping_characters: {
      value: cdktf.listMapperHcl(dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersToHclTerraform, false)(struct!.escapingCharacters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_string: {
      value: cdktf.stringToHclTerraform(struct!.formatString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.listDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_prefix: {
      value: cdktf.stringToHclTerraform(struct!.listPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_suffix: {
      value: cdktf.stringToHclTerraform(struct!.listSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_message_size: {
      value: cdktf.stringToHclTerraform(struct!.maxMessageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_request_size: {
      value: cdktf.stringToHclTerraform(struct!.maxRequestSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escapingCharacters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapingCharacters = this._escapingCharacters?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatString !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatString = this._formatString;
    }
    if (this._listDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.listDelimiter = this._listDelimiter;
    }
    if (this._listPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.listPrefix = this._listPrefix;
    }
    if (this._listSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.listSuffix = this._listSuffix;
    }
    if (this._maxMessageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageSize = this._maxMessageSize;
    }
    if (this._maxRequestSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestSize = this._maxRequestSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escapingCharacters.internalValue = undefined;
      this._format = undefined;
      this._formatString = undefined;
      this._listDelimiter = undefined;
      this._listPrefix = undefined;
      this._listSuffix = undefined;
      this._maxMessageSize = undefined;
      this._maxRequestSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escapingCharacters.internalValue = value.escapingCharacters;
      this._format = value.format;
      this._formatString = value.formatString;
      this._listDelimiter = value.listDelimiter;
      this._listPrefix = value.listPrefix;
      this._listSuffix = value.listSuffix;
      this._maxMessageSize = value.maxMessageSize;
      this._maxRequestSize = value.maxRequestSize;
    }
  }

  // escaping_characters - computed: false, optional: true, required: false
  private _escapingCharacters = new DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharactersList(this, "escaping_characters", false);
  public get escapingCharacters() {
    return this._escapingCharacters;
  }
  public putEscapingCharacters(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentEscapingCharacters[] | cdktf.IResolvable) {
    this._escapingCharacters.internalValue = value;
  }
  public resetEscapingCharacters() {
    this._escapingCharacters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapingCharactersInput() {
    return this._escapingCharacters.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_string - computed: false, optional: true, required: false
  private _formatString?: string; 
  public get formatString() {
    return this.getStringAttribute('format_string');
  }
  public set formatString(value: string) {
    this._formatString = value;
  }
  public resetFormatString() {
    this._formatString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatStringInput() {
    return this._formatString;
  }

  // list_delimiter - computed: false, optional: true, required: false
  private _listDelimiter?: string; 
  public get listDelimiter() {
    return this.getStringAttribute('list_delimiter');
  }
  public set listDelimiter(value: string) {
    this._listDelimiter = value;
  }
  public resetListDelimiter() {
    this._listDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listDelimiterInput() {
    return this._listDelimiter;
  }

  // list_prefix - computed: false, optional: true, required: false
  private _listPrefix?: string; 
  public get listPrefix() {
    return this.getStringAttribute('list_prefix');
  }
  public set listPrefix(value: string) {
    this._listPrefix = value;
  }
  public resetListPrefix() {
    this._listPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listPrefixInput() {
    return this._listPrefix;
  }

  // list_suffix - computed: false, optional: true, required: false
  private _listSuffix?: string; 
  public get listSuffix() {
    return this.getStringAttribute('list_suffix');
  }
  public set listSuffix(value: string) {
    this._listSuffix = value;
  }
  public resetListSuffix() {
    this._listSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listSuffixInput() {
    return this._listSuffix;
  }

  // max_message_size - computed: false, optional: true, required: false
  private _maxMessageSize?: string; 
  public get maxMessageSize() {
    return this.getStringAttribute('max_message_size');
  }
  public set maxMessageSize(value: string) {
    this._maxMessageSize = value;
  }
  public resetMaxMessageSize() {
    this._maxMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeInput() {
    return this._maxMessageSize;
  }

  // max_request_size - computed: false, optional: true, required: false
  private _maxRequestSize?: string; 
  public get maxRequestSize() {
    return this.getStringAttribute('max_request_size');
  }
  public set maxRequestSize(value: string) {
    this._maxRequestSize = value;
  }
  public resetMaxRequestSize() {
    this._maxRequestSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestSizeInput() {
    return this._maxRequestSize;
  }
}
export interface DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#request_type DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#request_type}
  */
  readonly requestType?: string;
}

export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilterToTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_type: cdktf.stringToTerraform(struct!.requestType),
  }
}


export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilterToHclTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_type: {
      value: cdktf.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestType = value.requestType;
    }
  }

  // request_type - computed: false, optional: true, required: false
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  public resetRequestType() {
    this._requestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }
}
export interface DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#content DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#content}
  */
  readonly content?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#filter DataK8SAppprotectF5ComApLogConfV1Beta1Manifest#filter}
  */
  readonly filter?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilter;
}

export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecToTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentToTerraform(struct!.content),
    filter: dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilterToTerraform(struct!.filter),
  }
}


export function dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContent",
    },
    filter: {
      value: dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content.internalValue = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content.internalValue = value.content;
      this._filter.internalValue = value.filter;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content = new DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest k8s_appprotect_f5_com_ap_log_conf_v1beta1_manifest}
*/
export class DataK8SAppprotectF5ComApLogConfV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appprotect_f5_com_ap_log_conf_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppprotectF5ComApLogConfV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppprotectF5ComApLogConfV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAppprotectF5ComApLogConfV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppprotectF5ComApLogConfV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appprotect_f5_com_ap_log_conf_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appprotect_f5_com_ap_log_conf_v1beta1_manifest k8s_appprotect_f5_com_ap_log_conf_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppprotectF5ComApLogConfV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appprotect_f5_com_ap_log_conf_v1beta1_manifest',
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
  private _metadata = new DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpec) {
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
      metadata: dataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppprotectF5ComApLogConfV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppprotectF5ComApLogConfV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
