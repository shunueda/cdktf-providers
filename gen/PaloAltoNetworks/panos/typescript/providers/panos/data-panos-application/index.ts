// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#able_to_transfer_file DataPanosApplication#able_to_transfer_file}
  */
  readonly ableToTransferFile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#alg_disable_capability DataPanosApplication#alg_disable_capability}
  */
  readonly algDisableCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#category DataPanosApplication#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#consume_big_bandwidth DataPanosApplication#consume_big_bandwidth}
  */
  readonly consumeBigBandwidth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#data_ident DataPanosApplication#data_ident}
  */
  readonly dataIdent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#default DataPanosApplication#default}
  */
  readonly default?: DataPanosApplicationDefault;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#description DataPanosApplication#description}
  */
  readonly description?: string;
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#disable_override DataPanosApplication#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#evasive_behavior DataPanosApplication#evasive_behavior}
  */
  readonly evasiveBehavior?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#file_type_ident DataPanosApplication#file_type_ident}
  */
  readonly fileTypeIdent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#has_known_vulnerability DataPanosApplication#has_known_vulnerability}
  */
  readonly hasKnownVulnerability?: boolean | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#location DataPanosApplication#location}
  */
  readonly location: DataPanosApplicationLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#no_appid_caching DataPanosApplication#no_appid_caching}
  */
  readonly noAppidCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#parent_app DataPanosApplication#parent_app}
  */
  readonly parentApp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#pervasive_use DataPanosApplication#pervasive_use}
  */
  readonly pervasiveUse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#prone_to_misuse DataPanosApplication#prone_to_misuse}
  */
  readonly proneToMisuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#risk DataPanosApplication#risk}
  */
  readonly risk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#signature DataPanosApplication#signature}
  */
  readonly signature?: DataPanosApplicationSignature[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#subcategory DataPanosApplication#subcategory}
  */
  readonly subcategory?: string;
  /**
  * timeout for half-close session in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#tcp_half_closed_timeout DataPanosApplication#tcp_half_closed_timeout}
  */
  readonly tcpHalfClosedTimeout?: number;
  /**
  * timeout for session in time_wait state in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#tcp_time_wait_timeout DataPanosApplication#tcp_time_wait_timeout}
  */
  readonly tcpTimeWaitTimeout?: number;
  /**
  * timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#tcp_timeout DataPanosApplication#tcp_timeout}
  */
  readonly tcpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#technology DataPanosApplication#technology}
  */
  readonly technology?: string;
  /**
  * timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#timeout DataPanosApplication#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#tunnel_applications DataPanosApplication#tunnel_applications}
  */
  readonly tunnelApplications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#tunnel_other_application DataPanosApplication#tunnel_other_application}
  */
  readonly tunnelOtherApplication?: boolean | cdktf.IResolvable;
  /**
  * timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#udp_timeout DataPanosApplication#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#used_by_malware DataPanosApplication#used_by_malware}
  */
  readonly usedByMalware?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#virus_ident DataPanosApplication#virus_ident}
  */
  readonly virusIdent?: boolean | cdktf.IResolvable;
}
export interface DataPanosApplicationDefaultIdentByIcmp6Type {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#code DataPanosApplication#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#type DataPanosApplication#type}
  */
  readonly type?: string;
}

