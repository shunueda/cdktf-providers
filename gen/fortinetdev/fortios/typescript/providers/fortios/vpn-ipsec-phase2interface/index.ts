// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecPhase2InterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#comments VpnIpsecPhase2Interface#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#dst_addr_type VpnIpsecPhase2Interface#dst_addr_type}
  */
  readonly dstAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#dst_end_ip VpnIpsecPhase2Interface#dst_end_ip}
  */
  readonly dstEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#dst_name VpnIpsecPhase2Interface#dst_name}
  */
  readonly dstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#dst_start_ip VpnIpsecPhase2Interface#dst_start_ip}
  */
  readonly dstStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#dst_subnet VpnIpsecPhase2Interface#dst_subnet}
  */
  readonly dstSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#id VpnIpsecPhase2Interface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#name VpnIpsecPhase2Interface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#phase1name VpnIpsecPhase2Interface#phase1name}
  */
  readonly phase1Name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#proposal VpnIpsecPhase2Interface#proposal}
  */
  readonly proposal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#src_addr_type VpnIpsecPhase2Interface#src_addr_type}
  */
  readonly srcAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#src_end_ip VpnIpsecPhase2Interface#src_end_ip}
  */
  readonly srcEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#src_name VpnIpsecPhase2Interface#src_name}
  */
  readonly srcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#src_start_ip VpnIpsecPhase2Interface#src_start_ip}
  */
  readonly srcStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#src_subnet VpnIpsecPhase2Interface#src_subnet}
  */
  readonly srcSubnet?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface fortios_vpn_ipsec_phase2interface}
