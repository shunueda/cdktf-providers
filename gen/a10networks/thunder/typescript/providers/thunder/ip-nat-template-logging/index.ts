// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpNatTemplateLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'kernel': 0: Kernel; 'user': 1: User-level; 'mail': 2: Mail; 'daemon': 3: System daemons; 'security-authorization': 4: Security/authorization; 'syslog': 5: Syslog internal; 'line-printer': 6: Line printer; 'news': 7: Network news; 'uucp': 8: UUCP subsystem; 'cron': 9: Time-related; 'security-authorization-private': 10: Private security/authorization; 'ftp': 11: FTP; 'ntp': 12: NTP; 'audit': 13: Audit; 'alert': 14: Alert; 'clock': 15: Clock-related; 'local0': 16: Local use 0; 'local1': 17: Local use 1; 'local2': 18: Local use 2; 'local3': 19: Local use 3; 'local4': 20: Local use 4; 'local5': 21: Local use 5; 'local6': 22: Local use 6; 'local7': 23: Local use 7;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#facility IpNatTemplateLogging#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#id IpNatTemplateLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include the destination IP and port in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#include_destination IpNatTemplateLogging#include_destination}
  */
  readonly includeDestination?: number;
  /**
  * Include the IP and port of real server in logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#include_rip_rport IpNatTemplateLogging#include_rip_rport}
  */
  readonly includeRipRport?: number;
  /**
  * NAT logging template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#name IpNatTemplateLogging#name}
  */
  readonly name: string;
  /**
  * Set NAT logging service-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#service_group IpNatTemplateLogging#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#user_tag IpNatTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#uuid IpNatTemplateLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#log IpNatTemplateLogging#log}
  */
  readonly log?: IpNatTemplateLoggingLog;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#severity IpNatTemplateLogging#severity}
  */
  readonly severity?: IpNatTemplateLoggingSeverity;
  /**
  * source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#source_port IpNatTemplateLogging#source_port}
  */
  readonly sourcePort?: IpNatTemplateLoggingSourcePort;
}
export interface IpNatTemplateLoggingLog {
  /**
  * 'creation': Log creation of NAT mappgins; 'disable': Disable Log creation and deletion of NAT mappings;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#port_mappings IpNatTemplateLogging#port_mappings}
  */
  readonly portMappings?: string;
}

export function ipNatTemplateLoggingLogToTerraform(struct?: IpNatTemplateLoggingLogOutputReference | IpNatTemplateLoggingLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_mappings: cdktf.stringToTerraform(struct!.portMappings),
  }
}


export function ipNatTemplateLoggingLogToHclTerraform(struct?: IpNatTemplateLoggingLogOutputReference | IpNatTemplateLoggingLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_mappings: {
      value: cdktf.stringToHclTerraform(struct!.portMappings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpNatTemplateLoggingLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpNatTemplateLoggingLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappings = this._portMappings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpNatTemplateLoggingLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portMappings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portMappings = value.portMappings;
    }
  }

  // port_mappings - computed: false, optional: true, required: false
  private _portMappings?: string; 
  public get portMappings() {
    return this.getStringAttribute('port_mappings');
  }
  public set portMappings(value: string) {
    this._portMappings = value;
  }
  public resetPortMappings() {
    this._portMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingsInput() {
    return this._portMappings;
  }
}
export interface IpNatTemplateLoggingSeverity {
  /**
  * 'emergency': 0: Emergency; 'alert': 1: Alert; 'critical': 2: Critical; 'error': 3: Error; 'warning': 4: Warning; 'notice': 5: Notice; 'informational': 6: Informational; 'debug': 7: Debug;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#severity_string IpNatTemplateLogging#severity_string}
  */
  readonly severityString?: string;
  /**
  * Logging severity level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#severity_val IpNatTemplateLogging#severity_val}
  */
  readonly severityVal?: number;
}

export function ipNatTemplateLoggingSeverityToTerraform(struct?: IpNatTemplateLoggingSeverityOutputReference | IpNatTemplateLoggingSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity_string: cdktf.stringToTerraform(struct!.severityString),
    severity_val: cdktf.numberToTerraform(struct!.severityVal),
  }
}


