// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#description ApsarastackNetworkInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#id ApsarastackNetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#name ApsarastackNetworkInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#network_interface_name ApsarastackNetworkInterface#network_interface_name}
  */
  readonly networkInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#primary_ip_address ApsarastackNetworkInterface#primary_ip_address}
  */
  readonly primaryIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#private_ip ApsarastackNetworkInterface#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#private_ips ApsarastackNetworkInterface#private_ips}
  */
  readonly privateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#private_ips_count ApsarastackNetworkInterface#private_ips_count}
  */
  readonly privateIpsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#security_groups ApsarastackNetworkInterface#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#tags ApsarastackNetworkInterface#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#vswitch_id ApsarastackNetworkInterface#vswitch_id}
  */
  readonly vswitchId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface apsarastack_network_interface}
*/
export class ApsarastackNetworkInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackNetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackNetworkInterface to import
  * @param importFromId The id of the existing ApsarastackNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackNetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_network_interface apsarastack_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackNetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackNetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._id = config.id;
    this._name = config.name;
    this._networkInterfaceName = config.networkInterfaceName;
    this._primaryIpAddress = config.primaryIpAddress;
    this._privateIp = config.privateIp;
    this._privateIps = config.privateIps;
    this._privateIpsCount = config.privateIpsCount;
    this._securityGroups = config.securityGroups;
    this._tags = config.tags;
    this._vswitchId = config.vswitchId;
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

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
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

  // network_interface_name - computed: true, optional: true, required: false
  private _networkInterfaceName?: string; 
  public get networkInterfaceName() {
    return this.getStringAttribute('network_interface_name');
  }
  public set networkInterfaceName(value: string) {
    this._networkInterfaceName = value;
  }
  public resetNetworkInterfaceName() {
    this._networkInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceNameInput() {
    return this._networkInterfaceName;
  }

  // primary_ip_address - computed: true, optional: true, required: false
  private _primaryIpAddress?: string; 
  public get primaryIpAddress() {
    return this.getStringAttribute('primary_ip_address');
  }
  public set primaryIpAddress(value: string) {
    this._primaryIpAddress = value;
  }
  public resetPrimaryIpAddress() {
    this._primaryIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpAddressInput() {
    return this._primaryIpAddress;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // private_ips - computed: true, optional: true, required: false
  private _privateIps?: string[]; 
  public get privateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ips'));
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  public resetPrivateIps() {
    this._privateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps;
  }

  // private_ips_count - computed: true, optional: true, required: false
  private _privateIpsCount?: number; 
  public get privateIpsCount() {
    return this.getNumberAttribute('private_ips_count');
  }
  public set privateIpsCount(value: number) {
    this._privateIpsCount = value;
  }
  public resetPrivateIpsCount() {
    this._privateIpsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsCountInput() {
    return this._privateIpsCount;
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_interface_name: cdktf.stringToTerraform(this._networkInterfaceName),
      primary_ip_address: cdktf.stringToTerraform(this._primaryIpAddress),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIps),
      private_ips_count: cdktf.numberToTerraform(this._privateIpsCount),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
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
      network_interface_name: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ip_address: {
        value: cdktf.stringToHclTerraform(this._primaryIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_ips_count: {
        value: cdktf.numberToHclTerraform(this._privateIpsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
