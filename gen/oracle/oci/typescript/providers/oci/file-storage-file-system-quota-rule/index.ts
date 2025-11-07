// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileStorageFileSystemQuotaRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#are_violators_only FileStorageFileSystemQuotaRule#are_violators_only}
  */
  readonly areViolatorsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#display_name FileStorageFileSystemQuotaRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#file_system_id FileStorageFileSystemQuotaRule#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#id FileStorageFileSystemQuotaRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#is_hard_quota FileStorageFileSystemQuotaRule#is_hard_quota}
  */
  readonly isHardQuota: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#principal_id FileStorageFileSystemQuotaRule#principal_id}
  */
  readonly principalId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#principal_type FileStorageFileSystemQuotaRule#principal_type}
  */
  readonly principalType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#quota_limit_in_gigabytes FileStorageFileSystemQuotaRule#quota_limit_in_gigabytes}
  */
  readonly quotaLimitInGigabytes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#quota_rule_id FileStorageFileSystemQuotaRule#quota_rule_id}
  */
  readonly quotaRuleId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#timeouts FileStorageFileSystemQuotaRule#timeouts}
  */
  readonly timeouts?: FileStorageFileSystemQuotaRuleTimeouts;
}
export interface FileStorageFileSystemQuotaRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#create FileStorageFileSystemQuotaRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#delete FileStorageFileSystemQuotaRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#update FileStorageFileSystemQuotaRule#update}
  */
  readonly update?: string;
}

export function fileStorageFileSystemQuotaRuleTimeoutsToTerraform(struct?: FileStorageFileSystemQuotaRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fileStorageFileSystemQuotaRuleTimeoutsToHclTerraform(struct?: FileStorageFileSystemQuotaRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageFileSystemQuotaRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FileStorageFileSystemQuotaRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageFileSystemQuotaRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule oci_file_storage_file_system_quota_rule}
*/
export class FileStorageFileSystemQuotaRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_file_storage_file_system_quota_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileStorageFileSystemQuotaRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileStorageFileSystemQuotaRule to import
  * @param importFromId The id of the existing FileStorageFileSystemQuotaRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileStorageFileSystemQuotaRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_file_storage_file_system_quota_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_file_system_quota_rule oci_file_storage_file_system_quota_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileStorageFileSystemQuotaRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FileStorageFileSystemQuotaRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_file_system_quota_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areViolatorsOnly = config.areViolatorsOnly;
    this._displayName = config.displayName;
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._isHardQuota = config.isHardQuota;
    this._principalId = config.principalId;
    this._principalType = config.principalType;
    this._quotaLimitInGigabytes = config.quotaLimitInGigabytes;
    this._quotaRuleId = config.quotaRuleId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_violators_only - computed: false, optional: true, required: false
  private _areViolatorsOnly?: boolean | cdktf.IResolvable; 
  public get areViolatorsOnly() {
    return this.getBooleanAttribute('are_violators_only');
  }
  public set areViolatorsOnly(value: boolean | cdktf.IResolvable) {
    this._areViolatorsOnly = value;
  }
  public resetAreViolatorsOnly() {
    this._areViolatorsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areViolatorsOnlyInput() {
    return this._areViolatorsOnly;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_hard_quota - computed: false, optional: false, required: true
  private _isHardQuota?: boolean | cdktf.IResolvable; 
  public get isHardQuota() {
    return this.getBooleanAttribute('is_hard_quota');
  }
  public set isHardQuota(value: boolean | cdktf.IResolvable) {
    this._isHardQuota = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHardQuotaInput() {
    return this._isHardQuota;
  }

  // principal_id - computed: true, optional: true, required: false
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }

  // quota_limit_in_gigabytes - computed: false, optional: false, required: true
  private _quotaLimitInGigabytes?: number; 
  public get quotaLimitInGigabytes() {
    return this.getNumberAttribute('quota_limit_in_gigabytes');
  }
  public set quotaLimitInGigabytes(value: number) {
    this._quotaLimitInGigabytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaLimitInGigabytesInput() {
    return this._quotaLimitInGigabytes;
  }

  // quota_rule_id - computed: true, optional: true, required: false
  private _quotaRuleId?: string; 
  public get quotaRuleId() {
    return this.getStringAttribute('quota_rule_id');
  }
  public set quotaRuleId(value: string) {
    this._quotaRuleId = value;
  }
  public resetQuotaRuleId() {
    this._quotaRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaRuleIdInput() {
    return this._quotaRuleId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FileStorageFileSystemQuotaRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FileStorageFileSystemQuotaRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      are_violators_only: cdktf.booleanToTerraform(this._areViolatorsOnly),
      display_name: cdktf.stringToTerraform(this._displayName),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      is_hard_quota: cdktf.booleanToTerraform(this._isHardQuota),
      principal_id: cdktf.numberToTerraform(this._principalId),
      principal_type: cdktf.stringToTerraform(this._principalType),
      quota_limit_in_gigabytes: cdktf.numberToTerraform(this._quotaLimitInGigabytes),
      quota_rule_id: cdktf.stringToTerraform(this._quotaRuleId),
      timeouts: fileStorageFileSystemQuotaRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_violators_only: {
        value: cdktf.booleanToHclTerraform(this._areViolatorsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      is_hard_quota: {
        value: cdktf.booleanToHclTerraform(this._isHardQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      principal_id: {
        value: cdktf.numberToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      principal_type: {
        value: cdktf.stringToHclTerraform(this._principalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_limit_in_gigabytes: {
        value: cdktf.numberToHclTerraform(this._quotaLimitInGigabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_rule_id: {
        value: cdktf.stringToHclTerraform(this._quotaRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: fileStorageFileSystemQuotaRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FileStorageFileSystemQuotaRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
