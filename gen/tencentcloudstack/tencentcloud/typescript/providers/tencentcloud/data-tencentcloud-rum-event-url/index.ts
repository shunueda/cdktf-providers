// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudRumEventUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The region where the data reporting takes place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#area DataTencentcloudRumEventUrl#area}
  */
  readonly area?: string;
  /**
  * The mobile phone brand used for data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#brand DataTencentcloudRumEventUrl#brand}
  */
  readonly brand?: string;
  /**
  * The browser type used for data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#browser DataTencentcloudRumEventUrl#browser}
  */
  readonly browser?: string;
  /**
  * The device used for data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#device DataTencentcloudRumEventUrl#device}
  */
  readonly device?: string;
  /**
  * End time but is represented using a timestamp in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#end_time DataTencentcloudRumEventUrl#end_time}
  */
  readonly endTime: number;
  /**
  * The browser engine used for data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#engine DataTencentcloudRumEventUrl#engine}
  */
  readonly engine?: string;
  /**
  * The code environment where the data reporting takes place.(`production`: production env, `development`: development env, `gray`: gray env, `pre`: pre env, `daily`: daily env, `local`: local env, `others`: others env).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#env DataTencentcloudRumEventUrl#env}
  */
  readonly env?: string;
  /**
  * First Expansion parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#ext_first DataTencentcloudRumEventUrl#ext_first}
  */
  readonly extFirst?: string;
  /**
  * Second Expansion parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#ext_second DataTencentcloudRumEventUrl#ext_second}
  */
  readonly extSecond?: string;
  /**
  * Third Expansion parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#ext_third DataTencentcloudRumEventUrl#ext_third}
  */
  readonly extThird?: string;
  /**
  * The source page of the data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#from DataTencentcloudRumEventUrl#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#id DataTencentcloudRumEventUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether it is non-China region.`1`: yes; `0`: no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#is_abroad DataTencentcloudRumEventUrl#is_abroad}
  */
  readonly isAbroad?: string;
  /**
  * The internet service provider used for data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#isp DataTencentcloudRumEventUrl#isp}
  */
  readonly isp?: string;
  /**
  * Log level for data reporting(`1`: whitelist, `2`: normal, `4`: error, `8`: promise error, `16`: ajax request error, `32`: js resource load error, `64`: image resource load error, `128`: css resource load error, `256`: console.error, `512`: video resource load error, `1024`: request retcode error, `2048`: sdk self monitor error, `4096`: pv log, `8192`: event log).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#level DataTencentcloudRumEventUrl#level}
  */
  readonly level?: string;
  /**
  * Event name for data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#name DataTencentcloudRumEventUrl#name}
  */
  readonly name?: string;
  /**
  * The network type used for data reporting.(`1`: Wifi, `2`: 2G, `3`: 3G, `4`: 4G, `5`: 5G, `6`: 6G, `100`: Unknown).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#net_type DataTencentcloudRumEventUrl#net_type}
  */
  readonly netType?: string;
  /**
  * The operating system used for data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#os DataTencentcloudRumEventUrl#os}
  */
  readonly os?: string;
  /**
  * The platform where the data reporting takes place.(`1`: Android, `2`: IOS, `3`: Windows, `4`: Mac, `5`: Linux, `100`: Other).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#platform DataTencentcloudRumEventUrl#platform}
  */
  readonly platform?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#project_id DataTencentcloudRumEventUrl#project_id}
  */
  readonly projectId: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#result_output_file DataTencentcloudRumEventUrl#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Start time but is represented using a timestamp in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#start_time DataTencentcloudRumEventUrl#start_time}
  */
  readonly startTime: number;
  /**
  * Query Data Type. `allcount`:CostType allcount, `day`:CostType group by day, `condition`:CostType group by condition, `ckuv`:CostType group by uv, `ckpv`:CostType group by pv, `nettype`: CostType sort by nettype, `version`: CostType sort by version, `platform`: CostType sort by platform, `isp`: CostType sort by isp, `region`: CostType sort by region, `device`: CostType sort by device, `browser`: CostType sort by browser, `ext1`: CostType sort by ext1, `ext2`: CostType sort by ext2, `ext3`: CostType sort by ext3, `ret`: CostType sort by ret, `status`: CostType sort by status, `from`: CostType sort by from, `url`: CostType sort by url, `env`: CostType sort by env.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#type DataTencentcloudRumEventUrl#type}
  */
  readonly type: string;
  /**
  * The SDK version used for data reporting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#version_num DataTencentcloudRumEventUrl#version_num}
  */
  readonly versionNum?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url tencentcloud_rum_event_url}