export function dataPanosApplicationDefaultIdentByIcmp6TypeToTerraform(struct?: DataPanosApplicationDefaultIdentByIcmp6Type | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPanosApplicationDefaultIdentByIcmp6TypeToHclTerraform(struct?: DataPanosApplicationDefaultIdentByIcmp6Type | cdktf.IResolvable): any {
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

export class DataPanosApplicationDefaultIdentByIcmp6TypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationDefaultIdentByIcmp6Type | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationDefaultIdentByIcmp6Type | cdktf.IResolvable | undefined) {
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

  // code - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPanosApplicationDefaultIdentByIcmpType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#code DataPanosApplication#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#type DataPanosApplication#type}
  */
  readonly type?: string;
}

export function dataPanosApplicationDefaultIdentByIcmpTypeToTerraform(struct?: DataPanosApplicationDefaultIdentByIcmpType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPanosApplicationDefaultIdentByIcmpTypeToHclTerraform(struct?: DataPanosApplicationDefaultIdentByIcmpType | cdktf.IResolvable): any {
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

export class DataPanosApplicationDefaultIdentByIcmpTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationDefaultIdentByIcmpType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationDefaultIdentByIcmpType | cdktf.IResolvable | undefined) {
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

  // code - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataPanosApplicationDefault {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#ident_by_icmp6_type DataPanosApplication#ident_by_icmp6_type}
  */
  readonly identByIcmp6Type?: DataPanosApplicationDefaultIdentByIcmp6Type;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#ident_by_icmp_type DataPanosApplication#ident_by_icmp_type}
  */
  readonly identByIcmpType?: DataPanosApplicationDefaultIdentByIcmpType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#ident_by_ip_protocol DataPanosApplication#ident_by_ip_protocol}
  */
  readonly identByIpProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#port DataPanosApplication#port}
  */
  readonly port?: string[];
}

export function dataPanosApplicationDefaultToTerraform(struct?: DataPanosApplicationDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ident_by_icmp6_type: dataPanosApplicationDefaultIdentByIcmp6TypeToTerraform(struct!.identByIcmp6Type),
    ident_by_icmp_type: dataPanosApplicationDefaultIdentByIcmpTypeToTerraform(struct!.identByIcmpType),
    ident_by_ip_protocol: cdktf.stringToTerraform(struct!.identByIpProtocol),
    port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.port),
  }
}


