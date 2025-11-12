// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/attribute_syntax
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryAttributeSyntaxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/attribute_syntax#name DataPingdirectoryAttributeSyntax#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/attribute_syntax pingdirectory_attribute_syntax}
*/
export class DataPingdirectoryAttributeSyntax extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_attribute_syntax";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryAttributeSyntax resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryAttributeSyntax to import
  * @param importFromId The id of the existing DataPingdirectoryAttributeSyntax that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/attribute_syntax#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryAttributeSyntax to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_attribute_syntax", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/attribute_syntax pingdirectory_attribute_syntax} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryAttributeSyntaxConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryAttributeSyntaxConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_attribute_syntax',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_zero_length_values - computed: true, optional: false, required: false
  public get allowZeroLengthValues() {
    return this.getBooleanAttribute('allow_zero_length_values');
  }

  // enable_compaction - computed: true, optional: false, required: false
  public get enableCompaction() {
    return this.getBooleanAttribute('enable_compaction');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_attribute_from_compaction - computed: true, optional: false, required: false
  public get excludeAttributeFromCompaction() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_attribute_from_compaction'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_attribute_in_compaction - computed: true, optional: false, required: false
  public get includeAttributeInCompaction() {
    return cdktf.Fn.tolist(this.getListAttribute('include_attribute_in_compaction'));
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

  // require_binary_transfer - computed: true, optional: false, required: false
  public get requireBinaryTransfer() {
    return this.getBooleanAttribute('require_binary_transfer');
  }

  // strict_format - computed: true, optional: false, required: false
  public get strictFormat() {
    return this.getBooleanAttribute('strict_format');
  }

  // strip_syntax_min_upper_bound - computed: true, optional: false, required: false
  public get stripSyntaxMinUpperBound() {
    return this.getBooleanAttribute('strip_syntax_min_upper_bound');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
