// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmbShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * To specify the ACL access options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#aces SmbShare#aces}
  */
  readonly aces?: SmbShareAces[] | cdktf.IResolvable;
  /**
  * User defined SMB share description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#description SmbShare#description}
  */
  readonly description?: string;
  /**
  * The unique identifier of the file system on which the SMB Share is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#file_system_id SmbShare#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Whether Access-based Enumeration (ABE) is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#is_abe_enabled SmbShare#is_abe_enabled}
  */
  readonly isAbeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether BranchCache optimization is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#is_branch_cache_enabled SmbShare#is_branch_cache_enabled}
  */
  readonly isBranchCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether continuous availability for Server Message Block (SMB) 3.0 is enabled for the SMB Share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#is_continuous_availability_enabled SmbShare#is_continuous_availability_enabled}
  */
  readonly isContinuousAvailabilityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether encryption for Server Message Block (SMB) 3.0 is enabled at the shared folder level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#is_encryption_enabled SmbShare#is_encryption_enabled}
  */
  readonly isEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the SMB Share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#name SmbShare#name}
  */
  readonly name: string;
  /**
  * Defines valid states of Offline Availability, where the states are: `Manual` - Only specified files will be available offline. `Documents` - All files that users open will be available offline. `Programs` - Program will preferably run from the offline cache even when connected to the network. All files that users open will be available offline. `None` - Prevents clients from storing documents and programs in offline cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#offline_availability SmbShare#offline_availability}
  */
  readonly offlineAvailability?: string;
  /**
  * The local path to export relative to the NAS Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#path SmbShare#path}
  */
  readonly path: string;
  /**
  * The default UNIX umask for new files created on the Share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#umask SmbShare#umask}
  */
  readonly umask?: string;
}
export interface SmbShareAces {
  /**
  * The access level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#access_level SmbShare#access_level}
  */
  readonly accessLevel: string;
  /**
  * The access type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#access_type SmbShare#access_type}
  */
  readonly accessType: string;
  /**
  * The name of the trustee.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#trustee_name SmbShare#trustee_name}
  */
  readonly trusteeName: string;
  /**
  * The type of the trustee.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#trustee_type SmbShare#trustee_type}
  */
  readonly trusteeType: string;
}

export function smbShareAcesToTerraform(struct?: SmbShareAces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    access_type: cdktf.stringToTerraform(struct!.accessType),
    trustee_name: cdktf.stringToTerraform(struct!.trusteeName),
    trustee_type: cdktf.stringToTerraform(struct!.trusteeType),
  }
}


