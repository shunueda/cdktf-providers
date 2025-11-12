// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyoptionsAsPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Object may exist in dynamic database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path#dynamic_db PolicyoptionsAsPath#dynamic_db}
  */
  readonly dynamicDb?: boolean | cdktf.IResolvable;
  /**
  * Name to identify AS path regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path#name PolicyoptionsAsPath#name}
  */
  readonly name: string;
  /**
  * AS path regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path#path PolicyoptionsAsPath#path}
  */
  readonly path?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path junos_policyoptions_as_path}
*/
export class PolicyoptionsAsPath extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_policyoptions_as_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyoptionsAsPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyoptionsAsPath to import
  * @param importFromId The id of the existing PolicyoptionsAsPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyoptionsAsPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_policyoptions_as_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path junos_policyoptions_as_path} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyoptionsAsPathConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyoptionsAsPathConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_policyoptions_as_path',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicDb = config.dynamicDb;
    this._name = config.name;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_db - computed: false, optional: true, required: false
  private _dynamicDb?: boolean | cdktf.IResolvable; 
  public get dynamicDb() {
    return this.getBooleanAttribute('dynamic_db');
  }
  public set dynamicDb(value: boolean | cdktf.IResolvable) {
    this._dynamicDb = value;
  }
  public resetDynamicDb() {
    this._dynamicDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDbInput() {
    return this._dynamicDb;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_db: cdktf.booleanToTerraform(this._dynamicDb),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_db: {
        value: cdktf.booleanToHclTerraform(this._dynamicDb),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
