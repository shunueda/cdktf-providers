// https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IptablesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#allowed_cidr_blocks IptablesProvider#allowed_cidr_blocks}
  */
  readonly allowedCidrBlocks: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#firewall_ip IptablesProvider#firewall_ip}
  */
  readonly firewallIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#https IptablesProvider#https}
  */
  readonly https?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#insecure IptablesProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#ipv6_enable IptablesProvider#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#login IptablesProvider#login}
  */
  readonly login?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#no_add_default_drop IptablesProvider#no_add_default_drop}
  */
  readonly noAddDefaultDrop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#password IptablesProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#port IptablesProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#vault_enable IptablesProvider#vault_enable}
  */
  readonly vaultEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#vault_key IptablesProvider#vault_key}
  */
  readonly vaultKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#vault_path IptablesProvider#vault_path}
  */
  readonly vaultPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#alias IptablesProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs iptables}
*/
export class IptablesProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iptables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IptablesProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IptablesProvider to import
  * @param importFromId The id of the existing IptablesProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IptablesProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iptables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/iptables/1.2.1/docs iptables} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IptablesProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IptablesProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'iptables',
      terraformGeneratorMetadata: {
        providerName: 'iptables',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      terraformProviderSource: 'jeremmfr/iptables'
    });
    this._allowedCidrBlocks = config.allowedCidrBlocks;
    this._firewallIp = config.firewallIp;
    this._https = config.https;
    this._insecure = config.insecure;
    this._ipv6Enable = config.ipv6Enable;
    this._login = config.login;
    this._noAddDefaultDrop = config.noAddDefaultDrop;
    this._password = config.password;
    this._port = config.port;
    this._vaultEnable = config.vaultEnable;
    this._vaultKey = config.vaultKey;
    this._vaultPath = config.vaultPath;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_cidr_blocks - computed: false, optional: false, required: true
  private _allowedCidrBlocks?: string[]; 
  public get allowedCidrBlocks() {
    return this._allowedCidrBlocks;
  }
  public set allowedCidrBlocks(value: string[] | undefined) {
    this._allowedCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrBlocksInput() {
    return this._allowedCidrBlocks;
  }

  // firewall_ip - computed: false, optional: false, required: true
  private _firewallIp?: string; 
  public get firewallIp() {
    return this._firewallIp;
  }
  public set firewallIp(value: string | undefined) {
    this._firewallIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIpInput() {
    return this._firewallIp;
  }

  // https - computed: false, optional: true, required: false
  private _https?: boolean | cdktf.IResolvable; 
  public get https() {
    return this._https;
  }
  public set https(value: boolean | cdktf.IResolvable | undefined) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
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

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: boolean | cdktf.IResolvable; 
  public get ipv6Enable() {
    return this._ipv6Enable;
  }
  public set ipv6Enable(value: boolean | cdktf.IResolvable | undefined) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // login - computed: false, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this._login;
  }
  public set login(value: string | undefined) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // no_add_default_drop - computed: false, optional: true, required: false
  private _noAddDefaultDrop?: boolean | cdktf.IResolvable; 
  public get noAddDefaultDrop() {
    return this._noAddDefaultDrop;
  }
  public set noAddDefaultDrop(value: boolean | cdktf.IResolvable | undefined) {
    this._noAddDefaultDrop = value;
  }
  public resetNoAddDefaultDrop() {
    this._noAddDefaultDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAddDefaultDropInput() {
    return this._noAddDefaultDrop;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // vault_enable - computed: false, optional: true, required: false
  private _vaultEnable?: boolean | cdktf.IResolvable; 
  public get vaultEnable() {
    return this._vaultEnable;
  }
  public set vaultEnable(value: boolean | cdktf.IResolvable | undefined) {
    this._vaultEnable = value;
  }
  public resetVaultEnable() {
    this._vaultEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultEnableInput() {
    return this._vaultEnable;
  }

  // vault_key - computed: false, optional: true, required: false
  private _vaultKey?: string; 
  public get vaultKey() {
    return this._vaultKey;
  }
  public set vaultKey(value: string | undefined) {
    this._vaultKey = value;
  }
  public resetVaultKey() {
    this._vaultKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultKeyInput() {
    return this._vaultKey;
  }

  // vault_path - computed: false, optional: true, required: false
  private _vaultPath?: string; 
  public get vaultPath() {
    return this._vaultPath;
  }
  public set vaultPath(value: string | undefined) {
    this._vaultPath = value;
  }
  public resetVaultPath() {
    this._vaultPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPathInput() {
    return this._vaultPath;
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
      allowed_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCidrBlocks),
      firewall_ip: cdktf.stringToTerraform(this._firewallIp),
      https: cdktf.booleanToTerraform(this._https),
      insecure: cdktf.booleanToTerraform(this._insecure),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      login: cdktf.stringToTerraform(this._login),
      no_add_default_drop: cdktf.booleanToTerraform(this._noAddDefaultDrop),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      vault_enable: cdktf.booleanToTerraform(this._vaultEnable),
      vault_key: cdktf.stringToTerraform(this._vaultKey),
      vault_path: cdktf.stringToTerraform(this._vaultPath),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCidrBlocks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firewall_ip: {
        value: cdktf.stringToHclTerraform(this._firewallIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https: {
        value: cdktf.booleanToHclTerraform(this._https),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_add_default_drop: {
        value: cdktf.booleanToHclTerraform(this._noAddDefaultDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vault_enable: {
        value: cdktf.booleanToHclTerraform(this._vaultEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vault_key: {
        value: cdktf.stringToHclTerraform(this._vaultKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_path: {
        value: cdktf.stringToHclTerraform(this._vaultPath),
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