export function smbShareAcesToHclTerraform(struct?: SmbShareAces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trustee_name: {
      value: cdktf.stringToHclTerraform(struct!.trusteeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trustee_type: {
      value: cdktf.stringToHclTerraform(struct!.trusteeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmbShareAcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmbShareAces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._trusteeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trusteeName = this._trusteeName;
    }
    if (this._trusteeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trusteeType = this._trusteeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmbShareAces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._accessType = undefined;
      this._trusteeName = undefined;
      this._trusteeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._accessType = value.accessType;
      this._trusteeName = value.trusteeName;
      this._trusteeType = value.trusteeType;
    }
  }

  // access_level - computed: true, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // access_type - computed: true, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // trustee_name - computed: true, optional: false, required: true
  private _trusteeName?: string; 
  public get trusteeName() {
    return this.getStringAttribute('trustee_name');
  }
  public set trusteeName(value: string) {
    this._trusteeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trusteeNameInput() {
    return this._trusteeName;
  }

  // trustee_type - computed: true, optional: false, required: true
  private _trusteeType?: string; 
  public get trusteeType() {
    return this.getStringAttribute('trustee_type');
  }
  public set trusteeType(value: string) {
    this._trusteeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trusteeTypeInput() {
    return this._trusteeType;
  }
}

export class SmbShareAcesList extends cdktf.ComplexList {
  public internalValue? : SmbShareAces[] | cdktf.IResolvable

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
  public get(index: number): SmbShareAcesOutputReference {
    return new SmbShareAcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share powerstore_smb_share}
*/
export class SmbShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_smb_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmbShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmbShare to import
  * @param importFromId The id of the existing SmbShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmbShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_smb_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/smb_share powerstore_smb_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmbShareConfig
  */
  public constructor(scope: Construct, id: string, config: SmbShareConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_smb_share',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aces.internalValue = config.aces;
    this._description = config.description;
    this._fileSystemId = config.fileSystemId;
    this._isAbeEnabled = config.isAbeEnabled;
    this._isBranchCacheEnabled = config.isBranchCacheEnabled;
    this._isContinuousAvailabilityEnabled = config.isContinuousAvailabilityEnabled;
    this._isEncryptionEnabled = config.isEncryptionEnabled;
    this._name = config.name;
    this._offlineAvailability = config.offlineAvailability;
    this._path = config.path;
    this._umask = config.umask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aces - computed: true, optional: true, required: false
  private _aces = new SmbShareAcesList(this, "aces", true);
  public get aces() {
    return this._aces;
  }
  public putAces(value: SmbShareAces[] | cdktf.IResolvable) {
    this._aces.internalValue = value;
  }
  public resetAces() {
    this._aces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acesInput() {
    return this._aces.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_abe_enabled - computed: true, optional: true, required: false
  private _isAbeEnabled?: boolean | cdktf.IResolvable; 
  public get isAbeEnabled() {
    return this.getBooleanAttribute('is_abe_enabled');
  }
  public set isAbeEnabled(value: boolean | cdktf.IResolvable) {
    this._isAbeEnabled = value;
  }
  public resetIsAbeEnabled() {
    this._isAbeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAbeEnabledInput() {
    return this._isAbeEnabled;
  }

  // is_branch_cache_enabled - computed: true, optional: true, required: false
  private _isBranchCacheEnabled?: boolean | cdktf.IResolvable; 
  public get isBranchCacheEnabled() {
    return this.getBooleanAttribute('is_branch_cache_enabled');
  }
  public set isBranchCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._isBranchCacheEnabled = value;
  }
  public resetIsBranchCacheEnabled() {
    this._isBranchCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBranchCacheEnabledInput() {
    return this._isBranchCacheEnabled;
  }

  // is_continuous_availability_enabled - computed: true, optional: true, required: false
  private _isContinuousAvailabilityEnabled?: boolean | cdktf.IResolvable; 
  public get isContinuousAvailabilityEnabled() {
    return this.getBooleanAttribute('is_continuous_availability_enabled');
  }
  public set isContinuousAvailabilityEnabled(value: boolean | cdktf.IResolvable) {
    this._isContinuousAvailabilityEnabled = value;
  }
  public resetIsContinuousAvailabilityEnabled() {
    this._isContinuousAvailabilityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContinuousAvailabilityEnabledInput() {
    return this._isContinuousAvailabilityEnabled;
  }

  // is_encryption_enabled - computed: true, optional: true, required: false
  private _isEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get isEncryptionEnabled() {
    return this.getBooleanAttribute('is_encryption_enabled');
  }
  public set isEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._isEncryptionEnabled = value;
  }
  public resetIsEncryptionEnabled() {
    this._isEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncryptionEnabledInput() {
    return this._isEncryptionEnabled;
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

  // offline_availability - computed: true, optional: true, required: false
  private _offlineAvailability?: string; 
  public get offlineAvailability() {
    return this.getStringAttribute('offline_availability');
  }
  public set offlineAvailability(value: string) {
    this._offlineAvailability = value;
  }
  public resetOfflineAvailability() {
    this._offlineAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineAvailabilityInput() {
    return this._offlineAvailability;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // umask - computed: true, optional: true, required: false
  private _umask?: string; 
  public get umask() {
    return this.getStringAttribute('umask');
  }
  public set umask(value: string) {
    this._umask = value;
  }
  public resetUmask() {
    this._umask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umaskInput() {
    return this._umask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aces: cdktf.listMapper(smbShareAcesToTerraform, false)(this._aces.internalValue),
      description: cdktf.stringToTerraform(this._description),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      is_abe_enabled: cdktf.booleanToTerraform(this._isAbeEnabled),
      is_branch_cache_enabled: cdktf.booleanToTerraform(this._isBranchCacheEnabled),
      is_continuous_availability_enabled: cdktf.booleanToTerraform(this._isContinuousAvailabilityEnabled),
      is_encryption_enabled: cdktf.booleanToTerraform(this._isEncryptionEnabled),
      name: cdktf.stringToTerraform(this._name),
      offline_availability: cdktf.stringToTerraform(this._offlineAvailability),
      path: cdktf.stringToTerraform(this._path),
      umask: cdktf.stringToTerraform(this._umask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aces: {
        value: cdktf.listMapperHcl(smbShareAcesToHclTerraform, false)(this._aces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SmbShareAcesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_abe_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAbeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_branch_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._isBranchCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_continuous_availability_enabled: {
        value: cdktf.booleanToHclTerraform(this._isContinuousAvailabilityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline_availability: {
        value: cdktf.stringToHclTerraform(this._offlineAvailability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      umask: {
        value: cdktf.stringToHclTerraform(this._umask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
