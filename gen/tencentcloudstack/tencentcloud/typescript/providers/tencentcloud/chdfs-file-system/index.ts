// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChdfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * file system capacity. min 1GB, max 1PB, CapacityQuota is N * 1073741824.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#capacity_quota ChdfsFileSystem#capacity_quota}
  */
  readonly capacityQuota: number;
  /**
  * desc of the file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#description ChdfsFileSystem#description}
  */
  readonly description?: string;
  /**
  * check the ranger address or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#enable_ranger ChdfsFileSystem#enable_ranger}
  */
  readonly enableRanger?: boolean | cdktf.IResolvable;
  /**
  * file system name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#file_system_name ChdfsFileSystem#file_system_name}
  */
  readonly fileSystemName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#id ChdfsFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * check POSIX ACL or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#posix_acl ChdfsFileSystem#posix_acl}
  */
  readonly posixAcl: boolean | cdktf.IResolvable;
  /**
  * ranger address list, default empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#ranger_service_addresses ChdfsFileSystem#ranger_service_addresses}
  */
  readonly rangerServiceAddresses?: string[];
  /**
  * super users of the file system, default empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#super_users ChdfsFileSystem#super_users}
  */
  readonly superUsers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system tencentcloud_chdfs_file_system}
*/
export class ChdfsFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_chdfs_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChdfsFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChdfsFileSystem to import
  * @param importFromId The id of the existing ChdfsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChdfsFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_chdfs_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/chdfs_file_system tencentcloud_chdfs_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChdfsFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: ChdfsFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_chdfs_file_system',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityQuota = config.capacityQuota;
    this._description = config.description;
    this._enableRanger = config.enableRanger;
    this._fileSystemName = config.fileSystemName;
    this._id = config.id;
    this._posixAcl = config.posixAcl;
    this._rangerServiceAddresses = config.rangerServiceAddresses;
    this._superUsers = config.superUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_quota - computed: false, optional: false, required: true
  private _capacityQuota?: number; 
  public get capacityQuota() {
    return this.getNumberAttribute('capacity_quota');
  }
  public set capacityQuota(value: number) {
    this._capacityQuota = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityQuotaInput() {
    return this._capacityQuota;
  }

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

  // enable_ranger - computed: false, optional: true, required: false
  private _enableRanger?: boolean | cdktf.IResolvable; 
  public get enableRanger() {
    return this.getBooleanAttribute('enable_ranger');
  }
  public set enableRanger(value: boolean | cdktf.IResolvable) {
    this._enableRanger = value;
  }
  public resetEnableRanger() {
    this._enableRanger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRangerInput() {
    return this._enableRanger;
  }

  // file_system_name - computed: false, optional: false, required: true
  private _fileSystemName?: string; 
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }
  public set fileSystemName(value: string) {
    this._fileSystemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemNameInput() {
    return this._fileSystemName;
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

  // posix_acl - computed: false, optional: false, required: true
  private _posixAcl?: boolean | cdktf.IResolvable; 
  public get posixAcl() {
    return this.getBooleanAttribute('posix_acl');
  }
  public set posixAcl(value: boolean | cdktf.IResolvable) {
    this._posixAcl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get posixAclInput() {
    return this._posixAcl;
  }

  // ranger_service_addresses - computed: false, optional: true, required: false
  private _rangerServiceAddresses?: string[]; 
  public get rangerServiceAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ranger_service_addresses'));
  }
  public set rangerServiceAddresses(value: string[]) {
    this._rangerServiceAddresses = value;
  }
  public resetRangerServiceAddresses() {
    this._rangerServiceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangerServiceAddressesInput() {
    return this._rangerServiceAddresses;
  }

  // super_users - computed: false, optional: true, required: false
  private _superUsers?: string[]; 
  public get superUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('super_users'));
  }
  public set superUsers(value: string[]) {
    this._superUsers = value;
  }
  public resetSuperUsers() {
    this._superUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superUsersInput() {
    return this._superUsers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_quota: cdktf.numberToTerraform(this._capacityQuota),
      description: cdktf.stringToTerraform(this._description),
      enable_ranger: cdktf.booleanToTerraform(this._enableRanger),
      file_system_name: cdktf.stringToTerraform(this._fileSystemName),
      id: cdktf.stringToTerraform(this._id),
      posix_acl: cdktf.booleanToTerraform(this._posixAcl),
      ranger_service_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rangerServiceAddresses),
      super_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._superUsers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_quota: {
        value: cdktf.numberToHclTerraform(this._capacityQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ranger: {
        value: cdktf.booleanToHclTerraform(this._enableRanger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_system_name: {
        value: cdktf.stringToHclTerraform(this._fileSystemName),
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
      posix_acl: {
        value: cdktf.booleanToHclTerraform(this._posixAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ranger_service_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rangerServiceAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      super_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._superUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
