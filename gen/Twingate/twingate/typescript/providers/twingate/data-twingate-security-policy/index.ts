// https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwingateSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return a Security Policy by its ID. The ID for the Security Policy can be obtained from the Admin API or the URL string in the Admin Console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/security_policy#id DataTwingateSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Return a Security Policy that exactly matches this name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/security_policy#name DataTwingateSecurityPolicy#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/security_policy twingate_security_policy}
*/
export class DataTwingateSecurityPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwingateSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwingateSecurityPolicy to import
  * @param importFromId The id of the existing DataTwingateSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwingateSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/security_policy twingate_security_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwingateSecurityPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwingateSecurityPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twingate_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.5.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
