// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MrsHybridClusterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#available_zone MrsHybridClusterV1#available_zone}
  */
  readonly availableZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#cluster_admin_secret MrsHybridClusterV1#cluster_admin_secret}
  */
  readonly clusterAdminSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#cluster_name MrsHybridClusterV1#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#cluster_version MrsHybridClusterV1#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#component_list MrsHybridClusterV1#component_list}
  */
  readonly componentList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#id MrsHybridClusterV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#log_collection MrsHybridClusterV1#log_collection}
  */
  readonly logCollection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#master_node_key_pair MrsHybridClusterV1#master_node_key_pair}
  */
  readonly masterNodeKeyPair: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#region MrsHybridClusterV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#safe_mode MrsHybridClusterV1#safe_mode}
  */
  readonly safeMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#security_group_id MrsHybridClusterV1#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#subnet_id MrsHybridClusterV1#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#vpc_id MrsHybridClusterV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * analysis_core_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#analysis_core_nodes MrsHybridClusterV1#analysis_core_nodes}
  */
  readonly analysisCoreNodes: MrsHybridClusterV1AnalysisCoreNodes;
  /**
  * analysis_task_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#analysis_task_nodes MrsHybridClusterV1#analysis_task_nodes}
  */
  readonly analysisTaskNodes?: MrsHybridClusterV1AnalysisTaskNodes;
  /**
  * master_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#master_nodes MrsHybridClusterV1#master_nodes}
  */
  readonly masterNodes: MrsHybridClusterV1MasterNodes;
  /**
  * streaming_core_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#streaming_core_nodes MrsHybridClusterV1#streaming_core_nodes}
  */
  readonly streamingCoreNodes: MrsHybridClusterV1StreamingCoreNodes;
  /**
  * streaming_task_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#streaming_task_nodes MrsHybridClusterV1#streaming_task_nodes}
  */
  readonly streamingTaskNodes?: MrsHybridClusterV1StreamingTaskNodes;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#timeouts MrsHybridClusterV1#timeouts}
  */
  readonly timeouts?: MrsHybridClusterV1Timeouts;
}
export interface MrsHybridClusterV1Components {
}

export function mrsHybridClusterV1ComponentsToTerraform(struct?: MrsHybridClusterV1Components): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mrsHybridClusterV1ComponentsToHclTerraform(struct?: MrsHybridClusterV1Components): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MrsHybridClusterV1ComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MrsHybridClusterV1Components | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsHybridClusterV1Components | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_desc - computed: true, optional: false, required: false
  public get componentDesc() {
    return this.getStringAttribute('component_desc');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // component_version - computed: true, optional: false, required: false
  public get componentVersion() {
    return this.getStringAttribute('component_version');
  }
}

export class MrsHybridClusterV1ComponentsList extends cdktf.ComplexList {

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
  public get(index: number): MrsHybridClusterV1ComponentsOutputReference {
    return new MrsHybridClusterV1ComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MrsHybridClusterV1AnalysisCoreNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_count MrsHybridClusterV1#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_size MrsHybridClusterV1#data_volume_size}
  */
  readonly dataVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_type MrsHybridClusterV1#data_volume_type}
  */
  readonly dataVolumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#flavor MrsHybridClusterV1#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#node_number MrsHybridClusterV1#node_number}
  */
  readonly nodeNumber: number;
}

export function mrsHybridClusterV1AnalysisCoreNodesToTerraform(struct?: MrsHybridClusterV1AnalysisCoreNodesOutputReference | MrsHybridClusterV1AnalysisCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
  }
}


