// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IosxrProviderConfig {
  /**
  * TLS CA certificate content. This can also be set as the IOSXR_CA_CERTIFICATE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#ca_certificate IosxrProvider#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * TLS certificate content. This can also be set as the IOSXR_CERTIFICATE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#certificate IosxrProvider#certificate}
  */
  readonly certificate?: string;
  /**
  * This can be used to manage a list of devices from a single provider. All devices must use the same credentials. Each resource and data source has an optional attribute named `device`, which can then select a device by its name from this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#devices IosxrProvider#devices}
  */
  readonly devices?: IosxrProviderDevices[] | cdktf.IResolvable;
  /**
  * IP or name of the Cisco IOS-XR device. Optionally a port can be added with `:12345`. The default port is `57400`. This can also be set as the IOSXR_HOST environment variable. If no `host` is provided, the `host` of the first device from the `devices` list is being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#host IosxrProvider#host}
  */
  readonly host?: string;
  /**
  * TLS private key content. This can also be set as the IOSXR_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#key IosxrProvider#key}
  */
  readonly key?: string;
  /**
  * Password for the IOS-XR device. This can also be set as the IOSXR_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#password IosxrProvider#password}
  */
  readonly password?: string;
  /**
  * Reuse gNMI connection. This can also be set as the IOSXR_REUSE_CONNECTION environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#reuse_connection IosxrProvider#reuse_connection}
  */
  readonly reuseConnection?: boolean | cdktf.IResolvable;
  /**
  * This can be used to select a list of devices to manage from the `devices` list. Selected devices will be managed while other devices will be skipped and their state will be frozen. This can be used to deploy changes to a subset of devices. Defaults to all devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#selected_devices IosxrProvider#selected_devices}
  */
  readonly selectedDevices?: string[];
  /**
  * Use TLS. This can also be set as the IOSXR_TLS environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#tls IosxrProvider#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Username for the IOS-XR device. This can also be set as the IOSXR_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#username IosxrProvider#username}
  */
  readonly username?: string;
  /**
  * Verify target certificate. This can also be set as the IOSXR_VERIFY_CERTIFICATE environment variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#verify_certificate IosxrProvider#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#alias IosxrProvider#alias}
  */
  readonly alias?: string;
}
export interface IosxrProviderDevices {
  /**
  * IP of the Cisco IOS-XR device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#host IosxrProvider#host}
  */
  readonly host: string;
  /**
  * Enable or disable device management. This can be used to temporarily skip a device due to maintenance for example. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#managed IosxrProvider#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Device name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#name IosxrProvider#name}
  */
  readonly name: string;
}

export function iosxrProviderDevicesToTerraform(struct?: IosxrProviderDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    managed: cdktf.booleanToTerraform(struct!.managed),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function iosxrProviderDevicesToHclTerraform(struct?: IosxrProviderDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs iosxr}
*/
export class IosxrProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IosxrProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IosxrProvider to import
  * @param importFromId The id of the existing IosxrProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IosxrProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs iosxr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IosxrProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IosxrProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      terraformProviderSource: 'CiscoDevNet/iosxr'
    });
    this._caCertificate = config.caCertificate;
    this._certificate = config.certificate;
    this._devices = config.devices;
    this._host = config.host;
    this._key = config.key;
    this._password = config.password;
    this._reuseConnection = config.reuseConnection;
    this._selectedDevices = config.selectedDevices;
    this._tls = config.tls;
    this._username = config.username;
    this._verifyCertificate = config.verifyCertificate;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this._caCertificate;
  }
  public set caCertificate(value: string | undefined) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: string | undefined) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: IosxrProviderDevices[] | cdktf.IResolvable; 
  public get devices() {
    return this._devices;
  }
  public set devices(value: IosxrProviderDevices[] | cdktf.IResolvable | undefined) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // reuse_connection - computed: false, optional: true, required: false
  private _reuseConnection?: boolean | cdktf.IResolvable; 
  public get reuseConnection() {
    return this._reuseConnection;
  }
  public set reuseConnection(value: boolean | cdktf.IResolvable | undefined) {
    this._reuseConnection = value;
  }
  public resetReuseConnection() {
    this._reuseConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseConnectionInput() {
    return this._reuseConnection;
  }

  // selected_devices - computed: false, optional: true, required: false
  private _selectedDevices?: string[]; 
  public get selectedDevices() {
    return this._selectedDevices;
  }
  public set selectedDevices(value: string[] | undefined) {
    this._selectedDevices = value;
  }
  public resetSelectedDevices() {
    this._selectedDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedDevicesInput() {
    return this._selectedDevices;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this._tls;
  }
  public set tls(value: boolean | cdktf.IResolvable | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktf.IResolvable; 
  public get verifyCertificate() {
    return this._verifyCertificate;
  }
  public set verifyCertificate(value: boolean | cdktf.IResolvable | undefined) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      certificate: cdktf.stringToTerraform(this._certificate),
      devices: cdktf.listMapper(iosxrProviderDevicesToTerraform, false)(this._devices),
      host: cdktf.stringToTerraform(this._host),
      key: cdktf.stringToTerraform(this._key),
      password: cdktf.stringToTerraform(this._password),
      reuse_connection: cdktf.booleanToTerraform(this._reuseConnection),
      selected_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedDevices),
      tls: cdktf.booleanToTerraform(this._tls),
      username: cdktf.stringToTerraform(this._username),
      verify_certificate: cdktf.booleanToTerraform(this._verifyCertificate),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(iosxrProviderDevicesToHclTerraform, false)(this._devices),
        isBlock: true,
        type: "list",
        storageClassType: "IosxrProviderDevicesList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse_connection: {
        value: cdktf.booleanToHclTerraform(this._reuseConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selected_devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedDevices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tls: {
        value: cdktf.booleanToHclTerraform(this._tls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_certificate: {
        value: cdktf.booleanToHclTerraform(this._verifyCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
