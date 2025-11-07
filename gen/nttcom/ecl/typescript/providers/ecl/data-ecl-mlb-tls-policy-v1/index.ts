// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclMlbTlsPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1#default DataEclMlbTlsPolicyV1#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1#description DataEclMlbTlsPolicyV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1#id DataEclMlbTlsPolicyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1#name DataEclMlbTlsPolicyV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1#tls_ciphers DataEclMlbTlsPolicyV1#tls_ciphers}
  */
  readonly tlsCiphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1#tls_protocols DataEclMlbTlsPolicyV1#tls_protocols}
  */
  readonly tlsProtocols?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1 ecl_mlb_tls_policy_v1}
*/
export class DataEclMlbTlsPolicyV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_mlb_tls_policy_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclMlbTlsPolicyV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclMlbTlsPolicyV1 to import
  * @param importFromId The id of the existing DataEclMlbTlsPolicyV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclMlbTlsPolicyV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_mlb_tls_policy_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_tls_policy_v1 ecl_mlb_tls_policy_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclMlbTlsPolicyV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclMlbTlsPolicyV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_mlb_tls_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tlsCiphers = config.tlsCiphers;
    this._tlsProtocols = config.tlsProtocols;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: true, optional: true, required: false
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

  // tls_ciphers - computed: true, optional: true, required: false
  private _tlsCiphers?: string[]; 
  public get tlsCiphers() {
    return this.getListAttribute('tls_ciphers');
  }
  public set tlsCiphers(value: string[]) {
    this._tlsCiphers = value;
  }
  public resetTlsCiphers() {
    this._tlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersInput() {
    return this._tlsCiphers;
  }

  // tls_protocols - computed: true, optional: true, required: false
  private _tlsProtocols?: string[]; 
  public get tlsProtocols() {
    return this.getListAttribute('tls_protocols');
  }
  public set tlsProtocols(value: string[]) {
    this._tlsProtocols = value;
  }
  public resetTlsProtocols() {
    this._tlsProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProtocolsInput() {
    return this._tlsProtocols;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tls_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsCiphers),
      tls_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsProtocols),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      tls_ciphers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsCiphers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tls_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsProtocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
