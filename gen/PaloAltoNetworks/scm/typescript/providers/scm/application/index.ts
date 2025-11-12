// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Able to transfer file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#able_to_transfer_file Application#able_to_transfer_file}
  */
  readonly ableToTransferFile?: boolean | cdktf.IResolvable;
  /**
  * Alg disable capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#alg_disable_capability Application#alg_disable_capability}
  */
  readonly algDisableCapability?: string;
  /**
  * Category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#category Application#category}
  */
  readonly category: string;
  /**
  * Consume big bandwidth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#consume_big_bandwidth Application#consume_big_bandwidth}
  */
  readonly consumeBigBandwidth?: boolean | cdktf.IResolvable;
  /**
  * Data ident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#data_ident Application#data_ident}
  */
  readonly dataIdent?: boolean | cdktf.IResolvable;
  /**
  * Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#default Application#default}
  */
  readonly default?: ApplicationDefault;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#device Application#device}
  */
  readonly device?: string;
  /**
  * Evasive behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#evasive_behavior Application#evasive_behavior}
  */
  readonly evasiveBehavior?: boolean | cdktf.IResolvable;
  /**
  * File type ident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#file_type_ident Application#file_type_ident}
  */
  readonly fileTypeIdent?: boolean | cdktf.IResolvable;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#folder Application#folder}
  */
  readonly folder?: string;
  /**
  * Has known vulnerability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#has_known_vulnerability Application#has_known_vulnerability}
  */
  readonly hasKnownVulnerability?: boolean | cdktf.IResolvable;
  /**
  * The name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * No appid caching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#no_appid_caching Application#no_appid_caching}
  */
  readonly noAppidCaching?: boolean | cdktf.IResolvable;
  /**
  * Parent app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#parent_app Application#parent_app}
  */
  readonly parentApp?: string;
  /**
  * Pervasive use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#pervasive_use Application#pervasive_use}
  */
  readonly pervasiveUse?: boolean | cdktf.IResolvable;
  /**
  * Prone to misuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#prone_to_misuse Application#prone_to_misuse}
  */
  readonly proneToMisuse?: boolean | cdktf.IResolvable;
  /**
  * Risk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#risk Application#risk}
  */
  readonly risk: string;
  /**
  * Signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#signature Application#signature}
  */
  readonly signature?: ApplicationSignature[] | cdktf.IResolvable;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#snippet Application#snippet}
  */
  readonly snippet?: string;
  /**
  * Subcategory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#subcategory Application#subcategory}
  */
  readonly subcategory?: string;
  /**
  * timeout for half-close session in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#tcp_half_closed_timeout Application#tcp_half_closed_timeout}
  */
  readonly tcpHalfClosedTimeout?: number;
  /**
  * timeout for session in time_wait state in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#tcp_time_wait_timeout Application#tcp_time_wait_timeout}
  */
  readonly tcpTimeWaitTimeout?: number;
  /**
  * timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#tcp_timeout Application#tcp_timeout}
  */
  readonly tcpTimeout?: number;
  /**
  * Technology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#technology Application#technology}
  */
  readonly technology?: string;
  /**
  * timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#timeout Application#timeout}
  */
  readonly timeout?: number;
  /**
  * Tunnel applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#tunnel_applications Application#tunnel_applications}
  */
  readonly tunnelApplications?: boolean | cdktf.IResolvable;
  /**
  * Tunnel other application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#tunnel_other_application Application#tunnel_other_application}
  */
  readonly tunnelOtherApplication?: boolean | cdktf.IResolvable;
  /**
  * timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#udp_timeout Application#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * Used by malware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#used_by_malware Application#used_by_malware}
  */
  readonly usedByMalware?: boolean | cdktf.IResolvable;
  /**
  * Virus ident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#virus_ident Application#virus_ident}
  */
  readonly virusIdent?: boolean | cdktf.IResolvable;
}
export interface ApplicationDefaultIdentByIcmp6Type {
  /**
  * Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#code Application#code}
  */
  readonly code?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#type Application#type}
  */
  readonly type: string;
}

