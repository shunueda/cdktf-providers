// https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable#id EnvironmentVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable#key EnvironmentVariable#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable#locked EnvironmentVariable#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable#secret EnvironmentVariable#secret}
  */
  readonly secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable#value EnvironmentVariable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable checkly_environment_variable}
*/
export class EnvironmentVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_environment_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentVariable to import
  * @param importFromId The id of the existing EnvironmentVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_environment_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/environment_variable checkly_environment_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentVariableConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_environment_variable',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
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
    this._key = config.key;
    this._locked = config.locked;
    this._secret = config.secret;
    this._value = config.value;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: boolean | cdktf.IResolvable; 
  public get secret() {
    return this.getBooleanAttribute('secret');
  }
  public set secret(value: boolean | cdktf.IResolvable) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
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
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      locked: cdktf.booleanToTerraform(this._locked),
      secret: cdktf.booleanToTerraform(this._secret),
      value: cdktf.stringToTerraform(this._value),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret: {
        value: cdktf.booleanToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
