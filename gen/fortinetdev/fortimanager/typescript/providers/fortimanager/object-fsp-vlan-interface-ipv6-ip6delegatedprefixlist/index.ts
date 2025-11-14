// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanInterfaceIpv6Ip6DelegatedprefixlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#adom ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#autonomous_flag ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#delegated_prefix_iaid ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#delegated_prefix_iaid}
  */
  readonly delegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#id ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#onlink_flag ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#prefix_id ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#prefix_id}
  */
  readonly prefixId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#rdnss ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#rdnss_service ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#rdnss_service}
  */
  readonly rdnssService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#scopetype ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#subnet ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#upstream_interface ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#upstream_interface}
  */
  readonly upstreamInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#vlan ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist#vlan}
  */
  readonly vlan: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist fortimanager_object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist}
*/
export class ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist to import
  * @param importFromId The id of the existing ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlanInterfaceIpv6Ip6Delegatedprefixlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist fortimanager_object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanInterfaceIpv6Ip6DelegatedprefixlistConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanInterfaceIpv6Ip6DelegatedprefixlistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan_interface_ipv6_ip6delegatedprefixlist',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._autonomousFlag = config.autonomousFlag;
    this._delegatedPrefixIaid = config.delegatedPrefixIaid;
    this._id = config.id;
    this._onlinkFlag = config.onlinkFlag;
    this._prefixId = config.prefixId;
    this._rdnss = config.rdnss;
    this._rdnssService = config.rdnssService;
    this._scopetype = config.scopetype;
    this._subnet = config.subnet;
    this._upstreamInterface = config.upstreamInterface;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // delegated_prefix_iaid - computed: false, optional: true, required: false
  private _delegatedPrefixIaid?: number; 
  public get delegatedPrefixIaid() {
    return this.getNumberAttribute('delegated_prefix_iaid');
  }
  public set delegatedPrefixIaid(value: number) {
    this._delegatedPrefixIaid = value;
  }
  public resetDelegatedPrefixIaid() {
    this._delegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedPrefixIaidInput() {
    return this._delegatedPrefixIaid;
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

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // prefix_id - computed: false, optional: true, required: false
  private _prefixId?: number; 
  public get prefixId() {
    return this.getNumberAttribute('prefix_id');
  }
  public set prefixId(value: number) {
    this._prefixId = value;
  }
  public resetPrefixId() {
    this._prefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId;
  }

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // rdnss_service - computed: false, optional: true, required: false
  private _rdnssService?: string; 
  public get rdnssService() {
    return this.getStringAttribute('rdnss_service');
  }
  public set rdnssService(value: string) {
    this._rdnssService = value;
  }
  public resetRdnssService() {
    this._rdnssService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssServiceInput() {
    return this._rdnssService;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // upstream_interface - computed: false, optional: true, required: false
  private _upstreamInterface?: string; 
  public get upstreamInterface() {
    return this.getStringAttribute('upstream_interface');
  }
  public set upstreamInterface(value: string) {
    this._upstreamInterface = value;
  }
  public resetUpstreamInterface() {
    this._upstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInterfaceInput() {
    return this._upstreamInterface;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      autonomous_flag: cdktf.stringToTerraform(this._autonomousFlag),
      delegated_prefix_iaid: cdktf.numberToTerraform(this._delegatedPrefixIaid),
      id: cdktf.stringToTerraform(this._id),
      onlink_flag: cdktf.stringToTerraform(this._onlinkFlag),
      prefix_id: cdktf.numberToTerraform(this._prefixId),
      rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rdnss),
      rdnss_service: cdktf.stringToTerraform(this._rdnssService),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      subnet: cdktf.stringToTerraform(this._subnet),
      upstream_interface: cdktf.stringToTerraform(this._upstreamInterface),
      vlan: cdktf.stringToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_flag: {
        value: cdktf.stringToHclTerraform(this._autonomousFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_prefix_iaid: {
        value: cdktf.numberToHclTerraform(this._delegatedPrefixIaid),
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
      onlink_flag: {
        value: cdktf.stringToHclTerraform(this._onlinkFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_id: {
        value: cdktf.numberToHclTerraform(this._prefixId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rdnss: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rdnss),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rdnss_service: {
        value: cdktf.stringToHclTerraform(this._rdnssService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_interface: {
        value: cdktf.stringToHclTerraform(this._upstreamInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
