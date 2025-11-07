// https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address in cidr format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#cidr IpAssociation#cidr}
  */
  readonly cidr: string;
  /**
  * view in which record has to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#dns_view IpAssociation#dns_view}
  */
  readonly dnsView?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#id IpAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address your instance in cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#ip_addr IpAssociation#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * mac address of your instance in cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#mac_addr IpAssociation#mac_addr}
  */
  readonly macAddr: string;
  /**
  * Network view name available in Nios server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#network_view_name IpAssociation#network_view_name}
  */
  readonly networkViewName?: string;
  /**
  * Unique identifier of your tenant in cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#tenant_id IpAssociation#tenant_id}
  */
  readonly tenantId: string;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#vm_id IpAssociation#vm_id}
  */
  readonly vmId?: string;
  /**
  * The name of the vm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#vm_name IpAssociation#vm_name}
  */
  readonly vmName?: string;
  /**
  * zone under which record has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#zone IpAssociation#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association infoblox_ip_association}
*/
export class IpAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_ip_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAssociation to import
  * @param importFromId The id of the existing IpAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ip_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cgroschupp/infoblox/1.1.7/docs/resources/ip_association infoblox_ip_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: IpAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ip_association',
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

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // mac_addr - computed: false, optional: false, required: true
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
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

  // vm_name - computed: false, optional: true, required: false
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  public resetVmName() {
    this._vmName = undefined;
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
