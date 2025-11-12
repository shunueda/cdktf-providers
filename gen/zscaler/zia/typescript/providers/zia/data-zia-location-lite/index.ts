// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_lite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaLocationLiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_lite#digest_auth_enabled DataZiaLocationLite#digest_auth_enabled}
  */
  readonly digestAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_lite#id DataZiaLocationLite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_lite#kerberos_auth DataZiaLocationLite#kerberos_auth}
  */
  readonly kerberosAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_lite#name DataZiaLocationLite#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_lite zia_location_lite}
*/
export class DataZiaLocationLite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_location_lite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaLocationLite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaLocationLite to import
  * @param importFromId The id of the existing DataZiaLocationLite that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_lite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaLocationLite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_location_lite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/location_lite zia_location_lite} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaLocationLiteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaLocationLiteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_location_lite',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digestAuthEnabled = config.digestAuthEnabled;
    this._id = config.id;
    this._kerberosAuth = config.kerberosAuth;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aup_block_internet_until_accepted - computed: true, optional: false, required: false
  public get aupBlockInternetUntilAccepted() {
    return this.getBooleanAttribute('aup_block_internet_until_accepted');
  }

  // aup_enabled - computed: true, optional: false, required: false
  public get aupEnabled() {
    return this.getBooleanAttribute('aup_enabled');
  }

  // aup_force_ssl_inspection - computed: true, optional: false, required: false
  public get aupForceSslInspection() {
    return this.getBooleanAttribute('aup_force_ssl_inspection');
  }

  // caution_enabled - computed: true, optional: false, required: false
  public get cautionEnabled() {
    return this.getBooleanAttribute('caution_enabled');
  }

  // digest_auth_enabled - computed: false, optional: true, required: false
  private _digestAuthEnabled?: boolean | cdktf.IResolvable; 
  public get digestAuthEnabled() {
    return this.getBooleanAttribute('digest_auth_enabled');
  }
  public set digestAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._digestAuthEnabled = value;
  }
  public resetDigestAuthEnabled() {
    this._digestAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAuthEnabledInput() {
    return this._digestAuthEnabled;
  }

  // ec_location - computed: true, optional: false, required: false
  public get ecLocation() {
    return this.getBooleanAttribute('ec_location');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ips_control - computed: true, optional: false, required: false
  public get ipsControl() {
    return this.getBooleanAttribute('ips_control');
  }

  // ipv6_enabled - computed: true, optional: false, required: false
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }

  // kerberos_auth - computed: false, optional: true, required: false
  private _kerberosAuth?: boolean | cdktf.IResolvable; 
  public get kerberosAuth() {
    return this.getBooleanAttribute('kerberos_auth');
  }
  public set kerberosAuth(value: boolean | cdktf.IResolvable) {
    this._kerberosAuth = value;
  }
  public resetKerberosAuth() {
    this._kerberosAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosAuthInput() {
    return this._kerberosAuth;
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

  // ofw_enabled - computed: true, optional: false, required: false
  public get ofwEnabled() {
    return this.getBooleanAttribute('ofw_enabled');
  }

  // other6_sub_location - computed: true, optional: false, required: false
  public get other6SubLocation() {
    return this.getBooleanAttribute('other6_sub_location');
  }

  // other_sub_location - computed: true, optional: false, required: false
  public get otherSubLocation() {
    return this.getBooleanAttribute('other_sub_location');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }

  // surrogate_ip - computed: true, optional: false, required: false
  public get surrogateIp() {
    return this.getBooleanAttribute('surrogate_ip');
  }

  // surrogate_ip_enforced_for_known_browsers - computed: true, optional: false, required: false
  public get surrogateIpEnforcedForKnownBrowsers() {
    return this.getBooleanAttribute('surrogate_ip_enforced_for_known_browsers');
  }

  // tz - computed: true, optional: false, required: false
  public get tz() {
    return this.getStringAttribute('tz');
  }

  // xff_forward_enabled - computed: true, optional: false, required: false
  public get xffForwardEnabled() {
    return this.getBooleanAttribute('xff_forward_enabled');
  }

  // zapp_ssl_scan_enabled - computed: true, optional: false, required: false
  public get zappSslScanEnabled() {
    return this.getBooleanAttribute('zapp_ssl_scan_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digest_auth_enabled: cdktf.booleanToTerraform(this._digestAuthEnabled),
      id: cdktf.numberToTerraform(this._id),
      kerberos_auth: cdktf.booleanToTerraform(this._kerberosAuth),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digest_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._digestAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_auth: {
        value: cdktf.booleanToHclTerraform(this._kerberosAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