export function mrsHybridClusterV1AnalysisCoreNodesToHclTerraform(struct?: MrsHybridClusterV1AnalysisCoreNodesOutputReference | MrsHybridClusterV1AnalysisCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsHybridClusterV1AnalysisCoreNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsHybridClusterV1AnalysisCoreNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsHybridClusterV1AnalysisCoreNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
    }
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

  // data_volume_size - computed: false, optional: false, required: true
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: false, required: true
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
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

  // root_volume_size - computed: true, optional: false, required: false
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }

  // root_volume_type - computed: true, optional: false, required: false
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
}
export interface MrsHybridClusterV1AnalysisTaskNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_count MrsHybridClusterV1#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_size MrsHybridClusterV1#data_volume_size}
  */
  readonly dataVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_type MrsHybridClusterV1#data_volume_type}
  */
  readonly dataVolumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#flavor MrsHybridClusterV1#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#node_number MrsHybridClusterV1#node_number}
  */
  readonly nodeNumber: number;
}

export function mrsHybridClusterV1AnalysisTaskNodesToTerraform(struct?: MrsHybridClusterV1AnalysisTaskNodesOutputReference | MrsHybridClusterV1AnalysisTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
  }
}


export function mrsHybridClusterV1AnalysisTaskNodesToHclTerraform(struct?: MrsHybridClusterV1AnalysisTaskNodesOutputReference | MrsHybridClusterV1AnalysisTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsHybridClusterV1AnalysisTaskNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsHybridClusterV1AnalysisTaskNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsHybridClusterV1AnalysisTaskNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
    }
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

  // data_volume_size - computed: false, optional: false, required: true
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: false, required: true
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
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

  // root_volume_size - computed: true, optional: false, required: false
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }

  // root_volume_type - computed: true, optional: false, required: false
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
}
export interface MrsHybridClusterV1MasterNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_count MrsHybridClusterV1#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_size MrsHybridClusterV1#data_volume_size}
  */
  readonly dataVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_type MrsHybridClusterV1#data_volume_type}
  */
  readonly dataVolumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#flavor MrsHybridClusterV1#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#node_number MrsHybridClusterV1#node_number}
  */
  readonly nodeNumber: number;
}

export function mrsHybridClusterV1MasterNodesToTerraform(struct?: MrsHybridClusterV1MasterNodesOutputReference | MrsHybridClusterV1MasterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
  }
}


export function mrsHybridClusterV1MasterNodesToHclTerraform(struct?: MrsHybridClusterV1MasterNodesOutputReference | MrsHybridClusterV1MasterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsHybridClusterV1MasterNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsHybridClusterV1MasterNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsHybridClusterV1MasterNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
    }
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

  // data_volume_size - computed: false, optional: false, required: true
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: false, required: true
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
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

  // root_volume_size - computed: true, optional: false, required: false
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }

  // root_volume_type - computed: true, optional: false, required: false
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
}
export interface MrsHybridClusterV1StreamingCoreNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_count MrsHybridClusterV1#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_size MrsHybridClusterV1#data_volume_size}
  */
  readonly dataVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_type MrsHybridClusterV1#data_volume_type}
  */
  readonly dataVolumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#flavor MrsHybridClusterV1#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#node_number MrsHybridClusterV1#node_number}
  */
  readonly nodeNumber: number;
}

export function mrsHybridClusterV1StreamingCoreNodesToTerraform(struct?: MrsHybridClusterV1StreamingCoreNodesOutputReference | MrsHybridClusterV1StreamingCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
  }
}


export function mrsHybridClusterV1StreamingCoreNodesToHclTerraform(struct?: MrsHybridClusterV1StreamingCoreNodesOutputReference | MrsHybridClusterV1StreamingCoreNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsHybridClusterV1StreamingCoreNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsHybridClusterV1StreamingCoreNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsHybridClusterV1StreamingCoreNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
    }
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

  // data_volume_size - computed: false, optional: false, required: true
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: false, required: true
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
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

  // root_volume_size - computed: true, optional: false, required: false
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }

  // root_volume_type - computed: true, optional: false, required: false
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
}
export interface MrsHybridClusterV1StreamingTaskNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_count MrsHybridClusterV1#data_volume_count}
  */
  readonly dataVolumeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_size MrsHybridClusterV1#data_volume_size}
  */
  readonly dataVolumeSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#data_volume_type MrsHybridClusterV1#data_volume_type}
  */
  readonly dataVolumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#flavor MrsHybridClusterV1#flavor}
  */
  readonly flavor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#node_number MrsHybridClusterV1#node_number}
  */
  readonly nodeNumber: number;
}

