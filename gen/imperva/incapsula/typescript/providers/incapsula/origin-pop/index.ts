// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/origin_pop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OriginPopConfig extends cdktf.TerraformMetaArguments {
  /**
  * Numeric identifier of the data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/origin_pop#dc_id OriginPop#dc_id}
  */
  readonly dcId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/origin_pop#id OriginPop#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Origin POP code (must be lowercase), e.g: iad. Note, this field is create/update only. Reads are not supported as the API doesn't exist yet. Note that drift may happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/origin_pop#origin_pop OriginPop#origin_pop}
  */
  readonly originPop: string;
  /**
  * Numeric identifier of the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/origin_pop#site_id OriginPop#site_id}
  */
  readonly siteId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/origin_pop incapsula_origin_pop}
*/
export class OriginPop extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_origin_pop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OriginPop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OriginPop to import
  * @param importFromId The id of the existing OriginPop that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/origin_pop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OriginPop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_origin_pop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/origin_pop incapsula_origin_pop} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OriginPopConfig
  */
  public constructor(scope: Construct, id: string, config: OriginPopConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_origin_pop',
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
    this._dcId = config.dcId;
    this._id = config.id;
    this._originPop = config.originPop;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dc_id - computed: false, optional: false, required: true
  private _dcId?: number; 
  public get dcId() {
    return this.getNumberAttribute('dc_id');
  }
  public set dcId(value: number) {
    this._dcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcIdInput() {
    return this._dcId;
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

  // origin_pop - computed: false, optional: false, required: true
  private _originPop?: string; 
  public get originPop() {
    return this.getStringAttribute('origin_pop');
  }
  public set originPop(value: string) {
    this._originPop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originPopInput() {
    return this._originPop;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dc_id: cdktf.numberToTerraform(this._dcId),
      id: cdktf.stringToTerraform(this._id),
      origin_pop: cdktf.stringToTerraform(this._originPop),
      site_id: cdktf.numberToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dc_id: {
        value: cdktf.numberToHclTerraform(this._dcId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_pop: {
        value: cdktf.stringToHclTerraform(this._originPop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