export function applicationDefaultIdentByIcmp6TypeToTerraform(struct?: ApplicationDefaultIdentByIcmp6Type | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationDefaultIdentByIcmp6TypeToHclTerraform(struct?: ApplicationDefaultIdentByIcmp6Type | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDefaultIdentByIcmp6TypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationDefaultIdentByIcmp6Type | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDefaultIdentByIcmp6Type | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApplicationDefaultIdentByIcmpType {
  /**
  * Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#code Application#code}
  */
  readonly code?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#type Application#type}
  */
  readonly type: string;
}

export function applicationDefaultIdentByIcmpTypeToTerraform(struct?: ApplicationDefaultIdentByIcmpType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationDefaultIdentByIcmpTypeToHclTerraform(struct?: ApplicationDefaultIdentByIcmpType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDefaultIdentByIcmpTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationDefaultIdentByIcmpType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDefaultIdentByIcmpType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApplicationDefault {
  /**
  * Ident by icmp6 type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#ident_by_icmp6_type Application#ident_by_icmp6_type}
  */
  readonly identByIcmp6Type?: ApplicationDefaultIdentByIcmp6Type;
  /**
  * Ident by icmp type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#ident_by_icmp_type Application#ident_by_icmp_type}
  */
  readonly identByIcmpType?: ApplicationDefaultIdentByIcmpType;
  /**
  * Ident by ip protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#ident_by_ip_protocol Application#ident_by_ip_protocol}
  */
  readonly identByIpProtocol?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#port Application#port}
  */
  readonly port?: string[];
}

export function applicationDefaultToTerraform(struct?: ApplicationDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ident_by_icmp6_type: applicationDefaultIdentByIcmp6TypeToTerraform(struct!.identByIcmp6Type),
    ident_by_icmp_type: applicationDefaultIdentByIcmpTypeToTerraform(struct!.identByIcmpType),
    ident_by_ip_protocol: cdktf.stringToTerraform(struct!.identByIpProtocol),
    port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port),
  }
}


export function applicationDefaultToHclTerraform(struct?: ApplicationDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ident_by_icmp6_type: {
      value: applicationDefaultIdentByIcmp6TypeToHclTerraform(struct!.identByIcmp6Type),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationDefaultIdentByIcmp6Type",
    },
    ident_by_icmp_type: {
      value: applicationDefaultIdentByIcmpTypeToHclTerraform(struct!.identByIcmpType),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationDefaultIdentByIcmpType",
    },
    ident_by_ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.identByIpProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.port),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identByIcmp6Type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identByIcmp6Type = this._identByIcmp6Type?.internalValue;
    }
    if (this._identByIcmpType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identByIcmpType = this._identByIcmpType?.internalValue;
    }
    if (this._identByIpProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.identByIpProtocol = this._identByIpProtocol;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identByIcmp6Type.internalValue = undefined;
      this._identByIcmpType.internalValue = undefined;
      this._identByIpProtocol = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identByIcmp6Type.internalValue = value.identByIcmp6Type;
      this._identByIcmpType.internalValue = value.identByIcmpType;
      this._identByIpProtocol = value.identByIpProtocol;
      this._port = value.port;
    }
  }

  // ident_by_icmp6_type - computed: false, optional: true, required: false
  private _identByIcmp6Type = new ApplicationDefaultIdentByIcmp6TypeOutputReference(this, "ident_by_icmp6_type");
  public get identByIcmp6Type() {
    return this._identByIcmp6Type;
  }
  public putIdentByIcmp6Type(value: ApplicationDefaultIdentByIcmp6Type) {
    this._identByIcmp6Type.internalValue = value;
  }
  public resetIdentByIcmp6Type() {
    this._identByIcmp6Type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identByIcmp6TypeInput() {
    return this._identByIcmp6Type.internalValue;
  }

  // ident_by_icmp_type - computed: false, optional: true, required: false
  private _identByIcmpType = new ApplicationDefaultIdentByIcmpTypeOutputReference(this, "ident_by_icmp_type");
  public get identByIcmpType() {
    return this._identByIcmpType;
  }
  public putIdentByIcmpType(value: ApplicationDefaultIdentByIcmpType) {
    this._identByIcmpType.internalValue = value;
  }
  public resetIdentByIcmpType() {
    this._identByIcmpType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identByIcmpTypeInput() {
    return this._identByIcmpType.internalValue;
  }

  // ident_by_ip_protocol - computed: false, optional: true, required: false
  private _identByIpProtocol?: string; 
  public get identByIpProtocol() {
    return this.getStringAttribute('ident_by_ip_protocol');
  }
  public set identByIpProtocol(value: string) {
    this._identByIpProtocol = value;
  }
  public resetIdentByIpProtocol() {
    this._identByIpProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identByIpProtocolInput() {
    return this._identByIpProtocol;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string[]; 
  public get port() {
    return this.getListAttribute('port');
  }
  public set port(value: string[]) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ApplicationSignatureAndConditionOrConditionOperatorEqualTo {
  /**
  * Context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#context Application#context}
  */
  readonly context: string;
  /**
  * 4-byte hex value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#mask Application#mask}
  */
  readonly mask?: string;
  /**
  * Position
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#position Application#position}
  */
  readonly position?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#value Application#value}
  */
  readonly value: string;
}

export function applicationSignatureAndConditionOrConditionOperatorEqualToToTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    mask: cdktf.stringToTerraform(struct!.mask),
    position: cdktf.stringToTerraform(struct!.position),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSignatureAndConditionOrConditionOperatorEqualToToHclTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOperatorEqualToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSignatureAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._mask = undefined;
      this._position = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._mask = value.mask;
      this._position = value.position;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier {
  /**
  * Alphanumeric string [ 0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#value Application#value}
  */
  readonly value: string;
}

export function applicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierList extends cdktf.ComplexList {
  public internalValue? : ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference {
    return new ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSignatureAndConditionOrConditionOperatorGreaterThan {
  /**
  * Context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#context Application#context}
  */
  readonly context: string;
  /**
  * Qualifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#qualifier Application#qualifier}
  */
  readonly qualifier?: ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#value Application#value}
  */
  readonly value: number;
}

export function applicationSignatureAndConditionOrConditionOperatorGreaterThanToTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    qualifier: cdktf.listMapper(applicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToTerraform, false)(struct!.qualifier),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function applicationSignatureAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.listMapperHcl(applicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierList",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOperatorGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSignatureAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._qualifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._qualifier.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._qualifier.internalValue = value.qualifier;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier = new ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: ApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier {
  /**
  * Alphanumeric string [ 0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#value Application#value}
  */
  readonly value: string;
}

export function applicationSignatureAndConditionOrConditionOperatorLessThanQualifierToTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSignatureAndConditionOrConditionOperatorLessThanQualifierToHclTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierList extends cdktf.ComplexList {
  public internalValue? : ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference {
    return new ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSignatureAndConditionOrConditionOperatorLessThan {
  /**
  * Context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#context Application#context}
  */
  readonly context: string;
  /**
  * Qualifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#qualifier Application#qualifier}
  */
  readonly qualifier?: ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#value Application#value}
  */
  readonly value: number;
}

export function applicationSignatureAndConditionOrConditionOperatorLessThanToTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorLessThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    qualifier: cdktf.listMapper(applicationSignatureAndConditionOrConditionOperatorLessThanQualifierToTerraform, false)(struct!.qualifier),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function applicationSignatureAndConditionOrConditionOperatorLessThanToHclTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorLessThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.listMapperHcl(applicationSignatureAndConditionOrConditionOperatorLessThanQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierList",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOperatorLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSignatureAndConditionOrConditionOperatorLessThan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._qualifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrConditionOperatorLessThan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._qualifier.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._qualifier.internalValue = value.qualifier;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier = new ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: ApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier {
  /**
  * Alphanumeric string [ 0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#value Application#value}
  */
  readonly value: string;
}

export function applicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierList extends cdktf.ComplexList {
  public internalValue? : ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference {
    return new ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSignatureAndConditionOrConditionOperatorPatternMatch {
  /**
  * Context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#context Application#context}
  */
  readonly context: string;
  /**
  * Pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#pattern Application#pattern}
  */
  readonly pattern: string;
  /**
  * Qualifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#qualifier Application#qualifier}
  */
  readonly qualifier?: ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable;
}

export function applicationSignatureAndConditionOrConditionOperatorPatternMatchToTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    qualifier: cdktf.listMapper(applicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToTerraform, false)(struct!.qualifier),
  }
}


export function applicationSignatureAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.listMapperHcl(applicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOperatorPatternMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSignatureAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._qualifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._pattern = undefined;
      this._qualifier.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._pattern = value.pattern;
      this._qualifier.internalValue = value.qualifier;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier = new ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: ApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }
}
export interface ApplicationSignatureAndConditionOrConditionOperator {
  /**
  * Equal to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#equal_to Application#equal_to}
  */
  readonly equalTo?: ApplicationSignatureAndConditionOrConditionOperatorEqualTo;
  /**
  * Greater than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#greater_than Application#greater_than}
  */
  readonly greaterThan?: ApplicationSignatureAndConditionOrConditionOperatorGreaterThan;
  /**
  * Less than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#less_than Application#less_than}
  */
  readonly lessThan?: ApplicationSignatureAndConditionOrConditionOperatorLessThan;
  /**
  * Pattern match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#pattern_match Application#pattern_match}
  */
  readonly patternMatch?: ApplicationSignatureAndConditionOrConditionOperatorPatternMatch;
}

export function applicationSignatureAndConditionOrConditionOperatorToTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equal_to: applicationSignatureAndConditionOrConditionOperatorEqualToToTerraform(struct!.equalTo),
    greater_than: applicationSignatureAndConditionOrConditionOperatorGreaterThanToTerraform(struct!.greaterThan),
    less_than: applicationSignatureAndConditionOrConditionOperatorLessThanToTerraform(struct!.lessThan),
    pattern_match: applicationSignatureAndConditionOrConditionOperatorPatternMatchToTerraform(struct!.patternMatch),
  }
}


export function applicationSignatureAndConditionOrConditionOperatorToHclTerraform(struct?: ApplicationSignatureAndConditionOrConditionOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equal_to: {
      value: applicationSignatureAndConditionOrConditionOperatorEqualToToHclTerraform(struct!.equalTo),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSignatureAndConditionOrConditionOperatorEqualTo",
    },
    greater_than: {
      value: applicationSignatureAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct!.greaterThan),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSignatureAndConditionOrConditionOperatorGreaterThan",
    },
    less_than: {
      value: applicationSignatureAndConditionOrConditionOperatorLessThanToHclTerraform(struct!.lessThan),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSignatureAndConditionOrConditionOperatorLessThan",
    },
    pattern_match: {
      value: applicationSignatureAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct!.patternMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSignatureAndConditionOrConditionOperatorPatternMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSignatureAndConditionOrConditionOperator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equalTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equalTo?.internalValue;
    }
    if (this._greaterThan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThan = this._greaterThan?.internalValue;
    }
    if (this._lessThan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThan = this._lessThan?.internalValue;
    }
    if (this._patternMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternMatch = this._patternMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrConditionOperator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equalTo.internalValue = undefined;
      this._greaterThan.internalValue = undefined;
      this._lessThan.internalValue = undefined;
      this._patternMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equalTo.internalValue = value.equalTo;
      this._greaterThan.internalValue = value.greaterThan;
      this._lessThan.internalValue = value.lessThan;
      this._patternMatch.internalValue = value.patternMatch;
    }
  }

  // equal_to - computed: false, optional: true, required: false
  private _equalTo = new ApplicationSignatureAndConditionOrConditionOperatorEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }
  public putEqualTo(value: ApplicationSignatureAndConditionOrConditionOperatorEqualTo) {
    this._equalTo.internalValue = value;
  }
  public resetEqualTo() {
    this._equalTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equalTo.internalValue;
  }

  // greater_than - computed: false, optional: true, required: false
  private _greaterThan = new ApplicationSignatureAndConditionOrConditionOperatorGreaterThanOutputReference(this, "greater_than");
  public get greaterThan() {
    return this._greaterThan;
  }
  public putGreaterThan(value: ApplicationSignatureAndConditionOrConditionOperatorGreaterThan) {
    this._greaterThan.internalValue = value;
  }
  public resetGreaterThan() {
    this._greaterThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanInput() {
    return this._greaterThan.internalValue;
  }

  // less_than - computed: false, optional: true, required: false
  private _lessThan = new ApplicationSignatureAndConditionOrConditionOperatorLessThanOutputReference(this, "less_than");
  public get lessThan() {
    return this._lessThan;
  }
  public putLessThan(value: ApplicationSignatureAndConditionOrConditionOperatorLessThan) {
    this._lessThan.internalValue = value;
  }
  public resetLessThan() {
    this._lessThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanInput() {
    return this._lessThan.internalValue;
  }

  // pattern_match - computed: false, optional: true, required: false
  private _patternMatch = new ApplicationSignatureAndConditionOrConditionOperatorPatternMatchOutputReference(this, "pattern_match");
  public get patternMatch() {
    return this._patternMatch;
  }
  public putPatternMatch(value: ApplicationSignatureAndConditionOrConditionOperatorPatternMatch) {
    this._patternMatch.internalValue = value;
  }
  public resetPatternMatch() {
    this._patternMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternMatchInput() {
    return this._patternMatch.internalValue;
  }
}
export interface ApplicationSignatureAndConditionOrCondition {
  /**
  * Alphanumeric string [ 0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#operator Application#operator}
  */
  readonly operator: ApplicationSignatureAndConditionOrConditionOperator;
}

export function applicationSignatureAndConditionOrConditionToTerraform(struct?: ApplicationSignatureAndConditionOrCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: applicationSignatureAndConditionOrConditionOperatorToTerraform(struct!.operator),
  }
}


export function applicationSignatureAndConditionOrConditionToHclTerraform(struct?: ApplicationSignatureAndConditionOrCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: applicationSignatureAndConditionOrConditionOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSignatureAndConditionOrConditionOperator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSignatureAndConditionOrCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndConditionOrCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator.internalValue = value.operator;
    }
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

  // operator - computed: false, optional: false, required: true
  private _operator = new ApplicationSignatureAndConditionOrConditionOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: ApplicationSignatureAndConditionOrConditionOperator) {
    this._operator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class ApplicationSignatureAndConditionOrConditionList extends cdktf.ComplexList {
  public internalValue? : ApplicationSignatureAndConditionOrCondition[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSignatureAndConditionOrConditionOutputReference {
    return new ApplicationSignatureAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSignatureAndCondition {
  /**
  * Alphanumeric string [ 0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Or condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#or_condition Application#or_condition}
  */
  readonly orCondition?: ApplicationSignatureAndConditionOrCondition[] | cdktf.IResolvable;
}

export function applicationSignatureAndConditionToTerraform(struct?: ApplicationSignatureAndCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    or_condition: cdktf.listMapper(applicationSignatureAndConditionOrConditionToTerraform, false)(struct!.orCondition),
  }
}


export function applicationSignatureAndConditionToHclTerraform(struct?: ApplicationSignatureAndCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    or_condition: {
      value: cdktf.listMapperHcl(applicationSignatureAndConditionOrConditionToHclTerraform, false)(struct!.orCondition),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSignatureAndConditionOrConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSignatureAndCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orCondition = this._orCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignatureAndCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._orCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._orCondition.internalValue = value.orCondition;
    }
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

  // or_condition - computed: false, optional: true, required: false
  private _orCondition = new ApplicationSignatureAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
  public putOrCondition(value: ApplicationSignatureAndConditionOrCondition[] | cdktf.IResolvable) {
    this._orCondition.internalValue = value;
  }
  public resetOrCondition() {
    this._orCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionInput() {
    return this._orCondition.internalValue;
  }
}

export class ApplicationSignatureAndConditionList extends cdktf.ComplexList {
  public internalValue? : ApplicationSignatureAndCondition[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSignatureAndConditionOutputReference {
    return new ApplicationSignatureAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSignature {
  /**
  * And condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#and_condition Application#and_condition}
  */
  readonly andCondition?: ApplicationSignatureAndCondition[] | cdktf.IResolvable;
  /**
  * Comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#comment Application#comment}
  */
  readonly comment?: string;
  /**
  * Alphanumeric string [ 0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Order free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#order_free Application#order_free}
  */
  readonly orderFree?: boolean | cdktf.IResolvable;
  /**
  * Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#scope Application#scope}
  */
  readonly scope?: string;
}

export function applicationSignatureToTerraform(struct?: ApplicationSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_condition: cdktf.listMapper(applicationSignatureAndConditionToTerraform, false)(struct!.andCondition),
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    order_free: cdktf.booleanToTerraform(struct!.orderFree),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function applicationSignatureToHclTerraform(struct?: ApplicationSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_condition: {
      value: cdktf.listMapperHcl(applicationSignatureAndConditionToHclTerraform, false)(struct!.andCondition),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSignatureAndConditionList",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
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
    order_free: {
      value: cdktf.booleanToHclTerraform(struct!.orderFree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSignatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andCondition = this._andCondition?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orderFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderFree = this._orderFree;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andCondition.internalValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._orderFree = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andCondition.internalValue = value.andCondition;
      this._comment = value.comment;
      this._name = value.name;
      this._orderFree = value.orderFree;
      this._scope = value.scope;
    }
  }

  // and_condition - computed: false, optional: true, required: false
  private _andCondition = new ApplicationSignatureAndConditionList(this, "and_condition", false);
  public get andCondition() {
    return this._andCondition;
  }
  public putAndCondition(value: ApplicationSignatureAndCondition[] | cdktf.IResolvable) {
    this._andCondition.internalValue = value;
  }
  public resetAndCondition() {
    this._andCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionInput() {
    return this._andCondition.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // order_free - computed: true, optional: true, required: false
  private _orderFree?: boolean | cdktf.IResolvable; 
  public get orderFree() {
    return this.getBooleanAttribute('order_free');
  }
  public set orderFree(value: boolean | cdktf.IResolvable) {
    this._orderFree = value;
  }
  public resetOrderFree() {
    this._orderFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderFreeInput() {
    return this._orderFree;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class ApplicationSignatureList extends cdktf.ComplexList {
  public internalValue? : ApplicationSignature[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSignatureOutputReference {
    return new ApplicationSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application scm_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/application scm_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_application',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ableToTransferFile = config.ableToTransferFile;
    this._algDisableCapability = config.algDisableCapability;
    this._category = config.category;
    this._consumeBigBandwidth = config.consumeBigBandwidth;
    this._dataIdent = config.dataIdent;
    this._default.internalValue = config.default;
    this._description = config.description;
    this._device = config.device;
    this._evasiveBehavior = config.evasiveBehavior;
    this._fileTypeIdent = config.fileTypeIdent;
    this._folder = config.folder;
    this._hasKnownVulnerability = config.hasKnownVulnerability;
    this._name = config.name;
    this._noAppidCaching = config.noAppidCaching;
    this._parentApp = config.parentApp;
    this._pervasiveUse = config.pervasiveUse;
    this._proneToMisuse = config.proneToMisuse;
    this._risk = config.risk;
    this._signature.internalValue = config.signature;
    this._snippet = config.snippet;
    this._subcategory = config.subcategory;
    this._tcpHalfClosedTimeout = config.tcpHalfClosedTimeout;
    this._tcpTimeWaitTimeout = config.tcpTimeWaitTimeout;
    this._tcpTimeout = config.tcpTimeout;
    this._technology = config.technology;
    this._timeout = config.timeout;
    this._tunnelApplications = config.tunnelApplications;
    this._tunnelOtherApplication = config.tunnelOtherApplication;
    this._udpTimeout = config.udpTimeout;
    this._usedByMalware = config.usedByMalware;
    this._virusIdent = config.virusIdent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // able_to_transfer_file - computed: false, optional: true, required: false
  private _ableToTransferFile?: boolean | cdktf.IResolvable; 
  public get ableToTransferFile() {
    return this.getBooleanAttribute('able_to_transfer_file');
  }
  public set ableToTransferFile(value: boolean | cdktf.IResolvable) {
    this._ableToTransferFile = value;
  }
  public resetAbleToTransferFile() {
    this._ableToTransferFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ableToTransferFileInput() {
    return this._ableToTransferFile;
  }

  // alg_disable_capability - computed: false, optional: true, required: false
  private _algDisableCapability?: string; 
  public get algDisableCapability() {
    return this.getStringAttribute('alg_disable_capability');
  }
  public set algDisableCapability(value: string) {
    this._algDisableCapability = value;
  }
  public resetAlgDisableCapability() {
    this._algDisableCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algDisableCapabilityInput() {
    return this._algDisableCapability;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // consume_big_bandwidth - computed: false, optional: true, required: false
  private _consumeBigBandwidth?: boolean | cdktf.IResolvable; 
  public get consumeBigBandwidth() {
    return this.getBooleanAttribute('consume_big_bandwidth');
  }
  public set consumeBigBandwidth(value: boolean | cdktf.IResolvable) {
    this._consumeBigBandwidth = value;
  }
  public resetConsumeBigBandwidth() {
    this._consumeBigBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeBigBandwidthInput() {
    return this._consumeBigBandwidth;
  }

  // data_ident - computed: false, optional: true, required: false
  private _dataIdent?: boolean | cdktf.IResolvable; 
  public get dataIdent() {
    return this.getBooleanAttribute('data_ident');
  }
  public set dataIdent(value: boolean | cdktf.IResolvable) {
    this._dataIdent = value;
  }
  public resetDataIdent() {
    this._dataIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIdentInput() {
    return this._dataIdent;
  }

  // default - computed: false, optional: true, required: false
  private _default = new ApplicationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: ApplicationDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // evasive_behavior - computed: false, optional: true, required: false
  private _evasiveBehavior?: boolean | cdktf.IResolvable; 
  public get evasiveBehavior() {
    return this.getBooleanAttribute('evasive_behavior');
  }
  public set evasiveBehavior(value: boolean | cdktf.IResolvable) {
    this._evasiveBehavior = value;
  }
  public resetEvasiveBehavior() {
    this._evasiveBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evasiveBehaviorInput() {
    return this._evasiveBehavior;
  }

  // file_type_ident - computed: false, optional: true, required: false
  private _fileTypeIdent?: boolean | cdktf.IResolvable; 
  public get fileTypeIdent() {
    return this.getBooleanAttribute('file_type_ident');
  }
  public set fileTypeIdent(value: boolean | cdktf.IResolvable) {
    this._fileTypeIdent = value;
  }
  public resetFileTypeIdent() {
    this._fileTypeIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeIdentInput() {
    return this._fileTypeIdent;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // has_known_vulnerability - computed: false, optional: true, required: false
  private _hasKnownVulnerability?: boolean | cdktf.IResolvable; 
  public get hasKnownVulnerability() {
    return this.getBooleanAttribute('has_known_vulnerability');
  }
  public set hasKnownVulnerability(value: boolean | cdktf.IResolvable) {
    this._hasKnownVulnerability = value;
  }
  public resetHasKnownVulnerability() {
    this._hasKnownVulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasKnownVulnerabilityInput() {
    return this._hasKnownVulnerability;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_appid_caching - computed: false, optional: true, required: false
  private _noAppidCaching?: boolean | cdktf.IResolvable; 
  public get noAppidCaching() {
    return this.getBooleanAttribute('no_appid_caching');
  }
  public set noAppidCaching(value: boolean | cdktf.IResolvable) {
    this._noAppidCaching = value;
  }
  public resetNoAppidCaching() {
    this._noAppidCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAppidCachingInput() {
    return this._noAppidCaching;
  }

  // parent_app - computed: false, optional: true, required: false
  private _parentApp?: string; 
  public get parentApp() {
    return this.getStringAttribute('parent_app');
  }
  public set parentApp(value: string) {
    this._parentApp = value;
  }
  public resetParentApp() {
    this._parentApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAppInput() {
    return this._parentApp;
  }

  // pervasive_use - computed: false, optional: true, required: false
  private _pervasiveUse?: boolean | cdktf.IResolvable; 
  public get pervasiveUse() {
    return this.getBooleanAttribute('pervasive_use');
  }
  public set pervasiveUse(value: boolean | cdktf.IResolvable) {
    this._pervasiveUse = value;
  }
  public resetPervasiveUse() {
    this._pervasiveUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pervasiveUseInput() {
    return this._pervasiveUse;
  }

  // prone_to_misuse - computed: false, optional: true, required: false
  private _proneToMisuse?: boolean | cdktf.IResolvable; 
  public get proneToMisuse() {
    return this.getBooleanAttribute('prone_to_misuse');
  }
  public set proneToMisuse(value: boolean | cdktf.IResolvable) {
    this._proneToMisuse = value;
  }
  public resetProneToMisuse() {
    this._proneToMisuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proneToMisuseInput() {
    return this._proneToMisuse;
  }

  // risk - computed: false, optional: false, required: true
  private _risk?: string; 
  public get risk() {
    return this.getStringAttribute('risk');
  }
  public set risk(value: string) {
    this._risk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // signature - computed: false, optional: true, required: false
  private _signature = new ApplicationSignatureList(this, "signature", false);
  public get signature() {
    return this._signature;
  }
  public putSignature(value: ApplicationSignature[] | cdktf.IResolvable) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // subcategory - computed: false, optional: true, required: false
  private _subcategory?: string; 
  public get subcategory() {
    return this.getStringAttribute('subcategory');
  }
  public set subcategory(value: string) {
    this._subcategory = value;
  }
  public resetSubcategory() {
    this._subcategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subcategoryInput() {
    return this._subcategory;
  }

  // tcp_half_closed_timeout - computed: false, optional: true, required: false
  private _tcpHalfClosedTimeout?: number; 
  public get tcpHalfClosedTimeout() {
    return this.getNumberAttribute('tcp_half_closed_timeout');
  }
  public set tcpHalfClosedTimeout(value: number) {
    this._tcpHalfClosedTimeout = value;
  }
  public resetTcpHalfClosedTimeout() {
    this._tcpHalfClosedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfClosedTimeoutInput() {
    return this._tcpHalfClosedTimeout;
  }

  // tcp_time_wait_timeout - computed: false, optional: true, required: false
  private _tcpTimeWaitTimeout?: number; 
  public get tcpTimeWaitTimeout() {
    return this.getNumberAttribute('tcp_time_wait_timeout');
  }
  public set tcpTimeWaitTimeout(value: number) {
    this._tcpTimeWaitTimeout = value;
  }
  public resetTcpTimeWaitTimeout() {
    this._tcpTimeWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeWaitTimeoutInput() {
    return this._tcpTimeWaitTimeout;
  }

  // tcp_timeout - computed: false, optional: true, required: false
  private _tcpTimeout?: number; 
  public get tcpTimeout() {
    return this.getNumberAttribute('tcp_timeout');
  }
  public set tcpTimeout(value: number) {
    this._tcpTimeout = value;
  }
  public resetTcpTimeout() {
    this._tcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutInput() {
    return this._tcpTimeout;
  }

  // technology - computed: false, optional: true, required: false
  private _technology?: string; 
  public get technology() {
    return this.getStringAttribute('technology');
  }
  public set technology(value: string) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
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

  // tunnel_applications - computed: false, optional: true, required: false
  private _tunnelApplications?: boolean | cdktf.IResolvable; 
  public get tunnelApplications() {
    return this.getBooleanAttribute('tunnel_applications');
  }
  public set tunnelApplications(value: boolean | cdktf.IResolvable) {
    this._tunnelApplications = value;
  }
  public resetTunnelApplications() {
    this._tunnelApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelApplicationsInput() {
    return this._tunnelApplications;
  }

  // tunnel_other_application - computed: false, optional: true, required: false
  private _tunnelOtherApplication?: boolean | cdktf.IResolvable; 
  public get tunnelOtherApplication() {
    return this.getBooleanAttribute('tunnel_other_application');
  }
  public set tunnelOtherApplication(value: boolean | cdktf.IResolvable) {
    this._tunnelOtherApplication = value;
  }
  public resetTunnelOtherApplication() {
    this._tunnelOtherApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelOtherApplicationInput() {
    return this._tunnelOtherApplication;
  }

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: number; 
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
  public set udpTimeout(value: number) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout;
  }

  // used_by_malware - computed: false, optional: true, required: false
  private _usedByMalware?: boolean | cdktf.IResolvable; 
  public get usedByMalware() {
    return this.getBooleanAttribute('used_by_malware');
  }
  public set usedByMalware(value: boolean | cdktf.IResolvable) {
    this._usedByMalware = value;
  }
  public resetUsedByMalware() {
    this._usedByMalware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedByMalwareInput() {
    return this._usedByMalware;
  }

  // virus_ident - computed: false, optional: true, required: false
  private _virusIdent?: boolean | cdktf.IResolvable; 
  public get virusIdent() {
    return this.getBooleanAttribute('virus_ident');
  }
  public set virusIdent(value: boolean | cdktf.IResolvable) {
    this._virusIdent = value;
  }
  public resetVirusIdent() {
    this._virusIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusIdentInput() {
    return this._virusIdent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      able_to_transfer_file: cdktf.booleanToTerraform(this._ableToTransferFile),
      alg_disable_capability: cdktf.stringToTerraform(this._algDisableCapability),
      category: cdktf.stringToTerraform(this._category),
      consume_big_bandwidth: cdktf.booleanToTerraform(this._consumeBigBandwidth),
      data_ident: cdktf.booleanToTerraform(this._dataIdent),
      default: applicationDefaultToTerraform(this._default.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      evasive_behavior: cdktf.booleanToTerraform(this._evasiveBehavior),
      file_type_ident: cdktf.booleanToTerraform(this._fileTypeIdent),
      folder: cdktf.stringToTerraform(this._folder),
      has_known_vulnerability: cdktf.booleanToTerraform(this._hasKnownVulnerability),
      name: cdktf.stringToTerraform(this._name),
      no_appid_caching: cdktf.booleanToTerraform(this._noAppidCaching),
      parent_app: cdktf.stringToTerraform(this._parentApp),
      pervasive_use: cdktf.booleanToTerraform(this._pervasiveUse),
      prone_to_misuse: cdktf.booleanToTerraform(this._proneToMisuse),
      risk: cdktf.stringToTerraform(this._risk),
      signature: cdktf.listMapper(applicationSignatureToTerraform, false)(this._signature.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      subcategory: cdktf.stringToTerraform(this._subcategory),
      tcp_half_closed_timeout: cdktf.numberToTerraform(this._tcpHalfClosedTimeout),
      tcp_time_wait_timeout: cdktf.numberToTerraform(this._tcpTimeWaitTimeout),
      tcp_timeout: cdktf.numberToTerraform(this._tcpTimeout),
      technology: cdktf.stringToTerraform(this._technology),
      timeout: cdktf.numberToTerraform(this._timeout),
      tunnel_applications: cdktf.booleanToTerraform(this._tunnelApplications),
      tunnel_other_application: cdktf.booleanToTerraform(this._tunnelOtherApplication),
      udp_timeout: cdktf.numberToTerraform(this._udpTimeout),
      used_by_malware: cdktf.booleanToTerraform(this._usedByMalware),
      virus_ident: cdktf.booleanToTerraform(this._virusIdent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      able_to_transfer_file: {
        value: cdktf.booleanToHclTerraform(this._ableToTransferFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alg_disable_capability: {
        value: cdktf.stringToHclTerraform(this._algDisableCapability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consume_big_bandwidth: {
        value: cdktf.booleanToHclTerraform(this._consumeBigBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_ident: {
        value: cdktf.booleanToHclTerraform(this._dataIdent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default: {
        value: applicationDefaultToHclTerraform(this._default.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationDefault",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      evasive_behavior: {
        value: cdktf.booleanToHclTerraform(this._evasiveBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_type_ident: {
        value: cdktf.booleanToHclTerraform(this._fileTypeIdent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_known_vulnerability: {
        value: cdktf.booleanToHclTerraform(this._hasKnownVulnerability),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_appid_caching: {
        value: cdktf.booleanToHclTerraform(this._noAppidCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parent_app: {
        value: cdktf.stringToHclTerraform(this._parentApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pervasive_use: {
        value: cdktf.booleanToHclTerraform(this._pervasiveUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prone_to_misuse: {
        value: cdktf.booleanToHclTerraform(this._proneToMisuse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      risk: {
        value: cdktf.stringToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature: {
        value: cdktf.listMapperHcl(applicationSignatureToHclTerraform, false)(this._signature.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSignatureList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subcategory: {
        value: cdktf.stringToHclTerraform(this._subcategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_half_closed_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpHalfClosedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_time_wait_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpTimeWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      technology: {
        value: cdktf.stringToHclTerraform(this._technology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_applications: {
        value: cdktf.booleanToHclTerraform(this._tunnelApplications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_other_application: {
        value: cdktf.booleanToHclTerraform(this._tunnelOtherApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      udp_timeout: {
        value: cdktf.numberToHclTerraform(this._udpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      used_by_malware: {
        value: cdktf.booleanToHclTerraform(this._usedByMalware),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virus_ident: {
        value: cdktf.booleanToHclTerraform(this._virusIdent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
