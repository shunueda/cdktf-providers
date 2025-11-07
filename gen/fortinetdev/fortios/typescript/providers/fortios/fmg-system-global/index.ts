// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmgSystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global#adom_mode FmgSystemGlobal#adom_mode}
  */
  readonly adomMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global#adom_status FmgSystemGlobal#adom_status}
  */
  readonly adomStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global#fortianalyzer_status FmgSystemGlobal#fortianalyzer_status}
  */
  readonly fortianalyzerStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global#hostname FmgSystemGlobal#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global#id FmgSystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global#timezone FmgSystemGlobal#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global fortios_fmg_system_global}
*/
export class FmgSystemGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_fmg_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmgSystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmgSystemGlobal to import
  * @param importFromId The id of the existing FmgSystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmgSystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_fmg_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_global fortios_fmg_system_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmgSystemGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmgSystemGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_fmg_system_global',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adomMode = config.adomMode;
    this._adomStatus = config.adomStatus;
    this._fortianalyzerStatus = config.fortianalyzerStatus;
    this._hostname = config.hostname;
    this._id = config.id;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom_mode - computed: false, optional: true, required: false
  private _adomMode?: string; 
  public get adomMode() {
    return this.getStringAttribute('adom_mode');
  }
  public set adomMode(value: string) {
    this._adomMode = value;
  }
  public resetAdomMode() {
    this._adomMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomModeInput() {
    return this._adomMode;
  }

  // adom_status - computed: false, optional: true, required: false
  private _adomStatus?: string; 
  public get adomStatus() {
    return this.getStringAttribute('adom_status');
  }
  public set adomStatus(value: string) {
    this._adomStatus = value;
  }
  public resetAdomStatus() {
    this._adomStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomStatusInput() {
    return this._adomStatus;
  }

  // fortianalyzer_status - computed: false, optional: true, required: false
  private _fortianalyzerStatus?: string; 
  public get fortianalyzerStatus() {
    return this.getStringAttribute('fortianalyzer_status');
  }
  public set fortianalyzerStatus(value: string) {
    this._fortianalyzerStatus = value;
  }
  public resetFortianalyzerStatus() {
    this._fortianalyzerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortianalyzerStatusInput() {
    return this._fortianalyzerStatus;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom_mode: cdktf.stringToTerraform(this._adomMode),
      adom_status: cdktf.stringToTerraform(this._adomStatus),
      fortianalyzer_status: cdktf.stringToTerraform(this._fortianalyzerStatus),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom_mode: {
        value: cdktf.stringToHclTerraform(this._adomMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_status: {
        value: cdktf.stringToHclTerraform(this._adomStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortianalyzer_status: {
        value: cdktf.stringToHclTerraform(this._fortianalyzerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
