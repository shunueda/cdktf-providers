// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clean supported lines when destroy this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#clean_on_destroy Security#clean_on_destroy}
  */
  readonly cleanOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * alg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#alg Security#alg}
  */
  readonly alg?: SecurityAlg;
  /**
  * flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#flow Security#flow}
  */
  readonly flow?: SecurityFlow;
  /**
  * forwarding_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#forwarding_options Security#forwarding_options}
  */
  readonly forwardingOptions?: SecurityForwardingOptions;
  /**
  * forwarding_process block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#forwarding_process Security#forwarding_process}
  */
  readonly forwardingProcess?: SecurityForwardingProcess;
  /**
  * idp_security_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#idp_security_package Security#idp_security_package}
  */
  readonly idpSecurityPackage?: SecurityIdpSecurityPackage;
  /**
  * idp_sensor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#idp_sensor_configuration Security#idp_sensor_configuration}
  */
  readonly idpSensorConfiguration?: SecurityIdpSensorConfiguration;
  /**
  * ike_traceoptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#ike_traceoptions Security#ike_traceoptions}
  */
  readonly ikeTraceoptions?: SecurityIkeTraceoptions;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#log Security#log}
  */
  readonly log?: SecurityLog;
  /**
  * nat_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#nat_source Security#nat_source}
  */
  readonly natSource?: SecurityNatSource;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#policies Security#policies}
  */
  readonly policies?: SecurityPolicies;
  /**
  * user_identification_auth_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#user_identification_auth_source Security#user_identification_auth_source}
  */
  readonly userIdentificationAuthSource?: SecurityUserIdentificationAuthSource;
  /**
  * utm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#utm Security#utm}
  */
  readonly utm?: SecurityUtm;
}
export interface SecurityAlg {
  /**
  * Disable dns alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#dns_disable Security#dns_disable}
  */
  readonly dnsDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable ftp alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#ftp_disable Security#ftp_disable}
  */
  readonly ftpDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable h323 alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#h323_disable Security#h323_disable}
  */
  readonly h323Disable?: boolean | cdktf.IResolvable;
  /**
  * Disable mgcp alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#mgcp_disable Security#mgcp_disable}
  */
  readonly mgcpDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable msrpc alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#msrpc_disable Security#msrpc_disable}
  */
  readonly msrpcDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable pptp alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#pptp_disable Security#pptp_disable}
  */
  readonly pptpDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable rsh alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#rsh_disable Security#rsh_disable}
  */
  readonly rshDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable rtsp alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#rtsp_disable Security#rtsp_disable}
  */
  readonly rtspDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable sccp alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#sccp_disable Security#sccp_disable}
  */
  readonly sccpDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable sip alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#sip_disable Security#sip_disable}
  */
  readonly sipDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable sql alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#sql_disable Security#sql_disable}
  */
  readonly sqlDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable sunrpc alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#sunrpc_disable Security#sunrpc_disable}
  */
  readonly sunrpcDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable talk alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#talk_disable Security#talk_disable}
  */
  readonly talkDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable tftp alg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#tftp_disable Security#tftp_disable}
  */
  readonly tftpDisable?: boolean | cdktf.IResolvable;
}

export function securityAlgToTerraform(struct?: SecurityAlg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_disable: cdktf.booleanToTerraform(struct!.dnsDisable),
    ftp_disable: cdktf.booleanToTerraform(struct!.ftpDisable),
    h323_disable: cdktf.booleanToTerraform(struct!.h323Disable),
    mgcp_disable: cdktf.booleanToTerraform(struct!.mgcpDisable),
    msrpc_disable: cdktf.booleanToTerraform(struct!.msrpcDisable),
    pptp_disable: cdktf.booleanToTerraform(struct!.pptpDisable),
    rsh_disable: cdktf.booleanToTerraform(struct!.rshDisable),
    rtsp_disable: cdktf.booleanToTerraform(struct!.rtspDisable),
    sccp_disable: cdktf.booleanToTerraform(struct!.sccpDisable),
    sip_disable: cdktf.booleanToTerraform(struct!.sipDisable),
    sql_disable: cdktf.booleanToTerraform(struct!.sqlDisable),
    sunrpc_disable: cdktf.booleanToTerraform(struct!.sunrpcDisable),
    talk_disable: cdktf.booleanToTerraform(struct!.talkDisable),
    tftp_disable: cdktf.booleanToTerraform(struct!.tftpDisable),
  }
}


