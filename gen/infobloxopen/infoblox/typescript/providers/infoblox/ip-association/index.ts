// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * DHCP unique identifier for IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association#duid IpAssociation#duid}
  */
  readonly duid?: string;
  /**
  * The flag which defines if the host record is to be used for IPAM purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association#enable_dhcp IpAssociation#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association#id IpAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This value must point to the ID of the appropriate allocation resource. Required on resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association#internal_id IpAssociation#internal_id}
  */
  readonly internalId?: string;
  /**
  * MAC address of a cloud instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association#mac_addr IpAssociation#mac_addr}
  */
  readonly macAddr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association infoblox_ip_association}
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
  * @param importFromId The id of the existing IpAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ip_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ip_association infoblox_ip_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ip_association',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0',
        providerVersionConstraint: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._duid = config.duid;
    this._enableDhcp = config.enableDhcp;
    this._id = config.id;
    this._internalId = config.internalId;
    this._macAddr = config.macAddr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duid - computed: false, optional: true, required: false
  private _duid?: string; 
  public get duid() {
    return this.getStringAttribute('duid');
  }
  public set duid(value: string) {
    this._duid = value;
  }
  public resetDuid() {
    this._duid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duidInput() {
    return this._duid;
  }

  // enable_dhcp - computed: false, optional: true, required: false
  private _enableDhcp?: boolean | cdktf.IResolvable; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDhcp = value;
  }
  public resetEnableDhcp() {
    this._enableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp;
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

  // internal_id - computed: false, optional: true, required: false
  private _internalId?: string; 
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }
  public set internalId(value: string) {
    this._internalId = value;
  }
  public resetInternalId() {
    this._internalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIdInput() {
    return this._internalId;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duid: cdktf.stringToTerraform(this._duid),
      enable_dhcp: cdktf.booleanToTerraform(this._enableDhcp),
      id: cdktf.stringToTerraform(this._id),
      internal_id: cdktf.stringToTerraform(this._internalId),
      mac_addr: cdktf.stringToTerraform(this._macAddr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duid: {
        value: cdktf.stringToHclTerraform(this._duid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dhcp: {
        value: cdktf.booleanToHclTerraform(this._enableDhcp),
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
      internal_id: {
        value: cdktf.stringToHclTerraform(this._internalId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
