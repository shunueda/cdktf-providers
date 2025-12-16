// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_manager_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSslDescribeManagerDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_manager_detail#id DataTencentcloudSslDescribeManagerDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Manager ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_manager_detail#manager_id DataTencentcloudSslDescribeManagerDetail#manager_id}
  */
  readonly managerId: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_manager_detail#result_output_file DataTencentcloudSslDescribeManagerDetail#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudSslDescribeManagerDetailCompanyInfo {
}

export function dataTencentcloudSslDescribeManagerDetailCompanyInfoToTerraform(struct?: DataTencentcloudSslDescribeManagerDetailCompanyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSslDescribeManagerDetailCompanyInfoToHclTerraform(struct?: DataTencentcloudSslDescribeManagerDetailCompanyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSslDescribeManagerDetailCompanyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSslDescribeManagerDetailCompanyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSslDescribeManagerDetailCompanyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // company_address - computed: true, optional: false, required: false
  public get companyAddress() {
    return this.getStringAttribute('company_address');
  }

  // company_city - computed: true, optional: false, required: false
  public get companyCity() {
    return this.getStringAttribute('company_city');
  }

  // company_country - computed: true, optional: false, required: false
  public get companyCountry() {
    return this.getStringAttribute('company_country');
  }

  // company_id - computed: true, optional: false, required: false
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // company_phone - computed: true, optional: false, required: false
  public get companyPhone() {
    return this.getStringAttribute('company_phone');
  }

  // company_province - computed: true, optional: false, required: false
  public get companyProvince() {
    return this.getStringAttribute('company_province');
  }

  // id_number - computed: true, optional: false, required: false
  public get idNumber() {
    return this.getStringAttribute('id_number');
  }

  // id_type - computed: true, optional: false, required: false
  public get idType() {
    return this.getStringAttribute('id_type');
  }
}

export class DataTencentcloudSslDescribeManagerDetailCompanyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSslDescribeManagerDetailCompanyInfoOutputReference {
    return new DataTencentcloudSslDescribeManagerDetailCompanyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_manager_detail tencentcloud_ssl_describe_manager_detail}
*/
export class DataTencentcloudSslDescribeManagerDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_describe_manager_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSslDescribeManagerDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSslDescribeManagerDetail to import
  * @param importFromId The id of the existing DataTencentcloudSslDescribeManagerDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_manager_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSslDescribeManagerDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_describe_manager_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/data-sources/ssl_describe_manager_detail tencentcloud_ssl_describe_manager_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSslDescribeManagerDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSslDescribeManagerDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_describe_manager_detail',
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
    this._id = config.id;
    this._managerId = config.managerId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_id - computed: true, optional: false, required: false
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }

  // company_info - computed: true, optional: false, required: false
  private _companyInfo = new DataTencentcloudSslDescribeManagerDetailCompanyInfoList(this, "company_info", false);
  public get companyInfo() {
    return this._companyInfo;
  }

  // contact_first_name - computed: true, optional: false, required: false
  public get contactFirstName() {
    return this.getStringAttribute('contact_first_name');
  }

  // contact_last_name - computed: true, optional: false, required: false
  public get contactLastName() {
    return this.getStringAttribute('contact_last_name');
  }

  // contact_mail - computed: true, optional: false, required: false
  public get contactMail() {
    return this.getStringAttribute('contact_mail');
  }

  // contact_phone - computed: true, optional: false, required: false
  public get contactPhone() {
    return this.getStringAttribute('contact_phone');
  }

  // contact_position - computed: true, optional: false, required: false
  public get contactPosition() {
    return this.getStringAttribute('contact_position');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
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

  // manager_department - computed: true, optional: false, required: false
  public get managerDepartment() {
    return this.getStringAttribute('manager_department');
  }

  // manager_first_name - computed: true, optional: false, required: false
  public get managerFirstName() {
    return this.getStringAttribute('manager_first_name');
  }

  // manager_id - computed: false, optional: false, required: true
  private _managerId?: number; 
  public get managerId() {
    return this.getNumberAttribute('manager_id');
  }
  public set managerId(value: number) {
    this._managerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // verify_time - computed: true, optional: false, required: false
  public get verifyTime() {
    return this.getStringAttribute('verify_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      manager_id: cdktf.numberToTerraform(this._managerId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_id: {
        value: cdktf.numberToHclTerraform(this._managerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
