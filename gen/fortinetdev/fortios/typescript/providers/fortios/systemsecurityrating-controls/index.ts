// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemsecurityratingControlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls#display_insight SystemsecurityratingControls#display_insight}
  */
  readonly displayInsight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls#display_report SystemsecurityratingControls#display_report}
  */
  readonly displayReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls#id SystemsecurityratingControls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls#name SystemsecurityratingControls#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls#vdomparam SystemsecurityratingControls#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls fortios_systemsecurityrating_controls}
*/
export class SystemsecurityratingControls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_systemsecurityrating_controls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemsecurityratingControls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemsecurityratingControls to import
  * @param importFromId The id of the existing SystemsecurityratingControls that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemsecurityratingControls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_systemsecurityrating_controls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsecurityrating_controls fortios_systemsecurityrating_controls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemsecurityratingControlsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemsecurityratingControlsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_systemsecurityrating_controls',
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
    this._displayInsight = config.displayInsight;
    this._displayReport = config.displayReport;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_insight - computed: true, optional: true, required: false
  private _displayInsight?: string; 
  public get displayInsight() {
    return this.getStringAttribute('display_insight');
  }
  public set displayInsight(value: string) {
    this._displayInsight = value;
  }
  public resetDisplayInsight() {
    this._displayInsight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInsightInput() {
    return this._displayInsight;
  }

  // display_report - computed: true, optional: true, required: false
  private _displayReport?: string; 
  public get displayReport() {
    return this.getStringAttribute('display_report');
  }
  public set displayReport(value: string) {
    this._displayReport = value;
  }
  public resetDisplayReport() {
    this._displayReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayReportInput() {
    return this._displayReport;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_insight: cdktf.stringToTerraform(this._displayInsight),
      display_report: cdktf.stringToTerraform(this._displayReport),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_insight: {
        value: cdktf.stringToHclTerraform(this._displayInsight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_report: {
        value: cdktf.stringToHclTerraform(this._displayReport),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
