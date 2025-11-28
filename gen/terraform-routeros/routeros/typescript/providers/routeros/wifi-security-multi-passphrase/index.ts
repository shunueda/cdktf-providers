// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiSecurityMultiPassphraseConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#___path___ WifiSecurityMultiPassphrase#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#comment WifiSecurityMultiPassphrase#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#disabled WifiSecurityMultiPassphrase#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The expiration date and time for passphrase specified in this entry, doesn't affect the whole group. Once the date is reached, existing clients using this passphrase will be disconnected, and new clients will not be able to connect using it. If not set, passphrase can be used indefinetly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#expires WifiSecurityMultiPassphrase#expires}
  */
  readonly expires?: string;
  /**
  * Assigning the group to a security profile or an access list, will enable use of all passphrases defined under it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#group WifiSecurityMultiPassphrase#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#id WifiSecurityMultiPassphrase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines whether the client device using this passphrase is isolated from other clients on AP. Traffic from an isolated client will not be forwarded to other clients and unicast traffic from a non-isolated client will not be forwarded to an isolated one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#isolation WifiSecurityMultiPassphrase#isolation}
  */
  readonly isolation?: boolean | cdktf.IResolvable;
  /**
  * The passphrase to use for PSK authentication types. Multiple users can use the same passphrase. Not compatible with WPA3-PSK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#passphrase WifiSecurityMultiPassphrase#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Vlan-id that will be assigned to clients using this passphrase Only supported on wifi-qcom interfaces, if wifi-qcom-ac AP has a client that uses a passphrase that has vlan-id associated with it, the client will not be able to join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#vlan_id WifiSecurityMultiPassphrase#vlan_id}
  */
  readonly vlanId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase routeros_wifi_security_multi_passphrase}
*/
export class WifiSecurityMultiPassphrase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_security_multi_passphrase";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiSecurityMultiPassphrase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiSecurityMultiPassphrase to import
  * @param importFromId The id of the existing WifiSecurityMultiPassphrase that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiSecurityMultiPassphrase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_security_multi_passphrase", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/wifi_security_multi_passphrase routeros_wifi_security_multi_passphrase} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiSecurityMultiPassphraseConfig
  */
  public constructor(scope: Construct, id: string, config: WifiSecurityMultiPassphraseConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_security_multi_passphrase',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
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
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._expires = config.expires;
    this._group = config.group;
    this._id = config.id;
    this._isolation = config.isolation;
    this._passphrase = config.passphrase;
    this._vlanId = config.vlanId;
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

  // comment - computed: false, optional: true, required: false
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // isolation - computed: false, optional: true, required: false
  private _isolation?: boolean | cdktf.IResolvable; 
  public get isolation() {
    return this.getBooleanAttribute('isolation');
  }
  public set isolation(value: boolean | cdktf.IResolvable) {
    this._isolation = value;
  }
  public resetIsolation() {
    this._isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationInput() {
    return this._isolation;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      expires: cdktf.stringToTerraform(this._expires),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      isolation: cdktf.booleanToTerraform(this._isolation),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expires: {
        value: cdktf.stringToHclTerraform(this._expires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      isolation: {
        value: cdktf.booleanToHclTerraform(this._isolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
