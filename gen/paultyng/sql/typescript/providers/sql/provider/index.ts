// https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlProviderConfig {
  /**
  * Sets the maximum number of connections in the idle connection pool. Default is `2`. See Go's documentation on [DB.SetMaxIdleConns](https://golang.org/pkg/database/sql/#DB.SetMaxIdleConns).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs#max_idle_conns SqlProvider#max_idle_conns}
  */
  readonly maxIdleConns?: number;
  /**
  * Sets the maximum number of open connections to the database. Default is `0` (unlimited). See Go's documentation on [DB.SetMaxOpenConns](https://golang.org/pkg/database/sql/#DB.SetMaxOpenConns).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs#max_open_conns SqlProvider#max_open_conns}
  */
  readonly maxOpenConns?: number;
  /**
  * Database connection strings are specified via URLs. The URL format is driver dependent but generally has the form: `dbdriver://username:password@host:port/dbname?param1=true&param2=false`. You can optionally set the `SQL_URL` environment variable instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs#url SqlProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs#alias SqlProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs sql}
*/
export class SqlProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlProvider to import
  * @param importFromId The id of the existing SqlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs sql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SqlProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sql',
      terraformGeneratorMetadata: {
        providerName: 'sql',
        providerVersion: '0.5.0'
      },
      terraformProviderSource: 'paultyng/sql'
    });
    this._maxIdleConns = config.maxIdleConns;
    this._maxOpenConns = config.maxOpenConns;
    this._url = config.url;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_idle_conns - computed: false, optional: true, required: false
  private _maxIdleConns?: number; 
  public get maxIdleConns() {
    return this._maxIdleConns;
  }
  public set maxIdleConns(value: number | undefined) {
    this._maxIdleConns = value;
  }
  public resetMaxIdleConns() {
    this._maxIdleConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnsInput() {
    return this._maxIdleConns;
  }

  // max_open_conns - computed: false, optional: true, required: false
  private _maxOpenConns?: number; 
  public get maxOpenConns() {
    return this._maxOpenConns;
  }
  public set maxOpenConns(value: number | undefined) {
    this._maxOpenConns = value;
  }
  public resetMaxOpenConns() {
    this._maxOpenConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnsInput() {
    return this._maxOpenConns;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      max_idle_conns: cdktf.numberToTerraform(this._maxIdleConns),
      max_open_conns: cdktf.numberToTerraform(this._maxOpenConns),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_idle_conns: {
        value: cdktf.numberToHclTerraform(this._maxIdleConns),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_open_conns: {
        value: cdktf.numberToHclTerraform(this._maxOpenConns),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
