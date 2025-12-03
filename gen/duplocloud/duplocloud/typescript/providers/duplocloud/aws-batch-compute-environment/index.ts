// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsBatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#id AwsBatchComputeEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the compute environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#name AwsBatchComputeEnvironment#name}
  */
  readonly name: string;
  /**
  * The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#service_role AwsBatchComputeEnvironment#service_role}
  */
  readonly serviceRole?: string;
  /**
  * The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Compute environment must be created in `ENABLED` state. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#state AwsBatchComputeEnvironment#state}
  */
  readonly state?: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#tags AwsBatchComputeEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The GUID of the tenant that the aws batch compute environment will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#tenant_id AwsBatchComputeEnvironment#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The type of the compute environment. Valid items are `MANAGED` or `UNMANAGED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#type AwsBatchComputeEnvironment#type}
  */
  readonly type: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#wait_for_deployment AwsBatchComputeEnvironment#wait_for_deployment}
  */
  readonly waitForDeployment?: boolean | cdktf.IResolvable;
  /**
  * compute_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#compute_resources AwsBatchComputeEnvironment#compute_resources}
  */
  readonly computeResources?: AwsBatchComputeEnvironmentComputeResources;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#timeouts AwsBatchComputeEnvironment#timeouts}
  */
  readonly timeouts?: AwsBatchComputeEnvironmentTimeouts;
}
export interface AwsBatchComputeEnvironmentComputeResourcesEc2Configuration {
  /**
  * The AMI ID used for instances launched in the compute environment that match the image type. This setting overrides the `image_id` argument in the `compute_resources` block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#image_id_override AwsBatchComputeEnvironment#image_id_override}
  */
  readonly imageIdOverride?: string;
  /**
  * The image type to match with the instance type to select an AMI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#image_type AwsBatchComputeEnvironment#image_type}
  */
  readonly imageType?: string;
}

export function awsBatchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct?: AwsBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference | AwsBatchComputeEnvironmentComputeResourcesEc2Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id_override: cdktf.stringToTerraform(struct!.imageIdOverride),
    image_type: cdktf.stringToTerraform(struct!.imageType),
  }
}


