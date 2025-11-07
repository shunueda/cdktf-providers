// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ssl_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxSslSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this data source. It is the unique randomstring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ssl_settings#id DataNetscalersdxSslSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ssl_settings netscalersdx_ssl_settings}
*/
export class DataNetscalersdxSslSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_ssl_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxSslSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxSslSettings to import
  * @param importFromId The id of the existing DataNetscalersdxSslSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ssl_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxSslSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_ssl_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/ssl_settings netscalersdx_ssl_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxSslSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxSslSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_ssl_settings',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
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

  // sslreneg - computed: true, optional: false, required: false
  public get sslreneg() {
    return this.getBooleanAttribute('sslreneg');
  }

  // sslv3 - computed: true, optional: false, required: false
  public get sslv3() {
    return this.getBooleanAttribute('sslv3');
  }

  // tlsv1 - computed: true, optional: false, required: false
  public get tlsv1() {
    return this.getBooleanAttribute('tlsv1');
  }

  // tlsv1_1 - computed: true, optional: false, required: false
  public get tlsv11() {
    return this.getBooleanAttribute('tlsv1_1');
  }

  // tlsv1_2 - computed: true, optional: false, required: false
  public get tlsv12() {
    return this.getBooleanAttribute('tlsv1_2');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
