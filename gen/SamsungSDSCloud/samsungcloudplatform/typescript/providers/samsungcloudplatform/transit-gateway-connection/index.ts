// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitGatewayConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Approver VPC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection#approver_vpc_id TransitGatewayConnection#approver_vpc_id}
  */
  readonly approverVpcId: string;
  /**
  * Activate Firewall or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection#firewall_enable TransitGatewayConnection#firewall_enable}
  */
  readonly firewallEnable: boolean | cdktf.IResolvable;
  /**
  * Activate Firewall Logging or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection#firewall_loggable TransitGatewayConnection#firewall_loggable}
  */
  readonly firewallLoggable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection#id TransitGatewayConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Requester TGW ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection#requester_transit_gateway_id TransitGatewayConnection#requester_transit_gateway_id}
  */
  readonly requesterTransitGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection#tags TransitGatewayConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * TGW - VPC Connection description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection#transit_gateway_connection_description TransitGatewayConnection#transit_gateway_connection_description}
  */
  readonly transitGatewayConnectionDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection samsungcloudplatform_transit_gateway_connection}
*/
export class TransitGatewayConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitGatewayConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitGatewayConnection to import
  * @param importFromId The id of the existing TransitGatewayConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitGatewayConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway_connection samsungcloudplatform_transit_gateway_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitGatewayConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: TransitGatewayConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway_connection',
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
    this._approverVpcId = config.approverVpcId;
    this._firewallEnable = config.firewallEnable;
    this._firewallLoggable = config.firewallLoggable;
    this._id = config.id;
    this._requesterTransitGatewayId = config.requesterTransitGatewayId;
    this._tags = config.tags;
    this._transitGatewayConnectionDescription = config.transitGatewayConnectionDescription;
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

  // firewall_enable - computed: false, optional: false, required: true
  private _firewallEnable?: boolean | cdktf.IResolvable; 
  public get firewallEnable() {
    return this.getBooleanAttribute('firewall_enable');
  }
  public set firewallEnable(value: boolean | cdktf.IResolvable) {
    this._firewallEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallEnableInput() {
    return this._firewallEnable;
  }

  // firewall_loggable - computed: false, optional: true, required: false
  private _firewallLoggable?: boolean | cdktf.IResolvable; 
  public get firewallLoggable() {
    return this.getBooleanAttribute('firewall_loggable');
  }
  public set firewallLoggable(value: boolean | cdktf.IResolvable) {
    this._firewallLoggable = value;
  }
  public resetFirewallLoggable() {
    this._firewallLoggable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallLoggableInput() {
    return this._firewallLoggable;
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

  // requester_transit_gateway_id - computed: false, optional: false, required: true
  private _requesterTransitGatewayId?: string; 
  public get requesterTransitGatewayId() {
    return this.getStringAttribute('requester_transit_gateway_id');
  }
  public set requesterTransitGatewayId(value: string) {
    this._requesterTransitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterTransitGatewayIdInput() {
    return this._requesterTransitGatewayId;
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

  // transit_gateway_connection_description - computed: false, optional: true, required: false
  private _transitGatewayConnectionDescription?: string; 
  public get transitGatewayConnectionDescription() {
    return this.getStringAttribute('transit_gateway_connection_description');
  }
  public set transitGatewayConnectionDescription(value: string) {
    this._transitGatewayConnectionDescription = value;
  }
  public resetTransitGatewayConnectionDescription() {
    this._transitGatewayConnectionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConnectionDescriptionInput() {
    return this._transitGatewayConnectionDescription;
  }

  // transit_gateway_connection_state - computed: true, optional: false, required: false
  public get transitGatewayConnectionState() {
    return this.getStringAttribute('transit_gateway_connection_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approver_vpc_id: cdktf.stringToTerraform(this._approverVpcId),
      firewall_enable: cdktf.booleanToTerraform(this._firewallEnable),
      firewall_loggable: cdktf.booleanToTerraform(this._firewallLoggable),
      id: cdktf.stringToTerraform(this._id),
      requester_transit_gateway_id: cdktf.stringToTerraform(this._requesterTransitGatewayId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transit_gateway_connection_description: cdktf.stringToTerraform(this._transitGatewayConnectionDescription),
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
      firewall_enable: {
        value: cdktf.booleanToHclTerraform(this._firewallEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_loggable: {
        value: cdktf.booleanToHclTerraform(this._firewallLoggable),
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
      requester_transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._requesterTransitGatewayId),
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
      transit_gateway_connection_description: {
        value: cdktf.stringToHclTerraform(this._transitGatewayConnectionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
