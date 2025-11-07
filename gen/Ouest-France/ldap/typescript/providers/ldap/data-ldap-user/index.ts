// https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLdapUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the LDAP user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/user#name DataLdapUser#name}
  */
  readonly name?: string;
  /**
  * OU where LDAP user will be search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/user#ou DataLdapUser#ou}
  */
  readonly ou: string;
  /**
  * The sAMAccountName of the LDAP user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/user#sam_account_name DataLdapUser#sam_account_name}
  */
  readonly samAccountName?: string;
  /**
  * The userPrincipalName of the LDAP user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/user#user_principal_name DataLdapUser#user_principal_name}
  */
  readonly userPrincipalName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/user ldap_user}
*/
export class DataLdapUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLdapUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLdapUser to import
  * @param importFromId The id of the existing DataLdapUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLdapUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ouest-france/ldap/0.8.12/docs/data-sources/user ldap_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLdapUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataLdapUserConfig) {
    super(scope, id, {
      terraformResourceType: 'ldap_user',
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
    this._name = config.name;
    this._ou = config.ou;
    this._samAccountName = config.samAccountName;
    this._userPrincipalName = config.userPrincipalName;
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

  // mail - computed: true, optional: false, required: false
  public get mail() {
    return this.getStringAttribute('mail');
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

  // sam_account_name - computed: false, optional: true, required: false
  private _samAccountName?: string; 
  public get samAccountName() {
    return this.getStringAttribute('sam_account_name');
  }
  public set samAccountName(value: string) {
    this._samAccountName = value;
  }
  public resetSamAccountName() {
    this._samAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samAccountNameInput() {
    return this._samAccountName;
  }

  // user_principal_name - computed: false, optional: true, required: false
  private _userPrincipalName?: string; 
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
  public set userPrincipalName(value: string) {
    this._userPrincipalName = value;
  }
  public resetUserPrincipalName() {
    this._userPrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrincipalNameInput() {
    return this._userPrincipalName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ou: cdktf.stringToTerraform(this._ou),
      sam_account_name: cdktf.stringToTerraform(this._samAccountName),
      user_principal_name: cdktf.stringToTerraform(this._userPrincipalName),
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
      sam_account_name: {
        value: cdktf.stringToHclTerraform(this._samAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_principal_name: {
        value: cdktf.stringToHclTerraform(this._userPrincipalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
