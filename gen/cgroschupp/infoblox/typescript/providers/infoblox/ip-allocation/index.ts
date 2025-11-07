// https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address in cidr format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#cidr IpAllocation#cidr}
  */
  readonly cidr: string;
  /**
  * Dns View under which the zone has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#dns_view IpAllocation#dns_view}
  */
  readonly dnsView?: string;
  /**
  * flag that defines if the host reocrd is used for DNS or IPAM Purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#enable_dns IpAllocation#enable_dns}
  */
  readonly enableDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#id IpAllocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address your instance in cloud.For static allocation ,set the field with valid IP. For dynamic allocation, leave this field empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#ip_addr IpAllocation#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * mac address of your instance in cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#mac_addr IpAllocation#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Network view name available in Nios server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#network_view_name IpAllocation#network_view_name}
  */
  readonly networkViewName?: string;
  /**
  * Unique identifier of your tenant in cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#tenant_id IpAllocation#tenant_id}
  */
  readonly tenantId: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#vm_id IpAllocation#vm_id}
  */
  readonly vmId?: string;
  /**
  * The name of the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#vm_name IpAllocation#vm_name}
  */
  readonly vmName: string;
  /**
  * Zone under which host record has to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#zone IpAllocation#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation infoblox_ip_allocation}
*/
export class IpAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_ip_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAllocation to import
  * @param importFromId The id of the existing IpAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ip_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_allocation infoblox_ip_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: IpAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ip_allocation',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '1.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._dnsView = config.dnsView;
    this._enableDns = config.enableDns;
    this._id = config.id;
    this._ipAddr = config.ipAddr;
    this._macAddr = config.macAddr;
    this._networkViewName = config.networkViewName;
    this._tenantId = config.tenantId;
    this._vmId = config.vmId;
    this._vmName = config.vmName;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dns_view - computed: false, optional: true, required: false
  private _dnsView?: string; 
  public get dnsView() {
    return this.getStringAttribute('dns_view');
  }
  public set dnsView(value: string) {
    this._dnsView = value;
  }
  public resetDnsView() {
    this._dnsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewInput() {
    return this._dnsView;
  }

  // enable_dns - computed: false, optional: true, required: false
  private _enableDns?: boolean | cdktf.IResolvable; 
  public get enableDns() {
    return this.getBooleanAttribute('enable_dns');
  }
  public set enableDns(value: boolean | cdktf.IResolvable) {
    this._enableDns = value;
  }
  public resetEnableDns() {
    this._enableDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsInput() {
    return this._enableDns;
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

  // ip_addr - computed: true, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // mac_addr - computed: false, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // network_view_name - computed: false, optional: true, required: false
  private _networkViewName?: string; 
  public get networkViewName() {
    return this.getStringAttribute('network_view_name');
  }
  public set networkViewName(value: string) {
    this._networkViewName = value;
  }
  public resetNetworkViewName() {
    this._networkViewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewNameInput() {
    return this._networkViewName;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // vm_name - computed: false, optional: false, required: true
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      dns_view: cdktf.stringToTerraform(this._dnsView),
      enable_dns: cdktf.booleanToTerraform(this._enableDns),
      id: cdktf.stringToTerraform(this._id),
      ip_addr: cdktf.stringToTerraform(this._ipAddr),
      mac_addr: cdktf.stringToTerraform(this._macAddr),
      network_view_name: cdktf.stringToTerraform(this._networkViewName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      vm_id: cdktf.stringToTerraform(this._vmId),
      vm_name: cdktf.stringToTerraform(this._vmName),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_view: {
        value: cdktf.stringToHclTerraform(this._dnsView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dns: {
        value: cdktf.booleanToHclTerraform(this._enableDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addr: {
        value: cdktf.stringToHclTerraform(this._ipAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_addr: {
        value: cdktf.stringToHclTerraform(this._macAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_view_name: {
        value: cdktf.stringToHclTerraform(this._networkViewName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_name: {
        value: cdktf.stringToHclTerraform(this._vmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
