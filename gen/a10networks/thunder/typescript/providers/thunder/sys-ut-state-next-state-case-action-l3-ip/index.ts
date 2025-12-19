// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysUtStateNextStateCaseActionL3IpConfig extends cdktf.TerraformMetaArguments {
  /**
  * CaseNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#case_number SysUtStateNextStateCaseActionL3Ip#case_number}
  */
  readonly caseNumber: string;
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#direction SysUtStateNextStateCaseActionL3Ip#direction}
  */
  readonly direction: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#ethernet SysUtStateNextStateCaseActionL3Ip#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#id SysUtStateNextStateCaseActionL3Ip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#ipv4_address SysUtStateNextStateCaseActionL3Ip#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#ipv6_address SysUtStateNextStateCaseActionL3Ip#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#nat_pool SysUtStateNextStateCaseActionL3Ip#nat_pool}
  */
  readonly natPool?: string;
  /**
  * Next_state_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#next_state_name SysUtStateNextStateCaseActionL3Ip#next_state_name}
  */
  readonly nextStateName: string;
  /**
  * 'dest': dest; 'src': src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#src_dst SysUtStateNextStateCaseActionL3Ip#src_dst}
  */
  readonly srcDst: string;
  /**
  * State_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#state_name SysUtStateNextStateCaseActionL3Ip#state_name}
  */
  readonly stateName: string;
  /**
  * Trunk number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#trunk SysUtStateNextStateCaseActionL3Ip#trunk}
  */
  readonly trunk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#uuid SysUtStateNextStateCaseActionL3Ip#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#ve SysUtStateNextStateCaseActionL3Ip#ve}
  */
  readonly ve?: number;
  /**
  * vip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#virtual_server SysUtStateNextStateCaseActionL3Ip#virtual_server}
  */
  readonly virtualServer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip thunder_sys_ut_state_next_state_case_action_l3_ip}
*/
export class SysUtStateNextStateCaseActionL3Ip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_ut_state_next_state_case_action_l3_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysUtStateNextStateCaseActionL3Ip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysUtStateNextStateCaseActionL3Ip to import
  * @param importFromId The id of the existing SysUtStateNextStateCaseActionL3Ip that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysUtStateNextStateCaseActionL3Ip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_ut_state_next_state_case_action_l3_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sys_ut_state_next_state_case_action_l3_ip thunder_sys_ut_state_next_state_case_action_l3_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysUtStateNextStateCaseActionL3IpConfig
  */
  public constructor(scope: Construct, id: string, config: SysUtStateNextStateCaseActionL3IpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_ut_state_next_state_case_action_l3_ip',
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
    this._caseNumber = config.caseNumber;
    this._direction = config.direction;
    this._ethernet = config.ethernet;
    this._id = config.id;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._natPool = config.natPool;
    this._nextStateName = config.nextStateName;
    this._srcDst = config.srcDst;
    this._stateName = config.stateName;
    this._trunk = config.trunk;
    this._uuid = config.uuid;
    this._ve = config.ve;
    this._virtualServer = config.virtualServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // case_number - computed: false, optional: false, required: true
  private _caseNumber?: string; 
  public get caseNumber() {
    return this.getStringAttribute('case_number');
  }
  public set caseNumber(value: string) {
    this._caseNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseNumberInput() {
    return this._caseNumber;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // next_state_name - computed: false, optional: false, required: true
  private _nextStateName?: string; 
  public get nextStateName() {
    return this.getStringAttribute('next_state_name');
  }
  public set nextStateName(value: string) {
    this._nextStateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStateNameInput() {
    return this._nextStateName;
  }

  // src_dst - computed: false, optional: false, required: true
  private _srcDst?: string; 
  public get srcDst() {
    return this.getStringAttribute('src_dst');
  }
  public set srcDst(value: string) {
    this._srcDst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstInput() {
    return this._srcDst;
  }

  // state_name - computed: false, optional: false, required: true
  private _stateName?: string; 
  public get stateName() {
    return this.getStringAttribute('state_name');
  }
  public set stateName(value: string) {
    this._stateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNameInput() {
    return this._stateName;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
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

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: string; 
  public get virtualServer() {
    return this.getStringAttribute('virtual_server');
  }
  public set virtualServer(value: string) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      case_number: cdktf.stringToTerraform(this._caseNumber),
      direction: cdktf.stringToTerraform(this._direction),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      id: cdktf.stringToTerraform(this._id),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      nat_pool: cdktf.stringToTerraform(this._natPool),
      next_state_name: cdktf.stringToTerraform(this._nextStateName),
      src_dst: cdktf.stringToTerraform(this._srcDst),
      state_name: cdktf.stringToTerraform(this._stateName),
      trunk: cdktf.numberToTerraform(this._trunk),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve: cdktf.numberToTerraform(this._ve),
      virtual_server: cdktf.stringToTerraform(this._virtualServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      case_number: {
        value: cdktf.stringToHclTerraform(this._caseNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_pool: {
        value: cdktf.stringToHclTerraform(this._natPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_state_name: {
        value: cdktf.stringToHclTerraform(this._nextStateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_dst: {
        value: cdktf.stringToHclTerraform(this._srcDst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_name: {
        value: cdktf.stringToHclTerraform(this._stateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk: {
        value: cdktf.numberToHclTerraform(this._trunk),
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
      ve: {
        value: cdktf.numberToHclTerraform(this._ve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_server: {
        value: cdktf.stringToHclTerraform(this._virtualServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