export function dataPanosApplicationDefaultToHclTerraform(struct?: DataPanosApplicationDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ident_by_icmp6_type: {
      value: dataPanosApplicationDefaultIdentByIcmp6TypeToHclTerraform(struct!.identByIcmp6Type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationDefaultIdentByIcmp6Type",
    },
    ident_by_icmp_type: {
      value: dataPanosApplicationDefaultIdentByIcmpTypeToHclTerraform(struct!.identByIcmpType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationDefaultIdentByIcmpType",
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

export class DataPanosApplicationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationDefault | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationDefault | cdktf.IResolvable | undefined) {
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

  // ident_by_icmp6_type - computed: true, optional: true, required: false
  private _identByIcmp6Type = new DataPanosApplicationDefaultIdentByIcmp6TypeOutputReference(this, "ident_by_icmp6_type");
  public get identByIcmp6Type() {
    return this._identByIcmp6Type;
  }
  public putIdentByIcmp6Type(value: DataPanosApplicationDefaultIdentByIcmp6Type) {
    this._identByIcmp6Type.internalValue = value;
  }
  public resetIdentByIcmp6Type() {
    this._identByIcmp6Type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identByIcmp6TypeInput() {
    return this._identByIcmp6Type.internalValue;
  }

  // ident_by_icmp_type - computed: true, optional: true, required: false
  private _identByIcmpType = new DataPanosApplicationDefaultIdentByIcmpTypeOutputReference(this, "ident_by_icmp_type");
  public get identByIcmpType() {
    return this._identByIcmpType;
  }
  public putIdentByIcmpType(value: DataPanosApplicationDefaultIdentByIcmpType) {
    this._identByIcmpType.internalValue = value;
  }
  public resetIdentByIcmpType() {
    this._identByIcmpType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identByIcmpTypeInput() {
    return this._identByIcmpType.internalValue;
  }

  // ident_by_ip_protocol - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
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
export interface DataPanosApplicationLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#panorama_device DataPanosApplication#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosApplicationLocationDeviceGroupToTerraform(struct?: DataPanosApplicationLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosApplicationLocationDeviceGroupToHclTerraform(struct?: DataPanosApplicationLocationDeviceGroup | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosApplicationLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationLocationDeviceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosApplicationLocationDeviceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosApplicationLocationShared {
}

export function dataPanosApplicationLocationSharedToTerraform(struct?: DataPanosApplicationLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosApplicationLocationSharedToHclTerraform(struct?: DataPanosApplicationLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosApplicationLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosApplicationLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosApplicationLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#ngfw_device DataPanosApplication#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosApplicationLocationVsysToTerraform(struct?: DataPanosApplicationLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosApplicationLocationVsysToHclTerraform(struct?: DataPanosApplicationLocationVsys | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosApplicationLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationLocationVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosApplicationLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface DataPanosApplicationLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#device_group DataPanosApplication#device_group}
  */
  readonly deviceGroup?: DataPanosApplicationLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#shared DataPanosApplication#shared}
  */
  readonly shared?: DataPanosApplicationLocationShared;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#vsys DataPanosApplication#vsys}
  */
  readonly vsys?: DataPanosApplicationLocationVsys;
}

export function dataPanosApplicationLocationToTerraform(struct?: DataPanosApplicationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosApplicationLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosApplicationLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosApplicationLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosApplicationLocationToHclTerraform(struct?: DataPanosApplicationLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosApplicationLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationLocationDeviceGroup",
    },
    shared: {
      value: dataPanosApplicationLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationLocationShared",
    },
    vsys: {
      value: dataPanosApplicationLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosApplicationLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosApplicationLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = undefined;
      this._shared.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = value.deviceGroup;
      this._shared.internalValue = value.shared;
      this._vsys.internalValue = value.vsys;
    }
  }

  // device_group - computed: false, optional: true, required: false
  private _deviceGroup = new DataPanosApplicationLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosApplicationLocationDeviceGroup) {
    this._deviceGroup.internalValue = value;
  }
  public resetDeviceGroup() {
    this._deviceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new DataPanosApplicationLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosApplicationLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new DataPanosApplicationLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosApplicationLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}
export interface DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#context DataPanosApplication#context}
  */
  readonly context?: string;
  /**
  * 4-byte hex value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#mask DataPanosApplication#mask}
  */
  readonly mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#position DataPanosApplication#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#value DataPanosApplication#value}
  */
  readonly value?: string;
}

export function dataPanosApplicationSignatureAndConditionOrConditionOperatorEqualToToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable): any {
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


export function dataPanosApplicationSignatureAndConditionOrConditionOperatorEqualToToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable): any {
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

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualTo | cdktf.IResolvable | undefined) {
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

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // mask - computed: true, optional: true, required: false
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

  // position - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#value DataPanosApplication#value}
  */
  readonly value?: string;
}

export function dataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable): any {
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

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierList extends cdktf.ComplexList {
  public internalValue? : DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable

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
  public get(index: number): DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference {
    return new DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#context DataPanosApplication#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#qualifier DataPanosApplication#qualifier}
  */
  readonly qualifier?: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#value DataPanosApplication#value}
  */
  readonly value?: number;
}

export function dataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    qualifier: cdktf.listMapper(dataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToTerraform, false)(struct!.qualifier),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierList",
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

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThan | cdktf.IResolvable | undefined) {
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

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // qualifier - computed: true, optional: true, required: false
  private _qualifier = new DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#value DataPanosApplication#value}
  */
  readonly value?: string;
}

export function dataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable): any {
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

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierList extends cdktf.ComplexList {
  public internalValue? : DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable

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
  public get(index: number): DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference {
    return new DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#context DataPanosApplication#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#qualifier DataPanosApplication#qualifier}
  */
  readonly qualifier?: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#value DataPanosApplication#value}
  */
  readonly value?: number;
}

export function dataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    qualifier: cdktf.listMapper(dataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierToTerraform, false)(struct!.qualifier),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThan | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierList",
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

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThan | cdktf.IResolvable | undefined) {
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

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // qualifier - computed: true, optional: true, required: false
  private _qualifier = new DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanQualifier[] | cdktf.IResolvable) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#value DataPanosApplication#value}
  */
  readonly value?: string;
}

export function dataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable): any {
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

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierList extends cdktf.ComplexList {
  public internalValue? : DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable

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
  public get(index: number): DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference {
    return new DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#context DataPanosApplication#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#pattern DataPanosApplication#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#qualifier DataPanosApplication#qualifier}
  */
  readonly qualifier?: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable;
}

export function dataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    qualifier: cdktf.listMapper(dataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToTerraform, false)(struct!.qualifier),
  }
}


export function dataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierToHclTerraform, false)(struct!.qualifier),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatch | cdktf.IResolvable | undefined) {
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

  // context - computed: true, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // qualifier - computed: true, optional: true, required: false
  private _qualifier = new DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifierList(this, "qualifier", false);
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchQualifier[] | cdktf.IResolvable) {
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
export interface DataPanosApplicationSignatureAndConditionOrConditionOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#equal_to DataPanosApplication#equal_to}
  */
  readonly equalTo?: DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualTo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#greater_than DataPanosApplication#greater_than}
  */
  readonly greaterThan?: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThan;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#less_than DataPanosApplication#less_than}
  */
  readonly lessThan?: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThan;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#pattern_match DataPanosApplication#pattern_match}
  */
  readonly patternMatch?: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatch;
}

