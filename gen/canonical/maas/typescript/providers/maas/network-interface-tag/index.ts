// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier (system ID, hostname, or FQDN) of the device with the network interface. Either `machine` or `device` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag#device NetworkInterfaceTag#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag#id NetworkInterfaceTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The network interface ID to tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag#interface_id NetworkInterfaceTag#interface_id}
  */
  readonly interfaceId: number;
  /**
  * The identifier (system ID, hostname, or FQDN) of the machine with the network interface. Either `machine` or `device` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag#machine NetworkInterfaceTag#machine}
  */
  readonly machine?: string;
  /**
  * The tags to assign to the network interface. Tag names should be short and without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag#tags NetworkInterfaceTag#tags}
  */
  readonly tags: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag maas_network_interface_tag}
*/
export class NetworkInterfaceTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_network_interface_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkInterfaceTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkInterfaceTag to import
  * @param importFromId The id of the existing NetworkInterfaceTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkInterfaceTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_network_interface_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/network_interface_tag maas_network_interface_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceTagConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceTagConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_network_interface_tag',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._id = config.id;
    this._interfaceId = config.interfaceId;
    this._machine = config.machine;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: number; 
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }
  public set interfaceId(value: number) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // machine - computed: false, optional: true, required: false
  private _machine?: string; 
  public get machine() {
    return this.getStringAttribute('machine');
  }
  public set machine(value: string) {
    this._machine = value;
  }
  public resetMachine() {
    this._machine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInput() {
    return this._machine;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      id: cdktf.stringToTerraform(this._id),
      interface_id: cdktf.numberToTerraform(this._interfaceId),
      machine: cdktf.stringToTerraform(this._machine),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      machine: {
        value: cdktf.stringToHclTerraform(this._machine),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
