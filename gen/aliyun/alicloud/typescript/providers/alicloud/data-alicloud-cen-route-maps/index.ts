// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCenRouteMapsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#cen_id DataAlicloudCenRouteMaps#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#cen_region_id DataAlicloudCenRouteMaps#cen_region_id}
  */
  readonly cenRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#description_regex DataAlicloudCenRouteMaps#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#id DataAlicloudCenRouteMaps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#ids DataAlicloudCenRouteMaps#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#output_file DataAlicloudCenRouteMaps#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#status DataAlicloudCenRouteMaps#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#transmit_direction DataAlicloudCenRouteMaps#transmit_direction}
  */
  readonly transmitDirection?: string;
}
export interface DataAlicloudCenRouteMapsMaps {
}

export function dataAlicloudCenRouteMapsMapsToTerraform(struct?: DataAlicloudCenRouteMapsMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCenRouteMapsMapsToHclTerraform(struct?: DataAlicloudCenRouteMapsMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCenRouteMapsMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCenRouteMapsMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCenRouteMapsMaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_path_match_mode - computed: true, optional: false, required: false
  public get asPathMatchMode() {
    return this.getStringAttribute('as_path_match_mode');
  }

  // cen_id - computed: true, optional: false, required: false
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }

  // cen_region_id - computed: true, optional: false, required: false
  public get cenRegionId() {
    return this.getStringAttribute('cen_region_id');
  }

  // cidr_match_mode - computed: true, optional: false, required: false
  public get cidrMatchMode() {
    return this.getStringAttribute('cidr_match_mode');
  }

  // community_match_mode - computed: true, optional: false, required: false
  public get communityMatchMode() {
    return this.getStringAttribute('community_match_mode');
  }

  // community_operate_mode - computed: true, optional: false, required: false
  public get communityOperateMode() {
    return this.getStringAttribute('community_operate_mode');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_child_instance_types - computed: true, optional: false, required: false
  public get destinationChildInstanceTypes() {
    return this.getListAttribute('destination_child_instance_types');
  }

  // destination_cidr_blocks - computed: true, optional: false, required: false
  public get destinationCidrBlocks() {
    return this.getListAttribute('destination_cidr_blocks');
  }

  // destination_instance_ids - computed: true, optional: false, required: false
  public get destinationInstanceIds() {
    return this.getListAttribute('destination_instance_ids');
  }

  // destination_instance_ids_reverse_match - computed: true, optional: false, required: false
  public get destinationInstanceIdsReverseMatch() {
    return this.getBooleanAttribute('destination_instance_ids_reverse_match');
  }

  // destination_route_table_ids - computed: true, optional: false, required: false
  public get destinationRouteTableIds() {
    return this.getListAttribute('destination_route_table_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // map_result - computed: true, optional: false, required: false
  public get mapResult() {
    return this.getStringAttribute('map_result');
  }

  // match_asns - computed: true, optional: false, required: false
  public get matchAsns() {
    return this.getListAttribute('match_asns');
  }

  // match_community_set - computed: true, optional: false, required: false
  public get matchCommunitySet() {
    return this.getListAttribute('match_community_set');
  }

  // next_priority - computed: true, optional: false, required: false
  public get nextPriority() {
    return this.getNumberAttribute('next_priority');
  }

  // operate_community_set - computed: true, optional: false, required: false
  public get operateCommunitySet() {
    return this.getListAttribute('operate_community_set');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }

  // prepend_as_path - computed: true, optional: false, required: false
  public get prependAsPath() {
    return this.getListAttribute('prepend_as_path');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // route_map_id - computed: true, optional: false, required: false
  public get routeMapId() {
    return this.getStringAttribute('route_map_id');
  }

  // route_types - computed: true, optional: false, required: false
  public get routeTypes() {
    return this.getListAttribute('route_types');
  }

  // source_child_instance_types - computed: true, optional: false, required: false
  public get sourceChildInstanceTypes() {
    return this.getListAttribute('source_child_instance_types');
  }

  // source_instance_ids - computed: true, optional: false, required: false
  public get sourceInstanceIds() {
    return this.getListAttribute('source_instance_ids');
  }

  // source_instance_ids_reverse_match - computed: true, optional: false, required: false
  public get sourceInstanceIdsReverseMatch() {
    return this.getBooleanAttribute('source_instance_ids_reverse_match');
  }

  // source_region_ids - computed: true, optional: false, required: false
  public get sourceRegionIds() {
    return this.getListAttribute('source_region_ids');
  }

  // source_route_table_ids - computed: true, optional: false, required: false
  public get sourceRouteTableIds() {
    return this.getListAttribute('source_route_table_ids');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transmit_direction - computed: true, optional: false, required: false
  public get transmitDirection() {
    return this.getStringAttribute('transmit_direction');
  }
}

export class DataAlicloudCenRouteMapsMapsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCenRouteMapsMapsOutputReference {
    return new DataAlicloudCenRouteMapsMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps alicloud_cen_route_maps}
*/
export class DataAlicloudCenRouteMaps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_route_maps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCenRouteMaps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCenRouteMaps to import
  * @param importFromId The id of the existing DataAlicloudCenRouteMaps that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCenRouteMaps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_route_maps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_route_maps alicloud_cen_route_maps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCenRouteMapsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCenRouteMapsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_route_maps',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenId = config.cenId;
    this._cenRegionId = config.cenRegionId;
    this._descriptionRegex = config.descriptionRegex;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._status = config.status;
    this._transmitDirection = config.transmitDirection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cen_region_id - computed: false, optional: true, required: false
  private _cenRegionId?: string; 
  public get cenRegionId() {
    return this.getStringAttribute('cen_region_id');
  }
  public set cenRegionId(value: string) {
    this._cenRegionId = value;
  }
  public resetCenRegionId() {
    this._cenRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenRegionIdInput() {
    return this._cenRegionId;
  }

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // maps - computed: true, optional: false, required: false
  private _maps = new DataAlicloudCenRouteMapsMapsList(this, "maps", false);
  public get maps() {
    return this._maps;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // transmit_direction - computed: false, optional: true, required: false
  private _transmitDirection?: string; 
  public get transmitDirection() {
    return this.getStringAttribute('transmit_direction');
  }
  public set transmitDirection(value: string) {
    this._transmitDirection = value;
  }
  public resetTransmitDirection() {
    this._transmitDirection = undefined;
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
      cen_id: cdktf.stringToTerraform(this._cenId),
      cen_region_id: cdktf.stringToTerraform(this._cenRegionId),
      description_regex: cdktf.stringToTerraform(this._descriptionRegex),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
      transmit_direction: cdktf.stringToTerraform(this._transmitDirection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cen_region_id: {
        value: cdktf.stringToHclTerraform(this._cenRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_regex: {
        value: cdktf.stringToHclTerraform(this._descriptionRegex),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
