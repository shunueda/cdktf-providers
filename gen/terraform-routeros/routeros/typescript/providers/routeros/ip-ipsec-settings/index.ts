// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpIpsecSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings#___path___ IpIpsecSettings#___path___}
  */
  readonly path?: string;
  /**
  * Whether to send RADIUS accounting requests to a RADIUS server. Applicable if EAP Radius (`auth-method=eap-radius`) or pre-shared key with XAuth authentication method (`auth-method=pre-shared-key-xauth`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings#accounting IpIpsecSettings#accounting}
  */
  readonly accounting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings#id IpIpsecSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval between each consecutive RADIUS accounting Interim update. Accounting must be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings#interim_update IpIpsecSettings#interim_update}
  */
  readonly interimUpdate?: string;
  /**
  * Whether to use Radius client for XAuth users or not. Property is only applicable to peers using the IKEv1 exchange mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings#xauth_use_radius IpIpsecSettings#xauth_use_radius}
  */
  readonly xauthUseRadius?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings routeros_ip_ipsec_settings}
*/
export class IpIpsecSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_ipsec_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpIpsecSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpIpsecSettings to import
  * @param importFromId The id of the existing IpIpsecSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpIpsecSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_ipsec_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_ipsec_settings routeros_ip_ipsec_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpIpsecSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpIpsecSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_ipsec_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._accounting = config.accounting;
    this._id = config.id;
    this._interimUpdate = config.interimUpdate;
    this._xauthUseRadius = config.xauthUseRadius;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // accounting - computed: false, optional: true, required: false
  private _accounting?: boolean | cdktf.IResolvable; 
  public get accounting() {
    return this.getBooleanAttribute('accounting');
  }
  public set accounting(value: boolean | cdktf.IResolvable) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
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

  // interim_update - computed: false, optional: true, required: false
  private _interimUpdate?: string; 
  public get interimUpdate() {
    return this.getStringAttribute('interim_update');
  }
  public set interimUpdate(value: string) {
    this._interimUpdate = value;
  }
  public resetInterimUpdate() {
    this._interimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateInput() {
    return this._interimUpdate;
  }

  // xauth_use_radius - computed: false, optional: true, required: false
  private _xauthUseRadius?: boolean | cdktf.IResolvable; 
  public get xauthUseRadius() {
    return this.getBooleanAttribute('xauth_use_radius');
  }
  public set xauthUseRadius(value: boolean | cdktf.IResolvable) {
    this._xauthUseRadius = value;
  }
  public resetXauthUseRadius() {
    this._xauthUseRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xauthUseRadiusInput() {
    return this._xauthUseRadius;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accounting: cdktf.booleanToTerraform(this._accounting),
      id: cdktf.stringToTerraform(this._id),
      interim_update: cdktf.stringToTerraform(this._interimUpdate),
      xauth_use_radius: cdktf.booleanToTerraform(this._xauthUseRadius),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting: {
        value: cdktf.booleanToHclTerraform(this._accounting),
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
      interim_update: {
        value: cdktf.stringToHclTerraform(this._interimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xauth_use_radius: {
        value: cdktf.booleanToHclTerraform(this._xauthUseRadius),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
