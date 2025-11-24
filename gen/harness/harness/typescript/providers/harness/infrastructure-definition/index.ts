// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfrastructureDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the application the infrastructure definition belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#app_id InfrastructureDefinition#app_id}
  */
  readonly appId: string;
  /**
  * The type of the cloud provider to connect with. Valid options are AWS, AZURE, CUSTOM, PHYSICAL_DATA_CENTER, KUBERNETES_CLUSTER, PCF, SPOT_INST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_type InfrastructureDefinition#cloud_provider_type}
  */
  readonly cloudProviderType: string;
  /**
  * The URI of the deployment template to use. Only used if deployment_type is `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#deployment_template_uri InfrastructureDefinition#deployment_template_uri}
  */
  readonly deploymentTemplateUri?: string;
  /**
  * The type of the deployment to use. Valid options are AMI, AWS_CODEDEPLOY, AWS_LAMBDA, AZURE_VMSS, AZURE_WEBAPP, CUSTOM, ECS, HELM, KUBERNETES, PCF, SSH, WINRM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#deployment_type InfrastructureDefinition#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * The id of the environment the infrastructure definition belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#env_id InfrastructureDefinition#env_id}
  */
  readonly envId: string;
  /**
  * The name of the infrastructure definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#name InfrastructureDefinition#name}
  */
  readonly name: string;
  /**
  * The name of the infrastructure provisioner to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#provisioner_name InfrastructureDefinition#provisioner_name}
  */
  readonly provisionerName?: string;
  /**
  * The list of service names to scope this infrastructure definition to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#scoped_services InfrastructureDefinition#scoped_services}
  */
  readonly scopedServices?: string[];
  /**
  * aws_ami block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#aws_ami InfrastructureDefinition#aws_ami}
  */
  readonly awsAmi?: InfrastructureDefinitionAwsAmi;
  /**
  * aws_ecs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#aws_ecs InfrastructureDefinition#aws_ecs}
  */
  readonly awsEcs?: InfrastructureDefinitionAwsEcs;
  /**
  * aws_lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#aws_lambda InfrastructureDefinition#aws_lambda}
  */
  readonly awsLambda?: InfrastructureDefinitionAwsLambda;
  /**
  * aws_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#aws_ssh InfrastructureDefinition#aws_ssh}
  */
  readonly awsSsh?: InfrastructureDefinitionAwsSsh;
  /**
  * aws_winrm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#aws_winrm InfrastructureDefinition#aws_winrm}
  */
  readonly awsWinrm?: InfrastructureDefinitionAwsWinrm;
  /**
  * azure_vmss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#azure_vmss InfrastructureDefinition#azure_vmss}
  */
  readonly azureVmss?: InfrastructureDefinitionAzureVmss;
  /**
  * azure_webapp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#azure_webapp InfrastructureDefinition#azure_webapp}
  */
  readonly azureWebapp?: InfrastructureDefinitionAzureWebapp;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#custom InfrastructureDefinition#custom}
  */
  readonly custom?: InfrastructureDefinitionCustom;
  /**
  * datacenter_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#datacenter_ssh InfrastructureDefinition#datacenter_ssh}
  */
  readonly datacenterSsh?: InfrastructureDefinitionDatacenterSsh;
  /**
  * datacenter_winrm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#datacenter_winrm InfrastructureDefinition#datacenter_winrm}
  */
  readonly datacenterWinrm?: InfrastructureDefinitionDatacenterWinrm;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#kubernetes InfrastructureDefinition#kubernetes}
  */
  readonly kubernetes?: InfrastructureDefinitionKubernetes;
  /**
  * kubernetes_gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#kubernetes_gcp InfrastructureDefinition#kubernetes_gcp}
  */
  readonly kubernetesGcp?: InfrastructureDefinitionKubernetesGcp;
  /**
  * tanzu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#tanzu InfrastructureDefinition#tanzu}
  */
  readonly tanzu?: InfrastructureDefinitionTanzu;
}
export interface InfrastructureDefinitionAwsAmi {
  /**
  * The ami deployment type to use. Valid options are AWS_ASG, SPOTINST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#ami_deployment_type InfrastructureDefinition#ami_deployment_type}
  */
  readonly amiDeploymentType: string;
  /**
  * Flag to indicate whether the autoscaling group identifies the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#asg_identifies_workload InfrastructureDefinition#asg_identifies_workload}
  */
  readonly asgIdentifiesWorkload?: boolean | cdktf.IResolvable;
  /**
  * The name of the autoscaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#autoscaling_group_name InfrastructureDefinition#autoscaling_group_name}
  */
  readonly autoscalingGroupName?: string;
  /**
  * The classic load balancers to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#classic_loadbalancers InfrastructureDefinition#classic_loadbalancers}
  */
  readonly classicLoadbalancers?: string[];
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The naming convention to use for the hostname. Defaults to ${host.ec2Instance.privateDnsName.split('\.')[0]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#hostname_convention InfrastructureDefinition#hostname_convention}
  */
  readonly hostnameConvention?: string;
  /**
  * The region to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#region InfrastructureDefinition#region}
  */
  readonly region: string;
  /**
  * The name of the SpotInst cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#spotinst_cloud_provider_name InfrastructureDefinition#spotinst_cloud_provider_name}
  */
  readonly spotinstCloudProviderName?: string;
  /**
  * The SpotInst configuration to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#spotinst_config_json InfrastructureDefinition#spotinst_config_json}
  */
  readonly spotinstConfigJson?: string;
  /**
  * The staging classic load balancers to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#stage_classic_loadbalancers InfrastructureDefinition#stage_classic_loadbalancers}
  */
  readonly stageClassicLoadbalancers?: string[];
  /**
  * The staging classic load balancers to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#stage_target_group_arns InfrastructureDefinition#stage_target_group_arns}
  */
  readonly stageTargetGroupArns?: string[];
  /**
  * The ARN's of the target groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#target_group_arns InfrastructureDefinition#target_group_arns}
  */
  readonly targetGroupArns?: string[];
  /**
  * Flag to enable traffic shifting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#use_traffic_shift InfrastructureDefinition#use_traffic_shift}
  */
  readonly useTrafficShift?: boolean | cdktf.IResolvable;
}

export function infrastructureDefinitionAwsAmiToTerraform(struct?: InfrastructureDefinitionAwsAmiOutputReference | InfrastructureDefinitionAwsAmi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_deployment_type: cdktf.stringToTerraform(struct!.amiDeploymentType),
    asg_identifies_workload: cdktf.booleanToTerraform(struct!.asgIdentifiesWorkload),
    autoscaling_group_name: cdktf.stringToTerraform(struct!.autoscalingGroupName),
    classic_loadbalancers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classicLoadbalancers),
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    hostname_convention: cdktf.stringToTerraform(struct!.hostnameConvention),
    region: cdktf.stringToTerraform(struct!.region),
    spotinst_cloud_provider_name: cdktf.stringToTerraform(struct!.spotinstCloudProviderName),
    spotinst_config_json: cdktf.stringToTerraform(struct!.spotinstConfigJson),
    stage_classic_loadbalancers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stageClassicLoadbalancers),
    stage_target_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stageTargetGroupArns),
    target_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetGroupArns),
    use_traffic_shift: cdktf.booleanToTerraform(struct!.useTrafficShift),
  }
}


