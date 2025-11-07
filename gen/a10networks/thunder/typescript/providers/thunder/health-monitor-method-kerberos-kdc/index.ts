// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodKerberosKdcAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#id HealthMonitorMethodKerberosKdcA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#name HealthMonitorMethodKerberosKdcA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#uuid HealthMonitorMethodKerberosKdcA#uuid}
  */
  readonly uuid?: string;
  /**
  * kerberos_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kerberos_cfg HealthMonitorMethodKerberosKdcA#kerberos_cfg}
  */
  readonly kerberosCfg?: HealthMonitorMethodKerberosKdcKerberosCfgA;
}
export interface HealthMonitorMethodKerberosKdcKerberosCfgA {
  /**
  * Kerberos admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kadmin HealthMonitorMethodKerberosKdcA#kadmin}
  */
  readonly kadmin?: number;
  /**
  * Specify the kdc server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kadmin_kdc HealthMonitorMethodKerberosKdcA#kadmin_kdc}
  */
  readonly kadminKdc?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kadmin_password HealthMonitorMethodKerberosKdcA#kadmin_password}
  */
  readonly kadminPassword?: string;
  /**
  * Specify the principal name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kadmin_pricipal_name HealthMonitorMethodKerberosKdcA#kadmin_pricipal_name}
  */
  readonly kadminPricipalName?: string;
  /**
  * Specify the realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kadmin_realm HealthMonitorMethodKerberosKdcA#kadmin_realm}
  */
  readonly kadminRealm?: string;
  /**
  * Specify the admin server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kadmin_server HealthMonitorMethodKerberosKdcA#kadmin_server}
  */
  readonly kadminServer?: string;
  /**
  * Kerberos KDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kinit HealthMonitorMethodKerberosKdcA#kinit}
  */
  readonly kinit?: number;
  /**
  * Specify the kdc server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kinit_kdc HealthMonitorMethodKerberosKdcA#kinit_kdc}
  */
  readonly kinitKdc?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kinit_password HealthMonitorMethodKerberosKdcA#kinit_password}
  */
  readonly kinitPassword?: string;
  /**
  * Specify the principal name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kinit_pricipal_name HealthMonitorMethodKerberosKdcA#kinit_pricipal_name}
  */
  readonly kinitPricipalName?: string;
  /**
  * Kerberos change passwd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kpasswd HealthMonitorMethodKerberosKdcA#kpasswd}
  */
  readonly kpasswd?: number;
  /**
  * Specify the kdc server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kpasswd_kdc HealthMonitorMethodKerberosKdcA#kpasswd_kdc}
  */
  readonly kpasswdKdc?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kpasswd_password HealthMonitorMethodKerberosKdcA#kpasswd_password}
  */
  readonly kpasswdPassword?: string;
  /**
  * Specify the principal name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kpasswd_pricipal_name HealthMonitorMethodKerberosKdcA#kpasswd_pricipal_name}
  */
  readonly kpasswdPricipalName?: string;
  /**
  * Specify the Kerberos password server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#kpasswd_server HealthMonitorMethodKerberosKdcA#kpasswd_server}
  */
  readonly kpasswdServer?: string;
  /**
  * Specify the kerberos tcp only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#tcp_only HealthMonitorMethodKerberosKdcA#tcp_only}
  */
  readonly tcpOnly?: number;
}

export function healthMonitorMethodKerberosKdcKerberosCfgAToTerraform(struct?: HealthMonitorMethodKerberosKdcKerberosCfgAOutputReference | HealthMonitorMethodKerberosKdcKerberosCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kadmin: cdktf.numberToTerraform(struct!.kadmin),
    kadmin_kdc: cdktf.stringToTerraform(struct!.kadminKdc),
    kadmin_password: cdktf.stringToTerraform(struct!.kadminPassword),
    kadmin_pricipal_name: cdktf.stringToTerraform(struct!.kadminPricipalName),
    kadmin_realm: cdktf.stringToTerraform(struct!.kadminRealm),
    kadmin_server: cdktf.stringToTerraform(struct!.kadminServer),
    kinit: cdktf.numberToTerraform(struct!.kinit),
    kinit_kdc: cdktf.stringToTerraform(struct!.kinitKdc),
    kinit_password: cdktf.stringToTerraform(struct!.kinitPassword),
    kinit_pricipal_name: cdktf.stringToTerraform(struct!.kinitPricipalName),
    kpasswd: cdktf.numberToTerraform(struct!.kpasswd),
    kpasswd_kdc: cdktf.stringToTerraform(struct!.kpasswdKdc),
    kpasswd_password: cdktf.stringToTerraform(struct!.kpasswdPassword),
    kpasswd_pricipal_name: cdktf.stringToTerraform(struct!.kpasswdPricipalName),
    kpasswd_server: cdktf.stringToTerraform(struct!.kpasswdServer),
    tcp_only: cdktf.numberToTerraform(struct!.tcpOnly),
  }
}