export function dataPanosApplicationSignatureAndConditionOrConditionOperatorToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equal_to: dataPanosApplicationSignatureAndConditionOrConditionOperatorEqualToToTerraform(struct!.equalTo),
    greater_than: dataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanToTerraform(struct!.greaterThan),
    less_than: dataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanToTerraform(struct!.lessThan),
    pattern_match: dataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchToTerraform(struct!.patternMatch),
  }
}


export function dataPanosApplicationSignatureAndConditionOrConditionOperatorToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrConditionOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equal_to: {
      value: dataPanosApplicationSignatureAndConditionOrConditionOperatorEqualToToHclTerraform(struct!.equalTo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualTo",
    },
    greater_than: {
      value: dataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanToHclTerraform(struct!.greaterThan),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThan",
    },
    less_than: {
      value: dataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanToHclTerraform(struct!.lessThan),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThan",
    },
    pattern_match: {
      value: dataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchToHclTerraform(struct!.patternMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosApplicationSignatureAndConditionOrConditionOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrConditionOperator | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrConditionOperator | cdktf.IResolvable | undefined) {
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

  // equal_to - computed: true, optional: true, required: false
  private _equalTo = new DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualToOutputReference(this, "equal_to");
  public get equalTo() {
    return this._equalTo;
  }
  public putEqualTo(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorEqualTo) {
    this._equalTo.internalValue = value;
  }
  public resetEqualTo() {
    this._equalTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equalTo.internalValue;
  }

  // greater_than - computed: true, optional: true, required: false
  private _greaterThan = new DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThanOutputReference(this, "greater_than");
  public get greaterThan() {
    return this._greaterThan;
  }
  public putGreaterThan(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorGreaterThan) {
    this._greaterThan.internalValue = value;
  }
  public resetGreaterThan() {
    this._greaterThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanInput() {
    return this._greaterThan.internalValue;
  }

  // less_than - computed: true, optional: true, required: false
  private _lessThan = new DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThanOutputReference(this, "less_than");
  public get lessThan() {
    return this._lessThan;
  }
  public putLessThan(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorLessThan) {
    this._lessThan.internalValue = value;
  }
  public resetLessThan() {
    this._lessThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanInput() {
    return this._lessThan.internalValue;
  }

  // pattern_match - computed: true, optional: true, required: false
  private _patternMatch = new DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatchOutputReference(this, "pattern_match");
  public get patternMatch() {
    return this._patternMatch;
  }
  public putPatternMatch(value: DataPanosApplicationSignatureAndConditionOrConditionOperatorPatternMatch) {
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
export interface DataPanosApplicationSignatureAndConditionOrCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#operator DataPanosApplication#operator}
  */
  readonly operator?: DataPanosApplicationSignatureAndConditionOrConditionOperator;
}

export function dataPanosApplicationSignatureAndConditionOrConditionToTerraform(struct?: DataPanosApplicationSignatureAndConditionOrCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: dataPanosApplicationSignatureAndConditionOrConditionOperatorToTerraform(struct!.operator),
  }
}


export function dataPanosApplicationSignatureAndConditionOrConditionToHclTerraform(struct?: DataPanosApplicationSignatureAndConditionOrCondition | cdktf.IResolvable): any {
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
      value: dataPanosApplicationSignatureAndConditionOrConditionOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionOperator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosApplicationSignatureAndConditionOrConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosApplicationSignatureAndConditionOrCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndConditionOrCondition | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // operator - computed: true, optional: true, required: false
  private _operator = new DataPanosApplicationSignatureAndConditionOrConditionOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: DataPanosApplicationSignatureAndConditionOrConditionOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class DataPanosApplicationSignatureAndConditionOrConditionList extends cdktf.ComplexList {
  public internalValue? : DataPanosApplicationSignatureAndConditionOrCondition[] | cdktf.IResolvable

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
  public get(index: number): DataPanosApplicationSignatureAndConditionOrConditionOutputReference {
    return new DataPanosApplicationSignatureAndConditionOrConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosApplicationSignatureAndCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#or_condition DataPanosApplication#or_condition}
  */
  readonly orCondition?: DataPanosApplicationSignatureAndConditionOrCondition[] | cdktf.IResolvable;
}

export function dataPanosApplicationSignatureAndConditionToTerraform(struct?: DataPanosApplicationSignatureAndCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    or_condition: cdktf.listMapper(dataPanosApplicationSignatureAndConditionOrConditionToTerraform, false)(struct!.orCondition),
  }
}


export function dataPanosApplicationSignatureAndConditionToHclTerraform(struct?: DataPanosApplicationSignatureAndCondition | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosApplicationSignatureAndConditionOrConditionToHclTerraform, false)(struct!.orCondition),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosApplicationSignatureAndConditionOrConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosApplicationSignatureAndConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosApplicationSignatureAndCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignatureAndCondition | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // or_condition - computed: true, optional: true, required: false
  private _orCondition = new DataPanosApplicationSignatureAndConditionOrConditionList(this, "or_condition", false);
  public get orCondition() {
    return this._orCondition;
  }
  public putOrCondition(value: DataPanosApplicationSignatureAndConditionOrCondition[] | cdktf.IResolvable) {
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

export class DataPanosApplicationSignatureAndConditionList extends cdktf.ComplexList {
  public internalValue? : DataPanosApplicationSignatureAndCondition[] | cdktf.IResolvable

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
  public get(index: number): DataPanosApplicationSignatureAndConditionOutputReference {
    return new DataPanosApplicationSignatureAndConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosApplicationSignature {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#and_condition DataPanosApplication#and_condition}
  */
  readonly andCondition?: DataPanosApplicationSignatureAndCondition[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#comment DataPanosApplication#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#name DataPanosApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#order_free DataPanosApplication#order_free}
  */
  readonly orderFree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#scope DataPanosApplication#scope}
  */
  readonly scope?: string;
}

export function dataPanosApplicationSignatureToTerraform(struct?: DataPanosApplicationSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_condition: cdktf.listMapper(dataPanosApplicationSignatureAndConditionToTerraform, false)(struct!.andCondition),
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    order_free: cdktf.booleanToTerraform(struct!.orderFree),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function dataPanosApplicationSignatureToHclTerraform(struct?: DataPanosApplicationSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_condition: {
      value: cdktf.listMapperHcl(dataPanosApplicationSignatureAndConditionToHclTerraform, false)(struct!.andCondition),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosApplicationSignatureAndConditionList",
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

export class DataPanosApplicationSignatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosApplicationSignature | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosApplicationSignature | cdktf.IResolvable | undefined) {
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

  // and_condition - computed: true, optional: true, required: false
  private _andCondition = new DataPanosApplicationSignatureAndConditionList(this, "and_condition", false);
  public get andCondition() {
    return this._andCondition;
  }
  public putAndCondition(value: DataPanosApplicationSignatureAndCondition[] | cdktf.IResolvable) {
    this._andCondition.internalValue = value;
  }
  public resetAndCondition() {
    this._andCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andConditionInput() {
    return this._andCondition.internalValue;
  }

  // comment - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: true
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

export class DataPanosApplicationSignatureList extends cdktf.ComplexList {
  public internalValue? : DataPanosApplicationSignature[] | cdktf.IResolvable

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
  public get(index: number): DataPanosApplicationSignatureOutputReference {
    return new DataPanosApplicationSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application panos_application}
*/
export class DataPanosApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosApplication to import
  * @param importFromId The id of the existing DataPanosApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/application panos_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_application',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
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
    this._disableOverride = config.disableOverride;
    this._evasiveBehavior = config.evasiveBehavior;
    this._fileTypeIdent = config.fileTypeIdent;
    this._hasKnownVulnerability = config.hasKnownVulnerability;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._noAppidCaching = config.noAppidCaching;
    this._parentApp = config.parentApp;
    this._pervasiveUse = config.pervasiveUse;
    this._proneToMisuse = config.proneToMisuse;
    this._risk = config.risk;
    this._signature.internalValue = config.signature;
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

  // able_to_transfer_file - computed: true, optional: true, required: false
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

  // alg_disable_capability - computed: true, optional: true, required: false
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

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // consume_big_bandwidth - computed: true, optional: true, required: false
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

  // data_ident - computed: true, optional: true, required: false
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

  // default - computed: true, optional: true, required: false
  private _default = new DataPanosApplicationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataPanosApplicationDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // disable_override - computed: true, optional: true, required: false
  private _disableOverride?: string; 
  public get disableOverride() {
    return this.getStringAttribute('disable_override');
  }
  public set disableOverride(value: string) {
    this._disableOverride = value;
  }
  public resetDisableOverride() {
    this._disableOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOverrideInput() {
    return this._disableOverride;
  }

  // evasive_behavior - computed: true, optional: true, required: false
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

  // file_type_ident - computed: true, optional: true, required: false
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

  // has_known_vulnerability - computed: true, optional: true, required: false
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

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosApplicationLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosApplicationLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // no_appid_caching - computed: true, optional: true, required: false
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

  // parent_app - computed: true, optional: true, required: false
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

  // pervasive_use - computed: true, optional: true, required: false
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

  // prone_to_misuse - computed: true, optional: true, required: false
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

  // risk - computed: true, optional: true, required: false
  private _risk?: number; 
  public get risk() {
    return this.getNumberAttribute('risk');
  }
  public set risk(value: number) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // signature - computed: true, optional: true, required: false
  private _signature = new DataPanosApplicationSignatureList(this, "signature", false);
  public get signature() {
    return this._signature;
  }
  public putSignature(value: DataPanosApplicationSignature[] | cdktf.IResolvable) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }

  // subcategory - computed: true, optional: true, required: false
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

  // tcp_half_closed_timeout - computed: true, optional: true, required: false
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

  // tcp_time_wait_timeout - computed: true, optional: true, required: false
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

  // tcp_timeout - computed: true, optional: true, required: false
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

  // technology - computed: true, optional: true, required: false
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

  // timeout - computed: true, optional: true, required: false
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

  // tunnel_applications - computed: true, optional: true, required: false
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

  // tunnel_other_application - computed: true, optional: true, required: false
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

  // udp_timeout - computed: true, optional: true, required: false
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

  // used_by_malware - computed: true, optional: true, required: false
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

  // virus_ident - computed: true, optional: true, required: false
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
      default: dataPanosApplicationDefaultToTerraform(this._default.internalValue),
      description: cdktf.stringToTerraform(this._description),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      evasive_behavior: cdktf.booleanToTerraform(this._evasiveBehavior),
      file_type_ident: cdktf.booleanToTerraform(this._fileTypeIdent),
      has_known_vulnerability: cdktf.booleanToTerraform(this._hasKnownVulnerability),
      location: dataPanosApplicationLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      no_appid_caching: cdktf.booleanToTerraform(this._noAppidCaching),
      parent_app: cdktf.stringToTerraform(this._parentApp),
      pervasive_use: cdktf.booleanToTerraform(this._pervasiveUse),
      prone_to_misuse: cdktf.booleanToTerraform(this._proneToMisuse),
      risk: cdktf.numberToTerraform(this._risk),
      signature: cdktf.listMapper(dataPanosApplicationSignatureToTerraform, false)(this._signature.internalValue),
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
        value: dataPanosApplicationDefaultToHclTerraform(this._default.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosApplicationDefault",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_override: {
        value: cdktf.stringToHclTerraform(this._disableOverride),
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
      has_known_vulnerability: {
        value: cdktf.booleanToHclTerraform(this._hasKnownVulnerability),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: dataPanosApplicationLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosApplicationLocation",
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
        value: cdktf.numberToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature: {
        value: cdktf.listMapperHcl(dataPanosApplicationSignatureToHclTerraform, false)(this._signature.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosApplicationSignatureList",
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
