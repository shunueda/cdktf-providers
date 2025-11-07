// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysSnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of SNMP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp#allowedaddresses SysSnmp#allowedaddresses}
  */
  readonly allowedaddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp#id SysSnmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Contact Person email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp#sys_contact SysSnmp#sys_contact}
  */
  readonly sysContact?: string;
  /**
  * Location of the F5 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp#sys_location SysSnmp#sys_location}
  */
  readonly sysLocation?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp bigip_sys_snmp}
*/
export class SysSnmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_sys_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysSnmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysSnmp to import
  * @param importFromId The id of the existing SysSnmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysSnmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_sys_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/sys_snmp bigip_sys_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysSnmpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SysSnmpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bigip_sys_snmp',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedaddresses = config.allowedaddresses;
    this._id = config.id;
    this._sysContact = config.sysContact;
    this._sysLocation = config.sysLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowedaddresses - computed: false, optional: true, required: false
  private _allowedaddresses?: string[]; 
  public get allowedaddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('allowedaddresses'));
  }
  public set allowedaddresses(value: string[]) {
    this._allowedaddresses = value;
  }
  public resetAllowedaddresses() {
    this._allowedaddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedaddressesInput() {
    return this._allowedaddresses;
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

  // sys_contact - computed: false, optional: true, required: false
  private _sysContact?: string; 
  public get sysContact() {
    return this.getStringAttribute('sys_contact');
  }
  public set sysContact(value: string) {
    this._sysContact = value;
  }
  public resetSysContact() {
    this._sysContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysContactInput() {
    return this._sysContact;
  }

  // sys_location - computed: false, optional: true, required: false
  private _sysLocation?: string; 
  public get sysLocation() {
    return this.getStringAttribute('sys_location');
  }
  public set sysLocation(value: string) {
    this._sysLocation = value;
  }
  public resetSysLocation() {
    this._sysLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysLocationInput() {
    return this._sysLocation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowedaddresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedaddresses),
      id: cdktf.stringToTerraform(this._id),
      sys_contact: cdktf.stringToTerraform(this._sysContact),
      sys_location: cdktf.stringToTerraform(this._sysLocation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowedaddresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedaddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sys_contact: {
        value: cdktf.stringToHclTerraform(this._sysContact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sys_location: {
        value: cdktf.stringToHclTerraform(this._sysLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
