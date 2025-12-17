// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsFsxVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#client_id AwsFsxVolume#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#enable_storage_efficiency AwsFsxVolume#enable_storage_efficiency}
  */
  readonly enableStorageEfficiency?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#export_policy_ip AwsFsxVolume#export_policy_ip}
  */
  readonly exportPolicyIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#export_policy_nfs_version AwsFsxVolume#export_policy_nfs_version}
  */
  readonly exportPolicyNfsVersion?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#export_policy_type AwsFsxVolume#export_policy_type}
  */
  readonly exportPolicyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#file_system_id AwsFsxVolume#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#id AwsFsxVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#name AwsFsxVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#permission AwsFsxVolume#permission}
  */
  readonly permission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#share_name AwsFsxVolume#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#size AwsFsxVolume#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#snapshot_policy_name AwsFsxVolume#snapshot_policy_name}
  */
  readonly snapshotPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#svm_name AwsFsxVolume#svm_name}
  */
  readonly svmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#tags AwsFsxVolume#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#tenant_id AwsFsxVolume#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#tiering_policy AwsFsxVolume#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#unit AwsFsxVolume#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#users AwsFsxVolume#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#volume_protocol AwsFsxVolume#volume_protocol}
  */
  readonly volumeProtocol: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume netapp-cloudmanager_aws_fsx_volume}
*/
export class AwsFsxVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_aws_fsx_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsFsxVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsFsxVolume to import
  * @param importFromId The id of the existing AwsFsxVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsFsxVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_aws_fsx_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/aws_fsx_volume netapp-cloudmanager_aws_fsx_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsFsxVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: AwsFsxVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_aws_fsx_volume',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '27.0.0',
        providerVersionConstraint: '27.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._enableStorageEfficiency = config.enableStorageEfficiency;
    this._exportPolicyIp = config.exportPolicyIp;
    this._exportPolicyNfsVersion = config.exportPolicyNfsVersion;
    this._exportPolicyType = config.exportPolicyType;
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._name = config.name;
    this._permission = config.permission;
    this._shareName = config.shareName;
    this._size = config.size;
    this._snapshotPolicyName = config.snapshotPolicyName;
    this._svmName = config.svmName;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._tieringPolicy = config.tieringPolicy;
    this._unit = config.unit;
    this._users = config.users;
    this._volumeProtocol = config.volumeProtocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // enable_storage_efficiency - computed: false, optional: true, required: false
  private _enableStorageEfficiency?: boolean | cdktf.IResolvable; 
  public get enableStorageEfficiency() {
    return this.getBooleanAttribute('enable_storage_efficiency');
  }
  public set enableStorageEfficiency(value: boolean | cdktf.IResolvable) {
    this._enableStorageEfficiency = value;
  }
  public resetEnableStorageEfficiency() {
    this._enableStorageEfficiency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStorageEfficiencyInput() {
    return this._enableStorageEfficiency;
  }

  // export_policy_ip - computed: false, optional: true, required: false
  private _exportPolicyIp?: string[]; 
  public get exportPolicyIp() {
    return cdktf.Fn.tolist(this.getListAttribute('export_policy_ip'));
  }
  public set exportPolicyIp(value: string[]) {
    this._exportPolicyIp = value;
  }
  public resetExportPolicyIp() {
    this._exportPolicyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyIpInput() {
    return this._exportPolicyIp;
  }

  // export_policy_nfs_version - computed: false, optional: true, required: false
  private _exportPolicyNfsVersion?: string[]; 
  public get exportPolicyNfsVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('export_policy_nfs_version'));
  }
  public set exportPolicyNfsVersion(value: string[]) {
    this._exportPolicyNfsVersion = value;
  }
  public resetExportPolicyNfsVersion() {
    this._exportPolicyNfsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyNfsVersionInput() {
    return this._exportPolicyNfsVersion;
  }

  // export_policy_type - computed: false, optional: true, required: false
  private _exportPolicyType?: string; 
  public get exportPolicyType() {
    return this.getStringAttribute('export_policy_type');
  }
  public set exportPolicyType(value: string) {
    this._exportPolicyType = value;
  }
  public resetExportPolicyType() {
    this._exportPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyTypeInput() {
    return this._exportPolicyType;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
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

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
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

  // snapshot_policy_name - computed: false, optional: true, required: false
  private _snapshotPolicyName?: string; 
  public get snapshotPolicyName() {
    return this.getStringAttribute('snapshot_policy_name');
  }
  public set snapshotPolicyName(value: string) {
    this._snapshotPolicyName = value;
  }
  public resetSnapshotPolicyName() {
    this._snapshotPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyNameInput() {
    return this._snapshotPolicyName;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // volume_protocol - computed: false, optional: false, required: true
  private _volumeProtocol?: string; 
  public get volumeProtocol() {
    return this.getStringAttribute('volume_protocol');
  }
  public set volumeProtocol(value: string) {
    this._volumeProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeProtocolInput() {
    return this._volumeProtocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      enable_storage_efficiency: cdktf.booleanToTerraform(this._enableStorageEfficiency),
      export_policy_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportPolicyIp),
      export_policy_nfs_version: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportPolicyNfsVersion),
      export_policy_type: cdktf.stringToTerraform(this._exportPolicyType),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permission: cdktf.stringToTerraform(this._permission),
      share_name: cdktf.stringToTerraform(this._shareName),
      size: cdktf.numberToTerraform(this._size),
      snapshot_policy_name: cdktf.stringToTerraform(this._snapshotPolicyName),
      svm_name: cdktf.stringToTerraform(this._svmName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tiering_policy: cdktf.stringToTerraform(this._tieringPolicy),
      unit: cdktf.stringToTerraform(this._unit),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      volume_protocol: cdktf.stringToTerraform(this._volumeProtocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_storage_efficiency: {
        value: cdktf.booleanToHclTerraform(this._enableStorageEfficiency),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_policy_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportPolicyIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      export_policy_nfs_version: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportPolicyNfsVersion),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      export_policy_type: {
        value: cdktf.stringToHclTerraform(this._exportPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
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
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_name: {
        value: cdktf.stringToHclTerraform(this._shareName),
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
      snapshot_policy_name: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tiering_policy: {
        value: cdktf.stringToHclTerraform(this._tieringPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      volume_protocol: {
        value: cdktf.stringToHclTerraform(this._volumeProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