export function healthMonitorMethodKerberosKdcKerberosCfgAToHclTerraform(struct?: HealthMonitorMethodKerberosKdcKerberosCfgAOutputReference | HealthMonitorMethodKerberosKdcKerberosCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kadmin: {
      value: cdktf.numberToHclTerraform(struct!.kadmin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kadmin_kdc: {
      value: cdktf.stringToHclTerraform(struct!.kadminKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kadmin_password: {
      value: cdktf.stringToHclTerraform(struct!.kadminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kadmin_pricipal_name: {
      value: cdktf.stringToHclTerraform(struct!.kadminPricipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kadmin_realm: {
      value: cdktf.stringToHclTerraform(struct!.kadminRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kadmin_server: {
      value: cdktf.stringToHclTerraform(struct!.kadminServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinit: {
      value: cdktf.numberToHclTerraform(struct!.kinit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kinit_kdc: {
      value: cdktf.stringToHclTerraform(struct!.kinitKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinit_password: {
      value: cdktf.stringToHclTerraform(struct!.kinitPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinit_pricipal_name: {
      value: cdktf.stringToHclTerraform(struct!.kinitPricipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kpasswd: {
      value: cdktf.numberToHclTerraform(struct!.kpasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kpasswd_kdc: {
      value: cdktf.stringToHclTerraform(struct!.kpasswdKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kpasswd_password: {
      value: cdktf.stringToHclTerraform(struct!.kpasswdPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kpasswd_pricipal_name: {
      value: cdktf.stringToHclTerraform(struct!.kpasswdPricipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kpasswd_server: {
      value: cdktf.stringToHclTerraform(struct!.kpasswdServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_only: {
      value: cdktf.numberToHclTerraform(struct!.tcpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodKerberosKdcKerberosCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodKerberosKdcKerberosCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kadmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadmin = this._kadmin;
    }
    if (this._kadminKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminKdc = this._kadminKdc;
    }
    if (this._kadminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminPassword = this._kadminPassword;
    }
    if (this._kadminPricipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminPricipalName = this._kadminPricipalName;
    }
    if (this._kadminRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminRealm = this._kadminRealm;
    }
    if (this._kadminServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminServer = this._kadminServer;
    }
    if (this._kinit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinit = this._kinit;
    }
    if (this._kinitKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinitKdc = this._kinitKdc;
    }
    if (this._kinitPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinitPassword = this._kinitPassword;
    }
    if (this._kinitPricipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinitPricipalName = this._kinitPricipalName;
    }
    if (this._kpasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswd = this._kpasswd;
    }
    if (this._kpasswdKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswdKdc = this._kpasswdKdc;
    }
    if (this._kpasswdPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswdPassword = this._kpasswdPassword;
    }
    if (this._kpasswdPricipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswdPricipalName = this._kpasswdPricipalName;
    }
    if (this._kpasswdServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswdServer = this._kpasswdServer;
    }
    if (this._tcpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOnly = this._tcpOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodKerberosKdcKerberosCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kadmin = undefined;
      this._kadminKdc = undefined;
      this._kadminPassword = undefined;
      this._kadminPricipalName = undefined;
      this._kadminRealm = undefined;
      this._kadminServer = undefined;
      this._kinit = undefined;
      this._kinitKdc = undefined;
      this._kinitPassword = undefined;
      this._kinitPricipalName = undefined;
      this._kpasswd = undefined;
      this._kpasswdKdc = undefined;
      this._kpasswdPassword = undefined;
      this._kpasswdPricipalName = undefined;
      this._kpasswdServer = undefined;
      this._tcpOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kadmin = value.kadmin;
      this._kadminKdc = value.kadminKdc;
      this._kadminPassword = value.kadminPassword;
      this._kadminPricipalName = value.kadminPricipalName;
      this._kadminRealm = value.kadminRealm;
      this._kadminServer = value.kadminServer;
      this._kinit = value.kinit;
      this._kinitKdc = value.kinitKdc;
      this._kinitPassword = value.kinitPassword;
      this._kinitPricipalName = value.kinitPricipalName;
      this._kpasswd = value.kpasswd;
      this._kpasswdKdc = value.kpasswdKdc;
      this._kpasswdPassword = value.kpasswdPassword;
      this._kpasswdPricipalName = value.kpasswdPricipalName;
      this._kpasswdServer = value.kpasswdServer;
      this._tcpOnly = value.tcpOnly;
    }
  }

  // kadmin - computed: false, optional: true, required: false
  private _kadmin?: number; 
  public get kadmin() {
    return this.getNumberAttribute('kadmin');
  }
  public set kadmin(value: number) {
    this._kadmin = value;
  }
  public resetKadmin() {
    this._kadmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminInput() {
    return this._kadmin;
  }

  // kadmin_kdc - computed: false, optional: true, required: false
  private _kadminKdc?: string; 
  public get kadminKdc() {
    return this.getStringAttribute('kadmin_kdc');
  }
  public set kadminKdc(value: string) {
    this._kadminKdc = value;
  }
  public resetKadminKdc() {
    this._kadminKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminKdcInput() {
    return this._kadminKdc;
  }

  // kadmin_password - computed: false, optional: true, required: false
  private _kadminPassword?: string; 
  public get kadminPassword() {
    return this.getStringAttribute('kadmin_password');
  }
  public set kadminPassword(value: string) {
    this._kadminPassword = value;
  }
  public resetKadminPassword() {
    this._kadminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminPasswordInput() {
    return this._kadminPassword;
  }

  // kadmin_pricipal_name - computed: false, optional: true, required: false
  private _kadminPricipalName?: string; 
  public get kadminPricipalName() {
    return this.getStringAttribute('kadmin_pricipal_name');
  }
  public set kadminPricipalName(value: string) {
    this._kadminPricipalName = value;
  }
  public resetKadminPricipalName() {
    this._kadminPricipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminPricipalNameInput() {
    return this._kadminPricipalName;
  }

  // kadmin_realm - computed: false, optional: true, required: false
  private _kadminRealm?: string; 
  public get kadminRealm() {
    return this.getStringAttribute('kadmin_realm');
  }
  public set kadminRealm(value: string) {
    this._kadminRealm = value;
  }
  public resetKadminRealm() {
    this._kadminRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminRealmInput() {
    return this._kadminRealm;
  }

  // kadmin_server - computed: false, optional: true, required: false
  private _kadminServer?: string; 
  public get kadminServer() {
    return this.getStringAttribute('kadmin_server');
  }
  public set kadminServer(value: string) {
    this._kadminServer = value;
  }
  public resetKadminServer() {
    this._kadminServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminServerInput() {
    return this._kadminServer;
  }

  // kinit - computed: false, optional: true, required: false
  private _kinit?: number; 
  public get kinit() {
    return this.getNumberAttribute('kinit');
  }
  public set kinit(value: number) {
    this._kinit = value;
  }
  public resetKinit() {
    this._kinit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinitInput() {
    return this._kinit;
  }

  // kinit_kdc - computed: false, optional: true, required: false
  private _kinitKdc?: string; 
  public get kinitKdc() {
    return this.getStringAttribute('kinit_kdc');
  }
  public set kinitKdc(value: string) {
    this._kinitKdc = value;
  }
  public resetKinitKdc() {
    this._kinitKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinitKdcInput() {
    return this._kinitKdc;
  }

  // kinit_password - computed: false, optional: true, required: false
  private _kinitPassword?: string; 
  public get kinitPassword() {
    return this.getStringAttribute('kinit_password');
  }
  public set kinitPassword(value: string) {
    this._kinitPassword = value;
  }
  public resetKinitPassword() {
    this._kinitPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinitPasswordInput() {
    return this._kinitPassword;
  }

  // kinit_pricipal_name - computed: false, optional: true, required: false
  private _kinitPricipalName?: string; 
  public get kinitPricipalName() {
    return this.getStringAttribute('kinit_pricipal_name');
  }
  public set kinitPricipalName(value: string) {
    this._kinitPricipalName = value;
  }
  public resetKinitPricipalName() {
    this._kinitPricipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinitPricipalNameInput() {
    return this._kinitPricipalName;
  }

  // kpasswd - computed: false, optional: true, required: false
  private _kpasswd?: number; 
  public get kpasswd() {
    return this.getNumberAttribute('kpasswd');
  }
  public set kpasswd(value: number) {
    this._kpasswd = value;
  }
  public resetKpasswd() {
    this._kpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdInput() {
    return this._kpasswd;
  }

  // kpasswd_kdc - computed: false, optional: true, required: false
  private _kpasswdKdc?: string; 
  public get kpasswdKdc() {
    return this.getStringAttribute('kpasswd_kdc');
  }
  public set kpasswdKdc(value: string) {
    this._kpasswdKdc = value;
  }
  public resetKpasswdKdc() {
    this._kpasswdKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdKdcInput() {
    return this._kpasswdKdc;
  }

  // kpasswd_password - computed: false, optional: true, required: false
  private _kpasswdPassword?: string; 
  public get kpasswdPassword() {
    return this.getStringAttribute('kpasswd_password');
  }
  public set kpasswdPassword(value: string) {
    this._kpasswdPassword = value;
  }
  public resetKpasswdPassword() {
    this._kpasswdPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdPasswordInput() {
    return this._kpasswdPassword;
  }

  // kpasswd_pricipal_name - computed: false, optional: true, required: false
  private _kpasswdPricipalName?: string; 
  public get kpasswdPricipalName() {
    return this.getStringAttribute('kpasswd_pricipal_name');
  }
  public set kpasswdPricipalName(value: string) {
    this._kpasswdPricipalName = value;
  }
  public resetKpasswdPricipalName() {
    this._kpasswdPricipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdPricipalNameInput() {
    return this._kpasswdPricipalName;
  }

  // kpasswd_server - computed: false, optional: true, required: false
  private _kpasswdServer?: string; 
  public get kpasswdServer() {
    return this.getStringAttribute('kpasswd_server');
  }
  public set kpasswdServer(value: string) {
    this._kpasswdServer = value;
  }
  public resetKpasswdServer() {
    this._kpasswdServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdServerInput() {
    return this._kpasswdServer;
  }

  // tcp_only - computed: false, optional: true, required: false
  private _tcpOnly?: number; 
  public get tcpOnly() {
    return this.getNumberAttribute('tcp_only');
  }
  public set tcpOnly(value: number) {
    this._tcpOnly = value;
  }
  public resetTcpOnly() {
    this._tcpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOnlyInput() {
    return this._tcpOnly;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc thunder_health_monitor_method_kerberos_kdc}
*/
export class HealthMonitorMethodKerberosKdcA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_kerberos_kdc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodKerberosKdcA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodKerberosKdcA to import
  * @param importFromId The id of the existing HealthMonitorMethodKerberosKdcA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodKerberosKdcA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_kerberos_kdc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_kerberos_kdc thunder_health_monitor_method_kerberos_kdc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodKerberosKdcAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodKerberosKdcAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_kerberos_kdc',
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
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
    this._kerberosCfg.internalValue = config.kerberosCfg;
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

  // kerberos_cfg - computed: false, optional: true, required: false
  private _kerberosCfg = new HealthMonitorMethodKerberosKdcKerberosCfgAOutputReference(this, "kerberos_cfg");
  public get kerberosCfg() {
    return this._kerberosCfg;
  }
  public putKerberosCfg(value: HealthMonitorMethodKerberosKdcKerberosCfgA) {
    this._kerberosCfg.internalValue = value;
  }
  public resetKerberosCfg() {
    this._kerberosCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosCfgInput() {
    return this._kerberosCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      kerberos_cfg: healthMonitorMethodKerberosKdcKerberosCfgAToTerraform(this._kerberosCfg.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      kerberos_cfg: {
        value: healthMonitorMethodKerberosKdcKerberosCfgAToHclTerraform(this._kerberosCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodKerberosKdcKerberosCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
