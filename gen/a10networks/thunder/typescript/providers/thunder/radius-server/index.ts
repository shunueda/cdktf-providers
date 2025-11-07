// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the RADIUS default privilege
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#default_privilege_read_write RadiusServer#default_privilege_read_write}
  */
  readonly defaultPrivilegeReadWrite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#id RadiusServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#uuid RadiusServer#uuid}
  */
  readonly uuid?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#host RadiusServer#host}
  */
  readonly host?: RadiusServerHost;
}
export interface RadiusServerHostIpv4ListSecretPortCfg {
  /**
  * Specify the RADIUS server's accounting port (default 1813)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#acct_port RadiusServer#acct_port}
  */
  readonly acctPort?: number;
  /**
  * Specify the RADIUS server's authentication port (default 1812)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#auth_port RadiusServer#auth_port}
  */
  readonly authPort?: number;
  /**
  * Specify the maximum times allowed for resending an request to the radius server (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#retransmit RadiusServer#retransmit}
  */
  readonly retransmit?: number;
  /**
  * Specify the maximum time allowed for waiting for a response from a radius server (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#timeout RadiusServer#timeout}
  */
  readonly timeout?: number;
}

export function radiusServerHostIpv4ListSecretPortCfgToTerraform(struct?: RadiusServerHostIpv4ListSecretPortCfgOutputReference | RadiusServerHostIpv4ListSecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_port: cdktf.numberToTerraform(struct!.acctPort),
    auth_port: cdktf.numberToTerraform(struct!.authPort),
    retransmit: cdktf.numberToTerraform(struct!.retransmit),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function radiusServerHostIpv4ListSecretPortCfgToHclTerraform(struct?: RadiusServerHostIpv4ListSecretPortCfgOutputReference | RadiusServerHostIpv4ListSecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_port: {
      value: cdktf.numberToHclTerraform(struct!.acctPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_port: {
      value: cdktf.numberToHclTerraform(struct!.authPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit: {
      value: cdktf.numberToHclTerraform(struct!.retransmit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostIpv4ListSecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHostIpv4ListSecretPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPort = this._acctPort;
    }
    if (this._authPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPort = this._authPort;
    }
    if (this._retransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmit = this._retransmit;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHostIpv4ListSecretPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acctPort = undefined;
      this._authPort = undefined;
      this._retransmit = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acctPort = value.acctPort;
      this._authPort = value.authPort;
      this._retransmit = value.retransmit;
      this._timeout = value.timeout;
    }
  }

  // acct_port - computed: false, optional: true, required: false
  private _acctPort?: number; 
  public get acctPort() {
    return this.getNumberAttribute('acct_port');
  }
  public set acctPort(value: number) {
    this._acctPort = value;
  }
  public resetAcctPort() {
    this._acctPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortInput() {
    return this._acctPort;
  }

  // auth_port - computed: false, optional: true, required: false
  private _authPort?: number; 
  public get authPort() {
    return this.getNumberAttribute('auth_port');
  }
  public set authPort(value: number) {
    this._authPort = value;
  }
  public resetAuthPort() {
    this._authPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortInput() {
    return this._authPort;
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
}
export interface RadiusServerHostIpv4ListSecret {
  /**
  * The RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#secret_value RadiusServer#secret_value}
  */
  readonly secretValue?: string;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#port_cfg RadiusServer#port_cfg}
  */
  readonly portCfg?: RadiusServerHostIpv4ListSecretPortCfg;
}

export function radiusServerHostIpv4ListSecretToTerraform(struct?: RadiusServerHostIpv4ListSecretOutputReference | RadiusServerHostIpv4ListSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    port_cfg: radiusServerHostIpv4ListSecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function radiusServerHostIpv4ListSecretToHclTerraform(struct?: RadiusServerHostIpv4ListSecretOutputReference | RadiusServerHostIpv4ListSecret): any {
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
    port_cfg: {
      value: radiusServerHostIpv4ListSecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostIpv4ListSecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostIpv4ListSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHostIpv4ListSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._portCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCfg = this._portCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHostIpv4ListSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretValue = undefined;
      this._portCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretValue = value.secretValue;
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

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new RadiusServerHostIpv4ListSecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: RadiusServerHostIpv4ListSecretPortCfg) {
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
export interface RadiusServerHostIpv4ListStruct {
  /**
  * IPV4 address of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#ipv4_addr RadiusServer#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#uuid RadiusServer#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#secret RadiusServer#secret}
  */
  readonly secret?: RadiusServerHostIpv4ListSecret;
}

export function radiusServerHostIpv4ListStructToTerraform(struct?: RadiusServerHostIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    secret: radiusServerHostIpv4ListSecretToTerraform(struct!.secret),
  }
}


export function radiusServerHostIpv4ListStructToHclTerraform(struct?: RadiusServerHostIpv4ListStruct | cdktf.IResolvable): any {
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
      value: radiusServerHostIpv4ListSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostIpv4ListSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostIpv4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RadiusServerHostIpv4ListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RadiusServerHostIpv4ListStruct | cdktf.IResolvable | undefined) {
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
  private _secret = new RadiusServerHostIpv4ListSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: RadiusServerHostIpv4ListSecret) {
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

export class RadiusServerHostIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : RadiusServerHostIpv4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): RadiusServerHostIpv4ListStructOutputReference {
    return new RadiusServerHostIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RadiusServerHostIpv6ListSecretPortCfg {
  /**
  * Specify the RADIUS server's accounting port (default 1813)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#acct_port RadiusServer#acct_port}
  */
  readonly acctPort?: number;
  /**
  * Specify the RADIUS server's authentication port (default 1812)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#auth_port RadiusServer#auth_port}
  */
  readonly authPort?: number;
  /**
  * Specify the maximum times allowed for resending an request to the radius server (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#retransmit RadiusServer#retransmit}
  */
  readonly retransmit?: number;
  /**
  * Specify the maximum time allowed for waiting for a response from a radius server (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#timeout RadiusServer#timeout}
  */
  readonly timeout?: number;
}

export function radiusServerHostIpv6ListSecretPortCfgToTerraform(struct?: RadiusServerHostIpv6ListSecretPortCfgOutputReference | RadiusServerHostIpv6ListSecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_port: cdktf.numberToTerraform(struct!.acctPort),
    auth_port: cdktf.numberToTerraform(struct!.authPort),
    retransmit: cdktf.numberToTerraform(struct!.retransmit),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function radiusServerHostIpv6ListSecretPortCfgToHclTerraform(struct?: RadiusServerHostIpv6ListSecretPortCfgOutputReference | RadiusServerHostIpv6ListSecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_port: {
      value: cdktf.numberToHclTerraform(struct!.acctPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_port: {
      value: cdktf.numberToHclTerraform(struct!.authPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit: {
      value: cdktf.numberToHclTerraform(struct!.retransmit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostIpv6ListSecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHostIpv6ListSecretPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPort = this._acctPort;
    }
    if (this._authPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPort = this._authPort;
    }
    if (this._retransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmit = this._retransmit;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHostIpv6ListSecretPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acctPort = undefined;
      this._authPort = undefined;
      this._retransmit = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acctPort = value.acctPort;
      this._authPort = value.authPort;
      this._retransmit = value.retransmit;
      this._timeout = value.timeout;
    }
  }

  // acct_port - computed: false, optional: true, required: false
  private _acctPort?: number; 
  public get acctPort() {
    return this.getNumberAttribute('acct_port');
  }
  public set acctPort(value: number) {
    this._acctPort = value;
  }
  public resetAcctPort() {
    this._acctPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortInput() {
    return this._acctPort;
  }

  // auth_port - computed: false, optional: true, required: false
  private _authPort?: number; 
  public get authPort() {
    return this.getNumberAttribute('auth_port');
  }
  public set authPort(value: number) {
    this._authPort = value;
  }
  public resetAuthPort() {
    this._authPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortInput() {
    return this._authPort;
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
}
export interface RadiusServerHostIpv6ListSecret {
  /**
  * The RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#secret_value RadiusServer#secret_value}
  */
  readonly secretValue?: string;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#port_cfg RadiusServer#port_cfg}
  */
  readonly portCfg?: RadiusServerHostIpv6ListSecretPortCfg;
}

export function radiusServerHostIpv6ListSecretToTerraform(struct?: RadiusServerHostIpv6ListSecretOutputReference | RadiusServerHostIpv6ListSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    port_cfg: radiusServerHostIpv6ListSecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function radiusServerHostIpv6ListSecretToHclTerraform(struct?: RadiusServerHostIpv6ListSecretOutputReference | RadiusServerHostIpv6ListSecret): any {
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
    port_cfg: {
      value: radiusServerHostIpv6ListSecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostIpv6ListSecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostIpv6ListSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHostIpv6ListSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._portCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCfg = this._portCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHostIpv6ListSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretValue = undefined;
      this._portCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretValue = value.secretValue;
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

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new RadiusServerHostIpv6ListSecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: RadiusServerHostIpv6ListSecretPortCfg) {
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
export interface RadiusServerHostIpv6ListStruct {
  /**
  * IPV6 address of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#ipv6_addr RadiusServer#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#uuid RadiusServer#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#secret RadiusServer#secret}
  */
  readonly secret?: RadiusServerHostIpv6ListSecret;
}

export function radiusServerHostIpv6ListStructToTerraform(struct?: RadiusServerHostIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    secret: radiusServerHostIpv6ListSecretToTerraform(struct!.secret),
  }
}


export function radiusServerHostIpv6ListStructToHclTerraform(struct?: RadiusServerHostIpv6ListStruct | cdktf.IResolvable): any {
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
      value: radiusServerHostIpv6ListSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostIpv6ListSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RadiusServerHostIpv6ListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RadiusServerHostIpv6ListStruct | cdktf.IResolvable | undefined) {
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
  private _secret = new RadiusServerHostIpv6ListSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: RadiusServerHostIpv6ListSecret) {
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

export class RadiusServerHostIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : RadiusServerHostIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): RadiusServerHostIpv6ListStructOutputReference {
    return new RadiusServerHostIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RadiusServerHostNameListSecretPortCfg {
  /**
  * Specify the RADIUS server's accounting port (default 1813)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#acct_port RadiusServer#acct_port}
  */
  readonly acctPort?: number;
  /**
  * Specify the RADIUS server's authentication port (default 1812)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#auth_port RadiusServer#auth_port}
  */
  readonly authPort?: number;
  /**
  * Specify the maximum times allowed for resending an request to the radius server (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#retransmit RadiusServer#retransmit}
  */
  readonly retransmit?: number;
  /**
  * Specify the maximum time allowed for waiting for a response from a radius server (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#timeout RadiusServer#timeout}
  */
  readonly timeout?: number;
}

export function radiusServerHostNameListSecretPortCfgToTerraform(struct?: RadiusServerHostNameListSecretPortCfgOutputReference | RadiusServerHostNameListSecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_port: cdktf.numberToTerraform(struct!.acctPort),
    auth_port: cdktf.numberToTerraform(struct!.authPort),
    retransmit: cdktf.numberToTerraform(struct!.retransmit),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function radiusServerHostNameListSecretPortCfgToHclTerraform(struct?: RadiusServerHostNameListSecretPortCfgOutputReference | RadiusServerHostNameListSecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_port: {
      value: cdktf.numberToHclTerraform(struct!.acctPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_port: {
      value: cdktf.numberToHclTerraform(struct!.authPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit: {
      value: cdktf.numberToHclTerraform(struct!.retransmit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostNameListSecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHostNameListSecretPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPort = this._acctPort;
    }
    if (this._authPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPort = this._authPort;
    }
    if (this._retransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmit = this._retransmit;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHostNameListSecretPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acctPort = undefined;
      this._authPort = undefined;
      this._retransmit = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acctPort = value.acctPort;
      this._authPort = value.authPort;
      this._retransmit = value.retransmit;
      this._timeout = value.timeout;
    }
  }

  // acct_port - computed: false, optional: true, required: false
  private _acctPort?: number; 
  public get acctPort() {
    return this.getNumberAttribute('acct_port');
  }
  public set acctPort(value: number) {
    this._acctPort = value;
  }
  public resetAcctPort() {
    this._acctPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortInput() {
    return this._acctPort;
  }

  // auth_port - computed: false, optional: true, required: false
  private _authPort?: number; 
  public get authPort() {
    return this.getNumberAttribute('auth_port');
  }
  public set authPort(value: number) {
    this._authPort = value;
  }
  public resetAuthPort() {
    this._authPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortInput() {
    return this._authPort;
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
}
export interface RadiusServerHostNameListSecret {
  /**
  * The RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#secret_value RadiusServer#secret_value}
  */
  readonly secretValue?: string;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#port_cfg RadiusServer#port_cfg}
  */
  readonly portCfg?: RadiusServerHostNameListSecretPortCfg;
}

export function radiusServerHostNameListSecretToTerraform(struct?: RadiusServerHostNameListSecretOutputReference | RadiusServerHostNameListSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    port_cfg: radiusServerHostNameListSecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function radiusServerHostNameListSecretToHclTerraform(struct?: RadiusServerHostNameListSecretOutputReference | RadiusServerHostNameListSecret): any {
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
    port_cfg: {
      value: radiusServerHostNameListSecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostNameListSecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostNameListSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHostNameListSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._portCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCfg = this._portCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHostNameListSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretValue = undefined;
      this._portCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretValue = value.secretValue;
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

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new RadiusServerHostNameListSecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: RadiusServerHostNameListSecretPortCfg) {
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
export interface RadiusServerHostNameListStruct {
  /**
  * Hostname of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#hostname RadiusServer#hostname}
  */
  readonly hostname: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#uuid RadiusServer#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#secret RadiusServer#secret}
  */
  readonly secret?: RadiusServerHostNameListSecret;
}

export function radiusServerHostNameListStructToTerraform(struct?: RadiusServerHostNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    secret: radiusServerHostNameListSecretToTerraform(struct!.secret),
  }
}


export function radiusServerHostNameListStructToHclTerraform(struct?: RadiusServerHostNameListStruct | cdktf.IResolvable): any {
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
      value: radiusServerHostNameListSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostNameListSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RadiusServerHostNameListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RadiusServerHostNameListStruct | cdktf.IResolvable | undefined) {
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
  private _secret = new RadiusServerHostNameListSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: RadiusServerHostNameListSecret) {
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

export class RadiusServerHostNameListStructList extends cdktf.ComplexList {
  public internalValue? : RadiusServerHostNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): RadiusServerHostNameListStructOutputReference {
    return new RadiusServerHostNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RadiusServerHost {
  /**
  * ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#ipv4_list RadiusServer#ipv4_list}
  */
  readonly ipv4List?: RadiusServerHostIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#ipv6_list RadiusServer#ipv6_list}
  */
  readonly ipv6List?: RadiusServerHostIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#name_list RadiusServer#name_list}
  */
  readonly nameList?: RadiusServerHostNameListStruct[] | cdktf.IResolvable;
}

export function radiusServerHostToTerraform(struct?: RadiusServerHostOutputReference | RadiusServerHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_list: cdktf.listMapper(radiusServerHostIpv4ListStructToTerraform, true)(struct!.ipv4List),
    ipv6_list: cdktf.listMapper(radiusServerHostIpv6ListStructToTerraform, true)(struct!.ipv6List),
    name_list: cdktf.listMapper(radiusServerHostNameListStructToTerraform, true)(struct!.nameList),
  }
}


export function radiusServerHostToHclTerraform(struct?: RadiusServerHostOutputReference | RadiusServerHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_list: {
      value: cdktf.listMapperHcl(radiusServerHostIpv4ListStructToHclTerraform, true)(struct!.ipv4List),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostIpv4ListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(radiusServerHostIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostIpv6ListStructList",
    },
    name_list: {
      value: cdktf.listMapperHcl(radiusServerHostNameListStructToHclTerraform, true)(struct!.nameList),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostNameListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHost | undefined {
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
    if (this._nameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameList = this._nameList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4List.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
      this._nameList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4List.internalValue = value.ipv4List;
      this._ipv6List.internalValue = value.ipv6List;
      this._nameList.internalValue = value.nameList;
    }
  }

  // ipv4_list - computed: false, optional: true, required: false
  private _ipv4List = new RadiusServerHostIpv4ListStructList(this, "ipv4_list", false);
  public get ipv4List() {
    return this._ipv4List;
  }
  public putIpv4List(value: RadiusServerHostIpv4ListStruct[] | cdktf.IResolvable) {
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
  private _ipv6List = new RadiusServerHostIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: RadiusServerHostIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }

  // name_list - computed: false, optional: true, required: false
  private _nameList = new RadiusServerHostNameListStructList(this, "name_list", false);
  public get nameList() {
    return this._nameList;
  }
  public putNameList(value: RadiusServerHostNameListStruct[] | cdktf.IResolvable) {
    this._nameList.internalValue = value;
  }
  public resetNameList() {
    this._nameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameListInput() {
    return this._nameList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server thunder_radius_server}
*/
export class RadiusServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_radius_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RadiusServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RadiusServer to import
  * @param importFromId The id of the existing RadiusServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RadiusServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_radius_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server thunder_radius_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RadiusServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_radius_server',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultPrivilegeReadWrite = config.defaultPrivilegeReadWrite;
    this._id = config.id;
    this._uuid = config.uuid;
    this._host.internalValue = config.host;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_privilege_read_write - computed: false, optional: true, required: false
  private _defaultPrivilegeReadWrite?: number; 
  public get defaultPrivilegeReadWrite() {
    return this.getNumberAttribute('default_privilege_read_write');
  }
  public set defaultPrivilegeReadWrite(value: number) {
    this._defaultPrivilegeReadWrite = value;
  }
  public resetDefaultPrivilegeReadWrite() {
    this._defaultPrivilegeReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrivilegeReadWriteInput() {
    return this._defaultPrivilegeReadWrite;
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
  private _host = new RadiusServerHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: RadiusServerHost) {
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
      default_privilege_read_write: cdktf.numberToTerraform(this._defaultPrivilegeReadWrite),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      host: radiusServerHostToTerraform(this._host.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_privilege_read_write: {
        value: cdktf.numberToHclTerraform(this._defaultPrivilegeReadWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      host: {
        value: radiusServerHostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RadiusServerHostList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
