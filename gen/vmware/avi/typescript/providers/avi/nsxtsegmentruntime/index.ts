// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtsegmentruntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#cloud_ref Nsxtsegmentruntime#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#dhcp6_ranges Nsxtsegmentruntime#dhcp6_ranges}
  */
  readonly dhcp6Ranges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#dhcp_enabled Nsxtsegmentruntime#dhcp_enabled}
  */
  readonly dhcpEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#dhcp_ranges Nsxtsegmentruntime#dhcp_ranges}
  */
  readonly dhcpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#id Nsxtsegmentruntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#name Nsxtsegmentruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#nw_name Nsxtsegmentruntime#nw_name}
  */
  readonly nwName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#nw_ref Nsxtsegmentruntime#nw_ref}
  */
  readonly nwRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#opaque_network_id Nsxtsegmentruntime#opaque_network_id}
  */
  readonly opaqueNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#origin_id Nsxtsegmentruntime#origin_id}
  */
  readonly originId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#security_only_nsxt Nsxtsegmentruntime#security_only_nsxt}
  */
  readonly securityOnlyNsxt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#segment_gw Nsxtsegmentruntime#segment_gw}
  */
  readonly segmentGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#segment_gw6 Nsxtsegmentruntime#segment_gw6}
  */
  readonly segmentGw6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#segment_id Nsxtsegmentruntime#segment_id}
  */
  readonly segmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#segname Nsxtsegmentruntime#segname}
  */
  readonly segname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#subnet Nsxtsegmentruntime#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#subnet6 Nsxtsegmentruntime#subnet6}
  */
  readonly subnet6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#tenant_ref Nsxtsegmentruntime#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#tier1_id Nsxtsegmentruntime#tier1_id}
  */
  readonly tier1Id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#uuid Nsxtsegmentruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#vlan_ids Nsxtsegmentruntime#vlan_ids}
  */
  readonly vlanIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#vrf_context_ref Nsxtsegmentruntime#vrf_context_ref}
  */
  readonly vrfContextRef?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime avi_nsxtsegmentruntime}
