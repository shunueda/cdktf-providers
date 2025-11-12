// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigureSnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * AgentPort is the TCP port SNMP agent is using.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#agent_port ConfigureSnmp#agent_port}
  */
  readonly agentPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#id ConfigureSnmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server is the IP address of Network Management System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#server ConfigureSnmp#server}
  */
  readonly server: string;
  /**
  * SnmpVersion is the SNMP version to talk with SNMP agent. Options: V2C, V3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#snmp_version ConfigureSnmp#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * TrapPort is the TCP port SNMP agent is using.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#trap_port ConfigureSnmp#trap_port}
  */
  readonly trapPort?: number;
  /**
  * read_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#read_user ConfigureSnmp#read_user}
  */
  readonly readUser?: ConfigureSnmpReadUser;
  /**
  * trap_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#trap_user ConfigureSnmp#trap_user}
  */
  readonly trapUser?: ConfigureSnmpTrapUser;
  /**
  * write_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#write_user ConfigureSnmp#write_user}
  */
  readonly writeUser?: ConfigureSnmpWriteUser;
}
export interface ConfigureSnmpReadUser {
  /**
  * AuthPassword is the authentication password for SNMP V3 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#auth_password ConfigureSnmp#auth_password}
  */
  readonly authPassword?: string;
  /**
  * AuthPrototol is the authentication protocol for SNMP V3 users. Options are None, MD5, or SHA. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#auth_protocol ConfigureSnmp#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * PrivPassword is the privacy password for SNMP V3 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#priv_password ConfigureSnmp#priv_password}
  */
  readonly privPassword?: string;
  /**
  * PrivPrototol is the privacy protocol for SNMP V3 users. Options are None, DES, or AES. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#priv_protocol ConfigureSnmp#priv_protocol}
  */
  readonly privProtocol?: string;
  /**
  * UserName is the user name to access SNMP V2 or SNMP V3 agent. Default is cohesityV2Public for SNMP Version V2C and cohesityV3Public for SNMP Version V3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#user_name ConfigureSnmp#user_name}
  */
  readonly userName?: string;
}

