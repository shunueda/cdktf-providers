// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mgmt_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemMgmtPortAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mgmt_port#id SystemMgmtPortA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mac-address to be configured as mgmt port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mgmt_port#mac_address SystemMgmtPortA#mac_address}
  */
  readonly macAddress?: string;
  /**
  * pci-address to be configured as mgmt port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mgmt_port#pci_address SystemMgmtPortA#pci_address}
  */
  readonly pciAddress?: string;
  /**
  * port index to be configured (Specify port index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mgmt_port#port_index SystemMgmtPortA#port_index}
  */
  readonly portIndex?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mgmt_port thunder_system_mgmt_port}
*/
export class SystemMgmtPortA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_mgmt_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemMgmtPortA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemMgmtPortA to import
  * @param importFromId The id of the existing SystemMgmtPortA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mgmt_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemMgmtPortA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_mgmt_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mgmt_port thunder_system_mgmt_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemMgmtPortAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemMgmtPortAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_mgmt_port',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._macAddress = config.macAddress;
    this._pciAddress = config.pciAddress;
    this._portIndex = config.portIndex;
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

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // pci_address - computed: false, optional: true, required: false
  private _pciAddress?: string; 
  public get pciAddress() {
    return this.getStringAttribute('pci_address');
  }
  public set pciAddress(value: string) {
    this._pciAddress = value;
  }
  public resetPciAddress() {
    this._pciAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pciAddressInput() {
    return this._pciAddress;
  }

  // port_index - computed: false, optional: true, required: false
  private _portIndex?: number; 
  public get portIndex() {
    return this.getNumberAttribute('port_index');
  }
  public set portIndex(value: number) {
    this._portIndex = value;
  }
  public resetPortIndex() {
    this._portIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndexInput() {
    return this._portIndex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      pci_address: cdktf.stringToTerraform(this._pciAddress),
      port_index: cdktf.numberToTerraform(this._portIndex),
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
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pci_address: {
        value: cdktf.stringToHclTerraform(this._pciAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_index: {
        value: cdktf.numberToHclTerraform(this._portIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
