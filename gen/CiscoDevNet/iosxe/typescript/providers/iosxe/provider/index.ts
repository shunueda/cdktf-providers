// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IosxeProviderConfig {
  /**
  * This can be used to manage a list of devices from a single provider. All devices must use the same credentials. Each resource and data source has an optional attribute named `device`, which can then select a device by its name from this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#devices IosxeProvider#devices}
  */
  readonly devices?: IosxeProviderDevices[] | cdktf.IResolvable;
  /**
  * Allow insecure HTTPS client. This can also be set as the IOSXE_INSECURE environment variable. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#insecure IosxeProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds to wait for the device database lock to be released. This can also be set as the IOSXE_LOCK_RELEASE_TIMEOUT environment variable. Defaults to `120`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#lock_release_timeout IosxeProvider#lock_release_timeout}
  */
  readonly lockReleaseTimeout?: number;
  /**
  * Password for the IOS-XE device. This can also be set as the IOSXE_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#password IosxeProvider#password}
  */
  readonly password?: string;
  /**
  * Number of retries for REST API calls. This can also be set as the IOSXE_RETRIES environment variable. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#retries IosxeProvider#retries}
  */
  readonly retries?: number;
  /**
  * This can be used to select a list of devices to manage from the `devices` list. Selected devices will be managed while other devices will be skipped and their state will be frozen. This can be used to deploy changes to a subset of devices. Defaults to all devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#selected_devices IosxeProvider#selected_devices}
  */
  readonly selectedDevices?: string[];
  /**
  * URL of the Cisco IOS-XE device. Optionally a port can be added with `:12345`. The default port is `443`. This can also be set as the IOSXE_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#url IosxeProvider#url}
  */
  readonly url?: string;
  /**
  * Username for the IOS-XE device. This can also be set as the IOSXE_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#username IosxeProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#alias IosxeProvider#alias}
  */
  readonly alias?: string;
}
export interface IosxeProviderDevices {
  /**
  * Enable or disable device management. This can be used to temporarily skip a device due to maintainance for example. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#managed IosxeProvider#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Device name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#name IosxeProvider#name}
  */
  readonly name: string;
  /**
  * URL of the Cisco IOS-XE device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#url IosxeProvider#url}
  */
  readonly url: string;
}

export function iosxeProviderDevicesToTerraform(struct?: IosxeProviderDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed: cdktf.booleanToTerraform(struct!.managed),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function iosxeProviderDevicesToHclTerraform(struct?: IosxeProviderDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs iosxe}
*/
export class IosxeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IosxeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IosxeProvider to import
  * @param importFromId The id of the existing IosxeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IosxeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs iosxe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IosxeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IosxeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      terraformProviderSource: 'CiscoDevNet/iosxe'
    });
    this._devices = config.devices;
    this._insecure = config.insecure;
    this._lockReleaseTimeout = config.lockReleaseTimeout;
    this._password = config.password;
    this._retries = config.retries;
    this._selectedDevices = config.selectedDevices;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // devices - computed: false, optional: true, required: false
  private _devices?: IosxeProviderDevices[] | cdktf.IResolvable; 
  public get devices() {
    return this._devices;
  }
  public set devices(value: IosxeProviderDevices[] | cdktf.IResolvable | undefined) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // lock_release_timeout - computed: false, optional: true, required: false
  private _lockReleaseTimeout?: number; 
  public get lockReleaseTimeout() {
    return this._lockReleaseTimeout;
  }
  public set lockReleaseTimeout(value: number | undefined) {
    this._lockReleaseTimeout = value;
  }
  public resetLockReleaseTimeout() {
    this._lockReleaseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockReleaseTimeoutInput() {
    return this._lockReleaseTimeout;
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

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      devices: cdktf.listMapper(iosxeProviderDevicesToTerraform, false)(this._devices),
      insecure: cdktf.booleanToTerraform(this._insecure),
      lock_release_timeout: cdktf.numberToTerraform(this._lockReleaseTimeout),
      password: cdktf.stringToTerraform(this._password),
      retries: cdktf.numberToTerraform(this._retries),
      selected_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedDevices),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      devices: {
        value: cdktf.listMapperHcl(iosxeProviderDevicesToHclTerraform, false)(this._devices),
        isBlock: true,
        type: "list",
        storageClassType: "IosxeProviderDevicesList",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lock_release_timeout: {
        value: cdktf.numberToHclTerraform(this._lockReleaseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      selected_devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedDevices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
