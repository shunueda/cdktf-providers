// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDirectMailDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains#enable_details DataAlicloudDirectMailDomains#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains#id DataAlicloudDirectMailDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains#ids DataAlicloudDirectMailDomains#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains#key_word DataAlicloudDirectMailDomains#key_word}
  */
  readonly keyWord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains#name_regex DataAlicloudDirectMailDomains#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains#output_file DataAlicloudDirectMailDomains#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains#status DataAlicloudDirectMailDomains#status}
  */
  readonly status?: string;
}
export interface DataAlicloudDirectMailDomainsDomains {
}

export function dataAlicloudDirectMailDomainsDomainsToTerraform(struct?: DataAlicloudDirectMailDomainsDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDirectMailDomainsDomainsToHclTerraform(struct?: DataAlicloudDirectMailDomainsDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDirectMailDomainsDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDirectMailDomainsDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDirectMailDomainsDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cname_auth_status - computed: true, optional: false, required: false
  public get cnameAuthStatus() {
    return this.getStringAttribute('cname_auth_status');
  }

  // cname_confirm_status - computed: true, optional: false, required: false
  public get cnameConfirmStatus() {
    return this.getStringAttribute('cname_confirm_status');
  }

  // cname_record - computed: true, optional: false, required: false
  public get cnameRecord() {
    return this.getStringAttribute('cname_record');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_domain - computed: true, optional: false, required: false
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }

  // dkim_auth_status - computed: true, optional: false, required: false
  public get dkimAuthStatus() {
    return this.getStringAttribute('dkim_auth_status');
  }

  // dkim_public_key - computed: true, optional: false, required: false
  public get dkimPublicKey() {
    return this.getStringAttribute('dkim_public_key');
  }

  // dkim_rr - computed: true, optional: false, required: false
  public get dkimRr() {
    return this.getStringAttribute('dkim_rr');
  }

  // dmarc_auth_status - computed: true, optional: false, required: false
  public get dmarcAuthStatus() {
    return this.getStringAttribute('dmarc_auth_status');
  }

  // dmarc_host_record - computed: true, optional: false, required: false
  public get dmarcHostRecord() {
    return this.getStringAttribute('dmarc_host_record');
  }

  // dmarc_record - computed: true, optional: false, required: false
  public get dmarcRecord() {
    return this.getStringAttribute('dmarc_record');
  }

  // dns_dmarc - computed: true, optional: false, required: false
  public get dnsDmarc() {
    return this.getStringAttribute('dns_dmarc');
  }

  // dns_mx - computed: true, optional: false, required: false
  public get dnsMx() {
    return this.getStringAttribute('dns_mx');
  }

  // dns_spf - computed: true, optional: false, required: false
  public get dnsSpf() {
    return this.getStringAttribute('dns_spf');
  }

  // dns_txt - computed: true, optional: false, required: false
  public get dnsTxt() {
    return this.getStringAttribute('dns_txt');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_record - computed: true, optional: false, required: false
  public get domainRecord() {
    return this.getStringAttribute('domain_record');
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // host_record - computed: true, optional: false, required: false
  public get hostRecord() {
    return this.getStringAttribute('host_record');
  }

  // icp_status - computed: true, optional: false, required: false
  public get icpStatus() {
    return this.getStringAttribute('icp_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mx_auth_status - computed: true, optional: false, required: false
  public get mxAuthStatus() {
    return this.getStringAttribute('mx_auth_status');
  }

  // mx_record - computed: true, optional: false, required: false
  public get mxRecord() {
    return this.getStringAttribute('mx_record');
  }

  // spf_auth_status - computed: true, optional: false, required: false
  public get spfAuthStatus() {
    return this.getStringAttribute('spf_auth_status');
  }

  // spf_record - computed: true, optional: false, required: false
  public get spfRecord() {
    return this.getStringAttribute('spf_record');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tl_domain_name - computed: true, optional: false, required: false
  public get tlDomainName() {
    return this.getStringAttribute('tl_domain_name');
  }

  // tracef_record - computed: true, optional: false, required: false
  public get tracefRecord() {
    return this.getStringAttribute('tracef_record');
  }
}

export class DataAlicloudDirectMailDomainsDomainsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDirectMailDomainsDomainsOutputReference {
    return new DataAlicloudDirectMailDomainsDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains alicloud_direct_mail_domains}
*/
export class DataAlicloudDirectMailDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_direct_mail_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDirectMailDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDirectMailDomains to import
  * @param importFromId The id of the existing DataAlicloudDirectMailDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDirectMailDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_direct_mail_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/direct_mail_domains alicloud_direct_mail_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDirectMailDomainsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDirectMailDomainsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_direct_mail_domains',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._keyWord = config.keyWord;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domains - computed: true, optional: false, required: false
  private _domains = new DataAlicloudDirectMailDomainsDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // key_word - computed: false, optional: true, required: false
  private _keyWord?: string; 
  public get keyWord() {
    return this.getStringAttribute('key_word');
  }
  public set keyWord(value: string) {
    this._keyWord = value;
  }
  public resetKeyWord() {
    this._keyWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWordInput() {
    return this._keyWord;
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
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      key_word: cdktf.stringToTerraform(this._keyWord),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_word: {
        value: cdktf.stringToHclTerraform(this._keyWord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
