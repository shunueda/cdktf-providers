// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/convert_startup_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConvertStartupConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Local Configuration Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/convert_startup_config#dest_profile ConvertStartupConfig#dest_profile}
  */
  readonly destProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/convert_startup_config#id ConvertStartupConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Choose a config profile to convert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/convert_startup_config#profile ConvertStartupConfig#profile}
  */
  readonly profile?: string;
  /**
  * '3_0': Convert from 3.0 to 3.2; '3_2_5': Convert from 3.2.5 to 5.0.0-TPS; '5_0': Convert from 5.0-TPS to 5.3-TPS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/convert_startup_config#type ConvertStartupConfig#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/convert_startup_config thunder_convert_startup_config}
*/
export class ConvertStartupConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_convert_startup_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConvertStartupConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConvertStartupConfig to import
  * @param importFromId The id of the existing ConvertStartupConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/convert_startup_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConvertStartupConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_convert_startup_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/convert_startup_config thunder_convert_startup_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConvertStartupConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConvertStartupConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_convert_startup_config',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destProfile = config.destProfile;
    this._id = config.id;
    this._profile = config.profile;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_profile - computed: false, optional: true, required: false
  private _destProfile?: string; 
  public get destProfile() {
    return this.getStringAttribute('dest_profile');
  }
  public set destProfile(value: string) {
    this._destProfile = value;
  }
  public resetDestProfile() {
    this._destProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destProfileInput() {
    return this._destProfile;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_profile: cdktf.stringToTerraform(this._destProfile),
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_profile: {
        value: cdktf.stringToHclTerraform(this._destProfile),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
