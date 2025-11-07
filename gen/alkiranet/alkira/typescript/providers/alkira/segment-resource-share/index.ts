// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentResourceShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the segment resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#description SegmentResourceShare#description}
  */
  readonly description?: string;
  /**
  * The designated segment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#designated_segment_id SegmentResourceShare#designated_segment_id}
  */
  readonly designatedSegmentId: string;
  /**
  * The End-A route limit. The default value is `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#end_a_route_limit SegmentResourceShare#end_a_route_limit}
  */
  readonly endARouteLimit?: number;
  /**
  * The End-A segment resource IDs. All segment resources must be on the same segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#end_a_segment_resource_ids SegmentResourceShare#end_a_segment_resource_ids}
  */
  readonly endASegmentResourceIds: number[];
  /**
  * The End-B route limit. The default value is `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#end_b_route_limit SegmentResourceShare#end_b_route_limit}
  */
  readonly endBRouteLimit?: number;
  /**
  * The End-B segment resource IDs. All segment resources must be on the same segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#end_b_segment_resource_ids SegmentResourceShare#end_b_segment_resource_ids}
  */
  readonly endBSegmentResourceIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#id SegmentResourceShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the segment resource share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#name SegmentResourceShare#name}
  */
  readonly name: string;
  /**
  * The ID of a `policy_rule_list` that is to be used for the inter-segment policy generated for this resource. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#policy_rule_list_id SegmentResourceShare#policy_rule_list_id}
  */
  readonly policyRuleListId?: number;
  /**
  * The list of service IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#service_ids SegmentResourceShare#service_ids}
  */
  readonly serviceIds: number[];
  /**
  * Specify the direction in which traffic is orignated at both Resource End-A and Resource End-B. The default value is `BIDIRECTIONAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#traffic_direction SegmentResourceShare#traffic_direction}
  */
  readonly trafficDirection?: string;
  /**
  * The end from which traffic originates. This field is only applicable when `traffic_direction` is set to `UNIDIRECTIONAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#traffic_from_end SegmentResourceShare#traffic_from_end}
  */
  readonly trafficFromEnd?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share alkira_segment_resource_share}
