// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/delay_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrDelayProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delay Profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/delay_profile#id DataSonarrDelayProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/delay_profile sonarr_delay_profile}
*/
export class DataSonarrDelayProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_delay_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrDelayProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrDelayProfile to import
  * @param importFromId The id of the existing DataSonarrDelayProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/delay_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrDelayProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_delay_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/delay_profile sonarr_delay_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrDelayProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSonarrDelayProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_delay_profile',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_if_above_custom_format_score - computed: true, optional: false, required: false
  public get bypassIfAboveCustomFormatScore() {
    return this.getBooleanAttribute('bypass_if_above_custom_format_score');
  }

  // bypass_if_highest_quality - computed: true, optional: false, required: false
  public get bypassIfHighestQuality() {
    return this.getBooleanAttribute('bypass_if_highest_quality');
  }

  // enable_torrent - computed: true, optional: false, required: false
  public get enableTorrent() {
    return this.getBooleanAttribute('enable_torrent');
  }

  // enable_usenet - computed: true, optional: false, required: false
  public get enableUsenet() {
    return this.getBooleanAttribute('enable_usenet');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // minimum_custom_format_score - computed: true, optional: false, required: false
  public get minimumCustomFormatScore() {
    return this.getNumberAttribute('minimum_custom_format_score');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // preferred_protocol - computed: true, optional: false, required: false
  public get preferredProtocol() {
    return this.getStringAttribute('preferred_protocol');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }

  // torrent_delay - computed: true, optional: false, required: false
  public get torrentDelay() {
    return this.getNumberAttribute('torrent_delay');
  }

  // usenet_delay - computed: true, optional: false, required: false
  public get usenetDelay() {
    return this.getNumberAttribute('usenet_delay');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
