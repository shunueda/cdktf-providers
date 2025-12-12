// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsbProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#api_num CsbProject#api_num}
  */
  readonly apiNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#cs_id CsbProject#cs_id}
  */
  readonly csId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#csb_id CsbProject#csb_id}
  */
  readonly csbId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#data CsbProject#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#delete_flag CsbProject#delete_flag}
  */
  readonly deleteFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#gmt_create CsbProject#gmt_create}
  */
  readonly gmtCreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#gmt_modified CsbProject#gmt_modified}
  */
  readonly gmtModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#id CsbProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#owner_id CsbProject#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#project_name CsbProject#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#project_owner_name CsbProject#project_owner_name}
  */
  readonly projectOwnerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#status CsbProject#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#user_id CsbProject#user_id}
  */
  readonly userId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#timeouts CsbProject#timeouts}
  */
  readonly timeouts?: CsbProjectTimeouts;
}
export interface CsbProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#update CsbProject#update}
  */
  readonly update?: string;
}

export function csbProjectTimeoutsToTerraform(struct?: CsbProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function csbProjectTimeoutsToHclTerraform(struct?: CsbProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CsbProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsbProjectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsbProjectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._update = value.update;
    }
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project alibabacloudstack_csb_project}
*/
export class CsbProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_csb_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsbProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsbProject to import
  * @param importFromId The id of the existing CsbProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsbProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_csb_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/csb_project alibabacloudstack_csb_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsbProjectConfig
  */
  public constructor(scope: Construct, id: string, config: CsbProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_csb_project',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiNum = config.apiNum;
    this._csId = config.csId;
    this._csbId = config.csbId;
    this._data = config.data;
    this._deleteFlag = config.deleteFlag;
    this._gmtCreate = config.gmtCreate;
    this._gmtModified = config.gmtModified;
    this._id = config.id;
    this._ownerId = config.ownerId;
    this._projectName = config.projectName;
    this._projectOwnerName = config.projectOwnerName;
    this._status = config.status;
    this._userId = config.userId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_num - computed: false, optional: true, required: false
  private _apiNum?: string; 
  public get apiNum() {
    return this.getStringAttribute('api_num');
  }
  public set apiNum(value: string) {
    this._apiNum = value;
  }
  public resetApiNum() {
    this._apiNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNumInput() {
    return this._apiNum;
  }

  // cs_id - computed: false, optional: true, required: false
  private _csId?: string; 
  public get csId() {
    return this.getStringAttribute('cs_id');
  }
  public set csId(value: string) {
    this._csId = value;
  }
  public resetCsId() {
    this._csId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csIdInput() {
    return this._csId;
  }

  // csb_id - computed: false, optional: false, required: true
  private _csbId?: string; 
  public get csbId() {
    return this.getStringAttribute('csb_id');
  }
  public set csbId(value: string) {
    this._csbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csbIdInput() {
    return this._csbId;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // delete_flag - computed: false, optional: true, required: false
  private _deleteFlag?: string; 
  public get deleteFlag() {
    return this.getStringAttribute('delete_flag');
  }
  public set deleteFlag(value: string) {
    this._deleteFlag = value;
  }
  public resetDeleteFlag() {
    this._deleteFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteFlagInput() {
    return this._deleteFlag;
  }

  // gmt_create - computed: false, optional: true, required: false
  private _gmtCreate?: string; 
  public get gmtCreate() {
    return this.getStringAttribute('gmt_create');
  }
  public set gmtCreate(value: string) {
    this._gmtCreate = value;
  }
  public resetGmtCreate() {
    this._gmtCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmtCreateInput() {
    return this._gmtCreate;
  }

  // gmt_modified - computed: false, optional: true, required: false
  private _gmtModified?: string; 
  public get gmtModified() {
    return this.getStringAttribute('gmt_modified');
  }
  public set gmtModified(value: string) {
    this._gmtModified = value;
  }
  public resetGmtModified() {
    this._gmtModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmtModifiedInput() {
    return this._gmtModified;
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

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // project_owner_name - computed: false, optional: true, required: false
  private _projectOwnerName?: string; 
  public get projectOwnerName() {
    return this.getStringAttribute('project_owner_name');
  }
  public set projectOwnerName(value: string) {
    this._projectOwnerName = value;
  }
  public resetProjectOwnerName() {
    this._projectOwnerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectOwnerNameInput() {
    return this._projectOwnerName;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsbProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsbProjectTimeouts) {
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
      api_num: cdktf.stringToTerraform(this._apiNum),
      cs_id: cdktf.stringToTerraform(this._csId),
      csb_id: cdktf.stringToTerraform(this._csbId),
      data: cdktf.stringToTerraform(this._data),
      delete_flag: cdktf.stringToTerraform(this._deleteFlag),
      gmt_create: cdktf.stringToTerraform(this._gmtCreate),
      gmt_modified: cdktf.stringToTerraform(this._gmtModified),
      id: cdktf.stringToTerraform(this._id),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      project_name: cdktf.stringToTerraform(this._projectName),
      project_owner_name: cdktf.stringToTerraform(this._projectOwnerName),
      status: cdktf.stringToTerraform(this._status),
      user_id: cdktf.stringToTerraform(this._userId),
      timeouts: csbProjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_num: {
        value: cdktf.stringToHclTerraform(this._apiNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cs_id: {
        value: cdktf.stringToHclTerraform(this._csId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csb_id: {
        value: cdktf.stringToHclTerraform(this._csbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_flag: {
        value: cdktf.stringToHclTerraform(this._deleteFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gmt_create: {
        value: cdktf.stringToHclTerraform(this._gmtCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gmt_modified: {
        value: cdktf.stringToHclTerraform(this._gmtModified),
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
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_owner_name: {
        value: cdktf.stringToHclTerraform(this._projectOwnerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: csbProjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsbProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
