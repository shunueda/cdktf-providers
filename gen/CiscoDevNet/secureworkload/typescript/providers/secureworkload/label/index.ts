// https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/label
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Key/value map for tagging matching flows and inventory items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/label#attributes Label#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/label#id Label#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4/IPv6 address or subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/label#ip Label#ip}
  */
  readonly ip: string;
  /**
  * SecureWorkload root app scope name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/label#root_scope_name Label#root_scope_name}
  */
  readonly rootScopeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/label secureworkload_label}
*/
export class Label extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secureworkload_label";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Label resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Label to import
  * @param importFromId The id of the existing Label that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/label#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Label to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secureworkload_label", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/secureworkload/1.8.0/docs/resources/label secureworkload_label} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LabelConfig
  */
  public constructor(scope: Construct, id: string, config: LabelConfig) {
    super(scope, id, {
      terraformResourceType: 'secureworkload_label',
      terraformGeneratorMetadata: {
        providerName: 'secureworkload',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._id = config.id;
    this._ip = config.ip;
    this._rootScopeName = config.rootScopeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // root_scope_name - computed: false, optional: true, required: false
  private _rootScopeName?: string; 
  public get rootScopeName() {
    return this.getStringAttribute('root_scope_name');
  }
  public set rootScopeName(value: string) {
    this._rootScopeName = value;
  }
  public resetRootScopeName() {
    this._rootScopeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootScopeNameInput() {
    return this._rootScopeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      root_scope_name: cdktf.stringToTerraform(this._rootScopeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_scope_name: {
        value: cdktf.stringToHclTerraform(this._rootScopeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
