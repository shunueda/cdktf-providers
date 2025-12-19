// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpmiAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#id SystemIpmiA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reset IPMI Controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#reset SystemIpmiA#reset}
  */
  readonly reset?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#ip SystemIpmiA#ip}
  */
  readonly ip?: SystemIpmiIpA;
  /**
  * ipsrc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#ipsrc SystemIpmiA#ipsrc}
  */
  readonly ipsrc?: SystemIpmiIpsrcA;
  /**
  * tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#tool SystemIpmiA#tool}
  */
  readonly tool?: SystemIpmiToolA;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#user SystemIpmiA#user}
  */
  readonly user?: SystemIpmiUserA;
}
export interface SystemIpmiIpA {
  /**
  * Default gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#default_gateway SystemIpmiA#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#ipv4_address SystemIpmiA#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#ipv4_netmask SystemIpmiA#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function systemIpmiIpAToTerraform(struct?: SystemIpmiIpAOutputReference | SystemIpmiIpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function systemIpmiIpAToHclTerraform(struct?: SystemIpmiIpAOutputReference | SystemIpmiIpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiIpAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiIpA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiIpA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
    }
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
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

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }
}
export interface SystemIpmiIpsrcA {
  /**
  * IP addr obtained by BMC running DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#dhcp SystemIpmiA#dhcp}
  */
  readonly dhcp?: number;
  /**
  * Manually configured static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#static SystemIpmiA#static}
  */
  readonly static?: number;
}

export function systemIpmiIpsrcAToTerraform(struct?: SystemIpmiIpsrcAOutputReference | SystemIpmiIpsrcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.numberToTerraform(struct!.dhcp),
    static: cdktf.numberToTerraform(struct!.static),
  }
}


export function systemIpmiIpsrcAToHclTerraform(struct?: SystemIpmiIpsrcAOutputReference | SystemIpmiIpsrcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.numberToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiIpsrcAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiIpsrcA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiIpsrcA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcp = undefined;
      this._static = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcp = value.dhcp;
      this._static = value.static;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }
}
export interface SystemIpmiToolA {
  /**
  * Command to execute in double quotes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#cmd SystemIpmiA#cmd}
  */
  readonly cmd?: string;
}

export function systemIpmiToolAToTerraform(struct?: SystemIpmiToolAOutputReference | SystemIpmiToolA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.stringToTerraform(struct!.cmd),
  }
}


export function systemIpmiToolAToHclTerraform(struct?: SystemIpmiToolAOutputReference | SystemIpmiToolA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiToolAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiToolA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiToolA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
    }
  }

  // cmd - computed: false, optional: true, required: false
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }
}
export interface SystemIpmiUserA {
  /**
  * Add a new IPMI user (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#add SystemIpmiA#add}
  */
  readonly add?: string;
  /**
  * Full control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#administrator SystemIpmiA#administrator}
  */
  readonly administrator?: number;
  /**
  * Lowest privilege level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#callback SystemIpmiA#callback}
  */
  readonly callback?: number;
  /**
  * Disable an existing IPMI user (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#disable SystemIpmiA#disable}
  */
  readonly disable?: string;
  /**
  * New IPMI User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#newname SystemIpmiA#newname}
  */
  readonly newname?: string;
  /**
  * New Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#newpass SystemIpmiA#newpass}
  */
  readonly newpass?: string;
  /**
  * Most BMC commands are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#operator SystemIpmiA#operator}
  */
  readonly operator?: number;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#password SystemIpmiA#password}
  */
  readonly password?: string;
  /**
  * Change an existing IPMI user privilege (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#privilege SystemIpmiA#privilege}
  */
  readonly privilege?: string;
  /**
  * Change User Name (Current IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#setname SystemIpmiA#setname}
  */
  readonly setname?: string;
  /**
  * Change Password (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#setpass SystemIpmiA#setpass}
  */
  readonly setpass?: string;
  /**
  * Only 'benign' commands are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#user SystemIpmiA#user}
  */
  readonly user?: number;
}

export function systemIpmiUserAToTerraform(struct?: SystemIpmiUserAOutputReference | SystemIpmiUserA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.stringToTerraform(struct!.add),
    administrator: cdktf.numberToTerraform(struct!.administrator),
    callback: cdktf.numberToTerraform(struct!.callback),
    disable: cdktf.stringToTerraform(struct!.disable),
    newname: cdktf.stringToTerraform(struct!.newname),
    newpass: cdktf.stringToTerraform(struct!.newpass),
    operator: cdktf.numberToTerraform(struct!.operator),
    password: cdktf.stringToTerraform(struct!.password),
    privilege: cdktf.stringToTerraform(struct!.privilege),
    setname: cdktf.stringToTerraform(struct!.setname),
    setpass: cdktf.stringToTerraform(struct!.setpass),
    user: cdktf.numberToTerraform(struct!.user),
  }
}


