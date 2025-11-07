// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#bot_enable_black_list Botprofile#bot_enable_black_list}
  */
  readonly botEnableBlackList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#bot_enable_ip_reputation Botprofile#bot_enable_ip_reputation}
  */
  readonly botEnableIpReputation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#bot_enable_rate_limit Botprofile#bot_enable_rate_limit}
  */
  readonly botEnableRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#bot_enable_tps Botprofile#bot_enable_tps}
  */
  readonly botEnableTps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#bot_enable_white_list Botprofile#bot_enable_white_list}
  */
  readonly botEnableWhiteList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#clientipexpression Botprofile#clientipexpression}
  */
  readonly clientipexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#comment Botprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#devicefingerprint Botprofile#devicefingerprint}
  */
  readonly devicefingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#devicefingerprintaction Botprofile#devicefingerprintaction}
  */
  readonly devicefingerprintaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#devicefingerprintmobile Botprofile#devicefingerprintmobile}
  */
  readonly devicefingerprintmobile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#errorurl Botprofile#errorurl}
  */
  readonly errorurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#id Botprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#kmdetection Botprofile#kmdetection}
  */
  readonly kmdetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#kmeventspostbodylimit Botprofile#kmeventspostbodylimit}
  */
  readonly kmeventspostbodylimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#kmjavascriptname Botprofile#kmjavascriptname}
  */
  readonly kmjavascriptname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#name Botprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#signature Botprofile#signature}
  */
  readonly signature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#signaturemultipleuseragentheaderaction Botprofile#signaturemultipleuseragentheaderaction}
  */
  readonly signaturemultipleuseragentheaderaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#signaturenouseragentheaderaction Botprofile#signaturenouseragentheaderaction}
  */
  readonly signaturenouseragentheaderaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#trap Botprofile#trap}
  */
  readonly trap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#trapaction Botprofile#trapaction}
  */
  readonly trapaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#trapurl Botprofile#trapurl}
  */
  readonly trapurl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile citrixadc_botprofile}
