// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rib_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RibGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Export routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rib_group#export_rib RibGroup#export_rib}
  */
  readonly exportRib?: string;
  /**
  * List of policy for import route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rib_group#import_policy RibGroup#import_policy}
  */
  readonly importPolicy?: string[];
  /**
  * List of import routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rib_group#import_rib RibGroup#import_rib}
  */
  readonly importRib?: string[];
  /**
  * The name of rib group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rib_group#name RibGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rib_group junos_rib_group}
*/
export class RibGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_rib_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RibGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RibGroup to import
  * @param importFromId The id of the existing RibGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rib_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RibGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_rib_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rib_group junos_rib_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RibGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RibGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_rib_group',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exportRib = config.exportRib;
    this._importPolicy = config.importPolicy;
    this._importRib = config.importRib;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_rib - computed: false, optional: true, required: false
  private _exportRib?: string; 
  public get exportRib() {
    return this.getStringAttribute('export_rib');
  }
  public set exportRib(value: string) {
    this._exportRib = value;
  }
  public resetExportRib() {
    this._exportRib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRibInput() {
    return this._exportRib;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_policy - computed: false, optional: true, required: false
  private _importPolicy?: string[]; 
  public get importPolicy() {
    return this.getListAttribute('import_policy');
  }
  public set importPolicy(value: string[]) {
    this._importPolicy = value;
  }
  public resetImportPolicy() {
    this._importPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPolicyInput() {
    return this._importPolicy;
  }

  // import_rib - computed: false, optional: true, required: false
  private _importRib?: string[]; 
  public get importRib() {
    return this.getListAttribute('import_rib');
  }
  public set importRib(value: string[]) {
    this._importRib = value;
  }
  public resetImportRib() {
    this._importRib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRibInput() {
    return this._importRib;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_rib: cdktf.stringToTerraform(this._exportRib),
      import_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importPolicy),
      import_rib: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importRib),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_rib: {
        value: cdktf.stringToHclTerraform(this._exportRib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importPolicy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      import_rib: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importRib),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
