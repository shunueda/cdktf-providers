// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackCenRouteMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AS path match mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#as_path_match_mode ApsarastackCenRouteMap#as_path_match_mode}
  */
  readonly asPathMatchMode?: string;
  /**
  * The ID of the CEN instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#cen_id ApsarastackCenRouteMap#cen_id}
  */
  readonly cenId: string;
  /**
  * The CIDR match mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#cidr_match_mode ApsarastackCenRouteMap#cidr_match_mode}
  */
  readonly cidrMatchMode?: string;
  /**
  * The community match mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#community_match_mode ApsarastackCenRouteMap#community_match_mode}
  */
  readonly communityMatchMode?: string;
  /**
  * The community operate mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#community_operate_mode ApsarastackCenRouteMap#community_operate_mode}
  */
  readonly communityOperateMode?: string;
  /**
  * The description of the route map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#description ApsarastackCenRouteMap#description}
  */
  readonly description?: string;
  /**
  * The list of destination child instance types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#destination_child_instance_types ApsarastackCenRouteMap#destination_child_instance_types}
  */
  readonly destinationChildInstanceTypes?: string[];
  /**
  * The list of destination CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#destination_cidr_blocks ApsarastackCenRouteMap#destination_cidr_blocks}
  */
  readonly destinationCidrBlocks?: string[];
  /**
  * The list of destination instance IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#destination_instance_ids ApsarastackCenRouteMap#destination_instance_ids}
  */
  readonly destinationInstanceIds?: string[];
  /**
  * Whether to reverse match destination instance IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#destination_instance_ids_reverse_match ApsarastackCenRouteMap#destination_instance_ids_reverse_match}
  */
  readonly destinationInstanceIdsReverseMatch?: boolean | cdktf.IResolvable;
  /**
  * The list of destination route table IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#destination_route_table_ids ApsarastackCenRouteMap#destination_route_table_ids}
  */
  readonly destinationRouteTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#id ApsarastackCenRouteMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The mapping result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#map_result ApsarastackCenRouteMap#map_result}
  */
  readonly mapResult: string;
  /**
  * The address type to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#match_address_type ApsarastackCenRouteMap#match_address_type}
  */
  readonly matchAddressType?: string;
  /**
  * The list of AS numbers to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#match_asns ApsarastackCenRouteMap#match_asns}
  */
  readonly matchAsns?: number[];
  /**
  * The list of community sets to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#match_community_set ApsarastackCenRouteMap#match_community_set}
  */
  readonly matchCommunitySet?: string[];
  /**
  * The next priority value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#next_priority ApsarastackCenRouteMap#next_priority}
  */
  readonly nextPriority?: number;
  /**
  * The list of community sets to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#operate_community_set ApsarastackCenRouteMap#operate_community_set}
  */
  readonly operateCommunitySet?: string[];
  /**
  * The preference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#preference ApsarastackCenRouteMap#preference}
  */
  readonly preference?: number;
  /**
  * The AS path to prepend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#prepend_as_path ApsarastackCenRouteMap#prepend_as_path}
  */
  readonly prependAsPath?: number[];
  /**
  * The priority of the route map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#priority ApsarastackCenRouteMap#priority}
  */
  readonly priority: number;
  /**
  * The list of route types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#route_types ApsarastackCenRouteMap#route_types}
  */
  readonly routeTypes?: string[];
  /**
  * The list of source child instance types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#source_child_instance_types ApsarastackCenRouteMap#source_child_instance_types}
  */
  readonly sourceChildInstanceTypes?: string[];
  /**
  * The list of source instance IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#source_instance_ids ApsarastackCenRouteMap#source_instance_ids}
  */
  readonly sourceInstanceIds?: string[];
  /**
  * Whether to reverse match source instance IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#source_instance_ids_reverse_match ApsarastackCenRouteMap#source_instance_ids_reverse_match}
  */
  readonly sourceInstanceIdsReverseMatch?: boolean | cdktf.IResolvable;
  /**
  * The list of source region IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#source_region_ids ApsarastackCenRouteMap#source_region_ids}
  */
  readonly sourceRegionIds?: string[];
  /**
  * The list of source route table IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#source_route_table_ids ApsarastackCenRouteMap#source_route_table_ids}
  */
  readonly sourceRouteTableIds?: string[];
  /**
  * The ID of the transit router route table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#transit_router_route_table_id ApsarastackCenRouteMap#transit_router_route_table_id}
  */
  readonly transitRouterRouteTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#transmit_direction ApsarastackCenRouteMap#transmit_direction}
  */
  readonly transmitDirection: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map apsarastack_cen_route_map}
