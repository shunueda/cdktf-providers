// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpNatPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Share NAT pool chunk across CPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#chunk_sharing IpNatPool#chunk_sharing}
  */
  readonly chunkSharing?: number;
  /**
  * Configure end IP address of NAT pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#end_address IpNatPool#end_address}
  */
  readonly endAddress?: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#ethernet IpNatPool#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Configure gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#gateway IpNatPool#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#id IpNatPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use IP address round-robin behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#ip_rr IpNatPool#ip_rr}
  */
  readonly ipRr?: number;
  /**
  * Configure mask for pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#netmask IpNatPool#netmask}
  */
  readonly netmask?: string;
  /**
  * Specify pool name or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#pool_name IpNatPool#pool_name}
  */
  readonly poolName: string;
  /**
  * Nat Pool Port overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#port_overload IpNatPool#port_overload}
  */
  readonly portOverload?: number;
  /**
  * Configure Scaleout device id to which this NAT pool is to be bound (Specify Scaleout device id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#scaleout_device_id IpNatPool#scaleout_device_id}
  */
  readonly scaleoutDeviceId?: number;
  /**
  * Configure start IP address of NAT pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#start_address IpNatPool#start_address}
  */
  readonly startAddress?: string;
  /**
  * Use Interface IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#use_if_ip IpNatPool#use_if_ip}
  */
  readonly useIfIp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#uuid IpNatPool#uuid}
  */
  readonly uuid?: string;
  /**
  * Configure VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#vrid IpNatPool#vrid}
  */
  readonly vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool thunder_ip_nat_pool}
*/
export class IpNatPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_nat_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpNatPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpNatPool to import
  * @param importFromId The id of the existing IpNatPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpNatPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_nat_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_pool thunder_ip_nat_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpNatPoolConfig
  */
  public constructor(scope: Construct, id: string, config: IpNatPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_nat_pool',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chunkSharing = config.chunkSharing;
    this._endAddress = config.endAddress;
    this._ethernet = config.ethernet;
    this._gateway = config.gateway;
    this._id = config.id;
    this._ipRr = config.ipRr;
    this._netmask = config.netmask;
    this._poolName = config.poolName;
    this._portOverload = config.portOverload;
    this._scaleoutDeviceId = config.scaleoutDeviceId;
    this._startAddress = config.startAddress;
    this._useIfIp = config.useIfIp;
    this._uuid = config.uuid;
    this._vrid = config.vrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chunk_sharing - computed: false, optional: true, required: false
  private _chunkSharing?: number; 
  public get chunkSharing() {
    return this.getNumberAttribute('chunk_sharing');
  }
  public set chunkSharing(value: number) {
    this._chunkSharing = value;
  }
  public resetChunkSharing() {
    this._chunkSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSharingInput() {
    return this._chunkSharing;
  }

  // end_address - computed: false, optional: true, required: false
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  public resetEndAddress() {
    this._endAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip_rr - computed: false, optional: true, required: false
  private _ipRr?: number; 
  public get ipRr() {
    return this.getNumberAttribute('ip_rr');
  }
  public set ipRr(value: number) {
    this._ipRr = value;
  }
  public resetIpRr() {
    this._ipRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRrInput() {
    return this._ipRr;
  }

  // netmask - computed: false, optional: true, required: false
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // port_overload - computed: false, optional: true, required: false
  private _portOverload?: number; 
  public get portOverload() {
    return this.getNumberAttribute('port_overload');
  }
  public set portOverload(value: number) {
    this._portOverload = value;
  }
  public resetPortOverload() {
    this._portOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadInput() {
    return this._portOverload;
  }

  // scaleout_device_id - computed: false, optional: true, required: false
  private _scaleoutDeviceId?: number; 
  public get scaleoutDeviceId() {
    return this.getNumberAttribute('scaleout_device_id');
  }
  public set scaleoutDeviceId(value: number) {
    this._scaleoutDeviceId = value;
  }
  public resetScaleoutDeviceId() {
    this._scaleoutDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutDeviceIdInput() {
    return this._scaleoutDeviceId;
  }

  // start_address - computed: false, optional: true, required: false
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  public resetStartAddress() {
    this._startAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }

  // use_if_ip - computed: false, optional: true, required: false
  private _useIfIp?: number; 
  public get useIfIp() {
    return this.getNumberAttribute('use_if_ip');
  }
  public set useIfIp(value: number) {
    this._useIfIp = value;
  }
  public resetUseIfIp() {
    this._useIfIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIfIpInput() {
    return this._useIfIp;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chunk_sharing: cdktf.numberToTerraform(this._chunkSharing),
      end_address: cdktf.stringToTerraform(this._endAddress),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      ip_rr: cdktf.numberToTerraform(this._ipRr),
      netmask: cdktf.stringToTerraform(this._netmask),
      pool_name: cdktf.stringToTerraform(this._poolName),
      port_overload: cdktf.numberToTerraform(this._portOverload),
      scaleout_device_id: cdktf.numberToTerraform(this._scaleoutDeviceId),
      start_address: cdktf.stringToTerraform(this._startAddress),
      use_if_ip: cdktf.numberToTerraform(this._useIfIp),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chunk_sharing: {
        value: cdktf.numberToHclTerraform(this._chunkSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_address: {
        value: cdktf.stringToHclTerraform(this._endAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      ip_rr: {
        value: cdktf.numberToHclTerraform(this._ipRr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_overload: {
        value: cdktf.numberToHclTerraform(this._portOverload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaleout_device_id: {
        value: cdktf.numberToHclTerraform(this._scaleoutDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_address: {
        value: cdktf.stringToHclTerraform(this._startAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_if_ip: {
        value: cdktf.numberToHclTerraform(this._useIfIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
