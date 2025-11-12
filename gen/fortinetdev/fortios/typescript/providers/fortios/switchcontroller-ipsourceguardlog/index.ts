// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_ipsourceguardlog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerIpsourceguardlogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_ipsourceguardlog#id SwitchcontrollerIpsourceguardlog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_ipsourceguardlog#log_violations SwitchcontrollerIpsourceguardlog#log_violations}
  */
  readonly logViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_ipsourceguardlog#vdomparam SwitchcontrollerIpsourceguardlog#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_ipsourceguardlog#violation_timer SwitchcontrollerIpsourceguardlog#violation_timer}
  */
  readonly violationTimer?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_ipsourceguardlog fortios_switchcontroller_ipsourceguardlog}
*/
export class SwitchcontrollerIpsourceguardlog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_ipsourceguardlog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerIpsourceguardlog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerIpsourceguardlog to import
  * @param importFromId The id of the existing SwitchcontrollerIpsourceguardlog that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_ipsourceguardlog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerIpsourceguardlog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_ipsourceguardlog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_ipsourceguardlog fortios_switchcontroller_ipsourceguardlog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerIpsourceguardlogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerIpsourceguardlogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_ipsourceguardlog',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._logViolations = config.logViolations;
    this._vdomparam = config.vdomparam;
    this._violationTimer = config.violationTimer;
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

  // log_violations - computed: true, optional: true, required: false
  private _logViolations?: string; 
  public get logViolations() {
    return this.getStringAttribute('log_violations');
  }
  public set logViolations(value: string) {
    this._logViolations = value;
  }
  public resetLogViolations() {
    this._logViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViolationsInput() {
    return this._logViolations;
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

  // violation_timer - computed: false, optional: true, required: false
  private _violationTimer?: number; 
  public get violationTimer() {
    return this.getNumberAttribute('violation_timer');
  }
  public set violationTimer(value: number) {
    this._violationTimer = value;
  }
  public resetViolationTimer() {
    this._violationTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationTimerInput() {
    return this._violationTimer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_violations: cdktf.stringToTerraform(this._logViolations),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      violation_timer: cdktf.numberToTerraform(this._violationTimer),
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
      log_violations: {
        value: cdktf.stringToHclTerraform(this._logViolations),
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
      violation_timer: {
        value: cdktf.numberToHclTerraform(this._violationTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
