// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MrsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#availability_zone MrsCluster#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#component_list MrsCluster#component_list}
  */
  readonly componentList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#eip_id MrsCluster#eip_id}
  */
  readonly eipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#enterprise_project_id MrsCluster#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#id MrsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#log_collection MrsCluster#log_collection}
  */
  readonly logCollection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#manager_admin_pass MrsCluster#manager_admin_pass}
  */
  readonly managerAdminPass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#multi_az_deployment MrsCluster#multi_az_deployment}
  */
  readonly multiAzDeployment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#name MrsCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_admin_pass MrsCluster#node_admin_pass}
  */
  readonly nodeAdminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_domain_prefix MrsCluster#node_domain_prefix}
  */
  readonly nodeDomainPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_key_pair MrsCluster#node_key_pair}
  */
  readonly nodeKeyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#omm_password MrsCluster#omm_password}
  */
  readonly ommPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#public_ip MrsCluster#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#region MrsCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#safe_mode MrsCluster#safe_mode}
  */
  readonly safeMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#security_group_ids MrsCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#subnet_id MrsCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#tags MrsCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#template_id MrsCluster#template_id}
  */
  readonly templateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#type MrsCluster#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#version MrsCluster#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#vpc_id MrsCluster#vpc_id}
  */
  readonly vpcId: string;
  /**
  * analysis_core_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#analysis_core_nodes MrsCluster#analysis_core_nodes}
  */
  readonly analysisCoreNodes?: MrsClusterAnalysisCoreNodes;
  /**
  * analysis_task_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#analysis_task_nodes MrsCluster#analysis_task_nodes}
  */
  readonly analysisTaskNodes?: MrsClusterAnalysisTaskNodes;
  /**
  * bootstrap_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#bootstrap_scripts MrsCluster#bootstrap_scripts}
  */
  readonly bootstrapScripts?: MrsClusterBootstrapScripts[] | cdktf.IResolvable;
  /**
  * component_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#component_configs MrsCluster#component_configs}
  */
  readonly componentConfigs?: MrsClusterComponentConfigs[] | cdktf.IResolvable;
  /**
  * custom_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#custom_nodes MrsCluster#custom_nodes}
  */
  readonly customNodes?: MrsClusterCustomNodes[] | cdktf.IResolvable;
  /**
  * external_datasources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#external_datasources MrsCluster#external_datasources}
  */
  readonly externalDatasources?: MrsClusterExternalDatasources[] | cdktf.IResolvable;
  /**
  * master_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#master_nodes MrsCluster#master_nodes}
  */
  readonly masterNodes: MrsClusterMasterNodes;
  /**
  * streaming_core_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#streaming_core_nodes MrsCluster#streaming_core_nodes}
  */
  readonly streamingCoreNodes?: MrsClusterStreamingCoreNodes;
  /**
  * streaming_task_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#streaming_task_nodes MrsCluster#streaming_task_nodes}
  */
  readonly streamingTaskNodes?: MrsClusterStreamingTaskNodes;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#timeouts MrsCluster#timeouts}
  */
  readonly timeouts?: MrsClusterTimeouts;
}
export interface MrsClusterAnalysisCoreNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#assigned_roles MrsCluster#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#az_placement_expression MrsCluster#az_placement_expression}
  */
  readonly azPlacementExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_count MrsCluster#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_size MrsCluster#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_type MrsCluster#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#flavor MrsCluster#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_number MrsCluster#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_type MrsCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_size MrsCluster#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_type MrsCluster#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterAnalysisCoreNodesToTerraform(struct?: MrsClusterAnalysisCoreNodesOutputReference | MrsClusterAnalysisCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    az_placement_expression: cdktf.stringToTerraform(struct!.azPlacementExpression),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterAnalysisCoreNodesToHclTerraform(struct?: MrsClusterAnalysisCoreNodesOutputReference | MrsClusterAnalysisCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assignedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    az_placement_expression: {
      value: cdktf.stringToHclTerraform(struct!.azPlacementExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_volume_count: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.dataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.rootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterAnalysisCoreNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterAnalysisCoreNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
    }
    if (this._azPlacementExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.azPlacementExpression = this._azPlacementExpression;
    }
    if (this._dataVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeCount = this._dataVolumeCount;
    }
    if (this._dataVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeSize = this._dataVolumeSize;
    }
    if (this._dataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeType = this._dataVolumeType;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._rootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeType = this._rootVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterAnalysisCoreNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._azPlacementExpression = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._nodeType = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._azPlacementExpression = value.azPlacementExpression;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
      this._nodeType = value.nodeType;
      this._rootVolumeSize = value.rootVolumeSize;
      this._rootVolumeType = value.rootVolumeType;
    }
  }

  // assigned_roles - computed: false, optional: true, required: false
  private _assignedRoles?: string[]; 
  public get assignedRoles() {
    return this.getListAttribute('assigned_roles');
  }
  public set assignedRoles(value: string[]) {
    this._assignedRoles = value;
  }
  public resetAssignedRoles() {
    this._assignedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedRolesInput() {
    return this._assignedRoles;
  }

  // az_placement_expression - computed: true, optional: true, required: false
  private _azPlacementExpression?: string; 
  public get azPlacementExpression() {
    return this.getStringAttribute('az_placement_expression');
  }
  public set azPlacementExpression(value: string) {
    this._azPlacementExpression = value;
  }
  public resetAzPlacementExpression() {
    this._azPlacementExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azPlacementExpressionInput() {
    return this._azPlacementExpression;
  }

  // data_volume_count - computed: false, optional: false, required: true
  private _dataVolumeCount?: number; 
  public get dataVolumeCount() {
    return this.getNumberAttribute('data_volume_count');
  }
  public set dataVolumeCount(value: number) {
    this._dataVolumeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeCountInput() {
    return this._dataVolumeCount;
  }

  // data_volume_size - computed: false, optional: true, required: false
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  public resetDataVolumeSize() {
    this._dataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: true, required: false
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
  }
  public resetDataVolumeType() {
    this._dataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeTypeInput() {
    return this._dataVolumeType;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // host_ips - computed: true, optional: false, required: false
  public get hostIps() {
    return this.getListAttribute('host_ips');
  }

  // node_number - computed: false, optional: false, required: true
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // root_volume_type - computed: false, optional: false, required: true
  private _rootVolumeType?: string; 
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
  public set rootVolumeType(value: string) {
    this._rootVolumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeTypeInput() {
    return this._rootVolumeType;
  }
}
export interface MrsClusterAnalysisTaskNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#assigned_roles MrsCluster#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#az_placement_expression MrsCluster#az_placement_expression}
  */
  readonly azPlacementExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_count MrsCluster#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_size MrsCluster#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_type MrsCluster#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#flavor MrsCluster#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_number MrsCluster#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_type MrsCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_size MrsCluster#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_type MrsCluster#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterAnalysisTaskNodesToTerraform(struct?: MrsClusterAnalysisTaskNodesOutputReference | MrsClusterAnalysisTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    az_placement_expression: cdktf.stringToTerraform(struct!.azPlacementExpression),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterAnalysisTaskNodesToHclTerraform(struct?: MrsClusterAnalysisTaskNodesOutputReference | MrsClusterAnalysisTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assignedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    az_placement_expression: {
      value: cdktf.stringToHclTerraform(struct!.azPlacementExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_volume_count: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.dataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.rootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterAnalysisTaskNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterAnalysisTaskNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
    }
    if (this._azPlacementExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.azPlacementExpression = this._azPlacementExpression;
    }
    if (this._dataVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeCount = this._dataVolumeCount;
    }
    if (this._dataVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeSize = this._dataVolumeSize;
    }
    if (this._dataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeType = this._dataVolumeType;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._rootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeType = this._rootVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterAnalysisTaskNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._azPlacementExpression = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._nodeType = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._azPlacementExpression = value.azPlacementExpression;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
      this._nodeType = value.nodeType;
      this._rootVolumeSize = value.rootVolumeSize;
      this._rootVolumeType = value.rootVolumeType;
    }
  }

  // assigned_roles - computed: false, optional: true, required: false
  private _assignedRoles?: string[]; 
  public get assignedRoles() {
    return this.getListAttribute('assigned_roles');
  }
  public set assignedRoles(value: string[]) {
    this._assignedRoles = value;
  }
  public resetAssignedRoles() {
    this._assignedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedRolesInput() {
    return this._assignedRoles;
  }

  // az_placement_expression - computed: true, optional: true, required: false
  private _azPlacementExpression?: string; 
  public get azPlacementExpression() {
    return this.getStringAttribute('az_placement_expression');
  }
  public set azPlacementExpression(value: string) {
    this._azPlacementExpression = value;
  }
  public resetAzPlacementExpression() {
    this._azPlacementExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azPlacementExpressionInput() {
    return this._azPlacementExpression;
  }

  // data_volume_count - computed: false, optional: false, required: true
  private _dataVolumeCount?: number; 
  public get dataVolumeCount() {
    return this.getNumberAttribute('data_volume_count');
  }
  public set dataVolumeCount(value: number) {
    this._dataVolumeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeCountInput() {
    return this._dataVolumeCount;
  }

  // data_volume_size - computed: false, optional: true, required: false
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  public resetDataVolumeSize() {
    this._dataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: true, required: false
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
  }
  public resetDataVolumeType() {
    this._dataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeTypeInput() {
    return this._dataVolumeType;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // host_ips - computed: true, optional: false, required: false
  public get hostIps() {
    return this.getListAttribute('host_ips');
  }

  // node_number - computed: false, optional: false, required: true
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // root_volume_type - computed: false, optional: false, required: true
  private _rootVolumeType?: string; 
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
  public set rootVolumeType(value: string) {
    this._rootVolumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeTypeInput() {
    return this._rootVolumeType;
  }
}
export interface MrsClusterBootstrapScripts {
  /**
  * Whether the bootstrap action script runs only on active master nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#active_master MrsCluster#active_master}
  */
  readonly activeMaster?: boolean | cdktf.IResolvable;
  /**
  * Whether the bootstrap action script is executed before component start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#before_component_start MrsCluster#before_component_start}
  */
  readonly beforeComponentStart?: boolean | cdktf.IResolvable;
  /**
  * Whether the bootstrap action script involves root user operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#execute_need_sudo_root MrsCluster#execute_need_sudo_root}
  */
  readonly executeNeedSudoRoot?: boolean | cdktf.IResolvable;
  /**
  * The action after the bootstrap action script fails to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#fail_action MrsCluster#fail_action}
  */
  readonly failAction: string;
  /**
  * Name of a bootstrap action script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#name MrsCluster#name}
  */
  readonly name: string;
  /**
  * Name of the node group where the bootstrap action script is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#nodes MrsCluster#nodes}
  */
  readonly nodes: string[];
  /**
  * Bootstrap action script parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#parameters MrsCluster#parameters}
  */
  readonly parameters?: string;
  /**
  * Path of a bootstrap action script. Set this parameter to an OBS bucket path or a local VM path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#uri MrsCluster#uri}
  */
  readonly uri: string;
}

export function mrsClusterBootstrapScriptsToTerraform(struct?: MrsClusterBootstrapScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_master: cdktf.booleanToTerraform(struct!.activeMaster),
    before_component_start: cdktf.booleanToTerraform(struct!.beforeComponentStart),
    execute_need_sudo_root: cdktf.booleanToTerraform(struct!.executeNeedSudoRoot),
    fail_action: cdktf.stringToTerraform(struct!.failAction),
    name: cdktf.stringToTerraform(struct!.name),
    nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodes),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function mrsClusterBootstrapScriptsToHclTerraform(struct?: MrsClusterBootstrapScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_master: {
      value: cdktf.booleanToHclTerraform(struct!.activeMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    before_component_start: {
      value: cdktf.booleanToHclTerraform(struct!.beforeComponentStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    execute_need_sudo_root: {
      value: cdktf.booleanToHclTerraform(struct!.executeNeedSudoRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_action: {
      value: cdktf.stringToHclTerraform(struct!.failAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterBootstrapScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrsClusterBootstrapScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeMaster = this._activeMaster;
    }
    if (this._beforeComponentStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.beforeComponentStart = this._beforeComponentStart;
    }
    if (this._executeNeedSudoRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeNeedSudoRoot = this._executeNeedSudoRoot;
    }
    if (this._failAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.failAction = this._failAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterBootstrapScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeMaster = undefined;
      this._beforeComponentStart = undefined;
      this._executeNeedSudoRoot = undefined;
      this._failAction = undefined;
      this._name = undefined;
      this._nodes = undefined;
      this._parameters = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeMaster = value.activeMaster;
      this._beforeComponentStart = value.beforeComponentStart;
      this._executeNeedSudoRoot = value.executeNeedSudoRoot;
      this._failAction = value.failAction;
      this._name = value.name;
      this._nodes = value.nodes;
      this._parameters = value.parameters;
      this._uri = value.uri;
    }
  }

  // active_master - computed: true, optional: true, required: false
  private _activeMaster?: boolean | cdktf.IResolvable; 
  public get activeMaster() {
    return this.getBooleanAttribute('active_master');
  }
  public set activeMaster(value: boolean | cdktf.IResolvable) {
    this._activeMaster = value;
  }
  public resetActiveMaster() {
    this._activeMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMasterInput() {
    return this._activeMaster;
  }

  // before_component_start - computed: true, optional: true, required: false
  private _beforeComponentStart?: boolean | cdktf.IResolvable; 
  public get beforeComponentStart() {
    return this.getBooleanAttribute('before_component_start');
  }
  public set beforeComponentStart(value: boolean | cdktf.IResolvable) {
    this._beforeComponentStart = value;
  }
  public resetBeforeComponentStart() {
    this._beforeComponentStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeComponentStartInput() {
    return this._beforeComponentStart;
  }

  // execute_need_sudo_root - computed: true, optional: true, required: false
  private _executeNeedSudoRoot?: boolean | cdktf.IResolvable; 
  public get executeNeedSudoRoot() {
    return this.getBooleanAttribute('execute_need_sudo_root');
  }
  public set executeNeedSudoRoot(value: boolean | cdktf.IResolvable) {
    this._executeNeedSudoRoot = value;
  }
  public resetExecuteNeedSudoRoot() {
    this._executeNeedSudoRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeNeedSudoRootInput() {
    return this._executeNeedSudoRoot;
  }

  // fail_action - computed: false, optional: false, required: true
  private _failAction?: string; 
  public get failAction() {
    return this.getStringAttribute('fail_action');
  }
  public set failAction(value: string) {
    this._failAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failActionInput() {
    return this._failAction;
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

  // nodes - computed: false, optional: false, required: true
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class MrsClusterBootstrapScriptsList extends cdktf.ComplexList {
  public internalValue? : MrsClusterBootstrapScripts[] | cdktf.IResolvable

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
  public get(index: number): MrsClusterBootstrapScriptsOutputReference {
    return new MrsClusterBootstrapScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrsClusterComponentConfigsConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#config_file_name MrsCluster#config_file_name}
  */
  readonly configFileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#key MrsCluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#value MrsCluster#value}
  */
  readonly value: string;
}

export function mrsClusterComponentConfigsConfigsToTerraform(struct?: MrsClusterComponentConfigsConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file_name: cdktf.stringToTerraform(struct!.configFileName),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mrsClusterComponentConfigsConfigsToHclTerraform(struct?: MrsClusterComponentConfigsConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file_name: {
      value: cdktf.stringToHclTerraform(struct!.configFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class MrsClusterComponentConfigsConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrsClusterComponentConfigsConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFileName = this._configFileName;
    }
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

  public set internalValue(value: MrsClusterComponentConfigsConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configFileName = undefined;
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
      this._configFileName = value.configFileName;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // config_file_name - computed: false, optional: false, required: true
  private _configFileName?: string; 
  public get configFileName() {
    return this.getStringAttribute('config_file_name');
  }
  public set configFileName(value: string) {
    this._configFileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileNameInput() {
    return this._configFileName;
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

export class MrsClusterComponentConfigsConfigsList extends cdktf.ComplexList {
  public internalValue? : MrsClusterComponentConfigsConfigs[] | cdktf.IResolvable

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
  public get(index: number): MrsClusterComponentConfigsConfigsOutputReference {
    return new MrsClusterComponentConfigsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrsClusterComponentConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#name MrsCluster#name}
  */
  readonly name: string;
  /**
  * configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#configs MrsCluster#configs}
  */
  readonly configs: MrsClusterComponentConfigsConfigs[] | cdktf.IResolvable;
}

export function mrsClusterComponentConfigsToTerraform(struct?: MrsClusterComponentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    configs: cdktf.listMapper(mrsClusterComponentConfigsConfigsToTerraform, true)(struct!.configs),
  }
}


export function mrsClusterComponentConfigsToHclTerraform(struct?: MrsClusterComponentConfigs | cdktf.IResolvable): any {
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
    configs: {
      value: cdktf.listMapperHcl(mrsClusterComponentConfigsConfigsToHclTerraform, true)(struct!.configs),
      isBlock: true,
      type: "list",
      storageClassType: "MrsClusterComponentConfigsConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterComponentConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrsClusterComponentConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configs = this._configs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterComponentConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._configs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._configs.internalValue = value.configs;
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

  // configs - computed: false, optional: false, required: true
  private _configs = new MrsClusterComponentConfigsConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }
  public putConfigs(value: MrsClusterComponentConfigsConfigs[] | cdktf.IResolvable) {
    this._configs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs.internalValue;
  }
}

export class MrsClusterComponentConfigsList extends cdktf.ComplexList {
  public internalValue? : MrsClusterComponentConfigs[] | cdktf.IResolvable

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
  public get(index: number): MrsClusterComponentConfigsOutputReference {
    return new MrsClusterComponentConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrsClusterCustomNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#assigned_roles MrsCluster#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#az_placement_expression MrsCluster#az_placement_expression}
  */
  readonly azPlacementExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_count MrsCluster#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_size MrsCluster#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_type MrsCluster#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#flavor MrsCluster#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#group_name MrsCluster#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_number MrsCluster#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_type MrsCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_size MrsCluster#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_type MrsCluster#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterCustomNodesToTerraform(struct?: MrsClusterCustomNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    az_placement_expression: cdktf.stringToTerraform(struct!.azPlacementExpression),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterCustomNodesToHclTerraform(struct?: MrsClusterCustomNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assignedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    az_placement_expression: {
      value: cdktf.stringToHclTerraform(struct!.azPlacementExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_volume_count: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.dataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.rootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterCustomNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrsClusterCustomNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
    }
    if (this._azPlacementExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.azPlacementExpression = this._azPlacementExpression;
    }
    if (this._dataVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeCount = this._dataVolumeCount;
    }
    if (this._dataVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeSize = this._dataVolumeSize;
    }
    if (this._dataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeType = this._dataVolumeType;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._rootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeType = this._rootVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterCustomNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignedRoles = undefined;
      this._azPlacementExpression = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._groupName = undefined;
      this._nodeNumber = undefined;
      this._nodeType = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignedRoles = value.assignedRoles;
      this._azPlacementExpression = value.azPlacementExpression;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._groupName = value.groupName;
      this._nodeNumber = value.nodeNumber;
      this._nodeType = value.nodeType;
      this._rootVolumeSize = value.rootVolumeSize;
      this._rootVolumeType = value.rootVolumeType;
    }
  }

  // assigned_roles - computed: false, optional: true, required: false
  private _assignedRoles?: string[]; 
  public get assignedRoles() {
    return this.getListAttribute('assigned_roles');
  }
  public set assignedRoles(value: string[]) {
    this._assignedRoles = value;
  }
  public resetAssignedRoles() {
    this._assignedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedRolesInput() {
    return this._assignedRoles;
  }

  // az_placement_expression - computed: true, optional: true, required: false
  private _azPlacementExpression?: string; 
  public get azPlacementExpression() {
    return this.getStringAttribute('az_placement_expression');
  }
  public set azPlacementExpression(value: string) {
    this._azPlacementExpression = value;
  }
  public resetAzPlacementExpression() {
    this._azPlacementExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azPlacementExpressionInput() {
    return this._azPlacementExpression;
  }

  // data_volume_count - computed: false, optional: false, required: true
  private _dataVolumeCount?: number; 
  public get dataVolumeCount() {
    return this.getNumberAttribute('data_volume_count');
  }
  public set dataVolumeCount(value: number) {
    this._dataVolumeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeCountInput() {
    return this._dataVolumeCount;
  }

  // data_volume_size - computed: false, optional: true, required: false
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  public resetDataVolumeSize() {
    this._dataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: true, required: false
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
  }
  public resetDataVolumeType() {
    this._dataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeTypeInput() {
    return this._dataVolumeType;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // host_ips - computed: true, optional: false, required: false
  public get hostIps() {
    return this.getListAttribute('host_ips');
  }

  // node_number - computed: false, optional: false, required: true
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // root_volume_type - computed: false, optional: false, required: true
  private _rootVolumeType?: string; 
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
  public set rootVolumeType(value: string) {
    this._rootVolumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeTypeInput() {
    return this._rootVolumeType;
  }
}

export class MrsClusterCustomNodesList extends cdktf.ComplexList {
  public internalValue? : MrsClusterCustomNodes[] | cdktf.IResolvable

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
  public get(index: number): MrsClusterCustomNodesOutputReference {
    return new MrsClusterCustomNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrsClusterExternalDatasources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#component_name MrsCluster#component_name}
  */
  readonly componentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_connection_id MrsCluster#data_connection_id}
  */
  readonly dataConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#role_type MrsCluster#role_type}
  */
  readonly roleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#source_type MrsCluster#source_type}
  */
  readonly sourceType: string;
}

export function mrsClusterExternalDatasourcesToTerraform(struct?: MrsClusterExternalDatasources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_name: cdktf.stringToTerraform(struct!.componentName),
    data_connection_id: cdktf.stringToTerraform(struct!.dataConnectionId),
    role_type: cdktf.stringToTerraform(struct!.roleType),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function mrsClusterExternalDatasourcesToHclTerraform(struct?: MrsClusterExternalDatasources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_name: {
      value: cdktf.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.dataConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_type: {
      value: cdktf.stringToHclTerraform(struct!.roleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterExternalDatasourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrsClusterExternalDatasources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._dataConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataConnectionId = this._dataConnectionId;
    }
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterExternalDatasources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentName = undefined;
      this._dataConnectionId = undefined;
      this._roleType = undefined;
      this._sourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentName = value.componentName;
      this._dataConnectionId = value.dataConnectionId;
      this._roleType = value.roleType;
      this._sourceType = value.sourceType;
    }
  }

  // component_name - computed: false, optional: false, required: true
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // data_connection_id - computed: false, optional: true, required: false
  private _dataConnectionId?: string; 
  public get dataConnectionId() {
    return this.getStringAttribute('data_connection_id');
  }
  public set dataConnectionId(value: string) {
    this._dataConnectionId = value;
  }
  public resetDataConnectionId() {
    this._dataConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataConnectionIdInput() {
    return this._dataConnectionId;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}

export class MrsClusterExternalDatasourcesList extends cdktf.ComplexList {
  public internalValue? : MrsClusterExternalDatasources[] | cdktf.IResolvable

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
  public get(index: number): MrsClusterExternalDatasourcesOutputReference {
    return new MrsClusterExternalDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrsClusterMasterNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#assigned_roles MrsCluster#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#az_placement_expression MrsCluster#az_placement_expression}
  */
  readonly azPlacementExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_count MrsCluster#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_size MrsCluster#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_type MrsCluster#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#flavor MrsCluster#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_number MrsCluster#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_type MrsCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_size MrsCluster#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_type MrsCluster#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterMasterNodesToTerraform(struct?: MrsClusterMasterNodesOutputReference | MrsClusterMasterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    az_placement_expression: cdktf.stringToTerraform(struct!.azPlacementExpression),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterMasterNodesToHclTerraform(struct?: MrsClusterMasterNodesOutputReference | MrsClusterMasterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assignedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    az_placement_expression: {
      value: cdktf.stringToHclTerraform(struct!.azPlacementExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_volume_count: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.dataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.rootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterMasterNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterMasterNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
    }
    if (this._azPlacementExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.azPlacementExpression = this._azPlacementExpression;
    }
    if (this._dataVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeCount = this._dataVolumeCount;
    }
    if (this._dataVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeSize = this._dataVolumeSize;
    }
    if (this._dataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeType = this._dataVolumeType;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._rootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeType = this._rootVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterMasterNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._azPlacementExpression = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._nodeType = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._azPlacementExpression = value.azPlacementExpression;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
      this._nodeType = value.nodeType;
      this._rootVolumeSize = value.rootVolumeSize;
      this._rootVolumeType = value.rootVolumeType;
    }
  }

  // assigned_roles - computed: false, optional: true, required: false
  private _assignedRoles?: string[]; 
  public get assignedRoles() {
    return this.getListAttribute('assigned_roles');
  }
  public set assignedRoles(value: string[]) {
    this._assignedRoles = value;
  }
  public resetAssignedRoles() {
    this._assignedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedRolesInput() {
    return this._assignedRoles;
  }

  // az_placement_expression - computed: true, optional: true, required: false
  private _azPlacementExpression?: string; 
  public get azPlacementExpression() {
    return this.getStringAttribute('az_placement_expression');
  }
  public set azPlacementExpression(value: string) {
    this._azPlacementExpression = value;
  }
  public resetAzPlacementExpression() {
    this._azPlacementExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azPlacementExpressionInput() {
    return this._azPlacementExpression;
  }

  // data_volume_count - computed: false, optional: false, required: true
  private _dataVolumeCount?: number; 
  public get dataVolumeCount() {
    return this.getNumberAttribute('data_volume_count');
  }
  public set dataVolumeCount(value: number) {
    this._dataVolumeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeCountInput() {
    return this._dataVolumeCount;
  }

  // data_volume_size - computed: false, optional: true, required: false
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  public resetDataVolumeSize() {
    this._dataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: true, required: false
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
  }
  public resetDataVolumeType() {
    this._dataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeTypeInput() {
    return this._dataVolumeType;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // host_ips - computed: true, optional: false, required: false
  public get hostIps() {
    return this.getListAttribute('host_ips');
  }

  // node_number - computed: false, optional: false, required: true
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // root_volume_type - computed: false, optional: false, required: true
  private _rootVolumeType?: string; 
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
  public set rootVolumeType(value: string) {
    this._rootVolumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeTypeInput() {
    return this._rootVolumeType;
  }
}
export interface MrsClusterStreamingCoreNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#assigned_roles MrsCluster#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#az_placement_expression MrsCluster#az_placement_expression}
  */
  readonly azPlacementExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_count MrsCluster#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_size MrsCluster#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_type MrsCluster#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#flavor MrsCluster#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_number MrsCluster#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_type MrsCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_size MrsCluster#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_type MrsCluster#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterStreamingCoreNodesToTerraform(struct?: MrsClusterStreamingCoreNodesOutputReference | MrsClusterStreamingCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    az_placement_expression: cdktf.stringToTerraform(struct!.azPlacementExpression),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterStreamingCoreNodesToHclTerraform(struct?: MrsClusterStreamingCoreNodesOutputReference | MrsClusterStreamingCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assignedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    az_placement_expression: {
      value: cdktf.stringToHclTerraform(struct!.azPlacementExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_volume_count: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.dataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.rootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterStreamingCoreNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterStreamingCoreNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
    }
    if (this._azPlacementExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.azPlacementExpression = this._azPlacementExpression;
    }
    if (this._dataVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeCount = this._dataVolumeCount;
    }
    if (this._dataVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeSize = this._dataVolumeSize;
    }
    if (this._dataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeType = this._dataVolumeType;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._rootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeType = this._rootVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterStreamingCoreNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._azPlacementExpression = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._nodeType = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._azPlacementExpression = value.azPlacementExpression;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
      this._nodeType = value.nodeType;
      this._rootVolumeSize = value.rootVolumeSize;
      this._rootVolumeType = value.rootVolumeType;
    }
  }

  // assigned_roles - computed: false, optional: true, required: false
  private _assignedRoles?: string[]; 
  public get assignedRoles() {
    return this.getListAttribute('assigned_roles');
  }
  public set assignedRoles(value: string[]) {
    this._assignedRoles = value;
  }
  public resetAssignedRoles() {
    this._assignedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedRolesInput() {
    return this._assignedRoles;
  }

  // az_placement_expression - computed: true, optional: true, required: false
  private _azPlacementExpression?: string; 
  public get azPlacementExpression() {
    return this.getStringAttribute('az_placement_expression');
  }
  public set azPlacementExpression(value: string) {
    this._azPlacementExpression = value;
  }
  public resetAzPlacementExpression() {
    this._azPlacementExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azPlacementExpressionInput() {
    return this._azPlacementExpression;
  }

  // data_volume_count - computed: false, optional: false, required: true
  private _dataVolumeCount?: number; 
  public get dataVolumeCount() {
    return this.getNumberAttribute('data_volume_count');
  }
  public set dataVolumeCount(value: number) {
    this._dataVolumeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeCountInput() {
    return this._dataVolumeCount;
  }

  // data_volume_size - computed: false, optional: true, required: false
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  public resetDataVolumeSize() {
    this._dataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: true, required: false
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
  }
  public resetDataVolumeType() {
    this._dataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeTypeInput() {
    return this._dataVolumeType;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // host_ips - computed: true, optional: false, required: false
  public get hostIps() {
    return this.getListAttribute('host_ips');
  }

  // node_number - computed: false, optional: false, required: true
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // root_volume_type - computed: false, optional: false, required: true
  private _rootVolumeType?: string; 
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
  public set rootVolumeType(value: string) {
    this._rootVolumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeTypeInput() {
    return this._rootVolumeType;
  }
}
export interface MrsClusterStreamingTaskNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#assigned_roles MrsCluster#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#az_placement_expression MrsCluster#az_placement_expression}
  */
  readonly azPlacementExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_count MrsCluster#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_size MrsCluster#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#data_volume_type MrsCluster#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#flavor MrsCluster#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_number MrsCluster#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#node_type MrsCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_size MrsCluster#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#root_volume_type MrsCluster#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterStreamingTaskNodesToTerraform(struct?: MrsClusterStreamingTaskNodesOutputReference | MrsClusterStreamingTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    az_placement_expression: cdktf.stringToTerraform(struct!.azPlacementExpression),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterStreamingTaskNodesToHclTerraform(struct?: MrsClusterStreamingTaskNodesOutputReference | MrsClusterStreamingTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assignedRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    az_placement_expression: {
      value: cdktf.stringToHclTerraform(struct!.azPlacementExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_volume_count: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.dataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.rootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterStreamingTaskNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterStreamingTaskNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
    }
    if (this._azPlacementExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.azPlacementExpression = this._azPlacementExpression;
    }
    if (this._dataVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeCount = this._dataVolumeCount;
    }
    if (this._dataVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeSize = this._dataVolumeSize;
    }
    if (this._dataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeType = this._dataVolumeType;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._rootVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSize = this._rootVolumeSize;
    }
    if (this._rootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeType = this._rootVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterStreamingTaskNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._azPlacementExpression = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._nodeType = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._azPlacementExpression = value.azPlacementExpression;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
      this._nodeType = value.nodeType;
      this._rootVolumeSize = value.rootVolumeSize;
      this._rootVolumeType = value.rootVolumeType;
    }
  }

  // assigned_roles - computed: false, optional: true, required: false
  private _assignedRoles?: string[]; 
  public get assignedRoles() {
    return this.getListAttribute('assigned_roles');
  }
  public set assignedRoles(value: string[]) {
    this._assignedRoles = value;
  }
  public resetAssignedRoles() {
    this._assignedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedRolesInput() {
    return this._assignedRoles;
  }

  // az_placement_expression - computed: true, optional: true, required: false
  private _azPlacementExpression?: string; 
  public get azPlacementExpression() {
    return this.getStringAttribute('az_placement_expression');
  }
  public set azPlacementExpression(value: string) {
    this._azPlacementExpression = value;
  }
  public resetAzPlacementExpression() {
    this._azPlacementExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azPlacementExpressionInput() {
    return this._azPlacementExpression;
  }

  // data_volume_count - computed: false, optional: false, required: true
  private _dataVolumeCount?: number; 
  public get dataVolumeCount() {
    return this.getNumberAttribute('data_volume_count');
  }
  public set dataVolumeCount(value: number) {
    this._dataVolumeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeCountInput() {
    return this._dataVolumeCount;
  }

  // data_volume_size - computed: false, optional: true, required: false
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  public resetDataVolumeSize() {
    this._dataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: true, required: false
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
  }
  public resetDataVolumeType() {
    this._dataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeTypeInput() {
    return this._dataVolumeType;
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // host_ips - computed: true, optional: false, required: false
  public get hostIps() {
    return this.getListAttribute('host_ips');
  }

  // node_number - computed: false, optional: false, required: true
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // root_volume_size - computed: false, optional: false, required: true
  private _rootVolumeSize?: number; 
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }
  public set rootVolumeSize(value: number) {
    this._rootVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeInput() {
    return this._rootVolumeSize;
  }

  // root_volume_type - computed: false, optional: false, required: true
  private _rootVolumeType?: string; 
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
  public set rootVolumeType(value: string) {
    this._rootVolumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeTypeInput() {
    return this._rootVolumeType;
  }
}
export interface MrsClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#create MrsCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#delete MrsCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#update MrsCluster#update}
  */
  readonly update?: string;
}

export function mrsClusterTimeoutsToTerraform(struct?: MrsClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mrsClusterTimeoutsToHclTerraform(struct?: MrsClusterTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MrsClusterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster hcs_mrs_cluster}
*/
export class MrsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_mrs_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MrsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MrsCluster to import
  * @param importFromId The id of the existing MrsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MrsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_mrs_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/mrs_cluster hcs_mrs_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MrsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MrsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_mrs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._componentList = config.componentList;
    this._eipId = config.eipId;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._id = config.id;
    this._logCollection = config.logCollection;
    this._managerAdminPass = config.managerAdminPass;
    this._multiAzDeployment = config.multiAzDeployment;
    this._name = config.name;
    this._nodeAdminPass = config.nodeAdminPass;
    this._nodeDomainPrefix = config.nodeDomainPrefix;
    this._nodeKeyPair = config.nodeKeyPair;
    this._ommPassword = config.ommPassword;
    this._publicIp = config.publicIp;
    this._region = config.region;
    this._safeMode = config.safeMode;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._templateId = config.templateId;
    this._type = config.type;
    this._version = config.version;
    this._vpcId = config.vpcId;
    this._analysisCoreNodes.internalValue = config.analysisCoreNodes;
    this._analysisTaskNodes.internalValue = config.analysisTaskNodes;
    this._bootstrapScripts.internalValue = config.bootstrapScripts;
    this._componentConfigs.internalValue = config.componentConfigs;
    this._customNodes.internalValue = config.customNodes;
    this._externalDatasources.internalValue = config.externalDatasources;
    this._masterNodes.internalValue = config.masterNodes;
    this._streamingCoreNodes.internalValue = config.streamingCoreNodes;
    this._streamingTaskNodes.internalValue = config.streamingTaskNodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // charging_start_time - computed: true, optional: false, required: false
  public get chargingStartTime() {
    return this.getStringAttribute('charging_start_time');
  }

  // component_list - computed: false, optional: false, required: true
  private _componentList?: string[]; 
  public get componentList() {
    return cdktf.Fn.tolist(this.getListAttribute('component_list'));
  }
  public set componentList(value: string[]) {
    this._componentList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentListInput() {
    return this._componentList;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // eip_id - computed: true, optional: true, required: false
  private _eipId?: string; 
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }
  public set eipId(value: string) {
    this._eipId = value;
  }
  public resetEipId() {
    this._eipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdInput() {
    return this._eipId;
  }

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
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

  // log_collection - computed: false, optional: true, required: false
  private _logCollection?: boolean | cdktf.IResolvable; 
  public get logCollection() {
    return this.getBooleanAttribute('log_collection');
  }
  public set logCollection(value: boolean | cdktf.IResolvable) {
    this._logCollection = value;
  }
  public resetLogCollection() {
    this._logCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionInput() {
    return this._logCollection;
  }

  // manager_admin_pass - computed: false, optional: false, required: true
  private _managerAdminPass?: string; 
  public get managerAdminPass() {
    return this.getStringAttribute('manager_admin_pass');
  }
  public set managerAdminPass(value: string) {
    this._managerAdminPass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerAdminPassInput() {
    return this._managerAdminPass;
  }

  // master_node_ip - computed: true, optional: false, required: false
  public get masterNodeIp() {
    return this.getStringAttribute('master_node_ip');
  }

  // multi_az_deployment - computed: false, optional: true, required: false
  private _multiAzDeployment?: boolean | cdktf.IResolvable; 
  public get multiAzDeployment() {
    return this.getBooleanAttribute('multi_az_deployment');
  }
  public set multiAzDeployment(value: boolean | cdktf.IResolvable) {
    this._multiAzDeployment = value;
  }
  public resetMultiAzDeployment() {
    this._multiAzDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzDeploymentInput() {
    return this._multiAzDeployment;
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

  // node_admin_pass - computed: false, optional: true, required: false
  private _nodeAdminPass?: string; 
  public get nodeAdminPass() {
    return this.getStringAttribute('node_admin_pass');
  }
  public set nodeAdminPass(value: string) {
    this._nodeAdminPass = value;
  }
  public resetNodeAdminPass() {
    this._nodeAdminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAdminPassInput() {
    return this._nodeAdminPass;
  }

  // node_domain_prefix - computed: false, optional: true, required: false
  private _nodeDomainPrefix?: string; 
  public get nodeDomainPrefix() {
    return this.getStringAttribute('node_domain_prefix');
  }
  public set nodeDomainPrefix(value: string) {
    this._nodeDomainPrefix = value;
  }
  public resetNodeDomainPrefix() {
    this._nodeDomainPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDomainPrefixInput() {
    return this._nodeDomainPrefix;
  }

  // node_key_pair - computed: false, optional: true, required: false
  private _nodeKeyPair?: string; 
  public get nodeKeyPair() {
    return this.getStringAttribute('node_key_pair');
  }
  public set nodeKeyPair(value: string) {
    this._nodeKeyPair = value;
  }
  public resetNodeKeyPair() {
    this._nodeKeyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKeyPairInput() {
    return this._nodeKeyPair;
  }

  // omm_password - computed: false, optional: true, required: false
  private _ommPassword?: string; 
  public get ommPassword() {
    return this.getStringAttribute('omm_password');
  }
  public set ommPassword(value: string) {
    this._ommPassword = value;
  }
  public resetOmmPassword() {
    this._ommPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ommPasswordInput() {
    return this._ommPassword;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // safe_mode - computed: false, optional: true, required: false
  private _safeMode?: boolean | cdktf.IResolvable; 
  public get safeMode() {
    return this.getBooleanAttribute('safe_mode');
  }
  public set safeMode(value: boolean | cdktf.IResolvable) {
    this._safeMode = value;
  }
  public resetSafeMode() {
    this._safeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeModeInput() {
    return this._safeMode;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // total_node_number - computed: true, optional: false, required: false
  public get totalNodeNumber() {
    return this.getNumberAttribute('total_node_number');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // analysis_core_nodes - computed: false, optional: true, required: false
  private _analysisCoreNodes = new MrsClusterAnalysisCoreNodesOutputReference(this, "analysis_core_nodes");
  public get analysisCoreNodes() {
    return this._analysisCoreNodes;
  }
  public putAnalysisCoreNodes(value: MrsClusterAnalysisCoreNodes) {
    this._analysisCoreNodes.internalValue = value;
  }
  public resetAnalysisCoreNodes() {
    this._analysisCoreNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisCoreNodesInput() {
    return this._analysisCoreNodes.internalValue;
  }

  // analysis_task_nodes - computed: false, optional: true, required: false
  private _analysisTaskNodes = new MrsClusterAnalysisTaskNodesOutputReference(this, "analysis_task_nodes");
  public get analysisTaskNodes() {
    return this._analysisTaskNodes;
  }
  public putAnalysisTaskNodes(value: MrsClusterAnalysisTaskNodes) {
    this._analysisTaskNodes.internalValue = value;
  }
  public resetAnalysisTaskNodes() {
    this._analysisTaskNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisTaskNodesInput() {
    return this._analysisTaskNodes.internalValue;
  }

  // bootstrap_scripts - computed: false, optional: true, required: false
  private _bootstrapScripts = new MrsClusterBootstrapScriptsList(this, "bootstrap_scripts", true);
  public get bootstrapScripts() {
    return this._bootstrapScripts;
  }
  public putBootstrapScripts(value: MrsClusterBootstrapScripts[] | cdktf.IResolvable) {
    this._bootstrapScripts.internalValue = value;
  }
  public resetBootstrapScripts() {
    this._bootstrapScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapScriptsInput() {
    return this._bootstrapScripts.internalValue;
  }

  // component_configs - computed: false, optional: true, required: false
  private _componentConfigs = new MrsClusterComponentConfigsList(this, "component_configs", false);
  public get componentConfigs() {
    return this._componentConfigs;
  }
  public putComponentConfigs(value: MrsClusterComponentConfigs[] | cdktf.IResolvable) {
    this._componentConfigs.internalValue = value;
  }
  public resetComponentConfigs() {
    this._componentConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentConfigsInput() {
    return this._componentConfigs.internalValue;
  }

  // custom_nodes - computed: false, optional: true, required: false
  private _customNodes = new MrsClusterCustomNodesList(this, "custom_nodes", false);
  public get customNodes() {
    return this._customNodes;
  }
  public putCustomNodes(value: MrsClusterCustomNodes[] | cdktf.IResolvable) {
    this._customNodes.internalValue = value;
  }
  public resetCustomNodes() {
    this._customNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNodesInput() {
    return this._customNodes.internalValue;
  }

  // external_datasources - computed: false, optional: true, required: false
  private _externalDatasources = new MrsClusterExternalDatasourcesList(this, "external_datasources", false);
  public get externalDatasources() {
    return this._externalDatasources;
  }
  public putExternalDatasources(value: MrsClusterExternalDatasources[] | cdktf.IResolvable) {
    this._externalDatasources.internalValue = value;
  }
  public resetExternalDatasources() {
    this._externalDatasources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDatasourcesInput() {
    return this._externalDatasources.internalValue;
  }

  // master_nodes - computed: false, optional: false, required: true
  private _masterNodes = new MrsClusterMasterNodesOutputReference(this, "master_nodes");
  public get masterNodes() {
    return this._masterNodes;
  }
  public putMasterNodes(value: MrsClusterMasterNodes) {
    this._masterNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodesInput() {
    return this._masterNodes.internalValue;
  }

  // streaming_core_nodes - computed: false, optional: true, required: false
  private _streamingCoreNodes = new MrsClusterStreamingCoreNodesOutputReference(this, "streaming_core_nodes");
  public get streamingCoreNodes() {
    return this._streamingCoreNodes;
  }
  public putStreamingCoreNodes(value: MrsClusterStreamingCoreNodes) {
    this._streamingCoreNodes.internalValue = value;
  }
  public resetStreamingCoreNodes() {
    this._streamingCoreNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingCoreNodesInput() {
    return this._streamingCoreNodes.internalValue;
  }

  // streaming_task_nodes - computed: false, optional: true, required: false
  private _streamingTaskNodes = new MrsClusterStreamingTaskNodesOutputReference(this, "streaming_task_nodes");
  public get streamingTaskNodes() {
    return this._streamingTaskNodes;
  }
  public putStreamingTaskNodes(value: MrsClusterStreamingTaskNodes) {
    this._streamingTaskNodes.internalValue = value;
  }
  public resetStreamingTaskNodes() {
    this._streamingTaskNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingTaskNodesInput() {
    return this._streamingTaskNodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MrsClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MrsClusterTimeouts) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      component_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._componentList),
      eip_id: cdktf.stringToTerraform(this._eipId),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      id: cdktf.stringToTerraform(this._id),
      log_collection: cdktf.booleanToTerraform(this._logCollection),
      manager_admin_pass: cdktf.stringToTerraform(this._managerAdminPass),
      multi_az_deployment: cdktf.booleanToTerraform(this._multiAzDeployment),
      name: cdktf.stringToTerraform(this._name),
      node_admin_pass: cdktf.stringToTerraform(this._nodeAdminPass),
      node_domain_prefix: cdktf.stringToTerraform(this._nodeDomainPrefix),
      node_key_pair: cdktf.stringToTerraform(this._nodeKeyPair),
      omm_password: cdktf.stringToTerraform(this._ommPassword),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      region: cdktf.stringToTerraform(this._region),
      safe_mode: cdktf.booleanToTerraform(this._safeMode),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      template_id: cdktf.stringToTerraform(this._templateId),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      analysis_core_nodes: mrsClusterAnalysisCoreNodesToTerraform(this._analysisCoreNodes.internalValue),
      analysis_task_nodes: mrsClusterAnalysisTaskNodesToTerraform(this._analysisTaskNodes.internalValue),
      bootstrap_scripts: cdktf.listMapper(mrsClusterBootstrapScriptsToTerraform, true)(this._bootstrapScripts.internalValue),
      component_configs: cdktf.listMapper(mrsClusterComponentConfigsToTerraform, true)(this._componentConfigs.internalValue),
      custom_nodes: cdktf.listMapper(mrsClusterCustomNodesToTerraform, true)(this._customNodes.internalValue),
      external_datasources: cdktf.listMapper(mrsClusterExternalDatasourcesToTerraform, true)(this._externalDatasources.internalValue),
      master_nodes: mrsClusterMasterNodesToTerraform(this._masterNodes.internalValue),
      streaming_core_nodes: mrsClusterStreamingCoreNodesToTerraform(this._streamingCoreNodes.internalValue),
      streaming_task_nodes: mrsClusterStreamingTaskNodesToTerraform(this._streamingTaskNodes.internalValue),
      timeouts: mrsClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._componentList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      eip_id: {
        value: cdktf.stringToHclTerraform(this._eipId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_collection: {
        value: cdktf.booleanToHclTerraform(this._logCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manager_admin_pass: {
        value: cdktf.stringToHclTerraform(this._managerAdminPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_az_deployment: {
        value: cdktf.booleanToHclTerraform(this._multiAzDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_admin_pass: {
        value: cdktf.stringToHclTerraform(this._nodeAdminPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_domain_prefix: {
        value: cdktf.stringToHclTerraform(this._nodeDomainPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_key_pair: {
        value: cdktf.stringToHclTerraform(this._nodeKeyPair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omm_password: {
        value: cdktf.stringToHclTerraform(this._ommPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safe_mode: {
        value: cdktf.booleanToHclTerraform(this._safeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analysis_core_nodes: {
        value: mrsClusterAnalysisCoreNodesToHclTerraform(this._analysisCoreNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterAnalysisCoreNodesList",
      },
      analysis_task_nodes: {
        value: mrsClusterAnalysisTaskNodesToHclTerraform(this._analysisTaskNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterAnalysisTaskNodesList",
      },
      bootstrap_scripts: {
        value: cdktf.listMapperHcl(mrsClusterBootstrapScriptsToHclTerraform, true)(this._bootstrapScripts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MrsClusterBootstrapScriptsList",
      },
      component_configs: {
        value: cdktf.listMapperHcl(mrsClusterComponentConfigsToHclTerraform, true)(this._componentConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterComponentConfigsList",
      },
      custom_nodes: {
        value: cdktf.listMapperHcl(mrsClusterCustomNodesToHclTerraform, true)(this._customNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterCustomNodesList",
      },
      external_datasources: {
        value: cdktf.listMapperHcl(mrsClusterExternalDatasourcesToHclTerraform, true)(this._externalDatasources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterExternalDatasourcesList",
      },
      master_nodes: {
        value: mrsClusterMasterNodesToHclTerraform(this._masterNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterMasterNodesList",
      },
      streaming_core_nodes: {
        value: mrsClusterStreamingCoreNodesToHclTerraform(this._streamingCoreNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterStreamingCoreNodesList",
      },
      streaming_task_nodes: {
        value: mrsClusterStreamingTaskNodesToHclTerraform(this._streamingTaskNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterStreamingTaskNodesList",
      },
      timeouts: {
        value: mrsClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MrsClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
