// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusConfig extends cdktf.TerraformMetaArguments {
  /**
  * UDP port for RADIUS accounting server (default is 1813)
  *   - Range: `0`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#accounting_port Radius#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * UDP port for RADIUS authentication server (default is 1812)
  *   - Range: `0`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#authentication_port Radius#authentication_port}
  */
  readonly authenticationPort?: number;
  /**
  * Minutes of idle-time after which server state should be verified.
  *   - Range: `1`-`35791`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#automate_tester_idle_time Radius#automate_tester_idle_time}
  */
  readonly automateTesterIdleTime?: number;
  /**
  * Do not test accounting ports of the servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#automate_tester_ignore_acct_port Radius#automate_tester_ignore_acct_port}
  */
  readonly automateTesterIgnoreAcctPort?: boolean | cdktf.IResolvable;
  /**
  * Do not test authentication port of the servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#automate_tester_ignore_auth_port Radius#automate_tester_ignore_auth_port}
  */
  readonly automateTesterIgnoreAuthPort?: boolean | cdktf.IResolvable;
  /**
  * Send a packet to verify the server status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#automate_tester_probe_on_config Radius#automate_tester_probe_on_config}
  */
  readonly automateTesterProbeOnConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#automate_tester_username Radius#automate_tester_username}
  */
  readonly automateTesterUsername?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#device Radius#device}
  */
  readonly device?: string;
  /**
  * IPv4 address or Hostname for radius server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#ipv4_address Radius#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#key Radius#key}
  */
  readonly key?: string;
  /**
  * 
  *   - Choices: `0`, `5`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#key_encryption Radius#key_encryption}
  */
  readonly keyEncryption?: string;
  /**
  * Name for the radius server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#name Radius#name}
  */
  readonly name: string;
  /**
  * The UNENCRYPTED (cleartext) server key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#pac_key Radius#pac_key}
  */
  readonly pacKey?: string;
  /**
  * 0 - Specifies an UNENCRYPTED key will follow 6 - Specifies an ENCRYPTED key will follow 7 - Specifies HIDDEN key will follow
  *   - Choices: `0`, `6`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#pac_key_encryption Radius#pac_key_encryption}
  */
  readonly pacKeyEncryption?: string;
  /**
  * Number of retries to active server (overrides default)
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#retransmit Radius#retransmit}
  */
  readonly retransmit?: number;
  /**
  * Time to wait for a RADIUS server to reply (overrides default)
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#timeout Radius#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius iosxe_radius}
*/
export class Radius extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Radius resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Radius to import
  * @param importFromId The id of the existing Radius that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Radius to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/radius iosxe_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusConfig
  */
  public constructor(scope: Construct, id: string, config: RadiusConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_radius',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountingPort = config.accountingPort;
    this._authenticationPort = config.authenticationPort;
    this._automateTesterIdleTime = config.automateTesterIdleTime;
    this._automateTesterIgnoreAcctPort = config.automateTesterIgnoreAcctPort;
    this._automateTesterIgnoreAuthPort = config.automateTesterIgnoreAuthPort;
    this._automateTesterProbeOnConfig = config.automateTesterProbeOnConfig;
    this._automateTesterUsername = config.automateTesterUsername;
    this._device = config.device;
    this._ipv4Address = config.ipv4Address;
    this._key = config.key;
    this._keyEncryption = config.keyEncryption;
    this._name = config.name;
    this._pacKey = config.pacKey;
    this._pacKeyEncryption = config.pacKeyEncryption;
    this._retransmit = config.retransmit;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // authentication_port - computed: false, optional: true, required: false
  private _authenticationPort?: number; 
  public get authenticationPort() {
    return this.getNumberAttribute('authentication_port');
  }
  public set authenticationPort(value: number) {
    this._authenticationPort = value;
  }
  public resetAuthenticationPort() {
    this._authenticationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPortInput() {
    return this._authenticationPort;
  }

  // automate_tester_idle_time - computed: false, optional: true, required: false
  private _automateTesterIdleTime?: number; 
  public get automateTesterIdleTime() {
    return this.getNumberAttribute('automate_tester_idle_time');
  }
  public set automateTesterIdleTime(value: number) {
    this._automateTesterIdleTime = value;
  }
  public resetAutomateTesterIdleTime() {
    this._automateTesterIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automateTesterIdleTimeInput() {
    return this._automateTesterIdleTime;
  }

  // automate_tester_ignore_acct_port - computed: false, optional: true, required: false
  private _automateTesterIgnoreAcctPort?: boolean | cdktf.IResolvable; 
  public get automateTesterIgnoreAcctPort() {
    return this.getBooleanAttribute('automate_tester_ignore_acct_port');
  }
  public set automateTesterIgnoreAcctPort(value: boolean | cdktf.IResolvable) {
    this._automateTesterIgnoreAcctPort = value;
  }
  public resetAutomateTesterIgnoreAcctPort() {
    this._automateTesterIgnoreAcctPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automateTesterIgnoreAcctPortInput() {
    return this._automateTesterIgnoreAcctPort;
  }

  // automate_tester_ignore_auth_port - computed: false, optional: true, required: false
  private _automateTesterIgnoreAuthPort?: boolean | cdktf.IResolvable; 
  public get automateTesterIgnoreAuthPort() {
    return this.getBooleanAttribute('automate_tester_ignore_auth_port');
  }
  public set automateTesterIgnoreAuthPort(value: boolean | cdktf.IResolvable) {
    this._automateTesterIgnoreAuthPort = value;
  }
  public resetAutomateTesterIgnoreAuthPort() {
    this._automateTesterIgnoreAuthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automateTesterIgnoreAuthPortInput() {
    return this._automateTesterIgnoreAuthPort;
  }

  // automate_tester_probe_on_config - computed: false, optional: true, required: false
  private _automateTesterProbeOnConfig?: boolean | cdktf.IResolvable; 
  public get automateTesterProbeOnConfig() {
    return this.getBooleanAttribute('automate_tester_probe_on_config');
  }
  public set automateTesterProbeOnConfig(value: boolean | cdktf.IResolvable) {
    this._automateTesterProbeOnConfig = value;
  }
  public resetAutomateTesterProbeOnConfig() {
    this._automateTesterProbeOnConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automateTesterProbeOnConfigInput() {
    return this._automateTesterProbeOnConfig;
  }

  // automate_tester_username - computed: false, optional: true, required: false
  private _automateTesterUsername?: string; 
  public get automateTesterUsername() {
    return this.getStringAttribute('automate_tester_username');
  }
  public set automateTesterUsername(value: string) {
    this._automateTesterUsername = value;
  }
  public resetAutomateTesterUsername() {
    this._automateTesterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automateTesterUsernameInput() {
    return this._automateTesterUsername;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_encryption - computed: false, optional: true, required: false
  private _keyEncryption?: string; 
  public get keyEncryption() {
    return this.getStringAttribute('key_encryption');
  }
  public set keyEncryption(value: string) {
    this._keyEncryption = value;
  }
  public resetKeyEncryption() {
    this._keyEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEncryptionInput() {
    return this._keyEncryption;
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

  // pac_key - computed: false, optional: true, required: false
  private _pacKey?: string; 
  public get pacKey() {
    return this.getStringAttribute('pac_key');
  }
  public set pacKey(value: string) {
    this._pacKey = value;
  }
  public resetPacKey() {
    this._pacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacKeyInput() {
    return this._pacKey;
  }

  // pac_key_encryption - computed: false, optional: true, required: false
  private _pacKeyEncryption?: string; 
  public get pacKeyEncryption() {
    return this.getStringAttribute('pac_key_encryption');
  }
  public set pacKeyEncryption(value: string) {
    this._pacKeyEncryption = value;
  }
  public resetPacKeyEncryption() {
    this._pacKeyEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacKeyEncryptionInput() {
    return this._pacKeyEncryption;
  }

  // retransmit - computed: false, optional: true, required: false
  private _retransmit?: number; 
  public get retransmit() {
    return this.getNumberAttribute('retransmit');
  }
  public set retransmit(value: number) {
    this._retransmit = value;
  }
  public resetRetransmit() {
    this._retransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitInput() {
    return this._retransmit;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting_port: cdktf.numberToTerraform(this._accountingPort),
      authentication_port: cdktf.numberToTerraform(this._authenticationPort),
      automate_tester_idle_time: cdktf.numberToTerraform(this._automateTesterIdleTime),
      automate_tester_ignore_acct_port: cdktf.booleanToTerraform(this._automateTesterIgnoreAcctPort),
      automate_tester_ignore_auth_port: cdktf.booleanToTerraform(this._automateTesterIgnoreAuthPort),
      automate_tester_probe_on_config: cdktf.booleanToTerraform(this._automateTesterProbeOnConfig),
      automate_tester_username: cdktf.stringToTerraform(this._automateTesterUsername),
      device: cdktf.stringToTerraform(this._device),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      key: cdktf.stringToTerraform(this._key),
      key_encryption: cdktf.stringToTerraform(this._keyEncryption),
      name: cdktf.stringToTerraform(this._name),
      pac_key: cdktf.stringToTerraform(this._pacKey),
      pac_key_encryption: cdktf.stringToTerraform(this._pacKeyEncryption),
      retransmit: cdktf.numberToTerraform(this._retransmit),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_port: {
        value: cdktf.numberToHclTerraform(this._accountingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_port: {
        value: cdktf.numberToHclTerraform(this._authenticationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      automate_tester_idle_time: {
        value: cdktf.numberToHclTerraform(this._automateTesterIdleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      automate_tester_ignore_acct_port: {
        value: cdktf.booleanToHclTerraform(this._automateTesterIgnoreAcctPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automate_tester_ignore_auth_port: {
        value: cdktf.booleanToHclTerraform(this._automateTesterIgnoreAuthPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automate_tester_probe_on_config: {
        value: cdktf.booleanToHclTerraform(this._automateTesterProbeOnConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automate_tester_username: {
        value: cdktf.stringToHclTerraform(this._automateTesterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
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
      key_encryption: {
        value: cdktf.stringToHclTerraform(this._keyEncryption),
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
      pac_key: {
        value: cdktf.stringToHclTerraform(this._pacKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pac_key_encryption: {
        value: cdktf.stringToHclTerraform(this._pacKeyEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retransmit: {
        value: cdktf.numberToHclTerraform(this._retransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