export function securityAlgToHclTerraform(struct?: SecurityAlg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_disable: {
      value: cdktf.booleanToHclTerraform(struct!.dnsDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ftp_disable: {
      value: cdktf.booleanToHclTerraform(struct!.ftpDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    h323_disable: {
      value: cdktf.booleanToHclTerraform(struct!.h323Disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mgcp_disable: {
      value: cdktf.booleanToHclTerraform(struct!.mgcpDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    msrpc_disable: {
      value: cdktf.booleanToHclTerraform(struct!.msrpcDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pptp_disable: {
      value: cdktf.booleanToHclTerraform(struct!.pptpDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rsh_disable: {
      value: cdktf.booleanToHclTerraform(struct!.rshDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rtsp_disable: {
      value: cdktf.booleanToHclTerraform(struct!.rtspDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sccp_disable: {
      value: cdktf.booleanToHclTerraform(struct!.sccpDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sip_disable: {
      value: cdktf.booleanToHclTerraform(struct!.sipDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql_disable: {
      value: cdktf.booleanToHclTerraform(struct!.sqlDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sunrpc_disable: {
      value: cdktf.booleanToHclTerraform(struct!.sunrpcDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    talk_disable: {
      value: cdktf.booleanToHclTerraform(struct!.talkDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tftp_disable: {
      value: cdktf.booleanToHclTerraform(struct!.tftpDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityAlgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityAlg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDisable = this._dnsDisable;
    }
    if (this._ftpDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpDisable = this._ftpDisable;
    }
    if (this._h323Disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323Disable = this._h323Disable;
    }
    if (this._mgcpDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgcpDisable = this._mgcpDisable;
    }
    if (this._msrpcDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.msrpcDisable = this._msrpcDisable;
    }
    if (this._pptpDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pptpDisable = this._pptpDisable;
    }
    if (this._rshDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rshDisable = this._rshDisable;
    }
    if (this._rtspDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtspDisable = this._rtspDisable;
    }
    if (this._sccpDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sccpDisable = this._sccpDisable;
    }
    if (this._sipDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipDisable = this._sipDisable;
    }
    if (this._sqlDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlDisable = this._sqlDisable;
    }
    if (this._sunrpcDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sunrpcDisable = this._sunrpcDisable;
    }
    if (this._talkDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.talkDisable = this._talkDisable;
    }
    if (this._tftpDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftpDisable = this._tftpDisable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityAlg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsDisable = undefined;
      this._ftpDisable = undefined;
      this._h323Disable = undefined;
      this._mgcpDisable = undefined;
      this._msrpcDisable = undefined;
      this._pptpDisable = undefined;
      this._rshDisable = undefined;
      this._rtspDisable = undefined;
      this._sccpDisable = undefined;
      this._sipDisable = undefined;
      this._sqlDisable = undefined;
      this._sunrpcDisable = undefined;
      this._talkDisable = undefined;
      this._tftpDisable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsDisable = value.dnsDisable;
      this._ftpDisable = value.ftpDisable;
      this._h323Disable = value.h323Disable;
      this._mgcpDisable = value.mgcpDisable;
      this._msrpcDisable = value.msrpcDisable;
      this._pptpDisable = value.pptpDisable;
      this._rshDisable = value.rshDisable;
      this._rtspDisable = value.rtspDisable;
      this._sccpDisable = value.sccpDisable;
      this._sipDisable = value.sipDisable;
      this._sqlDisable = value.sqlDisable;
      this._sunrpcDisable = value.sunrpcDisable;
      this._talkDisable = value.talkDisable;
      this._tftpDisable = value.tftpDisable;
    }
  }

  // dns_disable - computed: false, optional: true, required: false
  private _dnsDisable?: boolean | cdktf.IResolvable; 
  public get dnsDisable() {
    return this.getBooleanAttribute('dns_disable');
  }
  public set dnsDisable(value: boolean | cdktf.IResolvable) {
    this._dnsDisable = value;
  }
  public resetDnsDisable() {
    this._dnsDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDisableInput() {
    return this._dnsDisable;
  }

  // ftp_disable - computed: false, optional: true, required: false
  private _ftpDisable?: boolean | cdktf.IResolvable; 
  public get ftpDisable() {
    return this.getBooleanAttribute('ftp_disable');
  }
  public set ftpDisable(value: boolean | cdktf.IResolvable) {
    this._ftpDisable = value;
  }
  public resetFtpDisable() {
    this._ftpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpDisableInput() {
    return this._ftpDisable;
  }

  // h323_disable - computed: false, optional: true, required: false
  private _h323Disable?: boolean | cdktf.IResolvable; 
  public get h323Disable() {
    return this.getBooleanAttribute('h323_disable');
  }
  public set h323Disable(value: boolean | cdktf.IResolvable) {
    this._h323Disable = value;
  }
  public resetH323Disable() {
    this._h323Disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h323DisableInput() {
    return this._h323Disable;
  }

  // mgcp_disable - computed: false, optional: true, required: false
  private _mgcpDisable?: boolean | cdktf.IResolvable; 
  public get mgcpDisable() {
    return this.getBooleanAttribute('mgcp_disable');
  }
  public set mgcpDisable(value: boolean | cdktf.IResolvable) {
    this._mgcpDisable = value;
  }
  public resetMgcpDisable() {
    this._mgcpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgcpDisableInput() {
    return this._mgcpDisable;
  }

  // msrpc_disable - computed: false, optional: true, required: false
  private _msrpcDisable?: boolean | cdktf.IResolvable; 
  public get msrpcDisable() {
    return this.getBooleanAttribute('msrpc_disable');
  }
  public set msrpcDisable(value: boolean | cdktf.IResolvable) {
    this._msrpcDisable = value;
  }
  public resetMsrpcDisable() {
    this._msrpcDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msrpcDisableInput() {
    return this._msrpcDisable;
  }

  // pptp_disable - computed: false, optional: true, required: false
  private _pptpDisable?: boolean | cdktf.IResolvable; 
  public get pptpDisable() {
    return this.getBooleanAttribute('pptp_disable');
  }
  public set pptpDisable(value: boolean | cdktf.IResolvable) {
    this._pptpDisable = value;
  }
  public resetPptpDisable() {
    this._pptpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpDisableInput() {
    return this._pptpDisable;
  }

  // rsh_disable - computed: false, optional: true, required: false
  private _rshDisable?: boolean | cdktf.IResolvable; 
  public get rshDisable() {
    return this.getBooleanAttribute('rsh_disable');
  }
  public set rshDisable(value: boolean | cdktf.IResolvable) {
    this._rshDisable = value;
  }
  public resetRshDisable() {
    this._rshDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rshDisableInput() {
    return this._rshDisable;
  }

  // rtsp_disable - computed: false, optional: true, required: false
  private _rtspDisable?: boolean | cdktf.IResolvable; 
  public get rtspDisable() {
    return this.getBooleanAttribute('rtsp_disable');
  }
  public set rtspDisable(value: boolean | cdktf.IResolvable) {
    this._rtspDisable = value;
  }
  public resetRtspDisable() {
    this._rtspDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspDisableInput() {
    return this._rtspDisable;
  }

  // sccp_disable - computed: false, optional: true, required: false
  private _sccpDisable?: boolean | cdktf.IResolvable; 
  public get sccpDisable() {
    return this.getBooleanAttribute('sccp_disable');
  }
  public set sccpDisable(value: boolean | cdktf.IResolvable) {
    this._sccpDisable = value;
  }
  public resetSccpDisable() {
    this._sccpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sccpDisableInput() {
    return this._sccpDisable;
  }

  // sip_disable - computed: false, optional: true, required: false
  private _sipDisable?: boolean | cdktf.IResolvable; 
  public get sipDisable() {
    return this.getBooleanAttribute('sip_disable');
  }
  public set sipDisable(value: boolean | cdktf.IResolvable) {
    this._sipDisable = value;
  }
  public resetSipDisable() {
    this._sipDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipDisableInput() {
    return this._sipDisable;
  }

  // sql_disable - computed: false, optional: true, required: false
  private _sqlDisable?: boolean | cdktf.IResolvable; 
  public get sqlDisable() {
    return this.getBooleanAttribute('sql_disable');
  }
  public set sqlDisable(value: boolean | cdktf.IResolvable) {
    this._sqlDisable = value;
  }
  public resetSqlDisable() {
    this._sqlDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDisableInput() {
    return this._sqlDisable;
  }

  // sunrpc_disable - computed: false, optional: true, required: false
  private _sunrpcDisable?: boolean | cdktf.IResolvable; 
  public get sunrpcDisable() {
    return this.getBooleanAttribute('sunrpc_disable');
  }
  public set sunrpcDisable(value: boolean | cdktf.IResolvable) {
    this._sunrpcDisable = value;
  }
  public resetSunrpcDisable() {
    this._sunrpcDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunrpcDisableInput() {
    return this._sunrpcDisable;
  }

  // talk_disable - computed: false, optional: true, required: false
  private _talkDisable?: boolean | cdktf.IResolvable; 
  public get talkDisable() {
    return this.getBooleanAttribute('talk_disable');
  }
  public set talkDisable(value: boolean | cdktf.IResolvable) {
    this._talkDisable = value;
  }
  public resetTalkDisable() {
    this._talkDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get talkDisableInput() {
    return this._talkDisable;
  }

  // tftp_disable - computed: false, optional: true, required: false
  private _tftpDisable?: boolean | cdktf.IResolvable; 
  public get tftpDisable() {
    return this.getBooleanAttribute('tftp_disable');
  }
  public set tftpDisable(value: boolean | cdktf.IResolvable) {
    this._tftpDisable = value;
  }
  public resetTftpDisable() {
    this._tftpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpDisableInput() {
    return this._tftpDisable;
  }
}
export interface SecurityFlowAdvancedOptions {
  /**
  * Drop matching link local address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#drop_matching_link_local_address Security#drop_matching_link_local_address}
  */
  readonly dropMatchingLinkLocalAddress?: boolean | cdktf.IResolvable;
  /**
  * Drop matching reserved source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#drop_matching_reserved_ip_address Security#drop_matching_reserved_ip_address}
  */
  readonly dropMatchingReservedIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Allow reverse route lookup with packet mode vr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#reverse_route_packet_mode_vr Security#reverse_route_packet_mode_vr}
  */
  readonly reverseRoutePacketModeVr?: boolean | cdktf.IResolvable;
}

export function securityFlowAdvancedOptionsToTerraform(struct?: SecurityFlowAdvancedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_matching_link_local_address: cdktf.booleanToTerraform(struct!.dropMatchingLinkLocalAddress),
    drop_matching_reserved_ip_address: cdktf.booleanToTerraform(struct!.dropMatchingReservedIpAddress),
    reverse_route_packet_mode_vr: cdktf.booleanToTerraform(struct!.reverseRoutePacketModeVr),
  }
}


export function securityFlowAdvancedOptionsToHclTerraform(struct?: SecurityFlowAdvancedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_matching_link_local_address: {
      value: cdktf.booleanToHclTerraform(struct!.dropMatchingLinkLocalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_matching_reserved_ip_address: {
      value: cdktf.booleanToHclTerraform(struct!.dropMatchingReservedIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reverse_route_packet_mode_vr: {
      value: cdktf.booleanToHclTerraform(struct!.reverseRoutePacketModeVr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowAdvancedOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropMatchingLinkLocalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropMatchingLinkLocalAddress = this._dropMatchingLinkLocalAddress;
    }
    if (this._dropMatchingReservedIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropMatchingReservedIpAddress = this._dropMatchingReservedIpAddress;
    }
    if (this._reverseRoutePacketModeVr !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseRoutePacketModeVr = this._reverseRoutePacketModeVr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowAdvancedOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropMatchingLinkLocalAddress = undefined;
      this._dropMatchingReservedIpAddress = undefined;
      this._reverseRoutePacketModeVr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropMatchingLinkLocalAddress = value.dropMatchingLinkLocalAddress;
      this._dropMatchingReservedIpAddress = value.dropMatchingReservedIpAddress;
      this._reverseRoutePacketModeVr = value.reverseRoutePacketModeVr;
    }
  }

  // drop_matching_link_local_address - computed: false, optional: true, required: false
  private _dropMatchingLinkLocalAddress?: boolean | cdktf.IResolvable; 
  public get dropMatchingLinkLocalAddress() {
    return this.getBooleanAttribute('drop_matching_link_local_address');
  }
  public set dropMatchingLinkLocalAddress(value: boolean | cdktf.IResolvable) {
    this._dropMatchingLinkLocalAddress = value;
  }
  public resetDropMatchingLinkLocalAddress() {
    this._dropMatchingLinkLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropMatchingLinkLocalAddressInput() {
    return this._dropMatchingLinkLocalAddress;
  }

  // drop_matching_reserved_ip_address - computed: false, optional: true, required: false
  private _dropMatchingReservedIpAddress?: boolean | cdktf.IResolvable; 
  public get dropMatchingReservedIpAddress() {
    return this.getBooleanAttribute('drop_matching_reserved_ip_address');
  }
  public set dropMatchingReservedIpAddress(value: boolean | cdktf.IResolvable) {
    this._dropMatchingReservedIpAddress = value;
  }
  public resetDropMatchingReservedIpAddress() {
    this._dropMatchingReservedIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropMatchingReservedIpAddressInput() {
    return this._dropMatchingReservedIpAddress;
  }

  // reverse_route_packet_mode_vr - computed: false, optional: true, required: false
  private _reverseRoutePacketModeVr?: boolean | cdktf.IResolvable; 
  public get reverseRoutePacketModeVr() {
    return this.getBooleanAttribute('reverse_route_packet_mode_vr');
  }
  public set reverseRoutePacketModeVr(value: boolean | cdktf.IResolvable) {
    this._reverseRoutePacketModeVr = value;
  }
  public resetReverseRoutePacketModeVr() {
    this._reverseRoutePacketModeVr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseRoutePacketModeVrInput() {
    return this._reverseRoutePacketModeVr;
  }
}
export interface SecurityFlowAging {
  /**
  * Delay before device declares session invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#early_ageout Security#early_ageout}
  */
  readonly earlyAgeout?: number;
  /**
  * Percentage of session-table capacity at which aggressive aging-out starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#high_watermark Security#high_watermark}
  */
  readonly highWatermark?: number;
  /**
  * Percentage of session-table capacity at which aggressive aging-out ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#low_watermark Security#low_watermark}
  */
  readonly lowWatermark?: number;
}

export function securityFlowAgingToTerraform(struct?: SecurityFlowAging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    early_ageout: cdktf.numberToTerraform(struct!.earlyAgeout),
    high_watermark: cdktf.numberToTerraform(struct!.highWatermark),
    low_watermark: cdktf.numberToTerraform(struct!.lowWatermark),
  }
}


export function securityFlowAgingToHclTerraform(struct?: SecurityFlowAging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    early_ageout: {
      value: cdktf.numberToHclTerraform(struct!.earlyAgeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_watermark: {
      value: cdktf.numberToHclTerraform(struct!.highWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low_watermark: {
      value: cdktf.numberToHclTerraform(struct!.lowWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowAgingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowAging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._earlyAgeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.earlyAgeout = this._earlyAgeout;
    }
    if (this._highWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWatermark = this._highWatermark;
    }
    if (this._lowWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWatermark = this._lowWatermark;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowAging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._earlyAgeout = undefined;
      this._highWatermark = undefined;
      this._lowWatermark = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._earlyAgeout = value.earlyAgeout;
      this._highWatermark = value.highWatermark;
      this._lowWatermark = value.lowWatermark;
    }
  }

  // early_ageout - computed: false, optional: true, required: false
  private _earlyAgeout?: number; 
  public get earlyAgeout() {
    return this.getNumberAttribute('early_ageout');
  }
  public set earlyAgeout(value: number) {
    this._earlyAgeout = value;
  }
  public resetEarlyAgeout() {
    this._earlyAgeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyAgeoutInput() {
    return this._earlyAgeout;
  }

  // high_watermark - computed: false, optional: true, required: false
  private _highWatermark?: number; 
  public get highWatermark() {
    return this.getNumberAttribute('high_watermark');
  }
  public set highWatermark(value: number) {
    this._highWatermark = value;
  }
  public resetHighWatermark() {
    this._highWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWatermarkInput() {
    return this._highWatermark;
  }

  // low_watermark - computed: false, optional: true, required: false
  private _lowWatermark?: number; 
  public get lowWatermark() {
    return this.getNumberAttribute('low_watermark');
  }
  public set lowWatermark(value: number) {
    this._lowWatermark = value;
  }
  public resetLowWatermark() {
    this._lowWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWatermarkInput() {
    return this._lowWatermark;
  }
}
export interface SecurityFlowEthernetSwitchingNoPacketFlooding {
  /**
  * Don't send ICMP to trigger MAC learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#no_trace_route Security#no_trace_route}
  */
  readonly noTraceRoute?: boolean | cdktf.IResolvable;
}

export function securityFlowEthernetSwitchingNoPacketFloodingToTerraform(struct?: SecurityFlowEthernetSwitchingNoPacketFlooding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_trace_route: cdktf.booleanToTerraform(struct!.noTraceRoute),
  }
}


export function securityFlowEthernetSwitchingNoPacketFloodingToHclTerraform(struct?: SecurityFlowEthernetSwitchingNoPacketFlooding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_trace_route: {
      value: cdktf.booleanToHclTerraform(struct!.noTraceRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowEthernetSwitchingNoPacketFloodingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowEthernetSwitchingNoPacketFlooding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTraceRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTraceRoute = this._noTraceRoute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowEthernetSwitchingNoPacketFlooding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noTraceRoute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noTraceRoute = value.noTraceRoute;
    }
  }

  // no_trace_route - computed: false, optional: true, required: false
  private _noTraceRoute?: boolean | cdktf.IResolvable; 
  public get noTraceRoute() {
    return this.getBooleanAttribute('no_trace_route');
  }
  public set noTraceRoute(value: boolean | cdktf.IResolvable) {
    this._noTraceRoute = value;
  }
  public resetNoTraceRoute() {
    this._noTraceRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTraceRouteInput() {
    return this._noTraceRoute;
  }
}
export interface SecurityFlowEthernetSwitching {
  /**
  * Block all non-IP and non-ARP traffic including broadcast/multicast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#block_non_ip_all Security#block_non_ip_all}
  */
  readonly blockNonIpAll?: boolean | cdktf.IResolvable;
  /**
  * Set 802.1D BPDU flooding based on VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#bpdu_vlan_flooding Security#bpdu_vlan_flooding}
  */
  readonly bpduVlanFlooding?: boolean | cdktf.IResolvable;
  /**
  * Allow all non-IP (including unicast) traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#bypass_non_ip_unicast Security#bypass_non_ip_unicast}
  */
  readonly bypassNonIpUnicast?: boolean | cdktf.IResolvable;
  /**
  * no_packet_flooding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#no_packet_flooding Security#no_packet_flooding}
  */
  readonly noPacketFlooding?: SecurityFlowEthernetSwitchingNoPacketFlooding;
}

export function securityFlowEthernetSwitchingToTerraform(struct?: SecurityFlowEthernetSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_non_ip_all: cdktf.booleanToTerraform(struct!.blockNonIpAll),
    bpdu_vlan_flooding: cdktf.booleanToTerraform(struct!.bpduVlanFlooding),
    bypass_non_ip_unicast: cdktf.booleanToTerraform(struct!.bypassNonIpUnicast),
    no_packet_flooding: securityFlowEthernetSwitchingNoPacketFloodingToTerraform(struct!.noPacketFlooding),
  }
}


export function securityFlowEthernetSwitchingToHclTerraform(struct?: SecurityFlowEthernetSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_non_ip_all: {
      value: cdktf.booleanToHclTerraform(struct!.blockNonIpAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpdu_vlan_flooding: {
      value: cdktf.booleanToHclTerraform(struct!.bpduVlanFlooding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_non_ip_unicast: {
      value: cdktf.booleanToHclTerraform(struct!.bypassNonIpUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_packet_flooding: {
      value: securityFlowEthernetSwitchingNoPacketFloodingToHclTerraform(struct!.noPacketFlooding),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowEthernetSwitchingNoPacketFlooding",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowEthernetSwitchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowEthernetSwitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockNonIpAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockNonIpAll = this._blockNonIpAll;
    }
    if (this._bpduVlanFlooding !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduVlanFlooding = this._bpduVlanFlooding;
    }
    if (this._bypassNonIpUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassNonIpUnicast = this._bypassNonIpUnicast;
    }
    if (this._noPacketFlooding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPacketFlooding = this._noPacketFlooding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowEthernetSwitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockNonIpAll = undefined;
      this._bpduVlanFlooding = undefined;
      this._bypassNonIpUnicast = undefined;
      this._noPacketFlooding.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockNonIpAll = value.blockNonIpAll;
      this._bpduVlanFlooding = value.bpduVlanFlooding;
      this._bypassNonIpUnicast = value.bypassNonIpUnicast;
      this._noPacketFlooding.internalValue = value.noPacketFlooding;
    }
  }

  // block_non_ip_all - computed: false, optional: true, required: false
  private _blockNonIpAll?: boolean | cdktf.IResolvable; 
  public get blockNonIpAll() {
    return this.getBooleanAttribute('block_non_ip_all');
  }
  public set blockNonIpAll(value: boolean | cdktf.IResolvable) {
    this._blockNonIpAll = value;
  }
  public resetBlockNonIpAll() {
    this._blockNonIpAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonIpAllInput() {
    return this._blockNonIpAll;
  }

  // bpdu_vlan_flooding - computed: false, optional: true, required: false
  private _bpduVlanFlooding?: boolean | cdktf.IResolvable; 
  public get bpduVlanFlooding() {
    return this.getBooleanAttribute('bpdu_vlan_flooding');
  }
  public set bpduVlanFlooding(value: boolean | cdktf.IResolvable) {
    this._bpduVlanFlooding = value;
  }
  public resetBpduVlanFlooding() {
    this._bpduVlanFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduVlanFloodingInput() {
    return this._bpduVlanFlooding;
  }

  // bypass_non_ip_unicast - computed: false, optional: true, required: false
  private _bypassNonIpUnicast?: boolean | cdktf.IResolvable; 
  public get bypassNonIpUnicast() {
    return this.getBooleanAttribute('bypass_non_ip_unicast');
  }
  public set bypassNonIpUnicast(value: boolean | cdktf.IResolvable) {
    this._bypassNonIpUnicast = value;
  }
  public resetBypassNonIpUnicast() {
    this._bypassNonIpUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassNonIpUnicastInput() {
    return this._bypassNonIpUnicast;
  }

  // no_packet_flooding - computed: false, optional: true, required: false
  private _noPacketFlooding = new SecurityFlowEthernetSwitchingNoPacketFloodingOutputReference(this, "no_packet_flooding");
  public get noPacketFlooding() {
    return this._noPacketFlooding;
  }
  public putNoPacketFlooding(value: SecurityFlowEthernetSwitchingNoPacketFlooding) {
    this._noPacketFlooding.internalValue = value;
  }
  public resetNoPacketFlooding() {
    this._noPacketFlooding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPacketFloodingInput() {
    return this._noPacketFlooding.internalValue;
  }
}
export interface SecurityFlowTcpMssGreIn {
  /**
  * MSS Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#mss Security#mss}
  */
  readonly mss?: number;
}

export function securityFlowTcpMssGreInToTerraform(struct?: SecurityFlowTcpMssGreIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss: cdktf.numberToTerraform(struct!.mss),
  }
}


export function securityFlowTcpMssGreInToHclTerraform(struct?: SecurityFlowTcpMssGreIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss: {
      value: cdktf.numberToHclTerraform(struct!.mss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowTcpMssGreInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowTcpMssGreIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mss !== undefined) {
      hasAnyValues = true;
      internalValueResult.mss = this._mss;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowTcpMssGreIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mss = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mss = value.mss;
    }
  }

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }
}
export interface SecurityFlowTcpMssGreOut {
  /**
  * MSS Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#mss Security#mss}
  */
  readonly mss?: number;
}

export function securityFlowTcpMssGreOutToTerraform(struct?: SecurityFlowTcpMssGreOut | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss: cdktf.numberToTerraform(struct!.mss),
  }
}


export function securityFlowTcpMssGreOutToHclTerraform(struct?: SecurityFlowTcpMssGreOut | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss: {
      value: cdktf.numberToHclTerraform(struct!.mss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowTcpMssGreOutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowTcpMssGreOut | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mss !== undefined) {
      hasAnyValues = true;
      internalValueResult.mss = this._mss;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowTcpMssGreOut | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mss = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mss = value.mss;
    }
  }

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }
}
export interface SecurityFlowTcpMssIpsecVpn {
  /**
  * MSS Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#mss Security#mss}
  */
  readonly mss?: number;
}

export function securityFlowTcpMssIpsecVpnToTerraform(struct?: SecurityFlowTcpMssIpsecVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mss: cdktf.numberToTerraform(struct!.mss),
  }
}


export function securityFlowTcpMssIpsecVpnToHclTerraform(struct?: SecurityFlowTcpMssIpsecVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mss: {
      value: cdktf.numberToHclTerraform(struct!.mss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowTcpMssIpsecVpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowTcpMssIpsecVpn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mss !== undefined) {
      hasAnyValues = true;
      internalValueResult.mss = this._mss;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowTcpMssIpsecVpn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mss = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mss = value.mss;
    }
  }

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }
}
export interface SecurityFlowTcpMss {
  /**
  * Enable MSS override for all packets with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#all_tcp_mss Security#all_tcp_mss}
  */
  readonly allTcpMss?: number;
  /**
  * gre_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#gre_in Security#gre_in}
  */
  readonly greIn?: SecurityFlowTcpMssGreIn;
  /**
  * gre_out block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#gre_out Security#gre_out}
  */
  readonly greOut?: SecurityFlowTcpMssGreOut;
  /**
  * ipsec_vpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#ipsec_vpn Security#ipsec_vpn}
  */
  readonly ipsecVpn?: SecurityFlowTcpMssIpsecVpn;
}

export function securityFlowTcpMssToTerraform(struct?: SecurityFlowTcpMss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_tcp_mss: cdktf.numberToTerraform(struct!.allTcpMss),
    gre_in: securityFlowTcpMssGreInToTerraform(struct!.greIn),
    gre_out: securityFlowTcpMssGreOutToTerraform(struct!.greOut),
    ipsec_vpn: securityFlowTcpMssIpsecVpnToTerraform(struct!.ipsecVpn),
  }
}


export function securityFlowTcpMssToHclTerraform(struct?: SecurityFlowTcpMss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_tcp_mss: {
      value: cdktf.numberToHclTerraform(struct!.allTcpMss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_in: {
      value: securityFlowTcpMssGreInToHclTerraform(struct!.greIn),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowTcpMssGreIn",
    },
    gre_out: {
      value: securityFlowTcpMssGreOutToHclTerraform(struct!.greOut),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowTcpMssGreOut",
    },
    ipsec_vpn: {
      value: securityFlowTcpMssIpsecVpnToHclTerraform(struct!.ipsecVpn),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowTcpMssIpsecVpn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowTcpMssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowTcpMss | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allTcpMss !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTcpMss = this._allTcpMss;
    }
    if (this._greIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greIn = this._greIn?.internalValue;
    }
    if (this._greOut?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greOut = this._greOut?.internalValue;
    }
    if (this._ipsecVpn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecVpn = this._ipsecVpn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowTcpMss | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allTcpMss = undefined;
      this._greIn.internalValue = undefined;
      this._greOut.internalValue = undefined;
      this._ipsecVpn.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allTcpMss = value.allTcpMss;
      this._greIn.internalValue = value.greIn;
      this._greOut.internalValue = value.greOut;
      this._ipsecVpn.internalValue = value.ipsecVpn;
    }
  }

  // all_tcp_mss - computed: false, optional: true, required: false
  private _allTcpMss?: number; 
  public get allTcpMss() {
    return this.getNumberAttribute('all_tcp_mss');
  }
  public set allTcpMss(value: number) {
    this._allTcpMss = value;
  }
  public resetAllTcpMss() {
    this._allTcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTcpMssInput() {
    return this._allTcpMss;
  }

  // gre_in - computed: false, optional: true, required: false
  private _greIn = new SecurityFlowTcpMssGreInOutputReference(this, "gre_in");
  public get greIn() {
    return this._greIn;
  }
  public putGreIn(value: SecurityFlowTcpMssGreIn) {
    this._greIn.internalValue = value;
  }
  public resetGreIn() {
    this._greIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greInInput() {
    return this._greIn.internalValue;
  }

  // gre_out - computed: false, optional: true, required: false
  private _greOut = new SecurityFlowTcpMssGreOutOutputReference(this, "gre_out");
  public get greOut() {
    return this._greOut;
  }
  public putGreOut(value: SecurityFlowTcpMssGreOut) {
    this._greOut.internalValue = value;
  }
  public resetGreOut() {
    this._greOut.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greOutInput() {
    return this._greOut.internalValue;
  }

  // ipsec_vpn - computed: false, optional: true, required: false
  private _ipsecVpn = new SecurityFlowTcpMssIpsecVpnOutputReference(this, "ipsec_vpn");
  public get ipsecVpn() {
    return this._ipsecVpn;
  }
  public putIpsecVpn(value: SecurityFlowTcpMssIpsecVpn) {
    this._ipsecVpn.internalValue = value;
  }
  public resetIpsecVpn() {
    this._ipsecVpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecVpnInput() {
    return this._ipsecVpn.internalValue;
  }
}
export interface SecurityFlowTcpSessionTimeWaitState {
  /**
  * Apply time-wait-state timeout to half-close state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#apply_to_half_close_state Security#apply_to_half_close_state}
  */
  readonly applyToHalfCloseState?: boolean | cdktf.IResolvable;
  /**
  * Allow session to ageout using service based timeout values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#session_ageout Security#session_ageout}
  */
  readonly sessionAgeout?: boolean | cdktf.IResolvable;
  /**
  * Configure session timeout value for time-wait state (2..600 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#session_timeout Security#session_timeout}
  */
  readonly sessionTimeout?: number;
}

export function securityFlowTcpSessionTimeWaitStateToTerraform(struct?: SecurityFlowTcpSessionTimeWaitState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_to_half_close_state: cdktf.booleanToTerraform(struct!.applyToHalfCloseState),
    session_ageout: cdktf.booleanToTerraform(struct!.sessionAgeout),
    session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
  }
}


export function securityFlowTcpSessionTimeWaitStateToHclTerraform(struct?: SecurityFlowTcpSessionTimeWaitState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_to_half_close_state: {
      value: cdktf.booleanToHclTerraform(struct!.applyToHalfCloseState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_ageout: {
      value: cdktf.booleanToHclTerraform(struct!.sessionAgeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowTcpSessionTimeWaitStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowTcpSessionTimeWaitState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyToHalfCloseState !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyToHalfCloseState = this._applyToHalfCloseState;
    }
    if (this._sessionAgeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAgeout = this._sessionAgeout;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowTcpSessionTimeWaitState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyToHalfCloseState = undefined;
      this._sessionAgeout = undefined;
      this._sessionTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyToHalfCloseState = value.applyToHalfCloseState;
      this._sessionAgeout = value.sessionAgeout;
      this._sessionTimeout = value.sessionTimeout;
    }
  }

  // apply_to_half_close_state - computed: false, optional: true, required: false
  private _applyToHalfCloseState?: boolean | cdktf.IResolvable; 
  public get applyToHalfCloseState() {
    return this.getBooleanAttribute('apply_to_half_close_state');
  }
  public set applyToHalfCloseState(value: boolean | cdktf.IResolvable) {
    this._applyToHalfCloseState = value;
  }
  public resetApplyToHalfCloseState() {
    this._applyToHalfCloseState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToHalfCloseStateInput() {
    return this._applyToHalfCloseState;
  }

  // session_ageout - computed: false, optional: true, required: false
  private _sessionAgeout?: boolean | cdktf.IResolvable; 
  public get sessionAgeout() {
    return this.getBooleanAttribute('session_ageout');
  }
  public set sessionAgeout(value: boolean | cdktf.IResolvable) {
    this._sessionAgeout = value;
  }
  public resetSessionAgeout() {
    this._sessionAgeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAgeoutInput() {
    return this._sessionAgeout;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }
}
export interface SecurityFlowTcpSession {
  /**
  * Immediately end session on receipt of fin (FIN) segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#fin_invalidate_session Security#fin_invalidate_session}
  */
  readonly finInvalidateSession?: boolean | cdktf.IResolvable;
  /**
  * Maximum TCP proxy scaled receive window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#maximum_window Security#maximum_window}
  */
  readonly maximumWindow?: string;
  /**
  * Disable sequence-number checking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#no_sequence_check Security#no_sequence_check}
  */
  readonly noSequenceCheck?: boolean | cdktf.IResolvable;
  /**
  * Disable creation-time SYN-flag check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#no_syn_check Security#no_syn_check}
  */
  readonly noSynCheck?: boolean | cdktf.IResolvable;
  /**
  * Disable creation-time SYN-flag check for tunnel packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#no_syn_check_in_tunnel Security#no_syn_check_in_tunnel}
  */
  readonly noSynCheckInTunnel?: boolean | cdktf.IResolvable;
  /**
  * Immediately end session on receipt of reset (RST) segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#rst_invalidate_session Security#rst_invalidate_session}
  */
  readonly rstInvalidateSession?: boolean | cdktf.IResolvable;
  /**
  * Check sequence number in reset (RST) segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#rst_sequence_check Security#rst_sequence_check}
  */
  readonly rstSequenceCheck?: boolean | cdktf.IResolvable;
  /**
  * Enable strict syn check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#strict_syn_check Security#strict_syn_check}
  */
  readonly strictSynCheck?: boolean | cdktf.IResolvable;
  /**
  * Timeout for TCP session when initialization fails (4..300 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#tcp_initial_timeout Security#tcp_initial_timeout}
  */
  readonly tcpInitialTimeout?: number;
  /**
  * time_wait_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#time_wait_state Security#time_wait_state}
  */
  readonly timeWaitState?: SecurityFlowTcpSessionTimeWaitState;
}

export function securityFlowTcpSessionToTerraform(struct?: SecurityFlowTcpSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fin_invalidate_session: cdktf.booleanToTerraform(struct!.finInvalidateSession),
    maximum_window: cdktf.stringToTerraform(struct!.maximumWindow),
    no_sequence_check: cdktf.booleanToTerraform(struct!.noSequenceCheck),
    no_syn_check: cdktf.booleanToTerraform(struct!.noSynCheck),
    no_syn_check_in_tunnel: cdktf.booleanToTerraform(struct!.noSynCheckInTunnel),
    rst_invalidate_session: cdktf.booleanToTerraform(struct!.rstInvalidateSession),
    rst_sequence_check: cdktf.booleanToTerraform(struct!.rstSequenceCheck),
    strict_syn_check: cdktf.booleanToTerraform(struct!.strictSynCheck),
    tcp_initial_timeout: cdktf.numberToTerraform(struct!.tcpInitialTimeout),
    time_wait_state: securityFlowTcpSessionTimeWaitStateToTerraform(struct!.timeWaitState),
  }
}


export function securityFlowTcpSessionToHclTerraform(struct?: SecurityFlowTcpSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fin_invalidate_session: {
      value: cdktf.booleanToHclTerraform(struct!.finInvalidateSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_window: {
      value: cdktf.stringToHclTerraform(struct!.maximumWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_sequence_check: {
      value: cdktf.booleanToHclTerraform(struct!.noSequenceCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_syn_check: {
      value: cdktf.booleanToHclTerraform(struct!.noSynCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_syn_check_in_tunnel: {
      value: cdktf.booleanToHclTerraform(struct!.noSynCheckInTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rst_invalidate_session: {
      value: cdktf.booleanToHclTerraform(struct!.rstInvalidateSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rst_sequence_check: {
      value: cdktf.booleanToHclTerraform(struct!.rstSequenceCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_syn_check: {
      value: cdktf.booleanToHclTerraform(struct!.strictSynCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_initial_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tcpInitialTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_wait_state: {
      value: securityFlowTcpSessionTimeWaitStateToHclTerraform(struct!.timeWaitState),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowTcpSessionTimeWaitState",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowTcpSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlowTcpSession | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._finInvalidateSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.finInvalidateSession = this._finInvalidateSession;
    }
    if (this._maximumWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumWindow = this._maximumWindow;
    }
    if (this._noSequenceCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSequenceCheck = this._noSequenceCheck;
    }
    if (this._noSynCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSynCheck = this._noSynCheck;
    }
    if (this._noSynCheckInTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSynCheckInTunnel = this._noSynCheckInTunnel;
    }
    if (this._rstInvalidateSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.rstInvalidateSession = this._rstInvalidateSession;
    }
    if (this._rstSequenceCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.rstSequenceCheck = this._rstSequenceCheck;
    }
    if (this._strictSynCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictSynCheck = this._strictSynCheck;
    }
    if (this._tcpInitialTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInitialTimeout = this._tcpInitialTimeout;
    }
    if (this._timeWaitState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWaitState = this._timeWaitState?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlowTcpSession | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._finInvalidateSession = undefined;
      this._maximumWindow = undefined;
      this._noSequenceCheck = undefined;
      this._noSynCheck = undefined;
      this._noSynCheckInTunnel = undefined;
      this._rstInvalidateSession = undefined;
      this._rstSequenceCheck = undefined;
      this._strictSynCheck = undefined;
      this._tcpInitialTimeout = undefined;
      this._timeWaitState.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._finInvalidateSession = value.finInvalidateSession;
      this._maximumWindow = value.maximumWindow;
      this._noSequenceCheck = value.noSequenceCheck;
      this._noSynCheck = value.noSynCheck;
      this._noSynCheckInTunnel = value.noSynCheckInTunnel;
      this._rstInvalidateSession = value.rstInvalidateSession;
      this._rstSequenceCheck = value.rstSequenceCheck;
      this._strictSynCheck = value.strictSynCheck;
      this._tcpInitialTimeout = value.tcpInitialTimeout;
      this._timeWaitState.internalValue = value.timeWaitState;
    }
  }

  // fin_invalidate_session - computed: false, optional: true, required: false
  private _finInvalidateSession?: boolean | cdktf.IResolvable; 
  public get finInvalidateSession() {
    return this.getBooleanAttribute('fin_invalidate_session');
  }
  public set finInvalidateSession(value: boolean | cdktf.IResolvable) {
    this._finInvalidateSession = value;
  }
  public resetFinInvalidateSession() {
    this._finInvalidateSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finInvalidateSessionInput() {
    return this._finInvalidateSession;
  }

  // maximum_window - computed: false, optional: true, required: false
  private _maximumWindow?: string; 
  public get maximumWindow() {
    return this.getStringAttribute('maximum_window');
  }
  public set maximumWindow(value: string) {
    this._maximumWindow = value;
  }
  public resetMaximumWindow() {
    this._maximumWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumWindowInput() {
    return this._maximumWindow;
  }

  // no_sequence_check - computed: false, optional: true, required: false
  private _noSequenceCheck?: boolean | cdktf.IResolvable; 
  public get noSequenceCheck() {
    return this.getBooleanAttribute('no_sequence_check');
  }
  public set noSequenceCheck(value: boolean | cdktf.IResolvable) {
    this._noSequenceCheck = value;
  }
  public resetNoSequenceCheck() {
    this._noSequenceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSequenceCheckInput() {
    return this._noSequenceCheck;
  }

  // no_syn_check - computed: false, optional: true, required: false
  private _noSynCheck?: boolean | cdktf.IResolvable; 
  public get noSynCheck() {
    return this.getBooleanAttribute('no_syn_check');
  }
  public set noSynCheck(value: boolean | cdktf.IResolvable) {
    this._noSynCheck = value;
  }
  public resetNoSynCheck() {
    this._noSynCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSynCheckInput() {
    return this._noSynCheck;
  }

  // no_syn_check_in_tunnel - computed: false, optional: true, required: false
  private _noSynCheckInTunnel?: boolean | cdktf.IResolvable; 
  public get noSynCheckInTunnel() {
    return this.getBooleanAttribute('no_syn_check_in_tunnel');
  }
  public set noSynCheckInTunnel(value: boolean | cdktf.IResolvable) {
    this._noSynCheckInTunnel = value;
  }
  public resetNoSynCheckInTunnel() {
    this._noSynCheckInTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSynCheckInTunnelInput() {
    return this._noSynCheckInTunnel;
  }

  // rst_invalidate_session - computed: false, optional: true, required: false
  private _rstInvalidateSession?: boolean | cdktf.IResolvable; 
  public get rstInvalidateSession() {
    return this.getBooleanAttribute('rst_invalidate_session');
  }
  public set rstInvalidateSession(value: boolean | cdktf.IResolvable) {
    this._rstInvalidateSession = value;
  }
  public resetRstInvalidateSession() {
    this._rstInvalidateSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstInvalidateSessionInput() {
    return this._rstInvalidateSession;
  }

  // rst_sequence_check - computed: false, optional: true, required: false
  private _rstSequenceCheck?: boolean | cdktf.IResolvable; 
  public get rstSequenceCheck() {
    return this.getBooleanAttribute('rst_sequence_check');
  }
  public set rstSequenceCheck(value: boolean | cdktf.IResolvable) {
    this._rstSequenceCheck = value;
  }
  public resetRstSequenceCheck() {
    this._rstSequenceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstSequenceCheckInput() {
    return this._rstSequenceCheck;
  }

  // strict_syn_check - computed: false, optional: true, required: false
  private _strictSynCheck?: boolean | cdktf.IResolvable; 
  public get strictSynCheck() {
    return this.getBooleanAttribute('strict_syn_check');
  }
  public set strictSynCheck(value: boolean | cdktf.IResolvable) {
    this._strictSynCheck = value;
  }
  public resetStrictSynCheck() {
    this._strictSynCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSynCheckInput() {
    return this._strictSynCheck;
  }

  // tcp_initial_timeout - computed: false, optional: true, required: false
  private _tcpInitialTimeout?: number; 
  public get tcpInitialTimeout() {
    return this.getNumberAttribute('tcp_initial_timeout');
  }
  public set tcpInitialTimeout(value: number) {
    this._tcpInitialTimeout = value;
  }
  public resetTcpInitialTimeout() {
    this._tcpInitialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInitialTimeoutInput() {
    return this._tcpInitialTimeout;
  }

  // time_wait_state - computed: false, optional: true, required: false
  private _timeWaitState = new SecurityFlowTcpSessionTimeWaitStateOutputReference(this, "time_wait_state");
  public get timeWaitState() {
    return this._timeWaitState;
  }
  public putTimeWaitState(value: SecurityFlowTcpSessionTimeWaitState) {
    this._timeWaitState.internalValue = value;
  }
  public resetTimeWaitState() {
    this._timeWaitState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWaitStateInput() {
    return this._timeWaitState.internalValue;
  }
}
export interface SecurityFlow {
  /**
  * Allow unmatched incoming DNS reply packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#allow_dns_reply Security#allow_dns_reply}
  */
  readonly allowDnsReply?: boolean | cdktf.IResolvable;
  /**
  * Allow embedded ICMP packets not matching a session to pass through.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#allow_embedded_icmp Security#allow_embedded_icmp}
  */
  readonly allowEmbeddedIcmp?: boolean | cdktf.IResolvable;
  /**
  * Allow reverse ECMP route lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#allow_reverse_ecmp Security#allow_reverse_ecmp}
  */
  readonly allowReverseEcmp?: boolean | cdktf.IResolvable;
  /**
  * Enable reroute check with uniform link and NAT check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#enable_reroute_uniform_link_check_nat Security#enable_reroute_uniform_link_check_nat}
  */
  readonly enableRerouteUniformLinkCheckNat?: boolean | cdktf.IResolvable;
  /**
  * Force to reassemble ip fragments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#force_ip_reassembly Security#force_ip_reassembly}
  */
  readonly forceIpReassembly?: boolean | cdktf.IResolvable;
  /**
  * Accelerate the IPSec traffic performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#ipsec_performance_acceleration Security#ipsec_performance_acceleration}
  */
  readonly ipsecPerformanceAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Allow to hold more packets during multicast session creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#mcast_buffer_enhance Security#mcast_buffer_enhance}
  */
  readonly mcastBufferEnhance?: boolean | cdktf.IResolvable;
  /**
  * Maximum queued length per pending session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#pending_sess_queue_length Security#pending_sess_queue_length}
  */
  readonly pendingSessQueueLength?: string;
  /**
  * Preserve incoming fragment size for egress MTU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#preserve_incoming_fragment_size Security#preserve_incoming_fragment_size}
  */
  readonly preserveIncomingFragmentSize?: boolean | cdktf.IResolvable;
  /**
  * Timeout value for route change to nonexistent route (6..1800 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#route_change_timeout Security#route_change_timeout}
  */
  readonly routeChangeTimeout?: number;
  /**
  * TCP SYN flood protection mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#syn_flood_protection_mode Security#syn_flood_protection_mode}
  */
  readonly synFloodProtectionMode?: string;
  /**
  * Allow icmp sessions to sync to peer node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#sync_icmp_session Security#sync_icmp_session}
  */
  readonly syncIcmpSession?: boolean | cdktf.IResolvable;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#advanced_options Security#advanced_options}
  */
  readonly advancedOptions?: SecurityFlowAdvancedOptions;
  /**
  * aging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#aging Security#aging}
  */
  readonly aging?: SecurityFlowAging;
  /**
  * ethernet_switching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#ethernet_switching Security#ethernet_switching}
  */
  readonly ethernetSwitching?: SecurityFlowEthernetSwitching;
  /**
  * tcp_mss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#tcp_mss Security#tcp_mss}
  */
  readonly tcpMss?: SecurityFlowTcpMss;
  /**
  * tcp_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#tcp_session Security#tcp_session}
  */
  readonly tcpSession?: SecurityFlowTcpSession;
}

export function securityFlowToTerraform(struct?: SecurityFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_dns_reply: cdktf.booleanToTerraform(struct!.allowDnsReply),
    allow_embedded_icmp: cdktf.booleanToTerraform(struct!.allowEmbeddedIcmp),
    allow_reverse_ecmp: cdktf.booleanToTerraform(struct!.allowReverseEcmp),
    enable_reroute_uniform_link_check_nat: cdktf.booleanToTerraform(struct!.enableRerouteUniformLinkCheckNat),
    force_ip_reassembly: cdktf.booleanToTerraform(struct!.forceIpReassembly),
    ipsec_performance_acceleration: cdktf.booleanToTerraform(struct!.ipsecPerformanceAcceleration),
    mcast_buffer_enhance: cdktf.booleanToTerraform(struct!.mcastBufferEnhance),
    pending_sess_queue_length: cdktf.stringToTerraform(struct!.pendingSessQueueLength),
    preserve_incoming_fragment_size: cdktf.booleanToTerraform(struct!.preserveIncomingFragmentSize),
    route_change_timeout: cdktf.numberToTerraform(struct!.routeChangeTimeout),
    syn_flood_protection_mode: cdktf.stringToTerraform(struct!.synFloodProtectionMode),
    sync_icmp_session: cdktf.booleanToTerraform(struct!.syncIcmpSession),
    advanced_options: securityFlowAdvancedOptionsToTerraform(struct!.advancedOptions),
    aging: securityFlowAgingToTerraform(struct!.aging),
    ethernet_switching: securityFlowEthernetSwitchingToTerraform(struct!.ethernetSwitching),
    tcp_mss: securityFlowTcpMssToTerraform(struct!.tcpMss),
    tcp_session: securityFlowTcpSessionToTerraform(struct!.tcpSession),
  }
}


export function securityFlowToHclTerraform(struct?: SecurityFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_dns_reply: {
      value: cdktf.booleanToHclTerraform(struct!.allowDnsReply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_embedded_icmp: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmbeddedIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_reverse_ecmp: {
      value: cdktf.booleanToHclTerraform(struct!.allowReverseEcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_reroute_uniform_link_check_nat: {
      value: cdktf.booleanToHclTerraform(struct!.enableRerouteUniformLinkCheckNat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_ip_reassembly: {
      value: cdktf.booleanToHclTerraform(struct!.forceIpReassembly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipsec_performance_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.ipsecPerformanceAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mcast_buffer_enhance: {
      value: cdktf.booleanToHclTerraform(struct!.mcastBufferEnhance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pending_sess_queue_length: {
      value: cdktf.stringToHclTerraform(struct!.pendingSessQueueLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_incoming_fragment_size: {
      value: cdktf.booleanToHclTerraform(struct!.preserveIncomingFragmentSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_change_timeout: {
      value: cdktf.numberToHclTerraform(struct!.routeChangeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_flood_protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.synFloodProtectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_icmp_session: {
      value: cdktf.booleanToHclTerraform(struct!.syncIcmpSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advanced_options: {
      value: securityFlowAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowAdvancedOptions",
    },
    aging: {
      value: securityFlowAgingToHclTerraform(struct!.aging),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowAging",
    },
    ethernet_switching: {
      value: securityFlowEthernetSwitchingToHclTerraform(struct!.ethernetSwitching),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowEthernetSwitching",
    },
    tcp_mss: {
      value: securityFlowTcpMssToHclTerraform(struct!.tcpMss),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowTcpMss",
    },
    tcp_session: {
      value: securityFlowTcpSessionToHclTerraform(struct!.tcpSession),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityFlowTcpSession",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDnsReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDnsReply = this._allowDnsReply;
    }
    if (this._allowEmbeddedIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmbeddedIcmp = this._allowEmbeddedIcmp;
    }
    if (this._allowReverseEcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowReverseEcmp = this._allowReverseEcmp;
    }
    if (this._enableRerouteUniformLinkCheckNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRerouteUniformLinkCheckNat = this._enableRerouteUniformLinkCheckNat;
    }
    if (this._forceIpReassembly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceIpReassembly = this._forceIpReassembly;
    }
    if (this._ipsecPerformanceAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPerformanceAcceleration = this._ipsecPerformanceAcceleration;
    }
    if (this._mcastBufferEnhance !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastBufferEnhance = this._mcastBufferEnhance;
    }
    if (this._pendingSessQueueLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingSessQueueLength = this._pendingSessQueueLength;
    }
    if (this._preserveIncomingFragmentSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveIncomingFragmentSize = this._preserveIncomingFragmentSize;
    }
    if (this._routeChangeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeChangeTimeout = this._routeChangeTimeout;
    }
    if (this._synFloodProtectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.synFloodProtectionMode = this._synFloodProtectionMode;
    }
    if (this._syncIcmpSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncIcmpSession = this._syncIcmpSession;
    }
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._aging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aging = this._aging?.internalValue;
    }
    if (this._ethernetSwitching?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetSwitching = this._ethernetSwitching?.internalValue;
    }
    if (this._tcpMss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMss = this._tcpMss?.internalValue;
    }
    if (this._tcpSession?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSession = this._tcpSession?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDnsReply = undefined;
      this._allowEmbeddedIcmp = undefined;
      this._allowReverseEcmp = undefined;
      this._enableRerouteUniformLinkCheckNat = undefined;
      this._forceIpReassembly = undefined;
      this._ipsecPerformanceAcceleration = undefined;
      this._mcastBufferEnhance = undefined;
      this._pendingSessQueueLength = undefined;
      this._preserveIncomingFragmentSize = undefined;
      this._routeChangeTimeout = undefined;
      this._synFloodProtectionMode = undefined;
      this._syncIcmpSession = undefined;
      this._advancedOptions.internalValue = undefined;
      this._aging.internalValue = undefined;
      this._ethernetSwitching.internalValue = undefined;
      this._tcpMss.internalValue = undefined;
      this._tcpSession.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDnsReply = value.allowDnsReply;
      this._allowEmbeddedIcmp = value.allowEmbeddedIcmp;
      this._allowReverseEcmp = value.allowReverseEcmp;
      this._enableRerouteUniformLinkCheckNat = value.enableRerouteUniformLinkCheckNat;
      this._forceIpReassembly = value.forceIpReassembly;
      this._ipsecPerformanceAcceleration = value.ipsecPerformanceAcceleration;
      this._mcastBufferEnhance = value.mcastBufferEnhance;
      this._pendingSessQueueLength = value.pendingSessQueueLength;
      this._preserveIncomingFragmentSize = value.preserveIncomingFragmentSize;
      this._routeChangeTimeout = value.routeChangeTimeout;
      this._synFloodProtectionMode = value.synFloodProtectionMode;
      this._syncIcmpSession = value.syncIcmpSession;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._aging.internalValue = value.aging;
      this._ethernetSwitching.internalValue = value.ethernetSwitching;
      this._tcpMss.internalValue = value.tcpMss;
      this._tcpSession.internalValue = value.tcpSession;
    }
  }

  // allow_dns_reply - computed: false, optional: true, required: false
  private _allowDnsReply?: boolean | cdktf.IResolvable; 
  public get allowDnsReply() {
    return this.getBooleanAttribute('allow_dns_reply');
  }
  public set allowDnsReply(value: boolean | cdktf.IResolvable) {
    this._allowDnsReply = value;
  }
  public resetAllowDnsReply() {
    this._allowDnsReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDnsReplyInput() {
    return this._allowDnsReply;
  }

  // allow_embedded_icmp - computed: false, optional: true, required: false
  private _allowEmbeddedIcmp?: boolean | cdktf.IResolvable; 
  public get allowEmbeddedIcmp() {
    return this.getBooleanAttribute('allow_embedded_icmp');
  }
  public set allowEmbeddedIcmp(value: boolean | cdktf.IResolvable) {
    this._allowEmbeddedIcmp = value;
  }
  public resetAllowEmbeddedIcmp() {
    this._allowEmbeddedIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmbeddedIcmpInput() {
    return this._allowEmbeddedIcmp;
  }

  // allow_reverse_ecmp - computed: false, optional: true, required: false
  private _allowReverseEcmp?: boolean | cdktf.IResolvable; 
  public get allowReverseEcmp() {
    return this.getBooleanAttribute('allow_reverse_ecmp');
  }
  public set allowReverseEcmp(value: boolean | cdktf.IResolvable) {
    this._allowReverseEcmp = value;
  }
  public resetAllowReverseEcmp() {
    this._allowReverseEcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowReverseEcmpInput() {
    return this._allowReverseEcmp;
  }

  // enable_reroute_uniform_link_check_nat - computed: false, optional: true, required: false
  private _enableRerouteUniformLinkCheckNat?: boolean | cdktf.IResolvable; 
  public get enableRerouteUniformLinkCheckNat() {
    return this.getBooleanAttribute('enable_reroute_uniform_link_check_nat');
  }
  public set enableRerouteUniformLinkCheckNat(value: boolean | cdktf.IResolvable) {
    this._enableRerouteUniformLinkCheckNat = value;
  }
  public resetEnableRerouteUniformLinkCheckNat() {
    this._enableRerouteUniformLinkCheckNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRerouteUniformLinkCheckNatInput() {
    return this._enableRerouteUniformLinkCheckNat;
  }

  // force_ip_reassembly - computed: false, optional: true, required: false
  private _forceIpReassembly?: boolean | cdktf.IResolvable; 
  public get forceIpReassembly() {
    return this.getBooleanAttribute('force_ip_reassembly');
  }
  public set forceIpReassembly(value: boolean | cdktf.IResolvable) {
    this._forceIpReassembly = value;
  }
  public resetForceIpReassembly() {
    this._forceIpReassembly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceIpReassemblyInput() {
    return this._forceIpReassembly;
  }

  // ipsec_performance_acceleration - computed: false, optional: true, required: false
  private _ipsecPerformanceAcceleration?: boolean | cdktf.IResolvable; 
  public get ipsecPerformanceAcceleration() {
    return this.getBooleanAttribute('ipsec_performance_acceleration');
  }
  public set ipsecPerformanceAcceleration(value: boolean | cdktf.IResolvable) {
    this._ipsecPerformanceAcceleration = value;
  }
  public resetIpsecPerformanceAcceleration() {
    this._ipsecPerformanceAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPerformanceAccelerationInput() {
    return this._ipsecPerformanceAcceleration;
  }

  // mcast_buffer_enhance - computed: false, optional: true, required: false
  private _mcastBufferEnhance?: boolean | cdktf.IResolvable; 
  public get mcastBufferEnhance() {
    return this.getBooleanAttribute('mcast_buffer_enhance');
  }
  public set mcastBufferEnhance(value: boolean | cdktf.IResolvable) {
    this._mcastBufferEnhance = value;
  }
  public resetMcastBufferEnhance() {
    this._mcastBufferEnhance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastBufferEnhanceInput() {
    return this._mcastBufferEnhance;
  }

  // pending_sess_queue_length - computed: false, optional: true, required: false
  private _pendingSessQueueLength?: string; 
  public get pendingSessQueueLength() {
    return this.getStringAttribute('pending_sess_queue_length');
  }
  public set pendingSessQueueLength(value: string) {
    this._pendingSessQueueLength = value;
  }
  public resetPendingSessQueueLength() {
    this._pendingSessQueueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingSessQueueLengthInput() {
    return this._pendingSessQueueLength;
  }

  // preserve_incoming_fragment_size - computed: false, optional: true, required: false
  private _preserveIncomingFragmentSize?: boolean | cdktf.IResolvable; 
  public get preserveIncomingFragmentSize() {
    return this.getBooleanAttribute('preserve_incoming_fragment_size');
  }
  public set preserveIncomingFragmentSize(value: boolean | cdktf.IResolvable) {
    this._preserveIncomingFragmentSize = value;
  }
  public resetPreserveIncomingFragmentSize() {
    this._preserveIncomingFragmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveIncomingFragmentSizeInput() {
    return this._preserveIncomingFragmentSize;
  }

  // route_change_timeout - computed: false, optional: true, required: false
  private _routeChangeTimeout?: number; 
  public get routeChangeTimeout() {
    return this.getNumberAttribute('route_change_timeout');
  }
  public set routeChangeTimeout(value: number) {
    this._routeChangeTimeout = value;
  }
  public resetRouteChangeTimeout() {
    this._routeChangeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeChangeTimeoutInput() {
    return this._routeChangeTimeout;
  }

  // syn_flood_protection_mode - computed: false, optional: true, required: false
  private _synFloodProtectionMode?: string; 
  public get synFloodProtectionMode() {
    return this.getStringAttribute('syn_flood_protection_mode');
  }
  public set synFloodProtectionMode(value: string) {
    this._synFloodProtectionMode = value;
  }
  public resetSynFloodProtectionMode() {
    this._synFloodProtectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synFloodProtectionModeInput() {
    return this._synFloodProtectionMode;
  }

  // sync_icmp_session - computed: false, optional: true, required: false
  private _syncIcmpSession?: boolean | cdktf.IResolvable; 
  public get syncIcmpSession() {
    return this.getBooleanAttribute('sync_icmp_session');
  }
  public set syncIcmpSession(value: boolean | cdktf.IResolvable) {
    this._syncIcmpSession = value;
  }
  public resetSyncIcmpSession() {
    this._syncIcmpSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIcmpSessionInput() {
    return this._syncIcmpSession;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new SecurityFlowAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: SecurityFlowAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // aging - computed: false, optional: true, required: false
  private _aging = new SecurityFlowAgingOutputReference(this, "aging");
  public get aging() {
    return this._aging;
  }
  public putAging(value: SecurityFlowAging) {
    this._aging.internalValue = value;
  }
  public resetAging() {
    this._aging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingInput() {
    return this._aging.internalValue;
  }

  // ethernet_switching - computed: false, optional: true, required: false
  private _ethernetSwitching = new SecurityFlowEthernetSwitchingOutputReference(this, "ethernet_switching");
  public get ethernetSwitching() {
    return this._ethernetSwitching;
  }
  public putEthernetSwitching(value: SecurityFlowEthernetSwitching) {
    this._ethernetSwitching.internalValue = value;
  }
  public resetEthernetSwitching() {
    this._ethernetSwitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSwitchingInput() {
    return this._ethernetSwitching.internalValue;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss = new SecurityFlowTcpMssOutputReference(this, "tcp_mss");
  public get tcpMss() {
    return this._tcpMss;
  }
  public putTcpMss(value: SecurityFlowTcpMss) {
    this._tcpMss.internalValue = value;
  }
  public resetTcpMss() {
    this._tcpMss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss.internalValue;
  }

  // tcp_session - computed: false, optional: true, required: false
  private _tcpSession = new SecurityFlowTcpSessionOutputReference(this, "tcp_session");
  public get tcpSession() {
    return this._tcpSession;
  }
  public putTcpSession(value: SecurityFlowTcpSession) {
    this._tcpSession.internalValue = value;
  }
  public resetTcpSession() {
    this._tcpSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionInput() {
    return this._tcpSession.internalValue;
  }
}
export interface SecurityForwardingOptions {
  /**
  * Forwarding mode for inet6 family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#inet6_mode Security#inet6_mode}
  */
  readonly inet6Mode?: string;
  /**
  * Forwarding mode packet-based for iso family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#iso_mode_packet_based Security#iso_mode_packet_based}
  */
  readonly isoModePacketBased?: boolean | cdktf.IResolvable;
  /**
  * Forwarding mode for mpls family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#mpls_mode Security#mpls_mode}
  */
  readonly mplsMode?: string;
}

export function securityForwardingOptionsToTerraform(struct?: SecurityForwardingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inet6_mode: cdktf.stringToTerraform(struct!.inet6Mode),
    iso_mode_packet_based: cdktf.booleanToTerraform(struct!.isoModePacketBased),
    mpls_mode: cdktf.stringToTerraform(struct!.mplsMode),
  }
}


export function securityForwardingOptionsToHclTerraform(struct?: SecurityForwardingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inet6_mode: {
      value: cdktf.stringToHclTerraform(struct!.inet6Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iso_mode_packet_based: {
      value: cdktf.booleanToHclTerraform(struct!.isoModePacketBased),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mpls_mode: {
      value: cdktf.stringToHclTerraform(struct!.mplsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityForwardingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityForwardingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inet6Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inet6Mode = this._inet6Mode;
    }
    if (this._isoModePacketBased !== undefined) {
      hasAnyValues = true;
      internalValueResult.isoModePacketBased = this._isoModePacketBased;
    }
    if (this._mplsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mplsMode = this._mplsMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityForwardingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inet6Mode = undefined;
      this._isoModePacketBased = undefined;
      this._mplsMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inet6Mode = value.inet6Mode;
      this._isoModePacketBased = value.isoModePacketBased;
      this._mplsMode = value.mplsMode;
    }
  }

  // inet6_mode - computed: false, optional: true, required: false
  private _inet6Mode?: string; 
  public get inet6Mode() {
    return this.getStringAttribute('inet6_mode');
  }
  public set inet6Mode(value: string) {
    this._inet6Mode = value;
  }
  public resetInet6Mode() {
    this._inet6Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inet6ModeInput() {
    return this._inet6Mode;
  }

  // iso_mode_packet_based - computed: false, optional: true, required: false
  private _isoModePacketBased?: boolean | cdktf.IResolvable; 
  public get isoModePacketBased() {
    return this.getBooleanAttribute('iso_mode_packet_based');
  }
  public set isoModePacketBased(value: boolean | cdktf.IResolvable) {
    this._isoModePacketBased = value;
  }
  public resetIsoModePacketBased() {
    this._isoModePacketBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoModePacketBasedInput() {
    return this._isoModePacketBased;
  }

  // mpls_mode - computed: false, optional: true, required: false
  private _mplsMode?: string; 
  public get mplsMode() {
    return this.getStringAttribute('mpls_mode');
  }
  public set mplsMode(value: string) {
    this._mplsMode = value;
  }
  public resetMplsMode() {
    this._mplsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsModeInput() {
    return this._mplsMode;
  }
}
export interface SecurityForwardingProcess {
  /**
  * Enable enhanced application services mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#enhanced_services_mode Security#enhanced_services_mode}
  */
  readonly enhancedServicesMode?: boolean | cdktf.IResolvable;
}

export function securityForwardingProcessToTerraform(struct?: SecurityForwardingProcess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_services_mode: cdktf.booleanToTerraform(struct!.enhancedServicesMode),
  }
}


export function securityForwardingProcessToHclTerraform(struct?: SecurityForwardingProcess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_services_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedServicesMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityForwardingProcessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityForwardingProcess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedServicesMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedServicesMode = this._enhancedServicesMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityForwardingProcess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enhancedServicesMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enhancedServicesMode = value.enhancedServicesMode;
    }
  }

  // enhanced_services_mode - computed: false, optional: true, required: false
  private _enhancedServicesMode?: boolean | cdktf.IResolvable; 
  public get enhancedServicesMode() {
    return this.getBooleanAttribute('enhanced_services_mode');
  }
  public set enhancedServicesMode(value: boolean | cdktf.IResolvable) {
    this._enhancedServicesMode = value;
  }
  public resetEnhancedServicesMode() {
    this._enhancedServicesMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedServicesModeInput() {
    return this._enhancedServicesMode;
  }
}
export interface SecurityIdpSecurityPackage {
  /**
  * Enable scheduled download and update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#automatic_enable Security#automatic_enable}
  */
  readonly automaticEnable?: boolean | cdktf.IResolvable;
  /**
  * Automatic interval (1..336 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#automatic_interval Security#automatic_interval}
  */
  readonly automaticInterval?: number;
  /**
  * Automatic start time (YYYY-MM-DD.HH:MM:SS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#automatic_start_time Security#automatic_start_time}
  */
  readonly automaticStartTime?: string;
  /**
  * Skip version check when attack database gets installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#install_ignore_version_check Security#install_ignore_version_check}
  */
  readonly installIgnoreVersionCheck?: boolean | cdktf.IResolvable;
  /**
  * Proxy profile of security package download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#proxy_profile Security#proxy_profile}
  */
  readonly proxyProfile?: string;
  /**
  * Routing instance for security-package download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#routing_instance Security#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source address to be used for sending download request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#source_address Security#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * URL of Security package download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#url Security#url}
  */
  readonly url?: string;
}

export function securityIdpSecurityPackageToTerraform(struct?: SecurityIdpSecurityPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_enable: cdktf.booleanToTerraform(struct!.automaticEnable),
    automatic_interval: cdktf.numberToTerraform(struct!.automaticInterval),
    automatic_start_time: cdktf.stringToTerraform(struct!.automaticStartTime),
    install_ignore_version_check: cdktf.booleanToTerraform(struct!.installIgnoreVersionCheck),
    proxy_profile: cdktf.stringToTerraform(struct!.proxyProfile),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function securityIdpSecurityPackageToHclTerraform(struct?: SecurityIdpSecurityPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_enable: {
      value: cdktf.booleanToHclTerraform(struct!.automaticEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_interval: {
      value: cdktf.numberToHclTerraform(struct!.automaticInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    automatic_start_time: {
      value: cdktf.stringToHclTerraform(struct!.automaticStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_ignore_version_check: {
      value: cdktf.booleanToHclTerraform(struct!.installIgnoreVersionCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_profile: {
      value: cdktf.stringToHclTerraform(struct!.proxyProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
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

export class SecurityIdpSecurityPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpSecurityPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticEnable = this._automaticEnable;
    }
    if (this._automaticInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticInterval = this._automaticInterval;
    }
    if (this._automaticStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticStartTime = this._automaticStartTime;
    }
    if (this._installIgnoreVersionCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.installIgnoreVersionCheck = this._installIgnoreVersionCheck;
    }
    if (this._proxyProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProfile = this._proxyProfile;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpSecurityPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticEnable = undefined;
      this._automaticInterval = undefined;
      this._automaticStartTime = undefined;
      this._installIgnoreVersionCheck = undefined;
      this._proxyProfile = undefined;
      this._routingInstance = undefined;
      this._sourceAddress = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticEnable = value.automaticEnable;
      this._automaticInterval = value.automaticInterval;
      this._automaticStartTime = value.automaticStartTime;
      this._installIgnoreVersionCheck = value.installIgnoreVersionCheck;
      this._proxyProfile = value.proxyProfile;
      this._routingInstance = value.routingInstance;
      this._sourceAddress = value.sourceAddress;
      this._url = value.url;
    }
  }

  // automatic_enable - computed: false, optional: true, required: false
  private _automaticEnable?: boolean | cdktf.IResolvable; 
  public get automaticEnable() {
    return this.getBooleanAttribute('automatic_enable');
  }
  public set automaticEnable(value: boolean | cdktf.IResolvable) {
    this._automaticEnable = value;
  }
  public resetAutomaticEnable() {
    this._automaticEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticEnableInput() {
    return this._automaticEnable;
  }

  // automatic_interval - computed: false, optional: true, required: false
  private _automaticInterval?: number; 
  public get automaticInterval() {
    return this.getNumberAttribute('automatic_interval');
  }
  public set automaticInterval(value: number) {
    this._automaticInterval = value;
  }
  public resetAutomaticInterval() {
    this._automaticInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticIntervalInput() {
    return this._automaticInterval;
  }

  // automatic_start_time - computed: false, optional: true, required: false
  private _automaticStartTime?: string; 
  public get automaticStartTime() {
    return this.getStringAttribute('automatic_start_time');
  }
  public set automaticStartTime(value: string) {
    this._automaticStartTime = value;
  }
  public resetAutomaticStartTime() {
    this._automaticStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticStartTimeInput() {
    return this._automaticStartTime;
  }

  // install_ignore_version_check - computed: false, optional: true, required: false
  private _installIgnoreVersionCheck?: boolean | cdktf.IResolvable; 
  public get installIgnoreVersionCheck() {
    return this.getBooleanAttribute('install_ignore_version_check');
  }
  public set installIgnoreVersionCheck(value: boolean | cdktf.IResolvable) {
    this._installIgnoreVersionCheck = value;
  }
  public resetInstallIgnoreVersionCheck() {
    this._installIgnoreVersionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installIgnoreVersionCheckInput() {
    return this._installIgnoreVersionCheck;
  }

  // proxy_profile - computed: false, optional: true, required: false
  private _proxyProfile?: string; 
  public get proxyProfile() {
    return this.getStringAttribute('proxy_profile');
  }
  public set proxyProfile(value: string) {
    this._proxyProfile = value;
  }
  public resetProxyProfile() {
    this._proxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProfileInput() {
    return this._proxyProfile;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SecurityIdpSensorConfigurationLogSuppression {
  /**
  * Disable log suppression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#disable Security#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Include destination address while performing a log suppression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#include_destination_address Security#include_destination_address}
  */
  readonly includeDestinationAddress?: boolean | cdktf.IResolvable;
  /**
  * Maximum logs can be operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#max_logs_operate Security#max_logs_operate}
  */
  readonly maxLogsOperate?: number;
  /**
  * Time after suppressed logs will be reported (1..60).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#max_time_report Security#max_time_report}
  */
  readonly maxTimeReport?: number;
  /**
  * Don't include destination address while performing a log suppression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#no_include_destination_address Security#no_include_destination_address}
  */
  readonly noIncludeDestinationAddress?: boolean | cdktf.IResolvable;
  /**
  * Suppression start log (1..128).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#start_log Security#start_log}
  */
  readonly startLog?: number;
}

export function securityIdpSensorConfigurationLogSuppressionToTerraform(struct?: SecurityIdpSensorConfigurationLogSuppression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    include_destination_address: cdktf.booleanToTerraform(struct!.includeDestinationAddress),
    max_logs_operate: cdktf.numberToTerraform(struct!.maxLogsOperate),
    max_time_report: cdktf.numberToTerraform(struct!.maxTimeReport),
    no_include_destination_address: cdktf.booleanToTerraform(struct!.noIncludeDestinationAddress),
    start_log: cdktf.numberToTerraform(struct!.startLog),
  }
}


export function securityIdpSensorConfigurationLogSuppressionToHclTerraform(struct?: SecurityIdpSensorConfigurationLogSuppression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_destination_address: {
      value: cdktf.booleanToHclTerraform(struct!.includeDestinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_logs_operate: {
      value: cdktf.numberToHclTerraform(struct!.maxLogsOperate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_time_report: {
      value: cdktf.numberToHclTerraform(struct!.maxTimeReport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_include_destination_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIncludeDestinationAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_log: {
      value: cdktf.numberToHclTerraform(struct!.startLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpSensorConfigurationLogSuppressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpSensorConfigurationLogSuppression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._includeDestinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDestinationAddress = this._includeDestinationAddress;
    }
    if (this._maxLogsOperate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLogsOperate = this._maxLogsOperate;
    }
    if (this._maxTimeReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeReport = this._maxTimeReport;
    }
    if (this._noIncludeDestinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIncludeDestinationAddress = this._noIncludeDestinationAddress;
    }
    if (this._startLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.startLog = this._startLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpSensorConfigurationLogSuppression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._includeDestinationAddress = undefined;
      this._maxLogsOperate = undefined;
      this._maxTimeReport = undefined;
      this._noIncludeDestinationAddress = undefined;
      this._startLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._includeDestinationAddress = value.includeDestinationAddress;
      this._maxLogsOperate = value.maxLogsOperate;
      this._maxTimeReport = value.maxTimeReport;
      this._noIncludeDestinationAddress = value.noIncludeDestinationAddress;
      this._startLog = value.startLog;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // include_destination_address - computed: false, optional: true, required: false
  private _includeDestinationAddress?: boolean | cdktf.IResolvable; 
  public get includeDestinationAddress() {
    return this.getBooleanAttribute('include_destination_address');
  }
  public set includeDestinationAddress(value: boolean | cdktf.IResolvable) {
    this._includeDestinationAddress = value;
  }
  public resetIncludeDestinationAddress() {
    this._includeDestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDestinationAddressInput() {
    return this._includeDestinationAddress;
  }

  // max_logs_operate - computed: false, optional: true, required: false
  private _maxLogsOperate?: number; 
  public get maxLogsOperate() {
    return this.getNumberAttribute('max_logs_operate');
  }
  public set maxLogsOperate(value: number) {
    this._maxLogsOperate = value;
  }
  public resetMaxLogsOperate() {
    this._maxLogsOperate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogsOperateInput() {
    return this._maxLogsOperate;
  }

  // max_time_report - computed: false, optional: true, required: false
  private _maxTimeReport?: number; 
  public get maxTimeReport() {
    return this.getNumberAttribute('max_time_report');
  }
  public set maxTimeReport(value: number) {
    this._maxTimeReport = value;
  }
  public resetMaxTimeReport() {
    this._maxTimeReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeReportInput() {
    return this._maxTimeReport;
  }

  // no_include_destination_address - computed: false, optional: true, required: false
  private _noIncludeDestinationAddress?: boolean | cdktf.IResolvable; 
  public get noIncludeDestinationAddress() {
    return this.getBooleanAttribute('no_include_destination_address');
  }
  public set noIncludeDestinationAddress(value: boolean | cdktf.IResolvable) {
    this._noIncludeDestinationAddress = value;
  }
  public resetNoIncludeDestinationAddress() {
    this._noIncludeDestinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIncludeDestinationAddressInput() {
    return this._noIncludeDestinationAddress;
  }

  // start_log - computed: false, optional: true, required: false
  private _startLog?: number; 
  public get startLog() {
    return this.getNumberAttribute('start_log');
  }
  public set startLog(value: number) {
    this._startLog = value;
  }
  public resetStartLog() {
    this._startLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startLogInput() {
    return this._startLog;
  }
}
export interface SecurityIdpSensorConfigurationPacketLog {
  /**
  * Destination host to send packetlog to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#host_address Security#host_address}
  */
  readonly hostAddress?: string;
  /**
  * Destination UDP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#host_port Security#host_port}
  */
  readonly hostPort?: number;
  /**
  * Max num of sessions in unit(%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#max_sessions Security#max_sessions}
  */
  readonly maxSessions?: number;
  /**
  * Source IP address used to transport packetlog to a host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#source_address Security#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Interval of logs for max limit session/memory reached in minutes (1..60).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#threshold_logging_interval Security#threshold_logging_interval}
  */
  readonly thresholdLoggingInterval?: number;
  /**
  * Total memory unit(%).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#total_memory Security#total_memory}
  */
  readonly totalMemory?: number;
}

export function securityIdpSensorConfigurationPacketLogToTerraform(struct?: SecurityIdpSensorConfigurationPacketLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_address: cdktf.stringToTerraform(struct!.hostAddress),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    max_sessions: cdktf.numberToTerraform(struct!.maxSessions),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    threshold_logging_interval: cdktf.numberToTerraform(struct!.thresholdLoggingInterval),
    total_memory: cdktf.numberToTerraform(struct!.totalMemory),
  }
}


export function securityIdpSensorConfigurationPacketLogToHclTerraform(struct?: SecurityIdpSensorConfigurationPacketLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_address: {
      value: cdktf.stringToHclTerraform(struct!.hostAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_sessions: {
      value: cdktf.numberToHclTerraform(struct!.maxSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_logging_interval: {
      value: cdktf.numberToHclTerraform(struct!.thresholdLoggingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_memory: {
      value: cdktf.numberToHclTerraform(struct!.totalMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpSensorConfigurationPacketLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpSensorConfigurationPacketLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAddress = this._hostAddress;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._maxSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessions = this._maxSessions;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._thresholdLoggingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdLoggingInterval = this._thresholdLoggingInterval;
    }
    if (this._totalMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemory = this._totalMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpSensorConfigurationPacketLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostAddress = undefined;
      this._hostPort = undefined;
      this._maxSessions = undefined;
      this._sourceAddress = undefined;
      this._thresholdLoggingInterval = undefined;
      this._totalMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostAddress = value.hostAddress;
      this._hostPort = value.hostPort;
      this._maxSessions = value.maxSessions;
      this._sourceAddress = value.sourceAddress;
      this._thresholdLoggingInterval = value.thresholdLoggingInterval;
      this._totalMemory = value.totalMemory;
    }
  }

  // host_address - computed: false, optional: true, required: false
  private _hostAddress?: string; 
  public get hostAddress() {
    return this.getStringAttribute('host_address');
  }
  public set hostAddress(value: string) {
    this._hostAddress = value;
  }
  public resetHostAddress() {
    this._hostAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAddressInput() {
    return this._hostAddress;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // max_sessions - computed: false, optional: true, required: false
  private _maxSessions?: number; 
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }
  public set maxSessions(value: number) {
    this._maxSessions = value;
  }
  public resetMaxSessions() {
    this._maxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsInput() {
    return this._maxSessions;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // threshold_logging_interval - computed: false, optional: true, required: false
  private _thresholdLoggingInterval?: number; 
  public get thresholdLoggingInterval() {
    return this.getNumberAttribute('threshold_logging_interval');
  }
  public set thresholdLoggingInterval(value: number) {
    this._thresholdLoggingInterval = value;
  }
  public resetThresholdLoggingInterval() {
    this._thresholdLoggingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdLoggingIntervalInput() {
    return this._thresholdLoggingInterval;
  }

  // total_memory - computed: false, optional: true, required: false
  private _totalMemory?: number; 
  public get totalMemory() {
    return this.getNumberAttribute('total_memory');
  }
  public set totalMemory(value: number) {
    this._totalMemory = value;
  }
  public resetTotalMemory() {
    this._totalMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryInput() {
    return this._totalMemory;
  }
}
export interface SecurityIdpSensorConfiguration {
  /**
  * Log cache size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#log_cache_size Security#log_cache_size}
  */
  readonly logCacheSize?: number;
  /**
  * Enable security protection mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#security_configuration_protection_mode Security#security_configuration_protection_mode}
  */
  readonly securityConfigurationProtectionMode?: string;
  /**
  * log_suppression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#log_suppression Security#log_suppression}
  */
  readonly logSuppression?: SecurityIdpSensorConfigurationLogSuppression;
  /**
  * packet_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#packet_log Security#packet_log}
  */
  readonly packetLog?: SecurityIdpSensorConfigurationPacketLog;
}

export function securityIdpSensorConfigurationToTerraform(struct?: SecurityIdpSensorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_cache_size: cdktf.numberToTerraform(struct!.logCacheSize),
    security_configuration_protection_mode: cdktf.stringToTerraform(struct!.securityConfigurationProtectionMode),
    log_suppression: securityIdpSensorConfigurationLogSuppressionToTerraform(struct!.logSuppression),
    packet_log: securityIdpSensorConfigurationPacketLogToTerraform(struct!.packetLog),
  }
}


export function securityIdpSensorConfigurationToHclTerraform(struct?: SecurityIdpSensorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.logCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_configuration_protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityConfigurationProtectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_suppression: {
      value: securityIdpSensorConfigurationLogSuppressionToHclTerraform(struct!.logSuppression),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpSensorConfigurationLogSuppression",
    },
    packet_log: {
      value: securityIdpSensorConfigurationPacketLogToHclTerraform(struct!.packetLog),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIdpSensorConfigurationPacketLog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIdpSensorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIdpSensorConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCacheSize = this._logCacheSize;
    }
    if (this._securityConfigurationProtectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityConfigurationProtectionMode = this._securityConfigurationProtectionMode;
    }
    if (this._logSuppression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSuppression = this._logSuppression?.internalValue;
    }
    if (this._packetLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLog = this._packetLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIdpSensorConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logCacheSize = undefined;
      this._securityConfigurationProtectionMode = undefined;
      this._logSuppression.internalValue = undefined;
      this._packetLog.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logCacheSize = value.logCacheSize;
      this._securityConfigurationProtectionMode = value.securityConfigurationProtectionMode;
      this._logSuppression.internalValue = value.logSuppression;
      this._packetLog.internalValue = value.packetLog;
    }
  }

  // log_cache_size - computed: false, optional: true, required: false
  private _logCacheSize?: number; 
  public get logCacheSize() {
    return this.getNumberAttribute('log_cache_size');
  }
  public set logCacheSize(value: number) {
    this._logCacheSize = value;
  }
  public resetLogCacheSize() {
    this._logCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCacheSizeInput() {
    return this._logCacheSize;
  }

  // security_configuration_protection_mode - computed: false, optional: true, required: false
  private _securityConfigurationProtectionMode?: string; 
  public get securityConfigurationProtectionMode() {
    return this.getStringAttribute('security_configuration_protection_mode');
  }
  public set securityConfigurationProtectionMode(value: string) {
    this._securityConfigurationProtectionMode = value;
  }
  public resetSecurityConfigurationProtectionMode() {
    this._securityConfigurationProtectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigurationProtectionModeInput() {
    return this._securityConfigurationProtectionMode;
  }

  // log_suppression - computed: false, optional: true, required: false
  private _logSuppression = new SecurityIdpSensorConfigurationLogSuppressionOutputReference(this, "log_suppression");
  public get logSuppression() {
    return this._logSuppression;
  }
  public putLogSuppression(value: SecurityIdpSensorConfigurationLogSuppression) {
    this._logSuppression.internalValue = value;
  }
  public resetLogSuppression() {
    this._logSuppression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSuppressionInput() {
    return this._logSuppression.internalValue;
  }

  // packet_log - computed: false, optional: true, required: false
  private _packetLog = new SecurityIdpSensorConfigurationPacketLogOutputReference(this, "packet_log");
  public get packetLog() {
    return this._packetLog;
  }
  public putPacketLog(value: SecurityIdpSensorConfigurationPacketLog) {
    this._packetLog.internalValue = value;
  }
  public resetPacketLog() {
    this._packetLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLogInput() {
    return this._packetLog.internalValue;
  }
}
export interface SecurityIkeTraceoptionsFile {
  /**
  * Maximum number of trace files (2..1000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#files Security#files}
  */
  readonly files?: number;
  /**
  * Regular expression for lines to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#match Security#match}
  */
  readonly match?: string;
  /**
  * Name of file in which to write trace information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#name Security#name}
  */
  readonly name?: string;
  /**
  * Don't allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#no_world_readable Security#no_world_readable}
  */
  readonly noWorldReadable?: boolean | cdktf.IResolvable;
  /**
  * Maximum trace file size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#size Security#size}
  */
  readonly size?: number;
  /**
  * Allow any user to read the log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#world_readable Security#world_readable}
  */
  readonly worldReadable?: boolean | cdktf.IResolvable;
}

export function securityIkeTraceoptionsFileToTerraform(struct?: SecurityIkeTraceoptionsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.numberToTerraform(struct!.files),
    match: cdktf.stringToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    no_world_readable: cdktf.booleanToTerraform(struct!.noWorldReadable),
    size: cdktf.numberToTerraform(struct!.size),
    world_readable: cdktf.booleanToTerraform(struct!.worldReadable),
  }
}


export function securityIkeTraceoptionsFileToHclTerraform(struct?: SecurityIkeTraceoptionsFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.numberToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.noWorldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    world_readable: {
      value: cdktf.booleanToHclTerraform(struct!.worldReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIkeTraceoptionsFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIkeTraceoptionsFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noWorldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWorldReadable = this._noWorldReadable;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._worldReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.worldReadable = this._worldReadable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIkeTraceoptionsFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
      this._match = undefined;
      this._name = undefined;
      this._noWorldReadable = undefined;
      this._size = undefined;
      this._worldReadable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
      this._match = value.match;
      this._name = value.name;
      this._noWorldReadable = value.noWorldReadable;
      this._size = value.size;
      this._worldReadable = value.worldReadable;
    }
  }

  // files - computed: false, optional: true, required: false
  private _files?: number; 
  public get files() {
    return this.getNumberAttribute('files');
  }
  public set files(value: number) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // no_world_readable - computed: false, optional: true, required: false
  private _noWorldReadable?: boolean | cdktf.IResolvable; 
  public get noWorldReadable() {
    return this.getBooleanAttribute('no_world_readable');
  }
  public set noWorldReadable(value: boolean | cdktf.IResolvable) {
    this._noWorldReadable = value;
  }
  public resetNoWorldReadable() {
    this._noWorldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWorldReadableInput() {
    return this._noWorldReadable;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // world_readable - computed: false, optional: true, required: false
  private _worldReadable?: boolean | cdktf.IResolvable; 
  public get worldReadable() {
    return this.getBooleanAttribute('world_readable');
  }
  public set worldReadable(value: boolean | cdktf.IResolvable) {
    this._worldReadable = value;
  }
  public resetWorldReadable() {
    this._worldReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get worldReadableInput() {
    return this._worldReadable;
  }
}
export interface SecurityIkeTraceoptions {
  /**
  * Tracing parameters for IKE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#flag Security#flag}
  */
  readonly flag?: string[];
  /**
  * Disable remote tracing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#no_remote_trace Security#no_remote_trace}
  */
  readonly noRemoteTrace?: boolean | cdktf.IResolvable;
  /**
  * Limit the incoming rate of trace messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#rate_limit Security#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#file Security#file}
  */
  readonly file?: SecurityIkeTraceoptionsFile;
}

export function securityIkeTraceoptionsToTerraform(struct?: SecurityIkeTraceoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flag),
    no_remote_trace: cdktf.booleanToTerraform(struct!.noRemoteTrace),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    file: securityIkeTraceoptionsFileToTerraform(struct!.file),
  }
}


export function securityIkeTraceoptionsToHclTerraform(struct?: SecurityIkeTraceoptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flag),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    no_remote_trace: {
      value: cdktf.booleanToHclTerraform(struct!.noRemoteTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file: {
      value: securityIkeTraceoptionsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityIkeTraceoptionsFile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityIkeTraceoptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityIkeTraceoptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flag !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag;
    }
    if (this._noRemoteTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRemoteTrace = this._noRemoteTrace;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityIkeTraceoptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flag = undefined;
      this._noRemoteTrace = undefined;
      this._rateLimit = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flag = value.flag;
      this._noRemoteTrace = value.noRemoteTrace;
      this._rateLimit = value.rateLimit;
      this._file.internalValue = value.file;
    }
  }

  // flag - computed: false, optional: true, required: false
  private _flag?: string[]; 
  public get flag() {
    return cdktf.Fn.tolist(this.getListAttribute('flag'));
  }
  public set flag(value: string[]) {
    this._flag = value;
  }
  public resetFlag() {
    this._flag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }

  // no_remote_trace - computed: false, optional: true, required: false
  private _noRemoteTrace?: boolean | cdktf.IResolvable; 
  public get noRemoteTrace() {
    return this.getBooleanAttribute('no_remote_trace');
  }
  public set noRemoteTrace(value: boolean | cdktf.IResolvable) {
    this._noRemoteTrace = value;
  }
  public resetNoRemoteTrace() {
    this._noRemoteTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRemoteTraceInput() {
    return this._noRemoteTrace;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // file - computed: false, optional: true, required: false
  private _file = new SecurityIkeTraceoptionsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SecurityIkeTraceoptionsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface SecurityLogFile {
  /**
  * Maximum number of binary log files (2..10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#files Security#files}
  */
  readonly files?: number;
  /**
  * Name of binary log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#name Security#name}
  */
  readonly name?: string;
  /**
  * Path to binary log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#path Security#path}
  */
  readonly path?: string;
  /**
  * Maximum size of binary log file in megabytes (1..10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#size Security#size}
  */
  readonly size?: number;
}

export function securityLogFileToTerraform(struct?: SecurityLogFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.numberToTerraform(struct!.files),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function securityLogFileToHclTerraform(struct?: SecurityLogFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.numberToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityLogFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityLogFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityLogFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._files = undefined;
      this._name = undefined;
      this._path = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._files = value.files;
      this._name = value.name;
      this._path = value.path;
      this._size = value.size;
    }
  }

  // files - computed: false, optional: true, required: false
  private _files?: number; 
  public get files() {
    return this.getNumberAttribute('files');
  }
  public set files(value: number) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface SecurityLogTransport {
  /**
  * Set security log transport protocol for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#protocol Security#protocol}
  */
  readonly protocol?: string;
  /**
  * Set tcp connection number per-stream (1..5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#tcp_connections Security#tcp_connections}
  */
  readonly tcpConnections?: number;
  /**
  * TLS profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#tls_profile Security#tls_profile}
  */
  readonly tlsProfile?: string;
}

export function securityLogTransportToTerraform(struct?: SecurityLogTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    tcp_connections: cdktf.numberToTerraform(struct!.tcpConnections),
    tls_profile: cdktf.stringToTerraform(struct!.tlsProfile),
  }
}


export function securityLogTransportToHclTerraform(struct?: SecurityLogTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_connections: {
      value: cdktf.numberToHclTerraform(struct!.tcpConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_profile: {
      value: cdktf.stringToHclTerraform(struct!.tlsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityLogTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityLogTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._tcpConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnections = this._tcpConnections;
    }
    if (this._tlsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsProfile = this._tlsProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityLogTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._tcpConnections = undefined;
      this._tlsProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._tcpConnections = value.tcpConnections;
      this._tlsProfile = value.tlsProfile;
    }
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tcp_connections - computed: false, optional: true, required: false
  private _tcpConnections?: number; 
  public get tcpConnections() {
    return this.getNumberAttribute('tcp_connections');
  }
  public set tcpConnections(value: number) {
    this._tcpConnections = value;
  }
  public resetTcpConnections() {
    this._tcpConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionsInput() {
    return this._tcpConnections;
  }

  // tls_profile - computed: false, optional: true, required: false
  private _tlsProfile?: string; 
  public get tlsProfile() {
    return this.getStringAttribute('tls_profile');
  }
  public set tlsProfile(value: string) {
    this._tlsProfile = value;
  }
  public resetTlsProfile() {
    this._tlsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProfileInput() {
    return this._tlsProfile;
  }
}
export interface SecurityLog {
  /**
  * Disable security logging for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#disable Security#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Control plane event rate (0..1500 logs per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#event_rate Security#event_rate}
  */
  readonly eventRate?: number;
  /**
  * Alternate facility for logging to remote host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#facility_override Security#facility_override}
  */
  readonly facilityOverride?: string;
  /**
  * Set security log format for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#format Security#format}
  */
  readonly format?: string;
  /**
  * Maximum records in database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#max_database_record Security#max_database_record}
  */
  readonly maxDatabaseRecord?: number;
  /**
  * Controls how security logs are processed and exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#mode Security#mode}
  */
  readonly mode?: string;
  /**
  * Data plane event rate (0..5000 logs per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#rate_cap Security#rate_cap}
  */
  readonly rateCap?: number;
  /**
  * Set security log report settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#report Security#report}
  */
  readonly report?: boolean | cdktf.IResolvable;
  /**
  * Source ip address used when exporting security logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#source_address Security#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Source interface used when exporting security logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#source_interface Security#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Use UTC time for security log timestamps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#utc_timestamp Security#utc_timestamp}
  */
  readonly utcTimestamp?: boolean | cdktf.IResolvable;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#file Security#file}
  */
  readonly file?: SecurityLogFile;
  /**
  * transport block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#transport Security#transport}
  */
  readonly transport?: SecurityLogTransport;
}

export function securityLogToTerraform(struct?: SecurityLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    event_rate: cdktf.numberToTerraform(struct!.eventRate),
    facility_override: cdktf.stringToTerraform(struct!.facilityOverride),
    format: cdktf.stringToTerraform(struct!.format),
    max_database_record: cdktf.numberToTerraform(struct!.maxDatabaseRecord),
    mode: cdktf.stringToTerraform(struct!.mode),
    rate_cap: cdktf.numberToTerraform(struct!.rateCap),
    report: cdktf.booleanToTerraform(struct!.report),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    utc_timestamp: cdktf.booleanToTerraform(struct!.utcTimestamp),
    file: securityLogFileToTerraform(struct!.file),
    transport: securityLogTransportToTerraform(struct!.transport),
  }
}


export function securityLogToHclTerraform(struct?: SecurityLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_rate: {
      value: cdktf.numberToHclTerraform(struct!.eventRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    facility_override: {
      value: cdktf.stringToHclTerraform(struct!.facilityOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_database_record: {
      value: cdktf.numberToHclTerraform(struct!.maxDatabaseRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_cap: {
      value: cdktf.numberToHclTerraform(struct!.rateCap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    report: {
      value: cdktf.booleanToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utc_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.utcTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file: {
      value: securityLogFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityLogFile",
    },
    transport: {
      value: securityLogTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityLogTransport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._eventRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRate = this._eventRate;
    }
    if (this._facilityOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.facilityOverride = this._facilityOverride;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._maxDatabaseRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDatabaseRecord = this._maxDatabaseRecord;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._rateCap !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateCap = this._rateCap;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._utcTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.utcTimestamp = this._utcTimestamp;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._eventRate = undefined;
      this._facilityOverride = undefined;
      this._format = undefined;
      this._maxDatabaseRecord = undefined;
      this._mode = undefined;
      this._rateCap = undefined;
      this._report = undefined;
      this._sourceAddress = undefined;
      this._sourceInterface = undefined;
      this._utcTimestamp = undefined;
      this._file.internalValue = undefined;
      this._transport.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._eventRate = value.eventRate;
      this._facilityOverride = value.facilityOverride;
      this._format = value.format;
      this._maxDatabaseRecord = value.maxDatabaseRecord;
      this._mode = value.mode;
      this._rateCap = value.rateCap;
      this._report = value.report;
      this._sourceAddress = value.sourceAddress;
      this._sourceInterface = value.sourceInterface;
      this._utcTimestamp = value.utcTimestamp;
      this._file.internalValue = value.file;
      this._transport.internalValue = value.transport;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // event_rate - computed: false, optional: true, required: false
  private _eventRate?: number; 
  public get eventRate() {
    return this.getNumberAttribute('event_rate');
  }
  public set eventRate(value: number) {
    this._eventRate = value;
  }
  public resetEventRate() {
    this._eventRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRateInput() {
    return this._eventRate;
  }

  // facility_override - computed: false, optional: true, required: false
  private _facilityOverride?: string; 
  public get facilityOverride() {
    return this.getStringAttribute('facility_override');
  }
  public set facilityOverride(value: string) {
    this._facilityOverride = value;
  }
  public resetFacilityOverride() {
    this._facilityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityOverrideInput() {
    return this._facilityOverride;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // max_database_record - computed: false, optional: true, required: false
  private _maxDatabaseRecord?: number; 
  public get maxDatabaseRecord() {
    return this.getNumberAttribute('max_database_record');
  }
  public set maxDatabaseRecord(value: number) {
    this._maxDatabaseRecord = value;
  }
  public resetMaxDatabaseRecord() {
    this._maxDatabaseRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDatabaseRecordInput() {
    return this._maxDatabaseRecord;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // rate_cap - computed: false, optional: true, required: false
  private _rateCap?: number; 
  public get rateCap() {
    return this.getNumberAttribute('rate_cap');
  }
  public set rateCap(value: number) {
    this._rateCap = value;
  }
  public resetRateCap() {
    this._rateCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateCapInput() {
    return this._rateCap;
  }

  // report - computed: false, optional: true, required: false
  private _report?: boolean | cdktf.IResolvable; 
  public get report() {
    return this.getBooleanAttribute('report');
  }
  public set report(value: boolean | cdktf.IResolvable) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_interface - computed: false, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // utc_timestamp - computed: false, optional: true, required: false
  private _utcTimestamp?: boolean | cdktf.IResolvable; 
  public get utcTimestamp() {
    return this.getBooleanAttribute('utc_timestamp');
  }
  public set utcTimestamp(value: boolean | cdktf.IResolvable) {
    this._utcTimestamp = value;
  }
  public resetUtcTimestamp() {
    this._utcTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utcTimestampInput() {
    return this._utcTimestamp;
  }

  // file - computed: false, optional: true, required: false
  private _file = new SecurityLogFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: SecurityLogFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // transport - computed: false, optional: true, required: false
  private _transport = new SecurityLogTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: SecurityLogTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }
}
export interface SecurityNatSource {
  /**
  * Allow source address to maintain same translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#address_persistent Security#address_persistent}
  */
  readonly addressPersistent?: boolean | cdktf.IResolvable;
  /**
  * Port overloading factor for interface NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#interface_port_overloading_factor Security#interface_port_overloading_factor}
  */
  readonly interfacePortOverloadingFactor?: number;
  /**
  * Turn off interface port over-loading.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#interface_port_overloading_off Security#interface_port_overloading_off}
  */
  readonly interfacePortOverloadingOff?: boolean | cdktf.IResolvable;
  /**
  * Configure Source NAT default port range lower limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#pool_default_port_range Security#pool_default_port_range}
  */
  readonly poolDefaultPortRange?: number;
  /**
  * Configure Source NAT default port range upper limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#pool_default_port_range_to Security#pool_default_port_range_to}
  */
  readonly poolDefaultPortRangeTo?: number;
  /**
  * Configure Source NAT default twin port range lower limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#pool_default_twin_port_range Security#pool_default_twin_port_range}
  */
  readonly poolDefaultTwinPortRange?: number;
  /**
  * Configure Source NAT default twin port range upper limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#pool_default_twin_port_range_to Security#pool_default_twin_port_range_to}
  */
  readonly poolDefaultTwinPortRangeTo?: number;
  /**
  * Clear threshold for pool utilization alarm (40..100).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#pool_utilization_alarm_clear_threshold Security#pool_utilization_alarm_clear_threshold}
  */
  readonly poolUtilizationAlarmClearThreshold?: number;
  /**
  * Raise threshold for pool utilization alarm (50..100).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#pool_utilization_alarm_raise_threshold Security#pool_utilization_alarm_raise_threshold}
  */
  readonly poolUtilizationAlarmRaiseThreshold?: number;
  /**
  * Disable Source NAT port randomization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#port_randomization_disable Security#port_randomization_disable}
  */
  readonly portRandomizationDisable?: boolean | cdktf.IResolvable;
  /**
  * Session drop hold down time (30..28800).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#session_drop_hold_down Security#session_drop_hold_down}
  */
  readonly sessionDropHoldDown?: number;
  /**
  * Allow source to maintain session when session scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#session_persistence_scan Security#session_persistence_scan}
  */
  readonly sessionPersistenceScan?: boolean | cdktf.IResolvable;
}

export function securityNatSourceToTerraform(struct?: SecurityNatSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_persistent: cdktf.booleanToTerraform(struct!.addressPersistent),
    interface_port_overloading_factor: cdktf.numberToTerraform(struct!.interfacePortOverloadingFactor),
    interface_port_overloading_off: cdktf.booleanToTerraform(struct!.interfacePortOverloadingOff),
    pool_default_port_range: cdktf.numberToTerraform(struct!.poolDefaultPortRange),
    pool_default_port_range_to: cdktf.numberToTerraform(struct!.poolDefaultPortRangeTo),
    pool_default_twin_port_range: cdktf.numberToTerraform(struct!.poolDefaultTwinPortRange),
    pool_default_twin_port_range_to: cdktf.numberToTerraform(struct!.poolDefaultTwinPortRangeTo),
    pool_utilization_alarm_clear_threshold: cdktf.numberToTerraform(struct!.poolUtilizationAlarmClearThreshold),
    pool_utilization_alarm_raise_threshold: cdktf.numberToTerraform(struct!.poolUtilizationAlarmRaiseThreshold),
    port_randomization_disable: cdktf.booleanToTerraform(struct!.portRandomizationDisable),
    session_drop_hold_down: cdktf.numberToTerraform(struct!.sessionDropHoldDown),
    session_persistence_scan: cdktf.booleanToTerraform(struct!.sessionPersistenceScan),
  }
}


export function securityNatSourceToHclTerraform(struct?: SecurityNatSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_persistent: {
      value: cdktf.booleanToHclTerraform(struct!.addressPersistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_port_overloading_factor: {
      value: cdktf.numberToHclTerraform(struct!.interfacePortOverloadingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_port_overloading_off: {
      value: cdktf.booleanToHclTerraform(struct!.interfacePortOverloadingOff),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_default_port_range: {
      value: cdktf.numberToHclTerraform(struct!.poolDefaultPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_default_port_range_to: {
      value: cdktf.numberToHclTerraform(struct!.poolDefaultPortRangeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_default_twin_port_range: {
      value: cdktf.numberToHclTerraform(struct!.poolDefaultTwinPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_default_twin_port_range_to: {
      value: cdktf.numberToHclTerraform(struct!.poolDefaultTwinPortRangeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_utilization_alarm_clear_threshold: {
      value: cdktf.numberToHclTerraform(struct!.poolUtilizationAlarmClearThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_utilization_alarm_raise_threshold: {
      value: cdktf.numberToHclTerraform(struct!.poolUtilizationAlarmRaiseThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_randomization_disable: {
      value: cdktf.booleanToHclTerraform(struct!.portRandomizationDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_drop_hold_down: {
      value: cdktf.numberToHclTerraform(struct!.sessionDropHoldDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_persistence_scan: {
      value: cdktf.booleanToHclTerraform(struct!.sessionPersistenceScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityNatSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityNatSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPersistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPersistent = this._addressPersistent;
    }
    if (this._interfacePortOverloadingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacePortOverloadingFactor = this._interfacePortOverloadingFactor;
    }
    if (this._interfacePortOverloadingOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacePortOverloadingOff = this._interfacePortOverloadingOff;
    }
    if (this._poolDefaultPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolDefaultPortRange = this._poolDefaultPortRange;
    }
    if (this._poolDefaultPortRangeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolDefaultPortRangeTo = this._poolDefaultPortRangeTo;
    }
    if (this._poolDefaultTwinPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolDefaultTwinPortRange = this._poolDefaultTwinPortRange;
    }
    if (this._poolDefaultTwinPortRangeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolDefaultTwinPortRangeTo = this._poolDefaultTwinPortRangeTo;
    }
    if (this._poolUtilizationAlarmClearThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolUtilizationAlarmClearThreshold = this._poolUtilizationAlarmClearThreshold;
    }
    if (this._poolUtilizationAlarmRaiseThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolUtilizationAlarmRaiseThreshold = this._poolUtilizationAlarmRaiseThreshold;
    }
    if (this._portRandomizationDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRandomizationDisable = this._portRandomizationDisable;
    }
    if (this._sessionDropHoldDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDropHoldDown = this._sessionDropHoldDown;
    }
    if (this._sessionPersistenceScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPersistenceScan = this._sessionPersistenceScan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityNatSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressPersistent = undefined;
      this._interfacePortOverloadingFactor = undefined;
      this._interfacePortOverloadingOff = undefined;
      this._poolDefaultPortRange = undefined;
      this._poolDefaultPortRangeTo = undefined;
      this._poolDefaultTwinPortRange = undefined;
      this._poolDefaultTwinPortRangeTo = undefined;
      this._poolUtilizationAlarmClearThreshold = undefined;
      this._poolUtilizationAlarmRaiseThreshold = undefined;
      this._portRandomizationDisable = undefined;
      this._sessionDropHoldDown = undefined;
      this._sessionPersistenceScan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressPersistent = value.addressPersistent;
      this._interfacePortOverloadingFactor = value.interfacePortOverloadingFactor;
      this._interfacePortOverloadingOff = value.interfacePortOverloadingOff;
      this._poolDefaultPortRange = value.poolDefaultPortRange;
      this._poolDefaultPortRangeTo = value.poolDefaultPortRangeTo;
      this._poolDefaultTwinPortRange = value.poolDefaultTwinPortRange;
      this._poolDefaultTwinPortRangeTo = value.poolDefaultTwinPortRangeTo;
      this._poolUtilizationAlarmClearThreshold = value.poolUtilizationAlarmClearThreshold;
      this._poolUtilizationAlarmRaiseThreshold = value.poolUtilizationAlarmRaiseThreshold;
      this._portRandomizationDisable = value.portRandomizationDisable;
      this._sessionDropHoldDown = value.sessionDropHoldDown;
      this._sessionPersistenceScan = value.sessionPersistenceScan;
    }
  }

  // address_persistent - computed: false, optional: true, required: false
  private _addressPersistent?: boolean | cdktf.IResolvable; 
  public get addressPersistent() {
    return this.getBooleanAttribute('address_persistent');
  }
  public set addressPersistent(value: boolean | cdktf.IResolvable) {
    this._addressPersistent = value;
  }
  public resetAddressPersistent() {
    this._addressPersistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPersistentInput() {
    return this._addressPersistent;
  }

  // interface_port_overloading_factor - computed: false, optional: true, required: false
  private _interfacePortOverloadingFactor?: number; 
  public get interfacePortOverloadingFactor() {
    return this.getNumberAttribute('interface_port_overloading_factor');
  }
  public set interfacePortOverloadingFactor(value: number) {
    this._interfacePortOverloadingFactor = value;
  }
  public resetInterfacePortOverloadingFactor() {
    this._interfacePortOverloadingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacePortOverloadingFactorInput() {
    return this._interfacePortOverloadingFactor;
  }

  // interface_port_overloading_off - computed: false, optional: true, required: false
  private _interfacePortOverloadingOff?: boolean | cdktf.IResolvable; 
  public get interfacePortOverloadingOff() {
    return this.getBooleanAttribute('interface_port_overloading_off');
  }
  public set interfacePortOverloadingOff(value: boolean | cdktf.IResolvable) {
    this._interfacePortOverloadingOff = value;
  }
  public resetInterfacePortOverloadingOff() {
    this._interfacePortOverloadingOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacePortOverloadingOffInput() {
    return this._interfacePortOverloadingOff;
  }

  // pool_default_port_range - computed: false, optional: true, required: false
  private _poolDefaultPortRange?: number; 
  public get poolDefaultPortRange() {
    return this.getNumberAttribute('pool_default_port_range');
  }
  public set poolDefaultPortRange(value: number) {
    this._poolDefaultPortRange = value;
  }
  public resetPoolDefaultPortRange() {
    this._poolDefaultPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDefaultPortRangeInput() {
    return this._poolDefaultPortRange;
  }

  // pool_default_port_range_to - computed: false, optional: true, required: false
  private _poolDefaultPortRangeTo?: number; 
  public get poolDefaultPortRangeTo() {
    return this.getNumberAttribute('pool_default_port_range_to');
  }
  public set poolDefaultPortRangeTo(value: number) {
    this._poolDefaultPortRangeTo = value;
  }
  public resetPoolDefaultPortRangeTo() {
    this._poolDefaultPortRangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDefaultPortRangeToInput() {
    return this._poolDefaultPortRangeTo;
  }

  // pool_default_twin_port_range - computed: false, optional: true, required: false
  private _poolDefaultTwinPortRange?: number; 
  public get poolDefaultTwinPortRange() {
    return this.getNumberAttribute('pool_default_twin_port_range');
  }
  public set poolDefaultTwinPortRange(value: number) {
    this._poolDefaultTwinPortRange = value;
  }
  public resetPoolDefaultTwinPortRange() {
    this._poolDefaultTwinPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDefaultTwinPortRangeInput() {
    return this._poolDefaultTwinPortRange;
  }

  // pool_default_twin_port_range_to - computed: false, optional: true, required: false
  private _poolDefaultTwinPortRangeTo?: number; 
  public get poolDefaultTwinPortRangeTo() {
    return this.getNumberAttribute('pool_default_twin_port_range_to');
  }
  public set poolDefaultTwinPortRangeTo(value: number) {
    this._poolDefaultTwinPortRangeTo = value;
  }
  public resetPoolDefaultTwinPortRangeTo() {
    this._poolDefaultTwinPortRangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDefaultTwinPortRangeToInput() {
    return this._poolDefaultTwinPortRangeTo;
  }

  // pool_utilization_alarm_clear_threshold - computed: false, optional: true, required: false
  private _poolUtilizationAlarmClearThreshold?: number; 
  public get poolUtilizationAlarmClearThreshold() {
    return this.getNumberAttribute('pool_utilization_alarm_clear_threshold');
  }
  public set poolUtilizationAlarmClearThreshold(value: number) {
    this._poolUtilizationAlarmClearThreshold = value;
  }
  public resetPoolUtilizationAlarmClearThreshold() {
    this._poolUtilizationAlarmClearThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolUtilizationAlarmClearThresholdInput() {
    return this._poolUtilizationAlarmClearThreshold;
  }

  // pool_utilization_alarm_raise_threshold - computed: false, optional: true, required: false
  private _poolUtilizationAlarmRaiseThreshold?: number; 
  public get poolUtilizationAlarmRaiseThreshold() {
    return this.getNumberAttribute('pool_utilization_alarm_raise_threshold');
  }
  public set poolUtilizationAlarmRaiseThreshold(value: number) {
    this._poolUtilizationAlarmRaiseThreshold = value;
  }
  public resetPoolUtilizationAlarmRaiseThreshold() {
    this._poolUtilizationAlarmRaiseThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolUtilizationAlarmRaiseThresholdInput() {
    return this._poolUtilizationAlarmRaiseThreshold;
  }

  // port_randomization_disable - computed: false, optional: true, required: false
  private _portRandomizationDisable?: boolean | cdktf.IResolvable; 
  public get portRandomizationDisable() {
    return this.getBooleanAttribute('port_randomization_disable');
  }
  public set portRandomizationDisable(value: boolean | cdktf.IResolvable) {
    this._portRandomizationDisable = value;
  }
  public resetPortRandomizationDisable() {
    this._portRandomizationDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRandomizationDisableInput() {
    return this._portRandomizationDisable;
  }

  // session_drop_hold_down - computed: false, optional: true, required: false
  private _sessionDropHoldDown?: number; 
  public get sessionDropHoldDown() {
    return this.getNumberAttribute('session_drop_hold_down');
  }
  public set sessionDropHoldDown(value: number) {
    this._sessionDropHoldDown = value;
  }
  public resetSessionDropHoldDown() {
    this._sessionDropHoldDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDropHoldDownInput() {
    return this._sessionDropHoldDown;
  }

  // session_persistence_scan - computed: false, optional: true, required: false
  private _sessionPersistenceScan?: boolean | cdktf.IResolvable; 
  public get sessionPersistenceScan() {
    return this.getBooleanAttribute('session_persistence_scan');
  }
  public set sessionPersistenceScan(value: boolean | cdktf.IResolvable) {
    this._sessionPersistenceScan = value;
  }
  public resetSessionPersistenceScan() {
    this._sessionPersistenceScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceScanInput() {
    return this._sessionPersistenceScan;
  }
}
export interface SecurityPolicies {
  /**
  * Can be specified to allow session to remain open when an associated security policy is modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#policy_rematch Security#policy_rematch}
  */
  readonly policyRematch?: boolean | cdktf.IResolvable;
  /**
  * Can be specified to allow session to remain open when an associated security policy is modified, renamed, deactivated, or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#policy_rematch_extensive Security#policy_rematch_extensive}
  */
  readonly policyRematchExtensive?: boolean | cdktf.IResolvable;
}

export function securityPoliciesToTerraform(struct?: SecurityPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_rematch: cdktf.booleanToTerraform(struct!.policyRematch),
    policy_rematch_extensive: cdktf.booleanToTerraform(struct!.policyRematchExtensive),
  }
}


export function securityPoliciesToHclTerraform(struct?: SecurityPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_rematch: {
      value: cdktf.booleanToHclTerraform(struct!.policyRematch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_rematch_extensive: {
      value: cdktf.booleanToHclTerraform(struct!.policyRematchExtensive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyRematch !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRematch = this._policyRematch;
    }
    if (this._policyRematchExtensive !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRematchExtensive = this._policyRematchExtensive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyRematch = undefined;
      this._policyRematchExtensive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyRematch = value.policyRematch;
      this._policyRematchExtensive = value.policyRematchExtensive;
    }
  }

  // policy_rematch - computed: false, optional: true, required: false
  private _policyRematch?: boolean | cdktf.IResolvable; 
  public get policyRematch() {
    return this.getBooleanAttribute('policy_rematch');
  }
  public set policyRematch(value: boolean | cdktf.IResolvable) {
    this._policyRematch = value;
  }
  public resetPolicyRematch() {
    this._policyRematch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRematchInput() {
    return this._policyRematch;
  }

  // policy_rematch_extensive - computed: false, optional: true, required: false
  private _policyRematchExtensive?: boolean | cdktf.IResolvable; 
  public get policyRematchExtensive() {
    return this.getBooleanAttribute('policy_rematch_extensive');
  }
  public set policyRematchExtensive(value: boolean | cdktf.IResolvable) {
    this._policyRematchExtensive = value;
  }
  public resetPolicyRematchExtensive() {
    this._policyRematchExtensive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRematchExtensiveInput() {
    return this._policyRematchExtensive;
  }
}
export interface SecurityUserIdentificationAuthSource {
  /**
  * Active-directory-authentication-table priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#ad_auth_priority Security#ad_auth_priority}
  */
  readonly adAuthPriority?: number;
  /**
  * ClearPass-authentication-table priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#aruba_clearpass_priority Security#aruba_clearpass_priority}
  */
  readonly arubaClearpassPriority?: number;
  /**
  * Firewall-authentication priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#firewall_auth_priority Security#firewall_auth_priority}
  */
  readonly firewallAuthPriority?: number;
  /**
  * Local-authentication-table priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#local_auth_priority Security#local_auth_priority}
  */
  readonly localAuthPriority?: number;
  /**
  * Unified-access-control priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#unified_access_control_priority Security#unified_access_control_priority}
  */
  readonly unifiedAccessControlPriority?: number;
}

export function securityUserIdentificationAuthSourceToTerraform(struct?: SecurityUserIdentificationAuthSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_auth_priority: cdktf.numberToTerraform(struct!.adAuthPriority),
    aruba_clearpass_priority: cdktf.numberToTerraform(struct!.arubaClearpassPriority),
    firewall_auth_priority: cdktf.numberToTerraform(struct!.firewallAuthPriority),
    local_auth_priority: cdktf.numberToTerraform(struct!.localAuthPriority),
    unified_access_control_priority: cdktf.numberToTerraform(struct!.unifiedAccessControlPriority),
  }
}


export function securityUserIdentificationAuthSourceToHclTerraform(struct?: SecurityUserIdentificationAuthSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_auth_priority: {
      value: cdktf.numberToHclTerraform(struct!.adAuthPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aruba_clearpass_priority: {
      value: cdktf.numberToHclTerraform(struct!.arubaClearpassPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    firewall_auth_priority: {
      value: cdktf.numberToHclTerraform(struct!.firewallAuthPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_auth_priority: {
      value: cdktf.numberToHclTerraform(struct!.localAuthPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unified_access_control_priority: {
      value: cdktf.numberToHclTerraform(struct!.unifiedAccessControlPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUserIdentificationAuthSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUserIdentificationAuthSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adAuthPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.adAuthPriority = this._adAuthPriority;
    }
    if (this._arubaClearpassPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.arubaClearpassPriority = this._arubaClearpassPriority;
    }
    if (this._firewallAuthPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallAuthPriority = this._firewallAuthPriority;
    }
    if (this._localAuthPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAuthPriority = this._localAuthPriority;
    }
    if (this._unifiedAccessControlPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.unifiedAccessControlPriority = this._unifiedAccessControlPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUserIdentificationAuthSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adAuthPriority = undefined;
      this._arubaClearpassPriority = undefined;
      this._firewallAuthPriority = undefined;
      this._localAuthPriority = undefined;
      this._unifiedAccessControlPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adAuthPriority = value.adAuthPriority;
      this._arubaClearpassPriority = value.arubaClearpassPriority;
      this._firewallAuthPriority = value.firewallAuthPriority;
      this._localAuthPriority = value.localAuthPriority;
      this._unifiedAccessControlPriority = value.unifiedAccessControlPriority;
    }
  }

  // ad_auth_priority - computed: false, optional: true, required: false
  private _adAuthPriority?: number; 
  public get adAuthPriority() {
    return this.getNumberAttribute('ad_auth_priority');
  }
  public set adAuthPriority(value: number) {
    this._adAuthPriority = value;
  }
  public resetAdAuthPriority() {
    this._adAuthPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adAuthPriorityInput() {
    return this._adAuthPriority;
  }

  // aruba_clearpass_priority - computed: false, optional: true, required: false
  private _arubaClearpassPriority?: number; 
  public get arubaClearpassPriority() {
    return this.getNumberAttribute('aruba_clearpass_priority');
  }
  public set arubaClearpassPriority(value: number) {
    this._arubaClearpassPriority = value;
  }
  public resetArubaClearpassPriority() {
    this._arubaClearpassPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arubaClearpassPriorityInput() {
    return this._arubaClearpassPriority;
  }

  // firewall_auth_priority - computed: false, optional: true, required: false
  private _firewallAuthPriority?: number; 
  public get firewallAuthPriority() {
    return this.getNumberAttribute('firewall_auth_priority');
  }
  public set firewallAuthPriority(value: number) {
    this._firewallAuthPriority = value;
  }
  public resetFirewallAuthPriority() {
    this._firewallAuthPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAuthPriorityInput() {
    return this._firewallAuthPriority;
  }

  // local_auth_priority - computed: false, optional: true, required: false
  private _localAuthPriority?: number; 
  public get localAuthPriority() {
    return this.getNumberAttribute('local_auth_priority');
  }
  public set localAuthPriority(value: number) {
    this._localAuthPriority = value;
  }
  public resetLocalAuthPriority() {
    this._localAuthPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthPriorityInput() {
    return this._localAuthPriority;
  }

  // unified_access_control_priority - computed: false, optional: true, required: false
  private _unifiedAccessControlPriority?: number; 
  public get unifiedAccessControlPriority() {
    return this.getNumberAttribute('unified_access_control_priority');
  }
  public set unifiedAccessControlPriority(value: number) {
    this._unifiedAccessControlPriority = value;
  }
  public resetUnifiedAccessControlPriority() {
    this._unifiedAccessControlPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAccessControlPriorityInput() {
    return this._unifiedAccessControlPriority;
  }
}
export interface SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServer {
  /**
  * Server host IP address or string host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#host Security#host}
  */
  readonly host?: string;
  /**
  * Server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#port Security#port}
  */
  readonly port?: number;
  /**
  * Proxy profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#proxy_profile Security#proxy_profile}
  */
  readonly proxyProfile?: string;
  /**
  * Routing instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#routing_instance Security#routing_instance}
  */
  readonly routingInstance?: string;
}

export function securityUtmFeatureProfileWebFilteringJuniperEnhancedServerToTerraform(struct?: SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_profile: cdktf.stringToTerraform(struct!.proxyProfile),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
  }
}


export function securityUtmFeatureProfileWebFilteringJuniperEnhancedServerToHclTerraform(struct?: SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    proxy_profile: {
      value: cdktf.stringToHclTerraform(struct!.proxyProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProfile = this._proxyProfile;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._proxyProfile = undefined;
      this._routingInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._proxyProfile = value.proxyProfile;
      this._routingInstance = value.routingInstance;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // proxy_profile - computed: false, optional: true, required: false
  private _proxyProfile?: string; 
  public get proxyProfile() {
    return this.getStringAttribute('proxy_profile');
  }
  public set proxyProfile(value: string) {
    this._proxyProfile = value;
  }
  public resetProxyProfile() {
    this._proxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProfileInput() {
    return this._proxyProfile;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }
}
export interface SecurityUtm {
  /**
  * Configuring feature-profile web-filtering type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#feature_profile_web_filtering_type Security#feature_profile_web_filtering_type}
  */
  readonly featureProfileWebFilteringType?: string;
  /**
  * feature_profile_web_filtering_juniper_enhanced_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#feature_profile_web_filtering_juniper_enhanced_server Security#feature_profile_web_filtering_juniper_enhanced_server}
  */
  readonly featureProfileWebFilteringJuniperEnhancedServer?: SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServer;
}

export function securityUtmToTerraform(struct?: SecurityUtm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_profile_web_filtering_type: cdktf.stringToTerraform(struct!.featureProfileWebFilteringType),
    feature_profile_web_filtering_juniper_enhanced_server: securityUtmFeatureProfileWebFilteringJuniperEnhancedServerToTerraform(struct!.featureProfileWebFilteringJuniperEnhancedServer),
  }
}


export function securityUtmToHclTerraform(struct?: SecurityUtm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_profile_web_filtering_type: {
      value: cdktf.stringToHclTerraform(struct!.featureProfileWebFilteringType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_profile_web_filtering_juniper_enhanced_server: {
      value: securityUtmFeatureProfileWebFilteringJuniperEnhancedServerToHclTerraform(struct!.featureProfileWebFilteringJuniperEnhancedServer),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureProfileWebFilteringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureProfileWebFilteringType = this._featureProfileWebFilteringType;
    }
    if (this._featureProfileWebFilteringJuniperEnhancedServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureProfileWebFilteringJuniperEnhancedServer = this._featureProfileWebFilteringJuniperEnhancedServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureProfileWebFilteringType = undefined;
      this._featureProfileWebFilteringJuniperEnhancedServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureProfileWebFilteringType = value.featureProfileWebFilteringType;
      this._featureProfileWebFilteringJuniperEnhancedServer.internalValue = value.featureProfileWebFilteringJuniperEnhancedServer;
    }
  }

  // feature_profile_web_filtering_type - computed: false, optional: true, required: false
  private _featureProfileWebFilteringType?: string; 
  public get featureProfileWebFilteringType() {
    return this.getStringAttribute('feature_profile_web_filtering_type');
  }
  public set featureProfileWebFilteringType(value: string) {
    this._featureProfileWebFilteringType = value;
  }
  public resetFeatureProfileWebFilteringType() {
    this._featureProfileWebFilteringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileWebFilteringTypeInput() {
    return this._featureProfileWebFilteringType;
  }

  // feature_profile_web_filtering_juniper_enhanced_server - computed: false, optional: true, required: false
  private _featureProfileWebFilteringJuniperEnhancedServer = new SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServerOutputReference(this, "feature_profile_web_filtering_juniper_enhanced_server");
  public get featureProfileWebFilteringJuniperEnhancedServer() {
    return this._featureProfileWebFilteringJuniperEnhancedServer;
  }
  public putFeatureProfileWebFilteringJuniperEnhancedServer(value: SecurityUtmFeatureProfileWebFilteringJuniperEnhancedServer) {
    this._featureProfileWebFilteringJuniperEnhancedServer.internalValue = value;
  }
  public resetFeatureProfileWebFilteringJuniperEnhancedServer() {
    this._featureProfileWebFilteringJuniperEnhancedServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileWebFilteringJuniperEnhancedServerInput() {
    return this._featureProfileWebFilteringJuniperEnhancedServer.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security junos_security}
*/
export class Security extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Security resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Security to import
  * @param importFromId The id of the existing Security that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Security to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security junos_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_security',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cleanOnDestroy = config.cleanOnDestroy;
    this._alg.internalValue = config.alg;
    this._flow.internalValue = config.flow;
    this._forwardingOptions.internalValue = config.forwardingOptions;
    this._forwardingProcess.internalValue = config.forwardingProcess;
    this._idpSecurityPackage.internalValue = config.idpSecurityPackage;
    this._idpSensorConfiguration.internalValue = config.idpSensorConfiguration;
    this._ikeTraceoptions.internalValue = config.ikeTraceoptions;
    this._log.internalValue = config.log;
    this._natSource.internalValue = config.natSource;
    this._policies.internalValue = config.policies;
    this._userIdentificationAuthSource.internalValue = config.userIdentificationAuthSource;
    this._utm.internalValue = config.utm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clean_on_destroy - computed: false, optional: true, required: false
  private _cleanOnDestroy?: boolean | cdktf.IResolvable; 
  public get cleanOnDestroy() {
    return this.getBooleanAttribute('clean_on_destroy');
  }
  public set cleanOnDestroy(value: boolean | cdktf.IResolvable) {
    this._cleanOnDestroy = value;
  }
  public resetCleanOnDestroy() {
    this._cleanOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanOnDestroyInput() {
    return this._cleanOnDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // alg - computed: false, optional: true, required: false
  private _alg = new SecurityAlgOutputReference(this, "alg");
  public get alg() {
    return this._alg;
  }
  public putAlg(value: SecurityAlg) {
    this._alg.internalValue = value;
  }
  public resetAlg() {
    this._alg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg.internalValue;
  }

  // flow - computed: false, optional: true, required: false
  private _flow = new SecurityFlowOutputReference(this, "flow");
  public get flow() {
    return this._flow;
  }
  public putFlow(value: SecurityFlow) {
    this._flow.internalValue = value;
  }
  public resetFlow() {
    this._flow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow.internalValue;
  }

  // forwarding_options - computed: false, optional: true, required: false
  private _forwardingOptions = new SecurityForwardingOptionsOutputReference(this, "forwarding_options");
  public get forwardingOptions() {
    return this._forwardingOptions;
  }
  public putForwardingOptions(value: SecurityForwardingOptions) {
    this._forwardingOptions.internalValue = value;
  }
  public resetForwardingOptions() {
    this._forwardingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingOptionsInput() {
    return this._forwardingOptions.internalValue;
  }

  // forwarding_process - computed: false, optional: true, required: false
  private _forwardingProcess = new SecurityForwardingProcessOutputReference(this, "forwarding_process");
  public get forwardingProcess() {
    return this._forwardingProcess;
  }
  public putForwardingProcess(value: SecurityForwardingProcess) {
    this._forwardingProcess.internalValue = value;
  }
  public resetForwardingProcess() {
    this._forwardingProcess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingProcessInput() {
    return this._forwardingProcess.internalValue;
  }

  // idp_security_package - computed: false, optional: true, required: false
  private _idpSecurityPackage = new SecurityIdpSecurityPackageOutputReference(this, "idp_security_package");
  public get idpSecurityPackage() {
    return this._idpSecurityPackage;
  }
  public putIdpSecurityPackage(value: SecurityIdpSecurityPackage) {
    this._idpSecurityPackage.internalValue = value;
  }
  public resetIdpSecurityPackage() {
    this._idpSecurityPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSecurityPackageInput() {
    return this._idpSecurityPackage.internalValue;
  }

  // idp_sensor_configuration - computed: false, optional: true, required: false
  private _idpSensorConfiguration = new SecurityIdpSensorConfigurationOutputReference(this, "idp_sensor_configuration");
  public get idpSensorConfiguration() {
    return this._idpSensorConfiguration;
  }
  public putIdpSensorConfiguration(value: SecurityIdpSensorConfiguration) {
    this._idpSensorConfiguration.internalValue = value;
  }
  public resetIdpSensorConfiguration() {
    this._idpSensorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSensorConfigurationInput() {
    return this._idpSensorConfiguration.internalValue;
  }

  // ike_traceoptions - computed: false, optional: true, required: false
  private _ikeTraceoptions = new SecurityIkeTraceoptionsOutputReference(this, "ike_traceoptions");
  public get ikeTraceoptions() {
    return this._ikeTraceoptions;
  }
  public putIkeTraceoptions(value: SecurityIkeTraceoptions) {
    this._ikeTraceoptions.internalValue = value;
  }
  public resetIkeTraceoptions() {
    this._ikeTraceoptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeTraceoptionsInput() {
    return this._ikeTraceoptions.internalValue;
  }

  // log - computed: false, optional: true, required: false
  private _log = new SecurityLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: SecurityLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // nat_source - computed: false, optional: true, required: false
  private _natSource = new SecurityNatSourceOutputReference(this, "nat_source");
  public get natSource() {
    return this._natSource;
  }
  public putNatSource(value: SecurityNatSource) {
    this._natSource.internalValue = value;
  }
  public resetNatSource() {
    this._natSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSourceInput() {
    return this._natSource.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new SecurityPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: SecurityPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // user_identification_auth_source - computed: false, optional: true, required: false
  private _userIdentificationAuthSource = new SecurityUserIdentificationAuthSourceOutputReference(this, "user_identification_auth_source");
  public get userIdentificationAuthSource() {
    return this._userIdentificationAuthSource;
  }
  public putUserIdentificationAuthSource(value: SecurityUserIdentificationAuthSource) {
    this._userIdentificationAuthSource.internalValue = value;
  }
  public resetUserIdentificationAuthSource() {
    this._userIdentificationAuthSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentificationAuthSourceInput() {
    return this._userIdentificationAuthSource.internalValue;
  }

  // utm - computed: false, optional: true, required: false
  private _utm = new SecurityUtmOutputReference(this, "utm");
  public get utm() {
    return this._utm;
  }
  public putUtm(value: SecurityUtm) {
    this._utm.internalValue = value;
  }
  public resetUtm() {
    this._utm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmInput() {
    return this._utm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clean_on_destroy: cdktf.booleanToTerraform(this._cleanOnDestroy),
      alg: securityAlgToTerraform(this._alg.internalValue),
      flow: securityFlowToTerraform(this._flow.internalValue),
      forwarding_options: securityForwardingOptionsToTerraform(this._forwardingOptions.internalValue),
      forwarding_process: securityForwardingProcessToTerraform(this._forwardingProcess.internalValue),
      idp_security_package: securityIdpSecurityPackageToTerraform(this._idpSecurityPackage.internalValue),
      idp_sensor_configuration: securityIdpSensorConfigurationToTerraform(this._idpSensorConfiguration.internalValue),
      ike_traceoptions: securityIkeTraceoptionsToTerraform(this._ikeTraceoptions.internalValue),
      log: securityLogToTerraform(this._log.internalValue),
      nat_source: securityNatSourceToTerraform(this._natSource.internalValue),
      policies: securityPoliciesToTerraform(this._policies.internalValue),
      user_identification_auth_source: securityUserIdentificationAuthSourceToTerraform(this._userIdentificationAuthSource.internalValue),
      utm: securityUtmToTerraform(this._utm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clean_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._cleanOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alg: {
        value: securityAlgToHclTerraform(this._alg.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityAlg",
      },
      flow: {
        value: securityFlowToHclTerraform(this._flow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityFlow",
      },
      forwarding_options: {
        value: securityForwardingOptionsToHclTerraform(this._forwardingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityForwardingOptions",
      },
      forwarding_process: {
        value: securityForwardingProcessToHclTerraform(this._forwardingProcess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityForwardingProcess",
      },
      idp_security_package: {
        value: securityIdpSecurityPackageToHclTerraform(this._idpSecurityPackage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIdpSecurityPackage",
      },
      idp_sensor_configuration: {
        value: securityIdpSensorConfigurationToHclTerraform(this._idpSensorConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIdpSensorConfiguration",
      },
      ike_traceoptions: {
        value: securityIkeTraceoptionsToHclTerraform(this._ikeTraceoptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityIkeTraceoptions",
      },
      log: {
        value: securityLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityLog",
      },
      nat_source: {
        value: securityNatSourceToHclTerraform(this._natSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityNatSource",
      },
      policies: {
        value: securityPoliciesToHclTerraform(this._policies.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityPolicies",
      },
      user_identification_auth_source: {
        value: securityUserIdentificationAuthSourceToHclTerraform(this._userIdentificationAuthSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUserIdentificationAuthSource",
      },
      utm: {
        value: securityUtmToHclTerraform(this._utm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtm",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