*/
export class VpnIpsecPhase2Interface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpn_ipsec_phase2interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsecPhase2Interface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsecPhase2Interface to import
  * @param importFromId The id of the existing VpnIpsecPhase2Interface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsecPhase2Interface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpn_ipsec_phase2interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase2interface fortios_vpn_ipsec_phase2interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecPhase2InterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecPhase2InterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpn_ipsec_phase2interface',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._dstAddrType = config.dstAddrType;
    this._dstEndIp = config.dstEndIp;
    this._dstName = config.dstName;
    this._dstStartIp = config.dstStartIp;
    this._dstSubnet = config.dstSubnet;
    this._id = config.id;
    this._name = config.name;
    this._phase1Name = config.phase1Name;
    this._proposal = config.proposal;
    this._srcAddrType = config.srcAddrType;
    this._srcEndIp = config.srcEndIp;
    this._srcName = config.srcName;
    this._srcStartIp = config.srcStartIp;
    this._srcSubnet = config.srcSubnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dst_addr_type - computed: true, optional: true, required: false
  private _dstAddrType?: string; 
  public get dstAddrType() {
    return this.getStringAttribute('dst_addr_type');
  }
  public set dstAddrType(value: string) {
    this._dstAddrType = value;
  }
  public resetDstAddrType() {
    this._dstAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrTypeInput() {
    return this._dstAddrType;
  }

  // dst_end_ip - computed: true, optional: true, required: false
  private _dstEndIp?: string; 
  public get dstEndIp() {
    return this.getStringAttribute('dst_end_ip');
  }
  public set dstEndIp(value: string) {
    this._dstEndIp = value;
  }
  public resetDstEndIp() {
    this._dstEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEndIpInput() {
    return this._dstEndIp;
  }

  // dst_name - computed: true, optional: true, required: false
  private _dstName?: string; 
  public get dstName() {
    return this.getStringAttribute('dst_name');
  }
  public set dstName(value: string) {
    this._dstName = value;
  }
  public resetDstName() {
    this._dstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNameInput() {
    return this._dstName;
  }

  // dst_start_ip - computed: true, optional: true, required: false
  private _dstStartIp?: string; 
  public get dstStartIp() {
    return this.getStringAttribute('dst_start_ip');
  }
  public set dstStartIp(value: string) {
    this._dstStartIp = value;
  }
  public resetDstStartIp() {
    this._dstStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstStartIpInput() {
    return this._dstStartIp;
  }

  // dst_subnet - computed: true, optional: true, required: false
  private _dstSubnet?: string; 
  public get dstSubnet() {
    return this.getStringAttribute('dst_subnet');
  }
  public set dstSubnet(value: string) {
    this._dstSubnet = value;
  }
  public resetDstSubnet() {
    this._dstSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSubnetInput() {
    return this._dstSubnet;
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

  // phase1name - computed: false, optional: false, required: true
  private _phase1Name?: string; 
  public get phase1Name() {
    return this.getStringAttribute('phase1name');
  }
  public set phase1Name(value: string) {
    this._phase1Name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1NameInput() {
    return this._phase1Name;
  }

  // proposal - computed: true, optional: true, required: false
  private _proposal?: string; 
  public get proposal() {
    return this.getStringAttribute('proposal');
  }
  public set proposal(value: string) {
    this._proposal = value;
  }
  public resetProposal() {
    this._proposal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalInput() {
    return this._proposal;
  }

  // src_addr_type - computed: true, optional: true, required: false
  private _srcAddrType?: string; 
  public get srcAddrType() {
    return this.getStringAttribute('src_addr_type');
  }
  public set srcAddrType(value: string) {
    this._srcAddrType = value;
  }
  public resetSrcAddrType() {
    this._srcAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTypeInput() {
    return this._srcAddrType;
  }

  // src_end_ip - computed: true, optional: true, required: false
  private _srcEndIp?: string; 
  public get srcEndIp() {
    return this.getStringAttribute('src_end_ip');
  }
  public set srcEndIp(value: string) {
    this._srcEndIp = value;
  }
  public resetSrcEndIp() {
    this._srcEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEndIpInput() {
    return this._srcEndIp;
  }

  // src_name - computed: true, optional: true, required: false
  private _srcName?: string; 
  public get srcName() {
    return this.getStringAttribute('src_name');
  }
  public set srcName(value: string) {
    this._srcName = value;
  }
  public resetSrcName() {
    this._srcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNameInput() {
    return this._srcName;
  }

  // src_start_ip - computed: true, optional: true, required: false
  private _srcStartIp?: string; 
  public get srcStartIp() {
    return this.getStringAttribute('src_start_ip');
  }
  public set srcStartIp(value: string) {
    this._srcStartIp = value;
  }
  public resetSrcStartIp() {
    this._srcStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcStartIpInput() {
    return this._srcStartIp;
  }

  // src_subnet - computed: true, optional: true, required: false
  private _srcSubnet?: string; 
  public get srcSubnet() {
    return this.getStringAttribute('src_subnet');
  }
  public set srcSubnet(value: string) {
    this._srcSubnet = value;
  }
  public resetSrcSubnet() {
    this._srcSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSubnetInput() {
    return this._srcSubnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      dst_addr_type: cdktf.stringToTerraform(this._dstAddrType),
      dst_end_ip: cdktf.stringToTerraform(this._dstEndIp),
      dst_name: cdktf.stringToTerraform(this._dstName),
      dst_start_ip: cdktf.stringToTerraform(this._dstStartIp),
      dst_subnet: cdktf.stringToTerraform(this._dstSubnet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      phase1name: cdktf.stringToTerraform(this._phase1Name),
      proposal: cdktf.stringToTerraform(this._proposal),
      src_addr_type: cdktf.stringToTerraform(this._srcAddrType),
      src_end_ip: cdktf.stringToTerraform(this._srcEndIp),
      src_name: cdktf.stringToTerraform(this._srcName),
      src_start_ip: cdktf.stringToTerraform(this._srcStartIp),
      src_subnet: cdktf.stringToTerraform(this._srcSubnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_addr_type: {
        value: cdktf.stringToHclTerraform(this._dstAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_end_ip: {
        value: cdktf.stringToHclTerraform(this._dstEndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_name: {
        value: cdktf.stringToHclTerraform(this._dstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_start_ip: {
        value: cdktf.stringToHclTerraform(this._dstStartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_subnet: {
        value: cdktf.stringToHclTerraform(this._dstSubnet),
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
      phase1name: {
        value: cdktf.stringToHclTerraform(this._phase1Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposal: {
        value: cdktf.stringToHclTerraform(this._proposal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_addr_type: {
        value: cdktf.stringToHclTerraform(this._srcAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_end_ip: {
        value: cdktf.stringToHclTerraform(this._srcEndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_name: {
        value: cdktf.stringToHclTerraform(this._srcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_start_ip: {
        value: cdktf.stringToHclTerraform(this._srcStartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_subnet: {
        value: cdktf.stringToHclTerraform(this._srcSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
