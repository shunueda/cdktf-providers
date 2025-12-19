// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TacacsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#id TacacsServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The moniter interval in seconds (default 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#interval TacacsServer#interval}
  */
  readonly interval?: number;
  /**
  * Configure TACACS+ servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#monitor TacacsServer#monitor}
  */
  readonly monitor?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#uuid TacacsServer#uuid}
  */
  readonly uuid?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#host TacacsServer#host}
  */
  readonly host?: TacacsServerHost;
}
export interface TacacsServerHostIpv4ListSecretPortCfg {
  /**
  * Specify monitor TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#monitor TacacsServer#monitor}
  */
  readonly monitor?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#password TacacsServer#password}
  */
  readonly password?: number;
  /**
  * The user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#password_value TacacsServer#password_value}
  */
  readonly passwordValue?: string;
  /**
  * Specify the port number used by TACACS+ server.( default port is 49) (Port number (default 49))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#port TacacsServer#port}
  */
  readonly port?: number;
  /**
  * Prefer data plane to send request (Only for loopback)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#prefer_data_interface TacacsServer#prefer_data_interface}
  */
  readonly preferDataInterface?: number;
  /**
  * Specify the maximum time allowed for setting up a connection with the TACACS+ server. (default timeout is 12 seconds) (Maximum time allowed for setting up a connection with the TACACS+ server, in seconds (default 12))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#timeout TacacsServer#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#username TacacsServer#username}
  */
  readonly username?: string;
}

