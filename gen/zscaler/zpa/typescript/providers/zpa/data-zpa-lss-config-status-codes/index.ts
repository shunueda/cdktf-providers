// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/lss_config_status_codes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaLssConfigStatusCodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/lss_config_status_codes#id DataZpaLssConfigStatusCodes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/lss_config_status_codes zpa_lss_config_status_codes}
*/
export class DataZpaLssConfigStatusCodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_lss_config_status_codes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaLssConfigStatusCodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaLssConfigStatusCodes to import
  * @param importFromId The id of the existing DataZpaLssConfigStatusCodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/lss_config_status_codes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaLssConfigStatusCodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_lss_config_status_codes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/lss_config_status_codes zpa_lss_config_status_codes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaLssConfigStatusCodesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaLssConfigStatusCodesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_lss_config_status_codes',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
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

  // zpn_ast_auth_log - computed: true, optional: false, required: false
  private _zpnAstAuthLog = new cdktf.StringMap(this, "zpn_ast_auth_log");
  public get zpnAstAuthLog() {
    return this._zpnAstAuthLog;
  }

  // zpn_auth_log - computed: true, optional: false, required: false
  private _zpnAuthLog = new cdktf.StringMap(this, "zpn_auth_log");
  public get zpnAuthLog() {
    return this._zpnAuthLog;
  }

  // zpn_sys_auth_log - computed: true, optional: false, required: false
  private _zpnSysAuthLog = new cdktf.StringMap(this, "zpn_sys_auth_log");
  public get zpnSysAuthLog() {
    return this._zpnSysAuthLog;
  }

  // zpn_trans_log - computed: true, optional: false, required: false
  private _zpnTransLog = new cdktf.StringMap(this, "zpn_trans_log");
  public get zpnTransLog() {
    return this._zpnTransLog;
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
