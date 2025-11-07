// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the script requires permissions or not. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script#dont_require_permissions Script#dont_require_permissions}
  */
  readonly dontRequirePermissions?: boolean | cdktf.IResolvable;
  /**
  * The name of script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script#name Script#name}
  */
  readonly name: string;
  /**
  * The owner of the script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script#owner Script#owner}
  */
  readonly owner: string;
  /**
  * What permissions the script has. This must be one of the following: ftp, reboot, read, write, policy, test, password, sniff, sensitive, romon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script#policy Script#policy}
  */
  readonly policy: string[];
  /**
  * The source code of the script. See the [MikroTik docs](https://wiki.mikrotik.com/wiki/Manual:Scripting) for the scripting language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script#source Script#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script mikrotik_script}
*/
export class Script extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Script resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Script to import
  * @param importFromId The id of the existing Script that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Script to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/script mikrotik_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScriptConfig
  */
  public constructor(scope: Construct, id: string, config: ScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_script',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dontRequirePermissions = config.dontRequirePermissions;
    this._name = config.name;
    this._owner = config.owner;
    this._policy = config.policy;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dont_require_permissions - computed: true, optional: true, required: false
  private _dontRequirePermissions?: boolean | cdktf.IResolvable; 
  public get dontRequirePermissions() {
    return this.getBooleanAttribute('dont_require_permissions');
  }
  public set dontRequirePermissions(value: boolean | cdktf.IResolvable) {
    this._dontRequirePermissions = value;
  }
  public resetDontRequirePermissions() {
    this._dontRequirePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontRequirePermissionsInput() {
    return this._dontRequirePermissions;
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string[]; 
  public get policy() {
    return this.getListAttribute('policy');
  }
  public set policy(value: string[]) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dont_require_permissions: cdktf.booleanToTerraform(this._dontRequirePermissions),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policy),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dont_require_permissions: {
        value: cdktf.booleanToHclTerraform(this._dontRequirePermissions),
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
