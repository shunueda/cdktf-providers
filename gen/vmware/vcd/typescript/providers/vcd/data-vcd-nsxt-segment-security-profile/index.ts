// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtSegmentSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates pre-defined list of allowed MAC addresses to be excluded from BPDU filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile#bpdu_filter_allow_list DataVcdNsxtSegmentSecurityProfile#bpdu_filter_allow_list}
  */
  readonly bpduFilterAllowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile#id DataVcdNsxtSegmentSecurityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of Segment Security Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile#name DataVcdNsxtSegmentSecurityProfile#name}
  */
  readonly name: string;
  /**
  * ID of NSX-T Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile#nsxt_manager_id DataVcdNsxtSegmentSecurityProfile#nsxt_manager_id}
  */
  readonly nsxtManagerId?: string;
  /**
  * ID of VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile#vdc_group_id DataVcdNsxtSegmentSecurityProfile#vdc_group_id}
  */
  readonly vdcGroupId?: string;
  /**
  * ID of VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile#vdc_id DataVcdNsxtSegmentSecurityProfile#vdc_id}
  */
  readonly vdcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile vcd_nsxt_segment_security_profile}
*/
export class DataVcdNsxtSegmentSecurityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_segment_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtSegmentSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtSegmentSecurityProfile to import
  * @param importFromId The id of the existing DataVcdNsxtSegmentSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtSegmentSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_segment_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_segment_security_profile vcd_nsxt_segment_security_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtSegmentSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtSegmentSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_segment_security_profile',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bpduFilterAllowList = config.bpduFilterAllowList;
    this._id = config.id;
    this._name = config.name;
    this._nsxtManagerId = config.nsxtManagerId;
    this._vdcGroupId = config.vdcGroupId;
    this._vdcId = config.vdcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bpdu_filter_allow_list - computed: false, optional: true, required: false
  private _bpduFilterAllowList?: string[]; 
  public get bpduFilterAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('bpdu_filter_allow_list'));
  }
  public set bpduFilterAllowList(value: string[]) {
    this._bpduFilterAllowList = value;
  }
  public resetBpduFilterAllowList() {
    this._bpduFilterAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduFilterAllowListInput() {
    return this._bpduFilterAllowList;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_bpdu_filter_enabled - computed: true, optional: false, required: false
  public get isBpduFilterEnabled() {
    return this.getBooleanAttribute('is_bpdu_filter_enabled');
  }

  // is_dhcp_v4_client_block_enabled - computed: true, optional: false, required: false
  public get isDhcpV4ClientBlockEnabled() {
    return this.getBooleanAttribute('is_dhcp_v4_client_block_enabled');
  }

  // is_dhcp_v4_server_block_enabled - computed: true, optional: false, required: false
  public get isDhcpV4ServerBlockEnabled() {
    return this.getBooleanAttribute('is_dhcp_v4_server_block_enabled');
  }

  // is_dhcp_v6_client_block_enabled - computed: true, optional: false, required: false
  public get isDhcpV6ClientBlockEnabled() {
    return this.getBooleanAttribute('is_dhcp_v6_client_block_enabled');
  }

  // is_dhcp_v6_server_block_enabled - computed: true, optional: false, required: false
  public get isDhcpV6ServerBlockEnabled() {
    return this.getBooleanAttribute('is_dhcp_v6_server_block_enabled');
  }

  // is_non_ip_traffic_block_enabled - computed: true, optional: false, required: false
  public get isNonIpTrafficBlockEnabled() {
    return this.getBooleanAttribute('is_non_ip_traffic_block_enabled');
  }

  // is_ra_guard_enabled - computed: true, optional: false, required: false
  public get isRaGuardEnabled() {
    return this.getBooleanAttribute('is_ra_guard_enabled');
  }

  // is_rate_limitting_enabled - computed: true, optional: false, required: false
  public get isRateLimittingEnabled() {
    return this.getBooleanAttribute('is_rate_limitting_enabled');
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

  // nsxt_manager_id - computed: false, optional: true, required: false
  private _nsxtManagerId?: string; 
  public get nsxtManagerId() {
    return this.getStringAttribute('nsxt_manager_id');
  }
  public set nsxtManagerId(value: string) {
    this._nsxtManagerId = value;
  }
  public resetNsxtManagerId() {
    this._nsxtManagerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtManagerIdInput() {
    return this._nsxtManagerId;
  }

  // rx_broadcast_limit - computed: true, optional: false, required: false
  public get rxBroadcastLimit() {
    return this.getNumberAttribute('rx_broadcast_limit');
  }

  // rx_multicast_limit - computed: true, optional: false, required: false
  public get rxMulticastLimit() {
    return this.getNumberAttribute('rx_multicast_limit');
  }

  // tx_broadcast_limit - computed: true, optional: false, required: false
  public get txBroadcastLimit() {
    return this.getNumberAttribute('tx_broadcast_limit');
  }

  // tx_multicast_limit - computed: true, optional: false, required: false
  public get txMulticastLimit() {
    return this.getNumberAttribute('tx_multicast_limit');
  }

  // vdc_group_id - computed: false, optional: true, required: false
  private _vdcGroupId?: string; 
  public get vdcGroupId() {
    return this.getStringAttribute('vdc_group_id');
  }
  public set vdcGroupId(value: string) {
    this._vdcGroupId = value;
  }
  public resetVdcGroupId() {
    this._vdcGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcGroupIdInput() {
    return this._vdcGroupId;
  }

  // vdc_id - computed: false, optional: true, required: false
  private _vdcId?: string; 
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }
  public set vdcId(value: string) {
    this._vdcId = value;
  }
  public resetVdcId() {
    this._vdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcIdInput() {
    return this._vdcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bpdu_filter_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bpduFilterAllowList),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nsxt_manager_id: cdktf.stringToTerraform(this._nsxtManagerId),
      vdc_group_id: cdktf.stringToTerraform(this._vdcGroupId),
      vdc_id: cdktf.stringToTerraform(this._vdcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bpdu_filter_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bpduFilterAllowList),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsxt_manager_id: {
        value: cdktf.stringToHclTerraform(this._nsxtManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_group_id: {
        value: cdktf.stringToHclTerraform(this._vdcGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc_id: {
        value: cdktf.stringToHclTerraform(this._vdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
