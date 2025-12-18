// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nat64
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nat64Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nat64#acl6name Nat64#acl6name}
  */
  readonly acl6Name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nat64#id Nat64#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nat64#name Nat64#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nat64#netprofile Nat64#netprofile}
  */
  readonly netprofile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nat64 citrixadc_nat64}
*/
export class Nat64 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nat64";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nat64 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nat64 to import
  * @param importFromId The id of the existing Nat64 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nat64#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nat64 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nat64", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nat64 citrixadc_nat64} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nat64Config
  */
  public constructor(scope: Construct, id: string, config: Nat64Config) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nat64',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl6Name = config.acl6Name;
    this._id = config.id;
    this._name = config.name;
    this._netprofile = config.netprofile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl6name - computed: false, optional: false, required: true
  private _acl6Name?: string; 
  public get acl6Name() {
    return this.getStringAttribute('acl6name');
  }
  public set acl6Name(value: string) {
    this._acl6Name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acl6NameInput() {
    return this._acl6Name;
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

  // netprofile - computed: true, optional: true, required: false
  private _netprofile?: string; 
  public get netprofile() {
    return this.getStringAttribute('netprofile');
  }
  public set netprofile(value: string) {
    this._netprofile = value;
  }
  public resetNetprofile() {
    this._netprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netprofileInput() {
    return this._netprofile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl6name: cdktf.stringToTerraform(this._acl6Name),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      netprofile: cdktf.stringToTerraform(this._netprofile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl6name: {
        value: cdktf.stringToHclTerraform(this._acl6Name),
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
      netprofile: {
        value: cdktf.stringToHclTerraform(this._netprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