export function configureSnmpReadUserToTerraform(struct?: ConfigureSnmpReadUserOutputReference | ConfigureSnmpReadUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_protocol: cdktf.stringToTerraform(struct!.authProtocol),
    priv_password: cdktf.stringToTerraform(struct!.privPassword),
    priv_protocol: cdktf.stringToTerraform(struct!.privProtocol),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function configureSnmpReadUserToHclTerraform(struct?: ConfigureSnmpReadUserOutputReference | ConfigureSnmpReadUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.authProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_password: {
      value: cdktf.stringToHclTerraform(struct!.privPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_protocol: {
      value: cdktf.stringToHclTerraform(struct!.privProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigureSnmpReadUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigureSnmpReadUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProtocol = this._authProtocol;
    }
    if (this._privPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.privPassword = this._privPassword;
    }
    if (this._privProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.privProtocol = this._privProtocol;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigureSnmpReadUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authPassword = undefined;
      this._authProtocol = undefined;
      this._privPassword = undefined;
      this._privProtocol = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authPassword = value.authPassword;
      this._authProtocol = value.authProtocol;
      this._privPassword = value.privPassword;
      this._privProtocol = value.privProtocol;
      this._userName = value.userName;
    }
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // priv_password - computed: false, optional: true, required: false
  private _privPassword?: string; 
  public get privPassword() {
    return this.getStringAttribute('priv_password');
  }
  public set privPassword(value: string) {
    this._privPassword = value;
  }
  public resetPrivPassword() {
    this._privPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privPasswordInput() {
    return this._privPassword;
  }

  // priv_protocol - computed: false, optional: true, required: false
  private _privProtocol?: string; 
  public get privProtocol() {
    return this.getStringAttribute('priv_protocol');
  }
  public set privProtocol(value: string) {
    this._privProtocol = value;
  }
  public resetPrivProtocol() {
    this._privProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privProtocolInput() {
    return this._privProtocol;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface ConfigureSnmpTrapUser {
  /**
  * AuthPassword is the authentication password for SNMP V3 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#auth_password ConfigureSnmp#auth_password}
  */
  readonly authPassword?: string;
  /**
  * AuthPrototol is the authentication protocol for SNMP V3 users. Options are None, MD5, or SHA. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#auth_protocol ConfigureSnmp#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * PrivPassword is the privacy password for SNMP V3 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#priv_password ConfigureSnmp#priv_password}
  */
  readonly privPassword?: string;
  /**
  * PrivPrototol is the privacy protocol for SNMP V3 users. Options are None, DES, or AES. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#priv_protocol ConfigureSnmp#priv_protocol}
  */
  readonly privProtocol?: string;
  /**
  * UserName is the user name to access SNMP V2 or SNMP V3 agent. Default is cohesityV2Public for SNMP Version V2C and cohesityV3Public for SNMP Version V3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#user_name ConfigureSnmp#user_name}
  */
  readonly userName?: string;
}

export function configureSnmpTrapUserToTerraform(struct?: ConfigureSnmpTrapUserOutputReference | ConfigureSnmpTrapUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_protocol: cdktf.stringToTerraform(struct!.authProtocol),
    priv_password: cdktf.stringToTerraform(struct!.privPassword),
    priv_protocol: cdktf.stringToTerraform(struct!.privProtocol),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function configureSnmpTrapUserToHclTerraform(struct?: ConfigureSnmpTrapUserOutputReference | ConfigureSnmpTrapUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.authProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_password: {
      value: cdktf.stringToHclTerraform(struct!.privPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_protocol: {
      value: cdktf.stringToHclTerraform(struct!.privProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigureSnmpTrapUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigureSnmpTrapUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProtocol = this._authProtocol;
    }
    if (this._privPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.privPassword = this._privPassword;
    }
    if (this._privProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.privProtocol = this._privProtocol;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigureSnmpTrapUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authPassword = undefined;
      this._authProtocol = undefined;
      this._privPassword = undefined;
      this._privProtocol = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authPassword = value.authPassword;
      this._authProtocol = value.authProtocol;
      this._privPassword = value.privPassword;
      this._privProtocol = value.privProtocol;
      this._userName = value.userName;
    }
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // priv_password - computed: false, optional: true, required: false
  private _privPassword?: string; 
  public get privPassword() {
    return this.getStringAttribute('priv_password');
  }
  public set privPassword(value: string) {
    this._privPassword = value;
  }
  public resetPrivPassword() {
    this._privPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privPasswordInput() {
    return this._privPassword;
  }

  // priv_protocol - computed: false, optional: true, required: false
  private _privProtocol?: string; 
  public get privProtocol() {
    return this.getStringAttribute('priv_protocol');
  }
  public set privProtocol(value: string) {
    this._privProtocol = value;
  }
  public resetPrivProtocol() {
    this._privProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privProtocolInput() {
    return this._privProtocol;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface ConfigureSnmpWriteUser {
  /**
  * AuthPassword is the authentication password for SNMP V3 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#auth_password ConfigureSnmp#auth_password}
  */
  readonly authPassword?: string;
  /**
  * AuthPrototol is the authentication protocol for SNMP V3 users. Options are None, MD5, or SHA. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#auth_protocol ConfigureSnmp#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * PrivPassword is the privacy password for SNMP V3 users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#priv_password ConfigureSnmp#priv_password}
  */
  readonly privPassword?: string;
  /**
  * PrivPrototol is the privacy protocol for SNMP V3 users. Options are None, DES, or AES. Defaults to None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#priv_protocol ConfigureSnmp#priv_protocol}
  */
  readonly privProtocol?: string;
  /**
  * UserName is the user name to access SNMP V2 or SNMP V3 agent. Default is cohesityV2Public for SNMP Version V2C and cohesityV3Public for SNMP Version V3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#user_name ConfigureSnmp#user_name}
  */
  readonly userName?: string;
}

export function configureSnmpWriteUserToTerraform(struct?: ConfigureSnmpWriteUserOutputReference | ConfigureSnmpWriteUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_protocol: cdktf.stringToTerraform(struct!.authProtocol),
    priv_password: cdktf.stringToTerraform(struct!.privPassword),
    priv_protocol: cdktf.stringToTerraform(struct!.privProtocol),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function configureSnmpWriteUserToHclTerraform(struct?: ConfigureSnmpWriteUserOutputReference | ConfigureSnmpWriteUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.authProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_password: {
      value: cdktf.stringToHclTerraform(struct!.privPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_protocol: {
      value: cdktf.stringToHclTerraform(struct!.privProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigureSnmpWriteUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigureSnmpWriteUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProtocol = this._authProtocol;
    }
    if (this._privPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.privPassword = this._privPassword;
    }
    if (this._privProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.privProtocol = this._privProtocol;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigureSnmpWriteUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authPassword = undefined;
      this._authProtocol = undefined;
      this._privPassword = undefined;
      this._privProtocol = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authPassword = value.authPassword;
      this._authProtocol = value.authProtocol;
      this._privPassword = value.privPassword;
      this._privProtocol = value.privProtocol;
      this._userName = value.userName;
    }
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // priv_password - computed: false, optional: true, required: false
  private _privPassword?: string; 
  public get privPassword() {
    return this.getStringAttribute('priv_password');
  }
  public set privPassword(value: string) {
    this._privPassword = value;
  }
  public resetPrivPassword() {
    this._privPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privPasswordInput() {
    return this._privPassword;
  }

  // priv_protocol - computed: false, optional: true, required: false
  private _privProtocol?: string; 
  public get privProtocol() {
    return this.getStringAttribute('priv_protocol');
  }
  public set privProtocol(value: string) {
    this._privProtocol = value;
  }
  public resetPrivProtocol() {
    this._privProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privProtocolInput() {
    return this._privProtocol;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp cohesity_configure_snmp}
*/
export class ConfigureSnmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_configure_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigureSnmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigureSnmp to import
  * @param importFromId The id of the existing ConfigureSnmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigureSnmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_configure_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/configure_snmp cohesity_configure_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigureSnmpConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigureSnmpConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_configure_snmp',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3',
        providerVersionConstraint: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentPort = config.agentPort;
    this._id = config.id;
    this._server = config.server;
    this._snmpVersion = config.snmpVersion;
    this._trapPort = config.trapPort;
    this._readUser.internalValue = config.readUser;
    this._trapUser.internalValue = config.trapUser;
    this._writeUser.internalValue = config.writeUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_port - computed: false, optional: true, required: false
  private _agentPort?: number; 
  public get agentPort() {
    return this.getNumberAttribute('agent_port');
  }
  public set agentPort(value: number) {
    this._agentPort = value;
  }
  public resetAgentPort() {
    this._agentPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPortInput() {
    return this._agentPort;
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // snmp_version - computed: false, optional: true, required: false
  private _snmpVersion?: string; 
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }
  public set snmpVersion(value: string) {
    this._snmpVersion = value;
  }
  public resetSnmpVersion() {
    this._snmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpVersionInput() {
    return this._snmpVersion;
  }

  // trap_port - computed: false, optional: true, required: false
  private _trapPort?: number; 
  public get trapPort() {
    return this.getNumberAttribute('trap_port');
  }
  public set trapPort(value: number) {
    this._trapPort = value;
  }
  public resetTrapPort() {
    this._trapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapPortInput() {
    return this._trapPort;
  }

  // read_user - computed: false, optional: true, required: false
  private _readUser = new ConfigureSnmpReadUserOutputReference(this, "read_user");
  public get readUser() {
    return this._readUser;
  }
  public putReadUser(value: ConfigureSnmpReadUser) {
    this._readUser.internalValue = value;
  }
  public resetReadUser() {
    this._readUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readUserInput() {
    return this._readUser.internalValue;
  }

  // trap_user - computed: false, optional: true, required: false
  private _trapUser = new ConfigureSnmpTrapUserOutputReference(this, "trap_user");
  public get trapUser() {
    return this._trapUser;
  }
  public putTrapUser(value: ConfigureSnmpTrapUser) {
    this._trapUser.internalValue = value;
  }
  public resetTrapUser() {
    this._trapUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapUserInput() {
    return this._trapUser.internalValue;
  }

  // write_user - computed: false, optional: true, required: false
  private _writeUser = new ConfigureSnmpWriteUserOutputReference(this, "write_user");
  public get writeUser() {
    return this._writeUser;
  }
  public putWriteUser(value: ConfigureSnmpWriteUser) {
    this._writeUser.internalValue = value;
  }
  public resetWriteUser() {
    this._writeUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeUserInput() {
    return this._writeUser.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_port: cdktf.numberToTerraform(this._agentPort),
      id: cdktf.stringToTerraform(this._id),
      server: cdktf.stringToTerraform(this._server),
      snmp_version: cdktf.stringToTerraform(this._snmpVersion),
      trap_port: cdktf.numberToTerraform(this._trapPort),
      read_user: configureSnmpReadUserToTerraform(this._readUser.internalValue),
      trap_user: configureSnmpTrapUserToTerraform(this._trapUser.internalValue),
      write_user: configureSnmpWriteUserToTerraform(this._writeUser.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_port: {
        value: cdktf.numberToHclTerraform(this._agentPort),
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
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_version: {
        value: cdktf.stringToHclTerraform(this._snmpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_port: {
        value: cdktf.numberToHclTerraform(this._trapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_user: {
        value: configureSnmpReadUserToHclTerraform(this._readUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigureSnmpReadUserList",
      },
      trap_user: {
        value: configureSnmpTrapUserToHclTerraform(this._trapUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigureSnmpTrapUserList",
      },
      write_user: {
        value: configureSnmpWriteUserToHclTerraform(this._writeUser.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigureSnmpWriteUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
