// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsconfigUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update#id NsconfigUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update#ifnum NsconfigUpdate#ifnum}
  */
  readonly ifnum?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update#ipaddress NsconfigUpdate#ipaddress}
  */
  readonly ipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update#netmask NsconfigUpdate#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update#nsvlan NsconfigUpdate#nsvlan}
  */
  readonly nsvlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update#tagged NsconfigUpdate#tagged}
  */
  readonly tagged?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update citrixadc_nsconfig_update}
*/
export class NsconfigUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsconfig_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsconfigUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsconfigUpdate to import
  * @param importFromId The id of the existing NsconfigUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsconfigUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsconfig_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsconfig_update citrixadc_nsconfig_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsconfigUpdateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsconfigUpdateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsconfig_update',
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
    this._ifnum = config.ifnum;
    this._ipaddress = config.ipaddress;
    this._netmask = config.netmask;
    this._nsvlan = config.nsvlan;
    this._tagged = config.tagged;
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

  // ifnum - computed: false, optional: true, required: false
  private _ifnum?: string[]; 
  public get ifnum() {
    return cdktf.Fn.tolist(this.getListAttribute('ifnum'));
  }
  public set ifnum(value: string[]) {
    this._ifnum = value;
  }
  public resetIfnum() {
    this._ifnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // nsvlan - computed: true, optional: true, required: false
  private _nsvlan?: number; 
  public get nsvlan() {
    return this.getNumberAttribute('nsvlan');
  }
  public set nsvlan(value: number) {
    this._nsvlan = value;
  }
  public resetNsvlan() {
    this._nsvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsvlanInput() {
    return this._nsvlan;
  }

  // tagged - computed: true, optional: true, required: false
  private _tagged?: string; 
  public get tagged() {
    return this.getStringAttribute('tagged');
  }
  public set tagged(value: string) {
    this._tagged = value;
  }
  public resetTagged() {
    this._tagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedInput() {
    return this._tagged;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ifnum),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      netmask: cdktf.stringToTerraform(this._netmask),
      nsvlan: cdktf.numberToTerraform(this._nsvlan),
      tagged: cdktf.stringToTerraform(this._tagged),
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
        type: "set",
        storageClassType: "stringList",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsvlan: {
        value: cdktf.numberToHclTerraform(this._nsvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tagged: {
        value: cdktf.stringToHclTerraform(this._tagged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