export function mrsHybridClusterV1StreamingTaskNodesToTerraform(struct?: MrsHybridClusterV1StreamingTaskNodesOutputReference | MrsHybridClusterV1StreamingTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_volume_count: cdktf.numberToTerraform(struct!.dataVolumeCount),
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    data_volume_type: cdktf.stringToTerraform(struct!.dataVolumeType),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
  }
}


export function mrsHybridClusterV1StreamingTaskNodesToHclTerraform(struct?: MrsHybridClusterV1StreamingTaskNodesOutputReference | MrsHybridClusterV1StreamingTaskNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MrsHybridClusterV1StreamingTaskNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsHybridClusterV1StreamingTaskNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MrsHybridClusterV1StreamingTaskNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataVolumeCount = undefined;
      this._dataVolumeSize = undefined;
      this._dataVolumeType = undefined;
      this._flavor = undefined;
      this._nodeNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataVolumeCount = value.dataVolumeCount;
      this._dataVolumeSize = value.dataVolumeSize;
      this._dataVolumeType = value.dataVolumeType;
      this._flavor = value.flavor;
      this._nodeNumber = value.nodeNumber;
    }
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

  // data_volume_size - computed: false, optional: false, required: true
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // data_volume_type - computed: false, optional: false, required: true
  private _dataVolumeType?: string; 
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }
  public set dataVolumeType(value: string) {
    this._dataVolumeType = value;
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

  // root_volume_size - computed: true, optional: false, required: false
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }

  // root_volume_type - computed: true, optional: false, required: false
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }
}
export interface MrsHybridClusterV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#create MrsHybridClusterV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#delete MrsHybridClusterV1#delete}
  */
  readonly delete?: string;
}

