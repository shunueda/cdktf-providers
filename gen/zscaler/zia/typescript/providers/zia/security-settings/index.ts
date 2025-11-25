// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/security_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * URLs on the denylist for your organization. Allow up to 275000 URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/security_settings#blacklist_urls SecuritySettings#blacklist_urls}
  */
  readonly blacklistUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/security_settings#id SecuritySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowlist URLs whose contents will not be scanned. Allows up to 255 URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/security_settings#whitelist_urls SecuritySettings#whitelist_urls}
  */
  readonly whitelistUrls?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/security_settings zia_security_settings}
*/
export class SecuritySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_security_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritySettings to import
  * @param importFromId The id of the existing SecuritySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/security_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_security_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/security_settings zia_security_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritySettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecuritySettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_security_settings',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blacklistUrls = config.blacklistUrls;
    this._id = config.id;
    this._whitelistUrls = config.whitelistUrls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blacklist_urls - computed: true, optional: true, required: false
  private _blacklistUrls?: string[]; 
  public get blacklistUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('blacklist_urls'));
  }
  public set blacklistUrls(value: string[]) {
    this._blacklistUrls = value;
  }
  public resetBlacklistUrls() {
    this._blacklistUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistUrlsInput() {
    return this._blacklistUrls;
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

  // whitelist_urls - computed: true, optional: true, required: false
  private _whitelistUrls?: string[]; 
  public get whitelistUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelist_urls'));
  }
  public set whitelistUrls(value: string[]) {
    this._whitelistUrls = value;
  }
  public resetWhitelistUrls() {
    this._whitelistUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistUrlsInput() {
    return this._whitelistUrls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blacklist_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blacklistUrls),
      id: cdktf.stringToTerraform(this._id),
      whitelist_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whitelistUrls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blacklist_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blacklistUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelist_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._whitelistUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
