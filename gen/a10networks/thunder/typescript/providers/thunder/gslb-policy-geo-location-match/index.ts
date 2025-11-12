// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyGeoLocationMatchAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'global': Global Geo-location; 'policy': Policy Geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match#geo_type_overlap GslbPolicyGeoLocationMatchA#geo_type_overlap}
  */
  readonly geoTypeOverlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match#id GslbPolicyGeoLocationMatchA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'global': Global Geo-location; 'policy': Policy Geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match#match_first GslbPolicyGeoLocationMatchA#match_first}
  */
  readonly matchFirst?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match#name GslbPolicyGeoLocationMatchA#name}
  */
  readonly name: string;
  /**
  * Enable overlap mode to do longest match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match#overlap GslbPolicyGeoLocationMatchA#overlap}
  */
  readonly overlap?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match#uuid GslbPolicyGeoLocationMatchA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match thunder_gslb_policy_geo_location_match}
*/
export class GslbPolicyGeoLocationMatchA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy_geo_location_match";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicyGeoLocationMatchA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicyGeoLocationMatchA to import
  * @param importFromId The id of the existing GslbPolicyGeoLocationMatchA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicyGeoLocationMatchA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy_geo_location_match", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy_geo_location_match thunder_gslb_policy_geo_location_match} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyGeoLocationMatchAConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyGeoLocationMatchAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy_geo_location_match',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._geoTypeOverlap = config.geoTypeOverlap;
    this._id = config.id;
    this._matchFirst = config.matchFirst;
    this._name = config.name;
    this._overlap = config.overlap;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // geo_type_overlap - computed: false, optional: true, required: false
  private _geoTypeOverlap?: string; 
  public get geoTypeOverlap() {
    return this.getStringAttribute('geo_type_overlap');
  }
  public set geoTypeOverlap(value: string) {
    this._geoTypeOverlap = value;
  }
  public resetGeoTypeOverlap() {
    this._geoTypeOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoTypeOverlapInput() {
    return this._geoTypeOverlap;
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

  // match_first - computed: false, optional: true, required: false
  private _matchFirst?: string; 
  public get matchFirst() {
    return this.getStringAttribute('match_first');
  }
  public set matchFirst(value: string) {
    this._matchFirst = value;
  }
  public resetMatchFirst() {
    this._matchFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFirstInput() {
    return this._matchFirst;
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

  // overlap - computed: false, optional: true, required: false
  private _overlap?: number; 
  public get overlap() {
    return this.getNumberAttribute('overlap');
  }
  public set overlap(value: number) {
    this._overlap = value;
  }
  public resetOverlap() {
    this._overlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapInput() {
    return this._overlap;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      geo_type_overlap: cdktf.stringToTerraform(this._geoTypeOverlap),
      id: cdktf.stringToTerraform(this._id),
      match_first: cdktf.stringToTerraform(this._matchFirst),
      name: cdktf.stringToTerraform(this._name),
      overlap: cdktf.numberToTerraform(this._overlap),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      geo_type_overlap: {
        value: cdktf.stringToHclTerraform(this._geoTypeOverlap),
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
      match_first: {
        value: cdktf.stringToHclTerraform(this._matchFirst),
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
      overlap: {
        value: cdktf.numberToHclTerraform(this._overlap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
