// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppqoeparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter#avgwaitingclient Appqoeparameter#avgwaitingclient}
  */
  readonly avgwaitingclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter#dosattackthresh Appqoeparameter#dosattackthresh}
  */
  readonly dosattackthresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter#id Appqoeparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter#maxaltrespbandwidth Appqoeparameter#maxaltrespbandwidth}
  */
  readonly maxaltrespbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter#sessionlife Appqoeparameter#sessionlife}
  */
  readonly sessionlife?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter citrixadc_appqoeparameter}
*/
export class Appqoeparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appqoeparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appqoeparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appqoeparameter to import
  * @param importFromId The id of the existing Appqoeparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appqoeparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appqoeparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeparameter citrixadc_appqoeparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppqoeparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppqoeparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appqoeparameter',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avgwaitingclient = config.avgwaitingclient;
    this._dosattackthresh = config.dosattackthresh;
    this._id = config.id;
    this._maxaltrespbandwidth = config.maxaltrespbandwidth;
    this._sessionlife = config.sessionlife;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avgwaitingclient - computed: true, optional: true, required: false
  private _avgwaitingclient?: number; 
  public get avgwaitingclient() {
    return this.getNumberAttribute('avgwaitingclient');
  }
  public set avgwaitingclient(value: number) {
    this._avgwaitingclient = value;
  }
  public resetAvgwaitingclient() {
    this._avgwaitingclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgwaitingclientInput() {
    return this._avgwaitingclient;
  }

  // dosattackthresh - computed: true, optional: true, required: false
  private _dosattackthresh?: number; 
  public get dosattackthresh() {
    return this.getNumberAttribute('dosattackthresh');
  }
  public set dosattackthresh(value: number) {
    this._dosattackthresh = value;
  }
  public resetDosattackthresh() {
    this._dosattackthresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosattackthreshInput() {
    return this._dosattackthresh;
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

  // maxaltrespbandwidth - computed: true, optional: true, required: false
  private _maxaltrespbandwidth?: number; 
  public get maxaltrespbandwidth() {
    return this.getNumberAttribute('maxaltrespbandwidth');
  }
  public set maxaltrespbandwidth(value: number) {
    this._maxaltrespbandwidth = value;
  }
  public resetMaxaltrespbandwidth() {
    this._maxaltrespbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxaltrespbandwidthInput() {
    return this._maxaltrespbandwidth;
  }

  // sessionlife - computed: true, optional: true, required: false
  private _sessionlife?: number; 
  public get sessionlife() {
    return this.getNumberAttribute('sessionlife');
  }
  public set sessionlife(value: number) {
    this._sessionlife = value;
  }
  public resetSessionlife() {
    this._sessionlife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionlifeInput() {
    return this._sessionlife;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avgwaitingclient: cdktf.numberToTerraform(this._avgwaitingclient),
      dosattackthresh: cdktf.numberToTerraform(this._dosattackthresh),
      id: cdktf.stringToTerraform(this._id),
      maxaltrespbandwidth: cdktf.numberToTerraform(this._maxaltrespbandwidth),
      sessionlife: cdktf.numberToTerraform(this._sessionlife),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avgwaitingclient: {
        value: cdktf.numberToHclTerraform(this._avgwaitingclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dosattackthresh: {
        value: cdktf.numberToHclTerraform(this._dosattackthresh),
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
      maxaltrespbandwidth: {
        value: cdktf.numberToHclTerraform(this._maxaltrespbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sessionlife: {
        value: cdktf.numberToHclTerraform(this._sessionlife),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
