// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/dns_script_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsScriptVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/dns_script_variable#name DnsScriptVariable#name}
  */
  readonly name: string;
  /**
  * The ID of the associated DNS script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/dns_script_variable#script DnsScriptVariable#script}
  */
  readonly script: number;
  /**
  * The value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/dns_script_variable#value DnsScriptVariable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/dns_script_variable bunnynet_dns_script_variable}
*/
export class DnsScriptVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_dns_script_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsScriptVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsScriptVariable to import
  * @param importFromId The id of the existing DnsScriptVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/dns_script_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsScriptVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_dns_script_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/dns_script_variable bunnynet_dns_script_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsScriptVariableConfig
  */
  public constructor(scope: Construct, id: string, config: DnsScriptVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_dns_script_variable',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._script = config.script;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // script - computed: false, optional: false, required: true
  private _script?: number; 
  public get script() {
    return this.getNumberAttribute('script');
  }
  public set script(value: number) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      script: cdktf.numberToTerraform(this._script),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.numberToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
