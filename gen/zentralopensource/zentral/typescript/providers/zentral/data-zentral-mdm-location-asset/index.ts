// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_location_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralMdmLocationAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Adam ID of the asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_location_asset#adam_id DataZentralMdmLocationAsset#adam_id}
  */
  readonly adamId: string;
  /**
  * `ID` of the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_location_asset#location_id DataZentralMdmLocationAsset#location_id}
  */
  readonly locationId: number;
  /**
  * Pricing param of the asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_location_asset#pricing_param DataZentralMdmLocationAsset#pricing_param}
  */
  readonly pricingParam: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_location_asset zentral_mdm_location_asset}
*/
export class DataZentralMdmLocationAsset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_location_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralMdmLocationAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralMdmLocationAsset to import
  * @param importFromId The id of the existing DataZentralMdmLocationAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_location_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralMdmLocationAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_location_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/mdm_location_asset zentral_mdm_location_asset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralMdmLocationAssetConfig
  */
  public constructor(scope: Construct, id: string, config: DataZentralMdmLocationAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_location_asset',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adamId = config.adamId;
    this._locationId = config.locationId;
    this._pricingParam = config.pricingParam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adam_id - computed: false, optional: false, required: true
  private _adamId?: string; 
  public get adamId() {
    return this.getStringAttribute('adam_id');
  }
  public set adamId(value: string) {
    this._adamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adamIdInput() {
    return this._adamId;
  }

  // asset_id - computed: true, optional: false, required: false
  public get assetId() {
    return this.getNumberAttribute('asset_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // pricing_param - computed: false, optional: false, required: true
  private _pricingParam?: string; 
  public get pricingParam() {
    return this.getStringAttribute('pricing_param');
  }
  public set pricingParam(value: string) {
    this._pricingParam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingParamInput() {
    return this._pricingParam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adam_id: cdktf.stringToTerraform(this._adamId),
      location_id: cdktf.numberToTerraform(this._locationId),
      pricing_param: cdktf.stringToTerraform(this._pricingParam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adam_id: {
        value: cdktf.stringToHclTerraform(this._adamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pricing_param: {
        value: cdktf.stringToHclTerraform(this._pricingParam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
