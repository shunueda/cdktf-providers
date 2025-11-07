// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset#id Ipset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset#name Ipset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset#nsip6binding Ipset#nsip6binding}
  */
  readonly nsip6Binding?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset#nsipbinding Ipset#nsipbinding}
  */
  readonly nsipbinding?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset#td Ipset#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset citrixadc_ipset}
*/
export class Ipset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ipset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipset to import
  * @param importFromId The id of the existing Ipset that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ipset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/ipset citrixadc_ipset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsetConfig
  */
  public constructor(scope: Construct, id: string, config: IpsetConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ipset',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._nsip6Binding = config.nsip6Binding;
    this._nsipbinding = config.nsipbinding;
    this._td = config.td;
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

  // nsip6binding - computed: true, optional: true, required: false
  private _nsip6Binding?: string[]; 
  public get nsip6Binding() {
    return cdktf.Fn.tolist(this.getListAttribute('nsip6binding'));
  }
  public set nsip6Binding(value: string[]) {
    this._nsip6Binding = value;
  }
  public resetNsip6Binding() {
    this._nsip6Binding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsip6BindingInput() {
    return this._nsip6Binding;
  }

  // nsipbinding - computed: true, optional: true, required: false
  private _nsipbinding?: string[]; 
  public get nsipbinding() {
    return cdktf.Fn.tolist(this.getListAttribute('nsipbinding'));
  }
  public set nsipbinding(value: string[]) {
    this._nsipbinding = value;
  }
  public resetNsipbinding() {
    this._nsipbinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsipbindingInput() {
    return this._nsipbinding;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nsip6binding: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsip6Binding),
      nsipbinding: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsipbinding),
      td: cdktf.numberToTerraform(this._td),
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
      nsip6binding: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsip6Binding),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nsipbinding: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsipbinding),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
