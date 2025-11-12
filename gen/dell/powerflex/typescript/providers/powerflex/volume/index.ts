// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Access mode of the volume. Valid values are `ReadOnly` and `ReadWrite`. Default value is `ReadOnly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#access_mode Volume#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Unit of capacity of the volume. Must be one of `GB` and `TB`. Default value is `GB`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#capacity_unit Volume#capacity_unit}
  */
  readonly capacityUnit?: string;
  /**
  * Compression Method of the volume. Valid values are `None` and `Normal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#compression_method Volume#compression_method}
  */
  readonly compressionMethod?: string;
  /**
  * The name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
  /**
  * ID of the Protection Domain under which the volume will be created. Conflicts with `protection_domain_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#protection_domain_id Volume#protection_domain_id}
  */
  readonly protectionDomainId?: string;
  /**
  * Name of the Protection Domain under which the volume will be created. Conflicts with `protection_domain_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#protection_domain_name Volume#protection_domain_name}
  */
  readonly protectionDomainName?: string;
  /**
  * Remove mode of the volume. Valid values are `ONLY_ME` and `INCLUDING_DESCENDANTS`. Default value is `ONLY_ME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#remove_mode Volume#remove_mode}
  */
  readonly removeMode?: string;
  /**
  * Size of the volume. The unit of size is defined by `capacity_unit`. The storage capacity of a volume must be a multiple of 8GB and cannot be decreased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#size Volume#size}
  */
  readonly size: number;
  /**
  * ID of the Storage Pool under which the volume will be created. Conflicts with `storage_pool_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#storage_pool_id Volume#storage_pool_id}
  */
  readonly storagePoolId?: string;
  /**
  * Name of the Storage Pool under which the volume will be created. Conflicts with `storage_pool_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#storage_pool_name Volume#storage_pool_name}
  */
  readonly storagePoolName?: string;
  /**
  * use rm cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#use_rm_cache Volume#use_rm_cache}
  */
  readonly useRmCache?: boolean | cdktf.IResolvable;
  /**
  * Volume type. Valid values are `ThickProvisioned` and `ThinProvisioned`. Default value is `ThinProvisioned`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#volume_type Volume#volume_type}
  */
  readonly volumeType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume powerflex_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/volume powerflex_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_volume',
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
    this._accessMode = config.accessMode;
    this._capacityUnit = config.capacityUnit;
    this._compressionMethod = config.compressionMethod;
    this._name = config.name;
    this._protectionDomainId = config.protectionDomainId;
    this._protectionDomainName = config.protectionDomainName;
    this._removeMode = config.removeMode;
    this._size = config.size;
    this._storagePoolId = config.storagePoolId;
    this._storagePoolName = config.storagePoolName;
    this._useRmCache = config.useRmCache;
    this._volumeType = config.volumeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // capacity_unit - computed: true, optional: true, required: false
  private _capacityUnit?: string; 
  public get capacityUnit() {
    return this.getStringAttribute('capacity_unit');
  }
  public set capacityUnit(value: string) {
    this._capacityUnit = value;
  }
  public resetCapacityUnit() {
    this._capacityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // compression_method - computed: true, optional: true, required: false
  private _compressionMethod?: string; 
  public get compressionMethod() {
    return this.getStringAttribute('compression_method');
  }
  public set compressionMethod(value: string) {
    this._compressionMethod = value;
  }
  public resetCompressionMethod() {
    this._compressionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMethodInput() {
    return this._compressionMethod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // protection_domain_id - computed: true, optional: true, required: false
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

  // remove_mode - computed: true, optional: true, required: false
  private _removeMode?: string; 
  public get removeMode() {
    return this.getStringAttribute('remove_mode');
  }
  public set removeMode(value: string) {
    this._removeMode = value;
  }
  public resetRemoveMode() {
    this._removeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeModeInput() {
    return this._removeMode;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // size_in_kb - computed: true, optional: false, required: false
  public get sizeInKb() {
    return this.getNumberAttribute('size_in_kb');
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

  // use_rm_cache - computed: true, optional: true, required: false
  private _useRmCache?: boolean | cdktf.IResolvable; 
  public get useRmCache() {
    return this.getBooleanAttribute('use_rm_cache');
  }
  public set useRmCache(value: boolean | cdktf.IResolvable) {
    this._useRmCache = value;
  }
  public resetUseRmCache() {
    this._useRmCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRmCacheInput() {
    return this._useRmCache;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      capacity_unit: cdktf.stringToTerraform(this._capacityUnit),
      compression_method: cdktf.stringToTerraform(this._compressionMethod),
      name: cdktf.stringToTerraform(this._name),
      protection_domain_id: cdktf.stringToTerraform(this._protectionDomainId),
      protection_domain_name: cdktf.stringToTerraform(this._protectionDomainName),
      remove_mode: cdktf.stringToTerraform(this._removeMode),
      size: cdktf.numberToTerraform(this._size),
      storage_pool_id: cdktf.stringToTerraform(this._storagePoolId),
      storage_pool_name: cdktf.stringToTerraform(this._storagePoolName),
      use_rm_cache: cdktf.booleanToTerraform(this._useRmCache),
      volume_type: cdktf.stringToTerraform(this._volumeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_unit: {
        value: cdktf.stringToHclTerraform(this._capacityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression_method: {
        value: cdktf.stringToHclTerraform(this._compressionMethod),
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
      remove_mode: {
        value: cdktf.stringToHclTerraform(this._removeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      use_rm_cache: {
        value: cdktf.booleanToHclTerraform(this._useRmCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