*/
export class Botprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Botprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Botprofile to import
  * @param importFromId The id of the existing Botprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Botprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile citrixadc_botprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._botEnableBlackList = config.botEnableBlackList;
    this._botEnableIpReputation = config.botEnableIpReputation;
    this._botEnableRateLimit = config.botEnableRateLimit;
    this._botEnableTps = config.botEnableTps;
    this._botEnableWhiteList = config.botEnableWhiteList;
    this._clientipexpression = config.clientipexpression;
    this._comment = config.comment;
    this._devicefingerprint = config.devicefingerprint;
    this._devicefingerprintaction = config.devicefingerprintaction;
    this._devicefingerprintmobile = config.devicefingerprintmobile;
    this._errorurl = config.errorurl;
    this._id = config.id;
    this._kmdetection = config.kmdetection;
    this._kmeventspostbodylimit = config.kmeventspostbodylimit;
    this._kmjavascriptname = config.kmjavascriptname;
    this._name = config.name;
    this._signature = config.signature;
    this._signaturemultipleuseragentheaderaction = config.signaturemultipleuseragentheaderaction;
    this._signaturenouseragentheaderaction = config.signaturenouseragentheaderaction;
    this._trap = config.trap;
    this._trapaction = config.trapaction;
    this._trapurl = config.trapurl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_enable_black_list - computed: true, optional: true, required: false
  private _botEnableBlackList?: string; 
  public get botEnableBlackList() {
    return this.getStringAttribute('bot_enable_black_list');
  }
  public set botEnableBlackList(value: string) {
    this._botEnableBlackList = value;
  }
  public resetBotEnableBlackList() {
    this._botEnableBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botEnableBlackListInput() {
    return this._botEnableBlackList;
  }

  // bot_enable_ip_reputation - computed: true, optional: true, required: false
  private _botEnableIpReputation?: string; 
  public get botEnableIpReputation() {
    return this.getStringAttribute('bot_enable_ip_reputation');
  }
  public set botEnableIpReputation(value: string) {
    this._botEnableIpReputation = value;
  }
  public resetBotEnableIpReputation() {
    this._botEnableIpReputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botEnableIpReputationInput() {
    return this._botEnableIpReputation;
  }

  // bot_enable_rate_limit - computed: true, optional: true, required: false
  private _botEnableRateLimit?: string; 
  public get botEnableRateLimit() {
    return this.getStringAttribute('bot_enable_rate_limit');
  }
  public set botEnableRateLimit(value: string) {
    this._botEnableRateLimit = value;
  }
  public resetBotEnableRateLimit() {
    this._botEnableRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botEnableRateLimitInput() {
    return this._botEnableRateLimit;
  }

  // bot_enable_tps - computed: true, optional: true, required: false
  private _botEnableTps?: string; 
  public get botEnableTps() {
    return this.getStringAttribute('bot_enable_tps');
  }
  public set botEnableTps(value: string) {
    this._botEnableTps = value;
  }
  public resetBotEnableTps() {
    this._botEnableTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botEnableTpsInput() {
    return this._botEnableTps;
  }

  // bot_enable_white_list - computed: true, optional: true, required: false
  private _botEnableWhiteList?: string; 
  public get botEnableWhiteList() {
    return this.getStringAttribute('bot_enable_white_list');
  }
  public set botEnableWhiteList(value: string) {
    this._botEnableWhiteList = value;
  }
  public resetBotEnableWhiteList() {
    this._botEnableWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botEnableWhiteListInput() {
    return this._botEnableWhiteList;
  }

  // clientipexpression - computed: true, optional: true, required: false
  private _clientipexpression?: string; 
  public get clientipexpression() {
    return this.getStringAttribute('clientipexpression');
  }
  public set clientipexpression(value: string) {
    this._clientipexpression = value;
  }
  public resetClientipexpression() {
    this._clientipexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientipexpressionInput() {
    return this._clientipexpression;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // devicefingerprint - computed: true, optional: true, required: false
  private _devicefingerprint?: string; 
  public get devicefingerprint() {
    return this.getStringAttribute('devicefingerprint');
  }
  public set devicefingerprint(value: string) {
    this._devicefingerprint = value;
  }
  public resetDevicefingerprint() {
    this._devicefingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicefingerprintInput() {
    return this._devicefingerprint;
  }

  // devicefingerprintaction - computed: true, optional: true, required: false
  private _devicefingerprintaction?: string[]; 
  public get devicefingerprintaction() {
    return this.getListAttribute('devicefingerprintaction');
  }
  public set devicefingerprintaction(value: string[]) {
    this._devicefingerprintaction = value;
  }
  public resetDevicefingerprintaction() {
    this._devicefingerprintaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicefingerprintactionInput() {
    return this._devicefingerprintaction;
  }

  // devicefingerprintmobile - computed: true, optional: true, required: false
  private _devicefingerprintmobile?: string[]; 
  public get devicefingerprintmobile() {
    return this.getListAttribute('devicefingerprintmobile');
  }
  public set devicefingerprintmobile(value: string[]) {
    this._devicefingerprintmobile = value;
  }
  public resetDevicefingerprintmobile() {
    this._devicefingerprintmobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicefingerprintmobileInput() {
    return this._devicefingerprintmobile;
  }

  // errorurl - computed: true, optional: true, required: false
  private _errorurl?: string; 
  public get errorurl() {
    return this.getStringAttribute('errorurl');
  }
  public set errorurl(value: string) {
    this._errorurl = value;
  }
  public resetErrorurl() {
    this._errorurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorurlInput() {
    return this._errorurl;
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

  // kmdetection - computed: true, optional: true, required: false
  private _kmdetection?: string; 
  public get kmdetection() {
    return this.getStringAttribute('kmdetection');
  }
  public set kmdetection(value: string) {
    this._kmdetection = value;
  }
  public resetKmdetection() {
    this._kmdetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmdetectionInput() {
    return this._kmdetection;
  }

  // kmeventspostbodylimit - computed: true, optional: true, required: false
  private _kmeventspostbodylimit?: number; 
  public get kmeventspostbodylimit() {
    return this.getNumberAttribute('kmeventspostbodylimit');
  }
  public set kmeventspostbodylimit(value: number) {
    this._kmeventspostbodylimit = value;
  }
  public resetKmeventspostbodylimit() {
    this._kmeventspostbodylimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmeventspostbodylimitInput() {
    return this._kmeventspostbodylimit;
  }

  // kmjavascriptname - computed: true, optional: true, required: false
  private _kmjavascriptname?: string; 
  public get kmjavascriptname() {
    return this.getStringAttribute('kmjavascriptname');
  }
  public set kmjavascriptname(value: string) {
    this._kmjavascriptname = value;
  }
  public resetKmjavascriptname() {
    this._kmjavascriptname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmjavascriptnameInput() {
    return this._kmjavascriptname;
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

  // signature - computed: true, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // signaturemultipleuseragentheaderaction - computed: true, optional: true, required: false
  private _signaturemultipleuseragentheaderaction?: string[]; 
  public get signaturemultipleuseragentheaderaction() {
    return this.getListAttribute('signaturemultipleuseragentheaderaction');
  }
  public set signaturemultipleuseragentheaderaction(value: string[]) {
    this._signaturemultipleuseragentheaderaction = value;
  }
  public resetSignaturemultipleuseragentheaderaction() {
    this._signaturemultipleuseragentheaderaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturemultipleuseragentheaderactionInput() {
    return this._signaturemultipleuseragentheaderaction;
  }

  // signaturenouseragentheaderaction - computed: true, optional: true, required: false
  private _signaturenouseragentheaderaction?: string[]; 
  public get signaturenouseragentheaderaction() {
    return this.getListAttribute('signaturenouseragentheaderaction');
  }
  public set signaturenouseragentheaderaction(value: string[]) {
    this._signaturenouseragentheaderaction = value;
  }
  public resetSignaturenouseragentheaderaction() {
    this._signaturenouseragentheaderaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturenouseragentheaderactionInput() {
    return this._signaturenouseragentheaderaction;
  }

  // trap - computed: true, optional: true, required: false
  private _trap?: string; 
  public get trap() {
    return this.getStringAttribute('trap');
  }
  public set trap(value: string) {
    this._trap = value;
  }
  public resetTrap() {
    this._trap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapInput() {
    return this._trap;
  }

  // trapaction - computed: true, optional: true, required: false
  private _trapaction?: string[]; 
  public get trapaction() {
    return this.getListAttribute('trapaction');
  }
  public set trapaction(value: string[]) {
    this._trapaction = value;
  }
  public resetTrapaction() {
    this._trapaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapactionInput() {
    return this._trapaction;
  }

  // trapurl - computed: true, optional: true, required: false
  private _trapurl?: string; 
  public get trapurl() {
    return this.getStringAttribute('trapurl');
  }
  public set trapurl(value: string) {
    this._trapurl = value;
  }
  public resetTrapurl() {
    this._trapurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapurlInput() {
    return this._trapurl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_enable_black_list: cdktf.stringToTerraform(this._botEnableBlackList),
      bot_enable_ip_reputation: cdktf.stringToTerraform(this._botEnableIpReputation),
      bot_enable_rate_limit: cdktf.stringToTerraform(this._botEnableRateLimit),
      bot_enable_tps: cdktf.stringToTerraform(this._botEnableTps),
      bot_enable_white_list: cdktf.stringToTerraform(this._botEnableWhiteList),
      clientipexpression: cdktf.stringToTerraform(this._clientipexpression),
      comment: cdktf.stringToTerraform(this._comment),
      devicefingerprint: cdktf.stringToTerraform(this._devicefingerprint),
      devicefingerprintaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devicefingerprintaction),
      devicefingerprintmobile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devicefingerprintmobile),
      errorurl: cdktf.stringToTerraform(this._errorurl),
      id: cdktf.stringToTerraform(this._id),
      kmdetection: cdktf.stringToTerraform(this._kmdetection),
      kmeventspostbodylimit: cdktf.numberToTerraform(this._kmeventspostbodylimit),
      kmjavascriptname: cdktf.stringToTerraform(this._kmjavascriptname),
      name: cdktf.stringToTerraform(this._name),
      signature: cdktf.stringToTerraform(this._signature),
      signaturemultipleuseragentheaderaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signaturemultipleuseragentheaderaction),
      signaturenouseragentheaderaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signaturenouseragentheaderaction),
      trap: cdktf.stringToTerraform(this._trap),
      trapaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trapaction),
      trapurl: cdktf.stringToTerraform(this._trapurl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_enable_black_list: {
        value: cdktf.stringToHclTerraform(this._botEnableBlackList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_enable_ip_reputation: {
        value: cdktf.stringToHclTerraform(this._botEnableIpReputation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_enable_rate_limit: {
        value: cdktf.stringToHclTerraform(this._botEnableRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_enable_tps: {
        value: cdktf.stringToHclTerraform(this._botEnableTps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_enable_white_list: {
        value: cdktf.stringToHclTerraform(this._botEnableWhiteList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientipexpression: {
        value: cdktf.stringToHclTerraform(this._clientipexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devicefingerprint: {
        value: cdktf.stringToHclTerraform(this._devicefingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devicefingerprintaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devicefingerprintaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      devicefingerprintmobile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devicefingerprintmobile),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      errorurl: {
        value: cdktf.stringToHclTerraform(this._errorurl),
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
      kmdetection: {
        value: cdktf.stringToHclTerraform(this._kmdetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kmeventspostbodylimit: {
        value: cdktf.numberToHclTerraform(this._kmeventspostbodylimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kmjavascriptname: {
        value: cdktf.stringToHclTerraform(this._kmjavascriptname),
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
      signature: {
        value: cdktf.stringToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signaturemultipleuseragentheaderaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signaturemultipleuseragentheaderaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      signaturenouseragentheaderaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signaturenouseragentheaderaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trap: {
        value: cdktf.stringToHclTerraform(this._trap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trapaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trapaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trapurl: {
        value: cdktf.stringToHclTerraform(this._trapurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
