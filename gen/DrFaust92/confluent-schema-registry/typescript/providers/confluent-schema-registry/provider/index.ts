// https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.6.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfluentSchemaRegistryProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.6.1/docs#password ConfluentSchemaRegistryProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.6.1/docs#schema_registry_url ConfluentSchemaRegistryProvider#schema_registry_url}
  */
  readonly schemaRegistryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.6.1/docs#username ConfluentSchemaRegistryProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.6.1/docs#alias ConfluentSchemaRegistryProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.6.1/docs confluent-schema-registry}
*/
export class ConfluentSchemaRegistryProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent-schema-registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfluentSchemaRegistryProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfluentSchemaRegistryProvider to import
  * @param importFromId The id of the existing ConfluentSchemaRegistryProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.6.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfluentSchemaRegistryProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent-schema-registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.6.1/docs confluent-schema-registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfluentSchemaRegistryProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfluentSchemaRegistryProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'confluent-schema-registry',
      terraformGeneratorMetadata: {
        providerName: 'confluent-schema-registry',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      terraformProviderSource: 'DrFaust92/confluent-schema-registry'
    });
    this._password = config.password;
    this._schemaRegistryUrl = config.schemaRegistryUrl;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // schema_registry_url - computed: false, optional: true, required: false
  private _schemaRegistryUrl?: string; 
  public get schemaRegistryUrl() {
    return this._schemaRegistryUrl;
  }
  public set schemaRegistryUrl(value: string | undefined) {
    this._schemaRegistryUrl = value;
  }
  public resetSchemaRegistryUrl() {
    this._schemaRegistryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUrlInput() {
    return this._schemaRegistryUrl;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      password: cdktf.stringToTerraform(this._password),
      schema_registry_url: cdktf.stringToTerraform(this._schemaRegistryUrl),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_registry_url: {
        value: cdktf.stringToHclTerraform(this._schemaRegistryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
