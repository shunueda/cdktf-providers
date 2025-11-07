// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bandwidth Gbps(UplinkEnable=false : 1, UplinkEnable=true : 1 or 10, Reserved for designated: 20 or 40)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway#bandwidth_gbps TransitGateway#bandwidth_gbps}
  */
  readonly bandwidthGbps: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway#id TransitGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway#region TransitGateway#region}
  */
  readonly region: string;
  /**
  * Transit Gateway description. (Up to 50 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway#transit_gateway_description TransitGateway#transit_gateway_description}
  */
  readonly transitGatewayDescription?: string;
  /**
  * Transit Gateway Name. ( 3 to 20 characters consist of alphabets and numbers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway#transit_gateway_name TransitGateway#transit_gateway_name}
  */
  readonly transitGatewayName: string;
  /**
  * Option for Uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway#uplink_enabled TransitGateway#uplink_enabled}
  */
  readonly uplinkEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway samsungcloudplatform_transit_gateway}
*/
export class TransitGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitGateway to import
  * @param importFromId The id of the existing TransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/transit_gateway samsungcloudplatform_transit_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: TransitGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_transit_gateway',
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
    this._bandwidthGbps = config.bandwidthGbps;
    this._id = config.id;
    this._region = config.region;
    this._transitGatewayDescription = config.transitGatewayDescription;
    this._transitGatewayName = config.transitGatewayName;
    this._uplinkEnabled = config.uplinkEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_gbps - computed: false, optional: false, required: true
  private _bandwidthGbps?: number; 
  public get bandwidthGbps() {
    return this.getNumberAttribute('bandwidth_gbps');
  }
  public set bandwidthGbps(value: number) {
    this._bandwidthGbps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthGbpsInput() {
    return this._bandwidthGbps;
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

  // transit_gateway_description - computed: false, optional: true, required: false
  private _transitGatewayDescription?: string; 
  public get transitGatewayDescription() {
    return this.getStringAttribute('transit_gateway_description');
  }
  public set transitGatewayDescription(value: string) {
    this._transitGatewayDescription = value;
  }
  public resetTransitGatewayDescription() {
    this._transitGatewayDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayDescriptionInput() {
    return this._transitGatewayDescription;
  }

  // transit_gateway_name - computed: false, optional: false, required: true
  private _transitGatewayName?: string; 
  public get transitGatewayName() {
    return this.getStringAttribute('transit_gateway_name');
  }
  public set transitGatewayName(value: string) {
    this._transitGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayNameInput() {
    return this._transitGatewayName;
  }

  // uplink_enabled - computed: false, optional: true, required: false
  private _uplinkEnabled?: boolean | cdktf.IResolvable; 
  public get uplinkEnabled() {
    return this.getBooleanAttribute('uplink_enabled');
  }
  public set uplinkEnabled(value: boolean | cdktf.IResolvable) {
    this._uplinkEnabled = value;
  }
  public resetUplinkEnabled() {
    this._uplinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkEnabledInput() {
    return this._uplinkEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_gbps: cdktf.numberToTerraform(this._bandwidthGbps),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      transit_gateway_description: cdktf.stringToTerraform(this._transitGatewayDescription),
      transit_gateway_name: cdktf.stringToTerraform(this._transitGatewayName),
      uplink_enabled: cdktf.booleanToTerraform(this._uplinkEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_gbps: {
        value: cdktf.numberToHclTerraform(this._bandwidthGbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      transit_gateway_description: {
        value: cdktf.stringToHclTerraform(this._transitGatewayDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_name: {
        value: cdktf.stringToHclTerraform(this._transitGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_enabled: {
        value: cdktf.booleanToHclTerraform(this._uplinkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
