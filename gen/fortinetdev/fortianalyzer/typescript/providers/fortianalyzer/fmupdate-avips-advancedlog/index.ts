// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_avips_advancedlog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateAvipsAdvancedlogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_avips_advancedlog#id FmupdateAvipsAdvancedlog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_avips_advancedlog#log_fortigate FmupdateAvipsAdvancedlog#log_fortigate}
  */
  readonly logFortigate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_avips_advancedlog#log_server FmupdateAvipsAdvancedlog#log_server}
  */
  readonly logServer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_avips_advancedlog fortianalyzer_fmupdate_avips_advancedlog}
*/
export class FmupdateAvipsAdvancedlog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_fmupdate_avips_advancedlog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateAvipsAdvancedlog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateAvipsAdvancedlog to import
  * @param importFromId The id of the existing FmupdateAvipsAdvancedlog that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_avips_advancedlog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateAvipsAdvancedlog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_fmupdate_avips_advancedlog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_avips_advancedlog fortianalyzer_fmupdate_avips_advancedlog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateAvipsAdvancedlogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateAvipsAdvancedlogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_fmupdate_avips_advancedlog',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
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
    this._logFortigate = config.logFortigate;
    this._logServer = config.logServer;
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

  // log_fortigate - computed: true, optional: true, required: false
  private _logFortigate?: string; 
  public get logFortigate() {
    return this.getStringAttribute('log_fortigate');
  }
  public set logFortigate(value: string) {
    this._logFortigate = value;
  }
  public resetLogFortigate() {
    this._logFortigate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFortigateInput() {
    return this._logFortigate;
  }

  // log_server - computed: true, optional: true, required: false
  private _logServer?: string; 
  public get logServer() {
    return this.getStringAttribute('log_server');
  }
  public set logServer(value: string) {
    this._logServer = value;
  }
  public resetLogServer() {
    this._logServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logServerInput() {
    return this._logServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_fortigate: cdktf.stringToTerraform(this._logFortigate),
      log_server: cdktf.stringToTerraform(this._logServer),
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
      log_fortigate: {
        value: cdktf.stringToHclTerraform(this._logFortigate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_server: {
        value: cdktf.stringToHclTerraform(this._logServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
