// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudWafAttackOverviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * App id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#appid DataTencentcloudWafAttackOverview#appid}
  */
  readonly appid?: number;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#domain DataTencentcloudWafAttackOverview#domain}
  */
  readonly domain?: string;
  /**
  * support `sparta-waf`, `clb-waf`, otherwise not filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#edition DataTencentcloudWafAttackOverview#edition}
  */
  readonly edition?: string;
  /**
  * Begin time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#from_time DataTencentcloudWafAttackOverview#from_time}
  */
  readonly fromTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#id DataTencentcloudWafAttackOverview#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Waf instanceId, otherwise not filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#instance_id DataTencentcloudWafAttackOverview#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#result_output_file DataTencentcloudWafAttackOverview#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * End time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#to_time DataTencentcloudWafAttackOverview#to_time}
  */
  readonly toTime: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview tencentcloud_waf_attack_overview}
*/
export class DataTencentcloudWafAttackOverview extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_attack_overview";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudWafAttackOverview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudWafAttackOverview to import
  * @param importFromId The id of the existing DataTencentcloudWafAttackOverview that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudWafAttackOverview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_attack_overview", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/waf_attack_overview tencentcloud_waf_attack_overview} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudWafAttackOverviewConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudWafAttackOverviewConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_attack_overview',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appid = config.appid;
    this._domain = config.domain;
    this._edition = config.edition;
    this._fromTime = config.fromTime;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._resultOutputFile = config.resultOutputFile;
    this._toTime = config.toTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_count - computed: true, optional: false, required: false
  public get accessCount() {
    return this.getNumberAttribute('access_count');
  }

  // acl_count - computed: true, optional: false, required: false
  public get aclCount() {
    return this.getNumberAttribute('acl_count');
  }

  // api_assets_count - computed: true, optional: false, required: false
  public get apiAssetsCount() {
    return this.getNumberAttribute('api_assets_count');
  }

  // api_risk_event_count - computed: true, optional: false, required: false
  public get apiRiskEventCount() {
    return this.getNumberAttribute('api_risk_event_count');
  }

  // appid - computed: false, optional: true, required: false
  private _appid?: number; 
  public get appid() {
    return this.getNumberAttribute('appid');
  }
  public set appid(value: number) {
    this._appid = value;
  }
  public resetAppid() {
    this._appid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appidInput() {
    return this._appid;
  }

  // attack_count - computed: true, optional: false, required: false
  public get attackCount() {
    return this.getNumberAttribute('attack_count');
  }

  // bot_count - computed: true, optional: false, required: false
  public get botCount() {
    return this.getNumberAttribute('bot_count');
  }

  // cc_count - computed: true, optional: false, required: false
  public get ccCount() {
    return this.getNumberAttribute('cc_count');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // from_time - computed: false, optional: false, required: true
  private _fromTime?: string; 
  public get fromTime() {
    return this.getStringAttribute('from_time');
  }
  public set fromTime(value: string) {
    this._fromTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeInput() {
    return this._fromTime;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // to_time - computed: false, optional: false, required: true
  private _toTime?: string; 
  public get toTime() {
    return this.getStringAttribute('to_time');
  }
  public set toTime(value: string) {
    this._toTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toTimeInput() {
    return this._toTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appid: cdktf.numberToTerraform(this._appid),
      domain: cdktf.stringToTerraform(this._domain),
      edition: cdktf.stringToTerraform(this._edition),
      from_time: cdktf.stringToTerraform(this._fromTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      to_time: cdktf.stringToTerraform(this._toTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appid: {
        value: cdktf.numberToHclTerraform(this._appid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_time: {
        value: cdktf.stringToHclTerraform(this._fromTime),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      to_time: {
        value: cdktf.stringToHclTerraform(this._toTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
