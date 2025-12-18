// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaglobal_aaapreauthenticationpolicy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaglobalAaapreauthenticationpolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaglobal_aaapreauthenticationpolicy_binding#builtin AaaglobalAaapreauthenticationpolicyBinding#builtin}
  */
  readonly builtin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaglobal_aaapreauthenticationpolicy_binding#id AaaglobalAaapreauthenticationpolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaglobal_aaapreauthenticationpolicy_binding#policy AaaglobalAaapreauthenticationpolicyBinding#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaglobal_aaapreauthenticationpolicy_binding#priority AaaglobalAaapreauthenticationpolicyBinding#priority}
  */
  readonly priority: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaglobal_aaapreauthenticationpolicy_binding citrixadc_aaaglobal_aaapreauthenticationpolicy_binding}
*/
export class AaaglobalAaapreauthenticationpolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaaglobal_aaapreauthenticationpolicy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaaglobalAaapreauthenticationpolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaaglobalAaapreauthenticationpolicyBinding to import
  * @param importFromId The id of the existing AaaglobalAaapreauthenticationpolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaglobal_aaapreauthenticationpolicy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaaglobalAaapreauthenticationpolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaaglobal_aaapreauthenticationpolicy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaglobal_aaapreauthenticationpolicy_binding citrixadc_aaaglobal_aaapreauthenticationpolicy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaglobalAaapreauthenticationpolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AaaglobalAaapreauthenticationpolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaaglobal_aaapreauthenticationpolicy_binding',
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
    this._builtin = config.builtin;
    this._id = config.id;
    this._policy = config.policy;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // builtin - computed: true, optional: true, required: false
  private _builtin?: string[]; 
  public get builtin() {
    return this.getListAttribute('builtin');
  }
  public set builtin(value: string[]) {
    this._builtin = value;
  }
  public resetBuiltin() {
    this._builtin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinInput() {
    return this._builtin;
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
      builtin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._builtin),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      priority: cdktf.numberToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      builtin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._builtin),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
