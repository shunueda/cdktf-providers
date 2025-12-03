// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#domain_name CssDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Domain type: `0`: push stream. `1`: playback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#domain_type CssDomain#domain_type}
  */
  readonly domainType: number;
  /**
  * Switch. true: enable the specified domain, false: disable the specified domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#enable CssDomain#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#id CssDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether it is LCB: `0`: LVB. `1`: LCB. Default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#is_delay_live CssDomain#is_delay_live}
  */
  readonly isDelayLive?: number;
  /**
  * `0`: LVB. `1`: LVB on Mini Program. Note: this field may return null, indicating that no valid values can be obtained. Default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#is_mini_program_live CssDomain#is_mini_program_live}
  */
  readonly isMiniProgramLive?: number;
  /**
  * Play Type. This parameter is valid only if `DomainType` is 1. Available values: `1`: in Mainland China. `2`: global. `3`: outside Mainland China. Default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#play_type CssDomain#play_type}
  */
  readonly playType?: number;
  /**
  * Domain name attribution verification type. `dnsCheck`, `fileCheck`, `dbCheck`. The default is `dbCheck`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#verify_owner_type CssDomain#verify_owner_type}
  */
  readonly verifyOwnerType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain tencentcloud_css_domain}
*/
export class CssDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssDomain to import
  * @param importFromId The id of the existing CssDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/css_domain tencentcloud_css_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CssDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_domain',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._domainType = config.domainType;
    this._enable = config.enable;
    this._id = config.id;
    this._isDelayLive = config.isDelayLive;
    this._isMiniProgramLive = config.isMiniProgramLive;
    this._playType = config.playType;
    this._verifyOwnerType = config.verifyOwnerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_type - computed: false, optional: false, required: true
  private _domainType?: number; 
  public get domainType() {
    return this.getNumberAttribute('domain_type');
  }
  public set domainType(value: number) {
    this._domainType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainTypeInput() {
    return this._domainType;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // is_mini_program_live - computed: false, optional: true, required: false
  private _isMiniProgramLive?: number; 
  public get isMiniProgramLive() {
    return this.getNumberAttribute('is_mini_program_live');
  }
  public set isMiniProgramLive(value: number) {
    this._isMiniProgramLive = value;
  }
  public resetIsMiniProgramLive() {
    this._isMiniProgramLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMiniProgramLiveInput() {
    return this._isMiniProgramLive;
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

  // verify_owner_type - computed: false, optional: true, required: false
  private _verifyOwnerType?: string; 
  public get verifyOwnerType() {
    return this.getStringAttribute('verify_owner_type');
  }
  public set verifyOwnerType(value: string) {
    this._verifyOwnerType = value;
  }
  public resetVerifyOwnerType() {
    this._verifyOwnerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyOwnerTypeInput() {
    return this._verifyOwnerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_type: cdktf.numberToTerraform(this._domainType),
      enable: cdktf.booleanToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      is_delay_live: cdktf.numberToTerraform(this._isDelayLive),
      is_mini_program_live: cdktf.numberToTerraform(this._isMiniProgramLive),
      play_type: cdktf.numberToTerraform(this._playType),
      verify_owner_type: cdktf.stringToTerraform(this._verifyOwnerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_type: {
        value: cdktf.numberToHclTerraform(this._domainType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
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
      is_delay_live: {
        value: cdktf.numberToHclTerraform(this._isDelayLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_mini_program_live: {
        value: cdktf.numberToHclTerraform(this._isMiniProgramLive),
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
      verify_owner_type: {
        value: cdktf.stringToHclTerraform(this._verifyOwnerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
