// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MrsClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#availability_zone MrsClusterV2#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#component_list MrsClusterV2#component_list}
  */
  readonly componentList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#eip_id MrsClusterV2#eip_id}
  */
  readonly eipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#id MrsClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#log_collection MrsClusterV2#log_collection}
  */
  readonly logCollection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#manager_admin_pwd MrsClusterV2#manager_admin_pwd}
  */
  readonly managerAdminPwd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#name MrsClusterV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#node_key_pair MrsClusterV2#node_key_pair}
  */
  readonly nodeKeyPair: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#public_ip MrsClusterV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#region MrsClusterV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#safe_mode MrsClusterV2#safe_mode}
  */
  readonly safeMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#security_group_ids MrsClusterV2#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#subnet_id MrsClusterV2#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#tags MrsClusterV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#template_id MrsClusterV2#template_id}
  */
  readonly templateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#type MrsClusterV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#version MrsClusterV2#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#vpc_id MrsClusterV2#vpc_id}
  */
  readonly vpcId: string;
  /**
  * analysis_core_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#analysis_core_nodes MrsClusterV2#analysis_core_nodes}
  */
  readonly analysisCoreNodes?: MrsClusterV2AnalysisCoreNodes;
  /**
  * analysis_task_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#analysis_task_nodes MrsClusterV2#analysis_task_nodes}
  */
  readonly analysisTaskNodes?: MrsClusterV2AnalysisTaskNodes;
  /**
  * custom_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#custom_nodes MrsClusterV2#custom_nodes}
  */
  readonly customNodes?: MrsClusterV2CustomNodes[] | cdktf.IResolvable;
  /**
  * master_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#master_nodes MrsClusterV2#master_nodes}
  */
  readonly masterNodes: MrsClusterV2MasterNodes;
  /**
  * streaming_core_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#streaming_core_nodes MrsClusterV2#streaming_core_nodes}
  */
  readonly streamingCoreNodes?: MrsClusterV2StreamingCoreNodes;
  /**
  * streaming_task_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#streaming_task_nodes MrsClusterV2#streaming_task_nodes}
  */
  readonly streamingTaskNodes?: MrsClusterV2StreamingTaskNodes;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#timeouts MrsClusterV2#timeouts}
  */
  readonly timeouts?: MrsClusterV2Timeouts;
}
export interface MrsClusterV2Components {
}

