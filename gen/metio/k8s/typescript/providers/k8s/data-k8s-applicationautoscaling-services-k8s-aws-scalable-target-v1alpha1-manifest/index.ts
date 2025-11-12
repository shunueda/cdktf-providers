// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#metadata DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadata;
  /**
  * ScalableTargetSpec defines the desired state of ScalableTarget. Represents a scalable target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#spec DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpec;
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#annotations DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#labels DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#name DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#namespace DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#dynamic_scaling_in_suspended DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#dynamic_scaling_in_suspended}
  */
  readonly dynamicScalingInSuspended?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#dynamic_scaling_out_suspended DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#dynamic_scaling_out_suspended}
  */
  readonly dynamicScalingOutSuspended?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#scheduled_scaling_suspended DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#scheduled_scaling_suspended}
  */
  readonly scheduledScalingSuspended?: boolean | cdktf.IResolvable;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedStateToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_scaling_in_suspended: cdktf.booleanToTerraform(struct!.dynamicScalingInSuspended),
    dynamic_scaling_out_suspended: cdktf.booleanToTerraform(struct!.dynamicScalingOutSuspended),
    scheduled_scaling_suspended: cdktf.booleanToTerraform(struct!.scheduledScalingSuspended),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedStateToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_scaling_in_suspended: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicScalingInSuspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_scaling_out_suspended: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicScalingOutSuspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduled_scaling_suspended: {
      value: cdktf.booleanToHclTerraform(struct!.scheduledScalingSuspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicScalingInSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicScalingInSuspended = this._dynamicScalingInSuspended;
    }
    if (this._dynamicScalingOutSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicScalingOutSuspended = this._dynamicScalingOutSuspended;
    }
    if (this._scheduledScalingSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledScalingSuspended = this._scheduledScalingSuspended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicScalingInSuspended = undefined;
      this._dynamicScalingOutSuspended = undefined;
      this._scheduledScalingSuspended = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicScalingInSuspended = value.dynamicScalingInSuspended;
      this._dynamicScalingOutSuspended = value.dynamicScalingOutSuspended;
      this._scheduledScalingSuspended = value.scheduledScalingSuspended;
    }
  }

  // dynamic_scaling_in_suspended - computed: false, optional: true, required: false
  private _dynamicScalingInSuspended?: boolean | cdktf.IResolvable; 
  public get dynamicScalingInSuspended() {
    return this.getBooleanAttribute('dynamic_scaling_in_suspended');
  }
  public set dynamicScalingInSuspended(value: boolean | cdktf.IResolvable) {
    this._dynamicScalingInSuspended = value;
  }
  public resetDynamicScalingInSuspended() {
    this._dynamicScalingInSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicScalingInSuspendedInput() {
    return this._dynamicScalingInSuspended;
  }

  // dynamic_scaling_out_suspended - computed: false, optional: true, required: false
  private _dynamicScalingOutSuspended?: boolean | cdktf.IResolvable; 
  public get dynamicScalingOutSuspended() {
    return this.getBooleanAttribute('dynamic_scaling_out_suspended');
  }
  public set dynamicScalingOutSuspended(value: boolean | cdktf.IResolvable) {
    this._dynamicScalingOutSuspended = value;
  }
  public resetDynamicScalingOutSuspended() {
    this._dynamicScalingOutSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicScalingOutSuspendedInput() {
    return this._dynamicScalingOutSuspended;
  }

  // scheduled_scaling_suspended - computed: false, optional: true, required: false
  private _scheduledScalingSuspended?: boolean | cdktf.IResolvable; 
  public get scheduledScalingSuspended() {
    return this.getBooleanAttribute('scheduled_scaling_suspended');
  }
  public set scheduledScalingSuspended(value: boolean | cdktf.IResolvable) {
    this._scheduledScalingSuspended = value;
  }
  public resetScheduledScalingSuspended() {
    this._scheduledScalingSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledScalingSuspendedInput() {
    return this._scheduledScalingSuspended;
  }
}
export interface DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpec {
  /**
  * The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand. This property is required when registering a new scalable target. Although you can specify a large maximum capacity, note that service quotas may impose lower limits. Each service has its own default quotas for the maximum capacity of the resource. If you want to specify a higher limit, you can request an increase. For more information, consult the documentation for that service. For information about the default quotas for each service, see Service Endpoints and Quotas (https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html) in the Amazon Web Services General Reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#max_capacity DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand. This property is required when registering a new scalable target. For certain resources, the minimum value allowed is 0. This includes Lambda provisioned concurrency, Spot Fleet, ECS services, Aurora DB clusters, EMR clusters, and custom resources. For all other resources, the minimum value allowed is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#min_capacity DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#min_capacity}
  */
  readonly minCapacity?: number;
  /**
  * The identifier of the resource that is associated with the scalable target. This string consists of the resource type and unique identifier. * ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp. * Spot Fleet - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. * EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0. * AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet. * DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table. * DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index. * Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster. * SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. * Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository (https://github.com/aws/aws-auto-scaling-custom-resource). * Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE. * Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE. * Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1. * Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable. * Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5. * Amazon ElastiCache replication group - The resource type is replication-group and the unique identifier is the replication group name. Example: replication-group/mycluster. * Neptune cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:mycluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#resource_id DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#resource_id}
  */
  readonly resourceId: string;
  /**
  * This parameter is required for services that do not support service-linked roles (such as Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf. If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which it creates if it does not yet exist. For more information, see Application Auto Scaling IAM roles (https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-roles).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#role_arn DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. * ecs:service:DesiredCount - The desired task count of an ECS service. * elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group. * ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet. * appstream:fleet:DesiredCapacity - The desired capacity of an AppStream 2.0 fleet. * dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table. * dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table. * dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index. * dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index. * rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition. * sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for an SageMaker model endpoint variant. * custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service. * comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint. * comprehend:entity-recognizer-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend entity recognizer endpoint. * lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function. * cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table. * cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table. * kafka:broker-storage:VolumeSize - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster. * elasticache:replication-group:NodeGroups - The number of node groups for an Amazon ElastiCache replication group. * elasticache:replication-group:Replicas - The number of replicas per node group for an Amazon ElastiCache replication group. * neptune:cluster:ReadReplicaCount - The count of read replicas in an Amazon Neptune DB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#scalable_dimension DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#scalable_dimension}
  */
  readonly scalableDimension: string;
  /**
  * The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#service_namespace DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#service_namespace}
  */
  readonly serviceNamespace: string;
  /**
  * An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to true suspends the specified scaling activities. Setting it to false (default) resumes the specified scaling activities. Suspension Outcomes * For DynamicScalingInSuspended, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended. * For DynamicScalingOutSuspended, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended. * For ScheduledScalingSuspended, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended. For more information, see Suspending and resuming scaling (https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-suspend-resume-scaling.html) in the Application Auto Scaling User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#suspended_state DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest#suspended_state}
  */
  readonly suspendedState?: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedState;
}

export function dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    scalable_dimension: cdktf.stringToTerraform(struct!.scalableDimension),
    service_namespace: cdktf.stringToTerraform(struct!.serviceNamespace),
    suspended_state: dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedStateToTerraform(struct!.suspendedState),
  }
}


