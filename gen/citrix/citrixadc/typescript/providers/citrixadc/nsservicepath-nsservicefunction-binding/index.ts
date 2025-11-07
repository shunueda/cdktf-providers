// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsservicepath_nsservicefunction_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsservicepathNsservicefunctionBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsservicepath_nsservicefunction_binding#id NsservicepathNsservicefunctionBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsservicepath_nsservicefunction_binding#index NsservicepathNsservicefunctionBinding#index}
  */
  readonly index: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsservicepath_nsservicefunction_binding#servicefunction NsservicepathNsservicefunctionBinding#servicefunction}
  */
  readonly servicefunction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsservicepath_nsservicefunction_binding#servicepathname NsservicepathNsservicefunctionBinding#servicepathname}
  */
  readonly servicepathname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsservicepath_nsservicefunction_binding citrixadc_nsservicepath_nsservicefunction_binding}
*/
export class NsservicepathNsservicefunctionBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsservicepath_nsservicefunction_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsservicepathNsservicefunctionBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsservicepathNsservicefunctionBinding to import
  * @param importFromId The id of the existing NsservicepathNsservicefunctionBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsservicepath_nsservicefunction_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsservicepathNsservicefunctionBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsservicepath_nsservicefunction_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsservicepath_nsservicefunction_binding citrixadc_nsservicepath_nsservicefunction_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsservicepathNsservicefunctionBindingConfig
  */
  public constructor(scope: Construct, id: string, config: NsservicepathNsservicefunctionBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsservicepath_nsservicefunction_binding',
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
    this._index = config.index;
    this._servicefunction = config.servicefunction;
    this._servicepathname = config.servicepathname;
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

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // servicefunction - computed: false, optional: false, required: true
  private _servicefunction?: string; 
  public get servicefunction() {
    return this.getStringAttribute('servicefunction');
  }
  public set servicefunction(value: string) {
    this._servicefunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicefunctionInput() {
    return this._servicefunction;
  }

  // servicepathname - computed: false, optional: false, required: true
  private _servicepathname?: string; 
  public get servicepathname() {
    return this.getStringAttribute('servicepathname');
  }
  public set servicepathname(value: string) {
    this._servicepathname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicepathnameInput() {
    return this._servicepathname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      servicefunction: cdktf.stringToTerraform(this._servicefunction),
      servicepathname: cdktf.stringToTerraform(this._servicepathname),
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
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servicefunction: {
        value: cdktf.stringToHclTerraform(this._servicefunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicepathname: {
        value: cdktf.stringToHclTerraform(this._servicepathname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
