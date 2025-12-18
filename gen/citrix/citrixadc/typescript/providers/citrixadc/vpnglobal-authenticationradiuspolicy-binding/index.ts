// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnglobalAuthenticationradiuspolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding#gotopriorityexpression VpnglobalAuthenticationradiuspolicyBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding#groupextraction VpnglobalAuthenticationradiuspolicyBinding#groupextraction}
  */
  readonly groupextraction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding#id VpnglobalAuthenticationradiuspolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding#policyname VpnglobalAuthenticationradiuspolicyBinding#policyname}
  */
  readonly policyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding#priority VpnglobalAuthenticationradiuspolicyBinding#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding#secondary VpnglobalAuthenticationradiuspolicyBinding#secondary}
  */
  readonly secondary?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding citrixadc_vpnglobal_authenticationradiuspolicy_binding}
*/
export class VpnglobalAuthenticationradiuspolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnglobal_authenticationradiuspolicy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnglobalAuthenticationradiuspolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnglobalAuthenticationradiuspolicyBinding to import
  * @param importFromId The id of the existing VpnglobalAuthenticationradiuspolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnglobalAuthenticationradiuspolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnglobal_authenticationradiuspolicy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnglobal_authenticationradiuspolicy_binding citrixadc_vpnglobal_authenticationradiuspolicy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnglobalAuthenticationradiuspolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: VpnglobalAuthenticationradiuspolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnglobal_authenticationradiuspolicy_binding',
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
    this._groupextraction = config.groupextraction;
    this._id = config.id;
    this._policyname = config.policyname;
    this._priority = config.priority;
    this._secondary = config.secondary;
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

  // groupextraction - computed: true, optional: true, required: false
  private _groupextraction?: boolean | cdktf.IResolvable; 
  public get groupextraction() {
    return this.getBooleanAttribute('groupextraction');
  }
  public set groupextraction(value: boolean | cdktf.IResolvable) {
    this._groupextraction = value;
  }
  public resetGroupextraction() {
    this._groupextraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupextractionInput() {
    return this._groupextraction;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // secondary - computed: true, optional: true, required: false
  private _secondary?: boolean | cdktf.IResolvable; 
  public get secondary() {
    return this.getBooleanAttribute('secondary');
  }
  public set secondary(value: boolean | cdktf.IResolvable) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      groupextraction: cdktf.booleanToTerraform(this._groupextraction),
      id: cdktf.stringToTerraform(this._id),
      policyname: cdktf.stringToTerraform(this._policyname),
      priority: cdktf.numberToTerraform(this._priority),
      secondary: cdktf.booleanToTerraform(this._secondary),
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
      groupextraction: {
        value: cdktf.booleanToHclTerraform(this._groupextraction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary: {
        value: cdktf.booleanToHclTerraform(this._secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
