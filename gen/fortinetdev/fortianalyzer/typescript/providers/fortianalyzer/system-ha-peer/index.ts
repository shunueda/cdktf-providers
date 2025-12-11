// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHaPeerAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#addr SystemHaPeerA#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#addr_hb SystemHaPeerA#addr_hb}
  */
  readonly addrHb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#fosid SystemHaPeerA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#id SystemHaPeerA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#ip SystemHaPeerA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#ip_hb SystemHaPeerA#ip_hb}
  */
  readonly ipHb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#serial_number SystemHaPeerA#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#status SystemHaPeerA#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer fortianalyzer_system_ha_peer}
*/
export class SystemHaPeerA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_ha_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHaPeerA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHaPeerA to import
  * @param importFromId The id of the existing SystemHaPeerA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHaPeerA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_ha_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_ha_peer fortianalyzer_system_ha_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHaPeerAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemHaPeerAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_ha_peer',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addr = config.addr;
    this._addrHb = config.addrHb;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ip = config.ip;
    this._ipHb = config.ipHb;
    this._serialNumber = config.serialNumber;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // addr_hb - computed: false, optional: true, required: false
  private _addrHb?: string; 
  public get addrHb() {
    return this.getStringAttribute('addr_hb');
  }
  public set addrHb(value: string) {
    this._addrHb = value;
  }
  public resetAddrHb() {
    this._addrHb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrHbInput() {
    return this._addrHb;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_hb - computed: false, optional: true, required: false
  private _ipHb?: string; 
  public get ipHb() {
    return this.getStringAttribute('ip_hb');
  }
  public set ipHb(value: string) {
    this._ipHb = value;
  }
  public resetIpHb() {
    this._ipHb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHbInput() {
    return this._ipHb;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      addr_hb: cdktf.stringToTerraform(this._addrHb),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip_hb: cdktf.stringToTerraform(this._ipHb),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addr_hb: {
        value: cdktf.stringToHclTerraform(this._addrHb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      ip_hb: {
        value: cdktf.stringToHclTerraform(this._ipHb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
