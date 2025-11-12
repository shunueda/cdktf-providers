// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiAaaConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#___path___ WifiAaa#___path___}
  */
  readonly path?: string;
  /**
  * Format of the `Called-Station-Id` RADIUS attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#called_format WifiAaa#called_format}
  */
  readonly calledFormat?: string;
  /**
  * Format of the `Calling-Station-Id` RADIUS attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#calling_format WifiAaa#calling_format}
  */
  readonly callingFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#comment WifiAaa#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#disabled WifiAaa#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#id WifiAaa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval at which to send interim updates about traffic accounting to the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#interim_update WifiAaa#interim_update}
  */
  readonly interimUpdate?: string;
  /**
  * Time to cache RADIUS server replies when MAC address authentication is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#mac_caching WifiAaa#mac_caching}
  */
  readonly macCaching?: string;
  /**
  * Name of the AAA profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#name WifiAaa#name}
  */
  readonly name: string;
  /**
  * Value of the `NAS-Identifier` RADIUS attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#nas_identifier WifiAaa#nas_identifier}
  */
  readonly nasIdentifier?: string;
  /**
  * Format of the `User-Password` RADIUS attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#password_format WifiAaa#password_format}
  */
  readonly passwordFormat?: string;
  /**
  * Format of the `User-Name` RADIUS attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#username_format WifiAaa#username_format}
  */
  readonly usernameFormat?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa routeros_wifi_aaa}
*/
export class WifiAaa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_aaa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiAaa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiAaa to import
  * @param importFromId The id of the existing WifiAaa that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiAaa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_aaa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi_aaa routeros_wifi_aaa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiAaaConfig
  */
  public constructor(scope: Construct, id: string, config: WifiAaaConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_aaa',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._calledFormat = config.calledFormat;
    this._callingFormat = config.callingFormat;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interimUpdate = config.interimUpdate;
    this._macCaching = config.macCaching;
    this._name = config.name;
    this._nasIdentifier = config.nasIdentifier;
    this._passwordFormat = config.passwordFormat;
    this._usernameFormat = config.usernameFormat;
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

  // called_format - computed: false, optional: true, required: false
  private _calledFormat?: string; 
  public get calledFormat() {
    return this.getStringAttribute('called_format');
  }
  public set calledFormat(value: string) {
    this._calledFormat = value;
  }
  public resetCalledFormat() {
    this._calledFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calledFormatInput() {
    return this._calledFormat;
  }

  // calling_format - computed: false, optional: true, required: false
  private _callingFormat?: string; 
  public get callingFormat() {
    return this.getStringAttribute('calling_format');
  }
  public set callingFormat(value: string) {
    this._callingFormat = value;
  }
  public resetCallingFormat() {
    this._callingFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callingFormatInput() {
    return this._callingFormat;
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

  // mac_caching - computed: false, optional: true, required: false
  private _macCaching?: string; 
  public get macCaching() {
    return this.getStringAttribute('mac_caching');
  }
  public set macCaching(value: string) {
    this._macCaching = value;
  }
  public resetMacCaching() {
    this._macCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCachingInput() {
    return this._macCaching;
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

  // nas_identifier - computed: false, optional: true, required: false
  private _nasIdentifier?: string; 
  public get nasIdentifier() {
    return this.getStringAttribute('nas_identifier');
  }
  public set nasIdentifier(value: string) {
    this._nasIdentifier = value;
  }
  public resetNasIdentifier() {
    this._nasIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIdentifierInput() {
    return this._nasIdentifier;
  }

  // password_format - computed: false, optional: true, required: false
  private _passwordFormat?: string; 
  public get passwordFormat() {
    return this.getStringAttribute('password_format');
  }
  public set passwordFormat(value: string) {
    this._passwordFormat = value;
  }
  public resetPasswordFormat() {
    this._passwordFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFormatInput() {
    return this._passwordFormat;
  }

  // username_format - computed: false, optional: true, required: false
  private _usernameFormat?: string; 
  public get usernameFormat() {
    return this.getStringAttribute('username_format');
  }
  public set usernameFormat(value: string) {
    this._usernameFormat = value;
  }
  public resetUsernameFormat() {
    this._usernameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFormatInput() {
    return this._usernameFormat;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      called_format: cdktf.stringToTerraform(this._calledFormat),
      calling_format: cdktf.stringToTerraform(this._callingFormat),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interim_update: cdktf.stringToTerraform(this._interimUpdate),
      mac_caching: cdktf.stringToTerraform(this._macCaching),
      name: cdktf.stringToTerraform(this._name),
      nas_identifier: cdktf.stringToTerraform(this._nasIdentifier),
      password_format: cdktf.stringToTerraform(this._passwordFormat),
      username_format: cdktf.stringToTerraform(this._usernameFormat),
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
      called_format: {
        value: cdktf.stringToHclTerraform(this._calledFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calling_format: {
        value: cdktf.stringToHclTerraform(this._callingFormat),
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
      mac_caching: {
        value: cdktf.stringToHclTerraform(this._macCaching),
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
      nas_identifier: {
        value: cdktf.stringToHclTerraform(this._nasIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_format: {
        value: cdktf.stringToHclTerraform(this._passwordFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_format: {
        value: cdktf.stringToHclTerraform(this._usernameFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
