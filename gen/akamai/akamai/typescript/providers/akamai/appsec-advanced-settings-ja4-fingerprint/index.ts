// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ja4_fingerprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecAdvancedSettingsJa4FingerprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ja4_fingerprint#config_id AppsecAdvancedSettingsJa4Fingerprint#config_id}
  */
  readonly configId: number;
  /**
  * JA4 TLS Header Names to be included in the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ja4_fingerprint#header_names AppsecAdvancedSettingsJa4Fingerprint#header_names}
  */
  readonly headerNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ja4_fingerprint#id AppsecAdvancedSettingsJa4Fingerprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ja4_fingerprint akamai_appsec_advanced_settings_ja4_fingerprint}
*/
export class AppsecAdvancedSettingsJa4Fingerprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_advanced_settings_ja4_fingerprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecAdvancedSettingsJa4Fingerprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecAdvancedSettingsJa4Fingerprint to import
  * @param importFromId The id of the existing AppsecAdvancedSettingsJa4Fingerprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ja4_fingerprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecAdvancedSettingsJa4Fingerprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_advanced_settings_ja4_fingerprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_ja4_fingerprint akamai_appsec_advanced_settings_ja4_fingerprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecAdvancedSettingsJa4FingerprintConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecAdvancedSettingsJa4FingerprintConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_advanced_settings_ja4_fingerprint',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._headerNames = config.headerNames;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // header_names - computed: false, optional: true, required: false
  private _headerNames?: string[]; 
  public get headerNames() {
    return this.getListAttribute('header_names');
  }
  public set headerNames(value: string[]) {
    this._headerNames = value;
  }
  public resetHeaderNames() {
    this._headerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNamesInput() {
    return this._headerNames;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      header_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headerNames),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headerNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