export function ipNatTemplateLoggingSeverityToHclTerraform(struct?: IpNatTemplateLoggingSeverityOutputReference | IpNatTemplateLoggingSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity_string: {
      value: cdktf.stringToHclTerraform(struct!.severityString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_val: {
      value: cdktf.numberToHclTerraform(struct!.severityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpNatTemplateLoggingSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpNatTemplateLoggingSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severityString !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityString = this._severityString;
    }
    if (this._severityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityVal = this._severityVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpNatTemplateLoggingSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._severityString = undefined;
      this._severityVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._severityString = value.severityString;
      this._severityVal = value.severityVal;
    }
  }

  // severity_string - computed: false, optional: true, required: false
  private _severityString?: string; 
  public get severityString() {
    return this.getStringAttribute('severity_string');
  }
  public set severityString(value: string) {
    this._severityString = value;
  }
  public resetSeverityString() {
    this._severityString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityStringInput() {
    return this._severityString;
  }

  // severity_val - computed: false, optional: true, required: false
  private _severityVal?: number; 
  public get severityVal() {
    return this.getNumberAttribute('severity_val');
  }
  public set severityVal(value: number) {
    this._severityVal = value;
  }
  public resetSeverityVal() {
    this._severityVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityValInput() {
    return this._severityVal;
  }
}
export interface IpNatTemplateLoggingSourcePort {
  /**
  * Use any source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#any IpNatTemplateLogging#any}
  */
  readonly any?: number;
  /**
  * Set source port for sending NAT syslogs (default: 514)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#source_port_num IpNatTemplateLogging#source_port_num}
  */
  readonly sourcePortNum?: number;
}

export function ipNatTemplateLoggingSourcePortToTerraform(struct?: IpNatTemplateLoggingSourcePortOutputReference | IpNatTemplateLoggingSourcePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.numberToTerraform(struct!.any),
    source_port_num: cdktf.numberToTerraform(struct!.sourcePortNum),
  }
}


export function ipNatTemplateLoggingSourcePortToHclTerraform(struct?: IpNatTemplateLoggingSourcePortOutputReference | IpNatTemplateLoggingSourcePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.numberToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port_num: {
      value: cdktf.numberToHclTerraform(struct!.sourcePortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpNatTemplateLoggingSourcePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpNatTemplateLoggingSourcePort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._sourcePortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortNum = this._sourcePortNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpNatTemplateLoggingSourcePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._any = undefined;
      this._sourcePortNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._any = value.any;
      this._sourcePortNum = value.sourcePortNum;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: number; 
  public get any() {
    return this.getNumberAttribute('any');
  }
  public set any(value: number) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // source_port_num - computed: false, optional: true, required: false
  private _sourcePortNum?: number; 
  public get sourcePortNum() {
    return this.getNumberAttribute('source_port_num');
  }
  public set sourcePortNum(value: number) {
    this._sourcePortNum = value;
  }
  public resetSourcePortNum() {
    this._sourcePortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortNumInput() {
    return this._sourcePortNum;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging thunder_ip_nat_template_logging}
*/
export class IpNatTemplateLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_nat_template_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpNatTemplateLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpNatTemplateLogging to import
  * @param importFromId The id of the existing IpNatTemplateLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpNatTemplateLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_nat_template_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_nat_template_logging thunder_ip_nat_template_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpNatTemplateLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: IpNatTemplateLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_nat_template_logging',
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
    this._facility = config.facility;
    this._id = config.id;
    this._includeDestination = config.includeDestination;
    this._includeRipRport = config.includeRipRport;
    this._name = config.name;
    this._serviceGroup = config.serviceGroup;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._log.internalValue = config.log;
    this._severity.internalValue = config.severity;
    this._sourcePort.internalValue = config.sourcePort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
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

  // include_destination - computed: false, optional: true, required: false
  private _includeDestination?: number; 
  public get includeDestination() {
    return this.getNumberAttribute('include_destination');
  }
  public set includeDestination(value: number) {
    this._includeDestination = value;
  }
  public resetIncludeDestination() {
    this._includeDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDestinationInput() {
    return this._includeDestination;
  }

  // include_rip_rport - computed: false, optional: true, required: false
  private _includeRipRport?: number; 
  public get includeRipRport() {
    return this.getNumberAttribute('include_rip_rport');
  }
  public set includeRipRport(value: number) {
    this._includeRipRport = value;
  }
  public resetIncludeRipRport() {
    this._includeRipRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRipRportInput() {
    return this._includeRipRport;
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

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // log - computed: false, optional: true, required: false
  private _log = new IpNatTemplateLoggingLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: IpNatTemplateLoggingLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new IpNatTemplateLoggingSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: IpNatTemplateLoggingSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort = new IpNatTemplateLoggingSourcePortOutputReference(this, "source_port");
  public get sourcePort() {
    return this._sourcePort;
  }
  public putSourcePort(value: IpNatTemplateLoggingSourcePort) {
    this._sourcePort.internalValue = value;
  }
  public resetSourcePort() {
    this._sourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      facility: cdktf.stringToTerraform(this._facility),
      id: cdktf.stringToTerraform(this._id),
      include_destination: cdktf.numberToTerraform(this._includeDestination),
      include_rip_rport: cdktf.numberToTerraform(this._includeRipRport),
      name: cdktf.stringToTerraform(this._name),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      log: ipNatTemplateLoggingLogToTerraform(this._log.internalValue),
      severity: ipNatTemplateLoggingSeverityToTerraform(this._severity.internalValue),
      source_port: ipNatTemplateLoggingSourcePortToTerraform(this._sourcePort.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
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
      include_destination: {
        value: cdktf.numberToHclTerraform(this._includeDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_rip_rport: {
        value: cdktf.numberToHclTerraform(this._includeRipRport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      log: {
        value: ipNatTemplateLoggingLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpNatTemplateLoggingLogList",
      },
      severity: {
        value: ipNatTemplateLoggingSeverityToHclTerraform(this._severity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpNatTemplateLoggingSeverityList",
      },
      source_port: {
        value: ipNatTemplateLoggingSourcePortToHclTerraform(this._sourcePort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpNatTemplateLoggingSourcePortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