*/
export class SegmentResourceShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_segment_resource_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SegmentResourceShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SegmentResourceShare to import
  * @param importFromId The id of the existing SegmentResourceShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SegmentResourceShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_segment_resource_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment_resource_share alkira_segment_resource_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentResourceShareConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentResourceShareConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_segment_resource_share',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._designatedSegmentId = config.designatedSegmentId;
    this._endARouteLimit = config.endARouteLimit;
    this._endASegmentResourceIds = config.endASegmentResourceIds;
    this._endBRouteLimit = config.endBRouteLimit;
    this._endBSegmentResourceIds = config.endBSegmentResourceIds;
    this._id = config.id;
    this._name = config.name;
    this._policyRuleListId = config.policyRuleListId;
    this._serviceIds = config.serviceIds;
    this._trafficDirection = config.trafficDirection;
    this._trafficFromEnd = config.trafficFromEnd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // designated_segment_id - computed: false, optional: false, required: true
  private _designatedSegmentId?: string; 
  public get designatedSegmentId() {
    return this.getStringAttribute('designated_segment_id');
  }
  public set designatedSegmentId(value: string) {
    this._designatedSegmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get designatedSegmentIdInput() {
    return this._designatedSegmentId;
  }

  // end_a_route_limit - computed: false, optional: true, required: false
  private _endARouteLimit?: number; 
  public get endARouteLimit() {
    return this.getNumberAttribute('end_a_route_limit');
  }
  public set endARouteLimit(value: number) {
    this._endARouteLimit = value;
  }
  public resetEndARouteLimit() {
    this._endARouteLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endARouteLimitInput() {
    return this._endARouteLimit;
  }

  // end_a_segment_resource_ids - computed: false, optional: false, required: true
  private _endASegmentResourceIds?: number[]; 
  public get endASegmentResourceIds() {
    return this.getNumberListAttribute('end_a_segment_resource_ids');
  }
  public set endASegmentResourceIds(value: number[]) {
    this._endASegmentResourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endASegmentResourceIdsInput() {
    return this._endASegmentResourceIds;
  }

  // end_b_route_limit - computed: false, optional: true, required: false
  private _endBRouteLimit?: number; 
  public get endBRouteLimit() {
    return this.getNumberAttribute('end_b_route_limit');
  }
  public set endBRouteLimit(value: number) {
    this._endBRouteLimit = value;
  }
  public resetEndBRouteLimit() {
    this._endBRouteLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endBRouteLimitInput() {
    return this._endBRouteLimit;
  }

  // end_b_segment_resource_ids - computed: false, optional: false, required: true
  private _endBSegmentResourceIds?: number[]; 
  public get endBSegmentResourceIds() {
    return this.getNumberListAttribute('end_b_segment_resource_ids');
  }
  public set endBSegmentResourceIds(value: number[]) {
    this._endBSegmentResourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endBSegmentResourceIdsInput() {
    return this._endBSegmentResourceIds;
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

  // policy_rule_list_id - computed: false, optional: true, required: false
  private _policyRuleListId?: number; 
  public get policyRuleListId() {
    return this.getNumberAttribute('policy_rule_list_id');
  }
  public set policyRuleListId(value: number) {
    this._policyRuleListId = value;
  }
  public resetPolicyRuleListId() {
    this._policyRuleListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleListIdInput() {
    return this._policyRuleListId;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // service_ids - computed: false, optional: false, required: true
  private _serviceIds?: number[]; 
  public get serviceIds() {
    return this.getNumberListAttribute('service_ids');
  }
  public set serviceIds(value: number[]) {
    this._serviceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // traffic_direction - computed: false, optional: true, required: false
  private _trafficDirection?: string; 
  public get trafficDirection() {
    return this.getStringAttribute('traffic_direction');
  }
  public set trafficDirection(value: string) {
    this._trafficDirection = value;
  }
  public resetTrafficDirection() {
    this._trafficDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDirectionInput() {
    return this._trafficDirection;
  }

  // traffic_from_end - computed: false, optional: true, required: false
  private _trafficFromEnd?: string; 
  public get trafficFromEnd() {
    return this.getStringAttribute('traffic_from_end');
  }
  public set trafficFromEnd(value: string) {
    this._trafficFromEnd = value;
  }
  public resetTrafficFromEnd() {
    this._trafficFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficFromEndInput() {
    return this._trafficFromEnd;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      designated_segment_id: cdktf.stringToTerraform(this._designatedSegmentId),
      end_a_route_limit: cdktf.numberToTerraform(this._endARouteLimit),
      end_a_segment_resource_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._endASegmentResourceIds),
      end_b_route_limit: cdktf.numberToTerraform(this._endBRouteLimit),
      end_b_segment_resource_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._endBSegmentResourceIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_rule_list_id: cdktf.numberToTerraform(this._policyRuleListId),
      service_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._serviceIds),
      traffic_direction: cdktf.stringToTerraform(this._trafficDirection),
      traffic_from_end: cdktf.stringToTerraform(this._trafficFromEnd),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      designated_segment_id: {
        value: cdktf.stringToHclTerraform(this._designatedSegmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_a_route_limit: {
        value: cdktf.numberToHclTerraform(this._endARouteLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_a_segment_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._endASegmentResourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      end_b_route_limit: {
        value: cdktf.numberToHclTerraform(this._endBRouteLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_b_segment_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._endBSegmentResourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
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
      policy_rule_list_id: {
        value: cdktf.numberToHclTerraform(this._policyRuleListId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      traffic_direction: {
        value: cdktf.stringToHclTerraform(this._trafficDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_from_end: {
        value: cdktf.stringToHclTerraform(this._trafficFromEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
