// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCcnTenantInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter by ccn ids, like: ['ccn-12345678'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances#ccn_ids DataTencentcloudCcnTenantInstances#ccn_ids}
  */
  readonly ccnIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances#id DataTencentcloudCcnTenantInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter by locked, like ['true'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances#is_security_lock DataTencentcloudCcnTenantInstances#is_security_lock}
  */
  readonly isSecurityLock?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances#result_output_file DataTencentcloudCcnTenantInstances#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filter by ccn ids, like: ['12345678'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances#user_account_id DataTencentcloudCcnTenantInstances#user_account_id}
  */
  readonly userAccountId?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances tencentcloud_ccn_tenant_instances}
*/
export class DataTencentcloudCcnTenantInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn_tenant_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCcnTenantInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCcnTenantInstances to import
  * @param importFromId The id of the existing DataTencentcloudCcnTenantInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCcnTenantInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn_tenant_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ccn_tenant_instances tencentcloud_ccn_tenant_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCcnTenantInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCcnTenantInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn_tenant_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ccnIds = config.ccnIds;
    this._id = config.id;
    this._isSecurityLock = config.isSecurityLock;
    this._resultOutputFile = config.resultOutputFile;
    this._userAccountId = config.userAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ccn_ids - computed: false, optional: true, required: false
  private _ccnIds?: string[]; 
  public get ccnIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ccn_ids'));
  }
  public set ccnIds(value: string[]) {
    this._ccnIds = value;
  }
  public resetCcnIds() {
    this._ccnIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdsInput() {
    return this._ccnIds;
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

  // is_security_lock - computed: false, optional: true, required: false
  private _isSecurityLock?: string[]; 
  public get isSecurityLock() {
    return cdktf.Fn.tolist(this.getListAttribute('is_security_lock'));
  }
  public set isSecurityLock(value: string[]) {
    this._isSecurityLock = value;
  }
  public resetIsSecurityLock() {
    this._isSecurityLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecurityLockInput() {
    return this._isSecurityLock;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // user_account_id - computed: false, optional: true, required: false
  private _userAccountId?: string[]; 
  public get userAccountId() {
    return cdktf.Fn.tolist(this.getListAttribute('user_account_id'));
  }
  public set userAccountId(value: string[]) {
    this._userAccountId = value;
  }
  public resetUserAccountId() {
    this._userAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountIdInput() {
    return this._userAccountId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ccn_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ccnIds),
      id: cdktf.stringToTerraform(this._id),
      is_security_lock: cdktf.listMapper(cdktf.stringToTerraform, false)(this._isSecurityLock),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      user_account_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ccn_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ccnIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_security_lock: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._isSecurityLock),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_account_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userAccountId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
