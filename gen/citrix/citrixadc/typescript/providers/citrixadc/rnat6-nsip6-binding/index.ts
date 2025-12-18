// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6_nsip6_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Rnat6Nsip6BindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6_nsip6_binding#id Rnat6Nsip6Binding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6_nsip6_binding#name Rnat6Nsip6Binding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6_nsip6_binding#natip6 Rnat6Nsip6Binding#natip6}
  */
  readonly natip6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6_nsip6_binding#ownergroup Rnat6Nsip6Binding#ownergroup}
  */
  readonly ownergroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6_nsip6_binding citrixadc_rnat6_nsip6_binding}
*/
export class Rnat6Nsip6Binding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rnat6_nsip6_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rnat6Nsip6Binding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rnat6Nsip6Binding to import
  * @param importFromId The id of the existing Rnat6Nsip6Binding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6_nsip6_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rnat6Nsip6Binding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rnat6_nsip6_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6_nsip6_binding citrixadc_rnat6_nsip6_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Rnat6Nsip6BindingConfig
  */
  public constructor(scope: Construct, id: string, config: Rnat6Nsip6BindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rnat6_nsip6_binding',
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
    this._id = config.id;
    this._name = config.name;
    this._natip6 = config.natip6;
    this._ownergroup = config.ownergroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // natip6 - computed: false, optional: false, required: true
  private _natip6?: string; 
  public get natip6() {
    return this.getStringAttribute('natip6');
  }
  public set natip6(value: string) {
    this._natip6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natip6Input() {
    return this._natip6;
  }

  // ownergroup - computed: true, optional: true, required: false
  private _ownergroup?: string; 
  public get ownergroup() {
    return this.getStringAttribute('ownergroup');
  }
  public set ownergroup(value: string) {
    this._ownergroup = value;
  }
  public resetOwnergroup() {
    this._ownergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownergroupInput() {
    return this._ownergroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      natip6: cdktf.stringToTerraform(this._natip6),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      natip6: {
        value: cdktf.stringToHclTerraform(this._natip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownergroup: {
        value: cdktf.stringToHclTerraform(this._ownergroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
