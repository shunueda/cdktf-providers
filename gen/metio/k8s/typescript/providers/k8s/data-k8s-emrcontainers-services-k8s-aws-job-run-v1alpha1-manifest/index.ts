// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#metadata DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadata;
  /**
  * JobRunSpec defines the desired state of JobRun. This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#spec DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpec;
}
export interface DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#annotations DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#labels DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#name DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#namespace DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#entry_point DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#entry_point_arguments DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#entry_point_arguments}
  */
  readonly entryPointArguments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#spark_submit_parameters DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#spark_submit_parameters}
  */
  readonly sparkSubmitParameters?: string;
}

export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriverToTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_point: cdktf.stringToTerraform(struct!.entryPoint),
    entry_point_arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entryPointArguments),
    spark_submit_parameters: cdktf.stringToTerraform(struct!.sparkSubmitParameters),
  }
}


export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriverToHclTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_point: {
      value: cdktf.stringToHclTerraform(struct!.entryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_point_arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entryPointArguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spark_submit_parameters: {
      value: cdktf.stringToHclTerraform(struct!.sparkSubmitParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._entryPointArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPointArguments = this._entryPointArguments;
    }
    if (this._sparkSubmitParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitParameters = this._sparkSubmitParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryPoint = undefined;
      this._entryPointArguments = undefined;
      this._sparkSubmitParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryPoint = value.entryPoint;
      this._entryPointArguments = value.entryPointArguments;
      this._sparkSubmitParameters = value.sparkSubmitParameters;
    }
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // entry_point_arguments - computed: false, optional: true, required: false
  private _entryPointArguments?: string[]; 
  public get entryPointArguments() {
    return this.getListAttribute('entry_point_arguments');
  }
  public set entryPointArguments(value: string[]) {
    this._entryPointArguments = value;
  }
  public resetEntryPointArguments() {
    this._entryPointArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointArgumentsInput() {
    return this._entryPointArguments;
  }

  // spark_submit_parameters - computed: false, optional: true, required: false
  private _sparkSubmitParameters?: string; 
  public get sparkSubmitParameters() {
    return this.getStringAttribute('spark_submit_parameters');
  }
  public set sparkSubmitParameters(value: string) {
    this._sparkSubmitParameters = value;
  }
  public resetSparkSubmitParameters() {
    this._sparkSubmitParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitParametersInput() {
    return this._sparkSubmitParameters;
  }
}
export interface DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriver {
  /**
  * The information about job driver for Spark submit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#spark_submit_job_driver DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#spark_submit_job_driver}
  */
  readonly sparkSubmitJobDriver?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriver;
}

export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverToTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spark_submit_job_driver: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriverToTerraform(struct!.sparkSubmitJobDriver),
  }
}


export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverToHclTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spark_submit_job_driver: {
      value: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriverToHclTerraform(struct!.sparkSubmitJobDriver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriver",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sparkSubmitJobDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitJobDriver = this._sparkSubmitJobDriver?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sparkSubmitJobDriver.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sparkSubmitJobDriver.internalValue = value.sparkSubmitJobDriver;
    }
  }

  // spark_submit_job_driver - computed: false, optional: true, required: false
  private _sparkSubmitJobDriver = new DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriverOutputReference(this, "spark_submit_job_driver");
  public get sparkSubmitJobDriver() {
    return this._sparkSubmitJobDriver;
  }
  public putSparkSubmitJobDriver(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverSparkSubmitJobDriver) {
    this._sparkSubmitJobDriver.internalValue = value;
  }
  public resetSparkSubmitJobDriver() {
    this._sparkSubmitJobDriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitJobDriverInput() {
    return this._sparkSubmitJobDriver.internalValue;
  }
}
export interface DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#name DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#namespace DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFromToTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFromToHclTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFrom | cdktf.IResolvable): any {
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

export class DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#from DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFrom;
}

export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefToTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFromToTerraform(struct!.from),
  }
}


