// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#description Trail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#id Trail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to target all regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#is_logging_target_all_region Trail#is_logging_target_all_region}
  */
  readonly isLoggingTargetAllRegion: boolean | cdktf.IResolvable;
  /**
  * Whether to log all resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#is_logging_target_all_resource Trail#is_logging_target_all_resource}
  */
  readonly isLoggingTargetAllResource: boolean | cdktf.IResolvable;
  /**
  * Whether for all users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#is_logging_target_all_user Trail#is_logging_target_all_user}
  */
  readonly isLoggingTargetAllUser: boolean | cdktf.IResolvable;
  /**
  * Logging target regions list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#logging_target_regions Trail#logging_target_regions}
  */
  readonly loggingTargetRegions?: string[];
  /**
  * Logging target resource ID list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#logging_target_resource_ids Trail#logging_target_resource_ids}
  */
  readonly loggingTargetResourceIds?: string[];
  /**
  * Logging target user ID list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#logging_target_users Trail#logging_target_users}
  */
  readonly loggingTargetUsers?: string[];
  /**
  * Trail name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#name Trail#name}
  */
  readonly name: string;
  /**
  * Object storage bucket ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#obs_bucket_id Trail#obs_bucket_id}
  */
  readonly obsBucketId: string;
  /**
  * Trail save type. JSON or CSV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#save_type Trail#save_type}
  */
  readonly saveType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#state Trail#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#tags Trail#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Use trail verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#use_verification Trail#use_verification}
  */
  readonly useVerification?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail samsungcloudplatform_trail}
