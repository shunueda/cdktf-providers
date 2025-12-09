// https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetadataConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certification Country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata_config#certification_country MetadataConfigA#certification_country}
  */
  readonly certificationCountry: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata_config radarr_metadata_config}
*/
export class MetadataConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_metadata_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetadataConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetadataConfigA to import
  * @param importFromId The id of the existing MetadataConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetadataConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_metadata_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.4/docs/resources/metadata_config radarr_metadata_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetadataConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: MetadataConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_metadata_config',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificationCountry = config.certificationCountry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certification_country - computed: false, optional: false, required: true
  private _certificationCountry?: string; 
  public get certificationCountry() {
    return this.getStringAttribute('certification_country');
  }
  public set certificationCountry(value: string) {
    this._certificationCountry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificationCountryInput() {
    return this._certificationCountry;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certification_country: cdktf.stringToTerraform(this._certificationCountry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certification_country: {
        value: cdktf.stringToHclTerraform(this._certificationCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
