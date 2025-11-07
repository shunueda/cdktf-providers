// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface#access_control_groups NetworkInterface#access_control_groups}
  */
  readonly accessControlGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface#description NetworkInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface#id NetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface#name NetworkInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface#private_ip NetworkInterface#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface#server_instance_no NetworkInterface#server_instance_no}
  */
  readonly serverInstanceNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface#subnet_no NetworkInterface#subnet_no}
  */
  readonly subnetNo: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface ncloud_network_interface}
*/
export class NetworkInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkInterface to import
  * @param importFromId The id of the existing NetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/network_interface ncloud_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlGroups = config.accessControlGroups;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._privateIp = config.privateIp;
    this._serverInstanceNo = config.serverInstanceNo;
    this._subnetNo = config.subnetNo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_groups - computed: false, optional: false, required: true
  private _accessControlGroups?: string[]; 
  public get accessControlGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('access_control_groups'));
  }
  public set accessControlGroups(value: string[]) {
    this._accessControlGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlGroupsInput() {
    return this._accessControlGroups;
  }

  // description - computed: true, optional: true, required: false
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

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
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

  // network_interface_no - computed: true, optional: false, required: false
  public get networkInterfaceNo() {
    return this.getStringAttribute('network_interface_no');
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

  // server_instance_no - computed: true, optional: true, required: false
  private _serverInstanceNo?: string; 
  public get serverInstanceNo() {
    return this.getStringAttribute('server_instance_no');
  }
  public set serverInstanceNo(value: string) {
    this._serverInstanceNo = value;
  }
  public resetServerInstanceNo() {
    this._serverInstanceNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNoInput() {
    return this._serverInstanceNo;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_no - computed: false, optional: false, required: true
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessControlGroups),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      server_instance_no: cdktf.stringToTerraform(this._serverInstanceNo),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessControlGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_instance_no: {
        value: cdktf.stringToHclTerraform(this._serverInstanceNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_no: {
        value: cdktf.stringToHclTerraform(this._subnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
