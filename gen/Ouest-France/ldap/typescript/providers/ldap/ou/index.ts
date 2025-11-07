// https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/resources/ou
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OuConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description attribute for the LDAP OU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/resources/ou#description Ou#description}
  */
  readonly description?: string;
  /**
  * ManagedBy attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/resources/ou#managed_by Ou#managed_by}
  */
  readonly managedBy?: string;
  /**
  * LDAP OU name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/resources/ou#name Ou#name}
  */
  readonly name: string;
  /**
  * OU where LDAP OU will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/resources/ou#ou Ou#ou}
  */
  readonly ou: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/resources/ou ldap_ou}
*/
export class Ou extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_ou";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ou resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ou to import
  * @param importFromId The id of the existing Ou that should be imported. Refer to the {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/resources/ou#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ou to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_ou", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/resources/ou ldap_ou} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OuConfig
  */
  public constructor(scope: Construct, id: string, config: OuConfig) {
    super(scope, id, {
      terraformResourceType: 'ldap_ou',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.8.12'
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
    this._managedBy = config.managedBy;
    this._name = config.name;
    this._ou = config.ou;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_by - computed: false, optional: true, required: false
  private _managedBy?: string; 
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }
  public set managedBy(value: string) {
    this._managedBy = value;
  }
  public resetManagedBy() {
    this._managedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedByInput() {
    return this._managedBy;
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

  // ou - computed: false, optional: false, required: true
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      managed_by: cdktf.stringToTerraform(this._managedBy),
      name: cdktf.stringToTerraform(this._name),
      ou: cdktf.stringToTerraform(this._ou),
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
      managed_by: {
        value: cdktf.stringToHclTerraform(this._managedBy),
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
      ou: {
        value: cdktf.stringToHclTerraform(this._ou),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
