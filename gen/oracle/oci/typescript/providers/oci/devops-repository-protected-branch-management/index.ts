// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsRepositoryProtectedBranchManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#branch_name DevopsRepositoryProtectedBranchManagement#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#id DevopsRepositoryProtectedBranchManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#protection_levels DevopsRepositoryProtectedBranchManagement#protection_levels}
  */
  readonly protectionLevels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#repository_id DevopsRepositoryProtectedBranchManagement#repository_id}
  */
  readonly repositoryId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#timeouts DevopsRepositoryProtectedBranchManagement#timeouts}
  */
  readonly timeouts?: DevopsRepositoryProtectedBranchManagementTimeouts;
}
export interface DevopsRepositoryProtectedBranchManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#create DevopsRepositoryProtectedBranchManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#delete DevopsRepositoryProtectedBranchManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#update DevopsRepositoryProtectedBranchManagement#update}
  */
  readonly update?: string;
}

export function devopsRepositoryProtectedBranchManagementTimeoutsToTerraform(struct?: DevopsRepositoryProtectedBranchManagementTimeouts | cdktf.IResolvable): any {
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


export function devopsRepositoryProtectedBranchManagementTimeoutsToHclTerraform(struct?: DevopsRepositoryProtectedBranchManagementTimeouts | cdktf.IResolvable): any {
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

export class DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsRepositoryProtectedBranchManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DevopsRepositoryProtectedBranchManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management oci_devops_repository_protected_branch_management}
*/
export class DevopsRepositoryProtectedBranchManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_repository_protected_branch_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsRepositoryProtectedBranchManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsRepositoryProtectedBranchManagement to import
  * @param importFromId The id of the existing DevopsRepositoryProtectedBranchManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsRepositoryProtectedBranchManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_repository_protected_branch_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_repository_protected_branch_management oci_devops_repository_protected_branch_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsRepositoryProtectedBranchManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsRepositoryProtectedBranchManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_repository_protected_branch_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branchName = config.branchName;
    this._id = config.id;
    this._protectionLevels = config.protectionLevels;
    this._repositoryId = config.repositoryId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_name - computed: false, optional: false, required: true
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
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

  // protection_levels - computed: true, optional: true, required: false
  private _protectionLevels?: string[]; 
  public get protectionLevels() {
    return this.getListAttribute('protection_levels');
  }
  public set protectionLevels(value: string[]) {
    this._protectionLevels = value;
  }
  public resetProtectionLevels() {
    this._protectionLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelsInput() {
    return this._protectionLevels;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsRepositoryProtectedBranchManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsRepositoryProtectedBranchManagementTimeouts) {
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
      branch_name: cdktf.stringToTerraform(this._branchName),
      id: cdktf.stringToTerraform(this._id),
      protection_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protectionLevels),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      timeouts: devopsRepositoryProtectedBranchManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch_name: {
        value: cdktf.stringToHclTerraform(this._branchName),
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
      protection_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protectionLevels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: devopsRepositoryProtectedBranchManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsRepositoryProtectedBranchManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
