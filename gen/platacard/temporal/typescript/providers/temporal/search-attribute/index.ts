// https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/search_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search Attribute Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/search_attribute#name SearchAttribute#name}
  */
  readonly name: string;
  /**
  * Namespace with which the Search Attribute is associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/search_attribute#namespace SearchAttribute#namespace}
  */
  readonly namespace?: string;
  /**
  * Search Attribute Indexed Value Type, which defines the type of data stored in the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/search_attribute#type SearchAttribute#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/search_attribute temporal_search_attribute}
*/
export class SearchAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporal_search_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SearchAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchAttribute to import
  * @param importFromId The id of the existing SearchAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/search_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporal_search_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/search_attribute temporal_search_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: SearchAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'temporal_search_attribute',
      terraformGeneratorMetadata: {
        providerName: 'temporal',
        providerVersion: '0.14.0',
        providerVersionConstraint: '0.14.0'
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
    this._namespace = config.namespace;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      type: cdktf.stringToTerraform(this._type),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
