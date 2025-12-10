// https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsAppConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The contract that defines which modules can satisfy this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection#contract DataNsAppConnection#contract}
  */
  readonly contract?: string;
  /**
  * The unique name of the connection within this module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection#name DataNsAppConnection#name}
  */
  readonly name: string;
  /**
  * This data source will cause an error if optional is false and this connection is not configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection#optional DataNsAppConnection#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * The type of module to satisfy this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection#type DataNsAppConnection#type}
  */
  readonly type?: string;
  /**
  * Defines this connection is satisfied through another ns_connection.
  * Typically, this is set to data.ns_connection.other.name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection#via DataNsAppConnection#via}
  */
  readonly via?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection ns_app_connection}
*/
export class DataNsAppConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_app_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsAppConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsAppConnection to import
  * @param importFromId The id of the existing DataNsAppConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsAppConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_app_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/app_connection ns_app_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsAppConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsAppConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'ns_app_connection',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contract = config.contract;
    this._name = config.name;
    this._optional = config.optional;
    this._type = config.type;
    this._via = config.via;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract - computed: false, optional: true, required: false
  private _contract?: string; 
  public get contract() {
    return this.getStringAttribute('contract');
  }
  public set contract(value: string) {
    this._contract = value;
  }
  public resetContract() {
    this._contract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInput() {
    return this._contract;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new cdktf.AnyMap(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // via - computed: false, optional: true, required: false
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  public resetVia() {
    this._via = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract: cdktf.stringToTerraform(this._contract),
      name: cdktf.stringToTerraform(this._name),
      optional: cdktf.booleanToTerraform(this._optional),
      type: cdktf.stringToTerraform(this._type),
      via: cdktf.stringToTerraform(this._via),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract: {
        value: cdktf.stringToHclTerraform(this._contract),
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
      optional: {
        value: cdktf.booleanToHclTerraform(this._optional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      via: {
        value: cdktf.stringToHclTerraform(this._via),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
