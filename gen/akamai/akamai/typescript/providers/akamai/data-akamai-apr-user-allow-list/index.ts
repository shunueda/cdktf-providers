// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apr_user_allow_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiAprUserAllowListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies a security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apr_user_allow_list#config_id DataAkamaiAprUserAllowList#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apr_user_allow_list#id DataAkamaiAprUserAllowList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apr_user_allow_list akamai_apr_user_allow_list}
*/
export class DataAkamaiAprUserAllowList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_apr_user_allow_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiAprUserAllowList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiAprUserAllowList to import
  * @param importFromId The id of the existing DataAkamaiAprUserAllowList that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apr_user_allow_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiAprUserAllowList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_apr_user_allow_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/apr_user_allow_list akamai_apr_user_allow_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiAprUserAllowListConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiAprUserAllowListConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_apr_user_allow_list',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
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
