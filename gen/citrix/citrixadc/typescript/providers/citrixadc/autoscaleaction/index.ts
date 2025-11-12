// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscaleactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#id Autoscaleaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#name Autoscaleaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#parameters Autoscaleaction#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#profilename Autoscaleaction#profilename}
  */
  readonly profilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#quiettime Autoscaleaction#quiettime}
  */
  readonly quiettime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#type Autoscaleaction#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#vmdestroygraceperiod Autoscaleaction#vmdestroygraceperiod}
  */
  readonly vmdestroygraceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#vserver Autoscaleaction#vserver}
  */
  readonly vserver?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction citrixadc_autoscaleaction}
*/
export class Autoscaleaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_autoscaleaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Autoscaleaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Autoscaleaction to import
  * @param importFromId The id of the existing Autoscaleaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Autoscaleaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_autoscaleaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/autoscaleaction citrixadc_autoscaleaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscaleactionConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscaleactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_autoscaleaction',
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
    this._name = config.name;
    this._parameters = config.parameters;
    this._profilename = config.profilename;
    this._quiettime = config.quiettime;
    this._type = config.type;
    this._vmdestroygraceperiod = config.vmdestroygraceperiod;
    this._vserver = config.vserver;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // profilename - computed: true, optional: true, required: false
  private _profilename?: string; 
  public get profilename() {
    return this.getStringAttribute('profilename');
  }
  public set profilename(value: string) {
    this._profilename = value;
  }
  public resetProfilename() {
    this._profilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilenameInput() {
    return this._profilename;
  }

  // quiettime - computed: true, optional: true, required: false
  private _quiettime?: number; 
  public get quiettime() {
    return this.getNumberAttribute('quiettime');
  }
  public set quiettime(value: number) {
    this._quiettime = value;
  }
  public resetQuiettime() {
    this._quiettime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quiettimeInput() {
    return this._quiettime;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vmdestroygraceperiod - computed: true, optional: true, required: false
  private _vmdestroygraceperiod?: number; 
  public get vmdestroygraceperiod() {
    return this.getNumberAttribute('vmdestroygraceperiod');
  }
  public set vmdestroygraceperiod(value: number) {
    this._vmdestroygraceperiod = value;
  }
  public resetVmdestroygraceperiod() {
    this._vmdestroygraceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmdestroygraceperiodInput() {
    return this._vmdestroygraceperiod;
  }

  // vserver - computed: true, optional: true, required: false
  private _vserver?: string; 
  public get vserver() {
    return this.getStringAttribute('vserver');
  }
  public set vserver(value: string) {
    this._vserver = value;
  }
  public resetVserver() {
    this._vserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverInput() {
    return this._vserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.stringToTerraform(this._parameters),
      profilename: cdktf.stringToTerraform(this._profilename),
      quiettime: cdktf.numberToTerraform(this._quiettime),
      type: cdktf.stringToTerraform(this._type),
      vmdestroygraceperiod: cdktf.numberToTerraform(this._vmdestroygraceperiod),
      vserver: cdktf.stringToTerraform(this._vserver),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profilename: {
        value: cdktf.stringToHclTerraform(this._profilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quiettime: {
        value: cdktf.numberToHclTerraform(this._quiettime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmdestroygraceperiod: {
        value: cdktf.numberToHclTerraform(this._vmdestroygraceperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vserver: {
        value: cdktf.stringToHclTerraform(this._vserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
