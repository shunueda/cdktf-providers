// https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredstashProviderConfig {
  /**
  * The profile that should be used to connect to AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs#profile CredstashProvider#profile}
  */
  readonly profile?: string;
  /**
  * The region where AWS operations will take place. Examples
  * are us-east-1, us-west-2, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs#region CredstashProvider#region}
  */
  readonly region: string;
  /**
  * The DynamoDB table where the secrets are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs#table CredstashProvider#table}
  */
  readonly table?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs#alias CredstashProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs credstash}
*/
export class CredstashProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "credstash";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredstashProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredstashProvider to import
  * @param importFromId The id of the existing CredstashProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredstashProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "credstash", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs credstash} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredstashProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CredstashProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'credstash',
      terraformGeneratorMetadata: {
        providerName: 'credstash',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      terraformProviderSource: 'granular-oss/credstash'
    });
    this._profile = config.profile;
    this._region = config.region;
    this._table = config.table;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this._table;
  }
  public set table(value: string | undefined) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
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
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      table: cdktf.stringToTerraform(this._table),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktf.stringToHclTerraform(this._table),
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
