// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpSpaceUplinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of Tier-0 Router Interfaces to associate with this uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink#associated_interface_ids IpSpaceUplink#associated_interface_ids}
  */
  readonly associatedInterfaceIds?: string[];
  /**
  * IP Space Uplink description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink#description IpSpaceUplink#description}
  */
  readonly description?: string;
  /**
  * External Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink#external_network_id IpSpaceUplink#external_network_id}
  */
  readonly externalNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink#id IpSpaceUplink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Space ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink#ip_space_id IpSpaceUplink#ip_space_id}
  */
  readonly ipSpaceId: string;
  /**
  * Tenant facing name for IP Space Uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink#name IpSpaceUplink#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink vcd_ip_space_uplink}
*/
export class IpSpaceUplink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_ip_space_uplink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpSpaceUplink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpSpaceUplink to import
  * @param importFromId The id of the existing IpSpaceUplink that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpSpaceUplink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_ip_space_uplink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/ip_space_uplink vcd_ip_space_uplink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpSpaceUplinkConfig
  */
  public constructor(scope: Construct, id: string, config: IpSpaceUplinkConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_ip_space_uplink',
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
    this._associatedInterfaceIds = config.associatedInterfaceIds;
    this._description = config.description;
    this._externalNetworkId = config.externalNetworkId;
    this._id = config.id;
    this._ipSpaceId = config.ipSpaceId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_interface_ids - computed: false, optional: true, required: false
  private _associatedInterfaceIds?: string[]; 
  public get associatedInterfaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_interface_ids'));
  }
  public set associatedInterfaceIds(value: string[]) {
    this._associatedInterfaceIds = value;
  }
  public resetAssociatedInterfaceIds() {
    this._associatedInterfaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInterfaceIdsInput() {
    return this._associatedInterfaceIds;
  }

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

  // external_network_id - computed: false, optional: false, required: true
  private _externalNetworkId?: string; 
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
  }
  public set externalNetworkId(value: string) {
    this._externalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkIdInput() {
    return this._externalNetworkId;
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

  // ip_space_id - computed: false, optional: false, required: true
  private _ipSpaceId?: string; 
  public get ipSpaceId() {
    return this.getStringAttribute('ip_space_id');
  }
  public set ipSpaceId(value: string) {
    this._ipSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceIdInput() {
    return this._ipSpaceId;
  }

  // ip_space_type - computed: true, optional: false, required: false
  public get ipSpaceType() {
    return this.getStringAttribute('ip_space_type');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_interface_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedInterfaceIds),
      description: cdktf.stringToTerraform(this._description),
      external_network_id: cdktf.stringToTerraform(this._externalNetworkId),
      id: cdktf.stringToTerraform(this._id),
      ip_space_id: cdktf.stringToTerraform(this._ipSpaceId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_interface_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._associatedInterfaceIds),
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
      external_network_id: {
        value: cdktf.stringToHclTerraform(this._externalNetworkId),
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
      ip_space_id: {
        value: cdktf.stringToHclTerraform(this._ipSpaceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
