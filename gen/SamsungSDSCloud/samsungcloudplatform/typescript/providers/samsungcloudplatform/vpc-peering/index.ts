// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approver VPC Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering#approver_vpc_id VpcPeering#approver_vpc_id}
  */
  readonly approverVpcId: string;
  /**
  * Firewall Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering#firewall_enabled VpcPeering#firewall_enabled}
  */
  readonly firewallEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering#id VpcPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Requester VPC Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering#requester_vpc_id VpcPeering#requester_vpc_id}
  */
  readonly requesterVpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering#tags VpcPeering#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * VPC Peering Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering#vpc_peering_description VpcPeering#vpc_peering_description}
  */
  readonly vpcPeeringDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering samsungcloudplatform_vpc_peering}
*/
export class VpcPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_vpc_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPeering to import
  * @param importFromId The id of the existing VpcPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_vpc_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/vpc_peering samsungcloudplatform_vpc_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_vpc_peering',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approverVpcId = config.approverVpcId;
    this._firewallEnabled = config.firewallEnabled;
    this._id = config.id;
    this._requesterVpcId = config.requesterVpcId;
    this._tags = config.tags;
    this._vpcPeeringDescription = config.vpcPeeringDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approver_vpc_id - computed: false, optional: false, required: true
  private _approverVpcId?: string; 
  public get approverVpcId() {
    return this.getStringAttribute('approver_vpc_id');
  }
  public set approverVpcId(value: string) {
    this._approverVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approverVpcIdInput() {
    return this._approverVpcId;
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

  // requester_vpc_id - computed: false, optional: false, required: true
  private _requesterVpcId?: string; 
  public get requesterVpcId() {
    return this.getStringAttribute('requester_vpc_id');
  }
  public set requesterVpcId(value: string) {
    this._requesterVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterVpcIdInput() {
    return this._requesterVpcId;
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

  // vpc_peering_description - computed: false, optional: true, required: false
  private _vpcPeeringDescription?: string; 
  public get vpcPeeringDescription() {
    return this.getStringAttribute('vpc_peering_description');
  }
  public set vpcPeeringDescription(value: string) {
    this._vpcPeeringDescription = value;
  }
  public resetVpcPeeringDescription() {
    this._vpcPeeringDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringDescriptionInput() {
    return this._vpcPeeringDescription;
  }

  // vpc_peering_state - computed: true, optional: false, required: false
  public get vpcPeeringState() {
    return this.getStringAttribute('vpc_peering_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approver_vpc_id: cdktf.stringToTerraform(this._approverVpcId),
      firewall_enabled: cdktf.booleanToTerraform(this._firewallEnabled),
      id: cdktf.stringToTerraform(this._id),
      requester_vpc_id: cdktf.stringToTerraform(this._requesterVpcId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_peering_description: cdktf.stringToTerraform(this._vpcPeeringDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approver_vpc_id: {
        value: cdktf.stringToHclTerraform(this._approverVpcId),
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
      requester_vpc_id: {
        value: cdktf.stringToHclTerraform(this._requesterVpcId),
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
      vpc_peering_description: {
        value: cdktf.stringToHclTerraform(this._vpcPeeringDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