export function awsBatchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform(struct?: AwsBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference | AwsBatchComputeEnvironmentComputeResourcesEc2Configuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_id_override: {
      value: cdktf.stringToHclTerraform(struct!.imageIdOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsBatchComputeEnvironmentComputeResourcesEc2Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageIdOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageIdOverride = this._imageIdOverride;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchComputeEnvironmentComputeResourcesEc2Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageIdOverride = undefined;
      this._imageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageIdOverride = value.imageIdOverride;
      this._imageType = value.imageType;
    }
  }

  // image_id_override - computed: true, optional: true, required: false
  private _imageIdOverride?: string; 
  public get imageIdOverride() {
    return this.getStringAttribute('image_id_override');
  }
  public set imageIdOverride(value: string) {
    this._imageIdOverride = value;
  }
  public resetImageIdOverride() {
    this._imageIdOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdOverrideInput() {
    return this._imageIdOverride;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }
}
export interface AwsBatchComputeEnvironmentComputeResourcesLaunchTemplate {
  /**
  * ID of the launch template. You must specify either the launch template ID or launch template name in the request, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#launch_template_id AwsBatchComputeEnvironment#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Name of the launch template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#launch_template_name AwsBatchComputeEnvironment#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * The version number of the launch template. Default: The default version of the launch template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#version AwsBatchComputeEnvironment#version}
  */
  readonly version?: string;
}

export function awsBatchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct?: AwsBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference | AwsBatchComputeEnvironmentComputeResourcesLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function awsBatchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct?: AwsBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference | AwsBatchComputeEnvironmentComputeResourcesLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    launch_template_id: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktf.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsBatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: false, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface AwsBatchComputeEnvironmentComputeResources {
  /**
  * The allocation strategy to use for the compute resource in case not enough instances of the best fitting instance type can be allocated. Available allocation_strategy - `BEST_FIT_PROGRESSIVE`, `SPOT_CAPACITY_OPTIMIZED`, `BEST_FIT`, `SPOT_PRICE_CAPACITY_OPTIMIZED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#allocation_strategy AwsBatchComputeEnvironment#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Integer of maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#bid_percentage AwsBatchComputeEnvironment#bid_percentage}
  */
  readonly bidPercentage?: number;
  /**
  * The desired number of EC2 vCPUS in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#desired_vcpus AwsBatchComputeEnvironment#desired_vcpus}
  */
  readonly desiredVcpus?: number;
  /**
  * The EC2 key pair that is used for instances launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#ec2_key_pair AwsBatchComputeEnvironment#ec2_key_pair}
  */
  readonly ec2KeyPair?: string;
  /**
  * The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. (Deprecated, use ec2_configuration `image_id_override` instead)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#image_id AwsBatchComputeEnvironment#image_id}
  */
  readonly imageId?: string;
  /**
  * The Amazon ECS instance role applied to Amazon EC2 instances in a compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#instance_role AwsBatchComputeEnvironment#instance_role}
  */
  readonly instanceRole?: string;
  /**
  * A list of instance types that may be launched. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#instance_type AwsBatchComputeEnvironment#instance_type}
  */
  readonly instanceType?: string[];
  /**
  * The maximum number of EC2 vCPUs that an environment can reach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#max_vcpus AwsBatchComputeEnvironment#max_vcpus}
  */
  readonly maxVcpus: number;
  /**
  * The minimum number of EC2 vCPUs that an environment should maintain. For `EC2` or `SPOT` compute environments, if the parameter is not explicitly defined, a `0` default value will be set. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#min_vcpus AwsBatchComputeEnvironment#min_vcpus}
  */
  readonly minVcpus?: number;
  /**
  * A list of EC2 security group that are associated with instances launched in the compute environment. This parameter is required for Fargate compute environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#security_group_ids AwsBatchComputeEnvironment#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a SPOT compute environment. This parameter is required for SPOT compute environments. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#spot_iam_fleet_role AwsBatchComputeEnvironment#spot_iam_fleet_role}
  */
  readonly spotIamFleetRole?: string;
  /**
  * A list of VPC subnets into which the compute resources are launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#subnets AwsBatchComputeEnvironment#subnets}
  */
  readonly subnets?: string[];
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#tags AwsBatchComputeEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The type of compute environment. Valid items are `EC2`, `SPOT`, `FARGATE` or `FARGATE_SPOT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#type AwsBatchComputeEnvironment#type}
  */
  readonly type: string;
  /**
  * ec2_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#ec2_configuration AwsBatchComputeEnvironment#ec2_configuration}
  */
  readonly ec2Configuration?: AwsBatchComputeEnvironmentComputeResourcesEc2Configuration;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#launch_template AwsBatchComputeEnvironment#launch_template}
  */
  readonly launchTemplate?: AwsBatchComputeEnvironmentComputeResourcesLaunchTemplate;
}

export function awsBatchComputeEnvironmentComputeResourcesToTerraform(struct?: AwsBatchComputeEnvironmentComputeResourcesOutputReference | AwsBatchComputeEnvironmentComputeResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_strategy: cdktf.stringToTerraform(struct!.allocationStrategy),
    bid_percentage: cdktf.numberToTerraform(struct!.bidPercentage),
    desired_vcpus: cdktf.numberToTerraform(struct!.desiredVcpus),
    ec2_key_pair: cdktf.stringToTerraform(struct!.ec2KeyPair),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_role: cdktf.stringToTerraform(struct!.instanceRole),
    instance_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceType),
    max_vcpus: cdktf.numberToTerraform(struct!.maxVcpus),
    min_vcpus: cdktf.numberToTerraform(struct!.minVcpus),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    spot_iam_fleet_role: cdktf.stringToTerraform(struct!.spotIamFleetRole),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    ec2_configuration: awsBatchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct!.ec2Configuration),
    launch_template: awsBatchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct!.launchTemplate),
  }
}


