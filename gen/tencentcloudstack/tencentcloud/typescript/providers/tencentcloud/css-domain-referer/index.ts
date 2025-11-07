// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssDomainRefererConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow blank referers, 0: not allowed, 1: allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer#allow_empty CssDomainReferer#allow_empty}
  */
  readonly allowEmpty: number;
  /**
  * Domain Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer#domain_name CssDomainReferer#domain_name}
  */
  readonly domainName: string;
  /**
  * Whether to enable the referer blacklist authentication of the current domain name,`0`: off, `1`: on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer#enable CssDomainReferer#enable}
  */
  readonly enable: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer#id CssDomainReferer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The list of referers to; separate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer#rules CssDomainReferer#rules}
  */
  readonly rules: string;
  /**
  * List type: 0: blacklist, 1: whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer#type CssDomainReferer#type}
  */
  readonly type: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer tencentcloud_css_domain_referer}
*/
export class CssDomainReferer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_domain_referer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssDomainReferer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssDomainReferer to import
  * @param importFromId The id of the existing CssDomainReferer that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssDomainReferer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_domain_referer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/css_domain_referer tencentcloud_css_domain_referer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssDomainRefererConfig
  */
  public constructor(scope: Construct, id: string, config: CssDomainRefererConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_domain_referer',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowEmpty = config.allowEmpty;
    this._domainName = config.domainName;
    this._enable = config.enable;
    this._id = config.id;
    this._rules = config.rules;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_empty - computed: false, optional: false, required: true
  private _allowEmpty?: number; 
  public get allowEmpty() {
    return this.getNumberAttribute('allow_empty');
  }
  public set allowEmpty(value: number) {
    this._allowEmpty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

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

  // enable - computed: false, optional: false, required: true
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
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

  // rules - computed: false, optional: false, required: true
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_empty: cdktf.numberToTerraform(this._allowEmpty),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      rules: cdktf.stringToTerraform(this._rules),
      type: cdktf.numberToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_empty: {
        value: cdktf.numberToHclTerraform(this._allowEmpty),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      rules: {
        value: cdktf.stringToHclTerraform(this._rules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
