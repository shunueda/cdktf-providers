// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Capacity of the device in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#device_capacity Device#device_capacity}
  */
  readonly deviceCapacity?: number;
  /**
  * The current path of the device. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#device_path Device#device_path}
  */
  readonly devicePath: string;
  /**
  * External acceleration type of the device. Valid values are `None`, `Read`, `Write`, `ReadAndWrite`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#external_acceleration_type Device#external_acceleration_type}
  */
  readonly externalAccelerationType?: string;
  /**
  * Media type of the device. Valid values are `HDD`, `SSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#media_type Device#media_type}
  */
  readonly mediaType?: string;
  /**
  * The name of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#name Device#name}
  */
  readonly name?: string;
  /**
  * ID of the protection domain. Conflicts with `protection_domain_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#protection_domain_id Device#protection_domain_id}
  */
  readonly protectionDomainId?: string;
  /**
  * Name of the protection domain. Conflicts with `protection_domain_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#protection_domain_name Device#protection_domain_name}
  */
  readonly protectionDomainName?: string;
  /**
  * ID of the SDS. Conflicts with `sds_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#sds_id Device#sds_id}
  */
  readonly sdsId?: string;
  /**
  * Name of the SDS. Conflicts with `sds_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#sds_name Device#sds_name}
  */
  readonly sdsName?: string;
  /**
  * ID of the storage pool. Conflicts with `storage_pool_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#storage_pool_id Device#storage_pool_id}
  */
  readonly storagePoolId?: string;
  /**
  * Name of the storage pool. Conflicts with `storage_pool_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#storage_pool_name Device#storage_pool_name}
  */
  readonly storagePoolName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device powerflex_device}
*/
export class Device extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Device to import
  * @param importFromId The id of the existing Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/device powerflex_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_device',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceCapacity = config.deviceCapacity;
    this._devicePath = config.devicePath;
    this._externalAccelerationType = config.externalAccelerationType;
    this._mediaType = config.mediaType;
    this._name = config.name;
    this._protectionDomainId = config.protectionDomainId;
    this._protectionDomainName = config.protectionDomainName;
    this._sdsId = config.sdsId;
    this._sdsName = config.sdsName;
    this._storagePoolId = config.storagePoolId;
    this._storagePoolName = config.storagePoolName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_capacity - computed: false, optional: true, required: false
  private _deviceCapacity?: number; 
  public get deviceCapacity() {
    return this.getNumberAttribute('device_capacity');
  }
  public set deviceCapacity(value: number) {
    this._deviceCapacity = value;
  }
  public resetDeviceCapacity() {
    this._deviceCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCapacityInput() {
    return this._deviceCapacity;
  }

  // device_capacity_in_kb - computed: true, optional: false, required: false
  public get deviceCapacityInKb() {
    return this.getNumberAttribute('device_capacity_in_kb');
  }

  // device_original_path - computed: true, optional: false, required: false
  public get deviceOriginalPath() {
    return this.getStringAttribute('device_original_path');
  }

  // device_path - computed: false, optional: false, required: true
  private _devicePath?: string; 
  public get devicePath() {
    return this.getStringAttribute('device_path');
  }
  public set devicePath(value: string) {
    this._devicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePathInput() {
    return this._devicePath;
  }

  // device_state - computed: true, optional: false, required: false
  public get deviceState() {
    return this.getStringAttribute('device_state');
  }

  // external_acceleration_type - computed: true, optional: true, required: false
  private _externalAccelerationType?: string; 
  public get externalAccelerationType() {
    return this.getStringAttribute('external_acceleration_type');
  }
  public set externalAccelerationType(value: string) {
    this._externalAccelerationType = value;
  }
  public resetExternalAccelerationType() {
    this._externalAccelerationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccelerationTypeInput() {
    return this._externalAccelerationType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // media_type - computed: true, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protection_domain_id - computed: false, optional: true, required: false
  private _protectionDomainId?: string; 
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }
  public set protectionDomainId(value: string) {
    this._protectionDomainId = value;
  }
  public resetProtectionDomainId() {
    this._protectionDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainIdInput() {
    return this._protectionDomainId;
  }

  // protection_domain_name - computed: false, optional: true, required: false
  private _protectionDomainName?: string; 
  public get protectionDomainName() {
    return this.getStringAttribute('protection_domain_name');
  }
  public set protectionDomainName(value: string) {
    this._protectionDomainName = value;
  }
  public resetProtectionDomainName() {
    this._protectionDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainNameInput() {
    return this._protectionDomainName;
  }

  // sds_id - computed: true, optional: true, required: false
  private _sdsId?: string; 
  public get sdsId() {
    return this.getStringAttribute('sds_id');
  }
  public set sdsId(value: string) {
    this._sdsId = value;
  }
  public resetSdsId() {
    this._sdsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsIdInput() {
    return this._sdsId;
  }

  // sds_name - computed: false, optional: true, required: false
  private _sdsName?: string; 
  public get sdsName() {
    return this.getStringAttribute('sds_name');
  }
  public set sdsName(value: string) {
    this._sdsName = value;
  }
  public resetSdsName() {
    this._sdsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsNameInput() {
    return this._sdsName;
  }

  // storage_pool_id - computed: true, optional: true, required: false
  private _storagePoolId?: string; 
  public get storagePoolId() {
    return this.getStringAttribute('storage_pool_id');
  }
  public set storagePoolId(value: string) {
    this._storagePoolId = value;
  }
  public resetStoragePoolId() {
    this._storagePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolIdInput() {
    return this._storagePoolId;
  }

  // storage_pool_name - computed: false, optional: true, required: false
  private _storagePoolName?: string; 
  public get storagePoolName() {
    return this.getStringAttribute('storage_pool_name');
  }
  public set storagePoolName(value: string) {
    this._storagePoolName = value;
  }
  public resetStoragePoolName() {
    this._storagePoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolNameInput() {
    return this._storagePoolName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_capacity: cdktf.numberToTerraform(this._deviceCapacity),
      device_path: cdktf.stringToTerraform(this._devicePath),
      external_acceleration_type: cdktf.stringToTerraform(this._externalAccelerationType),
      media_type: cdktf.stringToTerraform(this._mediaType),
      name: cdktf.stringToTerraform(this._name),
      protection_domain_id: cdktf.stringToTerraform(this._protectionDomainId),
      protection_domain_name: cdktf.stringToTerraform(this._protectionDomainName),
      sds_id: cdktf.stringToTerraform(this._sdsId),
      sds_name: cdktf.stringToTerraform(this._sdsName),
      storage_pool_id: cdktf.stringToTerraform(this._storagePoolId),
      storage_pool_name: cdktf.stringToTerraform(this._storagePoolName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_capacity: {
        value: cdktf.numberToHclTerraform(this._deviceCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_path: {
        value: cdktf.stringToHclTerraform(this._devicePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_acceleration_type: {
        value: cdktf.stringToHclTerraform(this._externalAccelerationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_type: {
        value: cdktf.stringToHclTerraform(this._mediaType),
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
      protection_domain_id: {
        value: cdktf.stringToHclTerraform(this._protectionDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_domain_name: {
        value: cdktf.stringToHclTerraform(this._protectionDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sds_id: {
        value: cdktf.stringToHclTerraform(this._sdsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sds_name: {
        value: cdktf.stringToHclTerraform(this._sdsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_pool_id: {
        value: cdktf.stringToHclTerraform(this._storagePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_pool_name: {
        value: cdktf.stringToHclTerraform(this._storagePoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
