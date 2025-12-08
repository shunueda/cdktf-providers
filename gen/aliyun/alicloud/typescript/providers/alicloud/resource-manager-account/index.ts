// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#abandon_able_check_id ResourceManagerAccount#abandon_able_check_id}
  */
  readonly abandonAbleCheckId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#abandonable_check_id ResourceManagerAccount#abandonable_check_id}
  */
  readonly abandonableCheckId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#account_name_prefix ResourceManagerAccount#account_name_prefix}
  */
  readonly accountNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#display_name ResourceManagerAccount#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#folder_id ResourceManagerAccount#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#force_delete ResourceManagerAccount#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#id ResourceManagerAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#payer_account_id ResourceManagerAccount#payer_account_id}
  */
  readonly payerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#resell_account_type ResourceManagerAccount#resell_account_type}
  */
  readonly resellAccountType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#tags ResourceManagerAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#type ResourceManagerAccount#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#timeouts ResourceManagerAccount#timeouts}
  */
  readonly timeouts?: ResourceManagerAccountTimeouts;
}
export interface ResourceManagerAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#create ResourceManagerAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#delete ResourceManagerAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#update ResourceManagerAccount#update}
  */
  readonly update?: string;
}

export function resourceManagerAccountTimeoutsToTerraform(struct?: ResourceManagerAccountTimeouts | cdktf.IResolvable): any {
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


export function resourceManagerAccountTimeoutsToHclTerraform(struct?: ResourceManagerAccountTimeouts | cdktf.IResolvable): any {
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

export class ResourceManagerAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceManagerAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceManagerAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account alicloud_resource_manager_account}
*/
export class ResourceManagerAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_resource_manager_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerAccount to import
  * @param importFromId The id of the existing ResourceManagerAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_resource_manager_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/resource_manager_account alicloud_resource_manager_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_resource_manager_account',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abandonAbleCheckId = config.abandonAbleCheckId;
    this._abandonableCheckId = config.abandonableCheckId;
    this._accountNamePrefix = config.accountNamePrefix;
    this._displayName = config.displayName;
    this._folderId = config.folderId;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._payerAccountId = config.payerAccountId;
    this._resellAccountType = config.resellAccountType;
    this._tags = config.tags;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abandon_able_check_id - computed: false, optional: true, required: false
  private _abandonAbleCheckId?: string[]; 
  public get abandonAbleCheckId() {
    return this.getListAttribute('abandon_able_check_id');
  }
  public set abandonAbleCheckId(value: string[]) {
    this._abandonAbleCheckId = value;
  }
  public resetAbandonAbleCheckId() {
    this._abandonAbleCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonAbleCheckIdInput() {
    return this._abandonAbleCheckId;
  }

  // abandonable_check_id - computed: false, optional: true, required: false
  private _abandonableCheckId?: string[]; 
  public get abandonableCheckId() {
    return this.getListAttribute('abandonable_check_id');
  }
  public set abandonableCheckId(value: string[]) {
    this._abandonableCheckId = value;
  }
  public resetAbandonableCheckId() {
    this._abandonableCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abandonableCheckIdInput() {
    return this._abandonableCheckId;
  }

  // account_name_prefix - computed: false, optional: true, required: false
  private _accountNamePrefix?: string; 
  public get accountNamePrefix() {
    return this.getStringAttribute('account_name_prefix');
  }
  public set accountNamePrefix(value: string) {
    this._accountNamePrefix = value;
  }
  public resetAccountNamePrefix() {
    this._accountNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNamePrefixInput() {
    return this._accountNamePrefix;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // join_method - computed: true, optional: false, required: false
  public get joinMethod() {
    return this.getStringAttribute('join_method');
  }

  // join_time - computed: true, optional: false, required: false
  public get joinTime() {
    return this.getStringAttribute('join_time');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // payer_account_id - computed: false, optional: true, required: false
  private _payerAccountId?: string; 
  public get payerAccountId() {
    return this.getStringAttribute('payer_account_id');
  }
  public set payerAccountId(value: string) {
    this._payerAccountId = value;
  }
  public resetPayerAccountId() {
    this._payerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payerAccountIdInput() {
    return this._payerAccountId;
  }

  // resell_account_type - computed: false, optional: true, required: false
  private _resellAccountType?: string; 
  public get resellAccountType() {
    return this.getStringAttribute('resell_account_type');
  }
  public set resellAccountType(value: string) {
    this._resellAccountType = value;
  }
  public resetResellAccountType() {
    this._resellAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resellAccountTypeInput() {
    return this._resellAccountType;
  }

  // resource_directory_id - computed: true, optional: false, required: false
  public get resourceDirectoryId() {
    return this.getStringAttribute('resource_directory_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceManagerAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceManagerAccountTimeouts) {
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
      abandon_able_check_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._abandonAbleCheckId),
      abandonable_check_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._abandonableCheckId),
      account_name_prefix: cdktf.stringToTerraform(this._accountNamePrefix),
      display_name: cdktf.stringToTerraform(this._displayName),
      folder_id: cdktf.stringToTerraform(this._folderId),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      payer_account_id: cdktf.stringToTerraform(this._payerAccountId),
      resell_account_type: cdktf.stringToTerraform(this._resellAccountType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      timeouts: resourceManagerAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abandon_able_check_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._abandonAbleCheckId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      abandonable_check_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._abandonableCheckId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      account_name_prefix: {
        value: cdktf.stringToHclTerraform(this._accountNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      payer_account_id: {
        value: cdktf.stringToHclTerraform(this._payerAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resell_account_type: {
        value: cdktf.stringToHclTerraform(this._resellAccountType),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: resourceManagerAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceManagerAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
