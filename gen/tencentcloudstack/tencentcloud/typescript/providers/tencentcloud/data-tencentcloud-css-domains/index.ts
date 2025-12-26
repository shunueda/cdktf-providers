// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCssDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * domain name prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains#domain_prefix DataTencentcloudCssDomains#domain_prefix}
  */
  readonly domainPrefix?: string;
  /**
  * domain name status filter. 0-disable, 1-enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains#domain_status DataTencentcloudCssDomains#domain_status}
  */
  readonly domainStatus?: number;
  /**
  * Domain name type filtering. 0-push, 1-play.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains#domain_type DataTencentcloudCssDomains#domain_type}
  */
  readonly domainType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains#id DataTencentcloudCssDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 0 normal live broadcast 1 slow live broadcast default 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains#is_delay_live DataTencentcloudCssDomains#is_delay_live}
  */
  readonly isDelayLive?: number;
  /**
  * Playing area, this parameter is meaningful only when DomainType=1. 1: Domestic.2: Global.3: Overseas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains#play_type DataTencentcloudCssDomains#play_type}
  */
  readonly playType?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains#result_output_file DataTencentcloudCssDomains#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudCssDomainsDomainListStruct {
}

export function dataTencentcloudCssDomainsDomainListStructToTerraform(struct?: DataTencentcloudCssDomainsDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCssDomainsDomainListStructToHclTerraform(struct?: DataTencentcloudCssDomainsDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCssDomainsDomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCssDomainsDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCssDomainsDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // b_c_name - computed: true, optional: false, required: false
  public get bCName() {
    return this.getNumberAttribute('b_c_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current_c_name - computed: true, optional: false, required: false
  public get currentCName() {
    return this.getStringAttribute('current_c_name');
  }

  // is_delay_live - computed: true, optional: false, required: false
  public get isDelayLive() {
    return this.getNumberAttribute('is_delay_live');
  }

  // is_mini_program_live - computed: true, optional: false, required: false
  public get isMiniProgramLive() {
    return this.getNumberAttribute('is_mini_program_live');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // play_type - computed: true, optional: false, required: false
  public get playType() {
    return this.getNumberAttribute('play_type');
  }

  // rent_expire_time - computed: true, optional: false, required: false
  public get rentExpireTime() {
    return this.getStringAttribute('rent_expire_time');
  }

  // rent_tag - computed: true, optional: false, required: false
  public get rentTag() {
    return this.getNumberAttribute('rent_tag');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // target_domain - computed: true, optional: false, required: false
  public get targetDomain() {
    return this.getStringAttribute('target_domain');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataTencentcloudCssDomainsDomainListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCssDomainsDomainListStructOutputReference {
    return new DataTencentcloudCssDomainsDomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains tencentcloud_css_domains}
*/
export class DataTencentcloudCssDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCssDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCssDomains to import
  * @param importFromId The id of the existing DataTencentcloudCssDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCssDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/css_domains tencentcloud_css_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCssDomainsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCssDomainsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_domains',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainPrefix = config.domainPrefix;
    this._domainStatus = config.domainStatus;
    this._domainType = config.domainType;
    this._id = config.id;
    this._isDelayLive = config.isDelayLive;
    this._playType = config.playType;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_list - computed: true, optional: false, required: false
  private _domainList = new DataTencentcloudCssDomainsDomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
  }

  // domain_prefix - computed: false, optional: true, required: false
  private _domainPrefix?: string; 
  public get domainPrefix() {
    return this.getStringAttribute('domain_prefix');
  }
  public set domainPrefix(value: string) {
    this._domainPrefix = value;
  }
  public resetDomainPrefix() {
    this._domainPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPrefixInput() {
    return this._domainPrefix;
  }

  // domain_status - computed: false, optional: true, required: false
  private _domainStatus?: number; 
  public get domainStatus() {
    return this.getNumberAttribute('domain_status');
  }
  public set domainStatus(value: number) {
    this._domainStatus = value;
  }
  public resetDomainStatus() {
    this._domainStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainStatusInput() {
    return this._domainStatus;
  }

  // domain_type - computed: false, optional: true, required: false
  private _domainType?: number; 
  public get domainType() {
    return this.getNumberAttribute('domain_type');
  }
  public set domainType(value: number) {
    this._domainType = value;
  }
  public resetDomainType() {
    this._domainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainTypeInput() {
    return this._domainType;
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

  // is_delay_live - computed: false, optional: true, required: false
  private _isDelayLive?: number; 
  public get isDelayLive() {
    return this.getNumberAttribute('is_delay_live');
  }
  public set isDelayLive(value: number) {
    this._isDelayLive = value;
  }
  public resetIsDelayLive() {
    this._isDelayLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDelayLiveInput() {
    return this._isDelayLive;
  }

  // play_type - computed: false, optional: true, required: false
  private _playType?: number; 
  public get playType() {
    return this.getNumberAttribute('play_type');
  }
  public set playType(value: number) {
    this._playType = value;
  }
  public resetPlayType() {
    this._playType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playTypeInput() {
    return this._playType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_prefix: cdktf.stringToTerraform(this._domainPrefix),
      domain_status: cdktf.numberToTerraform(this._domainStatus),
      domain_type: cdktf.numberToTerraform(this._domainType),
      id: cdktf.stringToTerraform(this._id),
      is_delay_live: cdktf.numberToTerraform(this._isDelayLive),
      play_type: cdktf.numberToTerraform(this._playType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_prefix: {
        value: cdktf.stringToHclTerraform(this._domainPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_status: {
        value: cdktf.numberToHclTerraform(this._domainStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_type: {
        value: cdktf.numberToHclTerraform(this._domainType),
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
      is_delay_live: {
        value: cdktf.numberToHclTerraform(this._isDelayLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      play_type: {
        value: cdktf.numberToHclTerraform(this._playType),
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
