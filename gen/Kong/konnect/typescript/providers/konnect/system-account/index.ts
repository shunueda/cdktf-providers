// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the system account. Useful when the system account name is not sufficient to differentiate one system account from another.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account#description SystemAccount#description}
  */
  readonly description: string;
  /**
  * The system account is managed by Konnect (true/false). Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account#konnect_managed SystemAccount#konnect_managed}
  */
  readonly konnectManaged?: boolean | cdktf.IResolvable;
  /**
  * Name of the system account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account#name SystemAccount#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account konnect_system_account}
*/
export class SystemAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_system_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAccount to import
  * @param importFromId The id of the existing SystemAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_system_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account konnect_system_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAccountConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_system_account',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._konnectManaged = config.konnectManaged;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // konnect_managed - computed: false, optional: true, required: false
  private _konnectManaged?: boolean | cdktf.IResolvable; 
  public get konnectManaged() {
    return this.getBooleanAttribute('konnect_managed');
  }
  public set konnectManaged(value: boolean | cdktf.IResolvable) {
    this._konnectManaged = value;
  }
  public resetKonnectManaged() {
    this._konnectManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get konnectManagedInput() {
    return this._konnectManaged;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      konnect_managed: cdktf.booleanToTerraform(this._konnectManaged),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      konnect_managed: {
        value: cdktf.booleanToHclTerraform(this._konnectManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
