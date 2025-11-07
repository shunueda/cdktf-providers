// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IcalatencyprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile#id Icalatencyprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile#l7latencymaxnotifycount Icalatencyprofile#l7latencymaxnotifycount}
  */
  readonly l7Latencymaxnotifycount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile#l7latencymonitoring Icalatencyprofile#l7latencymonitoring}
  */
  readonly l7Latencymonitoring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile#l7latencynotifyinterval Icalatencyprofile#l7latencynotifyinterval}
  */
  readonly l7Latencynotifyinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile#l7latencythresholdfactor Icalatencyprofile#l7latencythresholdfactor}
  */
  readonly l7Latencythresholdfactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile#l7latencywaittime Icalatencyprofile#l7latencywaittime}
  */
  readonly l7Latencywaittime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile#name Icalatencyprofile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile citrixadc_icalatencyprofile}
*/
export class Icalatencyprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_icalatencyprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Icalatencyprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Icalatencyprofile to import
  * @param importFromId The id of the existing Icalatencyprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Icalatencyprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_icalatencyprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/icalatencyprofile citrixadc_icalatencyprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IcalatencyprofileConfig
  */
  public constructor(scope: Construct, id: string, config: IcalatencyprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_icalatencyprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._l7Latencymaxnotifycount = config.l7Latencymaxnotifycount;
    this._l7Latencymonitoring = config.l7Latencymonitoring;
    this._l7Latencynotifyinterval = config.l7Latencynotifyinterval;
    this._l7Latencythresholdfactor = config.l7Latencythresholdfactor;
    this._l7Latencywaittime = config.l7Latencywaittime;
    this._name = config.name;
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

  // l7latencymaxnotifycount - computed: true, optional: true, required: false
  private _l7Latencymaxnotifycount?: number; 
  public get l7Latencymaxnotifycount() {
    return this.getNumberAttribute('l7latencymaxnotifycount');
  }
  public set l7Latencymaxnotifycount(value: number) {
    this._l7Latencymaxnotifycount = value;
  }
  public resetL7Latencymaxnotifycount() {
    this._l7Latencymaxnotifycount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7LatencymaxnotifycountInput() {
    return this._l7Latencymaxnotifycount;
  }

  // l7latencymonitoring - computed: true, optional: true, required: false
  private _l7Latencymonitoring?: string; 
  public get l7Latencymonitoring() {
    return this.getStringAttribute('l7latencymonitoring');
  }
  public set l7Latencymonitoring(value: string) {
    this._l7Latencymonitoring = value;
  }
  public resetL7Latencymonitoring() {
    this._l7Latencymonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7LatencymonitoringInput() {
    return this._l7Latencymonitoring;
  }

  // l7latencynotifyinterval - computed: true, optional: true, required: false
  private _l7Latencynotifyinterval?: number; 
  public get l7Latencynotifyinterval() {
    return this.getNumberAttribute('l7latencynotifyinterval');
  }
  public set l7Latencynotifyinterval(value: number) {
    this._l7Latencynotifyinterval = value;
  }
  public resetL7Latencynotifyinterval() {
    this._l7Latencynotifyinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7LatencynotifyintervalInput() {
    return this._l7Latencynotifyinterval;
  }

  // l7latencythresholdfactor - computed: true, optional: true, required: false
  private _l7Latencythresholdfactor?: number; 
  public get l7Latencythresholdfactor() {
    return this.getNumberAttribute('l7latencythresholdfactor');
  }
  public set l7Latencythresholdfactor(value: number) {
    this._l7Latencythresholdfactor = value;
  }
  public resetL7Latencythresholdfactor() {
    this._l7Latencythresholdfactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7LatencythresholdfactorInput() {
    return this._l7Latencythresholdfactor;
  }

  // l7latencywaittime - computed: true, optional: true, required: false
  private _l7Latencywaittime?: number; 
  public get l7Latencywaittime() {
    return this.getNumberAttribute('l7latencywaittime');
  }
  public set l7Latencywaittime(value: number) {
    this._l7Latencywaittime = value;
  }
  public resetL7Latencywaittime() {
    this._l7Latencywaittime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7LatencywaittimeInput() {
    return this._l7Latencywaittime;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      l7latencymaxnotifycount: cdktf.numberToTerraform(this._l7Latencymaxnotifycount),
      l7latencymonitoring: cdktf.stringToTerraform(this._l7Latencymonitoring),
      l7latencynotifyinterval: cdktf.numberToTerraform(this._l7Latencynotifyinterval),
      l7latencythresholdfactor: cdktf.numberToTerraform(this._l7Latencythresholdfactor),
      l7latencywaittime: cdktf.numberToTerraform(this._l7Latencywaittime),
      name: cdktf.stringToTerraform(this._name),
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
      l7latencymaxnotifycount: {
        value: cdktf.numberToHclTerraform(this._l7Latencymaxnotifycount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l7latencymonitoring: {
        value: cdktf.stringToHclTerraform(this._l7Latencymonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7latencynotifyinterval: {
        value: cdktf.numberToHclTerraform(this._l7Latencynotifyinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l7latencythresholdfactor: {
        value: cdktf.numberToHclTerraform(this._l7Latencythresholdfactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l7latencywaittime: {
        value: cdktf.numberToHclTerraform(this._l7Latencywaittime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
