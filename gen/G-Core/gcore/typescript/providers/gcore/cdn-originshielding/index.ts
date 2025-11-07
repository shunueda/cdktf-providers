// https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_originshielding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnOriginshieldingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_originshielding#id CdnOriginshielding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of CDN resource for which shielding will be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_originshielding#resource_id CdnOriginshielding#resource_id}
  */
  readonly resourceId: number;
  /**
  * ID of the shielding point of present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_originshielding#shielding_pop CdnOriginshielding#shielding_pop}
  */
  readonly shieldingPop: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_originshielding gcore_cdn_originshielding}
*/
export class CdnOriginshielding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_originshielding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnOriginshielding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnOriginshielding to import
  * @param importFromId The id of the existing CdnOriginshielding that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_originshielding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnOriginshielding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_originshielding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.3/docs/resources/cdn_originshielding gcore_cdn_originshielding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnOriginshieldingConfig
  */
  public constructor(scope: Construct, id: string, config: CdnOriginshieldingConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_originshielding',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._shieldingPop = config.shieldingPop;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: number; 
  public get resourceId() {
    return this.getNumberAttribute('resource_id');
  }
  public set resourceId(value: number) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // shielding_pop - computed: false, optional: false, required: true
  private _shieldingPop?: number; 
  public get shieldingPop() {
    return this.getNumberAttribute('shielding_pop');
  }
  public set shieldingPop(value: number) {
    this._shieldingPop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldingPopInput() {
    return this._shieldingPop;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.numberToTerraform(this._resourceId),
      shielding_pop: cdktf.numberToTerraform(this._shieldingPop),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.numberToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shielding_pop: {
        value: cdktf.numberToHclTerraform(this._shieldingPop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