*/
export class DataTencentcloudRumEventUrl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_rum_event_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudRumEventUrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudRumEventUrl to import
  * @param importFromId The id of the existing DataTencentcloudRumEventUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudRumEventUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_rum_event_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/rum_event_url tencentcloud_rum_event_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudRumEventUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudRumEventUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_rum_event_url',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._area = config.area;
    this._brand = config.brand;
    this._browser = config.browser;
    this._device = config.device;
    this._endTime = config.endTime;
    this._engine = config.engine;
    this._env = config.env;
    this._extFirst = config.extFirst;
    this._extSecond = config.extSecond;
    this._extThird = config.extThird;
    this._from = config.from;
    this._id = config.id;
    this._isAbroad = config.isAbroad;
    this._isp = config.isp;
    this._level = config.level;
    this._name = config.name;
    this._netType = config.netType;
    this._os = config.os;
    this._platform = config.platform;
    this._projectId = config.projectId;
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
    this._type = config.type;
    this._versionNum = config.versionNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // brand - computed: false, optional: true, required: false
  private _brand?: string; 
  public get brand() {
    return this.getStringAttribute('brand');
  }
  public set brand(value: string) {
    this._brand = value;
  }
  public resetBrand() {
    this._brand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandInput() {
    return this._brand;
  }

  // browser - computed: false, optional: true, required: false
  private _browser?: string; 
  public get browser() {
    return this.getStringAttribute('browser');
  }
  public set browser(value: string) {
    this._browser = value;
  }
  public resetBrowser() {
    this._browser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserInput() {
    return this._browser;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // ext_first - computed: false, optional: true, required: false
  private _extFirst?: string; 
  public get extFirst() {
    return this.getStringAttribute('ext_first');
  }
  public set extFirst(value: string) {
    this._extFirst = value;
  }
  public resetExtFirst() {
    this._extFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extFirstInput() {
    return this._extFirst;
  }

  // ext_second - computed: false, optional: true, required: false
  private _extSecond?: string; 
  public get extSecond() {
    return this.getStringAttribute('ext_second');
  }
  public set extSecond(value: string) {
    this._extSecond = value;
  }
  public resetExtSecond() {
    this._extSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extSecondInput() {
    return this._extSecond;
  }

  // ext_third - computed: false, optional: true, required: false
  private _extThird?: string; 
  public get extThird() {
    return this.getStringAttribute('ext_third');
  }
  public set extThird(value: string) {
    this._extThird = value;
  }
  public resetExtThird() {
    this._extThird = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extThirdInput() {
    return this._extThird;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // is_abroad - computed: false, optional: true, required: false
  private _isAbroad?: string; 
  public get isAbroad() {
    return this.getStringAttribute('is_abroad');
  }
  public set isAbroad(value: string) {
    this._isAbroad = value;
  }
  public resetIsAbroad() {
    this._isAbroad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAbroadInput() {
    return this._isAbroad;
  }

  // isp - computed: false, optional: true, required: false
  private _isp?: string; 
  public get isp() {
    return this.getStringAttribute('isp');
  }
  public set isp(value: string) {
    this._isp = value;
  }
  public resetIsp() {
    this._isp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ispInput() {
    return this._isp;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // net_type - computed: false, optional: true, required: false
  private _netType?: string; 
  public get netType() {
    return this.getStringAttribute('net_type');
  }
  public set netType(value: string) {
    this._netType = value;
  }
  public resetNetType() {
    this._netType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version_num - computed: false, optional: true, required: false
  private _versionNum?: string; 
  public get versionNum() {
    return this.getStringAttribute('version_num');
  }
  public set versionNum(value: string) {
    this._versionNum = value;
  }
  public resetVersionNum() {
    this._versionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumInput() {
    return this._versionNum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area: cdktf.stringToTerraform(this._area),
      brand: cdktf.stringToTerraform(this._brand),
      browser: cdktf.stringToTerraform(this._browser),
      device: cdktf.stringToTerraform(this._device),
      end_time: cdktf.numberToTerraform(this._endTime),
      engine: cdktf.stringToTerraform(this._engine),
      env: cdktf.stringToTerraform(this._env),
      ext_first: cdktf.stringToTerraform(this._extFirst),
      ext_second: cdktf.stringToTerraform(this._extSecond),
      ext_third: cdktf.stringToTerraform(this._extThird),
      from: cdktf.stringToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      is_abroad: cdktf.stringToTerraform(this._isAbroad),
      isp: cdktf.stringToTerraform(this._isp),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      net_type: cdktf.stringToTerraform(this._netType),
      os: cdktf.stringToTerraform(this._os),
      platform: cdktf.stringToTerraform(this._platform),
      project_id: cdktf.numberToTerraform(this._projectId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.numberToTerraform(this._startTime),
      type: cdktf.stringToTerraform(this._type),
      version_num: cdktf.stringToTerraform(this._versionNum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area: {
        value: cdktf.stringToHclTerraform(this._area),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      brand: {
        value: cdktf.stringToHclTerraform(this._brand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser: {
        value: cdktf.stringToHclTerraform(this._browser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.stringToHclTerraform(this._env),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_first: {
        value: cdktf.stringToHclTerraform(this._extFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_second: {
        value: cdktf.stringToHclTerraform(this._extSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_third: {
        value: cdktf.stringToHclTerraform(this._extThird),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
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
      is_abroad: {
        value: cdktf.stringToHclTerraform(this._isAbroad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isp: {
        value: cdktf.stringToHclTerraform(this._isp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_type: {
        value: cdktf.stringToHclTerraform(this._netType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
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
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_num: {
        value: cdktf.stringToHclTerraform(this._versionNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
