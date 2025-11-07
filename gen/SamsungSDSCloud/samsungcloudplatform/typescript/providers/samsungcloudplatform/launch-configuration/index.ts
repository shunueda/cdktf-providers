// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#id LaunchConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#image_id LaunchConfiguration#image_id}
  */
  readonly imageId: string;
  /**
  * Virtual Server's initial script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#initial_script LaunchConfiguration#initial_script}
  */
  readonly initialScript?: string;
  /**
  * Key pair ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#key_pair_id LaunchConfiguration#key_pair_id}
  */
  readonly keyPairId: string;
  /**
  * Launch Configuration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#lc_name LaunchConfiguration#lc_name}
  */
  readonly lcName: string;
  /**
  * Server type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#server_type LaunchConfiguration#server_type}
  */
  readonly serverType: string;
  /**
  * Service zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#service_zone_id LaunchConfiguration#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#tags LaunchConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * block_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#block_storages LaunchConfiguration#block_storages}
  */
  readonly blockStorages: LaunchConfigurationBlockStorages[] | cdktf.IResolvable;
}
export interface LaunchConfigurationBlockStorages {
  /**
  * Block Storage size (GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#block_storage_size LaunchConfiguration#block_storage_size}
  */
  readonly blockStorageSize: number;
  /**
  * Block Storage product (default value : SSD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#disk_type LaunchConfiguration#disk_type}
  */
  readonly diskType: string;
  /**
  * Encryption enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#encryption_enabled LaunchConfiguration#encryption_enabled}
  */
  readonly encryptionEnabled: boolean | cdktf.IResolvable;
  /**
  * Is boot disk or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#is_boot_disk LaunchConfiguration#is_boot_disk}
  */
  readonly isBootDisk: boolean | cdktf.IResolvable;
}

export function launchConfigurationBlockStoragesToTerraform(struct?: LaunchConfigurationBlockStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size: cdktf.numberToTerraform(struct!.blockStorageSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encryption_enabled: cdktf.booleanToTerraform(struct!.encryptionEnabled),
    is_boot_disk: cdktf.booleanToTerraform(struct!.isBootDisk),
  }
}


export function launchConfigurationBlockStoragesToHclTerraform(struct?: LaunchConfigurationBlockStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.encryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_boot_disk: {
      value: cdktf.booleanToHclTerraform(struct!.isBootDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchConfigurationBlockStoragesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LaunchConfigurationBlockStorages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSize = this._blockStorageSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionEnabled = this._encryptionEnabled;
    }
    if (this._isBootDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBootDisk = this._isBootDisk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchConfigurationBlockStorages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockStorageSize = undefined;
      this._diskType = undefined;
      this._encryptionEnabled = undefined;
      this._isBootDisk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockStorageSize = value.blockStorageSize;
      this._diskType = value.diskType;
      this._encryptionEnabled = value.encryptionEnabled;
      this._isBootDisk = value.isBootDisk;
    }
  }

  // block_storage_size - computed: false, optional: false, required: true
  private _blockStorageSize?: number; 
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }
  public set blockStorageSize(value: number) {
    this._blockStorageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInput() {
    return this._blockStorageSize;
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encryption_enabled - computed: false, optional: false, required: true
  private _encryptionEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }
  public set encryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEnabledInput() {
    return this._encryptionEnabled;
  }

  // is_boot_disk - computed: false, optional: false, required: true
  private _isBootDisk?: boolean | cdktf.IResolvable; 
  public get isBootDisk() {
    return this.getBooleanAttribute('is_boot_disk');
  }
  public set isBootDisk(value: boolean | cdktf.IResolvable) {
    this._isBootDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isBootDiskInput() {
    return this._isBootDisk;
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }
}

export class LaunchConfigurationBlockStoragesList extends cdktf.ComplexList {
  public internalValue? : LaunchConfigurationBlockStorages[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LaunchConfigurationBlockStoragesOutputReference {
    return new LaunchConfigurationBlockStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration samsungcloudplatform_launch_configuration}
*/
export class LaunchConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_launch_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LaunchConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LaunchConfiguration to import
  * @param importFromId The id of the existing LaunchConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LaunchConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_launch_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/launch_configuration samsungcloudplatform_launch_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LaunchConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LaunchConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_launch_configuration',
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
    this._id = config.id;
    this._imageId = config.imageId;
    this._initialScript = config.initialScript;
    this._keyPairId = config.keyPairId;
    this._lcName = config.lcName;
    this._serverType = config.serverType;
    this._serviceZoneId = config.serviceZoneId;
    this._tags = config.tags;
    this._blockStorages.internalValue = config.blockStorages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asg_ids - computed: true, optional: false, required: false
  public get asgIds() {
    return this.getListAttribute('asg_ids');
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // contract_product_id - computed: true, optional: false, required: false
  public get contractProductId() {
    return this.getStringAttribute('contract_product_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // initial_script - computed: false, optional: true, required: false
  private _initialScript?: string; 
  public get initialScript() {
    return this.getStringAttribute('initial_script');
  }
  public set initialScript(value: string) {
    this._initialScript = value;
  }
  public resetInitialScript() {
    this._initialScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialScriptInput() {
    return this._initialScript;
  }

  // key_pair_id - computed: false, optional: false, required: true
  private _keyPairId?: string; 
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }
  public set keyPairId(value: string) {
    this._keyPairId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairIdInput() {
    return this._keyPairId;
  }

  // lc_id - computed: true, optional: false, required: false
  public get lcId() {
    return this.getStringAttribute('lc_id');
  }

  // lc_name - computed: false, optional: false, required: true
  private _lcName?: string; 
  public get lcName() {
    return this.getStringAttribute('lc_name');
  }
  public set lcName(value: string) {
    this._lcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lcNameInput() {
    return this._lcName;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // os_product_id - computed: true, optional: false, required: false
  public get osProductId() {
    return this.getStringAttribute('os_product_id');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // scale_product_id - computed: true, optional: false, required: false
  public get scaleProductId() {
    return this.getStringAttribute('scale_product_id');
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
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

  // block_storages - computed: false, optional: false, required: true
  private _blockStorages = new LaunchConfigurationBlockStoragesList(this, "block_storages", false);
  public get blockStorages() {
    return this._blockStorages;
  }
  public putBlockStorages(value: LaunchConfigurationBlockStorages[] | cdktf.IResolvable) {
    this._blockStorages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStoragesInput() {
    return this._blockStorages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      initial_script: cdktf.stringToTerraform(this._initialScript),
      key_pair_id: cdktf.stringToTerraform(this._keyPairId),
      lc_name: cdktf.stringToTerraform(this._lcName),
      server_type: cdktf.stringToTerraform(this._serverType),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      block_storages: cdktf.listMapper(launchConfigurationBlockStoragesToTerraform, true)(this._blockStorages.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_script: {
        value: cdktf.stringToHclTerraform(this._initialScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_id: {
        value: cdktf.stringToHclTerraform(this._keyPairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lc_name: {
        value: cdktf.stringToHclTerraform(this._lcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      block_storages: {
        value: cdktf.listMapperHcl(launchConfigurationBlockStoragesToHclTerraform, true)(this._blockStorages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchConfigurationBlockStoragesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
