// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCasbUseractivityMatchTenantextractionFiltersAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#adom ObjectCasbUseractivityMatchTenantextractionFiltersA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#body_type ObjectCasbUseractivityMatchTenantextractionFiltersA#body_type}
  */
  readonly bodyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#direction ObjectCasbUseractivityMatchTenantextractionFiltersA#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#fosid ObjectCasbUseractivityMatchTenantextractionFiltersA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#header_name ObjectCasbUseractivityMatchTenantextractionFiltersA#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#id ObjectCasbUseractivityMatchTenantextractionFiltersA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#match ObjectCasbUseractivityMatchTenantextractionFiltersA#match}
  */
  readonly match: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#place ObjectCasbUseractivityMatchTenantextractionFiltersA#place}
  */
  readonly place?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#scopetype ObjectCasbUseractivityMatchTenantextractionFiltersA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#user_activity ObjectCasbUseractivityMatchTenantextractionFiltersA#user_activity}
  */
  readonly userActivity: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters fortimanager_object_casb_useractivity_match_tenantextraction_filters}
*/
export class ObjectCasbUseractivityMatchTenantextractionFiltersA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_casb_useractivity_match_tenantextraction_filters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCasbUseractivityMatchTenantextractionFiltersA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCasbUseractivityMatchTenantextractionFiltersA to import
  * @param importFromId The id of the existing ObjectCasbUseractivityMatchTenantextractionFiltersA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCasbUseractivityMatchTenantextractionFiltersA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_casb_useractivity_match_tenantextraction_filters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_tenantextraction_filters fortimanager_object_casb_useractivity_match_tenantextraction_filters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCasbUseractivityMatchTenantextractionFiltersAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectCasbUseractivityMatchTenantextractionFiltersAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_casb_useractivity_match_tenantextraction_filters',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._bodyType = config.bodyType;
    this._direction = config.direction;
    this._fosid = config.fosid;
    this._headerName = config.headerName;
    this._id = config.id;
    this._match = config.match;
    this._place = config.place;
    this._scopetype = config.scopetype;
    this._userActivity = config.userActivity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // body_type - computed: false, optional: true, required: false
  private _bodyType?: string; 
  public get bodyType() {
    return this.getStringAttribute('body_type');
  }
  public set bodyType(value: string) {
    this._bodyType = value;
  }
  public resetBodyType() {
    this._bodyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTypeInput() {
    return this._bodyType;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
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

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // place - computed: false, optional: true, required: false
  private _place?: string; 
  public get place() {
    return this.getStringAttribute('place');
  }
  public set place(value: string) {
    this._place = value;
  }
  public resetPlace() {
    this._place = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeInput() {
    return this._place;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // user_activity - computed: false, optional: false, required: true
  private _userActivity?: string; 
  public get userActivity() {
    return this.getStringAttribute('user_activity');
  }
  public set userActivity(value: string) {
    this._userActivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userActivityInput() {
    return this._userActivity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      body_type: cdktf.stringToTerraform(this._bodyType),
      direction: cdktf.stringToTerraform(this._direction),
      fosid: cdktf.numberToTerraform(this._fosid),
      header_name: cdktf.stringToTerraform(this._headerName),
      id: cdktf.stringToTerraform(this._id),
      match: cdktf.stringToTerraform(this._match),
      place: cdktf.stringToTerraform(this._place),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      user_activity: cdktf.stringToTerraform(this._userActivity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_type: {
        value: cdktf.stringToHclTerraform(this._bodyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_name: {
        value: cdktf.stringToHclTerraform(this._headerName),
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
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      place: {
        value: cdktf.stringToHclTerraform(this._place),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_activity: {
        value: cdktf.stringToHclTerraform(this._userActivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
