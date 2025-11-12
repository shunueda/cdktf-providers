// https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttributionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * list of the attributions IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution_group#attributions AttributionGroup#attributions}
  */
  readonly attributions: string[];
  /**
  * Description of the attribution group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution_group#description AttributionGroup#description}
  */
  readonly description?: string;
  /**
  * Name of the attribution group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution_group#name AttributionGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution_group doit_attribution_group}
*/
export class AttributionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doit_attribution_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AttributionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AttributionGroup to import
  * @param importFromId The id of the existing AttributionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttributionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doit_attribution_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution_group doit_attribution_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttributionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AttributionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'doit_attribution_group',
      terraformGeneratorMetadata: {
        providerName: 'doit',
        providerVersion: '0.25.0',
        providerVersionConstraint: '0.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributions = config.attributions;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributions - computed: false, optional: false, required: true
  private _attributions?: string[]; 
  public get attributions() {
    return this.getListAttribute('attributions');
  }
  public set attributions(value: string[]) {
    this._attributions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributionsInput() {
    return this._attributions;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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
      attributions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributions),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
