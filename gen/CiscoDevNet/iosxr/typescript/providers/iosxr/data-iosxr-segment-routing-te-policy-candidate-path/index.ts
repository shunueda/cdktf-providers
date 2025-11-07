// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te_policy_candidate_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrSegmentRoutingTePolicyCandidatePathConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te_policy_candidate_path#device DataIosxrSegmentRoutingTePolicyCandidatePath#device}
  */
  readonly device?: string;
  /**
  * Path-option preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te_policy_candidate_path#path_index DataIosxrSegmentRoutingTePolicyCandidatePath#path_index}
  */
  readonly pathIndex: number;
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te_policy_candidate_path#policy_name DataIosxrSegmentRoutingTePolicyCandidatePath#policy_name}
  */
  readonly policyName: string;
}
export interface DataIosxrSegmentRoutingTePolicyCandidatePathPathInfos {
}

export function dataIosxrSegmentRoutingTePolicyCandidatePathPathInfosToTerraform(struct?: DataIosxrSegmentRoutingTePolicyCandidatePathPathInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrSegmentRoutingTePolicyCandidatePathPathInfosToHclTerraform(struct?: DataIosxrSegmentRoutingTePolicyCandidatePathPathInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrSegmentRoutingTePolicyCandidatePathPathInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrSegmentRoutingTePolicyCandidatePathPathInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrSegmentRoutingTePolicyCandidatePathPathInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hop_type - computed: true, optional: false, required: false
  public get hopType() {
    return this.getStringAttribute('hop_type');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // pcep - computed: true, optional: false, required: false
  public get pcep() {
    return this.getBooleanAttribute('pcep');
  }

  // segment_list_name - computed: true, optional: false, required: false
  public get segmentListName() {
    return this.getStringAttribute('segment_list_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIosxrSegmentRoutingTePolicyCandidatePathPathInfosList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrSegmentRoutingTePolicyCandidatePathPathInfosOutputReference {
    return new DataIosxrSegmentRoutingTePolicyCandidatePathPathInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te_policy_candidate_path iosxr_segment_routing_te_policy_candidate_path}
*/
export class DataIosxrSegmentRoutingTePolicyCandidatePath extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_segment_routing_te_policy_candidate_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrSegmentRoutingTePolicyCandidatePath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrSegmentRoutingTePolicyCandidatePath to import
  * @param importFromId The id of the existing DataIosxrSegmentRoutingTePolicyCandidatePath that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te_policy_candidate_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrSegmentRoutingTePolicyCandidatePath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_segment_routing_te_policy_candidate_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/segment_routing_te_policy_candidate_path iosxr_segment_routing_te_policy_candidate_path} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrSegmentRoutingTePolicyCandidatePathConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrSegmentRoutingTePolicyCandidatePathConfig) {
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
    this._device = config.device;
    this._pathIndex = config.pathIndex;
    this._policyName = config.policyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // path_infos - computed: true, optional: false, required: false
  private _pathInfos = new DataIosxrSegmentRoutingTePolicyCandidatePathPathInfosList(this, "path_infos", false);
  public get pathInfos() {
    return this._pathInfos;
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
      device: cdktf.stringToTerraform(this._device),
      path_index: cdktf.numberToTerraform(this._pathIndex),
      policy_name: cdktf.stringToTerraform(this._policyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
