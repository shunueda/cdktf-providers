// https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Update the allow list for a database instance list. The list can use single IP addresses or CIDR ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database#allowlist Database#allowlist}
  */
  readonly allowlist?: string[];
  /**
  * Datacenter key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database#datacenterkey Database#datacenterkey}
  */
  readonly datacenterkey: string;
  /**
  * Database engine name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database#engine Database#engine}
  */
  readonly engine: string;
  /**
  * Database engine version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database#engineversion Database#engineversion}
  */
  readonly engineversion: string;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database#name Database#name}
  */
  readonly name: string;
  /**
  * Database plan key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database#plankey Database#plankey}
  */
  readonly plankey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database glesys_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Database to import
  * @param importFromId The id of the existing Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Database to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/database glesys_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_database',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowlist = config.allowlist;
    this._datacenterkey = config.datacenterkey;
    this._engine = config.engine;
    this._engineversion = config.engineversion;
    this._name = config.name;
    this._plankey = config.plankey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowlist - computed: false, optional: true, required: false
  private _allowlist?: string[]; 
  public get allowlist() {
    return this.getListAttribute('allowlist');
  }
  public set allowlist(value: string[]) {
    this._allowlist = value;
  }
  public resetAllowlist() {
    this._allowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist;
  }

  // connectionstring - computed: true, optional: false, required: false
  public get connectionstring() {
    return this.getStringAttribute('connectionstring');
  }

  // datacenterkey - computed: false, optional: false, required: true
  private _datacenterkey?: string; 
  public get datacenterkey() {
    return this.getStringAttribute('datacenterkey');
  }
  public set datacenterkey(value: string) {
    this._datacenterkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterkeyInput() {
    return this._datacenterkey;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engineversion - computed: false, optional: false, required: true
  private _engineversion?: string; 
  public get engineversion() {
    return this.getStringAttribute('engineversion');
  }
  public set engineversion(value: string) {
    this._engineversion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineversionInput() {
    return this._engineversion;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintenancewindow_durationinminutes - computed: true, optional: false, required: false
  public get maintenancewindowDurationinminutes() {
    return this.getNumberAttribute('maintenancewindow_durationinminutes');
  }

  // maintenancewindow_starttime - computed: true, optional: false, required: false
  public get maintenancewindowStarttime() {
    return this.getStringAttribute('maintenancewindow_starttime');
  }

  // maintenancewindow_weekday - computed: true, optional: false, required: false
  public get maintenancewindowWeekday() {
    return this.getStringAttribute('maintenancewindow_weekday');
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

  // plankey - computed: false, optional: false, required: true
  private _plankey?: string; 
  public get plankey() {
    return this.getStringAttribute('plankey');
  }
  public set plankey(value: string) {
    this._plankey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plankeyInput() {
    return this._plankey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowlist),
      datacenterkey: cdktf.stringToTerraform(this._datacenterkey),
      engine: cdktf.stringToTerraform(this._engine),
      engineversion: cdktf.stringToTerraform(this._engineversion),
      name: cdktf.stringToTerraform(this._name),
      plankey: cdktf.stringToTerraform(this._plankey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      datacenterkey: {
        value: cdktf.stringToHclTerraform(this._datacenterkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engineversion: {
        value: cdktf.stringToHclTerraform(this._engineversion),
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
      plankey: {
        value: cdktf.stringToHclTerraform(this._plankey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
