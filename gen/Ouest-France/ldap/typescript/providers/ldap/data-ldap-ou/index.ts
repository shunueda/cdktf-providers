// https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/ou
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLdapOuConfig extends cdktf.TerraformMetaArguments {
  /**
  * LDAP OU name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/ou#name DataLdapOu#name}
  */
  readonly name: string;
  /**
  * OU where LDAP OU will be search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/ou#ou DataLdapOu#ou}
  */
  readonly ou: string;
  /**
  * LDAP search scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/ou#scope DataLdapOu#scope}
  */
  readonly scope?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/ou ldap_ou}
*/
export class DataLdapOu extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_ou";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLdapOu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLdapOu to import
  * @param importFromId The id of the existing DataLdapOu that should be imported. Refer to the {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/ou#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLdapOu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_ou", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/ou ldap_ou} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLdapOuConfig
  */
  public constructor(scope: Construct, id: string, config: DataLdapOuConfig) {
    super(scope, id, {
      terraformResourceType: 'ldap_ou',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.8.12',
        providerVersionConstraint: '0.8.12'
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
    this._ou = config.ou;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
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

  // scope - computed: false, optional: true, required: false
  private _scope?: number; 
  public get scope() {
    return this.getNumberAttribute('scope');
  }
  public set scope(value: number) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ou: cdktf.stringToTerraform(this._ou),
      scope: cdktf.numberToTerraform(this._scope),
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
      ou: {
        value: cdktf.stringToHclTerraform(this._ou),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.numberToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
