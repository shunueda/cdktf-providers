// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DconVpcConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dcon-Vpc connection description. (0 to 100 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection#description DconVpcConnection#description}
  */
  readonly description?: string;
  /**
  * Direct connect id of requester
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection#direct_connect_id DconVpcConnection#direct_connect_id}
  */
  readonly directConnectId: string;
  /**
  * Firewall enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection#firewall_enabled DconVpcConnection#firewall_enabled}
  */
  readonly firewallEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection#id DconVpcConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection#tags DconVpcConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Vpc id of approver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection#vpc_id DconVpcConnection#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection samsungcloudplatform_dcon_vpc_connection}
*/
export class DconVpcConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_dcon_vpc_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DconVpcConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DconVpcConnection to import
  * @param importFromId The id of the existing DconVpcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DconVpcConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_dcon_vpc_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/dcon_vpc_connection samsungcloudplatform_dcon_vpc_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DconVpcConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DconVpcConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_dcon_vpc_connection',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._directConnectId = config.directConnectId;
    this._firewallEnabled = config.firewallEnabled;
    this._id = config.id;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
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

  // direct_connect_id - computed: false, optional: false, required: true
  private _directConnectId?: string; 
  public get directConnectId() {
    return this.getStringAttribute('direct_connect_id');
  }
  public set directConnectId(value: string) {
    this._directConnectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectIdInput() {
    return this._directConnectId;
  }

  // firewall_enabled - computed: false, optional: false, required: true
  private _firewallEnabled?: boolean | cdktf.IResolvable; 
  public get firewallEnabled() {
    return this.getBooleanAttribute('firewall_enabled');
  }
  public set firewallEnabled(value: boolean | cdktf.IResolvable) {
    this._firewallEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallEnabledInput() {
    return this._firewallEnabled;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      direct_connect_id: cdktf.stringToTerraform(this._directConnectId),
      firewall_enabled: cdktf.booleanToTerraform(this._firewallEnabled),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      direct_connect_id: {
        value: cdktf.stringToHclTerraform(this._directConnectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_enabled: {
        value: cdktf.booleanToHclTerraform(this._firewallEnabled),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