export function awsBatchComputeEnvironmentComputeResourcesToHclTerraform(struct?: AwsBatchComputeEnvironmentComputeResourcesOutputReference | AwsBatchComputeEnvironmentComputeResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.allocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bid_percentage: {
      value: cdktf.numberToHclTerraform(struct!.bidPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    desired_vcpus: {
      value: cdktf.numberToHclTerraform(struct!.desiredVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ec2_key_pair: {
      value: cdktf.stringToHclTerraform(struct!.ec2KeyPair),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role: {
      value: cdktf.stringToHclTerraform(struct!.instanceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_vcpus: {
      value: cdktf.numberToHclTerraform(struct!.maxVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_vcpus: {
      value: cdktf.numberToHclTerraform(struct!.minVcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spot_iam_fleet_role: {
      value: cdktf.stringToHclTerraform(struct!.spotIamFleetRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2_configuration: {
      value: awsBatchComputeEnvironmentComputeResourcesEc2ConfigurationToHclTerraform(struct!.ec2Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "AwsBatchComputeEnvironmentComputeResourcesEc2ConfigurationList",
    },
    launch_template: {
      value: awsBatchComputeEnvironmentComputeResourcesLaunchTemplateToHclTerraform(struct!.launchTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "AwsBatchComputeEnvironmentComputeResourcesLaunchTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchComputeEnvironmentComputeResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsBatchComputeEnvironmentComputeResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationStrategy = this._allocationStrategy;
    }
    if (this._bidPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPercentage = this._bidPercentage;
    }
    if (this._desiredVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredVcpus = this._desiredVcpus;
    }
    if (this._ec2KeyPair !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2KeyPair = this._ec2KeyPair;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRole = this._instanceRole;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._maxVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVcpus = this._maxVcpus;
    }
    if (this._minVcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVcpus = this._minVcpus;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._spotIamFleetRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotIamFleetRole = this._spotIamFleetRole;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._ec2Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2Configuration = this._ec2Configuration?.internalValue;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchComputeEnvironmentComputeResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocationStrategy = undefined;
      this._bidPercentage = undefined;
      this._desiredVcpus = undefined;
      this._ec2KeyPair = undefined;
      this._imageId = undefined;
      this._instanceRole = undefined;
      this._instanceType = undefined;
      this._maxVcpus = undefined;
      this._minVcpus = undefined;
      this._securityGroupIds = undefined;
      this._spotIamFleetRole = undefined;
      this._subnets = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._ec2Configuration.internalValue = undefined;
      this._launchTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocationStrategy = value.allocationStrategy;
      this._bidPercentage = value.bidPercentage;
      this._desiredVcpus = value.desiredVcpus;
      this._ec2KeyPair = value.ec2KeyPair;
      this._imageId = value.imageId;
      this._instanceRole = value.instanceRole;
      this._instanceType = value.instanceType;
      this._maxVcpus = value.maxVcpus;
      this._minVcpus = value.minVcpus;
      this._securityGroupIds = value.securityGroupIds;
      this._spotIamFleetRole = value.spotIamFleetRole;
      this._subnets = value.subnets;
      this._tags = value.tags;
      this._type = value.type;
      this._ec2Configuration.internalValue = value.ec2Configuration;
      this._launchTemplate.internalValue = value.launchTemplate;
    }
  }

  // allocation_strategy - computed: false, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // bid_percentage - computed: false, optional: true, required: false
  private _bidPercentage?: number; 
  public get bidPercentage() {
    return this.getNumberAttribute('bid_percentage');
  }
  public set bidPercentage(value: number) {
    this._bidPercentage = value;
  }
  public resetBidPercentage() {
    this._bidPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPercentageInput() {
    return this._bidPercentage;
  }

  // desired_vcpus - computed: true, optional: true, required: false
  private _desiredVcpus?: number; 
  public get desiredVcpus() {
    return this.getNumberAttribute('desired_vcpus');
  }
  public set desiredVcpus(value: number) {
    this._desiredVcpus = value;
  }
  public resetDesiredVcpus() {
    this._desiredVcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredVcpusInput() {
    return this._desiredVcpus;
  }

  // ec2_key_pair - computed: true, optional: true, required: false
  private _ec2KeyPair?: string; 
  public get ec2KeyPair() {
    return this.getStringAttribute('ec2_key_pair');
  }
  public set ec2KeyPair(value: string) {
    this._ec2KeyPair = value;
  }
  public resetEc2KeyPair() {
    this._ec2KeyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2KeyPairInput() {
    return this._ec2KeyPair;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_role - computed: true, optional: true, required: false
  private _instanceRole?: string; 
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }
  public set instanceRole(value: string) {
    this._instanceRole = value;
  }
  public resetInstanceRole() {
    this._instanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleInput() {
    return this._instanceRole;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string[]; 
  public get instanceType() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_type'));
  }
  public set instanceType(value: string[]) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_vcpus - computed: false, optional: false, required: true
  private _maxVcpus?: number; 
  public get maxVcpus() {
    return this.getNumberAttribute('max_vcpus');
  }
  public set maxVcpus(value: number) {
    this._maxVcpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVcpusInput() {
    return this._maxVcpus;
  }

  // min_vcpus - computed: false, optional: true, required: false
  private _minVcpus?: number; 
  public get minVcpus() {
    return this.getNumberAttribute('min_vcpus');
  }
  public set minVcpus(value: number) {
    this._minVcpus = value;
  }
  public resetMinVcpus() {
    this._minVcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVcpusInput() {
    return this._minVcpus;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // spot_iam_fleet_role - computed: false, optional: true, required: false
  private _spotIamFleetRole?: string; 
  public get spotIamFleetRole() {
    return this.getStringAttribute('spot_iam_fleet_role');
  }
  public set spotIamFleetRole(value: string) {
    this._spotIamFleetRole = value;
  }
  public resetSpotIamFleetRole() {
    this._spotIamFleetRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotIamFleetRoleInput() {
    return this._spotIamFleetRole;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
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

  // tags - computed: true, optional: true, required: false
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

  // ec2_configuration - computed: false, optional: true, required: false
  private _ec2Configuration = new AwsBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(this, "ec2_configuration");
  public get ec2Configuration() {
    return this._ec2Configuration;
  }
  public putEc2Configuration(value: AwsBatchComputeEnvironmentComputeResourcesEc2Configuration) {
    this._ec2Configuration.internalValue = value;
  }
  public resetEc2Configuration() {
    this._ec2Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ConfigurationInput() {
    return this._ec2Configuration.internalValue;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new AwsBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: AwsBatchComputeEnvironmentComputeResourcesLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }
}
export interface AwsBatchComputeEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#create AwsBatchComputeEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#delete AwsBatchComputeEnvironment#delete}
  */
  readonly delete?: string;
}

export function awsBatchComputeEnvironmentTimeoutsToTerraform(struct?: AwsBatchComputeEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsBatchComputeEnvironmentTimeoutsToHclTerraform(struct?: AwsBatchComputeEnvironmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchComputeEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsBatchComputeEnvironmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchComputeEnvironmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment duplocloud_aws_batch_compute_environment}
*/
export class AwsBatchComputeEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_batch_compute_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsBatchComputeEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBatchComputeEnvironment to import
  * @param importFromId The id of the existing AwsBatchComputeEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBatchComputeEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_batch_compute_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_batch_compute_environment duplocloud_aws_batch_compute_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBatchComputeEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBatchComputeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_batch_compute_environment',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._serviceRole = config.serviceRole;
    this._state = config.state;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._type = config.type;
    this._waitForDeployment = config.waitForDeployment;
    this._computeResources.internalValue = config.computeResources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // ecs_cluster_arn - computed: true, optional: false, required: false
  public get ecsClusterArn() {
    return this.getStringAttribute('ecs_cluster_arn');
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
  }

  // id - computed: true, optional: true, required: false
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

  // service_role - computed: true, optional: true, required: false
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  public resetServiceRole() {
    this._serviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: true, required: false
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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

  // wait_for_deployment - computed: false, optional: true, required: false
  private _waitForDeployment?: boolean | cdktf.IResolvable; 
  public get waitForDeployment() {
    return this.getBooleanAttribute('wait_for_deployment');
  }
  public set waitForDeployment(value: boolean | cdktf.IResolvable) {
    this._waitForDeployment = value;
  }
  public resetWaitForDeployment() {
    this._waitForDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeploymentInput() {
    return this._waitForDeployment;
  }

  // compute_resources - computed: false, optional: true, required: false
  private _computeResources = new AwsBatchComputeEnvironmentComputeResourcesOutputReference(this, "compute_resources");
  public get computeResources() {
    return this._computeResources;
  }
  public putComputeResources(value: AwsBatchComputeEnvironmentComputeResources) {
    this._computeResources.internalValue = value;
  }
  public resetComputeResources() {
    this._computeResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourcesInput() {
    return this._computeResources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBatchComputeEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBatchComputeEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      type: cdktf.stringToTerraform(this._type),
      wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
      compute_resources: awsBatchComputeEnvironmentComputeResourcesToTerraform(this._computeResources.internalValue),
      timeouts: awsBatchComputeEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_role: {
        value: cdktf.stringToHclTerraform(this._serviceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_deployment: {
        value: cdktf.booleanToHclTerraform(this._waitForDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_resources: {
        value: awsBatchComputeEnvironmentComputeResourcesToHclTerraform(this._computeResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBatchComputeEnvironmentComputeResourcesList",
      },
      timeouts: {
        value: awsBatchComputeEnvironmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBatchComputeEnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