export function dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalable_dimension: {
      value: cdktf.stringToHclTerraform(struct!.scalableDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_namespace: {
      value: cdktf.stringToHclTerraform(struct!.serviceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspended_state: {
      value: dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedStateToHclTerraform(struct!.suspendedState),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedState",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._scalableDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableDimension = this._scalableDimension;
    }
    if (this._serviceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNamespace = this._serviceNamespace;
    }
    if (this._suspendedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendedState = this._suspendedState?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._resourceId = undefined;
      this._roleArn = undefined;
      this._scalableDimension = undefined;
      this._serviceNamespace = undefined;
      this._suspendedState.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._resourceId = value.resourceId;
      this._roleArn = value.roleArn;
      this._scalableDimension = value.scalableDimension;
      this._serviceNamespace = value.serviceNamespace;
      this._suspendedState.internalValue = value.suspendedState;
    }
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension?: string; 
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableDimensionInput() {
    return this._scalableDimension;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace?: string; 
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamespaceInput() {
    return this._serviceNamespace;
  }

  // suspended_state - computed: false, optional: true, required: false
  private _suspendedState = new DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedStateOutputReference(this, "suspended_state");
  public get suspendedState() {
    return this._suspendedState;
  }
  public putSuspendedState(value: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecSuspendedState) {
    this._suspendedState.internalValue = value;
  }
  public resetSuspendedState() {
    this._suspendedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedStateInput() {
    return this._suspendedState.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest k8s_applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest}
*/
export class DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest k8s_applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_applicationautoscaling_services_k8s_aws_scalable_target_v1alpha1_manifest',
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
  private _metadata = new DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApplicationautoscalingServicesK8SAwsScalableTargetV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
