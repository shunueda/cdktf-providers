// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Rnat6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#acl6name Rnat6#acl6name}
  */
  readonly acl6Name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#id Rnat6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#name Rnat6#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#network Rnat6#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#ownergroup Rnat6#ownergroup}
  */
  readonly ownergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#redirectport Rnat6#redirectport}
  */
  readonly redirectport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#srcippersistency Rnat6#srcippersistency}
  */
  readonly srcippersistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#td Rnat6#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6 citrixadc_rnat6}
*/
export class Rnat6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rnat6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rnat6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rnat6 to import
  * @param importFromId The id of the existing Rnat6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rnat6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rnat6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnat6 citrixadc_rnat6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Rnat6Config
  */
  public constructor(scope: Construct, id: string, config: Rnat6Config) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rnat6',
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
    this._network = config.network;
    this._ownergroup = config.ownergroup;
    this._redirectport = config.redirectport;
    this._srcippersistency = config.srcippersistency;
    this._td = config.td;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl6name - computed: true, optional: true, required: false
  private _acl6Name?: string; 
  public get acl6Name() {
    return this.getStringAttribute('acl6name');
  }
  public set acl6Name(value: string) {
    this._acl6Name = value;
  }
  public resetAcl6Name() {
    this._acl6Name = undefined;
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // redirectport - computed: true, optional: true, required: false
  private _redirectport?: number; 
  public get redirectport() {
    return this.getNumberAttribute('redirectport');
  }
  public set redirectport(value: number) {
    this._redirectport = value;
  }
  public resetRedirectport() {
    this._redirectport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectportInput() {
    return this._redirectport;
  }

  // srcippersistency - computed: true, optional: true, required: false
  private _srcippersistency?: string; 
  public get srcippersistency() {
    return this.getStringAttribute('srcippersistency');
  }
  public set srcippersistency(value: string) {
    this._srcippersistency = value;
  }
  public resetSrcippersistency() {
    this._srcippersistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcippersistencyInput() {
    return this._srcippersistency;
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
      acl6name: cdktf.stringToTerraform(this._acl6Name),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
      redirectport: cdktf.numberToTerraform(this._redirectport),
      srcippersistency: cdktf.stringToTerraform(this._srcippersistency),
      td: cdktf.numberToTerraform(this._td),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
      redirectport: {
        value: cdktf.numberToHclTerraform(this._redirectport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srcippersistency: {
        value: cdktf.stringToHclTerraform(this._srcippersistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
