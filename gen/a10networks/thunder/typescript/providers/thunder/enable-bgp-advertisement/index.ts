// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_bgp_advertisement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnableBgpAdvertisementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable BGP Advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_bgp_advertisement#enable_bgp_advertisement EnableBgpAdvertisement#enable_bgp_advertisement}
  */
  readonly enableBgpAdvertisement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_bgp_advertisement#id EnableBgpAdvertisement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_bgp_advertisement thunder_enable_bgp_advertisement}
*/
export class EnableBgpAdvertisement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_enable_bgp_advertisement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnableBgpAdvertisement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnableBgpAdvertisement to import
  * @param importFromId The id of the existing EnableBgpAdvertisement that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_bgp_advertisement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnableBgpAdvertisement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_enable_bgp_advertisement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/enable_bgp_advertisement thunder_enable_bgp_advertisement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnableBgpAdvertisementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EnableBgpAdvertisementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_enable_bgp_advertisement',
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
    this._enableBgpAdvertisement = config.enableBgpAdvertisement;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_bgp_advertisement - computed: false, optional: true, required: false
  private _enableBgpAdvertisement?: number; 
  public get enableBgpAdvertisement() {
    return this.getNumberAttribute('enable_bgp_advertisement');
  }
  public set enableBgpAdvertisement(value: number) {
    this._enableBgpAdvertisement = value;
  }
  public resetEnableBgpAdvertisement() {
    this._enableBgpAdvertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpAdvertisementInput() {
    return this._enableBgpAdvertisement;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_bgp_advertisement: cdktf.numberToTerraform(this._enableBgpAdvertisement),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_bgp_advertisement: {
        value: cdktf.numberToHclTerraform(this._enableBgpAdvertisement),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
