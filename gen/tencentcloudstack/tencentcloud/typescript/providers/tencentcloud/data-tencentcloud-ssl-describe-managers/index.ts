// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSslDescribeManagersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Company ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers#company_id DataTencentcloudSslDescribeManagers#company_id}
  */
  readonly companyId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers#id DataTencentcloudSslDescribeManagers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Vague query manager email (will be abandoned), please use Searchkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers#manager_mail DataTencentcloudSslDescribeManagers#manager_mail}
  */
  readonly managerMail?: string;
  /**
  * Manager&amp;#39;s name (will be abandoned), please use Searchkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers#manager_name DataTencentcloudSslDescribeManagers#manager_name}
  */
  readonly managerName?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers#result_output_file DataTencentcloudSslDescribeManagers#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Manager&amp;#39;s surname/Manager name/mailbox/department precise matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers#search_key DataTencentcloudSslDescribeManagers#search_key}
  */
  readonly searchKey?: string;
  /**
  * Filter according to the status of the manager, and the value is available&amp;#39;None&amp;#39; Unable to submit review&amp;#39;Audit&amp;#39;, Asian Credit Review&amp;#39;Caaudit&amp;#39; CA review&amp;#39;OK&amp;#39; has been reviewed&amp;#39;Invalid&amp;#39; review failed&amp;#39;Expiring&amp;#39; is about to expire&amp;#39;Expired&amp;#39; expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers#status DataTencentcloudSslDescribeManagers#status}
  */
  readonly status?: string;
}
export interface DataTencentcloudSslDescribeManagersManagers {
}

export function dataTencentcloudSslDescribeManagersManagersToTerraform(struct?: DataTencentcloudSslDescribeManagersManagers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeManagersManagersToHclTerraform(struct?: DataTencentcloudSslDescribeManagersManagers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeManagersManagersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudSslDescribeManagersManagers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeManagersManagers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_count - computed: true, optional: false, required: false
  public get certCount() {
    return this.getNumberAttribute('cert_count');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain_count - computed: true, optional: false, required: false
  public get domainCount() {
    return this.getNumberAttribute('domain_count');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // manager_department - computed: true, optional: false, required: false
  public get managerDepartment() {
    return this.getStringAttribute('manager_department');
  }

  // manager_first_name - computed: true, optional: false, required: false
  public get managerFirstName() {
    return this.getStringAttribute('manager_first_name');
  }

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getNumberAttribute('manager_id');
  }

  // manager_last_name - computed: true, optional: false, required: false
  public get managerLastName() {
    return this.getStringAttribute('manager_last_name');
  }

  // manager_mail - computed: true, optional: false, required: false
  public get managerMail() {
    return this.getStringAttribute('manager_mail');
  }

  // manager_phone - computed: true, optional: false, required: false
  public get managerPhone() {
    return this.getStringAttribute('manager_phone');
  }

  // manager_position - computed: true, optional: false, required: false
  public get managerPosition() {
    return this.getStringAttribute('manager_position');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // submit_audit_time - computed: true, optional: false, required: false
  public get submitAuditTime() {
    return this.getStringAttribute('submit_audit_time');
  }

  // verify_time - computed: true, optional: false, required: false
  public get verifyTime() {
    return this.getStringAttribute('verify_time');
  }
}

export class DataTencentcloudSslDescribeManagersManagersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeManagersManagersOutputReference {
    return new DataTencentcloudSslDescribeManagersManagersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers tencentcloud_ssl_describe_managers}
*/
export class DataTencentcloudSslDescribeManagers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_describe_managers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSslDescribeManagers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSslDescribeManagers to import
  * @param importFromId The id of the existing DataTencentcloudSslDescribeManagers that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSslDescribeManagers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_describe_managers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_managers tencentcloud_ssl_describe_managers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSslDescribeManagersConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSslDescribeManagersConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_describe_managers',
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
    this._companyId = config.companyId;
    this._id = config.id;
    this._managerMail = config.managerMail;
    this._managerName = config.managerName;
    this._resultOutputFile = config.resultOutputFile;
    this._searchKey = config.searchKey;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_id - computed: false, optional: false, required: true
  private _companyId?: number; 
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }
  public set companyId(value: number) {
    this._companyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
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

  // manager_mail - computed: false, optional: true, required: false
  private _managerMail?: string; 
  public get managerMail() {
    return this.getStringAttribute('manager_mail');
  }
  public set managerMail(value: string) {
    this._managerMail = value;
  }
  public resetManagerMail() {
    this._managerMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerMailInput() {
    return this._managerMail;
  }

  // manager_name - computed: false, optional: true, required: false
  private _managerName?: string; 
  public get managerName() {
    return this.getStringAttribute('manager_name');
  }
  public set managerName(value: string) {
    this._managerName = value;
  }
  public resetManagerName() {
    this._managerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerNameInput() {
    return this._managerName;
  }

  // managers - computed: true, optional: false, required: false
  private _managers = new DataTencentcloudSslDescribeManagersManagersList(this, "managers", false);
  public get managers() {
    return this._managers;
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

  // search_key - computed: false, optional: true, required: false
  private _searchKey?: string; 
  public get searchKey() {
    return this.getStringAttribute('search_key');
  }
  public set searchKey(value: string) {
    this._searchKey = value;
  }
  public resetSearchKey() {
    this._searchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyInput() {
    return this._searchKey;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_id: cdktf.numberToTerraform(this._companyId),
      id: cdktf.stringToTerraform(this._id),
      manager_mail: cdktf.stringToTerraform(this._managerMail),
      manager_name: cdktf.stringToTerraform(this._managerName),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      search_key: cdktf.stringToTerraform(this._searchKey),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company_id: {
        value: cdktf.numberToHclTerraform(this._companyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_mail: {
        value: cdktf.stringToHclTerraform(this._managerMail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_name: {
        value: cdktf.stringToHclTerraform(this._managerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_key: {
        value: cdktf.stringToHclTerraform(this._searchKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
