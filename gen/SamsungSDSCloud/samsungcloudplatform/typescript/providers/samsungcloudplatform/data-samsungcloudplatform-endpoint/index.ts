// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#created_by DataSamsungcloudplatformEndpoint#created_by}
  */
  readonly createdBy?: string;
  /**
  * Endpoint Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#endpoint_description DataSamsungcloudplatformEndpoint#endpoint_description}
  */
  readonly endpointDescription?: string;
  /**
  * Endpoint Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#endpoint_id DataSamsungcloudplatformEndpoint#endpoint_id}
  */
  readonly endpointId?: string;
  /**
  * Endpoint Ip Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#endpoint_ip_address DataSamsungcloudplatformEndpoint#endpoint_ip_address}
  */
  readonly endpointIpAddress?: string;
  /**
  * Endpoint status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#endpoint_state DataSamsungcloudplatformEndpoint#endpoint_state}
  */
  readonly endpointState?: string;
  /**
  * Endpoint type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#endpoint_type DataSamsungcloudplatformEndpoint#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#id DataSamsungcloudplatformEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#object_id DataSamsungcloudplatformEndpoint#object_id}
  */
  readonly objectId?: string;
  /**
  * Service zone id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#service_zone_id DataSamsungcloudplatformEndpoint#service_zone_id}
  */
  readonly serviceZoneId?: string;
  /**
  * Vpc Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#vpc_id DataSamsungcloudplatformEndpoint#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint samsungcloudplatform_endpoint}
*/
export class DataSamsungcloudplatformEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformEndpoint to import
  * @param importFromId The id of the existing DataSamsungcloudplatformEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/endpoint samsungcloudplatform_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._endpointDescription = config.endpointDescription;
    this._endpointId = config.endpointId;
    this._endpointIpAddress = config.endpointIpAddress;
    this._endpointState = config.endpointState;
    this._endpointType = config.endpointType;
    this._id = config.id;
    this._objectId = config.objectId;
    this._serviceZoneId = config.serviceZoneId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // endpoint_description - computed: false, optional: true, required: false
  private _endpointDescription?: string; 
  public get endpointDescription() {
    return this.getStringAttribute('endpoint_description');
  }
  public set endpointDescription(value: string) {
    this._endpointDescription = value;
  }
  public resetEndpointDescription() {
    this._endpointDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDescriptionInput() {
    return this._endpointDescription;
  }

  // endpoint_id - computed: false, optional: true, required: false
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // endpoint_ip_address - computed: false, optional: true, required: false
  private _endpointIpAddress?: string; 
  public get endpointIpAddress() {
    return this.getStringAttribute('endpoint_ip_address');
  }
  public set endpointIpAddress(value: string) {
    this._endpointIpAddress = value;
  }
  public resetEndpointIpAddress() {
    this._endpointIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressInput() {
    return this._endpointIpAddress;
  }

  // endpoint_state - computed: false, optional: true, required: false
  private _endpointState?: string; 
  public get endpointState() {
    return this.getStringAttribute('endpoint_state');
  }
  public set endpointState(value: string) {
    this._endpointState = value;
  }
  public resetEndpointState() {
    this._endpointState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointStateInput() {
    return this._endpointState;
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
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

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // service_zone_id - computed: false, optional: true, required: false
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  public resetServiceZoneId() {
    this._serviceZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
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
      created_by: cdktf.stringToTerraform(this._createdBy),
      endpoint_description: cdktf.stringToTerraform(this._endpointDescription),
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      endpoint_ip_address: cdktf.stringToTerraform(this._endpointIpAddress),
      endpoint_state: cdktf.stringToTerraform(this._endpointState),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      id: cdktf.stringToTerraform(this._id),
      object_id: cdktf.stringToTerraform(this._objectId),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_description: {
        value: cdktf.stringToHclTerraform(this._endpointDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_id: {
        value: cdktf.stringToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_ip_address: {
        value: cdktf.stringToHclTerraform(this._endpointIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_state: {
        value: cdktf.stringToHclTerraform(this._endpointState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
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
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
