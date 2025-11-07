// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Details of attach points, (VPC, Transit Gateway etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_gateway#attach_point CloudGateway#attach_point}
  */
  readonly attachPoint: string;
  /**
  * Transit Gateway Attachment, applicable when attach_point is a TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_gateway#attachment CloudGateway#attachment}
  */
  readonly attachment?: string;
  /**
  * Cloud region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_gateway#region CloudGateway#region}
  */
  readonly region: string;
  /**
  * Transit Gateway routing table, applicable when attach_point is a TGW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_gateway#route_table CloudGateway#route_table}
  */
  readonly routeTable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_gateway prosimo_cloud_gateway}
*/
export class CloudGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_cloud_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGateway to import
  * @param importFromId The id of the existing CloudGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_cloud_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_gateway prosimo_cloud_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_cloud_gateway',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachPoint = config.attachPoint;
    this._attachment = config.attachment;
    this._region = config.region;
    this._routeTable = config.routeTable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_point - computed: false, optional: false, required: true
  private _attachPoint?: string; 
  public get attachPoint() {
    return this.getStringAttribute('attach_point');
  }
  public set attachPoint(value: string) {
    this._attachPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPointInput() {
    return this._attachPoint;
  }

  // attachment - computed: false, optional: true, required: false
  private _attachment?: string; 
  public get attachment() {
    return this.getStringAttribute('attachment');
  }
  public set attachment(value: string) {
    this._attachment = value;
  }
  public resetAttachment() {
    this._attachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // route_table - computed: false, optional: true, required: false
  private _routeTable?: string; 
  public get routeTable() {
    return this.getStringAttribute('route_table');
  }
  public set routeTable(value: string) {
    this._routeTable = value;
  }
  public resetRouteTable() {
    this._routeTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableInput() {
    return this._routeTable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_point: cdktf.stringToTerraform(this._attachPoint),
      attachment: cdktf.stringToTerraform(this._attachment),
      region: cdktf.stringToTerraform(this._region),
      route_table: cdktf.stringToTerraform(this._routeTable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_point: {
        value: cdktf.stringToHclTerraform(this._attachPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment: {
        value: cdktf.stringToHclTerraform(this._attachment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table: {
        value: cdktf.stringToHclTerraform(this._routeTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
