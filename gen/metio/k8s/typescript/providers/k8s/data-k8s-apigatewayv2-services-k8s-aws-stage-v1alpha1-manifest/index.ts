// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#metadata DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadata;
  /**
  * StageSpec defines the desired state of Stage. Represents an API stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#spec DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpec;
}
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#annotations DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#labels DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettings {
  /**
  * Represents an Amazon Resource Name (ARN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#destination_arn DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#destination_arn}
  */
  readonly destinationArn?: string;
  /**
  * A string with a length between [1-1024].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#format DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#format}
  */
  readonly format?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettingsToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettingsToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_arn: {
      value: cdktf.stringToHclTerraform(struct!.destinationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationArn = this._destinationArn;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationArn = undefined;
      this._format = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationArn = value.destinationArn;
      this._format = value.format;
    }
  }

  // destination_arn - computed: false, optional: true, required: false
  private _destinationArn?: string; 
  public get destinationArn() {
    return this.getStringAttribute('destination_arn');
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
  }
  public resetDestinationArn() {
    this._destinationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationArnInput() {
    return this._destinationArn;
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
}
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#data_trace_enabled DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#detailed_metrics_enabled DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#detailed_metrics_enabled}
  */
  readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The logging level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#logging_level DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#throttling_burst_limit DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#throttling_rate_limit DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettingsToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
    detailed_metrics_enabled: cdktf.booleanToTerraform(struct!.detailedMetricsEnabled),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettingsToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_trace_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dataTraceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detailed_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.detailedMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging_level: {
      value: cdktf.stringToHclTerraform(struct!.loggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throttling_burst_limit: {
      value: cdktf.numberToHclTerraform(struct!.throttlingBurstLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.throttlingRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTraceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
    }
    if (this._detailedMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._throttlingBurstLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
    }
    if (this._throttlingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTraceEnabled = undefined;
      this._detailedMetricsEnabled = undefined;
      this._loggingLevel = undefined;
      this._throttlingBurstLimit = undefined;
      this._throttlingRateLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTraceEnabled = value.dataTraceEnabled;
      this._detailedMetricsEnabled = value.detailedMetricsEnabled;
      this._loggingLevel = value.loggingLevel;
      this._throttlingBurstLimit = value.throttlingBurstLimit;
      this._throttlingRateLimit = value.throttlingRateLimit;
    }
  }

  // data_trace_enabled - computed: false, optional: true, required: false
  private _dataTraceEnabled?: boolean | cdktf.IResolvable; 
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled');
  }
  public set dataTraceEnabled(value: boolean | cdktf.IResolvable) {
    this._dataTraceEnabled = value;
  }
  public resetDataTraceEnabled() {
    this._dataTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTraceEnabledInput() {
    return this._dataTraceEnabled;
  }

  // detailed_metrics_enabled - computed: false, optional: true, required: false
  private _detailedMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get detailedMetricsEnabled() {
    return this.getBooleanAttribute('detailed_metrics_enabled');
  }
  public set detailedMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._detailedMetricsEnabled = value;
  }
  public resetDetailedMetricsEnabled() {
    this._detailedMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedMetricsEnabledInput() {
    return this._detailedMetricsEnabled;
  }

  // logging_level - computed: false, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // throttling_burst_limit - computed: false, optional: true, required: false
  private _throttlingBurstLimit?: number; 
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }
  public set throttlingBurstLimit(value: number) {
    this._throttlingBurstLimit = value;
  }
  public resetThrottlingBurstLimit() {
    this._throttlingBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingBurstLimitInput() {
    return this._throttlingBurstLimit;
  }

  // throttling_rate_limit - computed: false, optional: true, required: false
  private _throttlingRateLimit?: number; 
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
  public set throttlingRateLimit(value: number) {
    this._throttlingRateLimit = value;
  }
  public resetThrottlingRateLimit() {
    this._throttlingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingRateLimitInput() {
    return this._throttlingRateLimit;
  }
}
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#name DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#namespace DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFromToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFromToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFrom | cdktf.IResolvable): any {
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

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#from DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFrom;
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFromToTerraform(struct!.from),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#data_trace_enabled DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#detailed_metrics_enabled DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#detailed_metrics_enabled}
  */
  readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The logging level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#logging_level DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#throttling_burst_limit DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#throttling_rate_limit DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettingsToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
    detailed_metrics_enabled: cdktf.booleanToTerraform(struct!.detailedMetricsEnabled),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettingsToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_trace_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dataTraceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detailed_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.detailedMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logging_level: {
      value: cdktf.stringToHclTerraform(struct!.loggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throttling_burst_limit: {
      value: cdktf.numberToHclTerraform(struct!.throttlingBurstLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.throttlingRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTraceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTraceEnabled = this._dataTraceEnabled;
    }
    if (this._detailedMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedMetricsEnabled = this._detailedMetricsEnabled;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._throttlingBurstLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingBurstLimit = this._throttlingBurstLimit;
    }
    if (this._throttlingRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingRateLimit = this._throttlingRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTraceEnabled = undefined;
      this._detailedMetricsEnabled = undefined;
      this._loggingLevel = undefined;
      this._throttlingBurstLimit = undefined;
      this._throttlingRateLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTraceEnabled = value.dataTraceEnabled;
      this._detailedMetricsEnabled = value.detailedMetricsEnabled;
      this._loggingLevel = value.loggingLevel;
      this._throttlingBurstLimit = value.throttlingBurstLimit;
      this._throttlingRateLimit = value.throttlingRateLimit;
    }
  }

  // data_trace_enabled - computed: false, optional: true, required: false
  private _dataTraceEnabled?: boolean | cdktf.IResolvable; 
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled');
  }
  public set dataTraceEnabled(value: boolean | cdktf.IResolvable) {
    this._dataTraceEnabled = value;
  }
  public resetDataTraceEnabled() {
    this._dataTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTraceEnabledInput() {
    return this._dataTraceEnabled;
  }

  // detailed_metrics_enabled - computed: false, optional: true, required: false
  private _detailedMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get detailedMetricsEnabled() {
    return this.getBooleanAttribute('detailed_metrics_enabled');
  }
  public set detailedMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._detailedMetricsEnabled = value;
  }
  public resetDetailedMetricsEnabled() {
    this._detailedMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedMetricsEnabledInput() {
    return this._detailedMetricsEnabled;
  }

  // logging_level - computed: false, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // throttling_burst_limit - computed: false, optional: true, required: false
  private _throttlingBurstLimit?: number; 
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }
  public set throttlingBurstLimit(value: number) {
    this._throttlingBurstLimit = value;
  }
  public resetThrottlingBurstLimit() {
    this._throttlingBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingBurstLimitInput() {
    return this._throttlingBurstLimit;
  }

  // throttling_rate_limit - computed: false, optional: true, required: false
  private _throttlingRateLimit?: number; 
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
  public set throttlingRateLimit(value: number) {
    this._throttlingRateLimit = value;
  }
  public resetThrottlingRateLimit() {
    this._throttlingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingRateLimitInput() {
    return this._throttlingRateLimit;
  }
}
export interface DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpec {
  /**
  * Settings for logging access in a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#access_log_settings DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#access_log_settings}
  */
  readonly accessLogSettings?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#api_id DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#api_id}
  */
  readonly apiId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#api_ref DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#api_ref}
  */
  readonly apiRef?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#auto_deploy DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#auto_deploy}
  */
  readonly autoDeploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#client_certificate_id DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * Represents a collection of route settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#default_route_settings DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#default_route_settings}
  */
  readonly defaultRouteSettings?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#deployment_id DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#deployment_ref DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#deployment_ref}
  */
  readonly deploymentRef?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#description DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#route_settings DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#route_settings}
  */
  readonly routeSettings?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#stage_name DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#stage_name}
  */
  readonly stageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#stage_variables DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#stage_variables}
  */
  readonly stageVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#tags DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log_settings: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettingsToTerraform(struct!.accessLogSettings),
    api_id: cdktf.stringToTerraform(struct!.apiId),
    api_ref: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefToTerraform(struct!.apiRef),
    auto_deploy: cdktf.booleanToTerraform(struct!.autoDeploy),
    client_certificate_id: cdktf.stringToTerraform(struct!.clientCertificateId),
    default_route_settings: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettingsToTerraform(struct!.defaultRouteSettings),
    deployment_id: cdktf.stringToTerraform(struct!.deploymentId),
    deployment_ref: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefToTerraform(struct!.deploymentRef),
    description: cdktf.stringToTerraform(struct!.description),
    route_settings: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettingsToTerraform(struct!.routeSettings),
    stage_name: cdktf.stringToTerraform(struct!.stageName),
    stage_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.stageVariables),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log_settings: {
      value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettingsToHclTerraform(struct!.accessLogSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettings",
    },
    api_id: {
      value: cdktf.stringToHclTerraform(struct!.apiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_ref: {
      value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefToHclTerraform(struct!.apiRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRef",
    },
    auto_deploy: {
      value: cdktf.booleanToHclTerraform(struct!.autoDeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_route_settings: {
      value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettingsToHclTerraform(struct!.defaultRouteSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettings",
    },
    deployment_id: {
      value: cdktf.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_ref: {
      value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefToHclTerraform(struct!.deploymentRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_settings: {
      value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettingsToHclTerraform(struct!.routeSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettings",
    },
    stage_name: {
      value: cdktf.stringToHclTerraform(struct!.stageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.stageVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLogSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLogSettings = this._accessLogSettings?.internalValue;
    }
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    if (this._apiRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiRef = this._apiRef?.internalValue;
    }
    if (this._autoDeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeploy = this._autoDeploy;
    }
    if (this._clientCertificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateId = this._clientCertificateId;
    }
    if (this._defaultRouteSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteSettings = this._defaultRouteSettings?.internalValue;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._deploymentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentRef = this._deploymentRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._routeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSettings = this._routeSettings?.internalValue;
    }
    if (this._stageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageName = this._stageName;
    }
    if (this._stageVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageVariables = this._stageVariables;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLogSettings.internalValue = undefined;
      this._apiId = undefined;
      this._apiRef.internalValue = undefined;
      this._autoDeploy = undefined;
      this._clientCertificateId = undefined;
      this._defaultRouteSettings.internalValue = undefined;
      this._deploymentId = undefined;
      this._deploymentRef.internalValue = undefined;
      this._description = undefined;
      this._routeSettings.internalValue = undefined;
      this._stageName = undefined;
      this._stageVariables = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLogSettings.internalValue = value.accessLogSettings;
      this._apiId = value.apiId;
      this._apiRef.internalValue = value.apiRef;
      this._autoDeploy = value.autoDeploy;
      this._clientCertificateId = value.clientCertificateId;
      this._defaultRouteSettings.internalValue = value.defaultRouteSettings;
      this._deploymentId = value.deploymentId;
      this._deploymentRef.internalValue = value.deploymentRef;
      this._description = value.description;
      this._routeSettings.internalValue = value.routeSettings;
      this._stageName = value.stageName;
      this._stageVariables = value.stageVariables;
      this._tags = value.tags;
    }
  }

  // access_log_settings - computed: false, optional: true, required: false
  private _accessLogSettings = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettingsOutputReference(this, "access_log_settings");
  public get accessLogSettings() {
    return this._accessLogSettings;
  }
  public putAccessLogSettings(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecAccessLogSettings) {
    this._accessLogSettings.internalValue = value;
  }
  public resetAccessLogSettings() {
    this._accessLogSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogSettingsInput() {
    return this._accessLogSettings.internalValue;
  }

  // api_id - computed: false, optional: true, required: false
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  public resetApiId() {
    this._apiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_ref - computed: false, optional: true, required: false
  private _apiRef = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRefOutputReference(this, "api_ref");
  public get apiRef() {
    return this._apiRef;
  }
  public putApiRef(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecApiRef) {
    this._apiRef.internalValue = value;
  }
  public resetApiRef() {
    this._apiRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRefInput() {
    return this._apiRef.internalValue;
  }

  // auto_deploy - computed: false, optional: true, required: false
  private _autoDeploy?: boolean | cdktf.IResolvable; 
  public get autoDeploy() {
    return this.getBooleanAttribute('auto_deploy');
  }
  public set autoDeploy(value: boolean | cdktf.IResolvable) {
    this._autoDeploy = value;
  }
  public resetAutoDeploy() {
    this._autoDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployInput() {
    return this._autoDeploy;
  }

  // client_certificate_id - computed: false, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // default_route_settings - computed: false, optional: true, required: false
  private _defaultRouteSettings = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettingsOutputReference(this, "default_route_settings");
  public get defaultRouteSettings() {
    return this._defaultRouteSettings;
  }
  public putDefaultRouteSettings(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDefaultRouteSettings) {
    this._defaultRouteSettings.internalValue = value;
  }
  public resetDefaultRouteSettings() {
    this._defaultRouteSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteSettingsInput() {
    return this._defaultRouteSettings.internalValue;
  }

  // deployment_id - computed: false, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // deployment_ref - computed: false, optional: true, required: false
  private _deploymentRef = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRefOutputReference(this, "deployment_ref");
  public get deploymentRef() {
    return this._deploymentRef;
  }
  public putDeploymentRef(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecDeploymentRef) {
    this._deploymentRef.internalValue = value;
  }
  public resetDeploymentRef() {
    this._deploymentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentRefInput() {
    return this._deploymentRef.internalValue;
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

  // route_settings - computed: false, optional: true, required: false
  private _routeSettings = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettingsOutputReference(this, "route_settings");
  public get routeSettings() {
    return this._routeSettings;
  }
  public putRouteSettings(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecRouteSettings) {
    this._routeSettings.internalValue = value;
  }
  public resetRouteSettings() {
    this._routeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSettingsInput() {
    return this._routeSettings.internalValue;
  }

  // stage_name - computed: false, optional: false, required: true
  private _stageName?: string; 
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName;
  }

  // stage_variables - computed: false, optional: true, required: false
  private _stageVariables?: { [key: string]: string }; 
  public get stageVariables() {
    return this.getStringMapAttribute('stage_variables');
  }
  public set stageVariables(value: { [key: string]: string }) {
    this._stageVariables = value;
  }
  public resetStageVariables() {
    this._stageVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageVariablesInput() {
    return this._stageVariables;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest}
*/
export class DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest k8s_apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apigatewayv2_services_k8s_aws_stage_v1alpha1_manifest',
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
  private _metadata = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApigatewayv2ServicesK8SAwsStageV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
