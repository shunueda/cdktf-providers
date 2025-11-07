// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentRoutingTePolicyCandidatePathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#delete_mode SegmentRoutingTePolicyCandidatePath#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#device SegmentRoutingTePolicyCandidatePath#device}
  */
  readonly device?: string;
  /**
  * Path-option preference
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#path_index SegmentRoutingTePolicyCandidatePath#path_index}
  */
  readonly pathIndex: number;
  /**
  * Policy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#path_infos SegmentRoutingTePolicyCandidatePath#path_infos}
  */
  readonly pathInfos?: SegmentRoutingTePolicyCandidatePathPathInfos[] | cdktf.IResolvable;
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#policy_name SegmentRoutingTePolicyCandidatePath#policy_name}
  */
  readonly policyName: string;
}
export interface SegmentRoutingTePolicyCandidatePathPathInfos {
  /**
  * Type of dynamic path to be computed
  *   - Choices: `mpls`, `srv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#hop_type SegmentRoutingTePolicyCandidatePath#hop_type}
  */
  readonly hopType: string;
  /**
  * Metric type
  *   - Choices: `hopcount`, `igp`, `latency`, `te`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#metric_type SegmentRoutingTePolicyCandidatePath#metric_type}
  */
  readonly metricType?: string;
  /**
  * Path Computation Element Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#pcep SegmentRoutingTePolicyCandidatePath#pcep}
  */
  readonly pcep?: boolean | cdktf.IResolvable;
  /**
  * Segment-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#segment_list_name SegmentRoutingTePolicyCandidatePath#segment_list_name}
  */
  readonly segmentListName: string;
  /**
  * Path-option type
  *   - Choices: `dynamic`, `explicit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#type SegmentRoutingTePolicyCandidatePath#type}
  */
  readonly type: string;
}

export function segmentRoutingTePolicyCandidatePathPathInfosToTerraform(struct?: SegmentRoutingTePolicyCandidatePathPathInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hop_type: cdktf.stringToTerraform(struct!.hopType),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    pcep: cdktf.booleanToTerraform(struct!.pcep),
    segment_list_name: cdktf.stringToTerraform(struct!.segmentListName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function segmentRoutingTePolicyCandidatePathPathInfosToHclTerraform(struct?: SegmentRoutingTePolicyCandidatePathPathInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hop_type: {
      value: cdktf.stringToHclTerraform(struct!.hopType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pcep: {
      value: cdktf.booleanToHclTerraform(struct!.pcep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_list_name: {
      value: cdktf.stringToHclTerraform(struct!.segmentListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SegmentRoutingTePolicyCandidatePathPathInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SegmentRoutingTePolicyCandidatePathPathInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hopType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopType = this._hopType;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._pcep !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcep = this._pcep;
    }
    if (this._segmentListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentListName = this._segmentListName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SegmentRoutingTePolicyCandidatePathPathInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hopType = undefined;
      this._metricType = undefined;
      this._pcep = undefined;
      this._segmentListName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hopType = value.hopType;
      this._metricType = value.metricType;
      this._pcep = value.pcep;
      this._segmentListName = value.segmentListName;
      this._type = value.type;
    }
  }

  // hop_type - computed: false, optional: false, required: true
  private _hopType?: string; 
  public get hopType() {
    return this.getStringAttribute('hop_type');
  }
  public set hopType(value: string) {
    this._hopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hopTypeInput() {
    return this._hopType;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // pcep - computed: false, optional: true, required: false
  private _pcep?: boolean | cdktf.IResolvable; 
  public get pcep() {
    return this.getBooleanAttribute('pcep');
  }
  public set pcep(value: boolean | cdktf.IResolvable) {
    this._pcep = value;
  }
  public resetPcep() {
    this._pcep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcepInput() {
    return this._pcep;
  }

  // segment_list_name - computed: false, optional: false, required: true
  private _segmentListName?: string; 
  public get segmentListName() {
    return this.getStringAttribute('segment_list_name');
  }
  public set segmentListName(value: string) {
    this._segmentListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentListNameInput() {
    return this._segmentListName;
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
}

export class SegmentRoutingTePolicyCandidatePathPathInfosList extends cdktf.ComplexList {
  public internalValue? : SegmentRoutingTePolicyCandidatePathPathInfos[] | cdktf.IResolvable

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
  public get(index: number): SegmentRoutingTePolicyCandidatePathPathInfosOutputReference {
    return new SegmentRoutingTePolicyCandidatePathPathInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path iosxr_segment_routing_te_policy_candidate_path}
*/
export class SegmentRoutingTePolicyCandidatePath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_segment_routing_te_policy_candidate_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SegmentRoutingTePolicyCandidatePath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SegmentRoutingTePolicyCandidatePath to import
  * @param importFromId The id of the existing SegmentRoutingTePolicyCandidatePath that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SegmentRoutingTePolicyCandidatePath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_segment_routing_te_policy_candidate_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/segment_routing_te_policy_candidate_path iosxr_segment_routing_te_policy_candidate_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentRoutingTePolicyCandidatePathConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentRoutingTePolicyCandidatePathConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_segment_routing_te_policy_candidate_path',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._pathIndex = config.pathIndex;
    this._pathInfos.internalValue = config.pathInfos;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path_index - computed: false, optional: false, required: true
  private _pathIndex?: number; 
  public get pathIndex() {
    return this.getNumberAttribute('path_index');
  }
  public set pathIndex(value: number) {
    this._pathIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathIndexInput() {
    return this._pathIndex;
  }

  // path_infos - computed: false, optional: true, required: false
  private _pathInfos = new SegmentRoutingTePolicyCandidatePathPathInfosList(this, "path_infos", false);
  public get pathInfos() {
    return this._pathInfos;
  }
  public putPathInfos(value: SegmentRoutingTePolicyCandidatePathPathInfos[] | cdktf.IResolvable) {
    this._pathInfos.internalValue = value;
  }
  public resetPathInfos() {
    this._pathInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInfosInput() {
    return this._pathInfos.internalValue;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      path_index: cdktf.numberToTerraform(this._pathIndex),
      path_infos: cdktf.listMapper(segmentRoutingTePolicyCandidatePathPathInfosToTerraform, false)(this._pathInfos.internalValue),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_index: {
        value: cdktf.numberToHclTerraform(this._pathIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path_infos: {
        value: cdktf.listMapperHcl(segmentRoutingTePolicyCandidatePathPathInfosToHclTerraform, false)(this._pathInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SegmentRoutingTePolicyCandidatePathPathInfosList",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