export function infrastructureDefinitionAwsAmiToHclTerraform(struct?: InfrastructureDefinitionAwsAmiOutputReference | InfrastructureDefinitionAwsAmi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami_deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.amiDeploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asg_identifies_workload: {
      value: cdktf.booleanToHclTerraform(struct!.asgIdentifiesWorkload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscaling_group_name: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classic_loadbalancers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classicLoadbalancers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_convention: {
      value: cdktf.stringToHclTerraform(struct!.hostnameConvention),
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
    spotinst_cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.spotinstCloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spotinst_config_json: {
      value: cdktf.stringToHclTerraform(struct!.spotinstConfigJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_classic_loadbalancers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stageClassicLoadbalancers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    stage_target_group_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stageTargetGroupArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target_group_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetGroupArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    use_traffic_shift: {
      value: cdktf.booleanToHclTerraform(struct!.useTrafficShift),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionAwsAmiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionAwsAmi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiDeploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiDeploymentType = this._amiDeploymentType;
    }
    if (this._asgIdentifiesWorkload !== undefined) {
      hasAnyValues = true;
      internalValueResult.asgIdentifiesWorkload = this._asgIdentifiesWorkload;
    }
    if (this._autoscalingGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingGroupName = this._autoscalingGroupName;
    }
    if (this._classicLoadbalancers !== undefined) {
      hasAnyValues = true;
      internalValueResult.classicLoadbalancers = this._classicLoadbalancers;
    }
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._hostnameConvention !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameConvention = this._hostnameConvention;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._spotinstCloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotinstCloudProviderName = this._spotinstCloudProviderName;
    }
    if (this._spotinstConfigJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotinstConfigJson = this._spotinstConfigJson;
    }
    if (this._stageClassicLoadbalancers !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageClassicLoadbalancers = this._stageClassicLoadbalancers;
    }
    if (this._stageTargetGroupArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageTargetGroupArns = this._stageTargetGroupArns;
    }
    if (this._targetGroupArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArns = this._targetGroupArns;
    }
    if (this._useTrafficShift !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTrafficShift = this._useTrafficShift;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionAwsAmi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amiDeploymentType = undefined;
      this._asgIdentifiesWorkload = undefined;
      this._autoscalingGroupName = undefined;
      this._classicLoadbalancers = undefined;
      this._cloudProviderName = undefined;
      this._hostnameConvention = undefined;
      this._region = undefined;
      this._spotinstCloudProviderName = undefined;
      this._spotinstConfigJson = undefined;
      this._stageClassicLoadbalancers = undefined;
      this._stageTargetGroupArns = undefined;
      this._targetGroupArns = undefined;
      this._useTrafficShift = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amiDeploymentType = value.amiDeploymentType;
      this._asgIdentifiesWorkload = value.asgIdentifiesWorkload;
      this._autoscalingGroupName = value.autoscalingGroupName;
      this._classicLoadbalancers = value.classicLoadbalancers;
      this._cloudProviderName = value.cloudProviderName;
      this._hostnameConvention = value.hostnameConvention;
      this._region = value.region;
      this._spotinstCloudProviderName = value.spotinstCloudProviderName;
      this._spotinstConfigJson = value.spotinstConfigJson;
      this._stageClassicLoadbalancers = value.stageClassicLoadbalancers;
      this._stageTargetGroupArns = value.stageTargetGroupArns;
      this._targetGroupArns = value.targetGroupArns;
      this._useTrafficShift = value.useTrafficShift;
    }
  }

  // ami_deployment_type - computed: false, optional: false, required: true
  private _amiDeploymentType?: string; 
  public get amiDeploymentType() {
    return this.getStringAttribute('ami_deployment_type');
  }
  public set amiDeploymentType(value: string) {
    this._amiDeploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amiDeploymentTypeInput() {
    return this._amiDeploymentType;
  }

  // asg_identifies_workload - computed: false, optional: true, required: false
  private _asgIdentifiesWorkload?: boolean | cdktf.IResolvable; 
  public get asgIdentifiesWorkload() {
    return this.getBooleanAttribute('asg_identifies_workload');
  }
  public set asgIdentifiesWorkload(value: boolean | cdktf.IResolvable) {
    this._asgIdentifiesWorkload = value;
  }
  public resetAsgIdentifiesWorkload() {
    this._asgIdentifiesWorkload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgIdentifiesWorkloadInput() {
    return this._asgIdentifiesWorkload;
  }

  // autoscaling_group_name - computed: false, optional: true, required: false
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  public resetAutoscalingGroupName() {
    this._autoscalingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName;
  }

  // classic_loadbalancers - computed: false, optional: true, required: false
  private _classicLoadbalancers?: string[]; 
  public get classicLoadbalancers() {
    return cdktf.Fn.tolist(this.getListAttribute('classic_loadbalancers'));
  }
  public set classicLoadbalancers(value: string[]) {
    this._classicLoadbalancers = value;
  }
  public resetClassicLoadbalancers() {
    this._classicLoadbalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicLoadbalancersInput() {
    return this._classicLoadbalancers;
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // hostname_convention - computed: false, optional: true, required: false
  private _hostnameConvention?: string; 
  public get hostnameConvention() {
    return this.getStringAttribute('hostname_convention');
  }
  public set hostnameConvention(value: string) {
    this._hostnameConvention = value;
  }
  public resetHostnameConvention() {
    this._hostnameConvention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameConventionInput() {
    return this._hostnameConvention;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // spotinst_cloud_provider_name - computed: false, optional: true, required: false
  private _spotinstCloudProviderName?: string; 
  public get spotinstCloudProviderName() {
    return this.getStringAttribute('spotinst_cloud_provider_name');
  }
  public set spotinstCloudProviderName(value: string) {
    this._spotinstCloudProviderName = value;
  }
  public resetSpotinstCloudProviderName() {
    this._spotinstCloudProviderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotinstCloudProviderNameInput() {
    return this._spotinstCloudProviderName;
  }

  // spotinst_config_json - computed: false, optional: true, required: false
  private _spotinstConfigJson?: string; 
  public get spotinstConfigJson() {
    return this.getStringAttribute('spotinst_config_json');
  }
  public set spotinstConfigJson(value: string) {
    this._spotinstConfigJson = value;
  }
  public resetSpotinstConfigJson() {
    this._spotinstConfigJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotinstConfigJsonInput() {
    return this._spotinstConfigJson;
  }

  // stage_classic_loadbalancers - computed: false, optional: true, required: false
  private _stageClassicLoadbalancers?: string[]; 
  public get stageClassicLoadbalancers() {
    return cdktf.Fn.tolist(this.getListAttribute('stage_classic_loadbalancers'));
  }
  public set stageClassicLoadbalancers(value: string[]) {
    this._stageClassicLoadbalancers = value;
  }
  public resetStageClassicLoadbalancers() {
    this._stageClassicLoadbalancers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageClassicLoadbalancersInput() {
    return this._stageClassicLoadbalancers;
  }

  // stage_target_group_arns - computed: false, optional: true, required: false
  private _stageTargetGroupArns?: string[]; 
  public get stageTargetGroupArns() {
    return cdktf.Fn.tolist(this.getListAttribute('stage_target_group_arns'));
  }
  public set stageTargetGroupArns(value: string[]) {
    this._stageTargetGroupArns = value;
  }
  public resetStageTargetGroupArns() {
    this._stageTargetGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageTargetGroupArnsInput() {
    return this._stageTargetGroupArns;
  }

  // target_group_arns - computed: false, optional: true, required: false
  private _targetGroupArns?: string[]; 
  public get targetGroupArns() {
    return cdktf.Fn.tolist(this.getListAttribute('target_group_arns'));
  }
  public set targetGroupArns(value: string[]) {
    this._targetGroupArns = value;
  }
  public resetTargetGroupArns() {
    this._targetGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnsInput() {
    return this._targetGroupArns;
  }

  // use_traffic_shift - computed: false, optional: true, required: false
  private _useTrafficShift?: boolean | cdktf.IResolvable; 
  public get useTrafficShift() {
    return this.getBooleanAttribute('use_traffic_shift');
  }
  public set useTrafficShift(value: boolean | cdktf.IResolvable) {
    this._useTrafficShift = value;
  }
  public resetUseTrafficShift() {
    this._useTrafficShift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTrafficShiftInput() {
    return this._useTrafficShift;
  }
}
export interface InfrastructureDefinitionAwsEcs {
  /**
  * Flag to assign a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#assign_public_ip InfrastructureDefinition#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The name of the ECS cluster to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cluster_name InfrastructureDefinition#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The ARN of the role to use for execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#execution_role InfrastructureDefinition#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The type of launch configuration to use. Valid options are FARGATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#launch_type InfrastructureDefinition#launch_type}
  */
  readonly launchType: string;
  /**
  * The region to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#region InfrastructureDefinition#region}
  */
  readonly region: string;
  /**
  * The security group ids to apply to the ecs service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#security_group_ids InfrastructureDefinition#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The subnet ids to apply to the ecs service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#subnet_ids InfrastructureDefinition#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * The VPC ids to use when selecting the instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#vpc_id InfrastructureDefinition#vpc_id}
  */
  readonly vpcId?: string;
}

export function infrastructureDefinitionAwsEcsToTerraform(struct?: InfrastructureDefinitionAwsEcsOutputReference | InfrastructureDefinitionAwsEcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    launch_type: cdktf.stringToTerraform(struct!.launchType),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function infrastructureDefinitionAwsEcsToHclTerraform(struct?: InfrastructureDefinitionAwsEcsOutputReference | InfrastructureDefinitionAwsEcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_type: {
      value: cdktf.stringToHclTerraform(struct!.launchType),
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
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionAwsEcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionAwsEcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._launchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchType = this._launchType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionAwsEcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._cloudProviderName = undefined;
      this._clusterName = undefined;
      this._executionRole = undefined;
      this._launchType = undefined;
      this._region = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._cloudProviderName = value.cloudProviderName;
      this._clusterName = value.clusterName;
      this._executionRole = value.executionRole;
      this._launchType = value.launchType;
      this._region = value.region;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // execution_role - computed: false, optional: true, required: false
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  public resetExecutionRole() {
    this._executionRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // launch_type - computed: false, optional: false, required: true
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface InfrastructureDefinitionAwsLambda {
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The IAM role to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#iam_role InfrastructureDefinition#iam_role}
  */
  readonly iamRole?: string;
  /**
  * The region to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#region InfrastructureDefinition#region}
  */
  readonly region: string;
  /**
  * The security group ids to apply to the ecs service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#security_group_ids InfrastructureDefinition#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The subnet ids to apply to the ecs service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#subnet_ids InfrastructureDefinition#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * The VPC ids to use when selecting the instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#vpc_id InfrastructureDefinition#vpc_id}
  */
  readonly vpcId?: string;
}

export function infrastructureDefinitionAwsLambdaToTerraform(struct?: InfrastructureDefinitionAwsLambdaOutputReference | InfrastructureDefinitionAwsLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function infrastructureDefinitionAwsLambdaToHclTerraform(struct?: InfrastructureDefinitionAwsLambdaOutputReference | InfrastructureDefinitionAwsLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role: {
      value: cdktf.stringToHclTerraform(struct!.iamRole),
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
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionAwsLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionAwsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionAwsLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProviderName = undefined;
      this._iamRole = undefined;
      this._region = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProviderName = value.cloudProviderName;
      this._iamRole = value.iamRole;
      this._region = value.region;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // iam_role - computed: false, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface InfrastructureDefinitionAwsSshTag {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#key InfrastructureDefinition#key}
  */
  readonly key: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#value InfrastructureDefinition#value}
  */
  readonly value: string;
}

export function infrastructureDefinitionAwsSshTagToTerraform(struct?: InfrastructureDefinitionAwsSshTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function infrastructureDefinitionAwsSshTagToHclTerraform(struct?: InfrastructureDefinitionAwsSshTag | cdktf.IResolvable): any {
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

export class InfrastructureDefinitionAwsSshTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructureDefinitionAwsSshTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InfrastructureDefinitionAwsSshTag | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class InfrastructureDefinitionAwsSshTagList extends cdktf.ComplexList {
  public internalValue? : InfrastructureDefinitionAwsSshTag[] | cdktf.IResolvable

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
  public get(index: number): InfrastructureDefinitionAwsSshTagOutputReference {
    return new InfrastructureDefinitionAwsSshTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructureDefinitionAwsSsh {
  /**
  * The name of the autoscaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#autoscaling_group_name InfrastructureDefinition#autoscaling_group_name}
  */
  readonly autoscalingGroupName?: string;
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The desired capacity of the auto scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#desired_capacity InfrastructureDefinition#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * The name of the host connection attributes to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#host_connection_attrs_name InfrastructureDefinition#host_connection_attrs_name}
  */
  readonly hostConnectionAttrsName?: string;
  /**
  * The type of host connection to use. Valid options are PRIVATE_DNS, PUBLIC_DNS, PRIVATE_IP, PUBLIC_IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#host_connection_type InfrastructureDefinition#host_connection_type}
  */
  readonly hostConnectionType: string;
  /**
  * The naming convention to use for the hostname. Defaults to ${host.ec2Instance.privateDnsName.split('\.')[0]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#hostname_convention InfrastructureDefinition#hostname_convention}
  */
  readonly hostnameConvention?: string;
  /**
  * The name of the load balancer to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#loadbalancer_name InfrastructureDefinition#loadbalancer_name}
  */
  readonly loadbalancerName?: string;
  /**
  * The region to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#region InfrastructureDefinition#region}
  */
  readonly region: string;
  /**
  * The VPC ids to use when selecting the instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#vpc_ids InfrastructureDefinition#vpc_ids}
  */
  readonly vpcIds?: string[];
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#tag InfrastructureDefinition#tag}
  */
  readonly tag?: InfrastructureDefinitionAwsSshTag[] | cdktf.IResolvable;
}

export function infrastructureDefinitionAwsSshToTerraform(struct?: InfrastructureDefinitionAwsSshOutputReference | InfrastructureDefinitionAwsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_group_name: cdktf.stringToTerraform(struct!.autoscalingGroupName),
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    desired_capacity: cdktf.numberToTerraform(struct!.desiredCapacity),
    host_connection_attrs_name: cdktf.stringToTerraform(struct!.hostConnectionAttrsName),
    host_connection_type: cdktf.stringToTerraform(struct!.hostConnectionType),
    hostname_convention: cdktf.stringToTerraform(struct!.hostnameConvention),
    loadbalancer_name: cdktf.stringToTerraform(struct!.loadbalancerName),
    region: cdktf.stringToTerraform(struct!.region),
    vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcIds),
    tag: cdktf.listMapper(infrastructureDefinitionAwsSshTagToTerraform, true)(struct!.tag),
  }
}


export function infrastructureDefinitionAwsSshToHclTerraform(struct?: InfrastructureDefinitionAwsSshOutputReference | InfrastructureDefinitionAwsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_group_name: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_capacity: {
      value: cdktf.numberToHclTerraform(struct!.desiredCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_connection_attrs_name: {
      value: cdktf.stringToHclTerraform(struct!.hostConnectionAttrsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_connection_type: {
      value: cdktf.stringToHclTerraform(struct!.hostConnectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_convention: {
      value: cdktf.stringToHclTerraform(struct!.hostnameConvention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loadbalancer_name: {
      value: cdktf.stringToHclTerraform(struct!.loadbalancerName),
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
    vpc_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.listMapperHcl(infrastructureDefinitionAwsSshTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "InfrastructureDefinitionAwsSshTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionAwsSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionAwsSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingGroupName = this._autoscalingGroupName;
    }
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._desiredCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredCapacity = this._desiredCapacity;
    }
    if (this._hostConnectionAttrsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConnectionAttrsName = this._hostConnectionAttrsName;
    }
    if (this._hostConnectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConnectionType = this._hostConnectionType;
    }
    if (this._hostnameConvention !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameConvention = this._hostnameConvention;
    }
    if (this._loadbalancerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancerName = this._loadbalancerName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._vpcIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIds = this._vpcIds;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionAwsSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingGroupName = undefined;
      this._cloudProviderName = undefined;
      this._desiredCapacity = undefined;
      this._hostConnectionAttrsName = undefined;
      this._hostConnectionType = undefined;
      this._hostnameConvention = undefined;
      this._loadbalancerName = undefined;
      this._region = undefined;
      this._vpcIds = undefined;
      this._tag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingGroupName = value.autoscalingGroupName;
      this._cloudProviderName = value.cloudProviderName;
      this._desiredCapacity = value.desiredCapacity;
      this._hostConnectionAttrsName = value.hostConnectionAttrsName;
      this._hostConnectionType = value.hostConnectionType;
      this._hostnameConvention = value.hostnameConvention;
      this._loadbalancerName = value.loadbalancerName;
      this._region = value.region;
      this._vpcIds = value.vpcIds;
      this._tag.internalValue = value.tag;
    }
  }

  // autoscaling_group_name - computed: false, optional: true, required: false
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  public resetAutoscalingGroupName() {
    this._autoscalingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName;
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // host_connection_attrs_name - computed: false, optional: true, required: false
  private _hostConnectionAttrsName?: string; 
  public get hostConnectionAttrsName() {
    return this.getStringAttribute('host_connection_attrs_name');
  }
  public set hostConnectionAttrsName(value: string) {
    this._hostConnectionAttrsName = value;
  }
  public resetHostConnectionAttrsName() {
    this._hostConnectionAttrsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConnectionAttrsNameInput() {
    return this._hostConnectionAttrsName;
  }

  // host_connection_type - computed: false, optional: false, required: true
  private _hostConnectionType?: string; 
  public get hostConnectionType() {
    return this.getStringAttribute('host_connection_type');
  }
  public set hostConnectionType(value: string) {
    this._hostConnectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConnectionTypeInput() {
    return this._hostConnectionType;
  }

  // hostname_convention - computed: false, optional: true, required: false
  private _hostnameConvention?: string; 
  public get hostnameConvention() {
    return this.getStringAttribute('hostname_convention');
  }
  public set hostnameConvention(value: string) {
    this._hostnameConvention = value;
  }
  public resetHostnameConvention() {
    this._hostnameConvention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameConventionInput() {
    return this._hostnameConvention;
  }

  // loadbalancer_name - computed: false, optional: true, required: false
  private _loadbalancerName?: string; 
  public get loadbalancerName() {
    return this.getStringAttribute('loadbalancer_name');
  }
  public set loadbalancerName(value: string) {
    this._loadbalancerName = value;
  }
  public resetLoadbalancerName() {
    this._loadbalancerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerNameInput() {
    return this._loadbalancerName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // vpc_ids - computed: false, optional: true, required: false
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  public resetVpcIds() {
    this._vpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new InfrastructureDefinitionAwsSshTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: InfrastructureDefinitionAwsSshTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}
export interface InfrastructureDefinitionAwsWinrm {
  /**
  * The name of the autoscaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#autoscaling_group_name InfrastructureDefinition#autoscaling_group_name}
  */
  readonly autoscalingGroupName: string;
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The desired capacity of the autoscaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#desired_capacity InfrastructureDefinition#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * The name of the host connection attributes to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#host_connection_attrs_name InfrastructureDefinition#host_connection_attrs_name}
  */
  readonly hostConnectionAttrsName: string;
  /**
  * The type of host connection to use. Valid options are PRIVATE_DNS, PUBLIC_DNS, PRIVATE_IP, PUBLIC_IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#host_connection_type InfrastructureDefinition#host_connection_type}
  */
  readonly hostConnectionType: string;
  /**
  * The naming convention to use for the hostname. Defaults to ${host.ec2Instance.privateDnsName.split('\.')[0]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#hostname_convention InfrastructureDefinition#hostname_convention}
  */
  readonly hostnameConvention?: string;
  /**
  * The name of the load balancer to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#loadbalancer_name InfrastructureDefinition#loadbalancer_name}
  */
  readonly loadbalancerName?: string;
  /**
  * The region to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#region InfrastructureDefinition#region}
  */
  readonly region: string;
}

export function infrastructureDefinitionAwsWinrmToTerraform(struct?: InfrastructureDefinitionAwsWinrmOutputReference | InfrastructureDefinitionAwsWinrm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_group_name: cdktf.stringToTerraform(struct!.autoscalingGroupName),
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    desired_capacity: cdktf.numberToTerraform(struct!.desiredCapacity),
    host_connection_attrs_name: cdktf.stringToTerraform(struct!.hostConnectionAttrsName),
    host_connection_type: cdktf.stringToTerraform(struct!.hostConnectionType),
    hostname_convention: cdktf.stringToTerraform(struct!.hostnameConvention),
    loadbalancer_name: cdktf.stringToTerraform(struct!.loadbalancerName),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function infrastructureDefinitionAwsWinrmToHclTerraform(struct?: InfrastructureDefinitionAwsWinrmOutputReference | InfrastructureDefinitionAwsWinrm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_group_name: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_capacity: {
      value: cdktf.numberToHclTerraform(struct!.desiredCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_connection_attrs_name: {
      value: cdktf.stringToHclTerraform(struct!.hostConnectionAttrsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_connection_type: {
      value: cdktf.stringToHclTerraform(struct!.hostConnectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_convention: {
      value: cdktf.stringToHclTerraform(struct!.hostnameConvention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loadbalancer_name: {
      value: cdktf.stringToHclTerraform(struct!.loadbalancerName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionAwsWinrmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionAwsWinrm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingGroupName = this._autoscalingGroupName;
    }
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._desiredCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredCapacity = this._desiredCapacity;
    }
    if (this._hostConnectionAttrsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConnectionAttrsName = this._hostConnectionAttrsName;
    }
    if (this._hostConnectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConnectionType = this._hostConnectionType;
    }
    if (this._hostnameConvention !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameConvention = this._hostnameConvention;
    }
    if (this._loadbalancerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancerName = this._loadbalancerName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionAwsWinrm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingGroupName = undefined;
      this._cloudProviderName = undefined;
      this._desiredCapacity = undefined;
      this._hostConnectionAttrsName = undefined;
      this._hostConnectionType = undefined;
      this._hostnameConvention = undefined;
      this._loadbalancerName = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingGroupName = value.autoscalingGroupName;
      this._cloudProviderName = value.cloudProviderName;
      this._desiredCapacity = value.desiredCapacity;
      this._hostConnectionAttrsName = value.hostConnectionAttrsName;
      this._hostConnectionType = value.hostConnectionType;
      this._hostnameConvention = value.hostnameConvention;
      this._loadbalancerName = value.loadbalancerName;
      this._region = value.region;
    }
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName;
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // host_connection_attrs_name - computed: false, optional: false, required: true
  private _hostConnectionAttrsName?: string; 
  public get hostConnectionAttrsName() {
    return this.getStringAttribute('host_connection_attrs_name');
  }
  public set hostConnectionAttrsName(value: string) {
    this._hostConnectionAttrsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConnectionAttrsNameInput() {
    return this._hostConnectionAttrsName;
  }

  // host_connection_type - computed: false, optional: false, required: true
  private _hostConnectionType?: string; 
  public get hostConnectionType() {
    return this.getStringAttribute('host_connection_type');
  }
  public set hostConnectionType(value: string) {
    this._hostConnectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConnectionTypeInput() {
    return this._hostConnectionType;
  }

  // hostname_convention - computed: false, optional: true, required: false
  private _hostnameConvention?: string; 
  public get hostnameConvention() {
    return this.getStringAttribute('hostname_convention');
  }
  public set hostnameConvention(value: string) {
    this._hostnameConvention = value;
  }
  public resetHostnameConvention() {
    this._hostnameConvention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameConventionInput() {
    return this._hostnameConvention;
  }

  // loadbalancer_name - computed: false, optional: true, required: false
  private _loadbalancerName?: string; 
  public get loadbalancerName() {
    return this.getStringAttribute('loadbalancer_name');
  }
  public set loadbalancerName(value: string) {
    this._loadbalancerName = value;
  }
  public resetLoadbalancerName() {
    this._loadbalancerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerNameInput() {
    return this._loadbalancerName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface InfrastructureDefinitionAzureVmss {
  /**
  * The type of authentication to use. Valid options are SSH_PUBLIC_KEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#auth_type InfrastructureDefinition#auth_type}
  */
  readonly authType: string;
  /**
  * Base name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#base_name InfrastructureDefinition#base_name}
  */
  readonly baseName: string;
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The type of deployment. Valid options are NATIVE_VMSS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#deployment_type InfrastructureDefinition#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * The name of the host connection attributes to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#host_connection_attrs_name InfrastructureDefinition#host_connection_attrs_name}
  */
  readonly hostConnectionAttrsName?: string;
  /**
  * The name of the resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#resource_group_name InfrastructureDefinition#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * The unique id of the azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#subscription_id InfrastructureDefinition#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The username to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#username InfrastructureDefinition#username}
  */
  readonly username: string;
}

export function infrastructureDefinitionAzureVmssToTerraform(struct?: InfrastructureDefinitionAzureVmssOutputReference | InfrastructureDefinitionAzureVmss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    base_name: cdktf.stringToTerraform(struct!.baseName),
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    host_connection_attrs_name: cdktf.stringToTerraform(struct!.hostConnectionAttrsName),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function infrastructureDefinitionAzureVmssToHclTerraform(struct?: InfrastructureDefinitionAzureVmssOutputReference | InfrastructureDefinitionAzureVmss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_name: {
      value: cdktf.stringToHclTerraform(struct!.baseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_connection_attrs_name: {
      value: cdktf.stringToHclTerraform(struct!.hostConnectionAttrsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionAzureVmssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionAzureVmss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._baseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseName = this._baseName;
    }
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._hostConnectionAttrsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConnectionAttrsName = this._hostConnectionAttrsName;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionAzureVmss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._baseName = undefined;
      this._cloudProviderName = undefined;
      this._deploymentType = undefined;
      this._hostConnectionAttrsName = undefined;
      this._resourceGroupName = undefined;
      this._subscriptionId = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._baseName = value.baseName;
      this._cloudProviderName = value.cloudProviderName;
      this._deploymentType = value.deploymentType;
      this._hostConnectionAttrsName = value.hostConnectionAttrsName;
      this._resourceGroupName = value.resourceGroupName;
      this._subscriptionId = value.subscriptionId;
      this._username = value.username;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // base_name - computed: false, optional: false, required: true
  private _baseName?: string; 
  public get baseName() {
    return this.getStringAttribute('base_name');
  }
  public set baseName(value: string) {
    this._baseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseNameInput() {
    return this._baseName;
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // host_connection_attrs_name - computed: false, optional: true, required: false
  private _hostConnectionAttrsName?: string; 
  public get hostConnectionAttrsName() {
    return this.getStringAttribute('host_connection_attrs_name');
  }
  public set hostConnectionAttrsName(value: string) {
    this._hostConnectionAttrsName = value;
  }
  public resetHostConnectionAttrsName() {
    this._hostConnectionAttrsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConnectionAttrsNameInput() {
    return this._hostConnectionAttrsName;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface InfrastructureDefinitionAzureWebapp {
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The name of the resource group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#resource_group InfrastructureDefinition#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * The unique id of the azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#subscription_id InfrastructureDefinition#subscription_id}
  */
  readonly subscriptionId: string;
}

export function infrastructureDefinitionAzureWebappToTerraform(struct?: InfrastructureDefinitionAzureWebappOutputReference | InfrastructureDefinitionAzureWebapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function infrastructureDefinitionAzureWebappToHclTerraform(struct?: InfrastructureDefinitionAzureWebappOutputReference | InfrastructureDefinitionAzureWebapp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionAzureWebappOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionAzureWebapp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionAzureWebapp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProviderName = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProviderName = value.cloudProviderName;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface InfrastructureDefinitionCustomVariable {
  /**
  * Name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#name InfrastructureDefinition#name}
  */
  readonly name: string;
  /**
  * Value of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#value InfrastructureDefinition#value}
  */
  readonly value: string;
}

export function infrastructureDefinitionCustomVariableToTerraform(struct?: InfrastructureDefinitionCustomVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function infrastructureDefinitionCustomVariableToHclTerraform(struct?: InfrastructureDefinitionCustomVariable | cdktf.IResolvable): any {
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

export class InfrastructureDefinitionCustomVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructureDefinitionCustomVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionCustomVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class InfrastructureDefinitionCustomVariableList extends cdktf.ComplexList {
  public internalValue? : InfrastructureDefinitionCustomVariable[] | cdktf.IResolvable

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
  public get(index: number): InfrastructureDefinitionCustomVariableOutputReference {
    return new InfrastructureDefinitionCustomVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructureDefinitionCustom {
  /**
  * The template version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#deployment_type_template_version InfrastructureDefinition#deployment_type_template_version}
  */
  readonly deploymentTypeTemplateVersion: string;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#variable InfrastructureDefinition#variable}
  */
  readonly variable?: InfrastructureDefinitionCustomVariable[] | cdktf.IResolvable;
}

export function infrastructureDefinitionCustomToTerraform(struct?: InfrastructureDefinitionCustomOutputReference | InfrastructureDefinitionCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_type_template_version: cdktf.stringToTerraform(struct!.deploymentTypeTemplateVersion),
    variable: cdktf.listMapper(infrastructureDefinitionCustomVariableToTerraform, true)(struct!.variable),
  }
}


export function infrastructureDefinitionCustomToHclTerraform(struct?: InfrastructureDefinitionCustomOutputReference | InfrastructureDefinitionCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_type_template_version: {
      value: cdktf.stringToHclTerraform(struct!.deploymentTypeTemplateVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.listMapperHcl(infrastructureDefinitionCustomVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "set",
      storageClassType: "InfrastructureDefinitionCustomVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentTypeTemplateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentTypeTemplateVersion = this._deploymentTypeTemplateVersion;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deploymentTypeTemplateVersion = undefined;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deploymentTypeTemplateVersion = value.deploymentTypeTemplateVersion;
      this._variable.internalValue = value.variable;
    }
  }

  // deployment_type_template_version - computed: false, optional: false, required: true
  private _deploymentTypeTemplateVersion?: string; 
  public get deploymentTypeTemplateVersion() {
    return this.getStringAttribute('deployment_type_template_version');
  }
  public set deploymentTypeTemplateVersion(value: string) {
    this._deploymentTypeTemplateVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeTemplateVersionInput() {
    return this._deploymentTypeTemplateVersion;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new InfrastructureDefinitionCustomVariableList(this, "variable", true);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: InfrastructureDefinitionCustomVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}
export interface InfrastructureDefinitionDatacenterSsh {
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The name of the SSH connection attributes to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#host_connection_attributes_name InfrastructureDefinition#host_connection_attributes_name}
  */
  readonly hostConnectionAttributesName: string;
  /**
  * A list of hosts to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#hostnames InfrastructureDefinition#hostnames}
  */
  readonly hostnames: string[];
}

export function infrastructureDefinitionDatacenterSshToTerraform(struct?: InfrastructureDefinitionDatacenterSshOutputReference | InfrastructureDefinitionDatacenterSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    host_connection_attributes_name: cdktf.stringToTerraform(struct!.hostConnectionAttributesName),
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
  }
}


export function infrastructureDefinitionDatacenterSshToHclTerraform(struct?: InfrastructureDefinitionDatacenterSshOutputReference | InfrastructureDefinitionDatacenterSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_connection_attributes_name: {
      value: cdktf.stringToHclTerraform(struct!.hostConnectionAttributesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionDatacenterSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionDatacenterSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._hostConnectionAttributesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConnectionAttributesName = this._hostConnectionAttributesName;
    }
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionDatacenterSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProviderName = undefined;
      this._hostConnectionAttributesName = undefined;
      this._hostnames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProviderName = value.cloudProviderName;
      this._hostConnectionAttributesName = value.hostConnectionAttributesName;
      this._hostnames = value.hostnames;
    }
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // host_connection_attributes_name - computed: false, optional: false, required: true
  private _hostConnectionAttributesName?: string; 
  public get hostConnectionAttributesName() {
    return this.getStringAttribute('host_connection_attributes_name');
  }
  public set hostConnectionAttributesName(value: string) {
    this._hostConnectionAttributesName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConnectionAttributesNameInput() {
    return this._hostConnectionAttributesName;
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames?: string[]; 
  public get hostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('hostnames'));
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }
}
export interface InfrastructureDefinitionDatacenterWinrm {
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * A list of hosts to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#hostnames InfrastructureDefinition#hostnames}
  */
  readonly hostnames: string[];
  /**
  * The name of the WinRM connection attributes to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#winrm_connection_attributes_name InfrastructureDefinition#winrm_connection_attributes_name}
  */
  readonly winrmConnectionAttributesName: string;
}

export function infrastructureDefinitionDatacenterWinrmToTerraform(struct?: InfrastructureDefinitionDatacenterWinrmOutputReference | InfrastructureDefinitionDatacenterWinrm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    winrm_connection_attributes_name: cdktf.stringToTerraform(struct!.winrmConnectionAttributesName),
  }
}


export function infrastructureDefinitionDatacenterWinrmToHclTerraform(struct?: InfrastructureDefinitionDatacenterWinrmOutputReference | InfrastructureDefinitionDatacenterWinrm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    winrm_connection_attributes_name: {
      value: cdktf.stringToHclTerraform(struct!.winrmConnectionAttributesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionDatacenterWinrmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionDatacenterWinrm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._winrmConnectionAttributesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.winrmConnectionAttributesName = this._winrmConnectionAttributesName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionDatacenterWinrm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProviderName = undefined;
      this._hostnames = undefined;
      this._winrmConnectionAttributesName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProviderName = value.cloudProviderName;
      this._hostnames = value.hostnames;
      this._winrmConnectionAttributesName = value.winrmConnectionAttributesName;
    }
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames?: string[]; 
  public get hostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('hostnames'));
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // winrm_connection_attributes_name - computed: false, optional: false, required: true
  private _winrmConnectionAttributesName?: string; 
  public get winrmConnectionAttributesName() {
    return this.getStringAttribute('winrm_connection_attributes_name');
  }
  public set winrmConnectionAttributesName(value: string) {
    this._winrmConnectionAttributesName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get winrmConnectionAttributesNameInput() {
    return this._winrmConnectionAttributesName;
  }
}
export interface InfrastructureDefinitionKubernetes {
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The namespace in Kubernetes to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#namespace InfrastructureDefinition#namespace}
  */
  readonly namespace: string;
  /**
  * The naming convention of the release. When using Helm Native the default is ${infra.kubernetes.infraId}. For standard Kubernetes manifests the default is release-${infra.kubernetes.infraId}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#release_name InfrastructureDefinition#release_name}
  */
  readonly releaseName: string;
}

export function infrastructureDefinitionKubernetesToTerraform(struct?: InfrastructureDefinitionKubernetesOutputReference | InfrastructureDefinitionKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
  }
}


export function infrastructureDefinitionKubernetesToHclTerraform(struct?: InfrastructureDefinitionKubernetesOutputReference | InfrastructureDefinitionKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
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
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProviderName = undefined;
      this._namespace = undefined;
      this._releaseName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProviderName = value.cloudProviderName;
      this._namespace = value.namespace;
      this._releaseName = value.releaseName;
    }
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
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

  // release_name - computed: false, optional: false, required: true
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }
}
export interface InfrastructureDefinitionKubernetesGcp {
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The name of the cluster being deployed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cluster_name InfrastructureDefinition#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The namespace in Kubernetes to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#namespace InfrastructureDefinition#namespace}
  */
  readonly namespace: string;
  /**
  * The naming convention of the release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#release_name InfrastructureDefinition#release_name}
  */
  readonly releaseName: string;
}

export function infrastructureDefinitionKubernetesGcpToTerraform(struct?: InfrastructureDefinitionKubernetesGcpOutputReference | InfrastructureDefinitionKubernetesGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
  }
}


export function infrastructureDefinitionKubernetesGcpToHclTerraform(struct?: InfrastructureDefinitionKubernetesGcpOutputReference | InfrastructureDefinitionKubernetesGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
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
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionKubernetesGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionKubernetesGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionKubernetesGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProviderName = undefined;
      this._clusterName = undefined;
      this._namespace = undefined;
      this._releaseName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProviderName = value.cloudProviderName;
      this._clusterName = value.clusterName;
      this._namespace = value.namespace;
      this._releaseName = value.releaseName;
    }
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // release_name - computed: false, optional: false, required: true
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }
}
export interface InfrastructureDefinitionTanzu {
  /**
  * The name of the cloud provider to connect with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#cloud_provider_name InfrastructureDefinition#cloud_provider_name}
  */
  readonly cloudProviderName: string;
  /**
  * The PCF organization to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#organization InfrastructureDefinition#organization}
  */
  readonly organization: string;
  /**
  * The PCF space to deploy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#space InfrastructureDefinition#space}
  */
  readonly space: string;
}

export function infrastructureDefinitionTanzuToTerraform(struct?: InfrastructureDefinitionTanzuOutputReference | InfrastructureDefinitionTanzu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider_name: cdktf.stringToTerraform(struct!.cloudProviderName),
    organization: cdktf.stringToTerraform(struct!.organization),
    space: cdktf.stringToTerraform(struct!.space),
  }
}


export function infrastructureDefinitionTanzuToHclTerraform(struct?: InfrastructureDefinitionTanzuOutputReference | InfrastructureDefinitionTanzu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudProviderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space: {
      value: cdktf.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureDefinitionTanzuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfrastructureDefinitionTanzu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviderName = this._cloudProviderName;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureDefinitionTanzu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProviderName = undefined;
      this._organization = undefined;
      this._space = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProviderName = value.cloudProviderName;
      this._organization = value.organization;
      this._space = value.space;
    }
  }

  // cloud_provider_name - computed: false, optional: false, required: true
  private _cloudProviderName?: string; 
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
  public set cloudProviderName(value: string) {
    this._cloudProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderNameInput() {
    return this._cloudProviderName;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition harness_infrastructure_definition}
*/
export class InfrastructureDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_infrastructure_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfrastructureDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfrastructureDefinition to import
  * @param importFromId The id of the existing InfrastructureDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfrastructureDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_infrastructure_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/infrastructure_definition harness_infrastructure_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfrastructureDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: InfrastructureDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_infrastructure_definition',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._cloudProviderType = config.cloudProviderType;
    this._deploymentTemplateUri = config.deploymentTemplateUri;
    this._deploymentType = config.deploymentType;
    this._envId = config.envId;
    this._name = config.name;
    this._provisionerName = config.provisionerName;
    this._scopedServices = config.scopedServices;
    this._awsAmi.internalValue = config.awsAmi;
    this._awsEcs.internalValue = config.awsEcs;
    this._awsLambda.internalValue = config.awsLambda;
    this._awsSsh.internalValue = config.awsSsh;
    this._awsWinrm.internalValue = config.awsWinrm;
    this._azureVmss.internalValue = config.azureVmss;
    this._azureWebapp.internalValue = config.azureWebapp;
    this._custom.internalValue = config.custom;
    this._datacenterSsh.internalValue = config.datacenterSsh;
    this._datacenterWinrm.internalValue = config.datacenterWinrm;
    this._kubernetes.internalValue = config.kubernetes;
    this._kubernetesGcp.internalValue = config.kubernetesGcp;
    this._tanzu.internalValue = config.tanzu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // cloud_provider_type - computed: false, optional: false, required: true
  private _cloudProviderType?: string; 
  public get cloudProviderType() {
    return this.getStringAttribute('cloud_provider_type');
  }
  public set cloudProviderType(value: string) {
    this._cloudProviderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderTypeInput() {
    return this._cloudProviderType;
  }

  // deployment_template_uri - computed: false, optional: true, required: false
  private _deploymentTemplateUri?: string; 
  public get deploymentTemplateUri() {
    return this.getStringAttribute('deployment_template_uri');
  }
  public set deploymentTemplateUri(value: string) {
    this._deploymentTemplateUri = value;
  }
  public resetDeploymentTemplateUri() {
    this._deploymentTemplateUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTemplateUriInput() {
    return this._deploymentTemplateUri;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provisioner_name - computed: false, optional: true, required: false
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  public resetProvisionerName() {
    this._provisionerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }

  // scoped_services - computed: false, optional: true, required: false
  private _scopedServices?: string[]; 
  public get scopedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('scoped_services'));
  }
  public set scopedServices(value: string[]) {
    this._scopedServices = value;
  }
  public resetScopedServices() {
    this._scopedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedServicesInput() {
    return this._scopedServices;
  }

  // aws_ami - computed: false, optional: true, required: false
  private _awsAmi = new InfrastructureDefinitionAwsAmiOutputReference(this, "aws_ami");
  public get awsAmi() {
    return this._awsAmi;
  }
  public putAwsAmi(value: InfrastructureDefinitionAwsAmi) {
    this._awsAmi.internalValue = value;
  }
  public resetAwsAmi() {
    this._awsAmi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAmiInput() {
    return this._awsAmi.internalValue;
  }

  // aws_ecs - computed: false, optional: true, required: false
  private _awsEcs = new InfrastructureDefinitionAwsEcsOutputReference(this, "aws_ecs");
  public get awsEcs() {
    return this._awsEcs;
  }
  public putAwsEcs(value: InfrastructureDefinitionAwsEcs) {
    this._awsEcs.internalValue = value;
  }
  public resetAwsEcs() {
    this._awsEcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEcsInput() {
    return this._awsEcs.internalValue;
  }

  // aws_lambda - computed: false, optional: true, required: false
  private _awsLambda = new InfrastructureDefinitionAwsLambdaOutputReference(this, "aws_lambda");
  public get awsLambda() {
    return this._awsLambda;
  }
  public putAwsLambda(value: InfrastructureDefinitionAwsLambda) {
    this._awsLambda.internalValue = value;
  }
  public resetAwsLambda() {
    this._awsLambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLambdaInput() {
    return this._awsLambda.internalValue;
  }

  // aws_ssh - computed: false, optional: true, required: false
  private _awsSsh = new InfrastructureDefinitionAwsSshOutputReference(this, "aws_ssh");
  public get awsSsh() {
    return this._awsSsh;
  }
  public putAwsSsh(value: InfrastructureDefinitionAwsSsh) {
    this._awsSsh.internalValue = value;
  }
  public resetAwsSsh() {
    this._awsSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSshInput() {
    return this._awsSsh.internalValue;
  }

  // aws_winrm - computed: false, optional: true, required: false
  private _awsWinrm = new InfrastructureDefinitionAwsWinrmOutputReference(this, "aws_winrm");
  public get awsWinrm() {
    return this._awsWinrm;
  }
  public putAwsWinrm(value: InfrastructureDefinitionAwsWinrm) {
    this._awsWinrm.internalValue = value;
  }
  public resetAwsWinrm() {
    this._awsWinrm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsWinrmInput() {
    return this._awsWinrm.internalValue;
  }

  // azure_vmss - computed: false, optional: true, required: false
  private _azureVmss = new InfrastructureDefinitionAzureVmssOutputReference(this, "azure_vmss");
  public get azureVmss() {
    return this._azureVmss;
  }
  public putAzureVmss(value: InfrastructureDefinitionAzureVmss) {
    this._azureVmss.internalValue = value;
  }
  public resetAzureVmss() {
    this._azureVmss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVmssInput() {
    return this._azureVmss.internalValue;
  }

  // azure_webapp - computed: false, optional: true, required: false
  private _azureWebapp = new InfrastructureDefinitionAzureWebappOutputReference(this, "azure_webapp");
  public get azureWebapp() {
    return this._azureWebapp;
  }
  public putAzureWebapp(value: InfrastructureDefinitionAzureWebapp) {
    this._azureWebapp.internalValue = value;
  }
  public resetAzureWebapp() {
    this._azureWebapp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureWebappInput() {
    return this._azureWebapp.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new InfrastructureDefinitionCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: InfrastructureDefinitionCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // datacenter_ssh - computed: false, optional: true, required: false
  private _datacenterSsh = new InfrastructureDefinitionDatacenterSshOutputReference(this, "datacenter_ssh");
  public get datacenterSsh() {
    return this._datacenterSsh;
  }
  public putDatacenterSsh(value: InfrastructureDefinitionDatacenterSsh) {
    this._datacenterSsh.internalValue = value;
  }
  public resetDatacenterSsh() {
    this._datacenterSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterSshInput() {
    return this._datacenterSsh.internalValue;
  }

  // datacenter_winrm - computed: false, optional: true, required: false
  private _datacenterWinrm = new InfrastructureDefinitionDatacenterWinrmOutputReference(this, "datacenter_winrm");
  public get datacenterWinrm() {
    return this._datacenterWinrm;
  }
  public putDatacenterWinrm(value: InfrastructureDefinitionDatacenterWinrm) {
    this._datacenterWinrm.internalValue = value;
  }
  public resetDatacenterWinrm() {
    this._datacenterWinrm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterWinrmInput() {
    return this._datacenterWinrm.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new InfrastructureDefinitionKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: InfrastructureDefinitionKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // kubernetes_gcp - computed: false, optional: true, required: false
  private _kubernetesGcp = new InfrastructureDefinitionKubernetesGcpOutputReference(this, "kubernetes_gcp");
  public get kubernetesGcp() {
    return this._kubernetesGcp;
  }
  public putKubernetesGcp(value: InfrastructureDefinitionKubernetesGcp) {
    this._kubernetesGcp.internalValue = value;
  }
  public resetKubernetesGcp() {
    this._kubernetesGcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesGcpInput() {
    return this._kubernetesGcp.internalValue;
  }

  // tanzu - computed: false, optional: true, required: false
  private _tanzu = new InfrastructureDefinitionTanzuOutputReference(this, "tanzu");
  public get tanzu() {
    return this._tanzu;
  }
  public putTanzu(value: InfrastructureDefinitionTanzu) {
    this._tanzu.internalValue = value;
  }
  public resetTanzu() {
    this._tanzu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tanzuInput() {
    return this._tanzu.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      cloud_provider_type: cdktf.stringToTerraform(this._cloudProviderType),
      deployment_template_uri: cdktf.stringToTerraform(this._deploymentTemplateUri),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      env_id: cdktf.stringToTerraform(this._envId),
      name: cdktf.stringToTerraform(this._name),
      provisioner_name: cdktf.stringToTerraform(this._provisionerName),
      scoped_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopedServices),
      aws_ami: infrastructureDefinitionAwsAmiToTerraform(this._awsAmi.internalValue),
      aws_ecs: infrastructureDefinitionAwsEcsToTerraform(this._awsEcs.internalValue),
      aws_lambda: infrastructureDefinitionAwsLambdaToTerraform(this._awsLambda.internalValue),
      aws_ssh: infrastructureDefinitionAwsSshToTerraform(this._awsSsh.internalValue),
      aws_winrm: infrastructureDefinitionAwsWinrmToTerraform(this._awsWinrm.internalValue),
      azure_vmss: infrastructureDefinitionAzureVmssToTerraform(this._azureVmss.internalValue),
      azure_webapp: infrastructureDefinitionAzureWebappToTerraform(this._azureWebapp.internalValue),
      custom: infrastructureDefinitionCustomToTerraform(this._custom.internalValue),
      datacenter_ssh: infrastructureDefinitionDatacenterSshToTerraform(this._datacenterSsh.internalValue),
      datacenter_winrm: infrastructureDefinitionDatacenterWinrmToTerraform(this._datacenterWinrm.internalValue),
      kubernetes: infrastructureDefinitionKubernetesToTerraform(this._kubernetes.internalValue),
      kubernetes_gcp: infrastructureDefinitionKubernetesGcpToTerraform(this._kubernetesGcp.internalValue),
      tanzu: infrastructureDefinitionTanzuToTerraform(this._tanzu.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider_type: {
        value: cdktf.stringToHclTerraform(this._cloudProviderType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_template_uri: {
        value: cdktf.stringToHclTerraform(this._deploymentTemplateUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.stringToHclTerraform(this._envId),
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
      provisioner_name: {
        value: cdktf.stringToHclTerraform(this._provisionerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scoped_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopedServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      aws_ami: {
        value: infrastructureDefinitionAwsAmiToHclTerraform(this._awsAmi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionAwsAmiList",
      },
      aws_ecs: {
        value: infrastructureDefinitionAwsEcsToHclTerraform(this._awsEcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionAwsEcsList",
      },
      aws_lambda: {
        value: infrastructureDefinitionAwsLambdaToHclTerraform(this._awsLambda.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionAwsLambdaList",
      },
      aws_ssh: {
        value: infrastructureDefinitionAwsSshToHclTerraform(this._awsSsh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionAwsSshList",
      },
      aws_winrm: {
        value: infrastructureDefinitionAwsWinrmToHclTerraform(this._awsWinrm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionAwsWinrmList",
      },
      azure_vmss: {
        value: infrastructureDefinitionAzureVmssToHclTerraform(this._azureVmss.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionAzureVmssList",
      },
      azure_webapp: {
        value: infrastructureDefinitionAzureWebappToHclTerraform(this._azureWebapp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionAzureWebappList",
      },
      custom: {
        value: infrastructureDefinitionCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionCustomList",
      },
      datacenter_ssh: {
        value: infrastructureDefinitionDatacenterSshToHclTerraform(this._datacenterSsh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionDatacenterSshList",
      },
      datacenter_winrm: {
        value: infrastructureDefinitionDatacenterWinrmToHclTerraform(this._datacenterWinrm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionDatacenterWinrmList",
      },
      kubernetes: {
        value: infrastructureDefinitionKubernetesToHclTerraform(this._kubernetes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionKubernetesList",
      },
      kubernetes_gcp: {
        value: infrastructureDefinitionKubernetesGcpToHclTerraform(this._kubernetesGcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionKubernetesGcpList",
      },
      tanzu: {
        value: infrastructureDefinitionTanzuToHclTerraform(this._tanzu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureDefinitionTanzuList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
