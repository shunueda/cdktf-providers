// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#metadata DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadata;
  /**
  * LoggingConfigurationSpec defines the desired state of LoggingConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#spec DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpec;
}
export interface DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#annotations DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#labels DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#name DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#namespace DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#name DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#namespace DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFromToTerraform(struct?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFromToHclTerraform(struct?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFrom | cdktf.IResolvable): any {
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

export class DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#from DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFrom;
}

export function dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefToTerraform(struct?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFromToTerraform(struct!.from),
  }
}


export function dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefToHclTerraform(struct?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefFrom) {
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
export interface DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpec {
  /**
  * The ARN of the CW log group to which the vended log data will be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#log_group_arn DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#log_group_arn}
  */
  readonly logGroupArn: string;
  /**
  * The ID of the workspace to vend logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#workspace_id DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#workspace_ref DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest#workspace_ref}
  */
  readonly workspaceRef?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRef;
}

export function dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
    workspace_ref: dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefToTerraform(struct!.workspaceRef),
  }
}


export function dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.logGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_ref: {
      value: dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefToHclTerraform(struct!.workspaceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    if (this._workspaceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceRef = this._workspaceRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroupArn = undefined;
      this._workspaceId = undefined;
      this._workspaceRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroupArn = value.logGroupArn;
      this._workspaceId = value.workspaceId;
      this._workspaceRef.internalValue = value.workspaceRef;
    }
  }

  // log_group_arn - computed: false, optional: false, required: true
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // workspace_ref - computed: false, optional: true, required: false
  private _workspaceRef = new DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRefOutputReference(this, "workspace_ref");
  public get workspaceRef() {
    return this._workspaceRef;
  }
  public putWorkspaceRef(value: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecWorkspaceRef) {
    this._workspaceRef.internalValue = value;
  }
  public resetWorkspaceRef() {
    this._workspaceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceRefInput() {
    return this._workspaceRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest k8s_prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest}
*/
export class DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest k8s_prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_prometheusservice_services_k8s_aws_logging_configuration_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPrometheusserviceServicesK8SAwsLoggingConfigurationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
