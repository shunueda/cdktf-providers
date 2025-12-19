// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TacacsServerHostIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#id TacacsServerHostIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV6 address of TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#ipv6_addr TacacsServerHostIpv6#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#uuid TacacsServerHostIpv6#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#secret TacacsServerHostIpv6#secret}
  */
  readonly secret?: TacacsServerHostIpv6Secret;
}
export interface TacacsServerHostIpv6SecretPortCfg {
  /**
  * Specify monitor TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#monitor TacacsServerHostIpv6#monitor}
  */
  readonly monitor?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#password TacacsServerHostIpv6#password}
  */
  readonly password?: number;
  /**
  * The user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#password_value TacacsServerHostIpv6#password_value}
  */
  readonly passwordValue?: string;
  /**
  * Specify the port number used by TACACS+ server.( default port is 49) (Port number (default 49))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#port TacacsServerHostIpv6#port}
  */
  readonly port?: number;
  /**
  * Prefer data plane to send request (Only for loopback)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#prefer_data_interface TacacsServerHostIpv6#prefer_data_interface}
  */
  readonly preferDataInterface?: number;
  /**
  * Specify the maximum time allowed for setting up a connection with the TACACS+ server. (default timeout is 12 seconds) (Maximum time allowed for setting up a connection with the TACACS+ server, in seconds (default 12))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#timeout TacacsServerHostIpv6#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#username TacacsServerHostIpv6#username}
  */
  readonly username?: string;
}

