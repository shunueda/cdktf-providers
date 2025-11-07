// https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/virtualization_vm_primary_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualizationVmPrimaryIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/virtualization_vm_primary_ip#id VirtualizationVmPrimaryIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the primary IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/virtualization_vm_primary_ip#primary_ip4_id VirtualizationVmPrimaryIp#primary_ip4_id}
  */
  readonly primaryIp4Id?: number;
  /**
  * ID of the primary IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/virtualization_vm_primary_ip#primary_ip6_id VirtualizationVmPrimaryIp#primary_ip6_id}
  */
  readonly primaryIp6Id?: number;
  /**
  * ID of the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/virtualization_vm_primary_ip#virtualmachine_id VirtualizationVmPrimaryIp#virtualmachine_id}
  */
  readonly virtualmachineId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/virtualization_vm_primary_ip netbox_virtualization_vm_primary_ip}
*/
export class VirtualizationVmPrimaryIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_virtualization_vm_primary_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualizationVmPrimaryIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualizationVmPrimaryIp to import
  * @param importFromId The id of the existing VirtualizationVmPrimaryIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/virtualization_vm_primary_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualizationVmPrimaryIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_virtualization_vm_primary_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/virtualization_vm_primary_ip netbox_virtualization_vm_primary_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualizationVmPrimaryIpConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualizationVmPrimaryIpConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_virtualization_vm_primary_ip',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '8.0.2'
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
    this._primaryIp4Id = config.primaryIp4Id;
    this._primaryIp6Id = config.primaryIp6Id;
    this._virtualmachineId = config.virtualmachineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
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

  // primary_ip4_id - computed: false, optional: true, required: false
  private _primaryIp4Id?: number; 
  public get primaryIp4Id() {
    return this.getNumberAttribute('primary_ip4_id');
  }
  public set primaryIp4Id(value: number) {
    this._primaryIp4Id = value;
  }
  public resetPrimaryIp4Id() {
    this._primaryIp4Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIp4IdInput() {
    return this._primaryIp4Id;
  }

  // primary_ip6_id - computed: false, optional: true, required: false
  private _primaryIp6Id?: number; 
  public get primaryIp6Id() {
    return this.getNumberAttribute('primary_ip6_id');
  }
  public set primaryIp6Id(value: number) {
    this._primaryIp6Id = value;
  }
  public resetPrimaryIp6Id() {
    this._primaryIp6Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIp6IdInput() {
    return this._primaryIp6Id;
  }

  // virtualmachine_id - computed: false, optional: false, required: true
  private _virtualmachineId?: number; 
  public get virtualmachineId() {
    return this.getNumberAttribute('virtualmachine_id');
  }
  public set virtualmachineId(value: number) {
    this._virtualmachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualmachineIdInput() {
    return this._virtualmachineId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      primary_ip4_id: cdktf.numberToTerraform(this._primaryIp4Id),
      primary_ip6_id: cdktf.numberToTerraform(this._primaryIp6Id),
      virtualmachine_id: cdktf.numberToTerraform(this._virtualmachineId),
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
      primary_ip4_id: {
        value: cdktf.numberToHclTerraform(this._primaryIp4Id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_ip6_id: {
        value: cdktf.numberToHclTerraform(this._primaryIp6Id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtualmachine_id: {
        value: cdktf.numberToHclTerraform(this._virtualmachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