export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefToHclTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefFrom) {
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
export interface DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#configuration_overrides DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#configuration_overrides}
  */
  readonly configurationOverrides?: string;
  /**
  * The execution role ARN for the job run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#execution_role_arn DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * The job driver for the job run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#job_driver DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#job_driver}
  */
  readonly jobDriver: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriver;
  /**
  * The name of the job run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#name DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The Amazon EMR release version to use for the job run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#release_label DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#release_label}
  */
  readonly releaseLabel: string;
  /**
  * The tags assigned to job runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#tags DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The virtual cluster ID for which the job run request is submitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#virtual_cluster_id DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#virtual_cluster_id}
  */
  readonly virtualClusterId?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#virtual_cluster_ref DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest#virtual_cluster_ref}
  */
  readonly virtualClusterRef?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRef;
}

export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_overrides: cdktf.stringToTerraform(struct!.configurationOverrides),
    execution_role_arn: cdktf.stringToTerraform(struct!.executionRoleArn),
    job_driver: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverToTerraform(struct!.jobDriver),
    name: cdktf.stringToTerraform(struct!.name),
    release_label: cdktf.stringToTerraform(struct!.releaseLabel),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    virtual_cluster_id: cdktf.stringToTerraform(struct!.virtualClusterId),
    virtual_cluster_ref: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefToTerraform(struct!.virtualClusterRef),
  }
}


export function dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_overrides: {
      value: cdktf.stringToHclTerraform(struct!.configurationOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.executionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_driver: {
      value: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverToHclTerraform(struct!.jobDriver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriver",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_label: {
      value: cdktf.stringToHclTerraform(struct!.releaseLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    virtual_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_cluster_ref: {
      value: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefToHclTerraform(struct!.virtualClusterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationOverrides = this._configurationOverrides;
    }
    if (this._executionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRoleArn = this._executionRoleArn;
    }
    if (this._jobDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobDriver = this._jobDriver?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._releaseLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseLabel = this._releaseLabel;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._virtualClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualClusterId = this._virtualClusterId;
    }
    if (this._virtualClusterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualClusterRef = this._virtualClusterRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationOverrides = undefined;
      this._executionRoleArn = undefined;
      this._jobDriver.internalValue = undefined;
      this._name = undefined;
      this._releaseLabel = undefined;
      this._tags = undefined;
      this._virtualClusterId = undefined;
      this._virtualClusterRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationOverrides = value.configurationOverrides;
      this._executionRoleArn = value.executionRoleArn;
      this._jobDriver.internalValue = value.jobDriver;
      this._name = value.name;
      this._releaseLabel = value.releaseLabel;
      this._tags = value.tags;
      this._virtualClusterId = value.virtualClusterId;
      this._virtualClusterRef.internalValue = value.virtualClusterRef;
    }
  }

  // configuration_overrides - computed: false, optional: true, required: false
  private _configurationOverrides?: string; 
  public get configurationOverrides() {
    return this.getStringAttribute('configuration_overrides');
  }
  public set configurationOverrides(value: string) {
    this._configurationOverrides = value;
  }
  public resetConfigurationOverrides() {
    this._configurationOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationOverridesInput() {
    return this._configurationOverrides;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // job_driver - computed: false, optional: false, required: true
  private _jobDriver = new DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriverOutputReference(this, "job_driver");
  public get jobDriver() {
    return this._jobDriver;
  }
  public putJobDriver(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecJobDriver) {
    this._jobDriver.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDriverInput() {
    return this._jobDriver.internalValue;
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

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
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

  // virtual_cluster_id - computed: false, optional: true, required: false
  private _virtualClusterId?: string; 
  public get virtualClusterId() {
    return this.getStringAttribute('virtual_cluster_id');
  }
  public set virtualClusterId(value: string) {
    this._virtualClusterId = value;
  }
  public resetVirtualClusterId() {
    this._virtualClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterIdInput() {
    return this._virtualClusterId;
  }

  // virtual_cluster_ref - computed: false, optional: true, required: false
  private _virtualClusterRef = new DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRefOutputReference(this, "virtual_cluster_ref");
  public get virtualClusterRef() {
    return this._virtualClusterRef;
  }
  public putVirtualClusterRef(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecVirtualClusterRef) {
    this._virtualClusterRef.internalValue = value;
  }
  public resetVirtualClusterRef() {
    this._virtualClusterRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterRefInput() {
    return this._virtualClusterRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest k8s_emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest}
*/
export class DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest k8s_emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_emrcontainers_services_k8s_aws_job_run_v1alpha1_manifest',
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
  private _metadata = new DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEmrcontainersServicesK8SAwsJobRunV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
