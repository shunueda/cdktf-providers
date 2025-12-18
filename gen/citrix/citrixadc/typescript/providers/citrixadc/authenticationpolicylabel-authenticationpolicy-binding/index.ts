// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationpolicylabelAuthenticationpolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding#gotopriorityexpression AuthenticationpolicylabelAuthenticationpolicyBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding#id AuthenticationpolicylabelAuthenticationpolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding#labelname AuthenticationpolicylabelAuthenticationpolicyBinding#labelname}
  */
  readonly labelname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding#nextfactor AuthenticationpolicylabelAuthenticationpolicyBinding#nextfactor}
  */
  readonly nextfactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding#policyname AuthenticationpolicylabelAuthenticationpolicyBinding#policyname}
  */
  readonly policyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding#priority AuthenticationpolicylabelAuthenticationpolicyBinding#priority}
  */
  readonly priority: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding citrixadc_authenticationpolicylabel_authenticationpolicy_binding}
*/
export class AuthenticationpolicylabelAuthenticationpolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationpolicylabel_authenticationpolicy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationpolicylabelAuthenticationpolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationpolicylabelAuthenticationpolicyBinding to import
  * @param importFromId The id of the existing AuthenticationpolicylabelAuthenticationpolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationpolicylabelAuthenticationpolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationpolicylabel_authenticationpolicy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpolicylabel_authenticationpolicy_binding citrixadc_authenticationpolicylabel_authenticationpolicy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationpolicylabelAuthenticationpolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationpolicylabelAuthenticationpolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationpolicylabel_authenticationpolicy_binding',
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
    this._gotopriorityexpression = config.gotopriorityexpression;
    this._id = config.id;
    this._labelname = config.labelname;
    this._nextfactor = config.nextfactor;
    this._policyname = config.policyname;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
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

  // labelname - computed: false, optional: false, required: true
  private _labelname?: string; 
  public get labelname() {
    return this.getStringAttribute('labelname');
  }
  public set labelname(value: string) {
    this._labelname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelnameInput() {
    return this._labelname;
  }

  // nextfactor - computed: true, optional: true, required: false
  private _nextfactor?: string; 
  public get nextfactor() {
    return this.getStringAttribute('nextfactor');
  }
  public set nextfactor(value: string) {
    this._nextfactor = value;
  }
  public resetNextfactor() {
    this._nextfactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextfactorInput() {
    return this._nextfactor;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      id: cdktf.stringToTerraform(this._id),
      labelname: cdktf.stringToTerraform(this._labelname),
      nextfactor: cdktf.stringToTerraform(this._nextfactor),
      policyname: cdktf.stringToTerraform(this._policyname),
      priority: cdktf.numberToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gotopriorityexpression: {
        value: cdktf.stringToHclTerraform(this._gotopriorityexpression),
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
      labelname: {
        value: cdktf.stringToHclTerraform(this._labelname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nextfactor: {
        value: cdktf.stringToHclTerraform(this._nextfactor),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
