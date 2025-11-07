// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_alertconsole
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAlertconsoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_alertconsole#id SystemAlertconsole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_alertconsole#period SystemAlertconsole#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_alertconsole#severity_level SystemAlertconsole#severity_level}
  */
  readonly severityLevel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_alertconsole#severity_level_unitary SystemAlertconsole#severity_level_unitary}
  */
  readonly severityLevelUnitary?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_alertconsole fortianalyzer_system_alertconsole}
*/
export class SystemAlertconsole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_alertconsole";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAlertconsole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAlertconsole to import
  * @param importFromId The id of the existing SystemAlertconsole that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_alertconsole#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAlertconsole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_alertconsole", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_alertconsole fortianalyzer_system_alertconsole} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAlertconsoleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAlertconsoleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_alertconsole',
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
    this._period = config.period;
    this._severityLevel = config.severityLevel;
    this._severityLevelUnitary = config.severityLevelUnitary;
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

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // severity_level - computed: true, optional: true, required: false
  private _severityLevel?: string[]; 
  public get severityLevel() {
    return cdktf.Fn.tolist(this.getListAttribute('severity_level'));
  }
  public set severityLevel(value: string[]) {
    this._severityLevel = value;
  }
  public resetSeverityLevel() {
    this._severityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelInput() {
    return this._severityLevel;
  }

  // severity_level_unitary - computed: true, optional: true, required: false
  private _severityLevelUnitary?: string; 
  public get severityLevelUnitary() {
    return this.getStringAttribute('severity_level_unitary');
  }
  public set severityLevelUnitary(value: string) {
    this._severityLevelUnitary = value;
  }
  public resetSeverityLevelUnitary() {
    this._severityLevelUnitary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityLevelUnitaryInput() {
    return this._severityLevelUnitary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      period: cdktf.stringToTerraform(this._period),
      severity_level: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityLevel),
      severity_level_unitary: cdktf.stringToTerraform(this._severityLevelUnitary),
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
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_level: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityLevel),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      severity_level_unitary: {
        value: cdktf.stringToHclTerraform(this._severityLevelUnitary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
