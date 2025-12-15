// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_prefix_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyoptionsPrefixListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply IP prefixes from a configuration statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_prefix_list#apply_path PolicyoptionsPrefixList#apply_path}
  */
  readonly applyPath?: string;
  /**
  * Object may exist in dynamic database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_prefix_list#dynamic_db PolicyoptionsPrefixList#dynamic_db}
  */
  readonly dynamicDb?: boolean | cdktf.IResolvable;
  /**
  * Prefix list name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_prefix_list#name PolicyoptionsPrefixList#name}
  */
  readonly name: string;
  /**
  * Address prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_prefix_list#prefix PolicyoptionsPrefixList#prefix}
  */
  readonly prefix?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_prefix_list junos_policyoptions_prefix_list}
*/
export class PolicyoptionsPrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_policyoptions_prefix_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyoptionsPrefixList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyoptionsPrefixList to import
  * @param importFromId The id of the existing PolicyoptionsPrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_prefix_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyoptionsPrefixList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_policyoptions_prefix_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/policyoptions_prefix_list junos_policyoptions_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyoptionsPrefixListConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyoptionsPrefixListConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_policyoptions_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyPath = config.applyPath;
    this._dynamicDb = config.dynamicDb;
    this._name = config.name;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_path - computed: false, optional: true, required: false
  private _applyPath?: string; 
  public get applyPath() {
    return this.getStringAttribute('apply_path');
  }
  public set applyPath(value: string) {
    this._applyPath = value;
  }
  public resetApplyPath() {
    this._applyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPathInput() {
    return this._applyPath;
  }

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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix'));
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_path: cdktf.stringToTerraform(this._applyPath),
      dynamic_db: cdktf.booleanToTerraform(this._dynamicDb),
      name: cdktf.stringToTerraform(this._name),
      prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_path: {
        value: cdktf.stringToHclTerraform(this._applyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      prefix: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefix),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