export function tacacsServerHostIpv6SecretPortCfgToTerraform(struct?: TacacsServerHostIpv6SecretPortCfgOutputReference | TacacsServerHostIpv6SecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor: cdktf.numberToTerraform(struct!.monitor),
    password: cdktf.numberToTerraform(struct!.password),
    password_value: cdktf.stringToTerraform(struct!.passwordValue),
    port: cdktf.numberToTerraform(struct!.port),
    prefer_data_interface: cdktf.numberToTerraform(struct!.preferDataInterface),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function tacacsServerHostIpv6SecretPortCfgToHclTerraform(struct?: TacacsServerHostIpv6SecretPortCfgOutputReference | TacacsServerHostIpv6SecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor: {
      value: cdktf.numberToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.numberToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_value: {
      value: cdktf.stringToHclTerraform(struct!.passwordValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_data_interface: {
      value: cdktf.numberToHclTerraform(struct!.preferDataInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostIpv6SecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostIpv6SecretPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordValue = this._passwordValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._preferDataInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferDataInterface = this._preferDataInterface;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsServerHostIpv6SecretPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitor = undefined;
      this._password = undefined;
      this._passwordValue = undefined;
      this._port = undefined;
      this._preferDataInterface = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitor = value.monitor;
      this._password = value.password;
      this._passwordValue = value.passwordValue;
      this._port = value.port;
      this._preferDataInterface = value.preferDataInterface;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: number; 
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }
  public set monitor(value: number) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_value - computed: false, optional: true, required: false
  private _passwordValue?: string; 
  public get passwordValue() {
    return this.getStringAttribute('password_value');
  }
  public set passwordValue(value: string) {
    this._passwordValue = value;
  }
  public resetPasswordValue() {
    this._passwordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordValueInput() {
    return this._passwordValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefer_data_interface - computed: false, optional: true, required: false
  private _preferDataInterface?: number; 
  public get preferDataInterface() {
    return this.getNumberAttribute('prefer_data_interface');
  }
  public set preferDataInterface(value: number) {
    this._preferDataInterface = value;
  }
  public resetPreferDataInterface() {
    this._preferDataInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferDataInterfaceInput() {
    return this._preferDataInterface;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface TacacsServerHostIpv6Secret {
  /**
  * The TACACS+ server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#secret_value TacacsServerHostIpv6#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#source_eth TacacsServerHostIpv6#source_eth}
  */
  readonly sourceEth?: number;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#source_ipv6 TacacsServerHostIpv6#source_ipv6}
  */
  readonly sourceIpv6?: string;
  /**
  * Logical interface (Lif interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#source_lif TacacsServerHostIpv6#source_lif}
  */
  readonly sourceLif?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#source_loopback TacacsServerHostIpv6#source_loopback}
  */
  readonly sourceLoopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#source_trunk TacacsServerHostIpv6#source_trunk}
  */
  readonly sourceTrunk?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#source_ve TacacsServerHostIpv6#source_ve}
  */
  readonly sourceVe?: number;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#port_cfg TacacsServerHostIpv6#port_cfg}
  */
  readonly portCfg?: TacacsServerHostIpv6SecretPortCfg;
}

export function tacacsServerHostIpv6SecretToTerraform(struct?: TacacsServerHostIpv6SecretOutputReference | TacacsServerHostIpv6Secret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    source_eth: cdktf.numberToTerraform(struct!.sourceEth),
    source_ipv6: cdktf.stringToTerraform(struct!.sourceIpv6),
    source_lif: cdktf.numberToTerraform(struct!.sourceLif),
    source_loopback: cdktf.numberToTerraform(struct!.sourceLoopback),
    source_trunk: cdktf.numberToTerraform(struct!.sourceTrunk),
    source_ve: cdktf.numberToTerraform(struct!.sourceVe),
    port_cfg: tacacsServerHostIpv6SecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function tacacsServerHostIpv6SecretToHclTerraform(struct?: TacacsServerHostIpv6SecretOutputReference | TacacsServerHostIpv6Secret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_value: {
      value: cdktf.stringToHclTerraform(struct!.secretValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_eth: {
      value: cdktf.numberToHclTerraform(struct!.sourceEth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_lif: {
      value: cdktf.numberToHclTerraform(struct!.sourceLif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_loopback: {
      value: cdktf.numberToHclTerraform(struct!.sourceLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_trunk: {
      value: cdktf.numberToHclTerraform(struct!.sourceTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ve: {
      value: cdktf.numberToHclTerraform(struct!.sourceVe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_cfg: {
      value: tacacsServerHostIpv6SecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostIpv6SecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostIpv6SecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostIpv6Secret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._sourceEth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEth = this._sourceEth;
    }
    if (this._sourceIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpv6 = this._sourceIpv6;
    }
    if (this._sourceLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLif = this._sourceLif;
    }
    if (this._sourceLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLoopback = this._sourceLoopback;
    }
    if (this._sourceTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTrunk = this._sourceTrunk;
    }
    if (this._sourceVe !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVe = this._sourceVe;
    }
    if (this._portCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCfg = this._portCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsServerHostIpv6Secret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretValue = undefined;
      this._sourceEth = undefined;
      this._sourceIpv6 = undefined;
      this._sourceLif = undefined;
      this._sourceLoopback = undefined;
      this._sourceTrunk = undefined;
      this._sourceVe = undefined;
      this._portCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretValue = value.secretValue;
      this._sourceEth = value.sourceEth;
      this._sourceIpv6 = value.sourceIpv6;
      this._sourceLif = value.sourceLif;
      this._sourceLoopback = value.sourceLoopback;
      this._sourceTrunk = value.sourceTrunk;
      this._sourceVe = value.sourceVe;
      this._portCfg.internalValue = value.portCfg;
    }
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // source_eth - computed: false, optional: true, required: false
  private _sourceEth?: number; 
  public get sourceEth() {
    return this.getNumberAttribute('source_eth');
  }
  public set sourceEth(value: number) {
    this._sourceEth = value;
  }
  public resetSourceEth() {
    this._sourceEth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEthInput() {
    return this._sourceEth;
  }

  // source_ipv6 - computed: false, optional: true, required: false
  private _sourceIpv6?: string; 
  public get sourceIpv6() {
    return this.getStringAttribute('source_ipv6');
  }
  public set sourceIpv6(value: string) {
    this._sourceIpv6 = value;
  }
  public resetSourceIpv6() {
    this._sourceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv6Input() {
    return this._sourceIpv6;
  }

  // source_lif - computed: false, optional: true, required: false
  private _sourceLif?: number; 
  public get sourceLif() {
    return this.getNumberAttribute('source_lif');
  }
  public set sourceLif(value: number) {
    this._sourceLif = value;
  }
  public resetSourceLif() {
    this._sourceLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLifInput() {
    return this._sourceLif;
  }

  // source_loopback - computed: false, optional: true, required: false
  private _sourceLoopback?: number; 
  public get sourceLoopback() {
    return this.getNumberAttribute('source_loopback');
  }
  public set sourceLoopback(value: number) {
    this._sourceLoopback = value;
  }
  public resetSourceLoopback() {
    this._sourceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLoopbackInput() {
    return this._sourceLoopback;
  }

  // source_trunk - computed: false, optional: true, required: false
  private _sourceTrunk?: number; 
  public get sourceTrunk() {
    return this.getNumberAttribute('source_trunk');
  }
  public set sourceTrunk(value: number) {
    this._sourceTrunk = value;
  }
  public resetSourceTrunk() {
    this._sourceTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTrunkInput() {
    return this._sourceTrunk;
  }

  // source_ve - computed: false, optional: true, required: false
  private _sourceVe?: number; 
  public get sourceVe() {
    return this.getNumberAttribute('source_ve');
  }
  public set sourceVe(value: number) {
    this._sourceVe = value;
  }
  public resetSourceVe() {
    this._sourceVe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVeInput() {
    return this._sourceVe;
  }

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new TacacsServerHostIpv6SecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: TacacsServerHostIpv6SecretPortCfg) {
    this._portCfg.internalValue = value;
  }
  public resetPortCfg() {
    this._portCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCfgInput() {
    return this._portCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6 thunder_tacacs_server_host_ipv6}
*/
export class TacacsServerHostIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_tacacs_server_host_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TacacsServerHostIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TacacsServerHostIpv6 to import
  * @param importFromId The id of the existing TacacsServerHostIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TacacsServerHostIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_tacacs_server_host_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server_host_ipv6 thunder_tacacs_server_host_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TacacsServerHostIpv6Config
  */
  public constructor(scope: Construct, id: string, config: TacacsServerHostIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_tacacs_server_host_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipv6Addr = config.ipv6Addr;
    this._uuid = config.uuid;
    this._secret.internalValue = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv6_addr - computed: false, optional: false, required: true
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new TacacsServerHostIpv6SecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: TacacsServerHostIpv6Secret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6_addr: cdktf.stringToTerraform(this._ipv6Addr),
      uuid: cdktf.stringToTerraform(this._uuid),
      secret: tacacsServerHostIpv6SecretToTerraform(this._secret.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._ipv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: tacacsServerHostIpv6SecretToHclTerraform(this._secret.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TacacsServerHostIpv6SecretList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