export function mrsClusterV2ComponentsToTerraform(struct?: MrsClusterV2Components): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mrsClusterV2ComponentsToHclTerraform(struct?: MrsClusterV2Components): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MrsClusterV2ComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MrsClusterV2Components | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsClusterV2Components | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class MrsClusterV2ComponentsList extends cdktf.ComplexList {

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
  public get(index: number): MrsClusterV2ComponentsOutputReference {
    return new MrsClusterV2ComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrsClusterV2AnalysisCoreNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#assigned_roles MrsClusterV2#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_count MrsClusterV2#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_size MrsClusterV2#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_type MrsClusterV2#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#flavor MrsClusterV2#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#node_number MrsClusterV2#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_size MrsClusterV2#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_type MrsClusterV2#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterV2AnalysisCoreNodesToTerraform(struct?: MrsClusterV2AnalysisCoreNodesOutputReference | MrsClusterV2AnalysisCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterV2AnalysisCoreNodesToHclTerraform(struct?: MrsClusterV2AnalysisCoreNodesOutputReference | MrsClusterV2AnalysisCoreNodes): any {
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

export class MrsClusterV2AnalysisCoreNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterV2AnalysisCoreNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
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

  public set internalValue(value: MrsClusterV2AnalysisCoreNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
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
export interface MrsClusterV2AnalysisTaskNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#assigned_roles MrsClusterV2#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_count MrsClusterV2#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_size MrsClusterV2#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_type MrsClusterV2#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#flavor MrsClusterV2#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#node_number MrsClusterV2#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_size MrsClusterV2#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_type MrsClusterV2#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterV2AnalysisTaskNodesToTerraform(struct?: MrsClusterV2AnalysisTaskNodesOutputReference | MrsClusterV2AnalysisTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterV2AnalysisTaskNodesToHclTerraform(struct?: MrsClusterV2AnalysisTaskNodesOutputReference | MrsClusterV2AnalysisTaskNodes): any {
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

export class MrsClusterV2AnalysisTaskNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterV2AnalysisTaskNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
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

  public set internalValue(value: MrsClusterV2AnalysisTaskNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
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
export interface MrsClusterV2CustomNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#assigned_roles MrsClusterV2#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_count MrsClusterV2#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_size MrsClusterV2#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_type MrsClusterV2#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#flavor MrsClusterV2#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#group_name MrsClusterV2#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#node_number MrsClusterV2#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_size MrsClusterV2#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_type MrsClusterV2#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterV2CustomNodesToTerraform(struct?: MrsClusterV2CustomNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterV2CustomNodesToHclTerraform(struct?: MrsClusterV2CustomNodes | cdktf.IResolvable): any {
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

export class MrsClusterV2CustomNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrsClusterV2CustomNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
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

  public set internalValue(value: MrsClusterV2CustomNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignedRoles = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._groupName = undefined;
      this._nodeNumber = undefined;
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
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._groupName = value.groupName;
      this._nodeNumber = value.nodeNumber;
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

export class MrsClusterV2CustomNodesList extends cdktf.ComplexList {
  public internalValue? : MrsClusterV2CustomNodes[] | cdktf.IResolvable

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
  public get(index: number): MrsClusterV2CustomNodesOutputReference {
    return new MrsClusterV2CustomNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrsClusterV2MasterNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#assigned_roles MrsClusterV2#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_count MrsClusterV2#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_size MrsClusterV2#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_type MrsClusterV2#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#flavor MrsClusterV2#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#node_number MrsClusterV2#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_size MrsClusterV2#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_type MrsClusterV2#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterV2MasterNodesToTerraform(struct?: MrsClusterV2MasterNodesOutputReference | MrsClusterV2MasterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterV2MasterNodesToHclTerraform(struct?: MrsClusterV2MasterNodesOutputReference | MrsClusterV2MasterNodes): any {
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

export class MrsClusterV2MasterNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterV2MasterNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
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

  public set internalValue(value: MrsClusterV2MasterNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
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
export interface MrsClusterV2StreamingCoreNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#assigned_roles MrsClusterV2#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_count MrsClusterV2#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_size MrsClusterV2#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_type MrsClusterV2#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#flavor MrsClusterV2#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#node_number MrsClusterV2#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_size MrsClusterV2#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_type MrsClusterV2#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterV2StreamingCoreNodesToTerraform(struct?: MrsClusterV2StreamingCoreNodesOutputReference | MrsClusterV2StreamingCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterV2StreamingCoreNodesToHclTerraform(struct?: MrsClusterV2StreamingCoreNodesOutputReference | MrsClusterV2StreamingCoreNodes): any {
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

export class MrsClusterV2StreamingCoreNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterV2StreamingCoreNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
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

  public set internalValue(value: MrsClusterV2StreamingCoreNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
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
export interface MrsClusterV2StreamingTaskNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#assigned_roles MrsClusterV2#assigned_roles}
  */
  readonly assignedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_count MrsClusterV2#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_size MrsClusterV2#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#data_volume_type MrsClusterV2#data_volume_type}
  */
  readonly dataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#flavor MrsClusterV2#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#node_number MrsClusterV2#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_size MrsClusterV2#root_volume_size}
  */
  readonly rootVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#root_volume_type MrsClusterV2#root_volume_type}
  */
  readonly rootVolumeType: string;
}

export function mrsClusterV2StreamingTaskNodesToTerraform(struct?: MrsClusterV2StreamingTaskNodesOutputReference | MrsClusterV2StreamingTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedRoles),
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    root_volume_size: cdktf.numberToTerraform(struct!.rootVolumeSize),
    root_volume_type: cdktf.stringToTerraform(struct!.rootVolumeType),
  }
}


export function mrsClusterV2StreamingTaskNodesToHclTerraform(struct?: MrsClusterV2StreamingTaskNodesOutputReference | MrsClusterV2StreamingTaskNodes): any {
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

export class MrsClusterV2StreamingTaskNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterV2StreamingTaskNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedRoles = this._assignedRoles;
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

  public set internalValue(value: MrsClusterV2StreamingTaskNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedRoles = undefined;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
      this._rootVolumeSize = undefined;
      this._rootVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedRoles = value.assignedRoles;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
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
export interface MrsClusterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#create MrsClusterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#delete MrsClusterV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#update MrsClusterV2#update}
  */
  readonly update?: string;
}

export function mrsClusterV2TimeoutsToTerraform(struct?: MrsClusterV2Timeouts | cdktf.IResolvable): any {
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


export function mrsClusterV2TimeoutsToHclTerraform(struct?: MrsClusterV2Timeouts | cdktf.IResolvable): any {
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

export class MrsClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MrsClusterV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MrsClusterV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2 flexibleengine_mrs_cluster_v2}
*/
export class MrsClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_mrs_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MrsClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MrsClusterV2 to import
  * @param importFromId The id of the existing MrsClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MrsClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_mrs_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_cluster_v2 flexibleengine_mrs_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MrsClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: MrsClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_mrs_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
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
    this._id = config.id;
    this._logCollection = config.logCollection;
    this._managerAdminPwd = config.managerAdminPwd;
    this._name = config.name;
    this._nodeKeyPair = config.nodeKeyPair;
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
    this._customNodes.internalValue = config.customNodes;
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

  // components - computed: true, optional: false, required: false
  private _components = new MrsClusterV2ComponentsList(this, "components", false);
  public get components() {
    return this._components;
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

  // manager_admin_pwd - computed: false, optional: false, required: true
  private _managerAdminPwd?: string; 
  public get managerAdminPwd() {
    return this.getStringAttribute('manager_admin_pwd');
  }
  public set managerAdminPwd(value: string) {
    this._managerAdminPwd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerAdminPwdInput() {
    return this._managerAdminPwd;
  }

  // master_node_ip - computed: true, optional: false, required: false
  public get masterNodeIp() {
    return this.getStringAttribute('master_node_ip');
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

  // node_key_pair - computed: false, optional: false, required: true
  private _nodeKeyPair?: string; 
  public get nodeKeyPair() {
    return this.getStringAttribute('node_key_pair');
  }
  public set nodeKeyPair(value: string) {
    this._nodeKeyPair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKeyPairInput() {
    return this._nodeKeyPair;
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
  private _analysisCoreNodes = new MrsClusterV2AnalysisCoreNodesOutputReference(this, "analysis_core_nodes");
  public get analysisCoreNodes() {
    return this._analysisCoreNodes;
  }
  public putAnalysisCoreNodes(value: MrsClusterV2AnalysisCoreNodes) {
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
  private _analysisTaskNodes = new MrsClusterV2AnalysisTaskNodesOutputReference(this, "analysis_task_nodes");
  public get analysisTaskNodes() {
    return this._analysisTaskNodes;
  }
  public putAnalysisTaskNodes(value: MrsClusterV2AnalysisTaskNodes) {
    this._analysisTaskNodes.internalValue = value;
  }
  public resetAnalysisTaskNodes() {
    this._analysisTaskNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisTaskNodesInput() {
    return this._analysisTaskNodes.internalValue;
  }

  // custom_nodes - computed: false, optional: true, required: false
  private _customNodes = new MrsClusterV2CustomNodesList(this, "custom_nodes", false);
  public get customNodes() {
    return this._customNodes;
  }
  public putCustomNodes(value: MrsClusterV2CustomNodes[] | cdktf.IResolvable) {
    this._customNodes.internalValue = value;
  }
  public resetCustomNodes() {
    this._customNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNodesInput() {
    return this._customNodes.internalValue;
  }

  // master_nodes - computed: false, optional: false, required: true
  private _masterNodes = new MrsClusterV2MasterNodesOutputReference(this, "master_nodes");
  public get masterNodes() {
    return this._masterNodes;
  }
  public putMasterNodes(value: MrsClusterV2MasterNodes) {
    this._masterNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodesInput() {
    return this._masterNodes.internalValue;
  }

  // streaming_core_nodes - computed: false, optional: true, required: false
  private _streamingCoreNodes = new MrsClusterV2StreamingCoreNodesOutputReference(this, "streaming_core_nodes");
  public get streamingCoreNodes() {
    return this._streamingCoreNodes;
  }
  public putStreamingCoreNodes(value: MrsClusterV2StreamingCoreNodes) {
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
  private _streamingTaskNodes = new MrsClusterV2StreamingTaskNodesOutputReference(this, "streaming_task_nodes");
  public get streamingTaskNodes() {
    return this._streamingTaskNodes;
  }
  public putStreamingTaskNodes(value: MrsClusterV2StreamingTaskNodes) {
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
  private _timeouts = new MrsClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MrsClusterV2Timeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      log_collection: cdktf.booleanToTerraform(this._logCollection),
      manager_admin_pwd: cdktf.stringToTerraform(this._managerAdminPwd),
      name: cdktf.stringToTerraform(this._name),
      node_key_pair: cdktf.stringToTerraform(this._nodeKeyPair),
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
      analysis_core_nodes: mrsClusterV2AnalysisCoreNodesToTerraform(this._analysisCoreNodes.internalValue),
      analysis_task_nodes: mrsClusterV2AnalysisTaskNodesToTerraform(this._analysisTaskNodes.internalValue),
      custom_nodes: cdktf.listMapper(mrsClusterV2CustomNodesToTerraform, true)(this._customNodes.internalValue),
      master_nodes: mrsClusterV2MasterNodesToTerraform(this._masterNodes.internalValue),
      streaming_core_nodes: mrsClusterV2StreamingCoreNodesToTerraform(this._streamingCoreNodes.internalValue),
      streaming_task_nodes: mrsClusterV2StreamingTaskNodesToTerraform(this._streamingTaskNodes.internalValue),
      timeouts: mrsClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      manager_admin_pwd: {
        value: cdktf.stringToHclTerraform(this._managerAdminPwd),
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
      node_key_pair: {
        value: cdktf.stringToHclTerraform(this._nodeKeyPair),
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
        value: mrsClusterV2AnalysisCoreNodesToHclTerraform(this._analysisCoreNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterV2AnalysisCoreNodesList",
      },
      analysis_task_nodes: {
        value: mrsClusterV2AnalysisTaskNodesToHclTerraform(this._analysisTaskNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterV2AnalysisTaskNodesList",
      },
      custom_nodes: {
        value: cdktf.listMapperHcl(mrsClusterV2CustomNodesToHclTerraform, true)(this._customNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterV2CustomNodesList",
      },
      master_nodes: {
        value: mrsClusterV2MasterNodesToHclTerraform(this._masterNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterV2MasterNodesList",
      },
      streaming_core_nodes: {
        value: mrsClusterV2StreamingCoreNodesToHclTerraform(this._streamingCoreNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterV2StreamingCoreNodesList",
      },
      streaming_task_nodes: {
        value: mrsClusterV2StreamingTaskNodesToHclTerraform(this._streamingTaskNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsClusterV2StreamingTaskNodesList",
      },
      timeouts: {
        value: mrsClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MrsClusterV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
