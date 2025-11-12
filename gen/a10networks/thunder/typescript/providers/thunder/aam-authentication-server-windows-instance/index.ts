// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationServerWindowsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#health_check AamAuthenticationServerWindowsInstance#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#health_check_disable AamAuthenticationServerWindowsInstance#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#health_check_string AamAuthenticationServerWindowsInstance#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#id AamAuthenticationServerWindowsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify Windows authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#name AamAuthenticationServerWindowsInstance#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#packet_capture_template AamAuthenticationServerWindowsInstance#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify realm of Windows server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#realm AamAuthenticationServerWindowsInstance#realm}
  */
  readonly realm?: string;
  /**
  * Enable weak cipher (DES CRC/MD5/MD4) and merge AS-REQ in single packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#support_apacheds_kdc AamAuthenticationServerWindowsInstance#support_apacheds_kdc}
  */
  readonly supportApachedsKdc?: number;
  /**
  * Specify connection timeout to server, default is 10 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#timeout AamAuthenticationServerWindowsInstance#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#uuid AamAuthenticationServerWindowsInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * auth_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#auth_protocol AamAuthenticationServerWindowsInstance#auth_protocol}
  */
  readonly authProtocol?: AamAuthenticationServerWindowsInstanceAuthProtocol;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#host AamAuthenticationServerWindowsInstance#host}
  */
  readonly host?: AamAuthenticationServerWindowsInstanceHost;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#sampling_enable AamAuthenticationServerWindowsInstance#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerWindowsInstanceSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidation {
  /**
  * Specify account for KDC validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kdc_account AamAuthenticationServerWindowsInstance#kdc_account}
  */
  readonly kdcAccount?: string;
  /**
  * Specify account password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kdc_password AamAuthenticationServerWindowsInstance#kdc_password}
  */
  readonly kdcPassword?: number;
  /**
  * Account password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kdc_pwd AamAuthenticationServerWindowsInstance#kdc_pwd}
  */
  readonly kdcPwd?: string;
  /**
  * Specify SPN for KDC validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kdc_spn AamAuthenticationServerWindowsInstance#kdc_spn}
  */
  readonly kdcSpn?: string;
}

export function aamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationToTerraform(struct?: AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationOutputReference | AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kdc_account: cdktf.stringToTerraform(struct!.kdcAccount),
    kdc_password: cdktf.numberToTerraform(struct!.kdcPassword),
    kdc_pwd: cdktf.stringToTerraform(struct!.kdcPwd),
    kdc_spn: cdktf.stringToTerraform(struct!.kdcSpn),
  }
}