export function systemIpmiUserAToHclTerraform(struct?: SystemIpmiUserAOutputReference | SystemIpmiUserA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.stringToHclTerraform(struct!.add),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrator: {
      value: cdktf.numberToHclTerraform(struct!.administrator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    callback: {
      value: cdktf.numberToHclTerraform(struct!.callback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.stringToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newname: {
      value: cdktf.stringToHclTerraform(struct!.newname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newpass: {
      value: cdktf.stringToHclTerraform(struct!.newpass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.numberToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege: {
      value: cdktf.stringToHclTerraform(struct!.privilege),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setname: {
      value: cdktf.stringToHclTerraform(struct!.setname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setpass: {
      value: cdktf.stringToHclTerraform(struct!.setpass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.numberToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiUserAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiUserA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._administrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrator = this._administrator;
    }
    if (this._callback !== undefined) {
      hasAnyValues = true;
      internalValueResult.callback = this._callback;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._newname !== undefined) {
      hasAnyValues = true;
      internalValueResult.newname = this._newname;
    }
    if (this._newpass !== undefined) {
      hasAnyValues = true;
      internalValueResult.newpass = this._newpass;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilege = this._privilege;
    }
    if (this._setname !== undefined) {
      hasAnyValues = true;
      internalValueResult.setname = this._setname;
    }
    if (this._setpass !== undefined) {
      hasAnyValues = true;
      internalValueResult.setpass = this._setpass;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiUserA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._administrator = undefined;
      this._callback = undefined;
      this._disable = undefined;
      this._newname = undefined;
      this._newpass = undefined;
      this._operator = undefined;
      this._password = undefined;
      this._privilege = undefined;
      this._setname = undefined;
      this._setpass = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._administrator = value.administrator;
      this._callback = value.callback;
      this._disable = value.disable;
      this._newname = value.newname;
      this._newpass = value.newpass;
      this._operator = value.operator;
      this._password = value.password;
      this._privilege = value.privilege;
      this._setname = value.setname;
      this._setpass = value.setpass;
      this._user = value.user;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string; 
  public get add() {
    return this.getStringAttribute('add');
  }
  public set add(value: string) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // administrator - computed: false, optional: true, required: false
  private _administrator?: number; 
  public get administrator() {
    return this.getNumberAttribute('administrator');
  }
  public set administrator(value: number) {
    this._administrator = value;
  }
  public resetAdministrator() {
    this._administrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorInput() {
    return this._administrator;
  }

  // callback - computed: false, optional: true, required: false
  private _callback?: number; 
  public get callback() {
    return this.getNumberAttribute('callback');
  }
  public set callback(value: number) {
    this._callback = value;
  }
  public resetCallback() {
    this._callback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackInput() {
    return this._callback;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: string; 
  public get disable() {
    return this.getStringAttribute('disable');
  }
  public set disable(value: string) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // newname - computed: false, optional: true, required: false
  private _newname?: string; 
  public get newname() {
    return this.getStringAttribute('newname');
  }
  public set newname(value: string) {
    this._newname = value;
  }
  public resetNewname() {
    this._newname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newnameInput() {
    return this._newname;
  }

  // newpass - computed: false, optional: true, required: false
  private _newpass?: string; 
  public get newpass() {
    return this.getStringAttribute('newpass');
  }
  public set newpass(value: string) {
    this._newpass = value;
  }
  public resetNewpass() {
    this._newpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newpassInput() {
    return this._newpass;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // privilege - computed: false, optional: true, required: false
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // setname - computed: false, optional: true, required: false
  private _setname?: string; 
  public get setname() {
    return this.getStringAttribute('setname');
  }
  public set setname(value: string) {
    this._setname = value;
  }
  public resetSetname() {
    this._setname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setnameInput() {
    return this._setname;
  }

  // setpass - computed: false, optional: true, required: false
  private _setpass?: string; 
  public get setpass() {
    return this.getStringAttribute('setpass');
  }
  public set setpass(value: string) {
    this._setpass = value;
  }
  public resetSetpass() {
    this._setpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setpassInput() {
    return this._setpass;
  }

  // user - computed: false, optional: true, required: false
  private _user?: number; 
  public get user() {
    return this.getNumberAttribute('user');
  }
  public set user(value: number) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi thunder_system_ipmi}
*/
export class SystemIpmiA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ipmi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpmiA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpmiA to import
  * @param importFromId The id of the existing SystemIpmiA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpmiA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ipmi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi thunder_system_ipmi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpmiAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpmiAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ipmi',
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
    this._reset = config.reset;
    this._ip.internalValue = config.ip;
    this._ipsrc.internalValue = config.ipsrc;
    this._tool.internalValue = config.tool;
    this._user.internalValue = config.user;
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

  // reset - computed: false, optional: true, required: false
  private _reset?: number; 
  public get reset() {
    return this.getNumberAttribute('reset');
  }
  public set reset(value: number) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new SystemIpmiIpAOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: SystemIpmiIpA) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipsrc - computed: false, optional: true, required: false
  private _ipsrc = new SystemIpmiIpsrcAOutputReference(this, "ipsrc");
  public get ipsrc() {
    return this._ipsrc;
  }
  public putIpsrc(value: SystemIpmiIpsrcA) {
    this._ipsrc.internalValue = value;
  }
  public resetIpsrc() {
    this._ipsrc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsrcInput() {
    return this._ipsrc.internalValue;
  }

  // tool - computed: false, optional: true, required: false
  private _tool = new SystemIpmiToolAOutputReference(this, "tool");
  public get tool() {
    return this._tool;
  }
  public putTool(value: SystemIpmiToolA) {
    this._tool.internalValue = value;
  }
  public resetTool() {
    this._tool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new SystemIpmiUserAOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: SystemIpmiUserA) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      reset: cdktf.numberToTerraform(this._reset),
      ip: systemIpmiIpAToTerraform(this._ip.internalValue),
      ipsrc: systemIpmiIpsrcAToTerraform(this._ipsrc.internalValue),
      tool: systemIpmiToolAToTerraform(this._tool.internalValue),
      user: systemIpmiUserAToTerraform(this._user.internalValue),
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
      reset: {
        value: cdktf.numberToHclTerraform(this._reset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip: {
        value: systemIpmiIpAToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpmiIpAList",
      },
      ipsrc: {
        value: systemIpmiIpsrcAToHclTerraform(this._ipsrc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpmiIpsrcAList",
      },
      tool: {
        value: systemIpmiToolAToHclTerraform(this._tool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpmiToolAList",
      },
      user: {
        value: systemIpmiUserAToHclTerraform(this._user.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpmiUserAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
