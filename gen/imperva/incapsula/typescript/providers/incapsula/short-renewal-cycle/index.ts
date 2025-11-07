// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShortRenewalCycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Numeric identifier of the account to operate on. If not specified, operation will be performed on the account identified by the authentication parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle#account_id ShortRenewalCycle#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle#id ShortRenewalCycle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Numeric identifier of the site ssl settings to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle#managed_certificate_settings_id ShortRenewalCycle#managed_certificate_settings_id}
  */
  readonly managedCertificateSettingsId: string;
  /**
  * The short renewal cycle configuration. If true, then short renewal cycle is enabled. If false, then short renewal cycle is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle#short_renewal_cycle ShortRenewalCycle#short_renewal_cycle}
  */
  readonly shortRenewalCycle: boolean | cdktf.IResolvable;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle#site_id ShortRenewalCycle#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle incapsula_short_renewal_cycle}
*/
export class ShortRenewalCycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_short_renewal_cycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShortRenewalCycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShortRenewalCycle to import
  * @param importFromId The id of the existing ShortRenewalCycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShortRenewalCycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_short_renewal_cycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/short_renewal_cycle incapsula_short_renewal_cycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShortRenewalCycleConfig
  */
  public constructor(scope: Construct, id: string, config: ShortRenewalCycleConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_short_renewal_cycle',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._managedCertificateSettingsId = config.managedCertificateSettingsId;
    this._shortRenewalCycle = config.shortRenewalCycle;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // managed_certificate_settings_id - computed: false, optional: false, required: true
  private _managedCertificateSettingsId?: string; 
  public get managedCertificateSettingsId() {
    return this.getStringAttribute('managed_certificate_settings_id');
  }
  public set managedCertificateSettingsId(value: string) {
    this._managedCertificateSettingsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedCertificateSettingsIdInput() {
    return this._managedCertificateSettingsId;
  }

  // short_renewal_cycle - computed: false, optional: false, required: true
  private _shortRenewalCycle?: boolean | cdktf.IResolvable; 
  public get shortRenewalCycle() {
    return this.getBooleanAttribute('short_renewal_cycle');
  }
  public set shortRenewalCycle(value: boolean | cdktf.IResolvable) {
    this._shortRenewalCycle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortRenewalCycleInput() {
    return this._shortRenewalCycle;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      managed_certificate_settings_id: cdktf.stringToTerraform(this._managedCertificateSettingsId),
      short_renewal_cycle: cdktf.booleanToTerraform(this._shortRenewalCycle),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      managed_certificate_settings_id: {
        value: cdktf.stringToHclTerraform(this._managedCertificateSettingsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_renewal_cycle: {
        value: cdktf.booleanToHclTerraform(this._shortRenewalCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
