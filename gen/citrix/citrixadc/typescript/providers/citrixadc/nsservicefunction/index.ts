// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsservicefunction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsservicefunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsservicefunction#id Nsservicefunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsservicefunction#ingressvlan Nsservicefunction#ingressvlan}
  */
  readonly ingressvlan: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsservicefunction#servicefunctionname Nsservicefunction#servicefunctionname}
  */
  readonly servicefunctionname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsservicefunction citrixadc_nsservicefunction}
*/
export class Nsservicefunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsservicefunction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsservicefunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsservicefunction to import
  * @param importFromId The id of the existing Nsservicefunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsservicefunction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsservicefunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsservicefunction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nsservicefunction citrixadc_nsservicefunction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsservicefunctionConfig
  */
  public constructor(scope: Construct, id: string, config: NsservicefunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsservicefunction',
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
    this._ingressvlan = config.ingressvlan;
    this._servicefunctionname = config.servicefunctionname;
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

  // ingressvlan - computed: false, optional: false, required: true
  private _ingressvlan?: number; 
  public get ingressvlan() {
    return this.getNumberAttribute('ingressvlan');
  }
  public set ingressvlan(value: number) {
    this._ingressvlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressvlanInput() {
    return this._ingressvlan;
  }

  // servicefunctionname - computed: false, optional: false, required: true
  private _servicefunctionname?: string; 
  public get servicefunctionname() {
    return this.getStringAttribute('servicefunctionname');
  }
  public set servicefunctionname(value: string) {
    this._servicefunctionname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicefunctionnameInput() {
    return this._servicefunctionname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ingressvlan: cdktf.numberToTerraform(this._ingressvlan),
      servicefunctionname: cdktf.stringToTerraform(this._servicefunctionname),
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
      ingressvlan: {
        value: cdktf.numberToHclTerraform(this._ingressvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servicefunctionname: {
        value: cdktf.stringToHclTerraform(this._servicefunctionname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
