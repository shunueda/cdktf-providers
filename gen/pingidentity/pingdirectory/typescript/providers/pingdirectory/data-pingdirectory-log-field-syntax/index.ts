// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_syntax
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLogFieldSyntaxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_syntax#name DataPingdirectoryLogFieldSyntax#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_syntax pingdirectory_log_field_syntax}
*/
export class DataPingdirectoryLogFieldSyntax extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_log_field_syntax";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLogFieldSyntax resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLogFieldSyntax to import
  * @param importFromId The id of the existing DataPingdirectoryLogFieldSyntax that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_syntax#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLogFieldSyntax to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_log_field_syntax", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_field_syntax pingdirectory_log_field_syntax} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLogFieldSyntaxConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLogFieldSyntaxConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_log_field_syntax',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
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

  // default_behavior - computed: true, optional: false, required: false
  public get defaultBehavior() {
    return this.getStringAttribute('default_behavior');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // excluded_sensitive_attribute - computed: true, optional: false, required: false
  public get excludedSensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_sensitive_attribute'));
  }

  // excluded_sensitive_field - computed: true, optional: false, required: false
  public get excludedSensitiveField() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_sensitive_field'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_sensitive_attribute - computed: true, optional: false, required: false
  public get includedSensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('included_sensitive_attribute'));
  }

  // included_sensitive_field - computed: true, optional: false, required: false
  public get includedSensitiveField() {
    return cdktf.Fn.tolist(this.getListAttribute('included_sensitive_field'));
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
