// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/data-sources/alert_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyAlertFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/data-sources/alert_field#created_at DataRootlyAlertField#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/data-sources/alert_field#kind DataRootlyAlertField#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/data-sources/alert_field#name DataRootlyAlertField#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/data-sources/alert_field rootly_alert_field}
*/
export class DataRootlyAlertField extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_alert_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyAlertField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyAlertField to import
  * @param importFromId The id of the existing DataRootlyAlertField that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/data-sources/alert_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyAlertField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_alert_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/data-sources/alert_field rootly_alert_field} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyAlertFieldConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyAlertFieldConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_alert_field',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._kind = config.kind;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: { [key: string]: string }; 
  public get createdAt() {
    return this.getStringMapAttribute('created_at');
  }
  public set createdAt(value: { [key: string]: string }) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