*/
export class Trail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_trail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Trail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Trail to import
  * @param importFromId The id of the existing Trail that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Trail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_trail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/trail samsungcloudplatform_trail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrailConfig
  */
  public constructor(scope: Construct, id: string, config: TrailConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_trail',
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
    this._description = config.description;
    this._id = config.id;
    this._isLoggingTargetAllRegion = config.isLoggingTargetAllRegion;
    this._isLoggingTargetAllResource = config.isLoggingTargetAllResource;
    this._isLoggingTargetAllUser = config.isLoggingTargetAllUser;
    this._loggingTargetRegions = config.loggingTargetRegions;
    this._loggingTargetResourceIds = config.loggingTargetResourceIds;
    this._loggingTargetUsers = config.loggingTargetUsers;
    this._name = config.name;
    this._obsBucketId = config.obsBucketId;
    this._saveType = config.saveType;
    this._state = config.state;
    this._tags = config.tags;
    this._useVerification = config.useVerification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_end_dt - computed: true, optional: false, required: false
  public get batchEndDt() {
    return this.getStringAttribute('batch_end_dt');
  }

  // batch_first_start_dt - computed: true, optional: false, required: false
  public get batchFirstStartDt() {
    return this.getStringAttribute('batch_first_start_dt');
  }

  // batch_last_success_dt - computed: true, optional: false, required: false
  public get batchLastSuccessDt() {
    return this.getStringAttribute('batch_last_success_dt');
  }

  // batch_start_dt - computed: true, optional: false, required: false
  public get batchStartDt() {
    return this.getStringAttribute('batch_start_dt');
  }

  // batch_state - computed: true, optional: false, required: false
  public get batchState() {
    return this.getStringAttribute('batch_state');
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

  // is_logging_target_all_region - computed: false, optional: false, required: true
  private _isLoggingTargetAllRegion?: boolean | cdktf.IResolvable; 
  public get isLoggingTargetAllRegion() {
    return this.getBooleanAttribute('is_logging_target_all_region');
  }
  public set isLoggingTargetAllRegion(value: boolean | cdktf.IResolvable) {
    this._isLoggingTargetAllRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoggingTargetAllRegionInput() {
    return this._isLoggingTargetAllRegion;
  }

  // is_logging_target_all_resource - computed: false, optional: false, required: true
  private _isLoggingTargetAllResource?: boolean | cdktf.IResolvable; 
  public get isLoggingTargetAllResource() {
    return this.getBooleanAttribute('is_logging_target_all_resource');
  }
  public set isLoggingTargetAllResource(value: boolean | cdktf.IResolvable) {
    this._isLoggingTargetAllResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoggingTargetAllResourceInput() {
    return this._isLoggingTargetAllResource;
  }

  // is_logging_target_all_user - computed: false, optional: false, required: true
  private _isLoggingTargetAllUser?: boolean | cdktf.IResolvable; 
  public get isLoggingTargetAllUser() {
    return this.getBooleanAttribute('is_logging_target_all_user');
  }
  public set isLoggingTargetAllUser(value: boolean | cdktf.IResolvable) {
    this._isLoggingTargetAllUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoggingTargetAllUserInput() {
    return this._isLoggingTargetAllUser;
  }

  // logging_target_regions - computed: false, optional: true, required: false
  private _loggingTargetRegions?: string[]; 
  public get loggingTargetRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('logging_target_regions'));
  }
  public set loggingTargetRegions(value: string[]) {
    this._loggingTargetRegions = value;
  }
  public resetLoggingTargetRegions() {
    this._loggingTargetRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTargetRegionsInput() {
    return this._loggingTargetRegions;
  }

  // logging_target_resource_ids - computed: false, optional: true, required: false
  private _loggingTargetResourceIds?: string[]; 
  public get loggingTargetResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('logging_target_resource_ids'));
  }
  public set loggingTargetResourceIds(value: string[]) {
    this._loggingTargetResourceIds = value;
  }
  public resetLoggingTargetResourceIds() {
    this._loggingTargetResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTargetResourceIdsInput() {
    return this._loggingTargetResourceIds;
  }

  // logging_target_users - computed: false, optional: true, required: false
  private _loggingTargetUsers?: string[]; 
  public get loggingTargetUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('logging_target_users'));
  }
  public set loggingTargetUsers(value: string[]) {
    this._loggingTargetUsers = value;
  }
  public resetLoggingTargetUsers() {
    this._loggingTargetUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTargetUsersInput() {
    return this._loggingTargetUsers;
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

  // obs_bucket_id - computed: false, optional: false, required: true
  private _obsBucketId?: string; 
  public get obsBucketId() {
    return this.getStringAttribute('obs_bucket_id');
  }
  public set obsBucketId(value: string) {
    this._obsBucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get obsBucketIdInput() {
    return this._obsBucketId;
  }

  // obs_bucket_name - computed: true, optional: false, required: false
  public get obsBucketName() {
    return this.getStringAttribute('obs_bucket_name');
  }

  // obs_folder_name - computed: true, optional: false, required: false
  public get obsFolderName() {
    return this.getStringAttribute('obs_folder_name');
  }

  // obs_name - computed: true, optional: false, required: false
  public get obsName() {
    return this.getStringAttribute('obs_name');
  }

  // save_type - computed: false, optional: false, required: true
  private _saveType?: string; 
  public get saveType() {
    return this.getStringAttribute('save_type');
  }
  public set saveType(value: string) {
    this._saveType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saveTypeInput() {
    return this._saveType;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // use_verification - computed: false, optional: true, required: false
  private _useVerification?: boolean | cdktf.IResolvable; 
  public get useVerification() {
    return this.getBooleanAttribute('use_verification');
  }
  public set useVerification(value: boolean | cdktf.IResolvable) {
    this._useVerification = value;
  }
  public resetUseVerification() {
    this._useVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVerificationInput() {
    return this._useVerification;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_logging_target_all_region: cdktf.booleanToTerraform(this._isLoggingTargetAllRegion),
      is_logging_target_all_resource: cdktf.booleanToTerraform(this._isLoggingTargetAllResource),
      is_logging_target_all_user: cdktf.booleanToTerraform(this._isLoggingTargetAllUser),
      logging_target_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loggingTargetRegions),
      logging_target_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loggingTargetResourceIds),
      logging_target_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loggingTargetUsers),
      name: cdktf.stringToTerraform(this._name),
      obs_bucket_id: cdktf.stringToTerraform(this._obsBucketId),
      save_type: cdktf.stringToTerraform(this._saveType),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_verification: cdktf.booleanToTerraform(this._useVerification),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_logging_target_all_region: {
        value: cdktf.booleanToHclTerraform(this._isLoggingTargetAllRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_logging_target_all_resource: {
        value: cdktf.booleanToHclTerraform(this._isLoggingTargetAllResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_logging_target_all_user: {
        value: cdktf.booleanToHclTerraform(this._isLoggingTargetAllUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging_target_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loggingTargetRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      logging_target_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loggingTargetResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      logging_target_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loggingTargetUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obs_bucket_id: {
        value: cdktf.stringToHclTerraform(this._obsBucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_type: {
        value: cdktf.stringToHclTerraform(this._saveType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
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
      use_verification: {
        value: cdktf.booleanToHclTerraform(this._useVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