export function tacacsServerHostIpv4ListSecretPortCfgToTerraform(struct?: TacacsServerHostIpv4ListSecretPortCfgOutputReference | TacacsServerHostIpv4ListSecretPortCfg): any {
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


export function tacacsServerHostIpv4ListSecretPortCfgToHclTerraform(struct?: TacacsServerHostIpv4ListSecretPortCfgOutputReference | TacacsServerHostIpv4ListSecretPortCfg): any {
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

export class TacacsServerHostIpv4ListSecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostIpv4ListSecretPortCfg | undefined {
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

  public set internalValue(value: TacacsServerHostIpv4ListSecretPortCfg | undefined) {
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
export interface TacacsServerHostIpv4ListSecret {
  /**
  * The TACACS+ server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#secret_value TacacsServer#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_eth TacacsServer#source_eth}
  */
  readonly sourceEth?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_ip TacacsServer#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Logical interface (Lif interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_lif TacacsServer#source_lif}
  */
  readonly sourceLif?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_loopback TacacsServer#source_loopback}
  */
  readonly sourceLoopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_trunk TacacsServer#source_trunk}
  */
  readonly sourceTrunk?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_ve TacacsServer#source_ve}
  */
  readonly sourceVe?: number;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#port_cfg TacacsServer#port_cfg}
  */
  readonly portCfg?: TacacsServerHostIpv4ListSecretPortCfg;
}

export function tacacsServerHostIpv4ListSecretToTerraform(struct?: TacacsServerHostIpv4ListSecretOutputReference | TacacsServerHostIpv4ListSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    source_eth: cdktf.numberToTerraform(struct!.sourceEth),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_lif: cdktf.numberToTerraform(struct!.sourceLif),
    source_loopback: cdktf.numberToTerraform(struct!.sourceLoopback),
    source_trunk: cdktf.numberToTerraform(struct!.sourceTrunk),
    source_ve: cdktf.numberToTerraform(struct!.sourceVe),
    port_cfg: tacacsServerHostIpv4ListSecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function tacacsServerHostIpv4ListSecretToHclTerraform(struct?: TacacsServerHostIpv4ListSecretOutputReference | TacacsServerHostIpv4ListSecret): any {
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
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
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
      value: tacacsServerHostIpv4ListSecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostIpv4ListSecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostIpv4ListSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostIpv4ListSecret | undefined {
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
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
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

  public set internalValue(value: TacacsServerHostIpv4ListSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretValue = undefined;
      this._sourceEth = undefined;
      this._sourceIp = undefined;
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
      this._sourceIp = value.sourceIp;
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

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
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
  private _portCfg = new TacacsServerHostIpv4ListSecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: TacacsServerHostIpv4ListSecretPortCfg) {
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
export interface TacacsServerHostIpv4ListStruct {
  /**
  * IPV4 address of TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#ipv4_addr TacacsServer#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#uuid TacacsServer#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#secret TacacsServer#secret}
  */
  readonly secret?: TacacsServerHostIpv4ListSecret;
}

export function tacacsServerHostIpv4ListStructToTerraform(struct?: TacacsServerHostIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    secret: tacacsServerHostIpv4ListSecretToTerraform(struct!.secret),
  }
}


export function tacacsServerHostIpv4ListStructToHclTerraform(struct?: TacacsServerHostIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: tacacsServerHostIpv4ListSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostIpv4ListSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostIpv4ListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TacacsServerHostIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsServerHostIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._uuid = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._uuid = value.uuid;
      this._secret.internalValue = value.secret;
    }
  }

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
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
  private _secret = new TacacsServerHostIpv4ListSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: TacacsServerHostIpv4ListSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class TacacsServerHostIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : TacacsServerHostIpv4ListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TacacsServerHostIpv4ListStructOutputReference {
    return new TacacsServerHostIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TacacsServerHostIpv6ListSecretPortCfg {
  /**
  * Specify monitor TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#monitor TacacsServer#monitor}
  */
  readonly monitor?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#password TacacsServer#password}
  */
  readonly password?: number;
  /**
  * The user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#password_value TacacsServer#password_value}
  */
  readonly passwordValue?: string;
  /**
  * Specify the port number used by TACACS+ server.( default port is 49) (Port number (default 49))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#port TacacsServer#port}
  */
  readonly port?: number;
  /**
  * Prefer data plane to send request (Only for loopback)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#prefer_data_interface TacacsServer#prefer_data_interface}
  */
  readonly preferDataInterface?: number;
  /**
  * Specify the maximum time allowed for setting up a connection with the TACACS+ server. (default timeout is 12 seconds) (Maximum time allowed for setting up a connection with the TACACS+ server, in seconds (default 12))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#timeout TacacsServer#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#username TacacsServer#username}
  */
  readonly username?: string;
}

export function tacacsServerHostIpv6ListSecretPortCfgToTerraform(struct?: TacacsServerHostIpv6ListSecretPortCfgOutputReference | TacacsServerHostIpv6ListSecretPortCfg): any {
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


export function tacacsServerHostIpv6ListSecretPortCfgToHclTerraform(struct?: TacacsServerHostIpv6ListSecretPortCfgOutputReference | TacacsServerHostIpv6ListSecretPortCfg): any {
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

export class TacacsServerHostIpv6ListSecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostIpv6ListSecretPortCfg | undefined {
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

  public set internalValue(value: TacacsServerHostIpv6ListSecretPortCfg | undefined) {
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
export interface TacacsServerHostIpv6ListSecret {
  /**
  * The TACACS+ server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#secret_value TacacsServer#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_eth TacacsServer#source_eth}
  */
  readonly sourceEth?: number;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_ipv6 TacacsServer#source_ipv6}
  */
  readonly sourceIpv6?: string;
  /**
  * Logical interface (Lif interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_lif TacacsServer#source_lif}
  */
  readonly sourceLif?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_loopback TacacsServer#source_loopback}
  */
  readonly sourceLoopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_trunk TacacsServer#source_trunk}
  */
  readonly sourceTrunk?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_ve TacacsServer#source_ve}
  */
  readonly sourceVe?: number;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#port_cfg TacacsServer#port_cfg}
  */
  readonly portCfg?: TacacsServerHostIpv6ListSecretPortCfg;
}

export function tacacsServerHostIpv6ListSecretToTerraform(struct?: TacacsServerHostIpv6ListSecretOutputReference | TacacsServerHostIpv6ListSecret): any {
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
    port_cfg: tacacsServerHostIpv6ListSecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function tacacsServerHostIpv6ListSecretToHclTerraform(struct?: TacacsServerHostIpv6ListSecretOutputReference | TacacsServerHostIpv6ListSecret): any {
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
      value: tacacsServerHostIpv6ListSecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostIpv6ListSecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostIpv6ListSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostIpv6ListSecret | undefined {
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

  public set internalValue(value: TacacsServerHostIpv6ListSecret | undefined) {
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
  private _portCfg = new TacacsServerHostIpv6ListSecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: TacacsServerHostIpv6ListSecretPortCfg) {
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
export interface TacacsServerHostIpv6ListStruct {
  /**
  * IPV6 address of TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#ipv6_addr TacacsServer#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#uuid TacacsServer#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#secret TacacsServer#secret}
  */
  readonly secret?: TacacsServerHostIpv6ListSecret;
}

export function tacacsServerHostIpv6ListStructToTerraform(struct?: TacacsServerHostIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    secret: tacacsServerHostIpv6ListSecretToTerraform(struct!.secret),
  }
}


export function tacacsServerHostIpv6ListStructToHclTerraform(struct?: TacacsServerHostIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: tacacsServerHostIpv6ListSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostIpv6ListSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostIpv6ListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TacacsServerHostIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsServerHostIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Addr = undefined;
      this._uuid = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Addr = value.ipv6Addr;
      this._uuid = value.uuid;
      this._secret.internalValue = value.secret;
    }
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
  private _secret = new TacacsServerHostIpv6ListSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: TacacsServerHostIpv6ListSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class TacacsServerHostIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : TacacsServerHostIpv6ListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TacacsServerHostIpv6ListStructOutputReference {
    return new TacacsServerHostIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TacacsServerHostTacacsHostnameListSecretPortCfg {
  /**
  * Specify monitor TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#monitor TacacsServer#monitor}
  */
  readonly monitor?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#password TacacsServer#password}
  */
  readonly password?: number;
  /**
  * The user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#password_value TacacsServer#password_value}
  */
  readonly passwordValue?: string;
  /**
  * Specify the port number used by TACACS+ server.( default port is 49) (Port number (default 49))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#port TacacsServer#port}
  */
  readonly port?: number;
  /**
  * Prefer data plane to send request (Only for loopback)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#prefer_data_interface TacacsServer#prefer_data_interface}
  */
  readonly preferDataInterface?: number;
  /**
  * Specify the maximum time allowed for setting up a connection with the TACACS+ server. (default timeout is 12 seconds) (Maximum time allowed for setting up a connection with the TACACS+ server, in seconds (default 12))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#timeout TacacsServer#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#username TacacsServer#username}
  */
  readonly username?: string;
}

export function tacacsServerHostTacacsHostnameListSecretPortCfgToTerraform(struct?: TacacsServerHostTacacsHostnameListSecretPortCfgOutputReference | TacacsServerHostTacacsHostnameListSecretPortCfg): any {
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


export function tacacsServerHostTacacsHostnameListSecretPortCfgToHclTerraform(struct?: TacacsServerHostTacacsHostnameListSecretPortCfgOutputReference | TacacsServerHostTacacsHostnameListSecretPortCfg): any {
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

export class TacacsServerHostTacacsHostnameListSecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostTacacsHostnameListSecretPortCfg | undefined {
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

  public set internalValue(value: TacacsServerHostTacacsHostnameListSecretPortCfg | undefined) {
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
export interface TacacsServerHostTacacsHostnameListSecret {
  /**
  * The TACACS+ server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#secret_value TacacsServer#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_eth TacacsServer#source_eth}
  */
  readonly sourceEth?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_ip TacacsServer#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_ipv6 TacacsServer#source_ipv6}
  */
  readonly sourceIpv6?: string;
  /**
  * Logical interface (Lif interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_lif TacacsServer#source_lif}
  */
  readonly sourceLif?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_loopback TacacsServer#source_loopback}
  */
  readonly sourceLoopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_trunk TacacsServer#source_trunk}
  */
  readonly sourceTrunk?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#source_ve TacacsServer#source_ve}
  */
  readonly sourceVe?: number;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#port_cfg TacacsServer#port_cfg}
  */
  readonly portCfg?: TacacsServerHostTacacsHostnameListSecretPortCfg;
}

export function tacacsServerHostTacacsHostnameListSecretToTerraform(struct?: TacacsServerHostTacacsHostnameListSecretOutputReference | TacacsServerHostTacacsHostnameListSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    source_eth: cdktf.numberToTerraform(struct!.sourceEth),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ipv6: cdktf.stringToTerraform(struct!.sourceIpv6),
    source_lif: cdktf.numberToTerraform(struct!.sourceLif),
    source_loopback: cdktf.numberToTerraform(struct!.sourceLoopback),
    source_trunk: cdktf.numberToTerraform(struct!.sourceTrunk),
    source_ve: cdktf.numberToTerraform(struct!.sourceVe),
    port_cfg: tacacsServerHostTacacsHostnameListSecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function tacacsServerHostTacacsHostnameListSecretToHclTerraform(struct?: TacacsServerHostTacacsHostnameListSecretOutputReference | TacacsServerHostTacacsHostnameListSecret): any {
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
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: tacacsServerHostTacacsHostnameListSecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostTacacsHostnameListSecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostTacacsHostnameListSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostTacacsHostnameListSecret | undefined {
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
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
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

  public set internalValue(value: TacacsServerHostTacacsHostnameListSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretValue = undefined;
      this._sourceEth = undefined;
      this._sourceIp = undefined;
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
      this._sourceIp = value.sourceIp;
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

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
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
  private _portCfg = new TacacsServerHostTacacsHostnameListSecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: TacacsServerHostTacacsHostnameListSecretPortCfg) {
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
export interface TacacsServerHostTacacsHostnameListStruct {
  /**
  * Hostname of TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#hostname TacacsServer#hostname}
  */
  readonly hostname: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#uuid TacacsServer#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#secret TacacsServer#secret}
  */
  readonly secret?: TacacsServerHostTacacsHostnameListSecret;
}

export function tacacsServerHostTacacsHostnameListStructToTerraform(struct?: TacacsServerHostTacacsHostnameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    secret: tacacsServerHostTacacsHostnameListSecretToTerraform(struct!.secret),
  }
}


export function tacacsServerHostTacacsHostnameListStructToHclTerraform(struct?: TacacsServerHostTacacsHostnameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: tacacsServerHostTacacsHostnameListSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostTacacsHostnameListSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostTacacsHostnameListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TacacsServerHostTacacsHostnameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsServerHostTacacsHostnameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._uuid = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._uuid = value.uuid;
      this._secret.internalValue = value.secret;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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
  private _secret = new TacacsServerHostTacacsHostnameListSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: TacacsServerHostTacacsHostnameListSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class TacacsServerHostTacacsHostnameListStructList extends cdktf.ComplexList {
  public internalValue? : TacacsServerHostTacacsHostnameListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TacacsServerHostTacacsHostnameListStructOutputReference {
    return new TacacsServerHostTacacsHostnameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TacacsServerHost {
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#ipv4_list TacacsServer#ipv4_list}
  */
  readonly ipv4List?: TacacsServerHostIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#ipv6_list TacacsServer#ipv6_list}
  */
  readonly ipv6List?: TacacsServerHostIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * tacacs_hostname_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#tacacs_hostname_list TacacsServer#tacacs_hostname_list}
  */
  readonly tacacsHostnameList?: TacacsServerHostTacacsHostnameListStruct[] | cdktf.IResolvable;
}

export function tacacsServerHostToTerraform(struct?: TacacsServerHostOutputReference | TacacsServerHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_list: cdktf.listMapper(tacacsServerHostIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(tacacsServerHostIpv6ListStructToTerraform, true)(struct!.ipv6List),
    tacacs_hostname_list: cdktf.listMapper(tacacsServerHostTacacsHostnameListStructToTerraform, true)(struct!.tacacsHostnameList),
  }
}


export function tacacsServerHostToHclTerraform(struct?: TacacsServerHostOutputReference | TacacsServerHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_list: {
      value: cdktf.listMapperHcl(tacacsServerHostIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(tacacsServerHostIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostIpv6ListStructList",
    },
    tacacs_hostname_list: {
      value: cdktf.listMapperHcl(tacacsServerHostTacacsHostnameListStructToHclTerraform, true)(struct!.tacacsHostnameList),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostTacacsHostnameListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4List = this._ipv4List?.internalValue;
    }
    if (this._ipv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6List = this._ipv6List?.internalValue;
    }
    if (this._tacacsHostnameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacacsHostnameList = this._tacacsHostnameList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsServerHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
      this._tacacsHostnameList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
      this._tacacsHostnameList.internalValue = value.tacacsHostnameList;
    }
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new TacacsServerHostIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: TacacsServerHostIpv4ListStruct[] | cdktf.IResolvable) {
    this._ipv4List.internalValue = value;
  }
  public resetIpv4List() {
    this._ipv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ListInput() {
    return this._ipv4List.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new TacacsServerHostIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: TacacsServerHostIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }

  // tacacs_hostname_list - computed: false, optional: true, required: false
  private _tacacsHostnameList = new TacacsServerHostTacacsHostnameListStructList(this, "tacacs_hostname_list", false);
  public get tacacsHostnameList() {
    return this._tacacsHostnameList;
  }
  public putTacacsHostnameList(value: TacacsServerHostTacacsHostnameListStruct[] | cdktf.IResolvable) {
    this._tacacsHostnameList.internalValue = value;
  }
  public resetTacacsHostnameList() {
    this._tacacsHostnameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsHostnameListInput() {
    return this._tacacsHostnameList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server thunder_tacacs_server}
*/
export class TacacsServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_tacacs_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TacacsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TacacsServer to import
  * @param importFromId The id of the existing TacacsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TacacsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_tacacs_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/tacacs_server thunder_tacacs_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TacacsServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TacacsServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_tacacs_server',
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
    this._interval = config.interval;
    this._monitor = config.monitor;
    this._uuid = config.uuid;
    this._host.internalValue = config.host;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // host - computed: false, optional: true, required: false
  private _host = new TacacsServerHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: TacacsServerHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      monitor: cdktf.numberToTerraform(this._monitor),
      uuid: cdktf.stringToTerraform(this._uuid),
      host: tacacsServerHostToTerraform(this._host.internalValue),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor: {
        value: cdktf.numberToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: tacacsServerHostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TacacsServerHostList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
