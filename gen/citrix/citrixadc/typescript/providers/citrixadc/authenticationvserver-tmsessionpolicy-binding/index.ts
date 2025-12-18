// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationvserverTmsessionpolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#bindpoint AuthenticationvserverTmsessionpolicyBinding#bindpoint}
  */
  readonly bindpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#gotopriorityexpression AuthenticationvserverTmsessionpolicyBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#groupextraction AuthenticationvserverTmsessionpolicyBinding#groupextraction}
  */
  readonly groupextraction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#id AuthenticationvserverTmsessionpolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#name AuthenticationvserverTmsessionpolicyBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#nextfactor AuthenticationvserverTmsessionpolicyBinding#nextfactor}
  */
  readonly nextfactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#policy AuthenticationvserverTmsessionpolicyBinding#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#priority AuthenticationvserverTmsessionpolicyBinding#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#secondary AuthenticationvserverTmsessionpolicyBinding#secondary}
  */
  readonly secondary?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding citrixadc_authenticationvserver_tmsessionpolicy_binding}
*/
export class AuthenticationvserverTmsessionpolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationvserver_tmsessionpolicy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationvserverTmsessionpolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationvserverTmsessionpolicyBinding to import
  * @param importFromId The id of the existing AuthenticationvserverTmsessionpolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationvserverTmsessionpolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationvserver_tmsessionpolicy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationvserver_tmsessionpolicy_binding citrixadc_authenticationvserver_tmsessionpolicy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationvserverTmsessionpolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationvserverTmsessionpolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationvserver_tmsessionpolicy_binding',
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
    this._bindpoint = config.bindpoint;
    this._gotopriorityexpression = config.gotopriorityexpression;
    this._groupextraction = config.groupextraction;
    this._id = config.id;
    this._name = config.name;
    this._nextfactor = config.nextfactor;
    this._policy = config.policy;
    this._priority = config.priority;
    this._secondary = config.secondary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bindpoint - computed: true, optional: true, required: false
  private _bindpoint?: string; 
  public get bindpoint() {
    return this.getStringAttribute('bindpoint');
  }
  public set bindpoint(value: string) {
    this._bindpoint = value;
  }
  public resetBindpoint() {
    this._bindpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpointInput() {
    return this._bindpoint;
  }

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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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
      bindpoint: cdktf.stringToTerraform(this._bindpoint),
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      groupextraction: cdktf.booleanToTerraform(this._groupextraction),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nextfactor: cdktf.stringToTerraform(this._nextfactor),
      policy: cdktf.stringToTerraform(this._policy),
      priority: cdktf.numberToTerraform(this._priority),
      secondary: cdktf.booleanToTerraform(this._secondary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bindpoint: {
        value: cdktf.stringToHclTerraform(this._bindpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
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
