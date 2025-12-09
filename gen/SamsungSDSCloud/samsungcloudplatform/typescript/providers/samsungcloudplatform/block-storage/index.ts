// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The block storage whether to use encryption. This can be enabled when the virtual server is encryption enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#encrypt_enable BlockStorage#encrypt_enable}
  */
  readonly encryptEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#id BlockStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The block storage name to create. (3 to 28 characters with -)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#name BlockStorage#name}
  */
  readonly name: string;
  /**
  * You can use by selecting SSD or HDD based storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#product_name BlockStorage#product_name}
  */
  readonly productName: string;
  /**
  * You can use by selecting DEDICATED or SHARED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#shared_type BlockStorage#shared_type}
  */
  readonly sharedType: string;
  /**
  * The storage size(GB) of the block storage to create. (4 to  12288 GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#storage_size_gb BlockStorage#storage_size_gb}
  */
  readonly storageSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#tags BlockStorage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Virtual server ID to which you want to assign the block storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#virtual_server_id BlockStorage#virtual_server_id}
  */
  readonly virtualServerId?: string;
  /**
  * Virtual server IDs to which you want to assign the block storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#virtual_server_ids BlockStorage#virtual_server_ids}
  */
  readonly virtualServerIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage samsungcloudplatform_block_storage}
*/
export class BlockStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_block_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockStorage to import
  * @param importFromId The id of the existing BlockStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_block_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/block_storage samsungcloudplatform_block_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockStorageConfig
  */
  public constructor(scope: Construct, id: string, config: BlockStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_block_storage',
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
    this._encryptEnable = config.encryptEnable;
    this._id = config.id;
    this._name = config.name;
    this._productName = config.productName;
    this._sharedType = config.sharedType;
    this._storageSizeGb = config.storageSizeGb;
    this._tags = config.tags;
    this._virtualServerId = config.virtualServerId;
    this._virtualServerIds = config.virtualServerIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encrypt_enable - computed: false, optional: true, required: false
  private _encryptEnable?: boolean | cdktf.IResolvable; 
  public get encryptEnable() {
    return this.getBooleanAttribute('encrypt_enable');
  }
  public set encryptEnable(value: boolean | cdktf.IResolvable) {
    this._encryptEnable = value;
  }
  public resetEncryptEnable() {
    this._encryptEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptEnableInput() {
    return this._encryptEnable;
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

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // shared_type - computed: false, optional: false, required: true
  private _sharedType?: string; 
  public get sharedType() {
    return this.getStringAttribute('shared_type');
  }
  public set sharedType(value: string) {
    this._sharedType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedTypeInput() {
    return this._sharedType;
  }

  // storage_size_gb - computed: false, optional: false, required: true
  private _storageSizeGb?: number; 
  public get storageSizeGb() {
    return this.getNumberAttribute('storage_size_gb');
  }
  public set storageSizeGb(value: number) {
    this._storageSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGbInput() {
    return this._storageSizeGb;
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

  // virtual_server_id - computed: false, optional: true, required: false
  private _virtualServerId?: string; 
  public get virtualServerId() {
    return this.getStringAttribute('virtual_server_id');
  }
  public set virtualServerId(value: string) {
    this._virtualServerId = value;
  }
  public resetVirtualServerId() {
    this._virtualServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerIdInput() {
    return this._virtualServerId;
  }

  // virtual_server_ids - computed: false, optional: true, required: false
  private _virtualServerIds?: string[]; 
  public get virtualServerIds() {
    return this.getListAttribute('virtual_server_ids');
  }
  public set virtualServerIds(value: string[]) {
    this._virtualServerIds = value;
  }
  public resetVirtualServerIds() {
    this._virtualServerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerIdsInput() {
    return this._virtualServerIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encrypt_enable: cdktf.booleanToTerraform(this._encryptEnable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      product_name: cdktf.stringToTerraform(this._productName),
      shared_type: cdktf.stringToTerraform(this._sharedType),
      storage_size_gb: cdktf.numberToTerraform(this._storageSizeGb),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      virtual_server_id: cdktf.stringToTerraform(this._virtualServerId),
      virtual_server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualServerIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encrypt_enable: {
        value: cdktf.booleanToHclTerraform(this._encryptEnable),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_type: {
        value: cdktf.stringToHclTerraform(this._sharedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size_gb: {
        value: cdktf.numberToHclTerraform(this._storageSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_server_id: {
        value: cdktf.stringToHclTerraform(this._virtualServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_server_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualServerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
