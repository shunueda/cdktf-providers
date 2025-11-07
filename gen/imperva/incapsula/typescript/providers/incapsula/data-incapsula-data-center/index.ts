// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncapsulaDataCenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by assigned geo location or the Data Center, which serves the rest of the world, if the geo location is not assigned to any other Data Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#filter_by_geo_location DataIncapsulaDataCenter#filter_by_geo_location}
  */
  readonly filterByGeoLocation?: string;
  /**
  * Filter by Data Center internal ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#filter_by_id DataIncapsulaDataCenter#filter_by_id}
  */
  readonly filterById?: number;
  /**
  * Filter by whether Data Center is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#filter_by_is_active DataIncapsulaDataCenter#filter_by_is_active}
  */
  readonly filterByIsActive?: boolean | cdktf.IResolvable;
  /**
  * Filter by whether this Data Center will only handle traffic routed by Application Delivery Forward-to-DC rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#filter_by_is_content DataIncapsulaDataCenter#filter_by_is_content}
  */
  readonly filterByIsContent?: boolean | cdktf.IResolvable;
  /**
  * Filter by whether Data Center is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#filter_by_is_enabled DataIncapsulaDataCenter#filter_by_is_enabled}
  */
  readonly filterByIsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Filter by whether this Data Center handles only traffic from geo regions that are not assigned to any other Data Center
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#filter_by_is_rest_of_the_world DataIncapsulaDataCenter#filter_by_is_rest_of_the_world}
  */
  readonly filterByIsRestOfTheWorld?: boolean | cdktf.IResolvable;
  /**
  * Filter by whether Data Center is standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#filter_by_is_standby DataIncapsulaDataCenter#filter_by_is_standby}
  */
  readonly filterByIsStandby?: boolean | cdktf.IResolvable;
  /**
  * Filter by Data Center name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#filter_by_name DataIncapsulaDataCenter#filter_by_name}
  */
  readonly filterByName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#id DataIncapsulaDataCenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#site_id DataIncapsulaDataCenter#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center incapsula_data_center}
