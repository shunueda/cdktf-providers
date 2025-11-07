// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEcdSimpleOfficeSitesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites#id DataAlicloudEcdSimpleOfficeSites#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites#ids DataAlicloudEcdSimpleOfficeSites#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites#name_regex DataAlicloudEcdSimpleOfficeSites#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites#output_file DataAlicloudEcdSimpleOfficeSites#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites#status DataAlicloudEcdSimpleOfficeSites#status}
  */
  readonly status?: string;
}
export interface DataAlicloudEcdSimpleOfficeSitesSites {
}

export function dataAlicloudEcdSimpleOfficeSitesSitesToTerraform(struct?: DataAlicloudEcdSimpleOfficeSitesSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcdSimpleOfficeSitesSitesToHclTerraform(struct?: DataAlicloudEcdSimpleOfficeSitesSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcdSimpleOfficeSitesSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcdSimpleOfficeSitesSites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcdSimpleOfficeSitesSites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // cen_id - computed: true, optional: false, required: false
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // custom_security_group_id - computed: true, optional: false, required: false
  public get customSecurityGroupId() {
    return this.getStringAttribute('custom_security_group_id');
  }

  // desktop_access_type - computed: true, optional: false, required: false
  public get desktopAccessType() {
    return this.getStringAttribute('desktop_access_type');
  }

  // desktop_vpc_endpoint - computed: true, optional: false, required: false
  public get desktopVpcEndpoint() {
    return this.getStringAttribute('desktop_vpc_endpoint');
  }

  // dns_address - computed: true, optional: false, required: false
  public get dnsAddress() {
    return this.getListAttribute('dns_address');
  }

  // dns_user_name - computed: true, optional: false, required: false
  public get dnsUserName() {
    return this.getStringAttribute('dns_user_name');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_password - computed: true, optional: false, required: false
  public get domainPassword() {
    return this.getStringAttribute('domain_password');
  }

  // domain_user_name - computed: true, optional: false, required: false
  public get domainUserName() {
    return this.getStringAttribute('domain_user_name');
  }

  // enable_admin_access - computed: true, optional: false, required: false
  public get enableAdminAccess() {
    return this.getBooleanAttribute('enable_admin_access');
  }

  // enable_cross_desktop_access - computed: true, optional: false, required: false
  public get enableCrossDesktopAccess() {
    return this.getBooleanAttribute('enable_cross_desktop_access');
  }

  // enable_internet_access - computed: true, optional: false, required: false
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }

  // file_system_ids - computed: true, optional: false, required: false
  public get fileSystemIds() {
    return this.getListAttribute('file_system_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mfa_enabled - computed: true, optional: false, required: false
  public get mfaEnabled() {
    return this.getBooleanAttribute('mfa_enabled');
  }

  // network_package_id - computed: true, optional: false, required: false
  public get networkPackageId() {
    return this.getStringAttribute('network_package_id');
  }

  // office_site_id - computed: true, optional: false, required: false
  public get officeSiteId() {
    return this.getStringAttribute('office_site_id');
  }

  // office_site_type - computed: true, optional: false, required: false
  public get officeSiteType() {
    return this.getStringAttribute('office_site_type');
  }

  // simple_office_site_name - computed: true, optional: false, required: false
  public get simpleOfficeSiteName() {
    return this.getStringAttribute('simple_office_site_name');
  }

  // sso_enabled - computed: true, optional: false, required: false
  public get ssoEnabled() {
    return this.getBooleanAttribute('sso_enabled');
  }

  // sso_status - computed: true, optional: false, required: false
  public get ssoStatus() {
    return this.getBooleanAttribute('sso_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_dns_address - computed: true, optional: false, required: false
  public get subDnsAddress() {
    return this.getListAttribute('sub_dns_address');
  }

  // sub_domain_name - computed: true, optional: false, required: false
  public get subDomainName() {
    return this.getStringAttribute('sub_domain_name');
  }

  // trust_password - computed: true, optional: false, required: false
  public get trustPassword() {
    return this.getStringAttribute('trust_password');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_ids - computed: true, optional: false, required: false
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
}

export class DataAlicloudEcdSimpleOfficeSitesSitesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcdSimpleOfficeSitesSitesOutputReference {
    return new DataAlicloudEcdSimpleOfficeSitesSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites alicloud_ecd_simple_office_sites}
*/
export class DataAlicloudEcdSimpleOfficeSites extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_simple_office_sites";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEcdSimpleOfficeSites resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEcdSimpleOfficeSites to import
  * @param importFromId The id of the existing DataAlicloudEcdSimpleOfficeSites that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEcdSimpleOfficeSites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_simple_office_sites", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/ecd_simple_office_sites alicloud_ecd_simple_office_sites} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEcdSimpleOfficeSitesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEcdSimpleOfficeSitesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_simple_office_sites',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // sites - computed: true, optional: false, required: false
  private _sites = new DataAlicloudEcdSimpleOfficeSitesSitesList(this, "sites", false);
  public get sites() {
    return this._sites;
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
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