*/
export class Nsxtsegmentruntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_nsxtsegmentruntime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsxtsegmentruntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsxtsegmentruntime to import
  * @param importFromId The id of the existing Nsxtsegmentruntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsxtsegmentruntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_nsxtsegmentruntime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/nsxtsegmentruntime avi_nsxtsegmentruntime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtsegmentruntimeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsxtsegmentruntimeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_nsxtsegmentruntime',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudRef = config.cloudRef;
    this._dhcp6Ranges = config.dhcp6Ranges;
    this._dhcpEnabled = config.dhcpEnabled;
    this._dhcpRanges = config.dhcpRanges;
    this._id = config.id;
    this._name = config.name;
    this._nwName = config.nwName;
    this._nwRef = config.nwRef;
    this._opaqueNetworkId = config.opaqueNetworkId;
    this._originId = config.originId;
    this._securityOnlyNsxt = config.securityOnlyNsxt;
    this._segmentGw = config.segmentGw;
    this._segmentGw6 = config.segmentGw6;
    this._segmentId = config.segmentId;
    this._segname = config.segname;
    this._subnet = config.subnet;
    this._subnet6 = config.subnet6;
    this._tenantRef = config.tenantRef;
    this._tier1Id = config.tier1Id;
    this._uuid = config.uuid;
    this._vlanIds = config.vlanIds;
    this._vrfContextRef = config.vrfContextRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // dhcp6_ranges - computed: false, optional: true, required: false
  private _dhcp6Ranges?: string[]; 
  public get dhcp6Ranges() {
    return this.getListAttribute('dhcp6_ranges');
  }
  public set dhcp6Ranges(value: string[]) {
    this._dhcp6Ranges = value;
  }
  public resetDhcp6Ranges() {
    this._dhcp6Ranges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RangesInput() {
    return this._dhcp6Ranges;
  }

  // dhcp_enabled - computed: false, optional: true, required: false
  private _dhcpEnabled?: string; 
  public get dhcpEnabled() {
    return this.getStringAttribute('dhcp_enabled');
  }
  public set dhcpEnabled(value: string) {
    this._dhcpEnabled = value;
  }
  public resetDhcpEnabled() {
    this._dhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpEnabledInput() {
    return this._dhcpEnabled;
  }

  // dhcp_ranges - computed: false, optional: true, required: false
  private _dhcpRanges?: string[]; 
  public get dhcpRanges() {
    return this.getListAttribute('dhcp_ranges');
  }
  public set dhcpRanges(value: string[]) {
    this._dhcpRanges = value;
  }
  public resetDhcpRanges() {
    this._dhcpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangesInput() {
    return this._dhcpRanges;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nw_name - computed: true, optional: true, required: false
  private _nwName?: string; 
  public get nwName() {
    return this.getStringAttribute('nw_name');
  }
  public set nwName(value: string) {
    this._nwName = value;
  }
  public resetNwName() {
    this._nwName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwNameInput() {
    return this._nwName;
  }

  // nw_ref - computed: true, optional: true, required: false
  private _nwRef?: string; 
  public get nwRef() {
    return this.getStringAttribute('nw_ref');
  }
  public set nwRef(value: string) {
    this._nwRef = value;
  }
  public resetNwRef() {
    this._nwRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nwRefInput() {
    return this._nwRef;
  }

  // opaque_network_id - computed: true, optional: true, required: false
  private _opaqueNetworkId?: string; 
  public get opaqueNetworkId() {
    return this.getStringAttribute('opaque_network_id');
  }
  public set opaqueNetworkId(value: string) {
    this._opaqueNetworkId = value;
  }
  public resetOpaqueNetworkId() {
    this._opaqueNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueNetworkIdInput() {
    return this._opaqueNetworkId;
  }

  // origin_id - computed: true, optional: true, required: false
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  public resetOriginId() {
    this._originId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // security_only_nsxt - computed: false, optional: true, required: false
  private _securityOnlyNsxt?: string; 
  public get securityOnlyNsxt() {
    return this.getStringAttribute('security_only_nsxt');
  }
  public set securityOnlyNsxt(value: string) {
    this._securityOnlyNsxt = value;
  }
  public resetSecurityOnlyNsxt() {
    this._securityOnlyNsxt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOnlyNsxtInput() {
    return this._securityOnlyNsxt;
  }

  // segment_gw - computed: true, optional: true, required: false
  private _segmentGw?: string; 
  public get segmentGw() {
    return this.getStringAttribute('segment_gw');
  }
  public set segmentGw(value: string) {
    this._segmentGw = value;
  }
  public resetSegmentGw() {
    this._segmentGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentGwInput() {
    return this._segmentGw;
  }

  // segment_gw6 - computed: true, optional: true, required: false
  private _segmentGw6?: string; 
  public get segmentGw6() {
    return this.getStringAttribute('segment_gw6');
  }
  public set segmentGw6(value: string) {
    this._segmentGw6 = value;
  }
  public resetSegmentGw6() {
    this._segmentGw6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentGw6Input() {
    return this._segmentGw6;
  }

  // segment_id - computed: true, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // segname - computed: true, optional: true, required: false
  private _segname?: string; 
  public get segname() {
    return this.getStringAttribute('segname');
  }
  public set segname(value: string) {
    this._segname = value;
  }
  public resetSegname() {
    this._segname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segnameInput() {
    return this._segname;
  }

  // subnet - computed: true, optional: true, required: false
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

  // subnet6 - computed: true, optional: true, required: false
  private _subnet6?: string; 
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }
  public set subnet6(value: string) {
    this._subnet6 = value;
  }
  public resetSubnet6() {
    this._subnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // tier1_id - computed: true, optional: true, required: false
  private _tier1Id?: string; 
  public get tier1Id() {
    return this.getStringAttribute('tier1_id');
  }
  public set tier1Id(value: string) {
    this._tier1Id = value;
  }
  public resetTier1Id() {
    this._tier1Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tier1IdInput() {
    return this._tier1Id;
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

  // vlan_ids - computed: false, optional: true, required: false
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // vrf_context_ref - computed: true, optional: true, required: false
  private _vrfContextRef?: string; 
  public get vrfContextRef() {
    return this.getStringAttribute('vrf_context_ref');
  }
  public set vrfContextRef(value: string) {
    this._vrfContextRef = value;
  }
  public resetVrfContextRef() {
    this._vrfContextRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfContextRefInput() {
    return this._vrfContextRef;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      dhcp6_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcp6Ranges),
      dhcp_enabled: cdktf.stringToTerraform(this._dhcpEnabled),
      dhcp_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhcpRanges),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nw_name: cdktf.stringToTerraform(this._nwName),
      nw_ref: cdktf.stringToTerraform(this._nwRef),
      opaque_network_id: cdktf.stringToTerraform(this._opaqueNetworkId),
      origin_id: cdktf.stringToTerraform(this._originId),
      security_only_nsxt: cdktf.stringToTerraform(this._securityOnlyNsxt),
      segment_gw: cdktf.stringToTerraform(this._segmentGw),
      segment_gw6: cdktf.stringToTerraform(this._segmentGw6),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      segname: cdktf.stringToTerraform(this._segname),
      subnet: cdktf.stringToTerraform(this._subnet),
      subnet6: cdktf.stringToTerraform(this._subnet6),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      tier1_id: cdktf.stringToTerraform(this._tier1Id),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanIds),
      vrf_context_ref: cdktf.stringToTerraform(this._vrfContextRef),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcp6Ranges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dhcp_enabled: {
        value: cdktf.stringToHclTerraform(this._dhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhcpRanges),
        isBlock: false,
        type: "list",
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
      nw_name: {
        value: cdktf.stringToHclTerraform(this._nwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nw_ref: {
        value: cdktf.stringToHclTerraform(this._nwRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opaque_network_id: {
        value: cdktf.stringToHclTerraform(this._opaqueNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_id: {
        value: cdktf.stringToHclTerraform(this._originId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_only_nsxt: {
        value: cdktf.stringToHclTerraform(this._securityOnlyNsxt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_gw: {
        value: cdktf.stringToHclTerraform(this._segmentGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_gw6: {
        value: cdktf.stringToHclTerraform(this._segmentGw6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segname: {
        value: cdktf.stringToHclTerraform(this._segname),
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
      subnet6: {
        value: cdktf.stringToHclTerraform(this._subnet6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier1_id: {
        value: cdktf.stringToHclTerraform(this._tier1Id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vrf_context_ref: {
        value: cdktf.stringToHclTerraform(this._vrfContextRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
