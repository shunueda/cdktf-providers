// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceCaptchaProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#custom_page LoadBalanceCaptchaProfile#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#custom_page_file LoadBalanceCaptchaProfile#custom_page_file}
  */
  readonly customPageFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#id LoadBalanceCaptchaProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#max_block_period LoadBalanceCaptchaProfile#max_block_period}
  */
  readonly maxBlockPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#max_picture_changes LoadBalanceCaptchaProfile#max_picture_changes}
  */
  readonly maxPictureChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#max_retry_times LoadBalanceCaptchaProfile#max_retry_times}
  */
  readonly maxRetryTimes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#max_valid_period LoadBalanceCaptchaProfile#max_valid_period}
  */
  readonly maxValidPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#max_verify_period LoadBalanceCaptchaProfile#max_verify_period}
  */
  readonly maxVerifyPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#mkey LoadBalanceCaptchaProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#pic_difficulty LoadBalanceCaptchaProfile#pic_difficulty}
  */
  readonly picDifficulty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#vdom LoadBalanceCaptchaProfile#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#vpath LoadBalanceCaptchaProfile#vpath}
  */
  readonly vpath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile fortiadc_load_balance_captcha_profile}
*/
export class LoadBalanceCaptchaProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_captcha_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceCaptchaProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceCaptchaProfile to import
  * @param importFromId The id of the existing LoadBalanceCaptchaProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceCaptchaProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_captcha_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_captcha_profile fortiadc_load_balance_captcha_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceCaptchaProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceCaptchaProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_captcha_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customPage = config.customPage;
    this._customPageFile = config.customPageFile;
    this._id = config.id;
    this._maxBlockPeriod = config.maxBlockPeriod;
    this._maxPictureChanges = config.maxPictureChanges;
    this._maxRetryTimes = config.maxRetryTimes;
    this._maxValidPeriod = config.maxValidPeriod;
    this._maxVerifyPeriod = config.maxVerifyPeriod;
    this._mkey = config.mkey;
    this._picDifficulty = config.picDifficulty;
    this._vdom = config.vdom;
    this._vpath = config.vpath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_page - computed: true, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // custom_page_file - computed: true, optional: true, required: false
  private _customPageFile?: string; 
  public get customPageFile() {
    return this.getStringAttribute('custom_page_file');
  }
  public set customPageFile(value: string) {
    this._customPageFile = value;
  }
  public resetCustomPageFile() {
    this._customPageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageFileInput() {
    return this._customPageFile;
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

  // max_block_period - computed: true, optional: true, required: false
  private _maxBlockPeriod?: string; 
  public get maxBlockPeriod() {
    return this.getStringAttribute('max_block_period');
  }
  public set maxBlockPeriod(value: string) {
    this._maxBlockPeriod = value;
  }
  public resetMaxBlockPeriod() {
    this._maxBlockPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockPeriodInput() {
    return this._maxBlockPeriod;
  }

  // max_picture_changes - computed: true, optional: true, required: false
  private _maxPictureChanges?: string; 
  public get maxPictureChanges() {
    return this.getStringAttribute('max_picture_changes');
  }
  public set maxPictureChanges(value: string) {
    this._maxPictureChanges = value;
  }
  public resetMaxPictureChanges() {
    this._maxPictureChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPictureChangesInput() {
    return this._maxPictureChanges;
  }

  // max_retry_times - computed: true, optional: true, required: false
  private _maxRetryTimes?: string; 
  public get maxRetryTimes() {
    return this.getStringAttribute('max_retry_times');
  }
  public set maxRetryTimes(value: string) {
    this._maxRetryTimes = value;
  }
  public resetMaxRetryTimes() {
    this._maxRetryTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryTimesInput() {
    return this._maxRetryTimes;
  }

  // max_valid_period - computed: true, optional: true, required: false
  private _maxValidPeriod?: string; 
  public get maxValidPeriod() {
    return this.getStringAttribute('max_valid_period');
  }
  public set maxValidPeriod(value: string) {
    this._maxValidPeriod = value;
  }
  public resetMaxValidPeriod() {
    this._maxValidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValidPeriodInput() {
    return this._maxValidPeriod;
  }

  // max_verify_period - computed: true, optional: true, required: false
  private _maxVerifyPeriod?: string; 
  public get maxVerifyPeriod() {
    return this.getStringAttribute('max_verify_period');
  }
  public set maxVerifyPeriod(value: string) {
    this._maxVerifyPeriod = value;
  }
  public resetMaxVerifyPeriod() {
    this._maxVerifyPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVerifyPeriodInput() {
    return this._maxVerifyPeriod;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // pic_difficulty - computed: true, optional: true, required: false
  private _picDifficulty?: string; 
  public get picDifficulty() {
    return this.getStringAttribute('pic_difficulty');
  }
  public set picDifficulty(value: string) {
    this._picDifficulty = value;
  }
  public resetPicDifficulty() {
    this._picDifficulty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get picDifficultyInput() {
    return this._picDifficulty;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vpath - computed: true, optional: true, required: false
  private _vpath?: string; 
  public get vpath() {
    return this.getStringAttribute('vpath');
  }
  public set vpath(value: string) {
    this._vpath = value;
  }
  public resetVpath() {
    this._vpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpathInput() {
    return this._vpath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_page: cdktf.stringToTerraform(this._customPage),
      custom_page_file: cdktf.stringToTerraform(this._customPageFile),
      id: cdktf.stringToTerraform(this._id),
      max_block_period: cdktf.stringToTerraform(this._maxBlockPeriod),
      max_picture_changes: cdktf.stringToTerraform(this._maxPictureChanges),
      max_retry_times: cdktf.stringToTerraform(this._maxRetryTimes),
      max_valid_period: cdktf.stringToTerraform(this._maxValidPeriod),
      max_verify_period: cdktf.stringToTerraform(this._maxVerifyPeriod),
      mkey: cdktf.stringToTerraform(this._mkey),
      pic_difficulty: cdktf.stringToTerraform(this._picDifficulty),
      vdom: cdktf.stringToTerraform(this._vdom),
      vpath: cdktf.stringToTerraform(this._vpath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_page: {
        value: cdktf.stringToHclTerraform(this._customPage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_page_file: {
        value: cdktf.stringToHclTerraform(this._customPageFile),
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
      max_block_period: {
        value: cdktf.stringToHclTerraform(this._maxBlockPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_picture_changes: {
        value: cdktf.stringToHclTerraform(this._maxPictureChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retry_times: {
        value: cdktf.stringToHclTerraform(this._maxRetryTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_valid_period: {
        value: cdktf.stringToHclTerraform(this._maxValidPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_verify_period: {
        value: cdktf.stringToHclTerraform(this._maxVerifyPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pic_difficulty: {
        value: cdktf.stringToHclTerraform(this._picDifficulty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpath: {
        value: cdktf.stringToHclTerraform(this._vpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
