// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#metadata DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadata;
  /**
  * MonitoringScheduleSpec defines the desired state of MonitoringSchedule. A schedule for a model monitoring job. For information about model monitor, see Amazon SageMaker Model Monitor (https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#spec DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpec;
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#annotations DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#labels DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#name DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#namespace DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Uri = value.s3Uri;
    }
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#baselining_job_name DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#baselining_job_name}
  */
  readonly baseliningJobName?: string;
  /**
  * The constraints resource for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#constraints_resource DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#constraints_resource}
  */
  readonly constraintsResource?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource;
  /**
  * The statistics resource for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#statistics_resource DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#statistics_resource}
  */
  readonly statisticsResource?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baselining_job_name: cdktf.stringToTerraform(struct!.baseliningJobName),
    constraints_resource: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
    statistics_resource: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct!.statisticsResource),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baselining_job_name: {
      value: cdktf.stringToHclTerraform(struct!.baseliningJobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraints_resource: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToHclTerraform(struct!.constraintsResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource",
    },
    statistics_resource: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToHclTerraform(struct!.statisticsResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseliningJobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseliningJobName = this._baseliningJobName;
    }
    if (this._constraintsResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintsResource = this._constraintsResource?.internalValue;
    }
    if (this._statisticsResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticsResource = this._statisticsResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseliningJobName = undefined;
      this._constraintsResource.internalValue = undefined;
      this._statisticsResource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseliningJobName = value.baseliningJobName;
      this._constraintsResource.internalValue = value.constraintsResource;
      this._statisticsResource.internalValue = value.statisticsResource;
    }
  }

  // baselining_job_name - computed: false, optional: true, required: false
  private _baseliningJobName?: string; 
  public get baseliningJobName() {
    return this.getStringAttribute('baselining_job_name');
  }
  public set baseliningJobName(value: string) {
    this._baseliningJobName = value;
  }
  public resetBaseliningJobName() {
    this._baseliningJobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseliningJobNameInput() {
    return this._baseliningJobName;
  }

  // constraints_resource - computed: false, optional: true, required: false
  private _constraintsResource = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceOutputReference(this, "constraints_resource");
  public get constraintsResource() {
    return this._constraintsResource;
  }
  public putConstraintsResource(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource) {
    this._constraintsResource.internalValue = value;
  }
  public resetConstraintsResource() {
    this._constraintsResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsResourceInput() {
    return this._constraintsResource.internalValue;
  }

  // statistics_resource - computed: false, optional: true, required: false
  private _statisticsResource = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceOutputReference(this, "statistics_resource");
  public get statisticsResource() {
    return this._statisticsResource;
  }
  public putStatisticsResource(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource) {
    this._statisticsResource.internalValue = value;
  }
  public resetStatisticsResource() {
    this._statisticsResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsResourceInput() {
    return this._statisticsResource.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#container_arguments DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#container_entrypoint DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#image_uri DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#post_analytics_processor_source_uri DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#post_analytics_processor_source_uri}
  */
  readonly postAnalyticsProcessorSourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#record_preprocessor_source_uri DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#record_preprocessor_source_uri}
  */
  readonly recordPreprocessorSourceUri?: string;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerEntrypoint),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    post_analytics_processor_source_uri: cdktf.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
    record_preprocessor_source_uri: cdktf.stringToTerraform(struct!.recordPreprocessorSourceUri),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerEntrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_analytics_processor_source_uri: {
      value: cdktf.stringToHclTerraform(struct!.postAnalyticsProcessorSourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_preprocessor_source_uri: {
      value: cdktf.stringToHclTerraform(struct!.recordPreprocessorSourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerArguments = this._containerArguments;
    }
    if (this._containerEntrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerEntrypoint = this._containerEntrypoint;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._postAnalyticsProcessorSourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAnalyticsProcessorSourceUri = this._postAnalyticsProcessorSourceUri;
    }
    if (this._recordPreprocessorSourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordPreprocessorSourceUri = this._recordPreprocessorSourceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerArguments = undefined;
      this._containerEntrypoint = undefined;
      this._imageUri = undefined;
      this._postAnalyticsProcessorSourceUri = undefined;
      this._recordPreprocessorSourceUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerArguments = value.containerArguments;
      this._containerEntrypoint = value.containerEntrypoint;
      this._imageUri = value.imageUri;
      this._postAnalyticsProcessorSourceUri = value.postAnalyticsProcessorSourceUri;
      this._recordPreprocessorSourceUri = value.recordPreprocessorSourceUri;
    }
  }

  // container_arguments - computed: false, optional: true, required: false
  private _containerArguments?: string[]; 
  public get containerArguments() {
    return this.getListAttribute('container_arguments');
  }
  public set containerArguments(value: string[]) {
    this._containerArguments = value;
  }
  public resetContainerArguments() {
    this._containerArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerArgumentsInput() {
    return this._containerArguments;
  }

  // container_entrypoint - computed: false, optional: true, required: false
  private _containerEntrypoint?: string[]; 
  public get containerEntrypoint() {
    return this.getListAttribute('container_entrypoint');
  }
  public set containerEntrypoint(value: string[]) {
    this._containerEntrypoint = value;
  }
  public resetContainerEntrypoint() {
    this._containerEntrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerEntrypointInput() {
    return this._containerEntrypoint;
  }

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // post_analytics_processor_source_uri - computed: false, optional: true, required: false
  private _postAnalyticsProcessorSourceUri?: string; 
  public get postAnalyticsProcessorSourceUri() {
    return this.getStringAttribute('post_analytics_processor_source_uri');
  }
  public set postAnalyticsProcessorSourceUri(value: string) {
    this._postAnalyticsProcessorSourceUri = value;
  }
  public resetPostAnalyticsProcessorSourceUri() {
    this._postAnalyticsProcessorSourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAnalyticsProcessorSourceUriInput() {
    return this._postAnalyticsProcessorSourceUri;
  }

  // record_preprocessor_source_uri - computed: false, optional: true, required: false
  private _recordPreprocessorSourceUri?: string; 
  public get recordPreprocessorSourceUri() {
    return this.getStringAttribute('record_preprocessor_source_uri');
  }
  public set recordPreprocessorSourceUri(value: string) {
    this._recordPreprocessorSourceUri = value;
  }
  public resetRecordPreprocessorSourceUri() {
    this._recordPreprocessorSourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordPreprocessorSourceUriInput() {
    return this._recordPreprocessorSourceUri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#end_time_offset DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#end_time_offset}
  */
  readonly endTimeOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#endpoint_name DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#exclude_features_attribute DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#exclude_features_attribute}
  */
  readonly excludeFeaturesAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#features_attribute DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#features_attribute}
  */
  readonly featuresAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#inference_attribute DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#inference_attribute}
  */
  readonly inferenceAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#probability_attribute DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#probability_attribute}
  */
  readonly probabilityAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#probability_threshold_attribute DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#probability_threshold_attribute}
  */
  readonly probabilityThresholdAttribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#s3_data_distribution_type DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#s3_input_mode DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#s3_input_mode}
  */
  readonly s3InputMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#start_time_offset DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#start_time_offset}
  */
  readonly startTimeOffset?: string;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time_offset: cdktf.stringToTerraform(struct!.endTimeOffset),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    exclude_features_attribute: cdktf.stringToTerraform(struct!.excludeFeaturesAttribute),
    features_attribute: cdktf.stringToTerraform(struct!.featuresAttribute),
    inference_attribute: cdktf.stringToTerraform(struct!.inferenceAttribute),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    probability_attribute: cdktf.stringToTerraform(struct!.probabilityAttribute),
    probability_threshold_attribute: cdktf.numberToTerraform(struct!.probabilityThresholdAttribute),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
    start_time_offset: cdktf.stringToTerraform(struct!.startTimeOffset),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_features_attribute: {
      value: cdktf.stringToHclTerraform(struct!.excludeFeaturesAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features_attribute: {
      value: cdktf.stringToHclTerraform(struct!.featuresAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_attribute: {
      value: cdktf.stringToHclTerraform(struct!.inferenceAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probability_attribute: {
      value: cdktf.stringToHclTerraform(struct!.probabilityAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probability_threshold_attribute: {
      value: cdktf.numberToHclTerraform(struct!.probabilityThresholdAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_data_distribution_type: {
      value: cdktf.stringToHclTerraform(struct!.s3DataDistributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3InputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._excludeFeaturesAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFeaturesAttribute = this._excludeFeaturesAttribute;
    }
    if (this._featuresAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.featuresAttribute = this._featuresAttribute;
    }
    if (this._inferenceAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceAttribute = this._inferenceAttribute;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._probabilityAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.probabilityAttribute = this._probabilityAttribute;
    }
    if (this._probabilityThresholdAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.probabilityThresholdAttribute = this._probabilityThresholdAttribute;
    }
    if (this._s3DataDistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataDistributionType = this._s3DataDistributionType;
    }
    if (this._s3InputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputMode = this._s3InputMode;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTimeOffset = undefined;
      this._endpointName = undefined;
      this._excludeFeaturesAttribute = undefined;
      this._featuresAttribute = undefined;
      this._inferenceAttribute = undefined;
      this._localPath = undefined;
      this._probabilityAttribute = undefined;
      this._probabilityThresholdAttribute = undefined;
      this._s3DataDistributionType = undefined;
      this._s3InputMode = undefined;
      this._startTimeOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTimeOffset = value.endTimeOffset;
      this._endpointName = value.endpointName;
      this._excludeFeaturesAttribute = value.excludeFeaturesAttribute;
      this._featuresAttribute = value.featuresAttribute;
      this._inferenceAttribute = value.inferenceAttribute;
      this._localPath = value.localPath;
      this._probabilityAttribute = value.probabilityAttribute;
      this._probabilityThresholdAttribute = value.probabilityThresholdAttribute;
      this._s3DataDistributionType = value.s3DataDistributionType;
      this._s3InputMode = value.s3InputMode;
      this._startTimeOffset = value.startTimeOffset;
    }
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: string; 
  public get endTimeOffset() {
    return this.getStringAttribute('end_time_offset');
  }
  public set endTimeOffset(value: string) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // endpoint_name - computed: false, optional: true, required: false
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // exclude_features_attribute - computed: false, optional: true, required: false
  private _excludeFeaturesAttribute?: string; 
  public get excludeFeaturesAttribute() {
    return this.getStringAttribute('exclude_features_attribute');
  }
  public set excludeFeaturesAttribute(value: string) {
    this._excludeFeaturesAttribute = value;
  }
  public resetExcludeFeaturesAttribute() {
    this._excludeFeaturesAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFeaturesAttributeInput() {
    return this._excludeFeaturesAttribute;
  }

  // features_attribute - computed: false, optional: true, required: false
  private _featuresAttribute?: string; 
  public get featuresAttribute() {
    return this.getStringAttribute('features_attribute');
  }
  public set featuresAttribute(value: string) {
    this._featuresAttribute = value;
  }
  public resetFeaturesAttribute() {
    this._featuresAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresAttributeInput() {
    return this._featuresAttribute;
  }

  // inference_attribute - computed: false, optional: true, required: false
  private _inferenceAttribute?: string; 
  public get inferenceAttribute() {
    return this.getStringAttribute('inference_attribute');
  }
  public set inferenceAttribute(value: string) {
    this._inferenceAttribute = value;
  }
  public resetInferenceAttribute() {
    this._inferenceAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAttributeInput() {
    return this._inferenceAttribute;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // probability_attribute - computed: false, optional: true, required: false
  private _probabilityAttribute?: string; 
  public get probabilityAttribute() {
    return this.getStringAttribute('probability_attribute');
  }
  public set probabilityAttribute(value: string) {
    this._probabilityAttribute = value;
  }
  public resetProbabilityAttribute() {
    this._probabilityAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilityAttributeInput() {
    return this._probabilityAttribute;
  }

  // probability_threshold_attribute - computed: false, optional: true, required: false
  private _probabilityThresholdAttribute?: number; 
  public get probabilityThresholdAttribute() {
    return this.getNumberAttribute('probability_threshold_attribute');
  }
  public set probabilityThresholdAttribute(value: number) {
    this._probabilityThresholdAttribute = value;
  }
  public resetProbabilityThresholdAttribute() {
    this._probabilityThresholdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilityThresholdAttributeInput() {
    return this._probabilityThresholdAttribute;
  }

  // s3_data_distribution_type - computed: false, optional: true, required: false
  private _s3DataDistributionType?: string; 
  public get s3DataDistributionType() {
    return this.getStringAttribute('s3_data_distribution_type');
  }
  public set s3DataDistributionType(value: string) {
    this._s3DataDistributionType = value;
  }
  public resetS3DataDistributionType() {
    this._s3DataDistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataDistributionTypeInput() {
    return this._s3DataDistributionType;
  }

  // s3_input_mode - computed: false, optional: true, required: false
  private _s3InputMode?: string; 
  public get s3InputMode() {
    return this.getStringAttribute('s3_input_mode');
  }
  public set s3InputMode(value: string) {
    this._s3InputMode = value;
  }
  public resetS3InputMode() {
    this._s3InputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputModeInput() {
    return this._s3InputMode;
  }

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: string; 
  public get startTimeOffset() {
    return this.getStringAttribute('start_time_offset');
  }
  public set startTimeOffset(value: string) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs {
  /**
  * Input object for the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#endpoint_input DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#endpoint_input}
  */
  readonly endpointInput?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_input: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct!.endpointInput),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_input: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToHclTerraform(struct!.endpointInput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointInput = this._endpointInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointInput.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointInput.internalValue = value.endpointInput;
    }
  }

  // endpoint_input - computed: false, optional: true, required: false
  private _endpointInput = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputOutputReference(this, "endpoint_input");
  public get endpointInput() {
    return this._endpointInput;
  }
  public putEndpointInput(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput) {
    this._endpointInput.internalValue = value;
  }
  public resetEndpointInput() {
    this._endpointInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInputInput() {
    return this._endpointInput.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#local_path DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#local_path}
  */
  readonly localPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#s3_upload_mode DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#s3_uri DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#s3_uri}
  */
  readonly s3Uri?: string;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_upload_mode: {
      value: cdktf.stringToHclTerraform(struct!.s3UploadMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._s3UploadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3UploadMode = this._s3UploadMode;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localPath = undefined;
      this._s3UploadMode = undefined;
      this._s3Uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localPath = value.localPath;
      this._s3UploadMode = value.s3UploadMode;
      this._s3Uri = value.s3Uri;
    }
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // s3_upload_mode - computed: false, optional: true, required: false
  private _s3UploadMode?: string; 
  public get s3UploadMode() {
    return this.getStringAttribute('s3_upload_mode');
  }
  public set s3UploadMode(value: string) {
    this._s3UploadMode = value;
  }
  public resetS3UploadMode() {
    this._s3UploadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UploadModeInput() {
    return this._s3UploadMode;
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs {
  /**
  * Information about where and how you want to store the results of a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#s3_output DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#s3_output}
  */
  readonly s3Output?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_output: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_output: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct!.s3Output),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Output = this._s3Output?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Output.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Output.internalValue = value.s3Output;
    }
  }

  // s3_output - computed: false, optional: true, required: false
  private _s3Output = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputOutputReference(this, "s3_output");
  public get s3Output() {
    return this._s3Output;
  }
  public putS3Output(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output) {
    this._s3Output.internalValue = value;
  }
  public resetS3Output() {
    this._s3Output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputInput() {
    return this._s3Output.internalValue;
  }
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#kms_key_id DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_outputs DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_outputs}
  */
  readonly monitoringOutputs?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform, false)(struct!.monitoringOutputs),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_outputs: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToHclTerraform, false)(struct!.monitoringOutputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._monitoringOutputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringOutputs = this._monitoringOutputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
      this._monitoringOutputs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
      this._monitoringOutputs.internalValue = value.monitoringOutputs;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // monitoring_outputs - computed: false, optional: true, required: false
  private _monitoringOutputs = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsList(this, "monitoring_outputs", false);
  public get monitoringOutputs() {
    return this._monitoringOutputs;
  }
  public putMonitoringOutputs(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs[] | cdktf.IResolvable) {
    this._monitoringOutputs.internalValue = value;
  }
  public resetMonitoringOutputs() {
    this._monitoringOutputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringOutputsInput() {
    return this._monitoringOutputs.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#instance_count DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#instance_type DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#volume_kms_key_id DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#volume_size_in_gb DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#volume_size_in_gb}
  */
  readonly volumeSizeInGb?: number;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.volumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSizeInGb = this._volumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeSizeInGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeSizeInGb = value.volumeSizeInGb;
    }
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_size_in_gb - computed: false, optional: true, required: false
  private _volumeSizeInGb?: number; 
  public get volumeSizeInGb() {
    return this.getNumberAttribute('volume_size_in_gb');
  }
  public set volumeSizeInGb(value: number) {
    this._volumeSizeInGb = value;
  }
  public resetVolumeSizeInGb() {
    this._volumeSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInGbInput() {
    return this._volumeSizeInGb;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources {
  /**
  * Configuration for the cluster used to run model monitoring jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#cluster_config DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_config: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_config: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterConfig.internalValue = value.clusterConfig;
    }
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#security_group_i_ds DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#subnets DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#subnets}
  */
  readonly subnets?: string[];
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIDs = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIDs = value.securityGroupIDs;
      this._subnets = value.subnets;
    }
  }

  // security_group_i_ds - computed: false, optional: true, required: false
  private _securityGroupIDs?: string[]; 
  public get securityGroupIDs() {
    return this.getListAttribute('security_group_i_ds');
  }
  public set securityGroupIDs(value: string[]) {
    this._securityGroupIDs = value;
  }
  public resetSecurityGroupIDs() {
    this._securityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIDsInput() {
    return this._securityGroupIDs;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#enable_inter_container_traffic_encryption DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#enable_network_isolation DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC (https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#vpc_config DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#vpc_config}
  */
  readonly vpcConfig?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_inter_container_traffic_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableInterContainerTrafficEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_network_isolation: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_config: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToHclTerraform(struct!.vpcConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInterContainerTrafficEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterContainerTrafficEncryption = this._enableInterContainerTrafficEncryption;
    }
    if (this._enableNetworkIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkIsolation = this._enableNetworkIsolation;
    }
    if (this._vpcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableInterContainerTrafficEncryption = undefined;
      this._enableNetworkIsolation = undefined;
      this._vpcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableInterContainerTrafficEncryption = value.enableInterContainerTrafficEncryption;
      this._enableNetworkIsolation = value.enableNetworkIsolation;
      this._vpcConfig.internalValue = value.vpcConfig;
    }
  }

  // enable_inter_container_traffic_encryption - computed: false, optional: true, required: false
  private _enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable; 
  public get enableInterContainerTrafficEncryption() {
    return this.getBooleanAttribute('enable_inter_container_traffic_encryption');
  }
  public set enableInterContainerTrafficEncryption(value: boolean | cdktf.IResolvable) {
    this._enableInterContainerTrafficEncryption = value;
  }
  public resetEnableInterContainerTrafficEncryption() {
    this._enableInterContainerTrafficEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterContainerTrafficEncryptionInput() {
    return this._enableInterContainerTrafficEncryption;
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktf.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktf.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#max_runtime_in_seconds DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds?: number;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_runtime_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxRuntimeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRuntimeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRuntimeInSeconds = this._maxRuntimeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxRuntimeInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxRuntimeInSeconds = value.maxRuntimeInSeconds;
    }
  }

  // max_runtime_in_seconds - computed: false, optional: true, required: false
  private _maxRuntimeInSeconds?: number; 
  public get maxRuntimeInSeconds() {
    return this.getNumberAttribute('max_runtime_in_seconds');
  }
  public set maxRuntimeInSeconds(value: number) {
    this._maxRuntimeInSeconds = value;
  }
  public resetMaxRuntimeInSeconds() {
    this._maxRuntimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRuntimeInSecondsInput() {
    return this._maxRuntimeInSeconds;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinition {
  /**
  * Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#baseline_config DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#baseline_config}
  */
  readonly baselineConfig?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#environment DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Container image configuration object for the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_app_specification DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_app_specification}
  */
  readonly monitoringAppSpecification?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_inputs DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_inputs}
  */
  readonly monitoringInputs?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs[] | cdktf.IResolvable;
  /**
  * The output configuration for monitoring jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_output_config DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_output_config}
  */
  readonly monitoringOutputConfig?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig;
  /**
  * Identifies the resources to deploy for a monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_resources DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_resources}
  */
  readonly monitoringResources?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources;
  /**
  * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#network_config DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#network_config}
  */
  readonly networkConfig?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#role_arn DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * A time limit for how long the monitoring job is allowed to run before stopping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#stopping_condition DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#stopping_condition}
  */
  readonly stoppingCondition?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_config: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct!.baselineConfig),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    monitoring_app_specification: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct!.monitoringAppSpecification),
    monitoring_inputs: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform, false)(struct!.monitoringInputs),
    monitoring_output_config: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct!.monitoringOutputConfig),
    monitoring_resources: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct!.monitoringResources),
    network_config: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct!.networkConfig),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stopping_condition: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct!.stoppingCondition),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_config: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToHclTerraform(struct!.baselineConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    monitoring_app_specification: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToHclTerraform(struct!.monitoringAppSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification",
    },
    monitoring_inputs: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToHclTerraform, false)(struct!.monitoringInputs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsList",
    },
    monitoring_output_config: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToHclTerraform(struct!.monitoringOutputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig",
    },
    monitoring_resources: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToHclTerraform(struct!.monitoringResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources",
    },
    network_config: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stopping_condition: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToHclTerraform(struct!.stoppingCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineConfig = this._baselineConfig?.internalValue;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._monitoringAppSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringAppSpecification = this._monitoringAppSpecification?.internalValue;
    }
    if (this._monitoringInputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringInputs = this._monitoringInputs?.internalValue;
    }
    if (this._monitoringOutputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringOutputConfig = this._monitoringOutputConfig?.internalValue;
    }
    if (this._monitoringResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringResources = this._monitoringResources?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._stoppingCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stoppingCondition = this._stoppingCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baselineConfig.internalValue = undefined;
      this._environment = undefined;
      this._monitoringAppSpecification.internalValue = undefined;
      this._monitoringInputs.internalValue = undefined;
      this._monitoringOutputConfig.internalValue = undefined;
      this._monitoringResources.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._roleArn = undefined;
      this._stoppingCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baselineConfig.internalValue = value.baselineConfig;
      this._environment = value.environment;
      this._monitoringAppSpecification.internalValue = value.monitoringAppSpecification;
      this._monitoringInputs.internalValue = value.monitoringInputs;
      this._monitoringOutputConfig.internalValue = value.monitoringOutputConfig;
      this._monitoringResources.internalValue = value.monitoringResources;
      this._networkConfig.internalValue = value.networkConfig;
      this._roleArn = value.roleArn;
      this._stoppingCondition.internalValue = value.stoppingCondition;
    }
  }

  // baseline_config - computed: false, optional: true, required: false
  private _baselineConfig = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigOutputReference(this, "baseline_config");
  public get baselineConfig() {
    return this._baselineConfig;
  }
  public putBaselineConfig(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig) {
    this._baselineConfig.internalValue = value;
  }
  public resetBaselineConfig() {
    this._baselineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineConfigInput() {
    return this._baselineConfig.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // monitoring_app_specification - computed: false, optional: true, required: false
  private _monitoringAppSpecification = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationOutputReference(this, "monitoring_app_specification");
  public get monitoringAppSpecification() {
    return this._monitoringAppSpecification;
  }
  public putMonitoringAppSpecification(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification) {
    this._monitoringAppSpecification.internalValue = value;
  }
  public resetMonitoringAppSpecification() {
    this._monitoringAppSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringAppSpecificationInput() {
    return this._monitoringAppSpecification.internalValue;
  }

  // monitoring_inputs - computed: false, optional: true, required: false
  private _monitoringInputs = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsList(this, "monitoring_inputs", false);
  public get monitoringInputs() {
    return this._monitoringInputs;
  }
  public putMonitoringInputs(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs[] | cdktf.IResolvable) {
    this._monitoringInputs.internalValue = value;
  }
  public resetMonitoringInputs() {
    this._monitoringInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInputsInput() {
    return this._monitoringInputs.internalValue;
  }

  // monitoring_output_config - computed: false, optional: true, required: false
  private _monitoringOutputConfig = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigOutputReference(this, "monitoring_output_config");
  public get monitoringOutputConfig() {
    return this._monitoringOutputConfig;
  }
  public putMonitoringOutputConfig(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig) {
    this._monitoringOutputConfig.internalValue = value;
  }
  public resetMonitoringOutputConfig() {
    this._monitoringOutputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringOutputConfigInput() {
    return this._monitoringOutputConfig.internalValue;
  }

  // monitoring_resources - computed: false, optional: true, required: false
  private _monitoringResources = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesOutputReference(this, "monitoring_resources");
  public get monitoringResources() {
    return this._monitoringResources;
  }
  public putMonitoringResources(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources) {
    this._monitoringResources.internalValue = value;
  }
  public resetMonitoringResources() {
    this._monitoringResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringResourcesInput() {
    return this._monitoringResources.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // stopping_condition - computed: false, optional: true, required: false
  private _stoppingCondition = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionOutputReference(this, "stopping_condition");
  public get stoppingCondition() {
    return this._stoppingCondition;
  }
  public putStoppingCondition(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition) {
    this._stoppingCondition.internalValue = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#data_analysis_end_time DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#data_analysis_end_time}
  */
  readonly dataAnalysisEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#data_analysis_start_time DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#data_analysis_start_time}
  */
  readonly dataAnalysisStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#schedule_expression DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#schedule_expression}
  */
  readonly scheduleExpression?: string;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_analysis_end_time: cdktf.stringToTerraform(struct!.dataAnalysisEndTime),
    data_analysis_start_time: cdktf.stringToTerraform(struct!.dataAnalysisStartTime),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_analysis_end_time: {
      value: cdktf.stringToHclTerraform(struct!.dataAnalysisEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_analysis_start_time: {
      value: cdktf.stringToHclTerraform(struct!.dataAnalysisStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression: {
      value: cdktf.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataAnalysisEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAnalysisEndTime = this._dataAnalysisEndTime;
    }
    if (this._dataAnalysisStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAnalysisStartTime = this._dataAnalysisStartTime;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataAnalysisEndTime = undefined;
      this._dataAnalysisStartTime = undefined;
      this._scheduleExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataAnalysisEndTime = value.dataAnalysisEndTime;
      this._dataAnalysisStartTime = value.dataAnalysisStartTime;
      this._scheduleExpression = value.scheduleExpression;
    }
  }

  // data_analysis_end_time - computed: false, optional: true, required: false
  private _dataAnalysisEndTime?: string; 
  public get dataAnalysisEndTime() {
    return this.getStringAttribute('data_analysis_end_time');
  }
  public set dataAnalysisEndTime(value: string) {
    this._dataAnalysisEndTime = value;
  }
  public resetDataAnalysisEndTime() {
    this._dataAnalysisEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAnalysisEndTimeInput() {
    return this._dataAnalysisEndTime;
  }

  // data_analysis_start_time - computed: false, optional: true, required: false
  private _dataAnalysisStartTime?: string; 
  public get dataAnalysisStartTime() {
    return this.getStringAttribute('data_analysis_start_time');
  }
  public set dataAnalysisStartTime(value: string) {
    this._dataAnalysisStartTime = value;
  }
  public resetDataAnalysisStartTime() {
    this._dataAnalysisStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAnalysisStartTimeInput() {
    return this._dataAnalysisStartTime;
  }

  // schedule_expression - computed: false, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfig {
  /**
  * Defines the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_job_definition DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_job_definition}
  */
  readonly monitoringJobDefinition?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_job_definition_name DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_job_definition_name}
  */
  readonly monitoringJobDefinitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_type DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_type}
  */
  readonly monitoringType?: string;
  /**
  * Configuration details about the monitoring schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#schedule_config DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#schedule_config}
  */
  readonly scheduleConfig?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfig;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitoring_job_definition: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct!.monitoringJobDefinition),
    monitoring_job_definition_name: cdktf.stringToTerraform(struct!.monitoringJobDefinitionName),
    monitoring_type: cdktf.stringToTerraform(struct!.monitoringType),
    schedule_config: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfigToTerraform(struct!.scheduleConfig),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitoring_job_definition: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionToHclTerraform(struct!.monitoringJobDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinition",
    },
    monitoring_job_definition_name: {
      value: cdktf.stringToHclTerraform(struct!.monitoringJobDefinitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_type: {
      value: cdktf.stringToHclTerraform(struct!.monitoringType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_config: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfigToHclTerraform(struct!.scheduleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitoringJobDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringJobDefinition = this._monitoringJobDefinition?.internalValue;
    }
    if (this._monitoringJobDefinitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringJobDefinitionName = this._monitoringJobDefinitionName;
    }
    if (this._monitoringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringType = this._monitoringType;
    }
    if (this._scheduleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleConfig = this._scheduleConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitoringJobDefinition.internalValue = undefined;
      this._monitoringJobDefinitionName = undefined;
      this._monitoringType = undefined;
      this._scheduleConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitoringJobDefinition.internalValue = value.monitoringJobDefinition;
      this._monitoringJobDefinitionName = value.monitoringJobDefinitionName;
      this._monitoringType = value.monitoringType;
      this._scheduleConfig.internalValue = value.scheduleConfig;
    }
  }

  // monitoring_job_definition - computed: false, optional: true, required: false
  private _monitoringJobDefinition = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinitionOutputReference(this, "monitoring_job_definition");
  public get monitoringJobDefinition() {
    return this._monitoringJobDefinition;
  }
  public putMonitoringJobDefinition(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigMonitoringJobDefinition) {
    this._monitoringJobDefinition.internalValue = value;
  }
  public resetMonitoringJobDefinition() {
    this._monitoringJobDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringJobDefinitionInput() {
    return this._monitoringJobDefinition.internalValue;
  }

  // monitoring_job_definition_name - computed: false, optional: true, required: false
  private _monitoringJobDefinitionName?: string; 
  public get monitoringJobDefinitionName() {
    return this.getStringAttribute('monitoring_job_definition_name');
  }
  public set monitoringJobDefinitionName(value: string) {
    this._monitoringJobDefinitionName = value;
  }
  public resetMonitoringJobDefinitionName() {
    this._monitoringJobDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringJobDefinitionNameInput() {
    return this._monitoringJobDefinitionName;
  }

  // monitoring_type - computed: false, optional: true, required: false
  private _monitoringType?: string; 
  public get monitoringType() {
    return this.getStringAttribute('monitoring_type');
  }
  public set monitoringType(value: string) {
    this._monitoringType = value;
  }
  public resetMonitoringType() {
    this._monitoringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringTypeInput() {
    return this._monitoringType;
  }

  // schedule_config - computed: false, optional: true, required: false
  private _scheduleConfig = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfigOutputReference(this, "schedule_config");
  public get scheduleConfig() {
    return this._scheduleConfig;
  }
  public putScheduleConfig(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigScheduleConfig) {
    this._scheduleConfig.internalValue = value;
  }
  public resetScheduleConfig() {
    this._scheduleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigInput() {
    return this._scheduleConfig.internalValue;
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#key DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#value DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpec {
  /**
  * The configuration object that specifies the monitoring schedule and defines the monitoring job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_schedule_config DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_schedule_config}
  */
  readonly monitoringScheduleConfig: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfig;
  /**
  * The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within an Amazon Web Services account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#monitoring_schedule_name DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#monitoring_schedule_name}
  */
  readonly monitoringScheduleName: string;
  /**
  * (Optional) An array of key-value pairs. For more information, see Using Cost Allocation Tags (https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the Amazon Web Services Billing and Cost Management User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#tags DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitoring_schedule_config: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigToTerraform(struct!.monitoringScheduleConfig),
    monitoring_schedule_name: cdktf.stringToTerraform(struct!.monitoringScheduleName),
    tags: cdktf.listMapper(dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitoring_schedule_config: {
      value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigToHclTerraform(struct!.monitoringScheduleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfig",
    },
    monitoring_schedule_name: {
      value: cdktf.stringToHclTerraform(struct!.monitoringScheduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitoringScheduleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringScheduleConfig = this._monitoringScheduleConfig?.internalValue;
    }
    if (this._monitoringScheduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringScheduleName = this._monitoringScheduleName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitoringScheduleConfig.internalValue = undefined;
      this._monitoringScheduleName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitoringScheduleConfig.internalValue = value.monitoringScheduleConfig;
      this._monitoringScheduleName = value.monitoringScheduleName;
      this._tags.internalValue = value.tags;
    }
  }

  // monitoring_schedule_config - computed: false, optional: false, required: true
  private _monitoringScheduleConfig = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfigOutputReference(this, "monitoring_schedule_config");
  public get monitoringScheduleConfig() {
    return this._monitoringScheduleConfig;
  }
  public putMonitoringScheduleConfig(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecMonitoringScheduleConfig) {
    this._monitoringScheduleConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringScheduleConfigInput() {
    return this._monitoringScheduleConfig.internalValue;
  }

  // monitoring_schedule_name - computed: false, optional: false, required: true
  private _monitoringScheduleName?: string; 
  public get monitoringScheduleName() {
    return this.getStringAttribute('monitoring_schedule_name');
  }
  public set monitoringScheduleName(value: string) {
    this._monitoringScheduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringScheduleNameInput() {
    return this._monitoringScheduleName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest}
*/
export class DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest k8s_sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_sagemaker_services_k8s_aws_monitoring_schedule_v1alpha1_manifest',
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
  private _metadata = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSagemakerServicesK8SAwsMonitoringScheduleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