export function mrsHybridClusterV1TimeoutsToTerraform(struct?: MrsHybridClusterV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function mrsHybridClusterV1TimeoutsToHclTerraform(struct?: MrsHybridClusterV1Timeouts | cdktf.IResolvable): any {
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

export class MrsHybridClusterV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MrsHybridClusterV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MrsHybridClusterV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1 flexibleengine_mrs_hybrid_cluster_v1}
*/
export class MrsHybridClusterV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_mrs_hybrid_cluster_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MrsHybridClusterV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MrsHybridClusterV1 to import
  * @param importFromId The id of the existing MrsHybridClusterV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MrsHybridClusterV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_mrs_hybrid_cluster_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/mrs_hybrid_cluster_v1 flexibleengine_mrs_hybrid_cluster_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MrsHybridClusterV1Config
  */
  public constructor(scope: Construct, id: string, config: MrsHybridClusterV1Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_mrs_hybrid_cluster_v1',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0',
        providerVersionConstraint: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availableZone = config.availableZone;
    this._clusterAdminSecret = config.clusterAdminSecret;
    this._clusterName = config.clusterName;
    this._clusterVersion = config.clusterVersion;
    this._componentList = config.componentList;
    this._id = config.id;
    this._logCollection = config.logCollection;
    this._masterNodeKeyPair = config.masterNodeKeyPair;
    this._region = config.region;
    this._safeMode = config.safeMode;
    this._securityGroupId = config.securityGroupId;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._analysisCoreNodes.internalValue = config.analysisCoreNodes;
    this._analysisTaskNodes.internalValue = config.analysisTaskNodes;
    this._masterNodes.internalValue = config.masterNodes;
    this._streamingCoreNodes.internalValue = config.streamingCoreNodes;
    this._streamingTaskNodes.internalValue = config.streamingTaskNodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_zone - computed: false, optional: false, required: true
  private _availableZone?: string; 
  public get availableZone() {
    return this.getStringAttribute('available_zone');
  }
  public set availableZone(value: string) {
    this._availableZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZoneInput() {
    return this._availableZone;
  }

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }

  // charging_start_time - computed: true, optional: false, required: false
  public get chargingStartTime() {
    return this.getStringAttribute('charging_start_time');
  }

  // cluster_admin_secret - computed: false, optional: true, required: false
  private _clusterAdminSecret?: string; 
  public get clusterAdminSecret() {
    return this.getStringAttribute('cluster_admin_secret');
  }
  public set clusterAdminSecret(value: string) {
    this._clusterAdminSecret = value;
  }
  public resetClusterAdminSecret() {
    this._clusterAdminSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminSecretInput() {
    return this._clusterAdminSecret;
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

  // cluster_version - computed: true, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // component_list - computed: false, optional: false, required: true
  private _componentList?: string[]; 
  public get componentList() {
    return this.getListAttribute('component_list');
  }
  public set componentList(value: string[]) {
    this._componentList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentListInput() {
    return this._componentList;
  }

  // components - computed: true, optional: false, required: false
  private _components = new MrsHybridClusterV1ComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // create_at - computed: true, optional: false, required: false
  public get createAt() {
    return this.getStringAttribute('create_at');
  }

  // external_alternate_ip - computed: true, optional: false, required: false
  public get externalAlternateIp() {
    return this.getStringAttribute('external_alternate_ip');
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
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

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // log_collection - computed: false, optional: true, required: false
  private _logCollection?: number; 
  public get logCollection() {
    return this.getNumberAttribute('log_collection');
  }
  public set logCollection(value: number) {
    this._logCollection = value;
  }
  public resetLogCollection() {
    this._logCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionInput() {
    return this._logCollection;
  }

  // master_node_ip - computed: true, optional: false, required: false
  public get masterNodeIp() {
    return this.getStringAttribute('master_node_ip');
  }

  // master_node_key_pair - computed: false, optional: false, required: true
  private _masterNodeKeyPair?: string; 
  public get masterNodeKeyPair() {
    return this.getStringAttribute('master_node_key_pair');
  }
  public set masterNodeKeyPair(value: string) {
    this._masterNodeKeyPair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeKeyPairInput() {
    return this._masterNodeKeyPair;
  }

  // private_ip_first - computed: true, optional: false, required: false
  public get privateIpFirst() {
    return this.getStringAttribute('private_ip_first');
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
  private _safeMode?: number; 
  public get safeMode() {
    return this.getNumberAttribute('safe_mode');
  }
  public set safeMode(value: number) {
    this._safeMode = value;
  }
  public resetSafeMode() {
    this._safeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeModeInput() {
    return this._safeMode;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // total_node_number - computed: true, optional: false, required: false
  public get totalNodeNumber() {
    return this.getNumberAttribute('total_node_number');
  }

  // update_at - computed: true, optional: false, required: false
  public get updateAt() {
    return this.getStringAttribute('update_at');
  }

  // vnc - computed: true, optional: false, required: false
  public get vnc() {
    return this.getStringAttribute('vnc');
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

  // analysis_core_nodes - computed: false, optional: false, required: true
  private _analysisCoreNodes = new MrsHybridClusterV1AnalysisCoreNodesOutputReference(this, "analysis_core_nodes");
  public get analysisCoreNodes() {
    return this._analysisCoreNodes;
  }
  public putAnalysisCoreNodes(value: MrsHybridClusterV1AnalysisCoreNodes) {
    this._analysisCoreNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisCoreNodesInput() {
    return this._analysisCoreNodes.internalValue;
  }

  // analysis_task_nodes - computed: false, optional: true, required: false
  private _analysisTaskNodes = new MrsHybridClusterV1AnalysisTaskNodesOutputReference(this, "analysis_task_nodes");
  public get analysisTaskNodes() {
    return this._analysisTaskNodes;
  }
  public putAnalysisTaskNodes(value: MrsHybridClusterV1AnalysisTaskNodes) {
    this._analysisTaskNodes.internalValue = value;
  }
  public resetAnalysisTaskNodes() {
    this._analysisTaskNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisTaskNodesInput() {
    return this._analysisTaskNodes.internalValue;
  }

  // master_nodes - computed: false, optional: false, required: true
  private _masterNodes = new MrsHybridClusterV1MasterNodesOutputReference(this, "master_nodes");
  public get masterNodes() {
    return this._masterNodes;
  }
  public putMasterNodes(value: MrsHybridClusterV1MasterNodes) {
    this._masterNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodesInput() {
    return this._masterNodes.internalValue;
  }

  // streaming_core_nodes - computed: false, optional: false, required: true
  private _streamingCoreNodes = new MrsHybridClusterV1StreamingCoreNodesOutputReference(this, "streaming_core_nodes");
  public get streamingCoreNodes() {
    return this._streamingCoreNodes;
  }
  public putStreamingCoreNodes(value: MrsHybridClusterV1StreamingCoreNodes) {
    this._streamingCoreNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingCoreNodesInput() {
    return this._streamingCoreNodes.internalValue;
  }

  // streaming_task_nodes - computed: false, optional: true, required: false
  private _streamingTaskNodes = new MrsHybridClusterV1StreamingTaskNodesOutputReference(this, "streaming_task_nodes");
  public get streamingTaskNodes() {
    return this._streamingTaskNodes;
  }
  public putStreamingTaskNodes(value: MrsHybridClusterV1StreamingTaskNodes) {
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
  private _timeouts = new MrsHybridClusterV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MrsHybridClusterV1Timeouts) {
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
      available_zone: cdktf.stringToTerraform(this._availableZone),
      cluster_admin_secret: cdktf.stringToTerraform(this._clusterAdminSecret),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      component_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._componentList),
      id: cdktf.stringToTerraform(this._id),
      log_collection: cdktf.numberToTerraform(this._logCollection),
      master_node_key_pair: cdktf.stringToTerraform(this._masterNodeKeyPair),
      region: cdktf.stringToTerraform(this._region),
      safe_mode: cdktf.numberToTerraform(this._safeMode),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      analysis_core_nodes: mrsHybridClusterV1AnalysisCoreNodesToTerraform(this._analysisCoreNodes.internalValue),
      analysis_task_nodes: mrsHybridClusterV1AnalysisTaskNodesToTerraform(this._analysisTaskNodes.internalValue),
      master_nodes: mrsHybridClusterV1MasterNodesToTerraform(this._masterNodes.internalValue),
      streaming_core_nodes: mrsHybridClusterV1StreamingCoreNodesToTerraform(this._streamingCoreNodes.internalValue),
      streaming_task_nodes: mrsHybridClusterV1StreamingTaskNodesToTerraform(this._streamingTaskNodes.internalValue),
      timeouts: mrsHybridClusterV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      available_zone: {
        value: cdktf.stringToHclTerraform(this._availableZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_admin_secret: {
        value: cdktf.stringToHclTerraform(this._clusterAdminSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._componentList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_collection: {
        value: cdktf.numberToHclTerraform(this._logCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_key_pair: {
        value: cdktf.stringToHclTerraform(this._masterNodeKeyPair),
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
        value: cdktf.numberToHclTerraform(this._safeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
        value: mrsHybridClusterV1AnalysisCoreNodesToHclTerraform(this._analysisCoreNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsHybridClusterV1AnalysisCoreNodesList",
      },
      analysis_task_nodes: {
        value: mrsHybridClusterV1AnalysisTaskNodesToHclTerraform(this._analysisTaskNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsHybridClusterV1AnalysisTaskNodesList",
      },
      master_nodes: {
        value: mrsHybridClusterV1MasterNodesToHclTerraform(this._masterNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsHybridClusterV1MasterNodesList",
      },
      streaming_core_nodes: {
        value: mrsHybridClusterV1StreamingCoreNodesToHclTerraform(this._streamingCoreNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsHybridClusterV1StreamingCoreNodesList",
      },
      streaming_task_nodes: {
        value: mrsHybridClusterV1StreamingTaskNodesToHclTerraform(this._streamingTaskNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MrsHybridClusterV1StreamingTaskNodesList",
      },
      timeouts: {
        value: mrsHybridClusterV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MrsHybridClusterV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
