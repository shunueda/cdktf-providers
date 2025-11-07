// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PeeringGatewayAwsTgwAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#description PeeringGatewayAwsTgwAttachment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#id PeeringGatewayAwsTgwAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#name PeeringGatewayAwsTgwAttachment#name}
  */
  readonly name: string;
  /**
  * The AWS account ID of TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#peer_aws_account_id PeeringGatewayAwsTgwAttachment#peer_aws_account_id}
  */
  readonly peerAwsAccountId: string;
  /**
  * The AWS region of the peer TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#peer_aws_region PeeringGatewayAwsTgwAttachment#peer_aws_region}
  */
  readonly peerAwsRegion: string;
  /**
  * The ID of AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#peer_aws_tgw_id PeeringGatewayAwsTgwAttachment#peer_aws_tgw_id}
  */
  readonly peerAwsTgwId: string;
  /**
  * The ID of Peering Gateway AWS-TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#peering_gateway_aws_tgw_id PeeringGatewayAwsTgwAttachment#peering_gateway_aws_tgw_id}
  */
  readonly peeringGatewayAwsTgwId: number;
  /**
  * Initiator of transit gateway attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#requestor PeeringGatewayAwsTgwAttachment#requestor}
  */
  readonly requestor: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment alkira_peering_gateway_aws_tgw_attachment}
*/
export class PeeringGatewayAwsTgwAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_peering_gateway_aws_tgw_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PeeringGatewayAwsTgwAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PeeringGatewayAwsTgwAttachment to import
  * @param importFromId The id of the existing PeeringGatewayAwsTgwAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PeeringGatewayAwsTgwAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_peering_gateway_aws_tgw_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/peering_gateway_aws_tgw_attachment alkira_peering_gateway_aws_tgw_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PeeringGatewayAwsTgwAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: PeeringGatewayAwsTgwAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_peering_gateway_aws_tgw_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
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
    this._peerAwsAccountId = config.peerAwsAccountId;
    this._peerAwsRegion = config.peerAwsRegion;
    this._peerAwsTgwId = config.peerAwsTgwId;
    this._peeringGatewayAwsTgwId = config.peeringGatewayAwsTgwId;
    this._requestor = config.requestor;
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

  // peer_aws_account_id - computed: false, optional: false, required: true
  private _peerAwsAccountId?: string; 
  public get peerAwsAccountId() {
    return this.getStringAttribute('peer_aws_account_id');
  }
  public set peerAwsAccountId(value: string) {
    this._peerAwsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAwsAccountIdInput() {
    return this._peerAwsAccountId;
  }

  // peer_aws_region - computed: false, optional: false, required: true
  private _peerAwsRegion?: string; 
  public get peerAwsRegion() {
    return this.getStringAttribute('peer_aws_region');
  }
  public set peerAwsRegion(value: string) {
    this._peerAwsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAwsRegionInput() {
    return this._peerAwsRegion;
  }

  // peer_aws_tgw_id - computed: false, optional: false, required: true
  private _peerAwsTgwId?: string; 
  public get peerAwsTgwId() {
    return this.getStringAttribute('peer_aws_tgw_id');
  }
  public set peerAwsTgwId(value: string) {
    this._peerAwsTgwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAwsTgwIdInput() {
    return this._peerAwsTgwId;
  }

  // peering_gateway_aws_tgw_id - computed: false, optional: false, required: true
  private _peeringGatewayAwsTgwId?: number; 
  public get peeringGatewayAwsTgwId() {
    return this.getNumberAttribute('peering_gateway_aws_tgw_id');
  }
  public set peeringGatewayAwsTgwId(value: number) {
    this._peeringGatewayAwsTgwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringGatewayAwsTgwIdInput() {
    return this._peeringGatewayAwsTgwId;
  }

  // requestor - computed: false, optional: false, required: true
  private _requestor?: string; 
  public get requestor() {
    return this.getStringAttribute('requestor');
  }
  public set requestor(value: string) {
    this._requestor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestorInput() {
    return this._requestor;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      peer_aws_account_id: cdktf.stringToTerraform(this._peerAwsAccountId),
      peer_aws_region: cdktf.stringToTerraform(this._peerAwsRegion),
      peer_aws_tgw_id: cdktf.stringToTerraform(this._peerAwsTgwId),
      peering_gateway_aws_tgw_id: cdktf.numberToTerraform(this._peeringGatewayAwsTgwId),
      requestor: cdktf.stringToTerraform(this._requestor),
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
      peer_aws_account_id: {
        value: cdktf.stringToHclTerraform(this._peerAwsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_aws_region: {
        value: cdktf.stringToHclTerraform(this._peerAwsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_aws_tgw_id: {
        value: cdktf.stringToHclTerraform(this._peerAwsTgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_gateway_aws_tgw_id: {
        value: cdktf.numberToHclTerraform(this._peeringGatewayAwsTgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requestor: {
        value: cdktf.stringToHclTerraform(this._requestor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
