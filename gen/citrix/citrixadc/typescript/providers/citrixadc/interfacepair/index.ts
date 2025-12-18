// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/interfacepair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacepairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/interfacepair#id Interfacepair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/interfacepair#ifnum Interfacepair#ifnum}
  */
  readonly ifnum: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/interfacepair#interface_id Interfacepair#interface_id}
  */
  readonly interfaceId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/interfacepair citrixadc_interfacepair}
*/
export class Interfacepair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_interfacepair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Interfacepair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Interfacepair to import
  * @param importFromId The id of the existing Interfacepair that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/interfacepair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Interfacepair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_interfacepair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/interfacepair citrixadc_interfacepair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacepairConfig
  */
  public constructor(scope: Construct, id: string, config: InterfacepairConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_interfacepair',
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
    this._ifnum = config.ifnum;
    this._interfaceId = config.interfaceId;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string[]; 
  public get ifnum() {
    return this.getListAttribute('ifnum');
  }
  public set ifnum(value: string[]) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: number; 
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }
  public set interfaceId(value: number) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ifnum),
      interface_id: cdktf.numberToTerraform(this._interfaceId),
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
      ifnum: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ifnum),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interface_id: {
        value: cdktf.numberToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
