// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AvailableIpAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#description AvailableIpAddress#description}
  */
  readonly description?: string;
  /**
  * Conflicts with `interface_id` and `virtual_machine_interface_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#device_interface_id AvailableIpAddress#device_interface_id}
  */
  readonly deviceInterfaceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#dns_name AvailableIpAddress#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#id AvailableIpAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required when `object_type` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#interface_id AvailableIpAddress#interface_id}
  */
  readonly interfaceId?: number;
  /**
  * Exactly one of `prefix_id` or `ip_range_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#ip_range_id AvailableIpAddress#ip_range_id}
  */
  readonly ipRangeId?: number;
  /**
  * Valid values are `virtualization.vminterface` and `dcim.interface`. Required when `interface_id` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#object_type AvailableIpAddress#object_type}
  */
  readonly objectType?: string;
  /**
  * Exactly one of `prefix_id` or `ip_range_id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#prefix_id AvailableIpAddress#prefix_id}
  */
  readonly prefixId?: number;
  /**
  * Valid values are `loopback`, `secondary`, `anycast`, `vip`, `vrrp`, `hsrp`, `glbp` and `carp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#role AvailableIpAddress#role}
  */
  readonly role?: string;
  /**
  * Valid values are `active`, `reserved`, `deprecated`, `dhcp` and `slaac`. Defaults to `active`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#status AvailableIpAddress#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#tags AvailableIpAddress#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#tenant_id AvailableIpAddress#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * Conflicts with `interface_id` and `device_interface_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#virtual_machine_interface_id AvailableIpAddress#virtual_machine_interface_id}
  */
  readonly virtualMachineInterfaceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#vrf_id AvailableIpAddress#vrf_id}
  */
  readonly vrfId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address netbox_available_ip_address}
*/
export class AvailableIpAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_available_ip_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AvailableIpAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AvailableIpAddress to import
  * @param importFromId The id of the existing AvailableIpAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AvailableIpAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_available_ip_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/available_ip_address netbox_available_ip_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AvailableIpAddressConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AvailableIpAddressConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netbox_available_ip_address',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceInterfaceId = config.deviceInterfaceId;
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._interfaceId = config.interfaceId;
    this._ipRangeId = config.ipRangeId;
    this._objectType = config.objectType;
    this._prefixId = config.prefixId;
    this._role = config.role;
    this._status = config.status;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._virtualMachineInterfaceId = config.virtualMachineInterfaceId;
    this._vrfId = config.vrfId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_interface_id - computed: false, optional: true, required: false
  private _deviceInterfaceId?: number; 
  public get deviceInterfaceId() {
    return this.getNumberAttribute('device_interface_id');
  }
  public set deviceInterfaceId(value: number) {
    this._deviceInterfaceId = value;
  }
  public resetDeviceInterfaceId() {
    this._deviceInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInterfaceIdInput() {
    return this._deviceInterfaceId;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // interface_id - computed: false, optional: true, required: false
  private _interfaceId?: number; 
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }
  public set interfaceId(value: number) {
    this._interfaceId = value;
  }
  public resetInterfaceId() {
    this._interfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_range_id - computed: false, optional: true, required: false
  private _ipRangeId?: number; 
  public get ipRangeId() {
    return this.getNumberAttribute('ip_range_id');
  }
  public set ipRangeId(value: number) {
    this._ipRangeId = value;
  }
  public resetIpRangeId() {
    this._ipRangeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeIdInput() {
    return this._ipRangeId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // status - computed: false, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: number; 
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }
  public set tenantId(value: number) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // virtual_machine_interface_id - computed: false, optional: true, required: false
  private _virtualMachineInterfaceId?: number; 
  public get virtualMachineInterfaceId() {
    return this.getNumberAttribute('virtual_machine_interface_id');
  }
  public set virtualMachineInterfaceId(value: number) {
    this._virtualMachineInterfaceId = value;
  }
  public resetVirtualMachineInterfaceId() {
    this._virtualMachineInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInterfaceIdInput() {
    return this._virtualMachineInterfaceId;
  }

  // vrf_id - computed: false, optional: true, required: false
  private _vrfId?: number; 
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }
  public set vrfId(value: number) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_interface_id: cdktf.numberToTerraform(this._deviceInterfaceId),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      interface_id: cdktf.numberToTerraform(this._interfaceId),
      ip_range_id: cdktf.numberToTerraform(this._ipRangeId),
      object_type: cdktf.stringToTerraform(this._objectType),
      prefix_id: cdktf.numberToTerraform(this._prefixId),
      role: cdktf.stringToTerraform(this._role),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      virtual_machine_interface_id: cdktf.numberToTerraform(this._virtualMachineInterfaceId),
      vrf_id: cdktf.numberToTerraform(this._vrfId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_interface_id: {
        value: cdktf.numberToHclTerraform(this._deviceInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      interface_id: {
        value: cdktf.numberToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_range_id: {
        value: cdktf.numberToHclTerraform(this._ipRangeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.numberToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_machine_interface_id: {
        value: cdktf.numberToHclTerraform(this._virtualMachineInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_id: {
        value: cdktf.numberToHclTerraform(this._vrfId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