export function aamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationOutputReference | AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kdc_account: {
      value: cdktf.stringToHclTerraform(struct!.kdcAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kdc_password: {
      value: cdktf.numberToHclTerraform(struct!.kdcPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kdc_pwd: {
      value: cdktf.stringToHclTerraform(struct!.kdcPwd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kdc_spn: {
      value: cdktf.stringToHclTerraform(struct!.kdcSpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kdcAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcAccount = this._kdcAccount;
    }
    if (this._kdcPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcPassword = this._kdcPassword;
    }
    if (this._kdcPwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcPwd = this._kdcPwd;
    }
    if (this._kdcSpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcSpn = this._kdcSpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kdcAccount = undefined;
      this._kdcPassword = undefined;
      this._kdcPwd = undefined;
      this._kdcSpn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kdcAccount = value.kdcAccount;
      this._kdcPassword = value.kdcPassword;
      this._kdcPwd = value.kdcPwd;
      this._kdcSpn = value.kdcSpn;
    }
  }

  // kdc_account - computed: false, optional: true, required: false
  private _kdcAccount?: string; 
  public get kdcAccount() {
    return this.getStringAttribute('kdc_account');
  }
  public set kdcAccount(value: string) {
    this._kdcAccount = value;
  }
  public resetKdcAccount() {
    this._kdcAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcAccountInput() {
    return this._kdcAccount;
  }

  // kdc_password - computed: false, optional: true, required: false
  private _kdcPassword?: number; 
  public get kdcPassword() {
    return this.getNumberAttribute('kdc_password');
  }
  public set kdcPassword(value: number) {
    this._kdcPassword = value;
  }
  public resetKdcPassword() {
    this._kdcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcPasswordInput() {
    return this._kdcPassword;
  }

  // kdc_pwd - computed: false, optional: true, required: false
  private _kdcPwd?: string; 
  public get kdcPwd() {
    return this.getStringAttribute('kdc_pwd');
  }
  public set kdcPwd(value: string) {
    this._kdcPwd = value;
  }
  public resetKdcPwd() {
    this._kdcPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcPwdInput() {
    return this._kdcPwd;
  }

  // kdc_spn - computed: false, optional: true, required: false
  private _kdcSpn?: string; 
  public get kdcSpn() {
    return this.getStringAttribute('kdc_spn');
  }
  public set kdcSpn(value: string) {
    this._kdcSpn = value;
  }
  public resetKdcSpn() {
    this._kdcSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcSpnInput() {
    return this._kdcSpn;
  }
}
export interface AamAuthenticationServerWindowsInstanceAuthProtocol {
  /**
  * Enable KDC validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kdc_validate AamAuthenticationServerWindowsInstance#kdc_validate}
  */
  readonly kdcValidate?: number;
  /**
  * Disable Kerberos authentication protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kerberos_disable AamAuthenticationServerWindowsInstance#kerberos_disable}
  */
  readonly kerberosDisable?: number;
  /**
  * Specify the Kerbros password change port, default is 464
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kerberos_password_change_port AamAuthenticationServerWindowsInstance#kerberos_password_change_port}
  */
  readonly kerberosPasswordChangePort?: number;
  /**
  * Specify the Kerberos port, default is 88
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kerberos_port AamAuthenticationServerWindowsInstance#kerberos_port}
  */
  readonly kerberosPort?: number;
  /**
  * Check Kerberos port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kport_hm AamAuthenticationServerWindowsInstance#kport_hm}
  */
  readonly kportHm?: string;
  /**
  * Disable configured Kerberos port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kport_hm_disable AamAuthenticationServerWindowsInstance#kport_hm_disable}
  */
  readonly kportHmDisable?: number;
  /**
  * Disable NTLM authentication protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#ntlm_disable AamAuthenticationServerWindowsInstance#ntlm_disable}
  */
  readonly ntlmDisable?: number;
  /**
  * Check NTLM port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#ntlm_health_check AamAuthenticationServerWindowsInstance#ntlm_health_check}
  */
  readonly ntlmHealthCheck?: string;
  /**
  * Disable configured NTLM port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#ntlm_health_check_disable AamAuthenticationServerWindowsInstance#ntlm_health_check_disable}
  */
  readonly ntlmHealthCheckDisable?: number;
  /**
  * Specify NTLM version, default is 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#ntlm_version AamAuthenticationServerWindowsInstance#ntlm_version}
  */
  readonly ntlmVersion?: number;
  /**
  * kerberos_kdc_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#kerberos_kdc_validation AamAuthenticationServerWindowsInstance#kerberos_kdc_validation}
  */
  readonly kerberosKdcValidation?: AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidation;
}

export function aamAuthenticationServerWindowsInstanceAuthProtocolToTerraform(struct?: AamAuthenticationServerWindowsInstanceAuthProtocolOutputReference | AamAuthenticationServerWindowsInstanceAuthProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kdc_validate: cdktf.numberToTerraform(struct!.kdcValidate),
    kerberos_disable: cdktf.numberToTerraform(struct!.kerberosDisable),
    kerberos_password_change_port: cdktf.numberToTerraform(struct!.kerberosPasswordChangePort),
    kerberos_port: cdktf.numberToTerraform(struct!.kerberosPort),
    kport_hm: cdktf.stringToTerraform(struct!.kportHm),
    kport_hm_disable: cdktf.numberToTerraform(struct!.kportHmDisable),
    ntlm_disable: cdktf.numberToTerraform(struct!.ntlmDisable),
    ntlm_health_check: cdktf.stringToTerraform(struct!.ntlmHealthCheck),
    ntlm_health_check_disable: cdktf.numberToTerraform(struct!.ntlmHealthCheckDisable),
    ntlm_version: cdktf.numberToTerraform(struct!.ntlmVersion),
    kerberos_kdc_validation: aamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationToTerraform(struct!.kerberosKdcValidation),
  }
}


export function aamAuthenticationServerWindowsInstanceAuthProtocolToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceAuthProtocolOutputReference | AamAuthenticationServerWindowsInstanceAuthProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kdc_validate: {
      value: cdktf.numberToHclTerraform(struct!.kdcValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_disable: {
      value: cdktf.numberToHclTerraform(struct!.kerberosDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_password_change_port: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPasswordChangePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_port: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kport_hm: {
      value: cdktf.stringToHclTerraform(struct!.kportHm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kport_hm_disable: {
      value: cdktf.numberToHclTerraform(struct!.kportHmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_disable: {
      value: cdktf.numberToHclTerraform(struct!.ntlmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_health_check: {
      value: cdktf.stringToHclTerraform(struct!.ntlmHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntlm_health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.ntlmHealthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_version: {
      value: cdktf.numberToHclTerraform(struct!.ntlmVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_kdc_validation: {
      value: aamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationToHclTerraform(struct!.kerberosKdcValidation),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceAuthProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerWindowsInstanceAuthProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kdcValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcValidate = this._kdcValidate;
    }
    if (this._kerberosDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosDisable = this._kerberosDisable;
    }
    if (this._kerberosPasswordChangePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPasswordChangePort = this._kerberosPasswordChangePort;
    }
    if (this._kerberosPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPort = this._kerberosPort;
    }
    if (this._kportHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.kportHm = this._kportHm;
    }
    if (this._kportHmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.kportHmDisable = this._kportHmDisable;
    }
    if (this._ntlmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmDisable = this._ntlmDisable;
    }
    if (this._ntlmHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmHealthCheck = this._ntlmHealthCheck;
    }
    if (this._ntlmHealthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmHealthCheckDisable = this._ntlmHealthCheckDisable;
    }
    if (this._ntlmVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmVersion = this._ntlmVersion;
    }
    if (this._kerberosKdcValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKdcValidation = this._kerberosKdcValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceAuthProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kdcValidate = undefined;
      this._kerberosDisable = undefined;
      this._kerberosPasswordChangePort = undefined;
      this._kerberosPort = undefined;
      this._kportHm = undefined;
      this._kportHmDisable = undefined;
      this._ntlmDisable = undefined;
      this._ntlmHealthCheck = undefined;
      this._ntlmHealthCheckDisable = undefined;
      this._ntlmVersion = undefined;
      this._kerberosKdcValidation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kdcValidate = value.kdcValidate;
      this._kerberosDisable = value.kerberosDisable;
      this._kerberosPasswordChangePort = value.kerberosPasswordChangePort;
      this._kerberosPort = value.kerberosPort;
      this._kportHm = value.kportHm;
      this._kportHmDisable = value.kportHmDisable;
      this._ntlmDisable = value.ntlmDisable;
      this._ntlmHealthCheck = value.ntlmHealthCheck;
      this._ntlmHealthCheckDisable = value.ntlmHealthCheckDisable;
      this._ntlmVersion = value.ntlmVersion;
      this._kerberosKdcValidation.internalValue = value.kerberosKdcValidation;
    }
  }

  // kdc_validate - computed: false, optional: true, required: false
  private _kdcValidate?: number; 
  public get kdcValidate() {
    return this.getNumberAttribute('kdc_validate');
  }
  public set kdcValidate(value: number) {
    this._kdcValidate = value;
  }
  public resetKdcValidate() {
    this._kdcValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcValidateInput() {
    return this._kdcValidate;
  }

  // kerberos_disable - computed: false, optional: true, required: false
  private _kerberosDisable?: number; 
  public get kerberosDisable() {
    return this.getNumberAttribute('kerberos_disable');
  }
  public set kerberosDisable(value: number) {
    this._kerberosDisable = value;
  }
  public resetKerberosDisable() {
    this._kerberosDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosDisableInput() {
    return this._kerberosDisable;
  }

  // kerberos_password_change_port - computed: false, optional: true, required: false
  private _kerberosPasswordChangePort?: number; 
  public get kerberosPasswordChangePort() {
    return this.getNumberAttribute('kerberos_password_change_port');
  }
  public set kerberosPasswordChangePort(value: number) {
    this._kerberosPasswordChangePort = value;
  }
  public resetKerberosPasswordChangePort() {
    this._kerberosPasswordChangePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPasswordChangePortInput() {
    return this._kerberosPasswordChangePort;
  }

  // kerberos_port - computed: false, optional: true, required: false
  private _kerberosPort?: number; 
  public get kerberosPort() {
    return this.getNumberAttribute('kerberos_port');
  }
  public set kerberosPort(value: number) {
    this._kerberosPort = value;
  }
  public resetKerberosPort() {
    this._kerberosPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPortInput() {
    return this._kerberosPort;
  }

  // kport_hm - computed: false, optional: true, required: false
  private _kportHm?: string; 
  public get kportHm() {
    return this.getStringAttribute('kport_hm');
  }
  public set kportHm(value: string) {
    this._kportHm = value;
  }
  public resetKportHm() {
    this._kportHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kportHmInput() {
    return this._kportHm;
  }

  // kport_hm_disable - computed: false, optional: true, required: false
  private _kportHmDisable?: number; 
  public get kportHmDisable() {
    return this.getNumberAttribute('kport_hm_disable');
  }
  public set kportHmDisable(value: number) {
    this._kportHmDisable = value;
  }
  public resetKportHmDisable() {
    this._kportHmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kportHmDisableInput() {
    return this._kportHmDisable;
  }

  // ntlm_disable - computed: false, optional: true, required: false
  private _ntlmDisable?: number; 
  public get ntlmDisable() {
    return this.getNumberAttribute('ntlm_disable');
  }
  public set ntlmDisable(value: number) {
    this._ntlmDisable = value;
  }
  public resetNtlmDisable() {
    this._ntlmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmDisableInput() {
    return this._ntlmDisable;
  }

  // ntlm_health_check - computed: false, optional: true, required: false
  private _ntlmHealthCheck?: string; 
  public get ntlmHealthCheck() {
    return this.getStringAttribute('ntlm_health_check');
  }
  public set ntlmHealthCheck(value: string) {
    this._ntlmHealthCheck = value;
  }
  public resetNtlmHealthCheck() {
    this._ntlmHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmHealthCheckInput() {
    return this._ntlmHealthCheck;
  }

  // ntlm_health_check_disable - computed: false, optional: true, required: false
  private _ntlmHealthCheckDisable?: number; 
  public get ntlmHealthCheckDisable() {
    return this.getNumberAttribute('ntlm_health_check_disable');
  }
  public set ntlmHealthCheckDisable(value: number) {
    this._ntlmHealthCheckDisable = value;
  }
  public resetNtlmHealthCheckDisable() {
    this._ntlmHealthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmHealthCheckDisableInput() {
    return this._ntlmHealthCheckDisable;
  }

  // ntlm_version - computed: false, optional: true, required: false
  private _ntlmVersion?: number; 
  public get ntlmVersion() {
    return this.getNumberAttribute('ntlm_version');
  }
  public set ntlmVersion(value: number) {
    this._ntlmVersion = value;
  }
  public resetNtlmVersion() {
    this._ntlmVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmVersionInput() {
    return this._ntlmVersion;
  }

  // kerberos_kdc_validation - computed: false, optional: true, required: false
  private _kerberosKdcValidation = new AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidationOutputReference(this, "kerberos_kdc_validation");
  public get kerberosKdcValidation() {
    return this._kerberosKdcValidation;
  }
  public putKerberosKdcValidation(value: AamAuthenticationServerWindowsInstanceAuthProtocolKerberosKdcValidation) {
    this._kerberosKdcValidation.internalValue = value;
  }
  public resetKerberosKdcValidation() {
    this._kerberosKdcValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcValidationInput() {
    return this._kerberosKdcValidation.internalValue;
  }
}
export interface AamAuthenticationServerWindowsInstanceHost {
  /**
  * Specify the Windows server's hostname(Length 1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#hostip AamAuthenticationServerWindowsInstance#hostip}
  */
  readonly hostip?: string;
  /**
  * Specify the Windows server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#hostipv6 AamAuthenticationServerWindowsInstance#hostipv6}
  */
  readonly hostipv6?: string;
}

export function aamAuthenticationServerWindowsInstanceHostToTerraform(struct?: AamAuthenticationServerWindowsInstanceHostOutputReference | AamAuthenticationServerWindowsInstanceHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostip: cdktf.stringToTerraform(struct!.hostip),
    hostipv6: cdktf.stringToTerraform(struct!.hostipv6),
  }
}


export function aamAuthenticationServerWindowsInstanceHostToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceHostOutputReference | AamAuthenticationServerWindowsInstanceHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostip: {
      value: cdktf.stringToHclTerraform(struct!.hostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.hostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerWindowsInstanceHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostip = this._hostip;
    }
    if (this._hostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostipv6 = this._hostipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostip = undefined;
      this._hostipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostip = value.hostip;
      this._hostipv6 = value.hostipv6;
    }
  }

  // hostip - computed: false, optional: true, required: false
  private _hostip?: string; 
  public get hostip() {
    return this.getStringAttribute('hostip');
  }
  public set hostip(value: string) {
    this._hostip = value;
  }
  public resetHostip() {
    this._hostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipInput() {
    return this._hostip;
  }

  // hostipv6 - computed: false, optional: true, required: false
  private _hostipv6?: string; 
  public get hostipv6() {
    return this.getStringAttribute('hostipv6');
  }
  public set hostipv6(value: string) {
    this._hostipv6 = value;
  }
  public resetHostipv6() {
    this._hostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipv6Input() {
    return this._hostipv6;
  }
}
export interface AamAuthenticationServerWindowsInstanceSamplingEnable {
  /**
  * 'all': all; 'krb_send_req_success': Kerberos Request; 'krb_get_resp_success': Kerberos Response; 'krb_timeout_error': Kerberos Timeout; 'krb_other_error': Kerberos Other Error; 'krb_pw_expiry': Kerberos password expiry; 'krb_pw_change_success': Kerberos password change success; 'krb_pw_change_failure': Kerberos password change failure; 'ntlm_proto_nego_success': NTLM Protocol Negotiation Success; 'ntlm_proto_nego_failure': NTLM Protocol Negotiation Failure; 'ntlm_session_setup_success': NTLM Session Setup Success; 'ntlm_session_setup_failure': NTLM Session Setup Failure; 'ntlm_prepare_req_success': NTLM Prepare Request Success; 'ntlm_prepare_req_error': NTLM Prepare Request Error; 'ntlm_auth_success': NTLM Authentication Success; 'ntlm_auth_failure': NTLM Authentication Failure; 'ntlm_timeout_error': NTLM Timeout; 'ntlm_other_error': NTLM Other Error; 'krb_validate_kdc_success': Kerberos KDC Validation Success; 'krb_validate_kdc_failure': Kerberos KDC Validation Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#counters1 AamAuthenticationServerWindowsInstance#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerWindowsInstanceSamplingEnableToTerraform(struct?: AamAuthenticationServerWindowsInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerWindowsInstanceSamplingEnableToHclTerraform(struct?: AamAuthenticationServerWindowsInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerWindowsInstanceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerWindowsInstanceSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerWindowsInstanceSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerWindowsInstanceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerWindowsInstanceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerWindowsInstanceSamplingEnableOutputReference {
    return new AamAuthenticationServerWindowsInstanceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance thunder_aam_authentication_server_windows_instance}
*/
export class AamAuthenticationServerWindowsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_windows_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationServerWindowsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationServerWindowsInstance to import
  * @param importFromId The id of the existing AamAuthenticationServerWindowsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationServerWindowsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_windows_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_windows_instance thunder_aam_authentication_server_windows_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationServerWindowsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationServerWindowsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_windows_instance',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._healthCheck = config.healthCheck;
    this._healthCheckDisable = config.healthCheckDisable;
    this._healthCheckString = config.healthCheckString;
    this._id = config.id;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._realm = config.realm;
    this._supportApachedsKdc = config.supportApachedsKdc;
    this._timeout = config.timeout;
    this._uuid = config.uuid;
    this._authProtocol.internalValue = config.authProtocol;
    this._host.internalValue = config.host;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: number; 
  public get healthCheck() {
    return this.getNumberAttribute('health_check');
  }
  public set healthCheck(value: number) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // health_check_string - computed: false, optional: true, required: false
  private _healthCheckString?: string; 
  public get healthCheckString() {
    return this.getStringAttribute('health_check_string');
  }
  public set healthCheckString(value: string) {
    this._healthCheckString = value;
  }
  public resetHealthCheckString() {
    this._healthCheckString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStringInput() {
    return this._healthCheckString;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // support_apacheds_kdc - computed: false, optional: true, required: false
  private _supportApachedsKdc?: number; 
  public get supportApachedsKdc() {
    return this.getNumberAttribute('support_apacheds_kdc');
  }
  public set supportApachedsKdc(value: number) {
    this._supportApachedsKdc = value;
  }
  public resetSupportApachedsKdc() {
    this._supportApachedsKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportApachedsKdcInput() {
    return this._supportApachedsKdc;
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

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol = new AamAuthenticationServerWindowsInstanceAuthProtocolOutputReference(this, "auth_protocol");
  public get authProtocol() {
    return this._authProtocol;
  }
  public putAuthProtocol(value: AamAuthenticationServerWindowsInstanceAuthProtocol) {
    this._authProtocol.internalValue = value;
  }
  public resetAuthProtocol() {
    this._authProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new AamAuthenticationServerWindowsInstanceHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: AamAuthenticationServerWindowsInstanceHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerWindowsInstanceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerWindowsInstanceSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      health_check: cdktf.numberToTerraform(this._healthCheck),
      health_check_disable: cdktf.numberToTerraform(this._healthCheckDisable),
      health_check_string: cdktf.stringToTerraform(this._healthCheckString),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      realm: cdktf.stringToTerraform(this._realm),
      support_apacheds_kdc: cdktf.numberToTerraform(this._supportApachedsKdc),
      timeout: cdktf.numberToTerraform(this._timeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      auth_protocol: aamAuthenticationServerWindowsInstanceAuthProtocolToTerraform(this._authProtocol.internalValue),
      host: aamAuthenticationServerWindowsInstanceHostToTerraform(this._host.internalValue),
      sampling_enable: cdktf.listMapper(aamAuthenticationServerWindowsInstanceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      health_check: {
        value: cdktf.numberToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_disable: {
        value: cdktf.numberToHclTerraform(this._healthCheckDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_string: {
        value: cdktf.stringToHclTerraform(this._healthCheckString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_apacheds_kdc: {
        value: cdktf.numberToHclTerraform(this._supportApachedsKdc),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_protocol: {
        value: aamAuthenticationServerWindowsInstanceAuthProtocolToHclTerraform(this._authProtocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerWindowsInstanceAuthProtocolList",
      },
      host: {
        value: aamAuthenticationServerWindowsInstanceHostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerWindowsInstanceHostList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationServerWindowsInstanceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerWindowsInstanceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