*/
export class DataIncapsulaDataCenter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_data_center";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncapsulaDataCenter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncapsulaDataCenter to import
  * @param importFromId The id of the existing DataIncapsulaDataCenter that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncapsulaDataCenter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_data_center", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/data-sources/data_center incapsula_data_center} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncapsulaDataCenterConfig
  */
  public constructor(scope: Construct, id: string, config: DataIncapsulaDataCenterConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_data_center',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterByGeoLocation = config.filterByGeoLocation;
    this._filterById = config.filterById;
    this._filterByIsActive = config.filterByIsActive;
    this._filterByIsContent = config.filterByIsContent;
    this._filterByIsEnabled = config.filterByIsEnabled;
    this._filterByIsRestOfTheWorld = config.filterByIsRestOfTheWorld;
    this._filterByIsStandby = config.filterByIsStandby;
    this._filterByName = config.filterByName;
    this._id = config.id;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_by_geo_location - computed: false, optional: true, required: false
  private _filterByGeoLocation?: string; 
  public get filterByGeoLocation() {
    return this.getStringAttribute('filter_by_geo_location');
  }
  public set filterByGeoLocation(value: string) {
    this._filterByGeoLocation = value;
  }
  public resetFilterByGeoLocation() {
    this._filterByGeoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByGeoLocationInput() {
    return this._filterByGeoLocation;
  }

  // filter_by_id - computed: false, optional: true, required: false
  private _filterById?: number; 
  public get filterById() {
    return this.getNumberAttribute('filter_by_id');
  }
  public set filterById(value: number) {
    this._filterById = value;
  }
  public resetFilterById() {
    this._filterById = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByIdInput() {
    return this._filterById;
  }

  // filter_by_is_active - computed: false, optional: true, required: false
  private _filterByIsActive?: boolean | cdktf.IResolvable; 
  public get filterByIsActive() {
    return this.getBooleanAttribute('filter_by_is_active');
  }
  public set filterByIsActive(value: boolean | cdktf.IResolvable) {
    this._filterByIsActive = value;
  }
  public resetFilterByIsActive() {
    this._filterByIsActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByIsActiveInput() {
    return this._filterByIsActive;
  }

  // filter_by_is_content - computed: false, optional: true, required: false
  private _filterByIsContent?: boolean | cdktf.IResolvable; 
  public get filterByIsContent() {
    return this.getBooleanAttribute('filter_by_is_content');
  }
  public set filterByIsContent(value: boolean | cdktf.IResolvable) {
    this._filterByIsContent = value;
  }
  public resetFilterByIsContent() {
    this._filterByIsContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByIsContentInput() {
    return this._filterByIsContent;
  }

  // filter_by_is_enabled - computed: false, optional: true, required: false
  private _filterByIsEnabled?: boolean | cdktf.IResolvable; 
  public get filterByIsEnabled() {
    return this.getBooleanAttribute('filter_by_is_enabled');
  }
  public set filterByIsEnabled(value: boolean | cdktf.IResolvable) {
    this._filterByIsEnabled = value;
  }
  public resetFilterByIsEnabled() {
    this._filterByIsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByIsEnabledInput() {
    return this._filterByIsEnabled;
  }

  // filter_by_is_rest_of_the_world - computed: false, optional: true, required: false
  private _filterByIsRestOfTheWorld?: boolean | cdktf.IResolvable; 
  public get filterByIsRestOfTheWorld() {
    return this.getBooleanAttribute('filter_by_is_rest_of_the_world');
  }
  public set filterByIsRestOfTheWorld(value: boolean | cdktf.IResolvable) {
    this._filterByIsRestOfTheWorld = value;
  }
  public resetFilterByIsRestOfTheWorld() {
    this._filterByIsRestOfTheWorld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByIsRestOfTheWorldInput() {
    return this._filterByIsRestOfTheWorld;
  }

  // filter_by_is_standby - computed: false, optional: true, required: false
  private _filterByIsStandby?: boolean | cdktf.IResolvable; 
  public get filterByIsStandby() {
    return this.getBooleanAttribute('filter_by_is_standby');
  }
  public set filterByIsStandby(value: boolean | cdktf.IResolvable) {
    this._filterByIsStandby = value;
  }
  public resetFilterByIsStandby() {
    this._filterByIsStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByIsStandbyInput() {
    return this._filterByIsStandby;
  }

  // filter_by_name - computed: false, optional: true, required: false
  private _filterByName?: string; 
  public get filterByName() {
    return this.getStringAttribute('filter_by_name');
  }
  public set filterByName(value: string) {
    this._filterByName = value;
  }
  public resetFilterByName() {
    this._filterByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByNameInput() {
    return this._filterByName;
  }

  // geo_locations - computed: true, optional: false, required: false
  public get geoLocations() {
    return this.getStringAttribute('geo_locations');
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

  // ip_mode - computed: true, optional: false, required: false
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // is_content - computed: true, optional: false, required: false
  public get isContent() {
    return this.getBooleanAttribute('is_content');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_rest_of_the_world - computed: true, optional: false, required: false
  public get isRestOfTheWorld() {
    return this.getBooleanAttribute('is_rest_of_the_world');
  }

  // lb_algorithm - computed: true, optional: false, required: false
  public get lbAlgorithm() {
    return this.getStringAttribute('lb_algorithm');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // origin_pop - computed: true, optional: false, required: false
  public get originPop() {
    return this.getStringAttribute('origin_pop');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_by_geo_location: cdktf.stringToTerraform(this._filterByGeoLocation),
      filter_by_id: cdktf.numberToTerraform(this._filterById),
      filter_by_is_active: cdktf.booleanToTerraform(this._filterByIsActive),
      filter_by_is_content: cdktf.booleanToTerraform(this._filterByIsContent),
      filter_by_is_enabled: cdktf.booleanToTerraform(this._filterByIsEnabled),
      filter_by_is_rest_of_the_world: cdktf.booleanToTerraform(this._filterByIsRestOfTheWorld),
      filter_by_is_standby: cdktf.booleanToTerraform(this._filterByIsStandby),
      filter_by_name: cdktf.stringToTerraform(this._filterByName),
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_by_geo_location: {
        value: cdktf.stringToHclTerraform(this._filterByGeoLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_by_id: {
        value: cdktf.numberToHclTerraform(this._filterById),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter_by_is_active: {
        value: cdktf.booleanToHclTerraform(this._filterByIsActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_by_is_content: {
        value: cdktf.booleanToHclTerraform(this._filterByIsContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_by_is_enabled: {
        value: cdktf.booleanToHclTerraform(this._filterByIsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_by_is_rest_of_the_world: {
        value: cdktf.booleanToHclTerraform(this._filterByIsRestOfTheWorld),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_by_is_standby: {
        value: cdktf.booleanToHclTerraform(this._filterByIsStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_by_name: {
        value: cdktf.stringToHclTerraform(this._filterByName),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
