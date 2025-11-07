// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformPublicIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of object with public ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#attached_object_name DataSamsungcloudplatformPublicIp#attached_object_name}
  */
  readonly attachedObjectName?: string;
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#created_by DataSamsungcloudplatformPublicIp#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#id DataSamsungcloudplatformPublicIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#ip_address DataSamsungcloudplatformPublicIp#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Ip address Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#ip_address_id DataSamsungcloudplatformPublicIp#ip_address_id}
  */
  readonly ipAddressId?: string;
  /**
  * Public ip Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#public_ip_address_description DataSamsungcloudplatformPublicIp#public_ip_address_description}
  */
  readonly publicIpAddressDescription?: string;
  /**
  * Public ip Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#public_ip_id DataSamsungcloudplatformPublicIp#public_ip_id}
  */
  readonly publicIpId: string;
  /**
  * The reason to make public ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#public_ip_purpose DataSamsungcloudplatformPublicIp#public_ip_purpose}
  */
  readonly publicIpPurpose?: string;
  /**
  * Public ip status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#public_ip_state DataSamsungcloudplatformPublicIp#public_ip_state}
  */
  readonly publicIpState?: string;
  /**
  * Service zone id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#service_zone_id DataSamsungcloudplatformPublicIp#service_zone_id}
  */
  readonly serviceZoneId?: string;
  /**
  * Uplink type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#uplink_type DataSamsungcloudplatformPublicIp#uplink_type}
  */
  readonly uplinkType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip samsungcloudplatform_public_ip}
*/
export class DataSamsungcloudplatformPublicIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_public_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformPublicIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformPublicIp to import
  * @param importFromId The id of the existing DataSamsungcloudplatformPublicIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformPublicIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_public_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/public_ip samsungcloudplatform_public_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformPublicIpConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformPublicIpConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_public_ip',
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
    this._attachedObjectName = config.attachedObjectName;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ipAddressId = config.ipAddressId;
    this._publicIpAddressDescription = config.publicIpAddressDescription;
    this._publicIpId = config.publicIpId;
    this._publicIpPurpose = config.publicIpPurpose;
    this._publicIpState = config.publicIpState;
    this._serviceZoneId = config.serviceZoneId;
    this._uplinkType = config.uplinkType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_object_name - computed: false, optional: true, required: false
  private _attachedObjectName?: string; 
  public get attachedObjectName() {
    return this.getStringAttribute('attached_object_name');
  }
  public set attachedObjectName(value: string) {
    this._attachedObjectName = value;
  }
  public resetAttachedObjectName() {
    this._attachedObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedObjectNameInput() {
    return this._attachedObjectName;
  }

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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_id - computed: false, optional: true, required: false
  private _ipAddressId?: string; 
  public get ipAddressId() {
    return this.getStringAttribute('ip_address_id');
  }
  public set ipAddressId(value: string) {
    this._ipAddressId = value;
  }
  public resetIpAddressId() {
    this._ipAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressIdInput() {
    return this._ipAddressId;
  }

  // public_ip_address_description - computed: false, optional: true, required: false
  private _publicIpAddressDescription?: string; 
  public get publicIpAddressDescription() {
    return this.getStringAttribute('public_ip_address_description');
  }
  public set publicIpAddressDescription(value: string) {
    this._publicIpAddressDescription = value;
  }
  public resetPublicIpAddressDescription() {
    this._publicIpAddressDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressDescriptionInput() {
    return this._publicIpAddressDescription;
  }

  // public_ip_id - computed: false, optional: false, required: true
  private _publicIpId?: string; 
  public get publicIpId() {
    return this.getStringAttribute('public_ip_id');
  }
  public set publicIpId(value: string) {
    this._publicIpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpIdInput() {
    return this._publicIpId;
  }

  // public_ip_purpose - computed: false, optional: true, required: false
  private _publicIpPurpose?: string; 
  public get publicIpPurpose() {
    return this.getStringAttribute('public_ip_purpose');
  }
  public set publicIpPurpose(value: string) {
    this._publicIpPurpose = value;
  }
  public resetPublicIpPurpose() {
    this._publicIpPurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPurposeInput() {
    return this._publicIpPurpose;
  }

  // public_ip_state - computed: false, optional: true, required: false
  private _publicIpState?: string; 
  public get publicIpState() {
    return this.getStringAttribute('public_ip_state');
  }
  public set publicIpState(value: string) {
    this._publicIpState = value;
  }
  public resetPublicIpState() {
    this._publicIpState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpStateInput() {
    return this._publicIpState;
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

  // uplink_type - computed: false, optional: true, required: false
  private _uplinkType?: string; 
  public get uplinkType() {
    return this.getStringAttribute('uplink_type');
  }
  public set uplinkType(value: string) {
    this._uplinkType = value;
  }
  public resetUplinkType() {
    this._uplinkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTypeInput() {
    return this._uplinkType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attached_object_name: cdktf.stringToTerraform(this._attachedObjectName),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_address_id: cdktf.stringToTerraform(this._ipAddressId),
      public_ip_address_description: cdktf.stringToTerraform(this._publicIpAddressDescription),
      public_ip_id: cdktf.stringToTerraform(this._publicIpId),
      public_ip_purpose: cdktf.stringToTerraform(this._publicIpPurpose),
      public_ip_state: cdktf.stringToTerraform(this._publicIpState),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      uplink_type: cdktf.stringToTerraform(this._uplinkType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attached_object_name: {
        value: cdktf.stringToHclTerraform(this._attachedObjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_id: {
        value: cdktf.stringToHclTerraform(this._ipAddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_address_description: {
        value: cdktf.stringToHclTerraform(this._publicIpAddressDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_id: {
        value: cdktf.stringToHclTerraform(this._publicIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_purpose: {
        value: cdktf.stringToHclTerraform(this._publicIpPurpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_state: {
        value: cdktf.stringToHclTerraform(this._publicIpState),
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
      uplink_type: {
        value: cdktf.stringToHclTerraform(this._uplinkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
