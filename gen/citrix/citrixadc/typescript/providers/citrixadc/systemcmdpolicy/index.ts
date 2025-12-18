// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemcmdpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemcmdpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemcmdpolicy#action Systemcmdpolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemcmdpolicy#cmdspec Systemcmdpolicy#cmdspec}
  */
  readonly cmdspec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemcmdpolicy#id Systemcmdpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemcmdpolicy#policyname Systemcmdpolicy#policyname}
  */
  readonly policyname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemcmdpolicy citrixadc_systemcmdpolicy}
*/
export class Systemcmdpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_systemcmdpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemcmdpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemcmdpolicy to import
  * @param importFromId The id of the existing Systemcmdpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemcmdpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemcmdpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_systemcmdpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemcmdpolicy citrixadc_systemcmdpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemcmdpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SystemcmdpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_systemcmdpolicy',
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
    this._action = config.action;
    this._cmdspec = config.cmdspec;
    this._id = config.id;
    this._policyname = config.policyname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cmdspec - computed: false, optional: false, required: true
  private _cmdspec?: string; 
  public get cmdspec() {
    return this.getStringAttribute('cmdspec');
  }
  public set cmdspec(value: string) {
    this._cmdspec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdspecInput() {
    return this._cmdspec;
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

  // policyname - computed: false, optional: false, required: true
  private _policyname?: string; 
  public get policyname() {
    return this.getStringAttribute('policyname');
  }
  public set policyname(value: string) {
    this._policyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policynameInput() {
    return this._policyname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      cmdspec: cdktf.stringToTerraform(this._cmdspec),
      id: cdktf.stringToTerraform(this._id),
      policyname: cdktf.stringToTerraform(this._policyname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmdspec: {
        value: cdktf.stringToHclTerraform(this._cmdspec),
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
      policyname: {
        value: cdktf.stringToHclTerraform(this._policyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
