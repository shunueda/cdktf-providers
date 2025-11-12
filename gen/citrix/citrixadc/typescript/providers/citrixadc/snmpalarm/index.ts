// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpalarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#id Snmpalarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#logging Snmpalarm#logging}
  */
  readonly logging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#normalvalue Snmpalarm#normalvalue}
  */
  readonly normalvalue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#severity Snmpalarm#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#state Snmpalarm#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#thresholdvalue Snmpalarm#thresholdvalue}
  */
  readonly thresholdvalue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#time Snmpalarm#time}
  */
  readonly time?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#trapname Snmpalarm#trapname}
  */
  readonly trapname?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm citrixadc_snmpalarm}
*/
export class Snmpalarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_snmpalarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmpalarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmpalarm to import
  * @param importFromId The id of the existing Snmpalarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmpalarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_snmpalarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/snmpalarm citrixadc_snmpalarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpalarmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpalarmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_snmpalarm',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._logging = config.logging;
    this._normalvalue = config.normalvalue;
    this._severity = config.severity;
    this._state = config.state;
    this._thresholdvalue = config.thresholdvalue;
    this._time = config.time;
    this._trapname = config.trapname;
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

  // logging - computed: true, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // normalvalue - computed: true, optional: true, required: false
  private _normalvalue?: number; 
  public get normalvalue() {
    return this.getNumberAttribute('normalvalue');
  }
  public set normalvalue(value: number) {
    this._normalvalue = value;
  }
  public resetNormalvalue() {
    this._normalvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalvalueInput() {
    return this._normalvalue;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // thresholdvalue - computed: true, optional: true, required: false
  private _thresholdvalue?: number; 
  public get thresholdvalue() {
    return this.getNumberAttribute('thresholdvalue');
  }
  public set thresholdvalue(value: number) {
    this._thresholdvalue = value;
  }
  public resetThresholdvalue() {
    this._thresholdvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdvalueInput() {
    return this._thresholdvalue;
  }

  // time - computed: true, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // trapname - computed: true, optional: true, required: false
  private _trapname?: string; 
  public get trapname() {
    return this.getStringAttribute('trapname');
  }
  public set trapname(value: string) {
    this._trapname = value;
  }
  public resetTrapname() {
    this._trapname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapnameInput() {
    return this._trapname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      logging: cdktf.stringToTerraform(this._logging),
      normalvalue: cdktf.numberToTerraform(this._normalvalue),
      severity: cdktf.stringToTerraform(this._severity),
      state: cdktf.stringToTerraform(this._state),
      thresholdvalue: cdktf.numberToTerraform(this._thresholdvalue),
      time: cdktf.numberToTerraform(this._time),
      trapname: cdktf.stringToTerraform(this._trapname),
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
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      normalvalue: {
        value: cdktf.numberToHclTerraform(this._normalvalue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thresholdvalue: {
        value: cdktf.numberToHclTerraform(this._thresholdvalue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time: {
        value: cdktf.numberToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trapname: {
        value: cdktf.stringToHclTerraform(this._trapname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