*/
export class ApsarastackCenRouteMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cen_route_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackCenRouteMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackCenRouteMap to import
  * @param importFromId The id of the existing ApsarastackCenRouteMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackCenRouteMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cen_route_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_cen_route_map apsarastack_cen_route_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackCenRouteMapConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackCenRouteMapConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cen_route_map',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asPathMatchMode = config.asPathMatchMode;
    this._cenId = config.cenId;
    this._cidrMatchMode = config.cidrMatchMode;
    this._communityMatchMode = config.communityMatchMode;
    this._communityOperateMode = config.communityOperateMode;
    this._description = config.description;
    this._destinationChildInstanceTypes = config.destinationChildInstanceTypes;
    this._destinationCidrBlocks = config.destinationCidrBlocks;
    this._destinationInstanceIds = config.destinationInstanceIds;
    this._destinationInstanceIdsReverseMatch = config.destinationInstanceIdsReverseMatch;
    this._destinationRouteTableIds = config.destinationRouteTableIds;
    this._id = config.id;
    this._mapResult = config.mapResult;
    this._matchAddressType = config.matchAddressType;
    this._matchAsns = config.matchAsns;
    this._matchCommunitySet = config.matchCommunitySet;
    this._nextPriority = config.nextPriority;
    this._operateCommunitySet = config.operateCommunitySet;
    this._preference = config.preference;
    this._prependAsPath = config.prependAsPath;
    this._priority = config.priority;
    this._routeTypes = config.routeTypes;
    this._sourceChildInstanceTypes = config.sourceChildInstanceTypes;
    this._sourceInstanceIds = config.sourceInstanceIds;
    this._sourceInstanceIdsReverseMatch = config.sourceInstanceIdsReverseMatch;
    this._sourceRegionIds = config.sourceRegionIds;
    this._sourceRouteTableIds = config.sourceRouteTableIds;
    this._transitRouterRouteTableId = config.transitRouterRouteTableId;
    this._transmitDirection = config.transmitDirection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_path_match_mode - computed: false, optional: true, required: false
  private _asPathMatchMode?: string; 
  public get asPathMatchMode() {
    return this.getStringAttribute('as_path_match_mode');
  }
  public set asPathMatchMode(value: string) {
    this._asPathMatchMode = value;
  }
  public resetAsPathMatchMode() {
    this._asPathMatchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathMatchModeInput() {
    return this._asPathMatchMode;
  }

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // cidr_match_mode - computed: false, optional: true, required: false
  private _cidrMatchMode?: string; 
  public get cidrMatchMode() {
    return this.getStringAttribute('cidr_match_mode');
  }
  public set cidrMatchMode(value: string) {
    this._cidrMatchMode = value;
  }
  public resetCidrMatchMode() {
    this._cidrMatchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrMatchModeInput() {
    return this._cidrMatchMode;
  }

  // community_match_mode - computed: false, optional: true, required: false
  private _communityMatchMode?: string; 
  public get communityMatchMode() {
    return this.getStringAttribute('community_match_mode');
  }
  public set communityMatchMode(value: string) {
    this._communityMatchMode = value;
  }
  public resetCommunityMatchMode() {
    this._communityMatchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityMatchModeInput() {
    return this._communityMatchMode;
  }

  // community_operate_mode - computed: false, optional: true, required: false
  private _communityOperateMode?: string; 
  public get communityOperateMode() {
    return this.getStringAttribute('community_operate_mode');
  }
  public set communityOperateMode(value: string) {
    this._communityOperateMode = value;
  }
  public resetCommunityOperateMode() {
    this._communityOperateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityOperateModeInput() {
    return this._communityOperateMode;
  }

  // description - computed: true, optional: true, required: false
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

  // destination_child_instance_types - computed: false, optional: true, required: false
  private _destinationChildInstanceTypes?: string[]; 
  public get destinationChildInstanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_child_instance_types'));
  }
  public set destinationChildInstanceTypes(value: string[]) {
    this._destinationChildInstanceTypes = value;
  }
  public resetDestinationChildInstanceTypes() {
    this._destinationChildInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationChildInstanceTypesInput() {
    return this._destinationChildInstanceTypes;
  }

  // destination_cidr_blocks - computed: false, optional: true, required: false
  private _destinationCidrBlocks?: string[]; 
  public get destinationCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_cidr_blocks'));
  }
  public set destinationCidrBlocks(value: string[]) {
    this._destinationCidrBlocks = value;
  }
  public resetDestinationCidrBlocks() {
    this._destinationCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlocksInput() {
    return this._destinationCidrBlocks;
  }

  // destination_instance_ids - computed: false, optional: true, required: false
  private _destinationInstanceIds?: string[]; 
  public get destinationInstanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_instance_ids'));
  }
  public set destinationInstanceIds(value: string[]) {
    this._destinationInstanceIds = value;
  }
  public resetDestinationInstanceIds() {
    this._destinationInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInstanceIdsInput() {
    return this._destinationInstanceIds;
  }

  // destination_instance_ids_reverse_match - computed: false, optional: true, required: false
  private _destinationInstanceIdsReverseMatch?: boolean | cdktf.IResolvable; 
  public get destinationInstanceIdsReverseMatch() {
    return this.getBooleanAttribute('destination_instance_ids_reverse_match');
  }
  public set destinationInstanceIdsReverseMatch(value: boolean | cdktf.IResolvable) {
    this._destinationInstanceIdsReverseMatch = value;
  }
  public resetDestinationInstanceIdsReverseMatch() {
    this._destinationInstanceIdsReverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInstanceIdsReverseMatchInput() {
    return this._destinationInstanceIdsReverseMatch;
  }

  // destination_route_table_ids - computed: false, optional: true, required: false
  private _destinationRouteTableIds?: string[]; 
  public get destinationRouteTableIds() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_route_table_ids'));
  }
  public set destinationRouteTableIds(value: string[]) {
    this._destinationRouteTableIds = value;
  }
  public resetDestinationRouteTableIds() {
    this._destinationRouteTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRouteTableIdsInput() {
    return this._destinationRouteTableIds;
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

  // map_result - computed: false, optional: false, required: true
  private _mapResult?: string; 
  public get mapResult() {
    return this.getStringAttribute('map_result');
  }
  public set mapResult(value: string) {
    this._mapResult = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapResultInput() {
    return this._mapResult;
  }

  // match_address_type - computed: false, optional: true, required: false
  private _matchAddressType?: string; 
  public get matchAddressType() {
    return this.getStringAttribute('match_address_type');
  }
  public set matchAddressType(value: string) {
    this._matchAddressType = value;
  }
  public resetMatchAddressType() {
    this._matchAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAddressTypeInput() {
    return this._matchAddressType;
  }

  // match_asns - computed: false, optional: true, required: false
  private _matchAsns?: number[]; 
  public get matchAsns() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('match_asns')));
  }
  public set matchAsns(value: number[]) {
    this._matchAsns = value;
  }
  public resetMatchAsns() {
    this._matchAsns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAsnsInput() {
    return this._matchAsns;
  }

  // match_community_set - computed: false, optional: true, required: false
  private _matchCommunitySet?: string[]; 
  public get matchCommunitySet() {
    return cdktf.Fn.tolist(this.getListAttribute('match_community_set'));
  }
  public set matchCommunitySet(value: string[]) {
    this._matchCommunitySet = value;
  }
  public resetMatchCommunitySet() {
    this._matchCommunitySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCommunitySetInput() {
    return this._matchCommunitySet;
  }

  // next_priority - computed: false, optional: true, required: false
  private _nextPriority?: number; 
  public get nextPriority() {
    return this.getNumberAttribute('next_priority');
  }
  public set nextPriority(value: number) {
    this._nextPriority = value;
  }
  public resetNextPriority() {
    this._nextPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextPriorityInput() {
    return this._nextPriority;
  }

  // operate_community_set - computed: false, optional: true, required: false
  private _operateCommunitySet?: string[]; 
  public get operateCommunitySet() {
    return cdktf.Fn.tolist(this.getListAttribute('operate_community_set'));
  }
  public set operateCommunitySet(value: string[]) {
    this._operateCommunitySet = value;
  }
  public resetOperateCommunitySet() {
    this._operateCommunitySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operateCommunitySetInput() {
    return this._operateCommunitySet;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // prepend_as_path - computed: false, optional: true, required: false
  private _prependAsPath?: number[]; 
  public get prependAsPath() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('prepend_as_path')));
  }
  public set prependAsPath(value: number[]) {
    this._prependAsPath = value;
  }
  public resetPrependAsPath() {
    this._prependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPathInput() {
    return this._prependAsPath;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // route_map_id - computed: true, optional: false, required: false
  public get routeMapId() {
    return this.getStringAttribute('route_map_id');
  }

  // route_types - computed: false, optional: true, required: false
  private _routeTypes?: string[]; 
  public get routeTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('route_types'));
  }
  public set routeTypes(value: string[]) {
    this._routeTypes = value;
  }
  public resetRouteTypes() {
    this._routeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypesInput() {
    return this._routeTypes;
  }

  // source_child_instance_types - computed: false, optional: true, required: false
  private _sourceChildInstanceTypes?: string[]; 
  public get sourceChildInstanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('source_child_instance_types'));
  }
  public set sourceChildInstanceTypes(value: string[]) {
    this._sourceChildInstanceTypes = value;
  }
  public resetSourceChildInstanceTypes() {
    this._sourceChildInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceChildInstanceTypesInput() {
    return this._sourceChildInstanceTypes;
  }

  // source_instance_ids - computed: false, optional: true, required: false
  private _sourceInstanceIds?: string[]; 
  public get sourceInstanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('source_instance_ids'));
  }
  public set sourceInstanceIds(value: string[]) {
    this._sourceInstanceIds = value;
  }
  public resetSourceInstanceIds() {
    this._sourceInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceIdsInput() {
    return this._sourceInstanceIds;
  }

  // source_instance_ids_reverse_match - computed: false, optional: true, required: false
  private _sourceInstanceIdsReverseMatch?: boolean | cdktf.IResolvable; 
  public get sourceInstanceIdsReverseMatch() {
    return this.getBooleanAttribute('source_instance_ids_reverse_match');
  }
  public set sourceInstanceIdsReverseMatch(value: boolean | cdktf.IResolvable) {
    this._sourceInstanceIdsReverseMatch = value;
  }
  public resetSourceInstanceIdsReverseMatch() {
    this._sourceInstanceIdsReverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceIdsReverseMatchInput() {
    return this._sourceInstanceIdsReverseMatch;
  }

  // source_region_ids - computed: false, optional: true, required: false
  private _sourceRegionIds?: string[]; 
  public get sourceRegionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('source_region_ids'));
  }
  public set sourceRegionIds(value: string[]) {
    this._sourceRegionIds = value;
  }
  public resetSourceRegionIds() {
    this._sourceRegionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionIdsInput() {
    return this._sourceRegionIds;
  }

  // source_route_table_ids - computed: false, optional: true, required: false
  private _sourceRouteTableIds?: string[]; 
  public get sourceRouteTableIds() {
    return cdktf.Fn.tolist(this.getListAttribute('source_route_table_ids'));
  }
  public set sourceRouteTableIds(value: string[]) {
    this._sourceRouteTableIds = value;
  }
  public resetSourceRouteTableIds() {
    this._sourceRouteTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRouteTableIdsInput() {
    return this._sourceRouteTableIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_route_table_id - computed: false, optional: false, required: true
  private _transitRouterRouteTableId?: string; 
  public get transitRouterRouteTableId() {
    return this.getStringAttribute('transit_router_route_table_id');
  }
  public set transitRouterRouteTableId(value: string) {
    this._transitRouterRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableIdInput() {
    return this._transitRouterRouteTableId;
  }

  // transmit_direction - computed: false, optional: false, required: true
  private _transmitDirection?: string; 
  public get transmitDirection() {
    return this.getStringAttribute('transmit_direction');
  }
  public set transmitDirection(value: string) {
    this._transmitDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDirectionInput() {
    return this._transmitDirection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_path_match_mode: cdktf.stringToTerraform(this._asPathMatchMode),
      cen_id: cdktf.stringToTerraform(this._cenId),
      cidr_match_mode: cdktf.stringToTerraform(this._cidrMatchMode),
      community_match_mode: cdktf.stringToTerraform(this._communityMatchMode),
      community_operate_mode: cdktf.stringToTerraform(this._communityOperateMode),
      description: cdktf.stringToTerraform(this._description),
      destination_child_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationChildInstanceTypes),
      destination_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationCidrBlocks),
      destination_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationInstanceIds),
      destination_instance_ids_reverse_match: cdktf.booleanToTerraform(this._destinationInstanceIdsReverseMatch),
      destination_route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationRouteTableIds),
      id: cdktf.stringToTerraform(this._id),
      map_result: cdktf.stringToTerraform(this._mapResult),
      match_address_type: cdktf.stringToTerraform(this._matchAddressType),
      match_asns: cdktf.listMapper(cdktf.numberToTerraform, false)(this._matchAsns),
      match_community_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchCommunitySet),
      next_priority: cdktf.numberToTerraform(this._nextPriority),
      operate_community_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operateCommunitySet),
      preference: cdktf.numberToTerraform(this._preference),
      prepend_as_path: cdktf.listMapper(cdktf.numberToTerraform, false)(this._prependAsPath),
      priority: cdktf.numberToTerraform(this._priority),
      route_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeTypes),
      source_child_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceChildInstanceTypes),
      source_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceInstanceIds),
      source_instance_ids_reverse_match: cdktf.booleanToTerraform(this._sourceInstanceIdsReverseMatch),
      source_region_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceRegionIds),
      source_route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceRouteTableIds),
      transit_router_route_table_id: cdktf.stringToTerraform(this._transitRouterRouteTableId),
      transmit_direction: cdktf.stringToTerraform(this._transmitDirection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_path_match_mode: {
        value: cdktf.stringToHclTerraform(this._asPathMatchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_match_mode: {
        value: cdktf.stringToHclTerraform(this._cidrMatchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community_match_mode: {
        value: cdktf.stringToHclTerraform(this._communityMatchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      community_operate_mode: {
        value: cdktf.stringToHclTerraform(this._communityOperateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_child_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationChildInstanceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      destination_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationCidrBlocks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      destination_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationInstanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      destination_instance_ids_reverse_match: {
        value: cdktf.booleanToHclTerraform(this._destinationInstanceIdsReverseMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination_route_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationRouteTableIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map_result: {
        value: cdktf.stringToHclTerraform(this._mapResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_address_type: {
        value: cdktf.stringToHclTerraform(this._matchAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_asns: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._matchAsns),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      match_community_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchCommunitySet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      next_priority: {
        value: cdktf.numberToHclTerraform(this._nextPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operate_community_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operateCommunitySet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._prependAsPath),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_child_instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceChildInstanceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceInstanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_instance_ids_reverse_match: {
        value: cdktf.booleanToHclTerraform(this._sourceInstanceIdsReverseMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_region_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceRegionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_route_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceRouteTableIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      transit_router_route_table_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transmit_direction: {
        value: cdktf.stringToHclTerraform(this._transmitDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
